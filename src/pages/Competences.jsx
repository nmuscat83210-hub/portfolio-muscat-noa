import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import CompetenceCard from '../components/competences/CompetenceCard';
import CompetenceDetailModal from '../components/competences/CompetenceDetailModal';

const competencesGEII = [
  {
    name: "Concevoir",
    description: "Concevoir des systèmes électroniques et informatiques industriels répondant aux besoins spécifiques.",
    level: 92,
    levelsByYear: [100, 90, 85],
    levelLabels: ["Niveau 1", "Niveau 2", "Niveau 3"],
    icon: "Lightbulb",
    why: `🔹 Niveau 1 – 100 %\n\nLe niveau 1 de la compétence Concevoir couvre la conception de systèmes simples et la réalisation de schémas électroniques de base. Ce niveau est totalement maîtrisé : j'ai conçu de nombreux systèmes en cours (schémas électroniques, logigrammes, tables de Karnaugh, câblage de systèmes simples) ainsi qu'en projet, notamment le robot détecteur d'obstacles avec son pont en H commandé par un STM32, ou encore la serre automatique avec les diagrammes de classe et les schemas de câblage.\n\n🔹 Niveau 2 – 90 %\n\nLe niveau 2 implique la conception de systèmes plus complexes intégrant plusieurs sous-ensembles (puissance + commande + communication). J'ai largement démontré cette capacité à travers le projet CDM600/Cisco/STM32, qui associe routage réseau, programmation embarquée et interfaces matérielles hétérogènes. Le projet Opti Plant en est la démonstration la plus aboutie : conception d'une chaîne de supervision IoT complète (ESP32, LoRa, InfluxDB, site web React, IA YOLO). Je me situe à 90 % car la conception de systèmes industriels certifiés (niveaux SIL, DO-178) reste à acquérir.\n\n🔹 Niveau 3 – 85 %\n\nLe niveau 3 concerne la conception d'architectures système globales en respectant des contraintes fortes (coût, temps réel, sécurité, fiabilité). J'ai abordé ce niveau via Opti Plant (architecture FreeRTOS multicœur sur ESP32 avec gestion de mutex, protocoles Modbus TCP/IP) et la documentation technique par rétro-ingénierie chez Kontron (compréhension d'architectures complexes existantes). Le 15 % restant correspond aux méthodologies de conception formelle (MBSE, SysML complet, validation par simulation) non encore pratiquées.`,
    fromCourses: "Électronique analogique, Systèmes numériques, Conception de circuits, Automatismes, Architecture des systèmes",
    fromProjects: "Robot détecteur d'obstacles, Serre automatique, CDM600 + Cisco + STM32, Projet Opti Plant",
    fromWork: "Conception de solutions de test chez Kontron, architecture IoT Opti Plant",
    gallery_images: [
      "https://media.base44.com/images/public/693a7c34a791a122b93f4ce7/949c171dc_ProjetRobotdetecteurphotofonctionnementmoteur.png",
      "https://media.base44.com/images/public/693a7c34a791a122b93f4ce7/0c58c933c_ProjetRobotdetecteurphototestfonctionnempentmoteur.png",
      "https://media.base44.com/images/public/693a7c34a791a122b93f4ce7/45927b2ae_imageserreintelligenteoptiplant.jpg"
    ]
  },
  {
    name: "Vérifier",
    description: "Vérifier la conformité des systèmes, valider les performances et assurer la qualité.",
    level: 100,
    levelsByYear: [100, 100, 100],
    levelLabels: ["Niveau 1", "Niveau 2", "Niveau 3"],
    icon: "Shield",
    why: `🔹 Niveau 1 – 100 %\n\nLe niveau 1 de Vérifier recouvre les tests fonctionnels de base et la vérification de la conformité d'un système simple. Ce niveau est totalement maîtrisé : j'ai effectué quotidiennement ce type de vérification chez Kontron (tests de continuité, vérification de tensions d'alimentation, contrôles visuels selon les checklists) et chez Europe Qualité (réalisation de campagnes d'étalonnage sur instruments de mesure).\n\n🔹 Niveau 2 – 100 %\n\nLe niveau 2 implique la mise en place de plans de test structurés, l'utilisation d'outils de diagnostic avancés et l'interprétation de résultats dans un contexte de certification qualité. Ce niveau est totalement maîtrisé : j'ai conçu et exécuté des campagnes de stress-tests (Burn-in avec PC Check), réalisé des diagnostics S.M.A.R.T. sur disques durs (HDD Expert, HD Tune), effectué des tests réseau automatisés via scripts Python, et vérifié la conformité ESD des environnements de travail au téra-ohmmètre. L'ensemble s'inscrit dans un cadre ISO 9001 / EN9100.\n\n🔹 Niveau 3 – 100 %\n\nLe niveau 3 concerne la définition de la stratégie de vérification globale d'un système et la mise en place de la traçabilité métrologique complète. Ce niveau est totalement maîtrisé : chez Kontron, j'ai pris en charge la métrologie du laboratoire (suivi des étalonnages via TRESCAL, vérification hebdomadaire des tournevis dynamométriques avec consignation Excel, métrologie bisannuelle des racks de test VME/cPCI/VPX). Chez Europe Qualité, j'ai été acteur de la chaîne métrologique officielle (rédaction de certificats d'étalonnage reconnus). La vérification à haut niveau de système (protocoles Shelly EM, validation de réseaux IoT) complète cette maîtrise.`,
    fromCourses: "Mesures et instrumentation, Qualité, Métrologie, Normes industrielles",
    fromProjects: "Validation systèmes ADS-B, Tests Shelly EM, Opti Plant (validation pipeline IoT)",
    fromWork: "Métrologie chez Europe Qualité, métrologie du laboratoire Kontron, campagnes Burn-in et stress-tests",
    gallery_images: [
      "https://media.base44.com/images/public/693a7c34a791a122b93f4ce7/8afbd9595_mtrologiecertificat.png",
      "https://media.base44.com/images/public/693a7c34a791a122b93f4ce7/52cb5628c_mtrologietableaudecalcul.png"
    ]
  },
  {
    name: "Maintenir",
    description: "Diagnostiquer, réparer et assurer la maintenance préventive des systèmes.",
    level: 95,
    levelsByYear: [85, 95],
    icon: "Wrench",
    why: `🔹 Niveau BUT2 – 85 %

Ce niveau correspond aux compétences acquises lors de mes premières expériences professionnelles. Chez Europe Qualité, j'étais chargé de la maintenance d'appareils de mesure, incluant des opérations de vérification, d'étalonnage et d'ajustement afin d'assurer leur conformité.

Lors de ma première année chez Kontron, j'ai également débuté en tant que technicien de réparation, en réalisant des interventions de maintenance corrective sur des systèmes électroniques, ce qui m'a permis de consolider mes bases en diagnostic et réparation.

🔹 Niveau BUT3 – 95 %

En BUT3, j'ai poursuivi et approfondi ma spécialisation en maintenance électronique en tant que technicien de réparation. J'interviens désormais de manière autonome sur des systèmes complexes, avec une approche méthodique et structurée.

Le fait de rédiger des documentations techniques de réparation démontre non seulement ma maîtrise technique, mais également ma capacité à transmettre des connaissances, jusqu'à un niveau proche de l'enseignement des bonnes pratiques de réparation.`,
    fromCourses: "Maintenance industrielle, Diagnostic de pannes",
    fromProjects: "Documentation technique par rétro-ingénierie",
    fromWork: "Métrologie chez Europe Qualité, Réparation chez Kontron",
    level: 98,
    levelsByYear: [100, 100],
    levelLabels: ["Niveau 2", "Niveau 3"],
    why: `🔹 Niveau 2 – 100 %\n\nLe niveau 2 de Maintenir concerne la maintenance corrective et préventive de systèmes électroniques. Ce niveau est totalement maîtrisé : pendant deux années complètes chez Kontron, j'ai réalisé des diagnostics analytiques et des réparations matérielles sur des calculateurs industriels durcis (Défense, Aéronautique, Ferroviaire) par la méthode des tests croisés. J'ai vérifié les étages d'alimentation (+12V, +5V, +3.3V), contrôlé les mémoires CMOS, extrait des données S.M.A.R.T., navigué en environnement bas niveau EFI Shell, déployé des scripts Python de stress-test réseau, et appliqué des procédés spéciaux (Loctite, résine époxy, couples dynamométriques). Tout cela dans le respect des normes ISO 9001, EN9100 et ESD.\n\n🔹 Niveau 3 – 100 %\n\nLe niveau 3 implique la formalisation et la transmission des savoir-faire de maintenance, ainsi que la gestion métrologique complète du laboratoire. Ce niveau est totalement maîtrisé : j'ai mené le projet de documentation technique par rétro-ingénierie (création d'une base documentaire de maintenance pour des systèmes Legacy), assuré la métrologie complète du laboratoire (inventaire, envoi aux prestataires TRESCAL, vérification hebdomadaire des outils), géré les produits chimiques (Loctite, alcool isopropylique) avec suivi Excel automatisé et alertes de péremption, et formé les nouveaux arrivants via des outils pédagogiques.`
  },
  {
    name: "Installer",
    description: "Installer et mettre en service des équipements électriques et automatisés.",
    level: 85,
    levelsByYear: [100, 85, 70],
    levelLabels: ["Niveau 1", "Niveau 2", "Niveau 3"],
    icon: "Settings",
    why: `🔹 Niveau 1 – 100 %\n\nLe niveau 1 de la compétence Installer couvre le câblage et la mise en service d'équipements simples. Ce niveau est totalement maîtrisé : j'ai réalisé de nombreuses installations électriques et électroniques en cours de formation (câblage d'armoires, raccordement de capteurs, mise en service de systèmes automatisés simples) et en entreprise (branchement du Shelly EM sur le réseau électrique, installation et configuration réseau d'instruments de mesure chez Europe Qualité).\n\n🔹 Niveau 2 – 85 %\n\nLe niveau 2 concerne l'installation et la mise en service de systèmes plus complexes impliquant plusieurs couches techniques (réseau, logiciel, matériel). J'ai développé cette compétence via la mise en service du Shelly EM avec connexion réseau, API et interface LabVIEW, via la mise en service du système CDM600/Cisco/STM32, et via le déploiement du serveur Opti Plant (WAMP sur Latte Panda, configuration Apache, mise en réseau inter-bâtiments). Le 15 % restant correspond aux installations industrielles haute tension et aux systèmes de sécurité certifiés.\n\n🔹 Niveau 3 – 70 %\n\nLe niveau 3 implique l'installation de systèmes complexes en environnement industriel réel avec gestion des contraintes terrain (IP67, alimentation 24Vdc, antennes extérieures). Je l'ai abordé via Opti Plant (installation d'antennes Yagi sur toiture, mât en hauteur sur ombrière, câblage coaxiaux extérieurs). Le 30 % restant correspond à l'expérience en installation de systèmes industriels certifiés avec plans d'exécution complets, essais de recette et documentation de mise en service formelle.`,
    fromCourses: "Automatismes, Réseaux industriels, Systèmes embarqués, Électrotechnique",
    fromProjects: "Installation Shelly EM, Mise en service CDM600, Déploiement Opti Plant, Serre automatique",
    fromWork: "Installation et paramétrage d'équipements de test chez Kontron, mise en service Shelly EM"
  }
];

