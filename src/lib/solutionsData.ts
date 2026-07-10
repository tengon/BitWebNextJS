export type SolutionFeature = {
  title: string;
  description: string;
  icon?: string;
};

export type SolutionBenefit = {
  title: string;
  description: string;
  iconName: string;
  stat?: string;
};

export type SolutionUseCase = {
  title: string;
  industry: string;
  description: string;
};

export type SolutionData = {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  detailedParagraphs: string[];
  features: SolutionFeature[];
  benefits: SolutionBenefit[];
  useCases: SolutionUseCase[];
  technologies: string[];
  iconName: string;
  bgImage: string;
  accentColor: string;       // e.g. "#0099FF"
  accentColorSecondary: string; // e.g. "#00D4FF"
  gradientFrom: string;      // tailwind-compatible hex
  gradientTo: string;
};

export const solutionsData: SolutionData[] = [
  {
    id: "sol-1",
    slug: "oee",
    title: "Overall Equipment Effectiveness (OEE)",
    tagline: "Measure. Improve. Dominate.",
    shortDescription:
      "Maximize manufacturing productivity with real-time insights into Availability, Performance, and Quality — the three pillars of world-class OEE.",
    bgImage: "/images/oee.png",
    accentColor: "#0099FF",
    accentColorSecondary: "#00D4FF",
    gradientFrom: "#0099FF",
    gradientTo: "#00D4FF",
    detailedParagraphs: [
      "Overall Equipment Effectiveness is the gold standard KPI for measuring manufacturing productivity. BIT Automation's OEE Solution provides continuous, machine-level visibility into the three core pillars — Availability (is the machine running when it should?), Performance (is it running at full speed?), and Quality (is every part good?) — giving production teams an unambiguous picture of where losses are hiding.",
      "Our platform collects real-time data directly from PLCs, sensors, and HMIs without requiring manual entry from operators. Machine downtime events are automatically categorized (breakdowns, changeovers, planned maintenance), and shift-level Pareto charts instantly surface the biggest contributors to lost production time. Supervisors receive instant mobile alerts the moment OEE drops below your configurable thresholds.",
      "The real power of our OEE solution lies in its analytics depth. Beyond the live dashboard, our AI engine identifies recurring patterns — the Monday morning start-up losses, the afternoon speed drops tied to temperature fluctuations, the batch changeover that always takes 15 minutes longer than planned. These insights translate directly into targeted improvement actions with measurable ROI.",
    ],
    iconName: "GaugeCircle",
    features: [
      {
        title: "Real-Time OEE Dashboard",
        icon: "/images/icons/realtime-oee-icon.png",
        description:
          "Live multi-level dashboards — from machine-level to plant-wide rollup — with color-coded OEE scores, trend charts, and shift comparisons. Accessible from any device including mobile and control room displays.",
      },
      {
        title: "Automated Downtime Tracking",
        icon: "/images/icons/automated-downtime-tracking-icon.png",
        description:
          "Automatic detection and categorization of machine stops — planned vs. unplanned, breakdown vs. changeover. Eliminates manual operator log books and delivers accurate downtime Pareto analysis in real-time.",
      },
      {
        title: "Production & Shift Reporting",
        icon: "/images/icons/production-shift-reporting-icon.png",
        description:
          "Automated shift, daily, weekly, and monthly reports emailed directly to management. Custom KPI templates for line leaders, shift supervisors, and production directors — each seeing the data most relevant to their role.",
      },
      {
        title: "Downtime Root Cause Analysis",
        icon: "/images/icons/downtime-analysis-icon.png",
        description:
          "Drill-down from plant OEE to line to machine to specific fault code. Integrated cause-and-effect tagging lets operators capture the 'why' behind every stop, feeding a continuously improving failure database.",
      },
      {
        title: "Quality & Scrap Tracking",
        icon: "/images/icons/quality-tracking-icon.png",
        description:
          "Integration with weighing scales, vision systems, and manual reject counters to capture First Pass Yield in real-time. SPC control charts detect quality drift before specification limits are breached.",
      },
      {
        title: "AI Performance Analytics",
        icon: "/images/icons/performance-analytic-icon.png",
        description:
          "Machine learning models analyze historical OEE patterns to predict future performance drops, recommend optimal maintenance windows, and identify which machines will benefit most from improvement investment.",
      },
    ],
    benefits: [
      {
        title: "Increase OEE to 85%+",
        description:
          "World-class manufacturers target 85% OEE. Our customers average a 15-22 percentage point improvement within 12 months.",
        iconName: "TrendingUp",
        stat: "+22%",
      },
      {
        title: "Cut Unplanned Downtime",
        description:
          "Automated alerts and root cause tracking reduce mean time to repair (MTTR) and eliminate recurring failures.",
        iconName: "Timer",
        stat: "-40%",
      },
      {
        title: "Boost Throughput",
        description:
          "Speed loss detection and targeted line balancing drive additional output from the same equipment and headcount.",
        iconName: "Rocket",
        stat: "+30%",
      },
      {
        title: "Reduce Scrap & Rework",
        description:
          "Real-time SPC and quality monitoring catch defects at the source before they propagate down the line.",
        iconName: "ShieldCheck",
        stat: "-35%",
      },
    ],
    useCases: [
      {
        title: "Cement Plant OEE Transformation",
        industry: "Building Materials",
        description:
          "Deployed OEE monitoring across 12 production lines. Automated downtime logging replaced paper-based shift logs, surfacing that a single pneumatic valve was responsible for 18% of all unplanned stops. OEE improved from 62% to 84% within 6 months.",
      },
      {
        title: "Automotive Parts Stamping",
        industry: "Automotive",
        description:
          "Real-time OEE dashboards on 24 stamping presses revealed chronic speed losses during afternoon shifts due to die temperature. Targeted cooling upgrades delivered a 9% throughput increase with zero capital on new equipment.",
      },
      {
        title: "Food & Beverage Filling Lines",
        industry: "FMCG",
        description:
          "OEE integration with filling and capping machines reduced average changeover time by 35% through data-driven SMED analysis, adding the equivalent of one full production shift per week.",
      },
    ],
    technologies: [
      "Siemens S7 PLC",
      "Modbus TCP/RTU",
      "OPC-UA",
      "MQTT",
      "Node-RED",
      "InfluxDB",
      "Grafana",
      "Custom Web Dashboard",
      "Mobile Push Alerts",
    ],
  },
  {
    id: "sol-2",
    slug: "environment-monitoring",
    title: "Environment Monitoring System",
    tagline: "Sense. Protect. Comply.",
    shortDescription:
      "Ensure optimal conditions for your industrial processes and maintain regulatory compliance with continuous, multi-parameter environmental monitoring.",
    bgImage: "/images/environment-monitoring.png",
    accentColor: "#10b981",
    accentColorSecondary: "#34d399",
    gradientFrom: "#10b981",
    gradientTo: "#34d399",
    detailedParagraphs: [
      "Environmental conditions are silent production killers. Excess humidity corrodes circuit boards in electronics manufacturing. Temperature swings in pharmaceutical cold storage break the cold chain. Airborne particulates in food processing trigger costly product recalls. BIT Automation's Environment Monitoring System puts a continuous, intelligent sensor network around your entire facility to detect and alert on deviations before they cause damage.",
      "Our multi-parameter IoT sensor nodes measure temperature, relative humidity, barometric pressure, CO₂ concentration, PM2.5/PM10 particulates, VOC levels, and water/compressed air consumption — all from a single, wireless, PoE-compatible unit. Data is streamed in real-time to cloud or on-premise dashboards with configurable alert thresholds, escalation rules, and automated corrective action workflows.",
      "Compliance reporting — always a manual burden — becomes fully automated. Our system generates ISO 14001, GMP, and HACCP-compliant audit logs on demand, with cryptographic data integrity verification to satisfy regulatory auditors. Whether you operate a pharmaceutical cleanroom, a cold chain warehouse, or an industrial plant subject to environmental discharge limits, our platform delivers the evidence you need instantly.",
    ],
    iconName: "Wind",
    features: [
      {
        title: "Multi-Parameter Sensor Nodes",
        description:
          "Wireless sensor nodes measuring temperature, humidity, pressure, CO₂, PM2.5, PM10, and VOCs simultaneously. IP65 rated for industrial environments, with -40°C to +85°C operating range and 5-year battery life options.",
      },
      {
        title: "Real-Time Alerting & Escalation",
        description:
          "Configurable alert thresholds with multi-level escalation: operator console notification → supervisor SMS → management email. Automated work order creation in connected CMMS systems for immediate corrective action.",
      },
      {
        title: "Cleanroom & GMP Compliance",
        description:
          "Dedicated cleanroom monitoring profiles conforming to ISO 14644, EU GMP Annex 1, and FDA 21 CFR Part 11. Continuous particle counting, differential pressure monitoring, and automated calibration reminders.",
      },
      {
        title: "Water & Utility Consumption",
        description:
          "Integrated flow meters and sub-metering for process water, cooling water, compressed air, and steam consumption. Leak detection, consumption benchmarking, and automated utility cost allocation per production line.",
      },
      {
        title: "Historical Trending & Analytics",
        description:
          "Long-term data archiving with configurable retention periods. Correlation analysis between environmental parameters and product quality metrics. Seasonal trend reports to predict and pre-empt seasonal compliance risks.",
      },
      {
        title: "Automated Compliance Reporting",
        description:
          "One-click generation of ISO 14001, HACCP, GMP, and ESG audit reports. Tamper-proof data logs with electronic signatures and timestamps satisfy regulatory auditors without manual data extraction.",
      },
    ],
    benefits: [
      {
        title: "Zero Compliance Violations",
        description:
          "Automated monitoring and reporting eliminate manual blind spots that lead to regulatory non-compliance and fines.",
        iconName: "ShieldCheck",
        stat: "0 Fines",
      },
      {
        title: "Prevent Product Loss",
        description:
          "Real-time alerts catch environmental excursions before they spoil batches, preventing costly product recalls.",
        iconName: "Package",
        stat: "99.9%",
      },
      {
        title: "Reduce Water Waste",
        description:
          "Consumption monitoring and leak detection reduce water and utility waste by up to 30% across the facility.",
        iconName: "Droplets",
        stat: "-30%",
      },
      {
        title: "Cut Audit Time",
        description:
          "Automated compliance reports replace weeks of manual data collection, slashing audit preparation time drastically.",
        iconName: "FileCheck",
        stat: "-80%",
      },
    ],
    useCases: [
      {
        title: "Pharmaceutical Cold Storage",
        industry: "Pharma",
        description:
          "GMP-compliant temperature and humidity monitoring for a pharmaceutical warehouse with 6 cold rooms. Automated 21 CFR Part 11 reports replaced 40+ hours of monthly manual log transcription and caught 3 near-miss excursions before product was compromised.",
      },
      {
        title: "Food Processing Cleanroom",
        industry: "Food & Beverage",
        description:
          "Continuous particle counting and differential pressure monitoring in a sterile food packaging facility. Automated HACCP compliance reports and real-time alerts reduced product recall risk and helped secure a major international retail contract.",
      },
      {
        title: "Industrial Paint Shop",
        industry: "Automotive",
        description:
          "Temperature and humidity control monitoring in paint baking ovens and spray booths. Environmental correlation analysis identified a humidity-related paint defect costing $200K/month, enabling process optimization that eliminated the issue.",
      },
    ],
    technologies: [
      "LoRaWAN",
      "Zigbee",
      "MQTT",
      "IoT Sensor Nodes",
      "InfluxDB",
      "Grafana",
      "Node-RED",
      "AWS IoT / Azure IoT",
      "REST API",
    ],
  },
  {
    id: "sol-3",
    slug: "vibration-monitoring",
    title: "Vibration Monitoring System",
    tagline: "Listen to Your Machines. Before They Break.",
    shortDescription:
      "Implement predictive maintenance by detecting machine anomalies through continuous vibration analysis — catch failures weeks before costly breakdowns.",
    bgImage: "/images/predictive-vibration.png",
    accentColor: "#8b5cf6",
    accentColorSecondary: "#ec4899",
    gradientFrom: "#8b5cf6",
    gradientTo: "#ec4899",
    detailedParagraphs: [
      "Every rotating machine tells a story through vibration. A bearing beginning to fail emits a characteristic high-frequency signature weeks before it seizes. A pump with incipient cavitation vibrates differently than a healthy one. Misalignment, imbalance, looseness — each has a unique vibration fingerprint. BIT Automation's Vibration Monitoring System continuously reads these signatures and translates them into actionable maintenance intelligence, before a catastrophic breakdown halts your production.",
      "Our wireless tri-axial MEMS accelerometers attach magnetically or with adhesive to motor housings, pump casings, gearbox bodies, and fan frames. They transmit raw vibration data at up to 10 kHz sampling rate to our edge computing gateway, where our AI signal processing engine performs FFT analysis, bearing defect frequency detection, and ISO 10816 severity classification — all within milliseconds of acquisition.",
      "The result is a predictive maintenance program that is finally cost-effective at scale. Unlike traditional vibration analysis routes where a specialist visits each machine monthly with a handheld analyzer, our system monitors 24/7 with continuous trended baselines. When a machine's vibration signature begins to shift, our AI raises an alert graded by severity — giving your maintenance team the advance warning needed to schedule corrective action during planned downtime, not emergency shutdown.",
    ],
    iconName: "Activity",
    features: [
      {
        title: "Wireless Tri-Axial Sensors",
        description:
          "Industrial-grade wireless MEMS accelerometers measuring vibration in X, Y, and Z axes simultaneously. Magnetic or stud-mount installation, IP67 rated, with onboard temperature sensing. 2-year battery life or wired PoE option.",
      },
      {
        title: "AI Anomaly Detection",
        description:
          "Machine learning models trained on each machine's unique baseline automatically detect deviations from normal vibration patterns. Reduces false alarms by 90% compared to fixed-threshold systems by learning normal operating variability.",
      },
      {
        title: "FFT Spectrum Analysis",
        description:
          "High-resolution Fast Fourier Transform analysis identifies bearing defect frequencies (BPFO, BPFI, BSF, FTF), gear mesh frequencies, blade pass frequencies, and structural resonances. Overlay with ISO 10816 severity bands.",
      },
      {
        title: "Bearing Defect Detection",
        description:
          "Envelope analysis and kurtosis monitoring specifically tuned for early bearing defect detection. Provides an estimated remaining useful life (RUL) estimate for bearings approaching end of life, enabling just-in-time replacement.",
      },
      {
        title: "Cloud Analytics & Trending",
        description:
          "Long-term vibration trend database with configurable trending intervals. Waterfall plots, orbit plots, and time waveform analysis for in-depth diagnostics. Historical comparison to detect slow-developing faults invisible to periodic inspection.",
      },
      {
        title: "Maintenance Work Order Integration",
        description:
          "Automatic generation of maintenance work orders in SAP PM, IBM Maximo, or custom CMMS when vibration alerts are triggered. Priority ranking ensures the most critical assets are addressed first, optimizing maintenance resource allocation.",
      },
    ],
    benefits: [
      {
        title: "Prevent Catastrophic Failure",
        description:
          "Catch bearing, shaft, and coupling failures weeks in advance — avoiding unplanned emergency shutdowns and secondary damage.",
        iconName: "ShieldAlert",
        stat: "6 Weeks",
      },
      {
        title: "Slash Maintenance Costs",
        description:
          "Replace time-based maintenance schedules with condition-based servicing — extend component life and eliminate unnecessary replacements.",
        iconName: "DollarSign",
        stat: "-35%",
      },
      {
        title: "Maximize Machine Uptime",
        description:
          "Planned repairs during scheduled downtime instead of emergency repairs mean dramatically higher overall equipment availability.",
        iconName: "Gauge",
        stat: "+25%",
      },
      {
        title: "24/7 Machine Coverage",
        description:
          "Continuous wireless monitoring covers every critical asset around the clock — no specialist required for routine data collection.",
        iconName: "Wifi",
        stat: "100%",
      },
    ],
    useCases: [
      {
        title: "Textile Mill Motor Fleet",
        industry: "Textile",
        description:
          "Deployed 180 wireless vibration sensors on spinning and weaving machine motors. Within the first 3 months, 7 bearing failures were predicted and corrected during planned weekend maintenance, avoiding an estimated $1.2M in emergency repair and lost production costs.",
      },
      {
        title: "Pump Station Monitoring",
        industry: "Water Treatment",
        description:
          "Continuous vibration monitoring on 24 large centrifugal pumps in a water treatment plant. Cavitation detection and impeller wear monitoring allowed a pump replacement to be planned 8 weeks in advance, preventing a potential major water supply interruption.",
      },
      {
        title: "Cement Kiln Drive Train",
        industry: "Building Materials",
        description:
          "Monitoring of critical kiln main drive gearbox, ID fans, and cooler fans. Early detection of a gearbox gear tooth fatigue crack 4 weeks before failure — a repair that would have cost $3.5M if it had resulted in an uncontrolled shutdown.",
      },
    ],
    technologies: [
      "MEMS Tri-Axial Accelerometers",
      "LoRaWAN / Wi-Fi / Wired",
      "Edge AI Processing",
      "FFT Signal Processing",
      "Python / TensorFlow",
      "InfluxDB",
      "Grafana",
      "SAP PM / Maximo Integration",
      "ISO 10816 / ISO 20816",
    ],
  },
];
