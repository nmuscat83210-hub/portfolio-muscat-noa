import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import CompetenceCard from '../components/competences/CompetenceCard';
import CompetenceDetailModal from '../components/competences/CompetenceDetailModal';
import { useTranslation } from '../lib/i18n';
import { easeLuxury } from '../lib/animations';

const competencesGEII = [
  {
    name: { fr: "Concevoir", en: "Design" },
    description: {
      fr: "Concevoir des systèmes électroniques et informatiques industriels répondant aux besoins spécifiques.",
      en: "Design electronic and industrial computer systems meeting specific requirements."
    },
    level: 92,
    levelsByYear: [100, 90, 85],
    levelLabels: { fr: ["Niveau 1", "Niveau 2", "Niveau 3"], en: ["Level 1", "Level 2", "Level 3"] },
    icon: "Lightbulb",
    why: {
      fr: "🔹 Niveau 1 – 100 %\n\nNiveau officiel : « Mener une conception partielle intégrant une démarche projet ». Ce niveau est totalement maîtrisé : j'ai mené de nombreuses conceptions partielles dans le cadre d'une démarche projet, aussi bien en cours (schémas électroniques, logigrammes, tables de Karnaugh, câblage de systèmes simples) qu'en projet, notamment le robot détecteur d'obstacles avec son pont en H commandé par STM32, ou encore la serre automatique avec ses diagrammes de classe et schémas de câblage.\n\n🔹 Niveau 2 – 90 %\n\nNiveau officiel : « Concevoir un système en fiabilisant les solutions proposées ». J'ai démontré cette capacité à travers le projet CDM600/Cisco/STM32 (routage réseau, programmation embarquée, interfaces matérielles hétérogènes) et surtout Opti Plant : chaîne de supervision IoT complète (ESP32, LoRa, InfluxDB, site React, IA YOLO) avec fiabilisation des solutions (gestion d'erreurs, watchdog, persistance des données). Je me situe à 90 % car la conception de systèmes industriels certifiés (SIL, DO-178) reste à acquérir.\n\n🔹 Niveau 3 – 85 %\n\nNiveau officiel : « Concevoir un système en adoptant une approche sélective dans ses choix technologiques ». J'ai abordé ce niveau via Opti Plant (choix sélectifs : FreeRTOS multicœur sur ESP32, LoRa vs WiFi, Modbus TCP/IP, InfluxDB vs MySQL selon les contraintes temps réel) et la rétro-ingénierie chez Kontron (compréhension d'architectures complexes existantes). Le 15 % restant correspond aux méthodologies de conception formelle (MBSE, SysML complet, validation par simulation) non encore pratiquées.",
      en: "🔹 Level 1 – 100%\n\nOfficial level: \"Conduct a partial design integrating a project-based approach\". Fully mastered: I led numerous partial designs within a project approach, both in courses (electronic schematics, logic diagrams, Karnaugh maps, simple wiring) and in projects, notably the obstacle-detecting robot with its H-bridge controlled by STM32, and the automated greenhouse with class diagrams and wiring schematics.\n\n🔹 Level 2 – 90%\n\nOfficial level: \"Design a system by making the proposed solutions more reliable\". I demonstrated this through the CDM600/Cisco/STM32 project (network routing, embedded programming, heterogeneous hardware interfaces) and above all Opti Plant: a complete IoT supervision chain (ESP32, LoRa, InfluxDB, React site, YOLO AI) with solution reliability (error handling, watchdog, data persistence). I rate myself at 90% because the design of certified industrial systems (SIL, DO-178) remains to be acquired.\n\n🔹 Level 3 – 85%\n\nOfficial level: \"Design a system by adopting a selective approach in technological choices\". I approached this via Opti Plant (selective choices: multicore FreeRTOS on ESP32, LoRa vs WiFi, Modbus TCP/IP, InfluxDB vs MySQL based on real-time constraints) and reverse engineering at Kontron (understanding complex existing architectures). The remaining 15% corresponds to formal design methodologies (MBSE, complete SysML, simulation validation) not yet practiced."
    },
    fromCourses: {
      fr: "Électronique analogique, Systèmes numériques, Conception de circuits, Automatismes, Architecture des systèmes",
      en: "Analog electronics, Digital systems, Circuit design, Automation, Systems architecture"
    },
    fromProjects: {
      fr: "Robot détecteur d'obstacles, Serre automatique, CDM600 + Cisco + STM32, Projet Opti Plant",
      en: "Obstacle-detecting robot, Automated greenhouse, CDM600 + Cisco + STM32, Opti Plant Project"
    },
    fromWork: {
      fr: "Conception de solutions de test chez Kontron, architecture IoT Opti Plant",
      en: "Design of test solutions at Kontron, Opti Plant IoT architecture"
    },
    gallery_images: [
      "https://media.base44.com/images/public/693a7c34a791a122b93f4ce7/949c171dc_ProjetRobotdetecteurphotofonctionnementmoteur.png",
      "https://media.base44.com/images/public/693a7c34a791a122b93f4ce7/0c58c933c_ProjetRobotdetecteurphototestfonctionnempentmoteur.png",
      "https://media.base44.com/images/public/693a7c34a791a122b93f4ce7/45927b2ae_imageserreintelligenteoptiplant.jpg"
    ]
  },
  {
    name: { fr: "Vérifier", en: "Verify" },
    description: {
      fr: "Vérifier la conformité des systèmes, valider les performances et assurer la qualité.",
      en: "Verify system compliance, validate performance, and ensure quality."
    },
    level: 100,
    levelsByYear: [100, 100, 100],
    levelLabels: { fr: ["Niveau 1", "Niveau 2", "Niveau 3"], en: ["Level 1", "Level 2", "Level 3"] },
    icon: "Shield",
    why: {
      fr: "🔹 Niveau 1 – 100 %\n\nNiveau officiel : « Effectuer les tests et mesures nécessaires à une vérification d'un système ». Ce niveau est totalement maîtrisé : j'ai effectué quotidiennement ce type de vérification chez Kontron (tests de continuité, vérification des tensions d'alimentation, contrôles visuels selon les checklists) et chez Europe Qualité (campagnes d'étalonnage sur instruments de mesure).\n\n🔹 Niveau 2 – 100 %\n\nNiveau officiel : « Mettre en place un protocole de tests pour valider le fonctionnement d'un système ». Ce niveau est totalement maîtrisé : j'ai conçu et exécuté des protocoles de tests structurés (Burn-in avec PC Check), réalisé des diagnostics S.M.A.R.T. sur disques durs (HDD Expert, HD Tune), effectué des tests réseau automatisés via scripts Python, et vérifié la conformité ESD des environnements au téra-ohmmètre.\n\n🔹 Niveau 3 – 100 %\n\nNiveau officiel : « Élaborer une procédure intégrant une démarche qualité pour valider le fonctionnement d'un système ». Ce niveau est totalement maîtrisé : chez Kontron, j'ai pris en charge la métrologie du laboratoire (suivi des étalonnages via TRESCAL, vérification hebdomadaire des tournevis dynamométriques, métrologie bisannuelle des racks VME/cPCI/VPX), le tout dans un cadre ISO 9001 / EN9100. Chez Europe Qualité, j'ai rédigé des certificats d'étalonnage reconnus. La validation de protocoles (Shelly EM, réseaux IoT) complète cette démarche qualité.",
      en: "🔹 Level 1 – 100%\n\nOfficial level: \"Perform the tests and measurements necessary to verify a system\". Fully mastered: I performed this type of verification daily at Kontron (continuity tests, power supply voltage verification, visual checks per checklists) and at Europe Qualité (calibration campaigns on measuring instruments).\n\n🔹 Level 2 – 100%\n\nOfficial level: \"Set up a test protocol to validate the operation of a system\". Fully mastered: I designed and executed structured test protocols (Burn-in with PC Check), performed S.M.A.R.T. diagnostics on hard drives (HDD Expert, HD Tune), conducted automated network tests via Python scripts, and verified ESD compliance of environments with a tera-ohmmeter.\n\n🔹 Level 3 – 100%\n\nOfficial level: \"Develop a procedure integrating a quality approach to validate the operation of a system\". Fully mastered: at Kontron, I handled laboratory metrology (calibration tracking via TRESCAL, weekly verification of torque screwdrivers, biannual metrology of VME/cPCI/VPX racks), all within an ISO 9001 / EN9100 framework. At Europe Qualité, I wrote recognized calibration certificates. Protocol validation (Shelly EM, IoT networks) completes this quality approach."
    },
    fromCourses: {
      fr: "Mesures et instrumentation, Qualité, Métrologie, Normes industrielles",
      en: "Measurement and instrumentation, Quality, Metrology, Industrial standards"
    },
    fromProjects: {
      fr: "Validation systèmes ADS-B, Tests Shelly EM, Opti Plant (validation pipeline IoT)",
      en: "ADS-B system validation, Shelly EM tests, Opti Plant (IoT pipeline validation)"
    },
    fromWork: {
      fr: "Métrologie chez Europe Qualité, métrologie du laboratoire Kontron, campagnes Burn-in et stress-tests",
      en: "Metrology at Europe Qualité, Kontron laboratory metrology, Burn-in and stress-test campaigns"
    },
    gallery_images: [
      "https://media.base44.com/images/public/693a7c34a791a122b93f4ce7/8afbd9595_mtrologiecertificat.png",
      "https://media.base44.com/images/public/693a7c34a791a122b93f4ce7/52cb5628c_mtrologietableaudecalcul.png"
    ]
  },
  {
    name: { fr: "Maintenir", en: "Maintain" },
    description: {
      fr: "Diagnostiquer, réparer et assurer la maintenance préventive des systèmes.",
      en: "Diagnose, repair, and ensure preventive maintenance of systems."
    },
    level: 97,
    levelsByYear: [100, 95],
    levelLabels: { fr: ["Niveau 1", "Niveau 2"], en: ["Level 1", "Level 2"] },
    icon: "Wrench",
    why: {
      fr: "🔹 Niveau 1 – 100 %\n\nNiveau officiel : « Intervenir sur un système pour effectuer une opération de maintenance ». Ce niveau est totalement maîtrisé : pendant deux années complètes chez Kontron, j'ai réalisé des diagnostics analytiques et des réparations matérielles sur des calculateurs industriels durcis (Défense, Aéronautique, Ferroviaire) par la méthode des tests croisés. J'ai vérifié les étages d'alimentation (+12V, +5V, +3.3V), contrôlé les mémoires CMOS, extrait des données S.M.A.R.T., navigué en environnement EFI Shell, déployé des scripts Python de stress-test réseau, et appliqué des procédés spéciaux (Loctite, résine époxy, couples dynamométriques), dans le respect des normes ISO 9001, EN9100 et ESD.\n\n🔹 Niveau 2 – 95 %\n\nNiveau officiel : « Mettre en place une stratégie de maintenance pour garantir un fonctionnement optimal ». J'ai déployé une véritable stratégie de maintenance : pilotage complet de la métrologie du laboratoire (inventaire, envoi aux prestataires TRESCAL, vérification hebdomadaire des tournevis dynamométriques, métrologie bisannuelle des racks de test), création d'une base documentaire de maintenance par rétro-ingénierie pour les systèmes Legacy, gestion des produits chimiques (Loctite, alcool isopropylique) avec suivi Excel automatisé et alertes de péremption, et formation des nouveaux arrivants. Les 5 % restants correspondent à la formalisation d'un plan de maintenance industrielle à grande échelle (GMAO complète, indicateurs MTBF/MTTR) non encore mis en œuvre.",
      en: "🔹 Level 1 – 100%\n\nOfficial level: \"Intervene on a system to perform a maintenance operation\". Fully mastered: during two full years at Kontron, I performed analytical diagnostics and hardware repairs on ruggedized industrial computers (Defense, Aerospace, Rail) using the cross-testing method. I verified power stages (+12V, +5V, +3.3V), controlled CMOS memories, extracted S.M.A.R.T. data, navigated EFI Shell environments, deployed Python network stress-test scripts, and applied special processes (Loctite, epoxy resin, torque control), in compliance with ISO 9001, EN9100, and ESD standards.\n\n🔹 Level 2 – 95%\n\nOfficial level: \"Set up a maintenance strategy to guarantee optimal operation\". I deployed a genuine maintenance strategy: complete management of laboratory metrology (inventory, shipping to TRESCAL providers, weekly verification of torque screwdrivers, biannual metrology of test racks), creation of a maintenance document base by reverse engineering for Legacy systems, chemical management (Loctite, isopropyl alcohol) with automated Excel tracking and expiration alerts, and training of newcomers. The remaining 5% corresponds to the formalization of a large-scale industrial maintenance plan (complete CMMS, MTBF/MTTR indicators) not yet implemented."
    },
    fromCourses: {
      fr: "Maintenance industrielle, Diagnostic de pannes",
      en: "Industrial maintenance, Fault diagnosis"
    },
    fromProjects: {
      fr: "Documentation technique par rétro-ingénierie",
      en: "Technical documentation by reverse engineering"
    },
    fromWork: {
      fr: "Métrologie chez Europe Qualité, Réparation chez Kontron",
      en: "Metrology at Europe Qualité, Repair at Kontron"
    },
  },
  {
    name: { fr: "Implanter", en: "Implement" },
    description: {
      fr: "Réaliser, installer et mettre en service des systèmes dans une démarche qualité.",
      en: "Build, install, and commission systems within a quality approach."
    },
    level: 85,
    levelsByYear: [90, 80],
    levelLabels: { fr: ["Niveau 1", "Niveau 2"], en: ["Level 1", "Level 2"] },
    icon: "Settings",
    why: {
      fr: "🔹 Niveau 1 – 90 %\n\nNiveau officiel : « Réaliser un système en mettant en place une démarche qualité en conformité avec le dossier de fabrication ». J'ai réalisé de nombreuses installations électriques et électroniques en respectant une démarche qualité : câblage d'armoires, raccordement de capteurs, mise en service de systèmes automatisés simples en formation ; branchement du Shelly EM sur le réseau électrique, installation et configuration réseau d'instruments de mesure chez Europe Qualité. Chez Kontron, les opérations suivaient les dossiers de fabrication et procédures qualité (ISO 9001 / EN9100). Les 10 % restants correspondent à la rédaction autonome de dossiers de fabrication complets.\n\n🔹 Niveau 2 – 80 %\n\nNiveau officiel : « Interagir avec les différents acteurs, lors de l'installation et de la mise en service d'un système, dans une démarche qualité ». J'ai développé cette compétence via la mise en service du Shelly EM (coordination réseau/API/LabVIEW), du système CDM600/Cisco/STM32, et surtout le déploiement du serveur Opti Plant (WAMP sur Latte Panda, configuration Apache, mise en réseau inter-bâtiments) en interaction avec les 9 étudiants du projet et les utilisateurs finaux, dans une démarche qualité (tests de recette, validation). Le 20 % restant correspond aux installations industrielles certifiées avec plans d'exécution, essais de recette formels et documentation de mise en service normalisée.",
      en: "🔹 Level 1 – 90%\n\nOfficial level: \"Build a system by implementing a quality approach in compliance with the manufacturing file\". I performed numerous electrical and electronic installations respecting a quality approach: cabinet wiring, sensor connection, commissioning of simple automated systems in training; connecting the Shelly EM to the electrical network, installing and configuring network instruments at Europe Qualité. At Kontron, operations followed manufacturing files and quality procedures (ISO 9001 / EN9100). The remaining 10% corresponds to autonomously writing complete manufacturing files.\n\n🔹 Level 2 – 80%\n\nOfficial level: \"Interact with the various stakeholders during the installation and commissioning of a system, within a quality approach\". I developed this skill through commissioning the Shelly EM (network/API/LabVIEW coordination), the CDM600/Cisco/STM32 system, and above all deploying the Opti Plant server (WAMP on Latte Panda, Apache configuration, inter-building networking) in interaction with the 9 project students and end users, within a quality approach (acceptance testing, validation). The remaining 20% corresponds to certified industrial installations with execution plans, formal acceptance testing, and standardized commissioning documentation."
    },
    fromCourses: {
      fr: "Automatismes, Réseaux industriels, Systèmes embarqués, Électrotechnique",
      en: "Automation, Industrial networks, Embedded systems, Electrical engineering"
    },
    fromProjects: {
      fr: "Installation Shelly EM, Mise en service CDM600, Déploiement Opti Plant, Serre automatique",
      en: "Shelly EM installation, CDM600 commissioning, Opti Plant deployment, Automated greenhouse"
    },
    fromWork: {
      fr: "Installation et paramétrage d'équipements de test chez Kontron, mise en service Shelly EM",
      en: "Installation and configuration of test equipment at Kontron, Shelly EM commissioning"
    },
  }
];