const competencesHorsGEII = [
  {
    name: "Communiquer",
    description: "Rédiger des documents techniques, présenter des projets et interagir avec les équipes.",
    level: 85,
    icon: "MessageSquare",
    why: "La communication technique fait partie intégrante de mon parcours. J'ai été amené à rédiger des documents techniques, à présenter des projets et à échanger avec des équipes pluridisciplinaires, ce qui m'a appris à adapter mon discours et à transmettre des informations complexes de manière claire et structurée."
  },
  {
    name: "Gérer un projet",
    description: "Planifier, organiser et suivre l'avancement de projets techniques.",
    level: 80,
    icon: "Target",
    why: "J'ai acquis cette compétence au cours de projets techniques menés en formation et en contexte professionnel. La planification, le suivi d'avancement et la coordination avec différents interlocuteurs m'ont permis de structurer efficacement mon travail et de respecter des objectifs précis, dans des délais contraints."
  },
  {
    name: "Droit Canonique",
    description: "Analyse juridique, logique de raisonnement, structuration de la pensée selon les principes du droit de l'Église.",
    level: 60,
    icon: "Scale",
    why: "Mon intérêt pour le droit canonique s'inscrit dans une démarche personnelle de compréhension des cadres normatifs et des systèmes de règles structurés. L'étude du droit de l'Église m'a permis de développer une capacité d'analyse rigoureuse, un raisonnement logique et une approche méthodique des textes, en tenant compte à la fois des principes, de leur hiérarchie et de leur application concrète.\n\nCette discipline m'a appris à structurer ma pensée, à interpréter des règles complexes et à articuler des normes théoriques avec des situations réelles. Elle renforce ainsi des compétences transversales essentielles en ingénierie, telles que la rigueur intellectuelle, la cohérence du raisonnement et le respect des cadres institutionnels."
  },
  {
    name: "Maintenance Électronique",
    description: "Réparation de cartes électroniques, diagnostic de pannes, soudure CMS et gestion de composants.",
    level: 90,
    icon: "Cpu",
    why: "La maintenance électronique constitue une part importante de mon expérience professionnelle. J'ai régulièrement réalisé des diagnostics de pannes sur des équipements et des cartes électroniques, effectué des interventions de maintenance corrective et préventive, ainsi que des opérations de soudure de composants CMS. Travailler sur des systèmes en conditions réelles m'a permis de développer une approche méthodique, orientée sécurité, fiabilité et continuité de fonctionnement des installations."
  },
  {
    name: "Métrologie",
    description: "Calibration d'instruments, gestion de base de données métrologique, suivi d'outillages.",
    level: 100,
    icon: "Settings",
    why: "La métrologie a été l'une de mes missions principales tout au long de mon alternance, d'abord comme cœur de métier, puis comme responsabilité transversale.\n\n1ère année de BUT – Europe Qualité (2023-2024)\nDurant cette première année, la métrologie constituait mon métier à temps plein. J'étais en charge de réaliser des étalonnages tant électroniques (multimètres, oscilloscopes, boîtes de résistances et mégohmmètres) que mécaniques (pinces à sertir sur colonne de force, baromètres et balances ultra-précises). Chacune de mes interventions nécessitait une grande rigueur et se concluait par la rédaction d'un certificat d'étalonnage officiel, garantissant ainsi une parfaite traçabilité par rapport aux étalons nationaux.\n\n2ème et 3ème années de BUT – Kontron (2024-2026)\nPar la suite, bien qu'il s'agisse d'une mission secondaire, j'ai assumé de façon très régulière la responsabilité complète de la métrologie au sein du laboratoire de réparation. Mon rôle consistait à gérer l'inventaire et l'expédition des appareils de mesure (comme les multimètres et contrôleurs ESD) à notre prestataire TRESCAL pour leur certification annuelle ou bisannuelle. En interne, j'assurais un suivi strict des équipements, notamment à travers la vérification hebdomadaire des tournevis dynamométriques impliquant cinq mesures par cran avec une tolérance de ±5%, le tout consigné dans un fichier de traçabilité dédié. Enfin, je pilotais les campagnes de métrologie ESD des sols, chaises et paillasses à l'aide d'instruments de précision (téra-ohmmètre et giga-ohmmètre) pour garantir une résistance < 10⁹ Ω, ainsi que la métrologie bisannuelle des racks de test (VME, cPCI, VPX) couvrant les contrôles d'isolation, la continuité de terre et la mesure des tensions avec et sans charge.",
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
    name: "Intelligence Artificielle",
    description: "Vision par ordinateur, entraînement de modèles YOLO, OpenCV et traitement d'images.",
    level: 55,
    icon: "Brain",
    why: "Cette compétence s'est construite à travers des travaux académiques concrets en vision par ordinateur et en apprentissage machine.\n\nLe Devoir Maison de Vision (encadré par M. GIES) m'a amené à développer en Python avec OpenCV un programme de segmentation et classification de fruits par couleur, forme et taille. Le travail a consisté à implémenter des masques HSV, des opérations morphologiques, l'algorithme Watershed et des critères géométriques pour détecter et identifier automatiquement pommes, nectarines, citrons et abricots. Ce DM a exigé plusieurs itérations de méthodes et une forte capacité d'analyse des échecs intermédiaires.\n\nLe projet Opti Plant a représenté un niveau supérieur : constitution d'un dataset de 1054 images annotées via Label Studio (10 labels, 6 espèces végétales), entraînement (fine-tuning) d'un modèle YOLO11s sur Google Colab (GPU T4, 60 epochs, lr0=0.04), atteignant 91,2 % de précision et 82,6 % de recall. Le modèle a été déployé sur un serveur web local via un script Python appelé par PHP (shell_exec, librairie Ultralytics, OpenCV/FFmpeg).",
    iaDocs: [
      "https://media.base44.com/files/public/693a7c34a791a122b93f4ce7/3bc53050c_DM_pomme-peches-abricot-citrons_Noa_MUSCAT.pdf"
    ]
  },
  {
    name: "Cybersécurité",
    description: "Analyse de vulnérabilités CVE, outils de reconnaissance (Shodan, WHOIS, Exploit-DB) et bonnes pratiques de sécurité.",
    level: 40,
    icon: "Shield",
    why: "En BUT GEII, j'ai suivi un TD de Cybersécurité encadré par M. Alpha Boubacar BAH (prof), qui constitue mon initiation formelle aux principes de sécurité des systèmes d'information.\n\nCe TD m'a permis de pratiquer l'analyse de vulnérabilités CVE sur des équipements utilisés en cours (STM32F4, Cisco WLC, Siemens SIMATIC S7, Schneider Modicon) via les bases de données publiques. J'ai calculé les moyennes CVSS (Schneider : 7,55 ; Siemens : 8,42 — niveau Élevé), utilisé Shodan pour identifier des systèmes réellement exposés sur Internet (Raspberry Pi, systèmes domotiques), et appliqué des techniques de reconnaissance passive comme le Google Dorking (filetype:pdf, site:, filetype:txt) et les requêtes WHOIS/RDAP.\n\nCe travail m'a sensibilisé à la réalité des menaces sur les systèmes industriels que j'utilise au quotidien et à l'importance du maintien à jour des firmwares.",
    cybersecDocs: [
      "https://media.base44.com/files/public/693a7c34a791a122b93f4ce7/44e8aeb26_TD1CyberscuritMUSCAT.pdf"
    ]
  },
  {
    name: "Langages informatiques",
    description: "Programmation embarquée, logicielle et algorithmique appliquée aux systèmes techniques.",
    level: 80,
    icon: "Code",
    why: "Cette compétence s'est construite à travers ma formation en sciences de l'ingénieur et mes projets techniques, aussi bien académiques que personnels. J'ai développé une pratique régulière de langages variés appliqués à des problématiques concrètes.\n\nEn C et C++, j'ai réalisé de la programmation embarquée sur STM32 et ESP32 (FreeRTOS, gestion SPI, IHM TFT), le code de contrôle moteur pour le robot détecteur d'obstacles, ainsi que des devoirs maison algorithmiques comme la manipulation de tableaux en C (inversion, recherche de maximum, comptage conditionnel) ou le calcul d'une facture câble avec remises et TVA.\n\nEn Python, j'ai développé des scripts de stress-test réseau chez Kontron, un simulateur IoT de flotte de véhicules avec le protocole MQTT (Paho, Geopy, threading), des scripts d'entraînement YOLO pour Opti Plant, ainsi qu'un subscriber MQTT avec insertion MySQL dynamique.\n\nEn HTML/CSS/JavaScript, j'ai créé le site web du jeu éducatif CO2 et un site voyage / jeu escape game en ligne comme projet personnel, ainsi que le dashboard OptiPlant avec fetch asynchrone interrogeant InfluxDB. En PHP, j'ai développé l'interface web de contrôle du système IoT véhicules (PDO MySQL, endpoints sécurisés) et l'intégration du modèle IA YOLO via shell_exec. En SQL et InfluxDB, j'ai conçu la base de données véhicules (tables mesures et subscriptions) et les requêtes Flux temporelles d'OptiPlant. En LabVIEW, j'ai développé l'interface de supervision ShellyEM avec récupération API HTTP JSON.",
    codeDocs: [
      "https://media.base44.com/files/public/693a7c34a791a122b93f4ce7/67e6a6a79_informatiquechangementtableau.txt",
      "https://media.base44.com/files/public/693a7c34a791a122b93f4ce7/a3543196b_informatiquefacturecable.txt",
      "https://media.base44.com/files/public/693a7c34a791a122b93f4ce7/c11db5b68_sitevoyage.txt"
    ]
  },
  {
    name: "Base de Données",
    description: "Conception et exploitation de bases de données MySQL, InfluxDB, SQL, PHP/PDO, architecture IoT MQTT.",
    level: 70,
    icon: "Database",
    why: "Cette compétence s'est développée à travers plusieurs projets combinant conception de bases de données, développement backend et architecture IoT.\n\nPour le projet de supervision de flotte de véhicules, j'ai conçu et implémenté une architecture complète. Deux programmes PHP constituent le tableau de bord administrateur : le premier génère une page web interactive qui se connecte à la base de données pour afficher tous les flux MQTT disponibles (latitude, batterie, etc.) en comptant les mesures enregistrées pour chacun ; le second met à jour les préférences en activant (1) ou désactivant (0) la collecte de données selon les cases cochées par l'utilisateur. La base de données MySQL base_vehicules comporte une table mesures stockant l'historique complet de la flotte (véhicule, donnée, valeur, horodatage) et une table subscriptions dictant au système quels topics il est autorisé à écouter en temps réel. Un simulateur Python simule trois véhicules virtuels en calculant leur déplacement GPS réaliste entre Saint-Cyr-sur-Mer et Bormes-les-Mimosas avec décharge de batterie, publie ces données via MQTT (protocole ultra-léger IoT), et permet même de simuler des recharges ou pannes au clavier. Un subscriber Python écoute les messages MQTT, interroge dynamiquement la base de données pour connaître les topics actifs, et sauvegarde automatiquement chaque donnée autorisée dans la table SQL sans redémarrage.\n\nPour Opti Plant, j'ai déployé et administré une base de données MySQL hébergée sur Aiven Cloud, gérée via MySQL Workbench, avec une architecture relationnelle complète (tables PLANT, RECIPE, NUTRIENT, PERCENTAGE, USER_TABLE, WEATHER_STATION). Les requêtes Flux sur InfluxDB pour les données temporelles des capteurs complètent ce panorama.",
  },
  {
    name: "Autonomie & Organisation",
    description: "Gestion du temps, priorisation des tâches, capacité à travailler de manière indépendante.",
    level: 95,
    icon: "Target",
    why: "Mon parcours en formation et en alternance m'a conduit à développer une forte autonomie et une organisation rigoureuse. La gestion simultanée des cours, projets et missions professionnelles m'a appris à prioriser efficacement les tâches et à travailler de manière fiable dans un environnement structuré."
  },
  {
    name: "Travail d'équipe",
    description: "Collaboration efficace, communication interpersonnelle, esprit de cohésion.",
    level: 95,
    icon: "Users",
    why: "Cette compétence s'est affirmée aussi bien en formation qu'en entreprise, à travers des projets collectifs exigeants menés jusqu'à leur terme.\n\nÀ l'IUT, j'ai collaboré sur de nombreux projets en équipe, notamment le projet Opti Plant (9 étudiants, sprint intensif de 10 jours) où j'ai pris en charge le module Supervision Web (InfluxDB, site React, pipeline de données). Coordonner 9 développeurs sur des technologies hétérogènes lors d'un sprint intensif a nécessité l'utilisation d'outils collaboratifs (GitHub, outil OPTI-SYNC sur-mesure avec IA de gestion de projet) et une communication constante et précise entre sous-groupes.\n\nEn entreprise chez Kontron, j'ai travaillé en équipe avec d'autres techniciens de réparation, assurant la transmission des savoir-faire aux nouveaux arrivants et la communication inter-équipes. Cette expérience m'a appris l'importance de la documentation partagée et de la cohérence des méthodes de travail.\n\nJe m'attribue 95 % car la coordination de projets à très grande échelle (20+ personnes, plusieurs équipes) reste à expérimenter."
  },
  {
    name: "Anglais technique",
    description: "Compréhension, rédaction et échange sur des sujets techniques en anglais. Niveau ingénieur.",
    level: 100,
    icon: "Globe",
    why: "L'anglais technique est une compétence quotidienne dans mon parcours d'ingénieur. Je consulte systématiquement les documentations techniques, datasheets, normes (IEEE, ISO) et ressources académiques en anglais. La lecture de code commenté en anglais, de dépôts GitHub, de forums Stack Overflow et de documentation d'API fait partie de ma pratique habituelle.\n\nMon score TOEIC de 955/990 (niveau C1 avancé, proche du niveau ingénieur C2) atteste objectivement de ce niveau. Je suis capable de rédiger des rapports techniques, de présenter des projets et de m'exprimer sur des sujets d'ingénierie avec aisance, aussi bien à l'écrit qu'à l'oral.\n\nJe m'attribue 100 % sur ce référentiel car le niveau requis pour un ingénieur GEII est couvert : compréhension de documentations techniques complexes, communication professionnelle et capacité à travailler dans un environnement anglophone.",
    toeicScore: 955,
    toeicDoc: "https://media.base44.com/files/public/693a7c34a791a122b93f4ce7/fa44e0d26_CertificatTOEIC.pdf"
  }
];

export default function Competences() {
  const [selectedCompetence, setSelectedCompetence] = useState(null);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <SectionTitle 
          title="Compétences"
          subtitle="Savoir-faire"
          align="center"
        />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-lg text-black/60 font-light max-w-2xl mx-auto"
        >
          Un ensemble de compétences techniques et transversales 
          développées au fil de ma formation et de mes expériences professionnelles.
        </motion.p>
      </section>

      {/* Compétences GEII */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#CBAF73] font-medium mb-3 block">
            Référentiel National
          </span>
          <h3 className="text-2xl md:text-3xl font-light">Compétences GEII</h3>
          <p className="text-sm text-black/50 mt-2">
            Les 4 compétences du référentiel national BUT GEII
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencesGEII.map((comp, index) => (
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
          className="mb-12"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#CBAF73] font-medium mb-3 block">
            Compétences Complémentaires
          </span>
          <h3 className="text-2xl md:text-3xl font-light">Compétences Transversales</h3>
          <p className="text-sm text-black/50 mt-2">
            Compétences transversales et spécialisations personnelles développées en parallèle
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencesHorsGEII.map((comp, index) => (
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