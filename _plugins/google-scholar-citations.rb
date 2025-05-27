require "active_support/all"
require 'nokogiri'
require 'open-uri'
require 'yaml'
require 'fileutils'

module Helpers
  extend ActiveSupport::NumberHelper
end

module Jekyll
  class GoogleScholarCitationsTag < Liquid::Tag
    CACHE_FILE = "_data/citations.yml"
    CACHE_EXPIRY_DAYS = 7 # ⏳ Change this to adjust age limit

    # Load existing cache
    Citations = File.exist?(CACHE_FILE) ? YAML.load_file(CACHE_FILE) || {} : {}

    def initialize(tag_name, params, tokens)
      super
      splitted = params.split(" ").map(&:strip)
      @scholar_id = splitted[0]
      @article_id = splitted[1]
    end

    def render(context)
      article_id = context[@article_id.strip]
      scholar_id = context[@scholar_id.strip]
      article_url = "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=#{scholar_id}&citation_for_view=#{scholar_id}:#{article_id}"

      now = Time.now
      cached = GoogleScholarCitationsTag::Citations[article_id]

      # If cache is fresh, use it
      if cached && cached["timestamp"] && (Time.parse(cached["timestamp"]) + CACHE_EXPIRY_DAYS.days > now)
        return cached["count"]
      end

      citation_count = "N/A"

      begin
        sleep(6)  # delay to avoid rate limiting

        doc = Nokogiri::HTML(URI.open(article_url, "User-Agent" => "Ruby/#{RUBY_VERSION}"))

        cited_by_text = doc.at('meta[name="description"]')&.[]('content') ||
                        doc.at('meta[property="og:description"]')&.[]('content')

        if cited_by_text
          matches = cited_by_text.match(/Cited by (\d+[,\d]*)/)
          if matches
            raw_count = matches[1].delete(',').to_i
            citation_count = Helpers.number_to_human(raw_count, format: '%n%u', precision: 2, units: { thousand: 'K', million: 'M', billion: 'B' })
          end
        end
      rescue Exception => e
        puts "Error fetching citation count for #{article_id} in #{article_url}: #{e.class} - #{e.message}"
      end

      # Save to cache
      GoogleScholarCitationsTag::Citations[article_id] = {
        "count" => citation_count,
        "timestamp" => now.iso8601
      }

      # Write updated cache to file
      FileUtils.mkdir_p(File.dirname(CACHE_FILE))
      File.write(CACHE_FILE, GoogleScholarCitationsTag::Citations.to_yaml)

      return citation_count
    end
  end
end

Liquid::Template.register_tag('google_scholar_citations', Jekyll::GoogleScholarCitationsTag)
