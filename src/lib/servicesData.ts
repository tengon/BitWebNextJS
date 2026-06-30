export type ServiceFeature = {
  title: string;
  description: string;
};

export type ServiceBenefit = {
  title: string;
  description: string;
  iconName: string;
};

export type ServiceUseCase = {
  title: string;
  industry: string;
  description: string;
};

export type ServiceData = {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  detailedParagraphs: string[];
  features: ServiceFeature[];
  benefits: ServiceBenefit[];
  useCases: ServiceUseCase[];
  technologies: string[];
  iconName: string;
  bgImage: string;
};

export const servicesData: ServiceData[] = [
  {
    id: "1",
    slug: "industrial-automation",
    title: "Industrial Automation",
    tagline: "Automate. Optimize. Scale.",
    bgImage: "/images/service-industrial-automation.png",
    shortDescription: "End-to-end automation solutions for modern factories — from PLC programming to full SCADA system integration.",
    fullDescription: "Our Industrial Automation services provide comprehensive machine control, factory automation, and supervisory systems. We help you reduce human error, increase production speed, and ensure consistent quality across all your manufacturing lines.",
    detailedParagraphs: [
      "In the era of Industry 4.0, manual processes are the bottleneck to growth. BIT Automation delivers turnkey industrial automation solutions that transform your factory floor from labor-intensive operations into precision-driven, intelligent production lines. Our team of certified engineers specializes in PLC programming (Siemens, Allen-Bradley, Mitsubishi, Omron), HMI design, and SCADA system integration.",
      "We don't just install hardware — we engineer complete automation ecosystems. From initial process analysis and electrical design to commissioning and post-deployment support, we ensure every component works in harmony. Our solutions reduce downtime by up to 40%, improve production throughput by 30%, and deliver ROI within the first year of implementation.",
      "Whether you're upgrading a legacy system or building a greenfield facility, our modular approach allows you to scale automation at your own pace. We integrate seamlessly with existing ERP and MES systems, ensuring data flows freely between the shop floor and the boardroom."
    ],
    iconName: "Cpu",
    features: [
      { title: "PLC Programming & Integration", description: "Custom PLC programming for Siemens, Allen-Bradley, Mitsubishi, and Omron controllers. We design ladder logic, structured text, and function block diagrams tailored to your process requirements." },
      { title: "SCADA System Design", description: "Full Supervisory Control and Data Acquisition systems with real-time dashboards, alarm management, historical trending, and remote access capabilities." },
      { title: "HMI Development", description: "Intuitive Human-Machine Interface screens designed for operators, providing clear visualization of machine status, production data, and control parameters." },
      { title: "Motion Control Systems", description: "Servo drives, VFDs, and robotic arm integration for precise positioning, speed control, and synchronized multi-axis motion in packaging, assembly, and CNC applications." },
      { title: "Industrial Networking", description: "Design and deployment of Profinet, EtherNet/IP, Modbus TCP, and OPC-UA networks to connect all devices on the factory floor." },
      { title: "Troubleshooting & Commissioning", description: "On-site commissioning, FAT/SAT testing, and 24/7 troubleshooting support to ensure your automation systems run at peak performance." }
    ],
    benefits: [
      { title: "Reduce Downtime", description: "Predictive diagnostics and automated failover reduce unplanned downtime by up to 40%.", iconName: "Timer" },
      { title: "Boost Throughput", description: "Automated production lines run faster and more consistently than manual operations.", iconName: "TrendingUp" },
      { title: "Ensure Quality", description: "Closed-loop control systems maintain exact tolerances, reducing defect rates to near zero.", iconName: "ShieldCheck" },
      { title: "Lower Costs", description: "Reduce labor costs and material waste through precision automation and optimized processes.", iconName: "DollarSign" }
    ],
    useCases: [
      { title: "Automotive Assembly Line", industry: "Automotive", description: "Integrated PLC-controlled robotic welding and painting stations with real-time quality inspection for a major automotive parts supplier." },
      { title: "Food & Beverage Packaging", industry: "FMCG", description: "High-speed packaging line automation with servo-driven conveyors, vision inspection, and automatic reject systems." },
      { title: "Pharmaceutical Batch Control", industry: "Pharma", description: "ISA-88 compliant batch control system for drug manufacturing, ensuring full traceability and FDA compliance." }
    ],
    technologies: ["Siemens S7-1500", "Allen-Bradley ControlLogix", "Mitsubishi iQ-R", "Omron NX/NJ", "WinCC", "Ignition SCADA", "TIA Portal", "RSLogix 5000"]
  },
  {
    id: "2",
    slug: "manufacture-solution",
    title: "Manufacturing Solutions",
    tagline: "Measure. Monitor. Maximize.",
    bgImage: "/images/service-manufacture-solution.png",
    shortDescription: "Optimize your manufacturing process with real-time OEE monitoring, predictive maintenance, and smart warehouse management.",
    fullDescription: "Transform your production floor with our intelligent manufacturing solutions. We focus on maximizing your Overall Equipment Effectiveness (OEE) by deeply monitoring environment conditions, power usage, and machine vibrations.",
    detailedParagraphs: [
      "Modern manufacturing demands visibility. You can't optimize what you can't measure. BIT Automation's Manufacturing Solutions suite provides deep, granular insight into every aspect of your production environment — from the vibration signature of a critical motor to the ambient humidity affecting your product quality.",
      "Our OEE Monitoring platform captures Availability, Performance, and Quality metrics in real-time, giving production managers an instant pulse on factory health. Combined with our Power Monitoring and Environment Monitoring modules, you gain a 360-degree view of your operational costs and conditions, enabling data-driven decisions that reduce waste and maximize output.",
      "Beyond monitoring, our Warehouse Management System (WMS) bridges the gap between production and logistics. Using IoT sensors, RFID tags, and barcode scanning, we provide real-time inventory tracking, automated reorder triggers, and optimized warehouse layouts that cut pick-and-pack times by up to 50%."
    ],
    iconName: "Factory",
    features: [
      { title: "OEE Monitoring", description: "Real-time tracking of Availability, Performance, and Quality across every machine and production line. Identify bottlenecks instantly with color-coded dashboards and automated Pareto analysis." },
      { title: "Environment Monitoring", description: "IoT sensors monitoring temperature, humidity, air pressure, and dust particles on the factory floor. Critical for cleanroom, pharma, and food manufacturing compliance." },
      { title: "Power Monitoring", description: "Multi-point energy metering with sub-metering per machine or department. Identify energy waste, peak demand charges, and power factor issues to reduce electricity costs by 15-25%." },
      { title: "Vibration Monitoring", description: "Continuous vibration analysis on rotating equipment (motors, pumps, fans). Detect bearing failures, misalignment, and imbalance weeks before catastrophic breakdown." },
      { title: "Warehouse Management System", description: "End-to-end WMS with RFID/barcode integration, real-time inventory, automated pick-path optimization, and integration with ERP systems for seamless order fulfillment." }
    ],
    benefits: [
      { title: "Maximize OEE", description: "Achieve world-class OEE scores above 85% with continuous monitoring and optimization.", iconName: "Target" },
      { title: "Prevent Breakdowns", description: "Vibration and condition monitoring catch failures before they happen, saving millions in repair costs.", iconName: "ShieldAlert" },
      { title: "Cut Energy Costs", description: "Detailed power analytics reveal hidden waste and opportunities for 15-25% energy reduction.", iconName: "Zap" },
      { title: "Optimize Inventory", description: "Real-time warehouse visibility eliminates stockouts and overstock, improving cash flow.", iconName: "Package" }
    ],
    useCases: [
      { title: "Cement Plant OEE Optimization", industry: "Building Materials", description: "Deployed OEE monitoring across 12 production lines in a cement plant, increasing overall effectiveness from 62% to 84% within 6 months." },
      { title: "Textile Factory Energy Audit", industry: "Textile", description: "Installed 200+ power meters across a textile mill, identifying 22% energy waste and saving $180,000 annually." },
      { title: "Cold Storage Warehouse", industry: "Logistics", description: "Implemented IoT-based environment and inventory monitoring for a cold chain warehouse handling pharmaceutical products." }
    ],
    technologies: ["Grafana", "InfluxDB", "MQTT", "Node-RED", "Modbus RTU", "RFID UHF", "Power Analyzers", "Vibration Sensors (SKF, IFM)"]
  },
  {
    id: "3",
    slug: "utilities",
    title: "Utilities",
    tagline: "Smart Resources. Sustainable Future.",
    bgImage: "/images/service-utilities.png",
    shortDescription: "Smart utility management for sustainable operations — water, air quality, building systems, and beyond.",
    fullDescription: "Efficiently manage your critical resources with our smart utility solutions. From water meters to air quality sensors, we provide the data you need to reduce waste and optimize your building's operational costs.",
    detailedParagraphs: [
      "Utilities are the lifeblood of any industrial or commercial facility. Yet most organizations have little visibility into how water, gas, and electricity are consumed at a granular level. BIT Automation changes this with our comprehensive Smart Utilities platform, giving you metered, real-time insight into every drop, watt, and cubic meter.",
      "Our Smart Water Metering solutions use ultrasonic flow meters and IoT-connected data loggers to monitor consumption patterns, detect leaks as small as 0.5 liters per minute, and send instant alerts to maintenance teams. Combined with our Water Level Monitoring for tanks and reservoirs, you gain complete control over your water infrastructure.",
      "For buildings and campuses, our Building Management System (BMS) integrates HVAC, lighting, access control, and fire safety into a single unified platform. Automated scheduling, occupancy-based control, and energy optimization algorithms reduce operational costs by 20-35% while improving occupant comfort. Our Air Quality Monitoring stations ensure compliance with workplace safety regulations by continuously tracking CO₂, PM2.5, VOCs, and temperature."
    ],
    iconName: "Droplets",
    features: [
      { title: "Smart Water Metering", description: "Ultrasonic and electromagnetic flow meters connected via LoRaWAN or NB-IoT for real-time consumption monitoring, leak detection, and automated billing data collection." },
      { title: "Water Level Monitoring", description: "Submersible pressure sensors and ultrasonic level transmitters for tanks, reservoirs, and river monitoring with automated pump control and overflow prevention." },
      { title: "Air Quality Monitoring", description: "Indoor and outdoor AQI stations measuring CO₂, PM2.5, PM10, temperature, humidity, and VOCs. Dashboard and alerts for workplace safety compliance." },
      { title: "Building Management System", description: "Integrated BACnet/KNX BMS controlling HVAC, lighting, access control, elevators, and fire systems. Occupancy-based automation and energy optimization algorithms." },
      { title: "Water Treatment System", description: "Automated chemical dosing, pH control, chlorination, and filtration management for industrial water treatment and wastewater recycling plants." }
    ],
    benefits: [
      { title: "Reduce Water Waste", description: "Leak detection and consumption analytics can reduce water waste by up to 30%.", iconName: "Droplets" },
      { title: "Improve Air Quality", description: "Continuous AQI monitoring ensures a healthy, productive workplace environment.", iconName: "Wind" },
      { title: "Slash Building Costs", description: "Smart BMS reduces energy consumption in commercial buildings by 20-35%.", iconName: "Building2" },
      { title: "Regulatory Compliance", description: "Automated data logging and reporting for environmental audits and ISO certifications.", iconName: "FileCheck" }
    ],
    useCases: [
      { title: "Smart Campus Water Network", industry: "Education", description: "Deployed 150 smart water meters across a university campus, detecting 12 hidden leaks and reducing water consumption by 28%." },
      { title: "Office Tower BMS Upgrade", industry: "Commercial Real Estate", description: "Retrofitted a 25-story office tower with integrated BMS, achieving 32% energy reduction and improved tenant satisfaction scores." },
      { title: "Industrial WTP Automation", industry: "Manufacturing", description: "Fully automated a wastewater treatment plant for a paper mill, ensuring zero discharge violations and reducing chemical costs by 18%." }
    ],
    technologies: ["LoRaWAN", "NB-IoT", "BACnet", "KNX", "Modbus TCP", "Ultrasonic Sensors", "PLC Controllers", "SCADA Platforms"]
  },
  {
    id: "4",
    slug: "surveillance",
    title: "Surveillance",
    tagline: "See More. Know More. Protect More.",
    bgImage: "/images/service-surveillance.png",
    shortDescription: "AI-powered security and video analytics for facilities, smart cities, and industrial perimeters.",
    fullDescription: "Enhance your facility's security and operational oversight with our smart surveillance systems. Utilizing advanced video analytics, we go beyond simple recording to provide actionable insights such as vehicle counting and automated security alerts.",
    detailedParagraphs: [
      "Traditional CCTV is passive — it records, but it doesn't think. BIT Automation's Smart Surveillance solutions combine high-resolution camera hardware with advanced AI-powered video analytics to create an active, intelligent security ecosystem that detects threats, counts assets, and generates operational insights in real-time.",
      "Our Video Analytics engine uses deep learning models trained on millions of frames to detect intrusions, recognize license plates (ANPR), count people and vehicles, identify loitering behavior, and even detect safety violations like missing PPE on a construction site. All alerts are pushed instantly to security personnel via mobile app, SMS, or integrated alarm systems.",
      "Beyond security, our surveillance systems serve operational purposes: counting vehicles at logistics gates, monitoring production line flows, verifying safety compliance in hazardous areas, and providing video evidence for incident investigations. Our systems integrate seamlessly with access control, fire alarms, and building management systems for a unified security operations center (SOC)."
    ],
    iconName: "Camera",
    features: [
      { title: "Smart CCTV Systems", description: "IP-based camera deployment with PoE, IR night vision, PTZ, thermal imaging, and edge computing capabilities. Support for Hikvision, Dahua, Axis, and Hanwha platforms." },
      { title: "AI Video Analytics", description: "Deep learning-based detection for intrusion, loitering, abandoned objects, crowd density, PPE compliance, and facial recognition with 99.5% accuracy." },
      { title: "Vehicle Counting & ANPR", description: "Automatic Number Plate Recognition and vehicle counting at gates, parking facilities, and logistics yards. Integration with access control for automated barrier operation." },
      { title: "Security Operations Center", description: "Centralized monitoring platform with multi-site video walls, event-driven recording, automated incident workflows, and mobile response coordination." },
      { title: "Perimeter Protection", description: "Fence-mounted sensors, thermal cameras, and radar-based detection for high-security facilities including industrial plants, warehouses, and data centers." }
    ],
    benefits: [
      { title: "Proactive Threat Detection", description: "AI identifies potential security incidents before they escalate, reducing response time to seconds.", iconName: "AlertTriangle" },
      { title: "Operational Insights", description: "Video analytics provide data on foot traffic, vehicle flow, and production line efficiency beyond security.", iconName: "BarChart3" },
      { title: "Reduce Guard Costs", description: "Smart surveillance reduces the need for manned patrols by up to 60% while improving coverage.", iconName: "Users" },
      { title: "Forensic Evidence", description: "Crystal-clear recording with intelligent search capabilities for rapid incident investigation.", iconName: "Search" }
    ],
    useCases: [
      { title: "Port Container Terminal Security", industry: "Maritime Logistics", description: "Deployed 500+ AI cameras with ANPR and container tracking across a major port terminal, reducing theft incidents by 95%." },
      { title: "Smart City Traffic Monitoring", industry: "Government", description: "City-wide traffic surveillance with vehicle counting, speed detection, and incident alerting across 200 intersections." },
      { title: "Industrial Plant Safety Compliance", industry: "Oil & Gas", description: "AI-based PPE detection (helmets, vests, goggles) in hazardous zones with automated safety violation reporting." }
    ],
    technologies: ["Hikvision", "Dahua", "Axis Communications", "NVIDIA Jetson (Edge AI)", "TensorFlow", "OpenCV", "VMS (Milestone/Genetec)", "PoE Switches"]
  },
  {
    id: "5",
    slug: "tracking-solution",
    title: "Tracking Solutions",
    tagline: "Track Everything. Lose Nothing.",
    bgImage: "/images/service-tracking-solution.png",
    shortDescription: "Comprehensive fleet management, GPS tracking, and asset monitoring for logistics and field operations.",
    fullDescription: "Gain total visibility over your mobile assets with our advanced tracking solutions. Whether it's a delivery fleet or heavy industrial machinery, our systems provide real-time location data, route optimization, and driver behavior analysis.",
    detailedParagraphs: [
      "In logistics and field operations, every minute of delay and every kilometer of unnecessary travel directly impacts your bottom line. BIT Automation's Tracking Solutions provide military-grade GPS accuracy combined with intelligent fleet management software, giving operations managers complete real-time visibility over every vehicle, driver, and asset in their network.",
      "Our Fleet Management platform goes far beyond simple dot-on-a-map tracking. We provide comprehensive telemetry including engine diagnostics (OBD-II), fuel consumption analysis, driving behavior scoring (harsh braking, speeding, idling), and automated maintenance scheduling based on actual mileage and engine hours. Dispatchers can plan optimal routes considering real-time traffic, delivery time windows, and vehicle capacity constraints.",
      "For industrial and construction applications, our rugged GPS trackers monitor heavy equipment, generators, trailers, and containers. Geofencing alerts notify managers when assets leave designated zones, while utilization reports help identify underused equipment that could be redeployed or divested. All data is accessible via web dashboard or mobile app with customizable alerts and automated reports."
    ],
    iconName: "Navigation",
    features: [
      { title: "Real-Time Fleet Management", description: "Live vehicle tracking with speed, heading, and status updates every 10 seconds. Multi-level dashboards for drivers, dispatchers, and fleet managers." },
      { title: "GPS Asset Tracking", description: "Battery-powered, weather-sealed GPS trackers for containers, trailers, generators, and construction equipment. Up to 3-year battery life with solar options." },
      { title: "Driver Behavior Analysis", description: "Scoring algorithms analyzing harsh braking, rapid acceleration, speeding, excessive idling, and seatbelt compliance. Gamification for driver safety improvement." },
      { title: "Geofencing & Alerts", description: "Draw custom geographic zones and receive instant alerts when vehicles/assets enter, exit, or dwell in designated areas. Perfect for unauthorized use detection." },
      { title: "Route Optimization", description: "AI-powered route planning considering traffic, delivery windows, vehicle capacity, and driver hours-of-service regulations. Reduce mileage by 15-25%." },
      { title: "Fuel Monitoring", description: "Capacitive fuel level sensors and flow meters for real-time fuel consumption tracking, theft detection, and MPG analysis per vehicle and route." }
    ],
    benefits: [
      { title: "Cut Fuel Costs", description: "Route optimization and idle reduction can lower fuel expenses by 15-25%.", iconName: "Fuel" },
      { title: "Improve Safety", description: "Driver behavior monitoring reduces accidents by up to 35% through coaching and accountability.", iconName: "ShieldCheck" },
      { title: "Prevent Theft", description: "Real-time alerts and geofencing protect valuable vehicles and equipment from unauthorized use.", iconName: "Lock" },
      { title: "Boost Productivity", description: "Optimized routes and reduced paperwork allow drivers to complete 20% more deliveries per day.", iconName: "Rocket" }
    ],
    useCases: [
      { title: "Logistics Fleet Optimization", industry: "Distribution", description: "Managed 350+ delivery trucks with real-time tracking, route optimization, and driver scoring, reducing fleet operating costs by 22%." },
      { title: "Mining Equipment Monitoring", industry: "Mining", description: "Deployed rugged GPS trackers on 80 pieces of heavy mining equipment with utilization tracking and geofencing for restricted blast zones." },
      { title: "Cold Chain Temperature Tracking", industry: "Pharma/Food", description: "Combined GPS tracking with temperature sensors for pharmaceutical distribution, ensuring cold chain compliance and full audit trails." }
    ],
    technologies: ["GPS/GLONASS/Galileo", "4G LTE Cat-M1", "OBD-II Dongles", "CAN Bus Interface", "LoRaWAN Beacons", "Google Maps API", "HERE Maps", "Teltonika Hardware"]
  },
  {
    id: "6",
    slug: "smart-industry",
    title: "Smart Industry",
    tagline: "Connect Everything. Decide Faster.",
    bgImage: "/images/service-smart-industry.png",
    shortDescription: "The ultimate digital transformation for Industry 4.0 — executive dashboards, smart factories, and end-to-end supply chain visibility.",
    fullDescription: "Embrace the future with our holistic Smart Industry solutions. We integrate all your isolated systems into a single, cohesive ecosystem, providing executives with real-time dashboards to monitor supply chains, quality control, and overall factory performance.",
    detailedParagraphs: [
      "Smart Industry is the convergence of all our expertise into a single, transformative vision: a fully digitized, connected, and self-optimizing enterprise. BIT Automation's Smart Industry solutions break down the data silos between your automation systems, ERP, MES, WMS, and business intelligence platforms to create a unified digital thread from raw material to finished product delivery.",
      "At the heart of our Smart Industry offering is the Executive Dashboard — a real-time, KPI-driven command center that gives C-suite executives instant visibility into production efficiency, quality metrics, supply chain status, energy consumption, and financial performance. No more waiting for weekly reports; every decision is informed by live data, beautifully visualized and accessible from any device.",
      "Our Smart Factory implementation connects every machine, sensor, and system on your factory floor through a common Industrial IoT platform. Machines communicate with each other, automatically adjusting parameters based on upstream/downstream conditions. Predictive analytics anticipate maintenance needs, supply shortages, and quality deviations before they impact production. This is not science fiction — this is what we deliver today."
    ],
    iconName: "LayoutDashboard",
    features: [
      { title: "Smart Manufacturing Platform", description: "End-to-end MES integration that digitizes production workflows from work order creation through quality release. Full material traceability and genealogy." },
      { title: "Smart Factory Implementation", description: "IIoT connectivity platform that unifies PLCs, robots, sensors, and legacy equipment into a cohesive, interoperable ecosystem with edge computing and cloud analytics." },
      { title: "Executive Dashboard", description: "Real-time KPI visualization for CEO, COO, and plant managers. Customizable widgets for OEE, output, quality, energy, safety, and financial metrics with drill-down capabilities." },
      { title: "Supply Chain Monitoring", description: "End-to-end visibility from supplier procurement through production and distribution. Automated alerts for delays, stockouts, and demand fluctuations." },
      { title: "Quality Monitoring & SPC", description: "Statistical Process Control with real-time control charts, capability analysis (Cp/Cpk), and automated out-of-spec notifications. Integration with lab equipment (LIMS)." }
    ],
    benefits: [
      { title: "Total Visibility", description: "Break down data silos and see your entire operation in one unified platform, from shop floor to top floor.", iconName: "Eye" },
      { title: "Faster Decisions", description: "Real-time dashboards eliminate the 1-2 week lag of traditional reporting, enabling agile management.", iconName: "Zap" },
      { title: "Predict & Prevent", description: "Predictive analytics catch quality issues, supply disruptions, and equipment failures before they happen.", iconName: "Brain" },
      { title: "Digital Twin", description: "Create virtual replicas of your factory for simulation, optimization, and what-if scenario planning.", iconName: "Layers" }
    ],
    useCases: [
      { title: "Automotive Smart Factory", industry: "Automotive", description: "Full Industry 4.0 transformation of a Tier-1 automotive supplier: IIoT connectivity for 200+ machines, real-time OEE, and executive dashboard serving 5 plants." },
      { title: "FMCG Digital Twin", industry: "Consumer Goods", description: "Created a digital twin of a consumer goods factory, enabling production simulation and 12% throughput improvement without capital investment." },
      { title: "Multi-Site Executive Command Center", industry: "Conglomerate", description: "Unified dashboard aggregating KPIs from 8 factory locations across 3 countries, giving the CEO real-time operational visibility." }
    ],
    technologies: ["Microsoft Azure IoT", "AWS IoT Core", "Apache Kafka", "Grafana Enterprise", "Power BI", "Digital Twin (Azure)", "MQTT/AMQP", "Kubernetes"]
  }
];
