export type Language = {
  name: string;
  level: number;
};

export type Award = {
  title: string;
  issuer: string;
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
  note?: string;
};

export type Responsibility = {
  title?: string;
  detail: string;
};

export type Experience = {
  title: string;
  company: string;
  period: string;
  project?: string;
  overview?: string;
  responsibilities: Responsibility[];
};

export type ProjectScope = {
  label: string;
  items: string[];
};

export type Project = {
  name: string;
  role: string;
  period: string;
  scope: ProjectScope[];
};

export type Faq = {
  question: string;
  answer: string;
};

export type CertificateDocument = {
  title: string;
  issuer: string;
  description: string;
  href: string;
  cover: string;
  pages: number;
};

export type Profile = {
  name: string;
  title: string;
  jobTitles: string[];
  summary: string;
  email: string;
  phones: string[];
  address: string;
  skillStatement: string;
  languages: Language[];
  awards: Award[];
  education: Education[];
  certifications: string[];
  certificateDocuments: CertificateDocument[];
  experiences: Experience[];
  projects: Project[];
  declaration: string;
  declarationName: string;
  knowsAbout: string[];
  faqs: Faq[];
};

export const profile: Profile = {
  name: "Tanweerul Haque",
  title: "Civil Infrastructure HSE Professional",
  jobTitles: [
    "HSE Engineer",
    "HSE Inspector",
    "Safety Engineer",
    "Civil Infrastructure Safety Professional",
    "Chief Safety Officer"
  ],
  email: "haneefa.zohra@gmail.com",
  phones: ["+974 55740090", "+91 8056237298"],
  address: "Meer Vihar, Madanpur Dabas, Kanjhawala, New Delhi",
  skillStatement: "Strong leadership, communication, and analytical skills.",
  summary:
    "I have a terrific mindset, am well-organised and detail-orientated, can handle pressure and tight deadlines, and perform well under pressure. In addition to wanting the chance to learn more about corporations, I am seeking a creative, demanding, and growth-orientated position. This role sounds like a good fit between what you require and what I can achieve. I have worked in the HSE field for twenty years, with a focus on certain responsibilities. This experience has equipped me with a robust understanding of health and safety regulations, enabling me to implement effective strategies that enhance workplace safety. I am eager to contribute my expertise and drive to a dynamic team that values innovation and continuous improvement.",
  languages: [
    { name: "English", level: 5 },
    { name: "Urdu", level: 5 },
    { name: "Hindi", level: 4 },
    { name: "Arabic", level: 4 },
    { name: "Persian", level: 3 }
  ],
  awards: [
    {
      title: "Safety Conscious Award",
      issuer: "L&T and SUCG-JV"
    },
    {
      title: "Best Safety Officer Award",
      issuer: "Tata Consulting Engineering Ltd."
    }
  ],
  education: [
    {
      degree: "Bachelor of Science (B.Sc.) Botany",
      institution: "B.R. Ambedkar Bihar University, Muzaffarpur, Bihar, India",
      period: "Jun 1996 - Jul 1999"
    },
    {
      degree: "Master Diploma - Occupational Health Safety Environment and Risk Management",
      institution: "BHARAT SEVAK SAMAJ",
      period: "Apr 2015 - May 2017",
      note: "Approved unanimously by the Indian Parliament."
    }
  ],
  certifications: [
    "Level 6 NVQ Diploma in Occupational Health and Safety Practice",
    "ISO 45001:2018 Lead Auditor (OHSMS)",
    "GRADIOSH",
    "NEBOSH Level 3 International General Certificate",
    "OSHA (30HRS)",
    "Managing Safety (IOSH)",
    "Emergency Response Training",
    "Confined Space Training",
    "Work at Height Training",
    "COSHH Training",
    "First Aid",
    "Fire Fighting"
  ],
  certificateDocuments: [
    {
      title: "Professional Certificates",
      issuer: "Institution of Occupational Safety and Health and other professional bodies",
      description:
        "Scanned professional HSE certificate bundle including occupational safety and health credentials.",
      href: "/certificates/professional-certificates.pdf",
      cover: "/certificates/professional-certificates-cover.jpg",
      pages: 16
    },
    {
      title: "Graduation and Master Diploma OHSE",
      issuer: "B.R. Ambedkar Bihar University and Bharat Sevak Samaj",
      description:
        "Graduation certificate and Master Diploma in Occupational Health, Safety, Environment and Risk Management documents.",
      href: "/certificates/graduation-master-diploma-ohse.pdf",
      cover: "/certificates/graduation-master-diploma-ohse-cover.jpg",
      pages: 8
    }
  ],
  knowsAbout: [
    "Risk assessments",
    "HIRA",
    "JSA",
    "OSHA compliance",
    "HSE policy development",
    "Inspections and audits",
    "Incident investigation",
    "Toolbox talks",
    "Emergency drills",
    "Environmental reporting",
    "Worker welfare",
    "LTIR",
    "TRIR",
    "Permit to work coordination",
    "Roads and highways",
    "Drainage networks",
    "Microtunnelling",
    "TBM tunnelling",
    "NATM tunnelling",
    "Utilities",
    "Street lighting",
    "Fire fighting networks",
    "TSE networks",
    "Potable water networks",
    "High-rise construction",
    "Underground pumping stations"
  ],
  experiences: [
    {
      title: "HSE Engineer",
      company: "Parsons International Limited",
      period: "Mar 2025 - Present",
      responsibilities: [
        {
          title: "Risk Management & Compliance",
          detail:
            "Identifying, assessing, and eliminating potential workplace hazards by performing risk assessments (HIRA/JSA) and ensuring compliance with local, state, and federal laws, such as OSHA."
        },
        {
          title: "Policy Development & Implementation",
          detail:
            "Designing, updating, and enforcing comprehensive HSE policies, procedures, and management systems."
        },
        {
          title: "Inspections & Audits",
          detail:
            "Regularly auditing facilities, machinery, and safety equipment to ensure they meet standards and recommending corrective actions."
        },
        {
          title: "Incident Investigation",
          detail:
            "Leading investigations into accidents, injuries, or near-misses to determine root causes and implementing measures to prevent reoccurrence."
        },
        {
          title: "Training & Education",
          detail:
            "Conducting safety training, toolbox talks, and emergency drills, including fire and evacuation exercises, to raise staff awareness."
        },
        {
          title: "Environmental & Safety Reporting",
          detail:
            "Monitoring environmental impacts and producing reports on safety statistics, incidents, and performance indicators."
        },
        {
          title: "Welfare/Wellness",
          detail:
            "Ensuring worker welfare, including accommodation, health initiatives, and psychosocial support for staff in high-risk environments."
        },
        {
          title: "Documentation & Reporting",
          detail:
            "Maintaining data, reviewing logs, and reporting KPIs, including LTIR and TRIR, to management."
        }
      ]
    },
    {
      title: "HSE Inspector",
      company: "Parsons International Limited",
      period: "Nov 2024 - Mar 2025",
      project: "Al Bustan Street North (P007-C7-P2)",
      overview:
        "Parsons International Limited, as part of Parsons Transportation Group (Roads & Highways), was commissioned by ASHGHAL - Public Works Authority - Infrastructure Affairs Expressway Department, State of Qatar, to provide consultancy services for the Al Bustan Street North project scope.",
      responsibilities: [
        {
          detail:
            "Handled meetings, monthly reporting, training, risk identification, incident reporting and investigation, waste minimization, pollution prevention and control, compliance activities, and implementation of HSE management-system requirements."
        }
      ]
    },
    {
      title: "HSE Inspector",
      company: "Parsons International Limited",
      period: "Nov 2023 - Sep 2024",
      project: "Construction of Flooding Prevention Scheme - North Area FPS3 / C-2020-58",
      overview:
        "The Construction of Flood Prevention Scheme (FPS-Phase3) for Doha North areas is a program aimed at preventing countrywide damage from extensive flooding. The scheme improves drainage systems across hotspots, including surface runoff and groundwater.",
      responsibilities: [
        {
          detail:
            "Identified, assessed, and advised on risks arising from the workplace or work processes, recommended measures to eliminate, minimize, and control risks, and implemented those measures."
        },
        {
          detail:
            "Audited and inspected job sites to detect and correct safety hazards. Audited job accident records and periodically prepared audit reports."
        },
        {
          detail:
            "Represented management during safety inspections of the job site by regulatory authorities."
        },
        {
          detail:
            "Reviewed method statements and risk assessments, attended meetings, and prepared minutes of meeting."
        },
        {
          detail:
            "Ensured follow-up on open issues related to NCR, SVR, inspection reports, and other site HSE issues."
        }
      ]
    },
    {
      title: "HSE Inspector",
      company: "Parsons International Ltd.",
      period: "May 2021 - Nov 2023",
      project: "Central Doha & Corniche Beautification",
      responsibilities: [
        {
          detail:
            "Implemented client and Parsons corporate HSE policies, HSE plans, and other requirements."
        },
        {
          detail:
            "Monitored HSE performance, HSE targets, and suggestions for improvement, coordinating with the safety manager and contractors to enhance corporate HSE management ethics."
        },
        {
          detail:
            "Confirmed the use of necessary safety measures by supervising contractors and reviewing risk analysis and hazard analysis plans for important actions."
        },
        {
          detail:
            "Monitored the efficiency of site hazard-control procedures, work method statements, and job safety plans."
        },
        {
          detail:
            "Conducted HSE inspections and submitted results to the resident engineer for prompt correction."
        },
        {
          detail:
            "Analyzed and followed up on contractors' monthly HSE reports and inspections."
        },
        {
          detail:
            "Conducted monthly safety meetings, established goals for unresolved issues, and prepared and submitted minutes to all parties for follow-up."
        },
        {
          detail: "Examined emergency response and permit requirements."
        }
      ]
    },
    {
      title: "Sr. Safety Officer / HSE Shift Incharge",
      company: "China Harbor Engineering Company (CHEC)",
      period: "Nov 2019 - Apr 2021",
      project: "Construction of CP 22 Connectivity Package / Manatek",
      responsibilities: [
        {
          detail:
            "Supported the HSE Manager and team in developing, coordinating, and implementing safe working practices, guidelines, and policies to achieve company goals."
        },
        {
          detail:
            "Supported project and operating teams in environmental, occupational health, and safety concerns."
        },
        {
          detail:
            "Served as the permit-to-work coordinator, which was the primary responsibility at CHEC."
        }
      ]
    },
    {
      title: "Chief Safety Officer",
      company: "Qatar Building Engineering Company Qatar",
      period: "Jun 2017 - Nov 2019",
      project:
        "Design & Build of Light Industrial & Logistics Unit for Free Zone and Precast Housing for Madinat Real Estate",
      responsibilities: [
        {
          detail:
            "Supported planning for EHS initiatives and programs and tracked corresponding milestones."
        },
        {
          detail:
            "Analyzed and monitored EHS standard compliance and created regular EHS measurements."
        },
        {
          detail:
            "Updated relevant EHS rules and regulations as they changed and recommended adjustments to internal standards."
        },
        {
          detail:
            "Participated in internal and external EHS audits to support responsible EHS officials."
        },
        {
          detail:
            "Applied theoretical and practical knowledge to assist business processes, technical problem-solving, and creation of new approaches, procedures, tools, and products."
        },
        {
          detail:
            "Led behavioral safety for a 10-member team, supporting a zero-harm culture."
        },
        {
          detail: "Tracked and updated EHS training records."
        }
      ]
    },
    {
      title: "Chief Safety Inspector",
      company: "CDM Smith Qatar",
      period: "Sep 2013 - Mar 2016",
      project: "Abu Humor Surface & Underground Drainage - ASHGHAL Tunnel and Micro Tunnel",
      responsibilities: [
        {
          detail:
            "Assisted in establishing and managing ESHARP Management and CDM Smith SH&E processes, identifying and removing or controlling dangers to people or property."
        },
        {
          detail:
            "Provided advice and assistance to the most senior construction site representative."
        },
        {
          detail:
            "Audited and inspected job sites to find and address safety hazards."
        },
        {
          detail:
            "Supervised medical professionals treating sick or injured workers who suffered industrial injuries."
        },
        {
          detail:
            "Created systematic audit reports of workplace accident records."
        },
        {
          detail:
            "Reported workplace accidents and performed accident investigations."
        },
        {
          detail:
            "Represented management during safety inspections by governmental agencies or business insurance providers."
        },
        {
          detail:
            "Obtained, examined, and disseminated safety inspection findings with suggested corrective measures."
        },
        {
          detail:
            "Oversaw new recruit safety orientation and other safety-related training."
        },
        {
          detail:
            "Performed risk evaluations for forthcoming projects and provided guidance."
        }
      ]
    },
    {
      title: "Safety Officer",
      company: "Shanghai Urban Construction Group (SUCG) India",
      period: "Nov 2011 - Aug 2013",
      project: "Metro Tunneling Chennai (UAA04 Package)",
      responsibilities: [
        {
          detail:
            "Created, enacted, and updated job safety programs for employees covering government health and safety regulations and company standards for safety in the workplace."
        },
        {
          detail:
            "Trained employees on the importance of health and safety on the job."
        }
      ]
    },
    {
      title: "Safety Officer",
      company: "DLF (Delhi Land & Finance)",
      period: "Nov 2005 - Nov 2011",
      project: "High Rise Residential, Office and Retail Properties, India",
      responsibilities: [
        {
          detail:
            "Monitored and regularly reviewed the department's organization and arrangement for safe working."
        },
        {
          detail:
            "Brought non-compliance with departmental safe-working arrangements to the attention of the HOD or departmental management at the appropriate level."
        },
        {
          detail:
            "Ensured records were maintained for training received by individuals appointed to specific safety roles and for mandatory safety training requirements."
        },
        {
          detail:
            "Assisted departmental management, Safety Services, and outside authorities in investigation of accidents and incidents."
        },
        {
          detail:
            "Acted as a point of contact for receiving and disseminating changes and updates from Safety Services in relation to legislation, HSE policy, objectives, and guidance."
        },
        {
          detail:
            "Monitored implementation of changes to departmental safe-working arrangements."
        }
      ]
    },
    {
      title: "Safety Officer",
      company: "Coastal Marine Construction & Engineering Co Ltd. (COMACOE)",
      period: "Dec 2001 - Nov 2005",
      project: "Construction of Underground Pumping Station & Pump House",
      responsibilities: [
        {
          detail:
            "Conducted air monitoring and sampling of spilled oil on scene and provided continuous air monitoring when necessary."
        },
        {
          detail:
            "Ensured workers were safely monitored through passive dosimeters."
        },
        {
          detail:
            "Provided heat or cold stress monitoring using WBGT or other measuring devices."
        },
        {
          detail:
            "Provided on-scene fatigue monitoring for work-rest regimen recommendations."
        },
        {
          detail:
            "Drafted the initial emergency response site safety plan and ensured copies were distributed promptly to staging areas and field personnel."
        },
        {
          detail:
            "Received reports from the Site Safety Enforcement Assistant and incorporated changes into the site safety plan."
        },
        {
          detail:
            "Ensured the site safety plan was completed in time to be incorporated into the Incident Action Plan."
        }
      ]
    }
  ],
  projects: [
    {
      name: "C2025/15 Remaining Infra and Road Works Package 01",
      role: "HSE Engineer",
      period: "Mar 2025 - Present",
      scope: [
        {
          label: "Roads",
          items: [
            "Road network with fully paved carriageways, signalised junctions, roundabouts, and pedestrian provisions.",
            "On-street parking layout, kerb lines, and adjacent footways.",
            "Road signs, lighting, road markings, and street signs.",
            "Soft and hard landscaping."
          ]
        },
        {
          label: "Storm Water Drainage",
          items: [
            "Completion of drainage system, including manholes, microtunnelling pumping station pipes, and backfilling works.",
            "Completion of partially completed pipelines, including CCTV surveys and defect rectifications."
          ]
        },
        {
          label: "Foul Sewerage",
          items: [
            "Completion of sewer network, including manholes, house connections, microtunnelling, pumping station, and reinstatement works.",
            "Completion of partially completed pipelines, including CCTV surveys and defect rectifications."
          ]
        },
        {
          label: "Treated Sewage Effluent (TSE) / Primary Irrigation",
          items: [
            "Completion of TSE network, including road crossing ducts, chambers, and connections with adjacent projects."
          ]
        },
        {
          label: "Street Lighting",
          items: ["Completion of street lighting, including columns, lanterns, and testing."]
        },
        {
          label: "Utilities - Kahramaa and Ooredoo",
          items: [
            "Potable water network, including protection, diversion, and connection with existing networks.",
            "Electrical network, including relocations, cable termination, and service cabinets.",
            "Telecoms and ITS completion of cable ducts and civil infrastructure network."
          ]
        }
      ]
    },
    {
      name: "Design and Construction of Al Bustan Street North - P007 C7 P2",
      role: "HSE Inspector",
      period: "Nov 2024 - Mar 2025",
      scope: [
        {
          label: "Scope of Work",
          items: [
            "Design and build of 4 interchanges.",
            "1 underpass at Junction K1.",
            "3 interchanges with bridges at Junction B4.",
            "2 bridges at Junction B5.",
            "9 bridges."
          ]
        }
      ]
    },
    {
      name: "Drainage Network Project",
      role: "HSE Inspector",
      period: "Nov 2023 - Sep 2024",
      scope: [
        {
          label: "Project",
          items: ["Flooding Prevention Scheme 03 - Doha North Area FPS3 / C-2020-58."]
        }
      ]
    },
    {
      name: "Central Doha & Corniche Beautification - Doha, Qatar",
      role: "HSE Inspector",
      period: "May 2021 - Nov 2023",
      scope: [
        {
          label: "Scope",
          items: ["Central Doha and Corniche beautification works in Doha, Qatar."]
        }
      ]
    },
    {
      name: "Construction of CP 22 Connectivity Manatek / Free Zone Authority",
      role: "Sr. HSE Officer / HSE Shift Incharge",
      period: "Nov 2019 - Apr 2021",
      scope: [
        {
          label: "Scope",
          items: [
            "Construction of utility, road, sewer, and pump houses.",
            "Network works for fire fighting, TSE, and potable water."
          ]
        }
      ]
    },
    {
      name: "Design & Build of Light Industrial & Logistics Manatek / Free Zone Authority and Precast Housing for Madinat Real Estate",
      role: "Chief Safety Officer",
      period: "Jun 2017 - Nov 2019",
      scope: [
        {
          label: "Scope",
          items: [
            "Construction of 06 warehouses for Free Zone.",
            "Construction and development of precast housing for Madinat Real Estate."
          ]
        }
      ]
    },
    {
      name: "Abu Humor Surface & Underground Drainage",
      role: "Chief Safety Inspector",
      period: "Sep 2011 - Mar 2016",
      scope: [
        {
          label: "Scope",
          items: [
            "ASHGHAL - Public Works Authority, Qatar project.",
            "NATM 110-meter works.",
            "Microtunnelling 2000 meters in different diameters.",
            "TBM tunnelling 9 km."
          ]
        }
      ]
    },
    {
      name: "Metro Tunneling Chennai (L&T SUCG JV), Tamil Nadu, India",
      role: "Safety Officer",
      period: "Nov 2011 - Aug 2013",
      scope: [
        {
          label: "Scope",
          items: ["UAA04 project with underground 03 km up-and-down dry tunnelling for metro rail."]
        }
      ]
    },
    {
      name: "High Rise Residential, Office and Retail Properties, India",
      role: "HSE Officer",
      period: "Nov 2005 - Nov 2011",
      scope: [
        {
          label: "Scope",
          items: ["High-rise residential, office, and retail property construction in India."]
        }
      ]
    },
    {
      name: "Construction of Underground Pumping Station & Pump House",
      role: "Safety Officer",
      period: "Dec 2001 - Nov 2005",
      scope: [
        {
          label: "Scope",
          items: [
            "Construction of underground pumping station and pump house.",
            "Microtunnelling and installation of offshore intake."
          ]
        }
      ]
    }
  ],
  declaration:
    "I hereby declare that the above particulars of facts and information stated are true, correct and complete to the best of my belief and knowledge.",
  declarationName: "Tanweerul Haque",
  faqs: [
    {
      question: "Who is Tanweerul Haque?",
      answer:
        "Tanweerul Haque is a civil infrastructure HSE professional with long-running safety experience across roads, drainage, tunneling, utilities, pumping stations, high-rise buildings, and major construction programs in Qatar and India."
    },
    {
      question: "What is Tanweerul Haque's current role?",
      answer:
        "He is currently an HSE Engineer with Parsons International Limited, working on C2025/15 Remaining Infra and Road Works Package 01 from March 2025 to present."
    },
    {
      question: "Which HSE responsibilities does he handle?",
      answer:
        "His work covers HIRA/JSA risk assessments, OSHA-aligned compliance, HSE policy implementation, inspections, audits, incident investigation, toolbox talks, emergency drills, environmental reporting, worker welfare, and KPI reporting such as LTIR and TRIR."
    },
    {
      question: "Which major infrastructure projects has he worked on?",
      answer:
        "His projects include Al Bustan Street North, Doha North FPS3, Central Doha & Corniche Beautification, CP 22 Connectivity Manatek, Abu Humor Surface & Underground Drainage, Chennai Metro Tunneling, high-rise properties, and underground pumping station works."
    },
    {
      question: "Which certifications are listed in his resume?",
      answer:
        "His certifications include Level 6 NVQ Diploma in Occupational Health and Safety Practice, ISO 45001:2018 Lead Auditor, GRADIOSH, NEBOSH Level 3 International General Certificate, OSHA 30HRS, IOSH Managing Safety, emergency response, confined space, work at height, COSHH, first aid, and fire fighting."
    },
    {
      question: "How can recruiters contact Tanweerul Haque?",
      answer:
        "Recruiters can contact Tanweerul Haque by email at haneefa.zohra@gmail.com or by phone at +974 55740090 and +91 8056237298."
    }
  ]
};