const competencesHorsGEII = [
  {
    name: { fr: "Communiquer", en: "Communicate" },
    description: {
      fr: "Rédiger des documents techniques, présenter des projets et interagir avec les équipes.",
      en: "Write technical documents, present projects, and interact with teams."
    },
    level: 85,
    icon: "MessageSquare",
    why: {
      fr: "La communication technique fait partie intégrante de mon parcours. J'ai été amené à rédiger des documents techniques, à présenter des projets et à échanger avec des équipes pluridisciplinaires, ce qui m'a appris à adapter mon discours et à transmettre des informations complexes de manière claire et structurée.",
      en: "Technical communication is an integral part of my journey. I have been called upon to write technical documents, present projects, and interact with multidisciplinary teams, which taught me to adapt my discourse and convey complex information in a clear and structured manner."
    }
  },
  {
    name: { fr: "Gérer un projet", en: "Project Management" },
    description: {
      fr: "Planifier, organiser et suivre l'avancement de projets techniques.",
      en: "Plan, organize, and track the progress of technical projects."
    },
    level: 80,
    icon: "Target",
    why: {
      fr: "J'ai acquis cette compétence au cours de projets techniques menés en formation et en contexte professionnel. La planification, le suivi d'avancement et la coordination avec différents interlocuteurs m'ont permis de structurer efficacement mon travail et de respecter des objectifs précis, dans des délais contraints.",
      en: "I acquired this skill through technical projects conducted in both academic and professional settings. Planning, progress tracking, and coordination with various stakeholders enabled me to effectively structure my work and meet precise objectives within constrained deadlines."
    }
  },
  {
    name: { fr: "Droit Canonique", en: "Canon Law" },
    description: {
      fr: "Analyse juridique, logique de raisonnement, structuration de la pensée selon les principes du droit de l'Église.",
      en: "Legal analysis, reasoning logic, structuring of thought according to Church law principles."
    },
    level: 60,
    icon: "Scale",
    why: {
      fr: "Mon intérêt pour le droit canonique s'inscrit dans une démarche personnelle de compréhension des cadres normatifs et des systèmes de règles structurés. L'étude du droit de l'Église m'a permis de développer une capacité d'analyse rigoureuse, un raisonnement logique et une approche méthodique des textes, en tenant compte à la fois des principes, de leur hiérarchie et de leur application concrète.\n\nCette discipline m'a appris à structurer ma pensée, à interpréter des règles complexes et à articuler des normes théoriques avec des situations réelles. Elle renforce ainsi des compétences transversales essentielles en ingénierie, telles que la rigueur intellectuelle, la cohérence du raisonnement et le respect des cadres institutionnels.",
      en: "My interest in canon law is part of a personal approach to understanding normative frameworks and structured rule systems. The study of Church law enabled me to develop rigorous analytical capacity, logical reasoning, and a methodical approach to texts, taking into account both principles, their hierarchy, and their practical application.\n\nThis discipline taught me to structure my thinking, interpret complex rules, and articulate theoretical norms with real situations. It thus reinforces essential transversal skills in engineering, such as intellectual rigor, reasoning coherence, and respect for institutional frameworks."
    }
  },
  {
    name: { fr: "Maintenance Électronique", en: "Electronic Maintenance" },
    description: {
      fr: "Réparation de cartes électroniques, diagnostic de pannes, soudure CMS et gestion de composants.",
      en: "Electronic board repair, fault diagnosis, SMD soldering, and component management."
    },
    level: 90,
    icon: "Cpu",
    why: {
      fr: "La maintenance électronique constitue une part importante de mon expérience professionnelle. J'ai régulièrement réalisé des diagnostics de pannes sur des équipements et des cartes électroniques, effectué des interventions de maintenance corrective et préventive, ainsi que des opérations de soudure de composants CMS. Travailler sur des systèmes en conditions réelles m'a permis de développer une approche méthodique, orientée sécurité, fiabilité et continuité de fonctionnement des installations.",
      en: "Electronic maintenance constitutes a significant part of my professional experience. I regularly performed fault diagnostics on equipment and electronic boards, carried out corrective and preventive maintenance interventions, as well as SMD component soldering operations. Working on systems in real conditions enabled me to develop a methodical approach, oriented toward safety, reliability, and operational continuity of installations."
    }
  },
  {
    name: { fr: "Métrologie", en: "Metrology" },
    description: {
      fr: "Calibration d'instruments, gestion de base de données métrologique, suivi d'outillages.",
      en: "Instrument calibration, metrological database management, tool tracking."
    },
    level: 100,
    icon: "Settings",
    why: {
      fr: "La métrologie a été l'une de mes missions principales tout au long de mon alternance, d'abord comme cœur de métier, puis comme responsabilité transversale.\n\n1ère année de BUT – Europe Qualité (2023-2024)\nDurant cette première année, la métrologie constituait mon métier à temps plein. J'étais en charge de réaliser des étalonnages tant électroniques (multimètres, oscilloscopes, boîtes de résistances et mégohmmètres) que mécaniques (pinces à sertir sur colonne de force, baromètres et balances ultra-précises). Chacune de mes interventions nécessitait une grande rigueur et se concluait par la rédaction d'un certificat d'étalonnage officiel.\n\n2ème et 3ème années de BUT – Kontron (2024-2026)\nPar la suite, j'ai assumé de façon très régulière la responsabilité complète de la métrologie au sein du laboratoire de réparation. Mon rôle consistait à gérer l'inventaire et l'expédition des appareils de mesure à notre prestataire TRESCAL pour leur certification annuelle ou bisannuelle. En interne, j'assurais un suivi strict des équipements, notamment à travers la vérification hebdomadaire des tournevis dynamométriques, ainsi que la métrologie bisannuelle des racks de test (VME, cPCI, VPX) couvrant les contrôles d'isolation, la continuité de terre et la mesure des tensions.",
      en: "Metrology was one of my main missions throughout my apprenticeship, first as a core profession, then as a transversal responsibility.\n\n1st year of BUT – Europe Qualité (2023-2024)\nDuring this first year, metrology was my full-time profession. I was in charge of performing both electronic (multimeters, oscilloscopes, resistance boxes, and megohmmeters) and mechanical (crimping pliers on force column, barometers, and ultra-precise balances) calibrations. Each of my interventions required great rigor and concluded with the writing of an official calibration certificate.\n\n2nd and 3rd years of BUT – Kontron (2024-2026)\nSubsequently, I assumed on a very regular basis the complete responsibility for metrology within the repair laboratory. My role consisted of managing the inventory and shipping of measuring instruments to our provider TRESCAL for their annual or biannual certification. Internally, I ensured strict equipment tracking, notably through weekly verification of torque screwdrivers, as well as biannual metrology of test racks (VME, cPCI, VPX) covering insulation tests, ground continuity, and voltage measurement."
    },
    metrologieImages: [
      "https://media.base44.com/images/public/693a7c34a791a122b93f4ce7/8afbd9595_mtrologiecertificat.png",
      "https://media.base44.com/images/public/693a7c34a791a122b93f4ce7/52cb5628c_mtrologietableaudecalcul.png"
    ],
    metrologieDocs: [
      { url: "https://media.base44.com/files/public/693a7c34a791a122b93f4ce7/94c765046_mtrologierapportkontron.pdf", label: "Rapport Métrologie Kontron" },
      { url: "https://media.base44.com/images/public/693a7c34a791a122b93f4ce7/52cb5628c_mtrologietableaudecalcul.png", label: "Tableau de calcul métrologique" },
      { url: "https://media.base44.com/images/public/693a7c34a791a122b93f4ce7/8afbd9595_mtrologiecertificat.png", label: "Certificat d'étalonnage" }
    ]
  },
  {
    name: { fr: "Intelligence Artificielle", en: "Artificial Intelligence" },
    description: {
      fr: "Vision par ordinateur, entraînement de modèles YOLO, OpenCV et traitement d'images.",
      en: "Computer vision, YOLO model training, OpenCV, and image processing."
    },
    level: 55,
    icon: "Brain",
    why: {
      fr: "Cette compétence s'est construite à travers des travaux académiques concrets en vision par ordinateur et en apprentissage machine.\n\nLe Devoir Maison de Vision (encadré par M. GIES) m'a amené à développer en Python avec OpenCV un programme de segmentation et classification de fruits par couleur, forme et taille. Le travail a consisté à implémenter des masques HSV, des opérations morphologiques, l'algorithme Watershed et des critères géométriques pour détecter et identifier automatiquement pommes, nectarines, citrons et abricots.\n\nLe projet Opti Plant a représenté un niveau supérieur : constitution d'un dataset de 1054 images annotées via Label Studio (10 labels, 6 espèces végétales), entraînement (fine-tuning) d'un modèle YOLO11s sur Google Colab (GPU T4, 60 epochs, lr0=0.04), atteignant 91,2 % de précision et 82,6 % de recall. Le modèle a été déployé sur un serveur web local via un script Python appelé par PHP (shell_exec, librairie Ultralytics, OpenCV/FFmpeg).",
      en: "This skill was built through concrete academic work in computer vision and machine learning.\n\nThe Vision Homework Assignment (supervised by Mr. GIES) led me to develop in Python with OpenCV a program for fruit segmentation and classification by color, shape, and size. The work involved implementing HSV masks, morphological operations, the Watershed algorithm, and geometric criteria to automatically detect and identify apples, nectarines, lemons, and apricots.\n\nThe Opti Plant project represented a higher level: building a dataset of 1054 annotated images via Label Studio (10 labels, 6 plant species), training (fine-tuning) a YOLO11s model on Google Colab (GPU T4, 60 epochs, lr0=0.04), achieving 91.2% precision and 82.6% recall. The model was deployed on a local web server via a Python script called by PHP (shell_exec, Ultralytics library, OpenCV/FFmpeg)."
    },
    iaDocs: [
      "https://media.base44.com/files/public/693a7c34a791a122b93f4ce7/3bc53050c_DM_pomme-peches-abricot-citrons_Noa_MUSCAT.pdf"
    ]
  },
  {
    name: { fr: "Cybersécurité", en: "Cybersecurity" },
    description: {
      fr: "Analyse de vulnérabilités CVE, outils de reconnaissance (Shodan, WHOIS, Exploit-DB) et bonnes pratiques de sécurité.",
      en: "CVE vulnerability analysis, reconnaissance tools (Shodan, WHOIS, Exploit-DB), and security best practices."
    },
    level: 40,
    icon: "Shield",
    why: {
      fr: "En BUT GEII, j'ai suivi un TD de Cybersécurité encadré par M. Alpha Boubacar BAH (prof), qui constitue mon initiation formelle aux principes de sécurité des systèmes d'information.\n\nCe TD m'a permis de pratiquer l'analyse de vulnérabilités CVE sur des équipements utilisés en cours (STM32F4, Cisco WLC, Siemens SIMATIC S7, Schneider Modicon) via les bases de données publiques. J'ai calculé les moyennes CVSS (Schneider : 7,55 ; Siemens : 8,42 — niveau Élevé), utilisé Shodan pour identifier des systèmes réellement exposés sur Internet, et appliqué des techniques de reconnaissance passive comme le Google Dorking et les requêtes WHOIS/RDAP.\n\nCe travail m'a sensibilisé à la réalité des menaces sur les systèmes industriels et à l'importance du maintien à jour des firmwares.",
      en: "In the BUT GEII program, I took a Cybersecurity lab supervised by Mr. Alpha Boubacar BAH (professor), which constitutes my formal introduction to information system security principles.\n\nThis lab allowed me to practice CVE vulnerability analysis on equipment used in courses (STM32F4, Cisco WLC, Siemens SIMATIC S7, Schneider Modicon) via public databases. I calculated CVSS averages (Schneider: 7.55; Siemens: 8.42 — High level), used Shodan to identify systems actually exposed on the Internet, and applied passive reconnaissance techniques such as Google Dorking and WHOIS/RDAP queries.\n\nThis work sensitized me to the reality of threats on industrial systems and the importance of maintaining up-to-date firmware."
    },
    cybersecDocs: [
      "https://media.base44.com/files/public/693a7c34a791a122b93f4ce7/44e8aeb26_TD1CyberscuritMUSCAT.pdf"
    ]
  },
  {
    name: { fr: "Langages informatiques", en: "Programming Languages" },
    description: {
      fr: "Programmation embarquée, logicielle et algorithmique appliquée aux systèmes techniques.",
      en: "Embedded, software, and algorithmic programming applied to technical systems."
    },
    level: 80,
    icon: "Code",
    why: {
      fr: "Cette compétence s'est construite à travers ma formation en sciences de l'ingénieur et mes projets techniques. J'ai développé une pratique régulière de langages variés appliqués à des problématiques concrètes.\n\nEn C et C++, j'ai réalisé de la programmation embarquée sur STM32 et ESP32 (FreeRTOS, gestion SPI, IHM TFT), le code de contrôle moteur pour le robot détecteur d'obstacles, ainsi que des devoirs maison algorithmiques.\n\nEn Python, j'ai développé des scripts de stress-test réseau chez Kontron, un simulateur IoT de flotte de véhicules avec le protocole MQTT, des scripts d'entraînement YOLO pour Opti Plant, ainsi qu'un subscriber MQTT avec insertion MySQL dynamique.\n\nEn HTML/CSS/JavaScript, j'ai créé le site web du jeu éducatif CO2 et le dashboard OptiPlant avec fetch asynchrone interrogeant InfluxDB. En PHP, j'ai développé l'interface web de contrôle du système IoT véhicules et l'intégration du modèle IA YOLO via shell_exec. En SQL et InfluxDB, j'ai conçu des bases de données et les requêtes Flux temporelles d'OptiPlant. En LabVIEW, j'ai développé l'interface de supervision ShellyEM avec récupération API HTTP JSON.",
      en: "This skill was built through my engineering science education and technical projects. I developed regular practice of various languages applied to concrete problems.\n\nIn C and C++, I did embedded programming on STM32 and ESP32 (FreeRTOS, SPI management, TFT HMI), motor control code for the obstacle-detecting robot, as well as algorithmic homework assignments.\n\nIn Python, I developed network stress-test scripts at Kontron, an IoT vehicle fleet simulator with MQTT protocol, YOLO training scripts for Opti Plant, and an MQTT subscriber with dynamic MySQL insertion.\n\nIn HTML/CSS/JavaScript, I created the CO2 educational game website and the OptiPlant dashboard with async fetch querying InfluxDB. In PHP, I developed the web interface for the vehicle IoT system and YOLO AI model integration via shell_exec. In SQL and InfluxDB, I designed databases and OptiPlant's temporal Flux queries. In LabVIEW, I developed the ShellyEM supervision interface with HTTP JSON API retrieval."
    },
    codeDocs: [
      "https://media.base44.com/files/public/693a7c34a791a122b93f4ce7/67e6a6a79_informatiquechangementtableau.txt",
      "https://media.base44.com/files/public/693a7c34a791a122b93f4ce7/a3543196b_informatiquefacturecable.txt",
      "https://media.base44.com/files/public/693a7c34a791a122b93f4ce7/c11db5b68_sitevoyage.txt"
    ]
  },
  {
    name: { fr: "Base de Données", en: "Databases" },
    description: {
      fr: "Conception et exploitation de bases de données MySQL, InfluxDB, SQL, PHP/PDO, architecture IoT MQTT.",
      en: "Design and exploitation of MySQL, InfluxDB, SQL, PHP/PDO databases, IoT MQTT architecture."
    },
    level: 70,
    icon: "Database",
    why: {
      fr: "Cette compétence s'est développée à travers plusieurs projets combinant conception de bases de données, développement backend et architecture IoT.\n\nPour le projet de supervision de flotte de véhicules, j'ai conçu et implémenté une architecture complète. Deux programmes PHP constituent le tableau de bord administrateur : le premier génère une page web interactive qui se connecte à la base de données pour afficher tous les flux MQTT disponibles en comptant les mesures enregistrées ; le second met à jour les préférences en activant ou désactivant la collecte de données. La base de données MySQL comporte une table mesures stockant l'historique complet de la flotte et une table subscriptions dictant au système quels topics écouter. Un simulateur Python simule trois véhicules virtuels en calculant leur déplacement GPS réaliste, publie ces données via MQTT, et permet de simuler des recharges ou pannes. Un subscriber Python écoute les messages MQTT et sauvegarde automatiquement chaque donnée autorisée dans la table SQL.\n\nPour Opti Plant, j'ai déployé et administré une base de données MySQL hébergée sur Aiven Cloud, avec une architecture relationnelle complète. Les requêtes Flux sur InfluxDB pour les données temporelles des capteurs complètent ce panorama.",
      en: "This skill developed through several projects combining database design, backend development, and IoT architecture.\n\nFor the vehicle fleet supervision project, I designed and implemented a complete architecture. Two PHP programs constitute the admin dashboard: the first generates an interactive web page that connects to the database to display all available MQTT flows by counting recorded measurements; the second updates preferences by enabling or disabling data collection. The MySQL database contains a measurements table storing the complete fleet history and a subscriptions table dictating which topics the system should listen to. A Python simulator simulates three virtual vehicles by calculating their realistic GPS movement, publishes this data via MQTT, and allows simulating recharges or breakdowns. A Python subscriber listens to MQTT messages and automatically saves each authorized data item in the SQL table.\n\nFor Opti Plant, I deployed and administered a MySQL database hosted on Aiven Cloud, with a complete relational architecture. Flux queries on InfluxDB for sensor temporal data complete this panorama."
    },
  },
  {
    name: { fr: "Autonomie & Organisation", en: "Autonomy & Organization" },
    description: {
      fr: "Gestion du temps, priorisation des tâches, capacité à travailler de manière indépendante.",
      en: "Time management, task prioritization, ability to work independently."
    },
    level: 95,
    icon: "Target",
    why: {
      fr: "Mon parcours en formation et en alternance m'a conduit à développer une forte autonomie et une organisation rigoureuse. La gestion simultanée des cours, projets et missions professionnelles m'a appris à prioriser efficacement les tâches et à travailler de manière fiable dans un environnement structuré.",
      en: "My academic and apprenticeship journey led me to develop strong autonomy and rigorous organization. Simultaneously managing courses, projects, and professional missions taught me to effectively prioritize tasks and work reliably in a structured environment."
    }
  },
  {
    name: { fr: "Travail d'équipe", en: "Teamwork" },
    description: {
      fr: "Collaboration efficace, communication interpersonnelle, esprit de cohésion.",
      en: "Effective collaboration, interpersonal communication, team spirit."
    },
    level: 95,
    icon: "Users",
    why: {
      fr: "Cette compétence s'est affirmée aussi bien en formation qu'en entreprise, à travers des projets collectifs exigeants menés jusqu'à leur terme.\n\nÀ l'IUT, j'ai collaboré sur de nombreux projets en équipe, notamment le projet Opti Plant (9 étudiants, sprint intensif de 10 jours) où j'ai pris en charge le module Supervision Web. Coordonner 9 développeurs sur des technologies hétérogènes lors d'un sprint intensif a nécessité l'utilisation d'outils collaboratifs (GitHub, outil OPTI-SYNC sur-mesure avec IA de gestion de projet) et une communication constante et précise entre sous-groupes.\n\nEn entreprise chez Kontron, j'ai travaillé en équipe avec d'autres techniciens de réparation, assurant la transmission des savoir-faire aux nouveaux arrivants et la communication inter-équipes.",
      en: "This skill was affirmed both in training and in companies, through demanding collective projects carried through to completion.\n\nAt the IUT, I collaborated on numerous team projects, notably the Opti Plant project (9 students, intensive 10-day sprint) where I took charge of the Web Supervision module. Coordinating 9 developers on heterogeneous technologies during an intensive sprint required the use of collaborative tools (GitHub, custom OPTI-SYNC tool with AI project management) and constant, precise communication between subgroups.\n\nAt Kontron, I worked in a team with other repair technicians, ensuring the transmission of know-how to newcomers and inter-team communication."
    }
  },
  {
    name: { fr: "Anglais technique", en: "Technical English" },
    description: {
      fr: "Compréhension, rédaction et échange sur des sujets techniques en anglais. Niveau ingénieur.",
      en: "Comprehension, writing, and discussion of technical topics in English. Engineer level."
    },
    level: 100,
    icon: "Globe",
    why: {
      fr: "L'anglais technique est une compétence quotidienne dans mon parcours d'ingénieur. Je consulte systématiquement les documentations techniques, datasheets, normes (IEEE, ISO) et ressources académiques en anglais. La lecture de code commenté en anglais, de dépôts GitHub, de forums Stack Overflow et de documentation d'API fait partie de ma pratique habituelle.\n\nMon score TOEIC de 955/990 (niveau C1 avancé, proche du niveau ingénieur C2) atteste objectivement de ce niveau. Je suis capable de rédiger des rapports techniques, de présenter des projets et de m'exprimer sur des sujets d'ingénierie avec aisance, aussi bien à l'écrit qu'à l'oral.",
      en: "Technical English is a daily skill in my engineering journey. I systematically consult technical documentation, datasheets, standards (IEEE, ISO), and academic resources in English. Reading code commented in English, GitHub repositories, Stack Overflow forums, and API documentation is part of my regular practice.\n\nMy TOEIC score of 955/990 (C1 advanced level, close to engineer C2 level) objectively attests to this level. I am capable of writing technical reports, presenting projects, and expressing myself on engineering topics with ease, both in writing and orally."
    },
    toeicScore: 955,
    toeicDoc: "https://media.base44.com/files/public/693a7c34a791a122b93f4ce7/fa44e0d26_CertificatTOEIC.pdf"
  }
];

