// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications in Conference Proceedings and Workshops",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research-areas",
          title: "Research Areas",
          description: "My current and past research interests.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Coming Soon...",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "news-our-5g-carrier-aggregation-paper-got-accepted-at-sigcomm-2024-emoji-sparkles",
          title: 'Our 5G Carrier Aggregation paper got accepted at SIGCOMM 2024 emoji! :sparkles:.',
          description: "",
          section: "News",},{id: "news-our-5g-mid-band-paper-got-accepted-at-sigcomm-2024-emoji-sparkles",
          title: 'Our  5G Mid-Band paper got accepted at SIGCOMM 2024 emoji! :sparkles:.',
          description: "",
          section: "News",},{id: "news-i-received-a-sigcomm-2024-travel-grant-sydney-australia-here-i-come-emoji-smile",
          title: 'I received a SIGCOMM 2024 Travel Grant. Sydney, Australia here I come emoji!...',
          description: "",
          section: "News",},{id: "news-our-paper-about-nsa-vs-sa-cp-performance-got-accepted-at-hotmobile-2025-emoji-sparkles",
          title: 'Our paper about NSA vs. SA CP Performance got accepted at HotMobile 2025...',
          description: "",
          section: "News",},{id: "news-i-received-a-hotmobile-2025-travel-grant-and-will-be-attending-the-conference-emoji-smile",
          title: 'I received a HotMobile 2025 Travel Grant and will be attending the conference...',
          description: "",
          section: "News",},{id: "news-our-paper-about-on-ai-ml-based-sensing-assisted-energy-amp-lt-a-amp-gt-got-accepted-at-vtc2025-fall-emoji-sparkles",
          title: 'Our paper about on AI/ML-based sensing-assisted energy&amp;amp;lt;/a&amp;amp;gt; got accepted at VTC2025-Fall emoji! :sparkles:....',
          description: "",
          section: "News",},{id: "projects-commercial-5g-measurements",
          title: 'Commercial 5G Measurements',
          description: "Focus -- 2019 marks the year for commercial 5G deployment rollouts. Compared to 4G LTE and its predecessors, 5G networks promise ultra-high data rates, low latency, and massive connectivity, but achieving these performance goals requires continuous measurement and optimization. 5G measurements play a crucial role in evaluating network performance, diagnosing issues, and ensuring that services meet the demands of modern applications, including autonomous vehicles, IoT networks, and industrial automation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-ai-driven-networking-and-intelligent-systems",
          title: 'AI-Driven Networking and Intelligent Systems',
          description: "Focus -- Incorporating AI/ML for network optimization, performance improvement, and intelligent software-defined infrastructures. Keywords -- AI/ML algorithms, network troubleshooting, service orchestration, and dynamic flow modeling.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-next-generation-networks",
          title: 'Next-Generation Networks',
          description: "Focus -- Designing and developing scalable, resilient, and secure 5G/NextG systems and Internet architectures while conducting in-depth performance measurement, traffic analysis, and cross-layer design improvements. This includes evaluating network performance, enhancing routing, and ensuring economic feasibility of next-generation infrastructures.  Keywords -- 5G/NextG networks, SDN, cloud/edge systems, service function chaining, performance measurement, traffic modeling, cross-layer design, and network manageability.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-iot-networks",
          title: 'IoT Networks',
          description: "As the plethora of Internet of Things (IoT) devices gradually make their way into our lives, several Cloud Service Providers (CSPs) have developed IoT gateway platforms (SDKs) that solely connects IoT devices to their respective cloud. Such commercial gateway are &#39;&#39;cloud-centric&#39;&#39;. We study and advance an edge-centric paradigm to IoT gateways. We exploit availability of multiple cloud services for &quot;best&quot; IoT data analytics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-network-security-robustness-and-management",
          title: 'Network Security, Robustness, and Management',
          description: "Focus -- AI and ML enhance computer security by detecting anomalies in model-driven telemetry data. By analyzing real-time network behavior, these systems identify threats, predict breaches, and minimize false alarms. This proactive approach strengthens cybersecurity, ensuring robust protection for critical infrastructure and enterprises.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-ai-ml-for-5g-networks",
          title: 'AI-ML for 5G Networks',
          description: "Focus -- AI and ML are transforming 5G networks by enabling intelligent automation, real-time optimization, and predictive analytics. These technologies enhance network performance, resource allocation, and interference management while reducing latency and improving reliability. ML-driven models analyze vast amounts of telemetry data to predict traffic patterns, optimize handovers, and detect anomalies for enhanced security and fault management. By integrating AI, 5G networks become more adaptive, self-optimizing, and resilient, paving the way for ultra-reliable connectivity in applications like IoT, autonomous systems, and smart cities.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%65%7A%65%75%30%30%31@%75%6D%6E.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/rostand-a-k-fezeu-049525bb", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-4698-5330", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=mq_AonwAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
