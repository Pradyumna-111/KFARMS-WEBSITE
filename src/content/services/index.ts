export interface CarouselItem {
  title: string;
  image?: string;
}

export interface PartnershipFeature {
  title: string;
  description: string;
  iconName?: string;
}

export interface CropCategory {
  name: string;
  crops: string[];
}

export interface KeyComponent {
  title: string;
  iconName: string;
}

export interface BulletItem {
  text: string;
  subPoints?: string[];
}

export interface ServiceSection {
  title: string;
  description: string;
  imagePosition: "left" | "right";
  image?: string;
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
  roundBullets?: boolean;
  footerNote?: string;
  numberedPoints?: boolean;
  bulletItems?: BulletItem[];
  showPartnerLogos?: boolean;
  showComingSoon?: boolean;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tagline?: string;
  heroImage?: string;
  contactImage?: string;
  sections?: ServiceSection[];
  whyItMatters?: string;
  contactQuote?: string;
  heroButtonText?: string;
  heroButtonLink?: string;
  heroOverlay?: boolean;
  compactSections?: boolean;
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
    heroImage: "/images/hero/site-design-planning-hero.jpg",
    contactImage: "/images/services/contact.jpg",
    sections: [
      {
        title: "Site Design & Planning",
        description:
          "Every great farm begins with a smart plan. Our site design and planning service ensures your land is optimized for polyhouse construction and hydroponic farming right from day one.\n\nBefore construction begins, the most important step is understanding the land. Our team conducts a site audit to assess your location's unique conditions, including soil, water, sunlight, wind patterns, and accessibility. Based on this, we craft a detailed project report (DPR) tailored to your specific needs, ensuring that every square foot of your farm is designed for optimal productivity and long-term efficiency.",
        imagePosition: "left",
        image: "/images/services/site-design-planning/site-design-planning.jpg",
      },
      {
        title: "Site Audit",
        description:
          "The site audit is the groundwork for success. During this stage, we carefully evaluate your land to determine:\n\nBy identifying strengths and challenges upfront, we ensure that the farm design aligns with the land's natural potential, avoiding costly mistakes later.",
        imagePosition: "right",
        image: "/images/services/site-design-planning/site-audit.jpg",
        bulletPoints: [
          "Suitability for polyhouse construction",
          "Water availability and irrigation potential",
          "Climate factors and environmental conditions",
          "Power access and logistics",
        ],
        buttonText: "Fill the Site Audit Form",
        buttonLink: "#",
      },
      {
        title: "Detailed Project Report (DPR)",
        description:
          "Once the audit is complete, we prepare a comprehensive DPR — a roadmap that outlines every detail of your future farm. This report includes the polyhouse layout, hydroponic system design, cost estimates, timelines, and expected ROI. It serves as a crystal-clear guide, helping you visualize the project before construction even begins.",
        imagePosition: "left",
        image: "/images/services/site-design-planning/detailed-project-report.jpg",
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
    heroImage: "/images/hero/turnkey-setup-hero.jpg",
    contactImage: "/images/services/contact.jpg",
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
          { title: "Naturally Ventilated Polyhouse", image: "/images/services/turnkey-setup/naturally-ventilated.png" },
          { title: "Fan & Pad Polyhouse", image: "/images/services/turnkey-setup/fan-and-pad.jpg" },
          { title: "Tunnel Polyhouse", image: "/images/services/turnkey-setup/tunnel-polyhouse.jpg" },
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
      "Ready to build your dream farm? Let's design, construct, and grow it together.",
  },
  {
    slug: "farm-management",
    title: "Farm Management",
    shortDescription:
      "Ongoing crop operations support to keep your farm running smoothly.",
    fullDescription:
      "Our farm management service provides continuous support for day-to-day crop operations.",
    tagline: "From Setup to Success — Seamless Farm Management with Kamala Farms",
    heroImage: "/images/hero/farm-management-hero.jpg",
    contactImage: "/images/services/contact.jpg",
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
            iconName: "IconFarmSetup",
          },
          {
            title: "Annual Maintenance Contract (AMC)",
            description: "We take care of operations and maintenance — from crop monitoring to nutrient management — ensuring consistent yield and smooth functioning of your farm.",
            iconName: "IconAMC",
          },
{
            title: "Profit Sharing / Buyback Option",
            description: "At harvest, you can choose to market your produce independently or through Kamala Farms' buyback support — ensuring fair pricing and access to established buyer networks.",
            iconName: "IconProfitSharing",
          },
        ],
        footerText: "Our turnkey solutions ensure your polyhouse is fully equipped with all productive farm:",
      },
      {
        title: "Why This Model Works",
        description: "",
        imagePosition: "right",
        image: "/images/services/farm-management/why-this-model-works.png",
        bulletPoints: [
          "Reduces operational stress for farm owners",
          "Ensures long-term sustainability and consistent output",
          "Keeps farms aligned with current market trends",
          "Offers flexibility — you choose how involved you want to be",
        ],
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
    heroImage: "/images/hero/training-hero.jpeg",
    contactImage: "/images/services/contact.jpg",
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
        showPartnerLogos: true,
        footerNote: "These partnerships allow us to provide access to exclusive learning materials, advanced research, and strong industry networks — ensuring our participants learn from the very best.",
      },
      {
        title: "Upcoming Programs",
        description:
          "Stay tuned for our **latest workshops, webinars, and farm visits.** This section is continuously updated so you can register for upcoming events and never miss a chance to learn.",
        imagePosition: "left",
        fullWidth: true,
        showComingSoon: true,
      },
    ],
    contactQuote:
      "Seats are limited. Join our weekend hydroponics training and take your first step toward the future of farming.",
  },
  {
    slug: "contract-farming",
    title: "Contract Farming & Buyback",
    shortDescription:
      "Market-assured partnership models with guaranteed buyback agreements.",
    fullDescription:
      "Our contract farming program provides farmers with market assurance through guaranteed buyback agreements.",
    tagline: "Guaranteed markets for your hydroponic produce",
    heroImage: "/images/hero/contract-farming-buyback-hero.jpg",
    contactImage: "/images/services/contact.jpg",
    sections: [
      {
        title: "Contract Farming and Buyback",
        description:
          "For large-scale projects (10 acres and above), we offer contract farming and buyback agreements that guarantee markets for your produce. You focus on growing, while we take care of selling.\n\nOne of the biggest challenges in agriculture is finding reliable buyers. With our contract farming and buyback programs, you don't have to worry about markets or unsold produce. We provide assured purchase agreements for hydroponic crops, making your investment more secure and profitable.\n\nThis model is especially designed for investors and entrepreneurs who want to establish commercial-scale hydroponic farms of 10 acres or more. By partnering with us, you not only get the advantage of our farming expertise but also access to our established buyer network.",
        imagePosition: "left",
        image: "/images/services/contract-farming/contract-farming-and-buyback.jpg",
      },
      {
        title: "How Contract Farming Works",
        description:
          "We begin by helping you select the right crops based on demand, climate, and profitability. Once the farm is operational, our team supports you in maintaining quality standards so the produce meets buyer requirements. In return, we commit to purchasing your harvest under a pre-agreed buyback contract.\n\nThis ensures:",
        imagePosition: "right",
        image: "/images/services/contract-farming/how-contract-farming-works.jpg",
        bulletPoints: [
          "**Assured markets for your produce**",
          "**Reduced risks of fluctuating prices**",
          "**Transparent terms and agreements**",
          "**Steady revenue streams for large-scale farms**",
        ],
      },
      {
        title: "Why 10 Acres and Above",
        description:
          "Hydroponics requires a market-driven approach. While smaller farms can sell directly to local buyers, commercial-scale projects (10+ acres) produce volumes that need guaranteed outlets. Our buyback program is structured to match these volumes, ensuring your produce is absorbed into wholesale markets, retail chains, and bulk buyers.",
        imagePosition: "left",
        image: "/images/services/contract-farming/why-10-acres-and-above.jpg",
      },
      {
        title: "Why Choose Us as Your Buyback Partner",
        description: "",
        imagePosition: "right",
        image: "/images/services/contract-farming/why-choose-us.jpg",
        bulletPoints: [
          "**Strong Buyer Network:** We work with wholesale distributors, modern retailers, and institutional buyers.",
          "**Fair Pricing:** Transparent pricing models ensure both farmers and buyers benefit.",
          "**Quality Assurance:** Support with maintaining global standards of hydroponic produce.",
          "**Long-Term Partnership:** Beyond buyback, we guide you in scaling, diversifying crops, and entering new markets.",
        ],
      },
    ],
    contactQuote:
      "Building big dreams? Let's make sure your harvest has a home.",
  },
  {
    slug: "subsidy-support",
    title: "Subsidy Support",
    shortDescription:
      "Guidance on government agricultural schemes and subsidy applications.",
    fullDescription:
      "Navigate the complex landscape of government agricultural subsidies and schemes with our expert guidance.",
    tagline: "From Bare Land to Thriving Polyhouse Farms",
    heroImage: "/images/hero/subsidy-hero.jpg",
    heroOverlay: false,
    compactSections: true,
    contactImage: "/images/services/contact.jpg",
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
          "The **National Horticulture Board (NHB)** provides financial assistance for protected cultivation, including hydroponic farming.",
        imagePosition: "left",
        roundBullets: true,
        bulletItems: [
          {
            text: "**Subsidy Rate:**",
            subPoints: [
              "**General Areas:** Up to **40% of project cost** (max ₹30 lakh)",
              "**Hilly & Scheduled Areas:** Up to **50% of project cost** (max ₹37.5 lakh)",
            ],
          },
          { text: "Encourages adoption of **high-value**, **fast-growing crops**" },
          { text: "Eligible for hydroponics, aeroponics, and advanced protected cultivation systems" },
        ],
        footerNote: "**Tip:** Higher subsidy rates apply in hilly and tribal regions.",
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
        fullWidth: true,
        imagePosition: "left",
        showCropTable: true,
        cropCategories: [
          { name: "Leafy Greens", crops: ["Lettuce", "Spinach", "Kale"] },
          { name: "Herbs", crops: ["Basil", "Mint", "Cilantro"] },
          { name: "Microgreens", crops: ["Radish", "Broccoli", "Mustard"] },
          { name: "Fruiting Vegetables", crops: ["Tomato", "Cucumber", "Pepper"] },
        ],
        cropFooterText: "These crops thrive in soil-less systems and ensure faster returns on investment.",
      },
      {
        title: "Recent Guideline Updates (2025)",
        description: "",
        imagePosition: "right",
        roundBullets: true,
        bulletPoints: [
          "Hydroponics, aeroponics, and automation systems **now officially eligible**",
          "All materials must comply with **Bureau of Indian Standards (BIS)**",
          "Beneficiaries are responsible for **maintenance of assets**",
          "**Project site or crop changes** without prior NHB approval may render the project ineligible",
        ],
      },
      {
        title: "How Kamala Farms Helps You",
        description: "We simplify the entire subsidy process for you:",
        imagePosition: "right",
        roundBullets: true,
        bulletPoints: [
          "**Project Planning:** Detailed Project Reports (DPR) for bank approvals",
          "**Application Support:** Guidance for NHB application and bank loan processing",
          "**Turnkey Hydroponics:** End-to-end setup ready for subsidy compliance",
          "**Subsidy Claim Assistance:** Documentation, inspections, and approvals",
        ],
        footerNote: "**CTA:** [Start Your Subsidy-Assisted Hydroponic Farm]",
      },
      {
        title: "Step-by-Step Application Process",
        description: "",
        imagePosition: "right",
        numberedPoints: true,
        bulletPoints: [
          "**Prepare DPR:** Outline project scope, finances, and implementation plan",
          "**Submit Application:** To NHB State Office or NHB Headquarters",
          "**Bank Appraisal:** Secure term loan for project funding",
          "**Obtain Approval:** NHB issues Letter of Intent (LoI)",
          "**Implement Project:** Set up hydroponic systems as per approved plan",
          "**Inspection & Subsidy Claim:** NHB & bank joint inspection, then submit claim",
        ],
      },
      {
        title: "IMPORTANT NOTES",
        description: "",
        imagePosition: "right",
        roundBullets: true,
        bulletItems: [
          { text: "Civil work cost **≤30%** of project cost" },
          { text: "All fund transfers are **digital via CDP Suraksha Portal**" },
          {
            text: "Recurring inputs (seeds/planting material) subsidy:",
            subPoints: [
              "**100%** first season",
              "**50%** second season",
              "**No subsidy** from third season onwards",
            ],
          },
          { text: "Prior approval is required for **crop or site changes**" },
        ],
        footerNote: "**CTA:**\n**[Start Your Subsidy-Assisted Hydroponic Farm]**\n\n**Unlock modern farming with government support and Kamala Farms' expertise.**",
      },
    ],
    contactQuote:
      "Ready to build your dream farm? Let's design, construct, and grow it together.",
  },
  {
    slug: "recycling",
    title: "Recycling",
    shortDescription:
      "Sustainable plastic recycling solutions for agricultural operations.",
    fullDescription:
      "Our recycling service addresses the environmental impact of agricultural plastics.",
    tagline: "Turning Plastic Waste into Sustainable Value",
    heroImage: "/images/hero/recycling-hero.jpg",
    contactImage: "/images/services/contact.jpg",
    sections: [
      {
        title: "Recycling",
        description:
          "We source mixed plastics from **aggregators**, **rag pickers**, and **collection centres**. Each consignment is weighed, logged, and verified for quality.",
        imagePosition: "left",
        image: "/images/services/recycling/recycling.jpg",
      },
      {
        title: "PET Bottle Baling",
        description:
          "PET bottles are compressed into **150–170 kg bales** after daily machine checks. Each bale is strapped, labeled, and stored on pallets in a dry covered space.",
        imagePosition: "right",
        image: "/images/services/recycling/pet-bottle-baling.jpg",
      },
      {
        title: "Mixed Plastic Handling",
        description:
          "Non-PET plastics are stored separately and sold in bulk to **recyclers and processors** without segregation.",
        imagePosition: "left",
        image: "/images/services/recycling/mixed-plastic-handling.jpg",
      },
      {
        title: "Sales and Dispatch",
        description:
          "We supply **PET bales to recyclers, fiber manufacturers, and exporters**, while mixed plastic is sold to smaller traders. Documentation and transport are arranged for every consignment.",
        imagePosition: "right",
        image: "/images/services/recycling/sales-and-dispatch.jpg",
      },
      {
        title: "Safety and Compliance",
        description:
          "Workers are equipped with **gloves, masks, aprons,** and trained in machine safety. Fire extinguishers and first-aid kits are always accessible.",
        imagePosition: "left",
        image: "/images/services/recycling/safety-and-compliance.jpg",
      },
      {
        title: "Quality Checks",
        description:
          "PET bales are inspected to ensure:",
        imagePosition: "right",
        image: "/images/services/recycling/quality-checks.jpg",
        bulletPoints: [
          "**<5% contamination**",
          "**Uniform weight & size**",
          "**Dry and moisture-free (export-ready)**",
        ],
      },
    ],
    contactQuote:
      "Building big dreams? Let's make sure your harvest has a home.",
  },
  {
    slug: "soil-farming",
    title: "Soil Farming",
    shortDescription:
      "Traditional earth-based cultivation methods with modern techniques.",
    fullDescription:
      "Combining traditional soil farming wisdom with modern agricultural science, we help farmers optimize their soil-based cultivation.",
    tagline: "Grow Naturally in Controlled Environments",
    heroImage: "/images/hero/soil-farming-hero.jpg",
    contactImage: "/images/services/contact.jpg",
    sections: [
      {
        title: "Soil Farming, Redefined",
        description:
          "At Kamala Farms, we understand that not every crop or farmer's vision fits within hydroponics — and that's where **Soil Farming inside Polyhouses** comes in.\n\nBy combining the **natural strength of soil cultivation** with the **controlled environment of a polyhouse,** we help farmers grow high-quality produce with reduced risks and enhanced efficiency.",
        imagePosition: "left",
        image: "/images/services/soil-farming/soil-farming-redefined.jpg",
      },
      {
        title: "Why Soil Farming Inside Polyhouses?",
        description:
          "Traditional farming is often affected by unpredictable weather, pests, and water stress. A polyhouse solves these challenges by creating a **climate-controlled shield** that protects your crops year-round.\n\nThis approach lets farmers cultivate a wide range of crops — from vegetables and flowers to fruiting plants — while still using organic soil practices.",
        imagePosition: "right",
        image: "/images/services/soil-farming/why-soil-farming.jpg",
      },
      {
        title: "Our Process",
        description:
          "We begin with soil testing and preparation, ensuring the right nutrient balance for your chosen crops. Then we set up a **customized irrigation and fertigation system** designed to optimize water and nutrient use.\n\nOur experts guide you through best practices in crop rotation, soil health management, and organic pest control, ensuring long-term productivity and sustainability.",
        imagePosition: "left",
        image: "/images/services/soil-farming/our-process.jpg",
      },
      {
        title: "Benefits of Soil Farming in Polyhouses",
        description: "",
        imagePosition: "left",
        image: "/images/services/soil-farming/benefits.jpg",
        bulletPoints: [
          "Extended growing seasons and consistent yields",
          "Better temperature and humidity control",
          "Protection from pests, diseases, and heavy rains",
          "Optimized water use through drip irrigation systems",
          "Suitable for high-value crops and organic farming",
        ],
      },
      {
        title: "Who Can Benefit",
        description:
          "This model is ideal for:",
        imagePosition: "right",
        image: "/images/services/soil-farming/who-can-benefit.jpg",
        bulletPoints: [
          "Farmers transitioning from open-field to protected cultivation",
          "Organic growers seeking year-round production",
          "Entrepreneurs looking to scale sustainable soil-based farms",
        ],
      },
    ],
    contactQuote:
      "Explore Soil Farming Solutions",
  },
];



 