function resolveCompetence(comp, lang) {
  const resolved = { ...comp };
  for (const key of ['name', 'description', 'why', 'fromCourses', 'fromProjects', 'fromWork']) {
    if (comp[key] && typeof comp[key] === 'object' && comp[key][lang]) {
      resolved[key] = comp[key][lang];
    }
  }
  if (comp.levelLabels && typeof comp.levelLabels === 'object' && !Array.isArray(comp.levelLabels)) {
    resolved.levelLabels = comp.levelLabels[lang];
  }
  return resolved;
}

export default function Competences() {
  const { t, lang } = useTranslation();
  const [selectedCompetence, setSelectedCompetence] = useState(null);

  const geiiData = competencesGEII.map(c => resolveCompetence(c, lang));
  const horsGEIIData = competencesHorsGEII.map(c => resolveCompetence(c, lang));

  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 lg:mb-24">
        <SectionTitle 
          title={t.competences.title}
          subtitle={t.competences.subtitle}
          align="center"
        />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: easeLuxury }}
          className="text-center text-base lg:text-lg text-black/60 font-light max-w-2xl mx-auto"
        >
          {t.competences.intro}
        </motion.p>
      </section>

      {/* Compétences GEII */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20 lg:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: easeLuxury }}
          className="mb-12"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#CBAF73] font-medium mb-3 block">
            {t.competences.geiiLabel}
          </span>
          <h3 className="text-2xl md:text-3xl font-light">{t.competences.geiiTitle}</h3>
          <p className="text-sm text-black/50 mt-2">
            {t.competences.geiiDesc}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {geiiData.map((comp, index) => (
            <CompetenceCard 
              key={comp.name} 
              competence={comp} 
              index={index}
              onClick={setSelectedCompetence}
            />
          ))}
        </div>
      </section>

      {/* Compétences Hors GEII */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: easeLuxury }}
          className="mb-12"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#CBAF73] font-medium mb-3 block">
            {t.competences.transversalLabel}
          </span>
          <h3 className="text-2xl md:text-3xl font-light">{t.competences.transversalTitle}</h3>
          <p className="text-sm text-black/50 mt-2">
            {t.competences.transversalDesc}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {horsGEIIData.map((comp, index) => (
            <CompetenceCard 
              key={comp.name} 
              competence={comp} 
              index={index}
              onClick={setSelectedCompetence}
            />
          ))}
        </div>
      </section>

      {/* Detail Modal */}
      {selectedCompetence && (
        <CompetenceDetailModal
          competence={selectedCompetence}
          onClose={() => setSelectedCompetence(null)}
        />
      )}
    </div>
  );
}