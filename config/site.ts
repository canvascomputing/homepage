export interface SiteConfig {
  // Brand Information
  name: string;
  description: string;
  tagline: string;
  
  // URLs
  url: string;
  githubUrl: string;
  huggingFaceUrl: string;
  websiteUrl: string;
  
  // Colors
  colors: {
    primary: string;      // Main brand color (blue tone)
    secondary: string;    // Secondary color (dark tone)
    background: string;   // Main background color
    white: string;        // White/light color
    text: string;         // Primary text color
    textLight: string;    // Light text color
  };
  
  // Team Information
  founder: {
    name: string;
    title: string;
    bio: string;
  };
  
  // Content
  content: {
    hero: {
      title: string;
      subtitle: string;
    };
    mission: {
      title: string;
      description: string[];
      features: Array<{
        title: string;
        description: string;
      }>;
    };
    security: {
      title: string;
      solutions: Array<{
        title: string;
        description: string;
        icon: string;
      }>;
    };
    contact: {
      title: string;
      description: string;
      buttons: {
        github: string;
        huggingface: string;
      };
    };
    footer: {
      copyright: string;
      tagline: string;
    };
  };
}

export const siteConfig: SiteConfig = {
  name: "Canvas Computing",
  description: "European engineering project building open AI-based security software for protecting freedom. Creating open-source tools for threat detection and analysis.",
  tagline: "Security for Everyone",
  
  url: "https://canvascomputing.org",
  githubUrl: "https://github.com/canvascomputing",
  huggingFaceUrl: "https://huggingface.co/canvascomputing", 
  websiteUrl: "https://canvascomputing.org",
  
  colors: {
    primary: "#3D709B",      // Blue tone
    secondary: "#374049",    // Dark tone  
    background: "#F1ECE2",   // Main background
    white: "#F1ECE2",        // White/light
    text: "#1a1a1a",         // Primary text
    textLight: "#666666",    // Light text
  },
  
  founder: {
    name: "Marvin Schirrmacher",
    title: "Founder & Lead Developer",
    bio: "Leading Canvas Computing's mission from Europe to develop AI-powered security solutions that protect freedom worldwide. Committed to open-source development and transparent security practices with a focus on European values of freedom."
  },
  
  content: {
    hero: {
      title: "Security for Everyone",
      subtitle: "Building AI-based security software to protect our freedom"
    },
    
    mission: {
      title: "Our Mission",
      description: [
        "Canvas Computing is a European project building open-source AI security tools. We believe security software should be transparent and accessible to everyone. We focus on developing practical tools that help developers and organizations protect their systems from emerging threats. Everything we build is open-source and freely available."
      ],
      features: [
        {
          title: "Open Source First",
          description: "Transparent, auditable security solutions"
        },
        {
          title: "AI-Powered Defense", 
          description: "Advanced machine learning for threat detection"
        },
        {
          title: "Democracy Protection",
          description: "Safeguarding electoral and civic infrastructure"
        }
      ]
    },
    
    malwi: {
      title: "malwi - AI Python Malware Scanner",
      description: "malwi is an AI-powered Python malware scanner designed to detect malicious code in software projects, helping developers proactively identify potential security risks in their dependencies.",
      githubUrl: "https://github.com/canvascomputing/malwi",
      features: [
        {
          title: "🛡️ AI-Powered Python Malware Detection",
          description: "Leverages advanced AI to identify malicious code in Python projects with high accuracy."
        },
        {
          title: "⚡ Lightning-Fast Codebase Scanning",
          description: "Scans entire repositories in seconds, so you can focus on development—not security worries."
        },
        {
          title: "🔒 100% Offline & Private",
          description: "Your code never leaves your machine. Full control, zero data exposure."
        },
        {
          title: "💰 Free & Open-Source",
          description: "No hidden costs. Built on transparent research and openly available data."
        },
        {
          title: "🇪🇺 Developed in the EU",
          description: "Committed to open-source principles and European data standards."
        }
      ],
      stats: {
        accuracy: "99.80%",
        samples: "598,540",
        f1Score: "0.9521",
        precision: "0.9832"
      }
    },
    
    contact: {
      title: "Get Involved",
      description: "Join us in building a more secure digital future for free societies. Contribute to our open-source projects or reach out to discuss collaboration opportunities.",
      buttons: {
        github: "Contribute on GitHub",
        huggingface: "View Models"
      }
    },
    
    footer: {
      copyright: "© 2025 Canvas Computing - European Hackers",
      tagline: "Building AI-based security software to protect our freedom"
    }
  }
};