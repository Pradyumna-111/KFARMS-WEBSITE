export interface CarouselItem {
  title: string;
  image?: string;
}

export interface PartnershipFeature {
  title: string;
  description: string;
}

export interface CropCategory {
  name: string;
  crops: string[];
}

export interface KeyComponent {
  title: string;
  iconName: string;
}

export interface ServiceSection {
  title: string;
  description: string;
  imagePosition: "left" | "right";
  buttonText?: string;
  buttonLink?: string;
  fullWidth?: boolean;
  subtitle?: string;
  showProcessGallery?: boolean;
  largeHeading?: boolean;
  showCarousel?: boolean;
  carouselItems?: CarouselItem[];
  centerHeading?: boolean;
  showPartnershipModel?: boolean;
  partnershipFeatures?: PartnershipFeature[];
  footerText?: string;
  bulletPoints?: string[];
  showCropTable?: boolean;
  cropCategories?: CropCategory[];
  cropFooterText?: string;
  showKeyComponents?: boolean;
  keyComponents?: KeyComponent[];
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tagline?: string;
  sections?: ServiceSection[];
  whyItMatters?: string;
  contactQuote?: string;
  heroButtonText?: string;
  heroButtonLink?: string;
}

export const services: Service[] = [
  {
    slug: "site-design-planning",
    title: "Site Design & Planning",
    shortDescription:
      "Expert land utilization and greenhouse structure planning for optimal farm performance.",
    fullDescription:
      "Our comprehensive site design and planning service ensures your farm is optimized for maximum yield and efficiency. We conduct detailed site assessments, evaluate environmental factors, and create customized layouts that maximize land utilization while minimizing operational challenges.",
    tagline: "Laying the foundation for your farm's success",
    sections: [
      {
        title: "Site Design & Planning",
        description:
          "Every great farm begins with a smart plan. Our site design and planning service ensures your land is optimized for polyhouse construction and hydroponic farming right from day one.\n\nBefore construction begins, the most important step is understanding the land. Our team conducts a site audit to assess your location's unique conditions, including soil, water, sunlight, wind patterns, and accessibility. Based on this, we craft a detailed project report (DPR) tailored to your specific needs, ensuring that every square foot of your farm is designed for optimal productivity and long-term efficiency.",
        imagePosition: "left",
      },
      {
        title: "Site Audit",
        description:
          "The site audit is the groundwork for success. During this stage, we carefully evaluate your land to determine:\n\n✓ Suitability for polyhouse construction\n✓ Water availability and irrigation potential\n✓ Climate factors and environmental conditions\n✓ Power access and logistics\n\nBy identifying strengths and challenges upfront, we ensure that the farm design aligns with the land's natural potential, avoiding costly mistakes later.",
        imagePosition: "right",
        buttonText: "Fill the Site Audit Form",
        buttonLink: "#",
      },
      {
        title: "Detailed Project Report (DPR)",
        description:
          "Once the audit is complete, we prepare a comprehensive DPR — a roadmap that outlines every detail of your future farm. This report includes the polyhouse layout, hydroponic system design, cost estimates, timelines, and expected ROI. It serves as a crystal-clear guide, helping you visualize the project before construction even begins.",
        imagePosition: "left",
      },
    ],
    whyItMatters:
      "Skipping proper design and planning often leads to inefficiencies, higher costs, and underperforming farms. With our process, you don't just get a structure — you get a farm that's future-ready, scalable, and optimized for profits.",
    contactQuote:
      "Great farms don't happen by chance. They're designed. Let's plan yours together.",
  },
  {
    slug: "turnkey-setup",
    title: "Turnkey Setup",
    shortDescription:
      "Complete farm design, construction, and operational handover — ready to grow.",
    fullDescription:
      "From blueprint to harvest-ready, our turnkey setup service handles every aspect of your farm build.",
    tagline: "from bare land to thriving polyhouse farms",
    sections: [
      {
        title: "Turnkey Setup",
        description:
          "Our turnkey farm setup covers everything from polyhouse construction to advanced hydroponic systems. We design, build, and hand over farms that are ready to grow from day one.\n\nSetting up a farm is complex — but it doesn't have to be overwhelming. With our turnkey service, you don't just get structures and systems, you get a **complete farm ecosystem**. From designing the layout to constructing polyhouses and installing hydroponic technology, we take care of every detail so you can focus on results.",
        imagePosition: "left",
        fullWidth: true,
      },
      {
        title: "The Journey [Process]",
        subtitle: "Top Services",
        description:
          "It all begins with planning. We study your land and create detailed designs for the polyhouse layout and hydroponic systems that best fit your goals. Once the plan is finalized, construction begins. Our team builds strong, climate-controlled polyhouses designed for durability and efficiency.\n\nNext comes the heart of the system — hydroponics. We install growing channels, nutrient delivery systems, water recirculation setups, and automation units to make sure every plant gets exactly what it needs to grow. Alongside this, we set up fertigation, irrigation, and power systems, ensuring that your farm is fully integrated and easy to manage.\n\nFinally, once construction and installation are complete, we provide hands-on training so that you and your team can confidently run your new farm. By the time we hand it over, you have a modern, fully operational polyhouse hydroponic farm — ready to produce from day one.",
        imagePosition: "left",
        fullWidth: true,
        showProcessGallery: true,
      },
      {
        title: "Types of Polyhouses We Build",
        description:
          "Every farm has unique needs, and choosing the right polyhouse design is the foundation of success. We specialize in constructing different types of polyhouses, each engineered for specific crops, climates, and business goals:",
        imagePosition: "left",
        fullWidth: true,
        largeHeading: true,
        showCarousel: true,
        carouselItems: [
          { title: "Naturally Ventilated Polyhouse" },
          { title: "Fan & Pad Polyhouse" },
          { title: "Climate-Controlled Polyhouse" },
          { title: "Shade Net House" },
          { title: "Tunnel Polyhouse" },
        ],
      },
      {
        title: "Key Components We Include",
        description:
          "Our turnkey solutions ensure your polyhouse is fully equipped with all essential components for a sustainable and productive farm:",
        imagePosition: "left",
        fullWidth: true,
        centerHeading: true,
        largeHeading: true,
        showKeyComponents: true,
        keyComponents: [
          { title: "Strong galvanized iron (GI) framework", iconName: "IconGIFramework" },
          { title: "UV-stabilized cladding sheets and shading nets", iconName: "IconCladdingSheets" },
          { title: "Cooling systems (fans, pads, ventilation setups)", iconName: "IconCoolingSystems" },
          { title: "Irrigation and fertigation systems", iconName: "IconIrrigationSystems" },
          { title: "Hydroponic channels", iconName: "IconHydroponicChannels" },
          { title: "Power and backup solutions", iconName: "IconPowerBackup" },
        ],
      },
    ],
    contactQuote:
      "From design to harvest-ready. We handle everything so you can focus on growing.",
  },
  {
    slug: "farm-management",
    title: "Farm Management",
    shortDescription:
      "Ongoing crop operations support to keep your farm running smoothly.",
    fullDescription:
      "Our farm management service provides continuous support for day-to-day crop operations.",
    tagline: "From Setup to Success — Seamless Farm Management with Kamala Farms",
    heroButtonText: "Contact Us",
    heroButtonLink: "/contact",
    sections: [
      {
        title: "Farm Management",
        description:
          "We don't just build your farm, we help it grow. Our AMC and Buyback programs ensure your hydroponic journey continues smoothly — from setup, to maintenance, to market.",
        imagePosition: "left",
        fullWidth: true,
      },
      {
        title: "Our End-to-End Partnership Model",
        description: "",
        imagePosition: "left",
        fullWidth: true,
        centerHeading: true,
        largeHeading: true,
        showPartnershipModel: true,
        partnershipFeatures: [
          {
            title: "Farm Setup",
            description: "Design & build your polyhouse or hydroponic system, customized to your land and crop.",
          },
          {
            title: "Annual Maintenance Contract (AMC)",
            description: "We take care of operations and maintenance — from crop monitoring to nutrient management — ensuring consistent yield and smooth functioning of your farm.",
          },
          {
            title: "Second Crop Cycle Management",
            description: "With our experienced farm management team, we optimize the second cycle performance, implementing data-driven strategies for better growth and efficiency.",
          },
          {
            title: "Profit Sharing / Buyback Option",
            description: "At harvest, you can choose to market your produce independently or through Kamala Farms' buyback support — ensuring fair pricing and access to established buyer networks.",
          },
        ],
        footerText: "Our turnkey solutions ensure your polyhouse is fully equipped with all productive farm:",
      },
      {
        title: "Why This Model Works",
        description:
          "✓ Reduces operational stress for farm owners\n✓ Ensures long-term sustainability and consistent output\n✓ Keeps farms aligned with current market trends\n✓ Offers flexibility — you choose how involved you want to be",
        imagePosition: "right",
      },
    ],
    contactQuote:
      "A well-managed farm is a profitable farm. Let's keep yours thriving.",
  },
  {
    slug: "training",
    title: "Training & Capacity Building",
    shortDescription:
      "Comprehensive farmer skill development programs for modern agriculture.",
    fullDescription:
      "We offer hands-on training programs covering hydroponics, protected cultivation, and crop management.",
    tagline: "Learn Hydroponics Where It Happens — On the Farm",
    sections: [
      {
        title: "Webinars & Knowledge Sessions",
        description:
          "We frequently invite **industry experts, researchers, and entrepreneurs** to share insights on emerging trends, business models, and technological innovations in hydroponics. These webinars ensure you always stay updated with the latest in the industry.",
        imagePosition: "left",
        fullWidth: true,
      },
      {
        title: "Associated Partners",
        description:
          "Our training programs are backed by collaborations with leading agricultural and research institutions:",
        imagePosition: "left",
        fullWidth: true,
      },
    ],
    contactQuote:
      "Knowledge is power. Let's build the expertise for your farm's success.",
  },
  {
    slug: "contract-farming",
    title: "Contract Farming & Buyback",
    shortDescription:
      "Market-assured partnership models with guaranteed buyback agreements.",
    fullDescription:
      "Our contract farming program provides farmers with market assurance through guaranteed buyback agreements.",
    tagline: "Guaranteed markets for your hydroponic produce",
    sections: [
      {
        title: "Contract Farming and Buyback",
        description:
          "For large-scale projects (10 acres and above), we offer contract farming and buyback agreements that guarantee markets for your produce. You focus on growing, while we take care of selling.\n\nOne of the biggest challenges in agriculture is finding reliable buyers. With our contract farming and buyback programs, you don't have to worry about markets or unsold produce. We provide assured purchase agreements for hydroponic crops, making your investment more secure and profitable.\n\nThis model is especially designed for investors and entrepreneurs who want to establish commercial-scale hydroponic farms of 10 acres or more. By partnering with us, you not only get the advantage of our farming expertise but also access to our established buyer network.",
        imagePosition: "left",
      },
      {
        title: "How Contract Farming Works",
        description:
          "We begin by helping you select the right crops based on demand, climate, and profitability. Once the farm is operational, our team supports you in maintaining quality standards so the produce meets buyer requirements. In return, we commit to purchasing your harvest under a pre-agreed buyback contract.\n\nThis ensures:",
        imagePosition: "right",
        bulletPoints: [
          "Assured markets for your produce",
          "Reduced risks of fluctuating prices",
          "Transparent terms and agreements",
          "Steady revenue streams for large-scale farms",
        ],
      },
      {
        title: "Why 10 Acres and Above",
        description:
          "Hydroponics requires a market-driven approach. While smaller farms can sell directly to local buyers, commercial-scale projects (10+ acres) produce volumes that need guaranteed outlets. Our buyback program is structured to match these volumes, ensuring your produce is absorbed into wholesale markets, retail chains, and bulk buyers.",
        imagePosition: "left",
      },
      {
        title: "Why Choose Us as Your Buyback Partner",
        description:
          "**Strong Buyer Network:** We work with wholesale distributors, modern retailers, and institutional buyers.\n\n**Fair Pricing:** Transparent pricing models ensure both farmers and buyers benefit.\n\n**Quality Assurance:** Support with maintaining global standards of hydroponic produce.\n\n**Long-Term Partnership:** Beyond buyback, we guide you in scaling, diversifying crops, and entering new markets.",
        imagePosition: "right",
      },
    ],
    contactQuote:
      "Ready to build your dream farm? Let’s design, construct, and grow it together.",
  },
  {
    slug: "subsidy-support",
    title: "Subsidy Support",
    shortDescription:
      "Guidance on government agricultural schemes and subsidy applications.",
    fullDescription:
      "Navigate the complex landscape of government agricultural subsidies and schemes with our expert guidance.",
    tagline: "From Bare Land to Thriving Polyhouse Farms",
    sections: [
      {
        title: "Subsidy",
        description:
          "**Hydroponic Farming Subsidy – NHB Scheme**\n\nStart your hydroponic farm with government support. Kamala Farms guides you through every step to avail up to 40% subsidy on modern hydroponic systems.",
        imagePosition: "left",
        fullWidth: true,
      },
      {
        title: "What is the NHB Subsidy?",
        description:
          "The **National Horticulture Board (NHB)** provides financial assistance for protected cultivation, including hydroponic farming.\n\n**Subsidy Rate:**\n✓ **General Areas:** Up to **40% of project cost** (max ₹30 lakh)\n✓ **Hilly & Scheduled Areas:** Up to **50% of project cost** (max ₹37.5 lakh)\n✓ Encourages adoption of **high-value**, **fast-growing crops**\n✓ Eligible for hydroponics, aeroponics, and advanced protected cultivation systems\n✓ Tip: Higher subsidy rates apply in hilly and tribal regions.",
        imagePosition: "left",
      },
      {
        title: "Eligible Components & Infrastructure",
        description:
          "The NHB scheme covers essential hydroponic farming components:\n\n• **Hydroponic Systems:** Polybags, NFT, DFT, aeroponics setups\n• **Protected Cultivation:** Shade net houses, greenhouses, walk-in tunnels\n• **Automation & Technology:** Sensor-based fertigation, climate control systems\n• **Add-ons:** Anti-bird/anti-hail nets, weed mats, solar fencing\n• **Planting Material:** High-value vegetables, herbs, and leafy greens",
        imagePosition: "left",
      },
      {
        title: "Suitable Crops for Hydroponics",
        description:
          "Hydroponic systems are ideal for fast-growing, high-demand crops:",
        imagePosition: "left",
        showCropTable: true,
        cropCategories: [
          { name: "Leafy Greens", crops: ["Lettuce", "Spinach", "Kale", "Arugula"] },
          { name: "Herbs", crops: ["Basil", "Mint", "Cilantro", "Parsley"] },
          { name: "Microgreens", crops: ["Radish", "Broccoli", "Mustard", "Sunflower"] },
          { name: "Fruiting Vegetables", crops: ["Tomato", "Cucumber", "Pepper", "Strawberry"] },
        ],
        cropFooterText: "These crops thrive in soil-less systems and ensure faster returns on investment.",
      },
    ],
    contactQuote:
      "Government support unlocks your farm's potential. Let's get you the funding you deserve.",
  },
  {
    slug: "recycling",
    title: "Recycling",
    shortDescription:
      "Sustainable plastic recycling solutions for agricultural operations.",
    fullDescription:
      "Our recycling service addresses the environmental impact of agricultural plastics.",
    contactQuote:
      "Sustainable farming starts with responsible waste management.",
  },
  {
    slug: "soil-farming",
    title: "Soil Farming",
    shortDescription:
      "Traditional earth-based cultivation methods with modern techniques.",
    fullDescription:
      "Combining traditional soil farming wisdom with modern agricultural science, we help farmers optimize their soil-based cultivation.",
    contactQuote:
      "Healthy soil, healthy crops, healthy profits. Let's start with the foundation.",
  },
];



 