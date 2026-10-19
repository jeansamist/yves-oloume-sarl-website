import type { IconName } from "@/components/ui/Icon"
import type { SolutionSlug } from "@/lib/routes"
import type { ImageKey } from "@/lib/site"

export type ProjectCategory = "houses" | "offices" | "camps" | "warehouses" | "kiosks" | "btp"
export type Faq = [question: string, answer: string][]
export type IconItem = { icon: IconName; title: string; text: string }

export type SolutionPageData = {
  metaTitle: string
  metaDescription: string
  title: string
  intro: string
  breadcrumb: string
  image: ImageKey
  audienceTitle: string
  audience: string[]
  advantages: string[]
  extrasTitle?: string
  extras?: string[]
  button: string
  faqs?: Faq
}

const fr = {
  meta: {
    siteName: "Yves OLOUME SARL",
    defaultTitle: "Yves OLOUME SARL — Bâtiments préfabriqués au Cameroun",
    description:
      "Yves OLOUME SARL conçoit, vend, loue et installe des bâtiments préfabriqués au Cameroun depuis 2010 : maisons, bureaux modulaires, bases-vie, entrepôts, kiosques et sanitaires mobiles.",
    keywords: [
      "bâtiment préfabriqué Cameroun",
      "maison préfabriquée Douala",
      "bureau modulaire",
      "base-vie chantier",
      "entrepôt préfabriqué",
      "location préfabriqué Cameroun",
      "construction Douala",
    ],
  },
  common: {
    skipToContent: "Aller au contenu",
    home: "Accueil",
    learnMore: "En savoir plus",
    toValidate: "[À VALIDER]",
    language: "Langue",
    languages: { fr: "Français", en: "English" },
  },
  header: {
    address: "114 Rue Joffre, Akwa — Douala",
    topbarNote: "Intervention partout au Cameroun",
    brandAria: "Yves OLOUME SARL — Accueil",
    brandTagline: "SARL · DEPUIS 2010",
    mainNav: "Navigation principale",
    nav: {
      home: "Accueil",
      about: "À propos",
      solutions: "Solutions",
      btp: "BTP & rénovation",
      projects: "Réalisations",
      contact: "Contact",
    },
    mobileNav: {
      home: "Accueil",
      about: "À propos",
      solutions: "Solutions préfabriquées",
      btp: "BTP et rénovation",
      projects: "Réalisations",
      contact: "Contact / FAQ",
    },
    megaEyebrow: "Nos solutions",
    megaTitle: "Des bâtiments conçus pour votre usage.",
    megaAll: "Voir toutes les solutions",
    quoteCta: "Demander un devis",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },
  cta: {
    eyebrow: "PARLONS DE VOTRE PROJET",
    titleLine1: "Un projet de bâtiment ?",
    titleLine2: "Parlons-en dès aujourd'hui.",
    text: "Décrivez-nous votre besoin. Nous vous répondons avec une proposition adaptée à votre budget et à vos délais.",
    quote: "Demander un devis gratuit",
    whatsapp: "Écrire sur WhatsApp",
  },
  footer: {
    about:
      "Depuis 2010, Yves OLOUME SARL conçoit, vend, loue et installe des bâtiments préfabriqués partout au Cameroun et en Afrique centrale.",
    solutionsTitle: "Nos solutions",
    linksTitle: "Liens utiles",
    links: {
      about: "À propos",
      projects: "Réalisations",
      quote: "Demande de devis",
      contact: "FAQ & Contact",
      legal: "Mentions légales",
    },
    findUs: "Nous trouver",
    address: "114 Rue Joffre, Akwa, Douala",
    hoursWeek: "Lun – ven : 8 h – 17 h",
    hoursSaturday: "Samedi : 8 h – 13 h",
    rights: "Tous droits réservés.",
    motto: "CONÇU POUR BÂTIR · CONÇU POUR DURER",
  },
  floating: {
    whatsappAria: "Discutons de votre projet sur WhatsApp",
    whatsappLabel: "Discutons de votre projet",
    call: "Appeler",
    whatsapp: "WhatsApp",
    quote: "Devis",
  },
  solutions: [
    {
      slug: "maison-prefabriquee-cameroun",
      title: "Maisons préfabriquées",
      text: "Un logement confortable et durable, livré en quelques semaines.",
      image: "modules",
      tag: "Habitat",
    },
    {
      slug: "bureau-modulaire-douala",
      title: "Bureaux modulaires",
      text: "Des espaces de travail prêts à l'emploi, climatisés et câblés.",
      image: "hero",
      tag: "Professionnel",
    },
    {
      slug: "base-vie-chantier-cameroun",
      title: "Bases-vie de chantier",
      text: "Hébergement, réfectoire et bureaux pour vos équipes sur site.",
      image: "site",
      tag: "Chantier",
    },
    {
      slug: "entrepot-prefabrique-cameroun",
      title: "Entrepôts préfabriqués",
      text: "Du stockage sécurisé, en structure métallique, à la surface voulue.",
      image: "warehouse",
      tag: "Industrie",
    },
    {
      slug: "kiosques-toilettes-mobiles",
      title: "Kiosques et sanitaires mobiles",
      text: "Des modules pratiques pour vos commerces, chantiers et événements.",
      image: "interior",
      tag: "Mobile",
    },
    {
      slug: "construction-renovation-douala",
      title: "BTP et rénovation",
      text: "Construction classique et rénovation de bâtiments existants.",
      image: "team",
      tag: "Construction",
    },
  ] as { slug: SolutionSlug | "construction-renovation-douala"; title: string; text: string; image: ImageKey; tag: string }[],
  projects: {
    filters: {
      all: "Tous",
      houses: "Maisons",
      offices: "Bureaux",
      camps: "Bases-vie",
      warehouses: "Entrepôts",
      kiosks: "Kiosques et sanitaires",
      btp: "BTP",
    } as Record<"all" | ProjectCategory, string>,
    in: "à",
    items: [
      { title: "Base-vie de 40 personnes", city: "Kribi", category: "camps", image: "site" },
      { title: "Bureaux modulaires d'une agence", city: "Douala", category: "offices", image: "hero" },
      { title: "Entrepôt de stockage", city: "Douala, Bassa", category: "warehouses", image: "warehouse" },
      { title: "Salles de classe préfabriquées", city: "Yaoundé", category: "offices", image: "modules" },
      { title: "Maison container 3 pièces", city: "Limbé", category: "houses", image: "interior" },
      { title: "Rénovation d'immeuble", city: "Douala, Akwa", category: "btp", image: "worker" },
      { title: "Toilettes mobiles prêtes à être livrées", category: "kiosks", image: "toilets" },
      { title: "Nos techniciens au montage d'une structure", category: "btp", image: "technicians" },
      { title: "Bâtiment de bureaux préfabriqué sur deux niveaux", category: "offices", image: "officeBuilding" },
      { title: "Bureaux modulaires climatisés", category: "offices", image: "officeWing" },
      { title: "Couloir intérieur d'un bâtiment modulaire", category: "offices", image: "officeCorridor" },
      { title: "Conteneur bureau aménagé", category: "offices", image: "containerOffice" },
      { title: "Bâtiment préfabriqué en cours d'installation", category: "houses", image: "prefabBuilding" },
      { title: "Intérieur d'un conteneur aménagé", category: "houses", image: "containerInterior" },
    ] as { title: string; city?: string; category: ProjectCategory; image: ImageKey }[],
  },
  faq: {
    label: "FAQ",
    title: "Vos questions sur les bâtiments préfabriqués",
    items: [
      [
        "Qu'est-ce qu'un bâtiment préfabriqué ?",
        "C'est un bâtiment dont les éléments ou modules sont fabriqués à l'avance, puis transportés et assemblés sur le terrain. Il se monte bien plus vite qu'une construction traditionnelle.",
      ],
      [
        "Quel est le délai de livraison ?",
        "Il dépend du type et de la taille du bâtiment. Comptez généralement quelques semaines. [À VALIDER : fourchette réelle]",
      ],
      [
        "Livrez-vous en dehors de Douala ?",
        "Oui, nous intervenons partout au Cameroun et pouvons étudier les projets en Afrique centrale.",
      ],
      [
        "Peut-on louer un bâtiment préfabriqué ?",
        "Oui, la plupart de nos solutions sont disponibles à l'achat comme à la location.",
      ],
      [
        "Le bâtiment supporte-t-il le climat camerounais ?",
        "Nos bâtiments sont conçus pour la chaleur, l'humidité et les fortes pluies, avec isolation et ventilation adaptées.",
      ],
      [
        "Peut-on agrandir le bâtiment plus tard ?",
        "Oui, c'est l'un des grands avantages du modulaire : vous ajoutez des modules selon vos besoins.",
      ],
      [
        "Comment obtenir un prix ?",
        "Remplissez notre formulaire de devis ou écrivez-nous sur WhatsApp. Le devis est gratuit et sans engagement.",
      ],
    ] as Faq,
  },
  home: {
    metaTitle: "Bâtiments préfabriqués au Cameroun | Yves OLOUME",
    metaDescription:
      "Maisons, bureaux, bases-vie, entrepôts et sanitaires modulaires à l'achat ou en location. Conçus à Douala, livrés et installés partout au Cameroun. Devis gratuit sous 48 h.",
    hero: {
      kicker: "BÂTIMENTS PRÉFABRIQUÉS AU CAMEROUN DEPUIS 2010",
      titleLine1: "Vos bâtiments",
      titleLine2: "préfabriqués,",
      titleHighlight: "livrés",
      titleLine3: "et installés rapidement.",
      text: "Maisons, bureaux, bases-vie, entrepôts et sanitaires modulaires. À l'achat ou en location, conçus à Douala et adaptés à votre budget.",
      primary: "Demander un devis gratuit",
      secondary: "Voir nos réalisations",
      proofs: ["Vente et location", "Installation sur site", "Devis sous 48 h"],
      scroll: "Découvrir",
      imageAlt: "Module préfabriqué posé à la grue par les techniciens Yves OLOUME SARL",
    },
    stats: [
      ["2010", "Année de création"],
      ["+15 ans", "D'expérience dans le modulaire"],
      ["+XXX", "Bâtiments livrés"],
      ["10", "Régions du Cameroun desservies"],
    ] as [string, string][],
    solutions: {
      label: "NOS SOLUTIONS",
      title: "Une solution préfabriquée pour chaque besoin",
      intro:
        "Du logement familial à l'entrepôt industriel, nous concevons des bâtiments solides, rapides à monter et faciles à déplacer.",
    },
    benefits: {
      label: "POURQUOI LE PRÉFABRIQUÉ",
      title: "Construire plus vite, sans sacrifier la qualité",
      items: [
        {
          icon: "clock",
          title: "Rapidité",
          text: "Les modules sont fabriqués pendant la préparation du terrain. Votre bâtiment est opérationnel en quelques semaines, pas en quelques mois.",
        },
        {
          icon: "shield",
          title: "Coût maîtrisé",
          text: "Un prix défini dès le devis, moins de main-d'œuvre sur site et moins d'imprévus.",
        },
        {
          icon: "truck",
          title: "Mobilité",
          text: "Votre bâtiment peut être démonté, déplacé et réinstallé sur un nouveau site.",
        },
        {
          icon: "calendar",
          title: "Achat ou location",
          text: "Achetez pour un usage durable ou louez pour un besoin temporaire.",
        },
      ] as IconItem[],
    },
    partner: {
      label: "POURQUOI NOUS",
      title: "Un partenaire camerounais, de l'étude à l'installation",
      lead: "Depuis 2010, Yves OLOUME SARL accompagne entreprises, administrations, établissements scolaires, structures de santé et particuliers. Nous gérons votre projet de A à Z : conseil, conception, fabrication, transport et montage.",
      points: [
        "Une équipe basée à Douala, disponible partout au Cameroun",
        "Un interlocuteur unique pendant tout le projet",
        "Des bâtiments adaptés au climat chaud et humide",
        "Un service après-vente et de maintenance",
      ],
      button: "Découvrir notre entreprise",
      imageAlt: "Les équipes Yves OLOUME installent un module préfabriqué à la grue",
      experienceLine1: "années",
      experienceLine2: "d'expérience",
    },
    process: {
      label: "NOTRE MÉTHODE",
      title: "Votre projet en 4 étapes",
      steps: [
        ["Vous nous décrivez votre besoin", "par téléphone, WhatsApp ou formulaire."],
        ["Nous vous envoyons un devis", "avec plan, délai et prix détaillé."],
        ["Nous fabriquons vos modules", "pendant que le terrain est préparé."],
        ["Nous livrons et installons", "votre bâtiment est prêt à l'usage."],
      ] as [string, string][],
    },
    projects: {
      label: "RÉALISATIONS",
      title: "Ils nous ont fait confiance",
      button: "Voir toutes nos réalisations",
    },
    sectors: {
      label: "SECTEURS",
      title: "Nous équipons tous les secteurs",
      items: [
        "Éducation",
        "Santé",
        "Administration publique",
        "Logement",
        "Industrie et mines",
        "BTP et chantiers",
        "Commerce",
        "Événementiel",
      ],
    },
    testimonials: {
      label: "TÉMOIGNAGES",
      title: "Ce que disent nos clients",
      quote:
        "Notre base-vie a été installée dans les délais annoncés. L'équipe a été réactive du devis jusqu'au montage.",
      author: "Nom du client",
      role: "Directeur de projet · Kribi",
      note: "TÉMOIGNAGE D'EXEMPLE — À VALIDER",
    },
  },
  about: {
    metaTitle: "Yves OLOUME SARL — Spécialiste du préfabriqué à Douala",
    metaDescription:
      "Entreprise camerounaise créée en 2010 à Akwa, Douala, Yves OLOUME SARL est spécialisée dans les bâtiments préfabriqués et modulaires, la construction et la rénovation.",
    title: "Yves OLOUME SARL, spécialiste camerounais du bâtiment préfabriqué",
    breadcrumb: "À propos",
    story: {
      label: "NOTRE HISTOIRE",
      title: "Depuis 2010, nous construisons autrement",
      lead: "Yves OLOUME SARL est une entreprise camerounaise spécialisée dans le développement de bâtiments préfabriqués et modulaires. Créée en 2010 et installée à Akwa, au cœur de Douala, elle s'est fait connaître par son sérieux et son savoir-faire.",
      text: "Notre conviction : chaque entreprise, administration ou famille doit pouvoir disposer rapidement d'un bâtiment fiable, sans attendre des mois de chantier. C'est pourquoi nous proposons la vente, la location et l'installation de structures préfabriquées, complétées par une activité de construction et de rénovation classique.",
      imageAlt: "Équipe de construction sur un chantier",
    },
    mission: {
      label: "01 — NOTRE MISSION",
      title: "Proposer des solutions abordables, fiables et rapides.",
      text: "Proposer aux entreprises camerounaises et d'Afrique centrale des solutions de construction abordables, fiables et rapides à mettre en œuvre.",
    },
    vision: {
      label: "02 — NOTRE VISION",
      title: "Faire du préfabriqué une réponse de référence.",
      text: "Faire du bâtiment préfabriqué une réponse de référence aux besoins en logements, bureaux et infrastructures du Cameroun.",
    },
    values: {
      label: "NOS ENGAGEMENTS",
      title: "Nos valeurs",
      items: [
        { icon: "shield", title: "Fiabilité", text: "Nous respectons nos engagements de délai et de qualité." },
        { icon: "ruler", title: "Transparence", text: "Des devis clairs, sans frais cachés." },
        { icon: "users", title: "Proximité", text: "Un interlocuteur dédié, joignable à chaque étape." },
        { icon: "box", title: "Durabilité", text: "Des bâtiments réutilisables, déplaçables et conçus pour durer." },
      ] as IconItem[],
    },
    domains: {
      label: "EXPERTISE",
      title: "Nos domaines d'activité",
      items: [
        "Modules préfabriqués",
        "Maisons préfabriquées",
        "Cabines polyester",
        "Entrepôts préfabriqués",
        "Rayonnage de stockage",
        "Aménagement de conteneurs",
        "Location d'équipements",
        "Construction",
        "Rénovation",
      ],
    },
  },
  solutionsHub: {
    metaTitle: "Solutions préfabriquées : vente et location | Cameroun",
    metaDescription:
      "Maisons, bureaux modulaires, bases-vie, entrepôts, kiosques et sanitaires mobiles : découvrez nos bâtiments préfabriqués à l'achat ou en location au Cameroun.",
    title: "Bâtiments préfabriqués au Cameroun : vente, location et installation",
    breadcrumb: "Solutions préfabriquées",
    intro:
      "Un bâtiment préfabriqué est fabriqué en modules puis assemblé sur votre terrain. Résultat : un chantier plus court, un budget mieux maîtrisé et une structure que vous pouvez déplacer ou agrandir. Choisissez la solution adaptée à votre projet.",
    list: { label: "NOS SOLUTIONS", title: "Un format pour chaque projet" },
    comparison: {
      label: "ACHAT OU LOCATION",
      title: "Achat ou location : que choisir ?",
      head: ["Critère", "Achat", "Location"] as [string, string, string],
      rows: [
        ["Idéal pour", "Usage durable, logement, bureaux permanents", "Chantier, événement, besoin temporaire"],
        ["Avantage", "Vous devenez propriétaire du bâtiment", "Aucun investissement lourd au départ"],
        ["Durée", "Illimitée", "De quelques semaines à plusieurs années"],
        ["Maintenance", "À votre charge, contrat possible", "Incluse selon contrat [À VALIDER]"],
      ] as [string, string, string][],
      button: "Je ne sais pas, je demande conseil",
    },
    options: {
      label: "OPTIONS & FINITIONS",
      title: "Un bâtiment équipé selon vos besoins",
      items: [
        "Climatisation",
        "Électricité et éclairage",
        "Plomberie et sanitaires",
        "Isolation thermique",
        "Menuiseries sécurisées",
        "Revêtements de sol",
        "Mobilier",
        "Rayonnages",
        "Panneaux solaires",
      ],
    },
  },
  solutionDetail: {
    customEyebrow: "SOLUTION SUR MESURE",
    advantagesLabel: "01 — AVANTAGES",
    advantagesTitle: "Conçu autour de votre besoin",
    extrasLabel: "OPTIONS",
    extrasSuffix: "disponibles",
    extrasPrice: "Surfaces et prix « à partir de » [À VALIDER]",
    ctaTitle: "Votre projet commence par un échange.",
  },
  solutionPages: {
    "maison-prefabriquee-cameroun": {
      metaTitle: "Maison préfabriquée au Cameroun | Yves OLOUME",
      metaDescription:
        "Maisons préfabriquées au Cameroun livrées en quelques semaines : studio, 2 ou 3 pièces, villa sur mesure. Prix connu dès le départ, isolation adaptée au climat.",
      title: "Maison préfabriquée au Cameroun : votre logement livré en quelques semaines",
      intro:
        "Vous voulez construire sans attendre des mois ni dépasser votre budget ? Nos maisons préfabriquées vous offrent un logement confortable, solide et adapté au climat camerounais, du studio à la villa familiale.",
      breadcrumb: "Maisons préfabriquées",
      image: "modules",
      audienceTitle: "Pour qui ?",
      audience: [
        "Familles et particuliers",
        "Logements de fonction",
        "Programmes immobiliers",
        "Logements d'urgence",
        "Maisons d'hôtes",
      ],
      advantages: [
        "Un délai de livraison court, sans chantier interminable",
        "Un prix connu dès le départ",
        "Des plans personnalisables : nombre de pièces, surface, finitions",
        "Une isolation pensée pour la chaleur et l'humidité",
      ],
      extrasTitle: "Modèles",
      extras: ["Studio", "2 pièces", "3 pièces", "Villa sur mesure"],
      button: "Demander un devis pour une maison",
      faqs: [
        [
          "Combien coûte une maison préfabriquée au Cameroun ?",
          "Le prix dépend de la surface, des finitions et du lieu d'installation. Demandez un devis gratuit pour une estimation précise.",
        ],
        [
          "Faut-il des fondations ?",
          "Oui, une dalle ou des plots simples suffisent généralement. Nous vous conseillons selon votre terrain.",
        ],
        [
          "Une maison préfabriquée est-elle durable ?",
          "Bien conçue et entretenue, elle offre une longue durée de vie. [À VALIDER : durée indicative]",
        ],
      ],
    },
    "bureau-modulaire-douala": {
      metaTitle: "Bureau modulaire et préfabriqué à Douala | Yves OLOUME",
      metaDescription:
        "Bureaux modulaires livrés prêts à l'emploi à Douala et partout au Cameroun : climatisation, électricité, menuiseries sécurisées. À l'achat ou en location.",
      title: "Bureaux préfabriqués et modulaires à Douala et partout au Cameroun",
      intro:
        "Besoin d'agrandir vos locaux, d'ouvrir une agence ou d'installer un bureau sur un site ? Nos bureaux modulaires sont livrés prêts à l'emploi : climatisation, électricité, éclairage et menuiseries sécurisées.",
      breadcrumb: "Bureaux modulaires",
      image: "hero",
      audienceTitle: "Pour qui ?",
      audience: [
        "Entreprises en croissance",
        "Agences et points de vente",
        "Administrations",
        "Sites industriels et miniers",
        "ONG et projets",
      ],
      advantages: [
        "Des locaux opérationnels rapidement, sans travaux lourds",
        "Des modules juxtaposables ou superposables pour créer de grands espaces",
        "Une solution à l'achat ou à la location",
        "Un bâtiment déplaçable si vous changez de site",
      ],
      extrasTitle: "Configurations",
      extras: [
        "Bureau individuel",
        "Open space",
        "Salle de réunion",
        "Agence avec accueil",
        "Bâtiment administratif sur deux niveaux [À VALIDER]",
      ],
      button: "Demander un devis pour des bureaux",
    },
    "base-vie-chantier-cameroun": {
      metaTitle: "Base-vie de chantier au Cameroun | Yves OLOUME",
      metaDescription:
        "Bases-vie complètes pour chantiers BTP, miniers et industriels au Cameroun : dortoirs, bureaux, réfectoires, sanitaires. Location pour toute la durée du projet.",
      title: "Base-vie de chantier au Cameroun : hébergez et équipez vos équipes sur site",
      intro:
        "Un chantier performant commence par des équipes bien installées. Nous livrons des bases-vie complètes, du bureau de chantier au dortoir, adaptées aux projets BTP, miniers, routiers et industriels.",
      breadcrumb: "Bases-vie de chantier",
      image: "site",
      audienceTitle: "Modules disponibles",
      audience: [
        "Dortoirs",
        "Bureaux de chantier",
        "Réfectoires et cuisines",
        "Vestiaires",
        "Sanitaires et douches",
        "Infirmerie",
        "Magasins de stockage",
      ],
      advantages: [
        "Une installation rapide, au démarrage du chantier",
        "La location pour toute la durée du projet",
        "Un démontage et un transfert vers votre prochain site",
        "Un interlocuteur unique pour l'ensemble de la base-vie",
      ],
      button: "Demander un devis pour une base-vie",
    },
    "entrepot-prefabrique-cameroun": {
      metaTitle: "Entrepôt et hangar préfabriqué au Cameroun | Yves OLOUME",
      metaDescription:
        "Entrepôts et hangars préfabriqués en structure métallique au Cameroun : grandes surfaces de stockage, montage rapide, rayonnages et aménagement clé en main.",
      title: "Entrepôt préfabriqué au Cameroun : stockez plus, construisez plus vite",
      intro:
        "Nos entrepôts et hangars préfabriqués en structure métallique offrent de grandes surfaces de stockage, montées en un temps réduit. Nous pouvons aussi équiper l'intérieur avec des rayonnages adaptés.",
      breadcrumb: "Entrepôts préfabriqués",
      image: "warehouse",
      audienceTitle: "Pour qui ?",
      audience: [
        "Commerçants et grossistes",
        "Industriels",
        "Agriculteurs et coopératives",
        "Logisticiens",
        "Projets portuaires",
      ],
      advantages: [
        "Une surface et une hauteur adaptées à votre activité",
        "Une structure robuste résistant aux intempéries",
        "Un aménagement intérieur clé en main (rayonnages, bureaux, éclairage)",
        "Un bâtiment extensible si votre activité grandit",
      ],
      button: "Demander un devis pour un entrepôt",
    },
    "kiosques-toilettes-mobiles": {
      metaTitle: "Kiosques et toilettes mobiles au Cameroun | Yves OLOUME",
      metaDescription:
        "Vente et location de kiosques et toilettes mobiles au Cameroun pour événements, chantiers et espaces publics. Modèles personnalisables et hygiéniques.",
      title: "Kiosques et toilettes mobiles : vente et location au Cameroun",
      intro:
        "Que ce soit pour un événement, un chantier ou un espace public, nos kiosques et toilettes mobiles offrent flexibilité, confort et praticité. Vos invités, employés ou clients ont accès aux services essentiels, où qu'ils soient.",
      breadcrumb: "Kiosques et sanitaires mobiles",
      image: "interior",
      audienceTitle: "Toilettes mobiles",
      audience: [
        "Variété d'options — Unités standard, modèles haut de gamme et cabines accessibles aux personnes à mobilité réduite.",
        "Conception hygiénique — Surfaces faciles à nettoyer, bonne ventilation et gestion des déchets.",
        "Confort et intimité — Cabines robustes et fermant à clé.",
      ],
      advantages: [
        "Designs personnalisables — Couleurs, logo, ouvertures et comptoirs adaptés à votre activité.",
        "Usages — Point de vente, boutique, transfert d'argent, guichet, buvette, poste de garde.",
      ],
      extrasTitle: "Kiosques",
      button: "Demander un devis pour un kiosque ou des sanitaires",
    },
  } as Record<SolutionSlug, SolutionPageData>,
  btp: {
    metaTitle: "Construction et rénovation à Douala | Yves OLOUME SARL",
    metaDescription:
      "Entreprise de BTP à Douala : construction neuve, rénovation, extension, aménagement de conteneurs et second œuvre. Un chantier piloté de bout en bout.",
    title: "Entreprise de construction et de rénovation à Douala",
    intro:
      "Au-delà du préfabriqué, Yves OLOUME SARL réalise des travaux de construction classique et de rénovation. Une même équipe, un même niveau d'exigence, pour tous vos projets de bâtiment.",
    breadcrumb: "BTP et rénovation",
    services: {
      label: "NOS PRESTATIONS",
      title: "Du gros œuvre aux finitions",
      items: [
        {
          icon: "building",
          title: "Construction neuve",
          text: "Bâtiments résidentiels, commerciaux et administratifs, du gros œuvre aux finitions.",
        },
        { icon: "tools", title: "Rénovation", text: "Remise en état, réhabilitation et modernisation de bâtiments existants." },
        { icon: "plus", title: "Extension", text: "Agrandissement de vos locaux, en dur ou en modules préfabriqués." },
        {
          icon: "box",
          title: "Aménagement de conteneurs",
          text: "Transformation de conteneurs maritimes en espaces de vie ou de travail.",
        },
        {
          icon: "ruler",
          title: "Second œuvre",
          text: "Peinture, carrelage, plomberie, électricité, menuiserie. [À VALIDER : prestations réellement réalisées]",
        },
      ] as IconItem[],
    },
    choice: {
      label: "LE BON CHOIX",
      title: "Construction classique ou préfabriquée ?",
      lead: "Chaque projet est différent. Nous vous aidons à choisir la solution la plus adaptée selon votre budget, votre délai et l'usage prévu, et pouvons combiner les deux (par exemple, un bâtiment en dur prolongé par une extension modulaire).",
      button: "Demander un devis de travaux",
      imageAlt: "Structure métallique en construction",
    },
    process: {
      label: "NOTRE MÉTHODE",
      title: "Un chantier piloté de bout en bout",
      steps: [
        "Visite du site et étude du besoin",
        "Devis détaillé et planning",
        "Réalisation des travaux avec un chef de chantier dédié",
        "Réception et remise des clés",
      ],
    },
  },
  realisations: {
    metaTitle: "Nos réalisations | Bâtiments préfabriqués au Cameroun",
    metaDescription:
      "Maisons, bureaux, bases-vie, entrepôts et rénovations : découvrez les projets livrés par Yves OLOUME SARL à Douala, Yaoundé, Kribi, Limbé et partout au Cameroun.",
    title: "Nos réalisations au Cameroun",
    intro:
      "Maisons, bureaux, bases-vie, entrepôts et chantiers de rénovation : découvrez quelques projets livrés par nos équipes.",
    breadcrumb: "Réalisations",
    filterLabel: "Filtrer les réalisations",
    empty: "Aucune réalisation dans cette catégorie pour le moment.",
    button: "Votre projet sera le prochain — Demander un devis",
  },
  quote: {
    metaTitle: "Devis gratuit bâtiment préfabriqué | Yves OLOUME",
    metaDescription:
      "Demandez votre devis gratuit et sans engagement pour une maison, un bureau, une base-vie, un entrepôt ou des travaux BTP au Cameroun. Réponse rapide.",
    title: "Demandez votre devis gratuit",
    intro:
      "Décrivez votre projet en 2 minutes. Un conseiller vous recontacte rapidement avec une proposition adaptée. [À VALIDER : délai de réponse]",
    breadcrumb: "Demande de devis",
    form: {
      step: "Étape",
      of: "sur",
      step1: "Votre projet",
      buildingType: "Type de bâtiment",
      types: ["Maison", "Bureau", "Base-vie", "Entrepôt", "Kiosque", "Sanitaires", "Travaux BTP", "Autre"],
      purchaseOrRent: "Achat ou location",
      modes: ["Achat", "Location", "Je ne sais pas encore"],
      size: "Surface ou nombre de modules",
      sizePlaceholder: "ex. : 60 m², 4 modules",
      step2: "Lieu et délai",
      city: "Ville d'installation",
      cityPlaceholder: "ex. : Douala, Yaoundé, Kribi",
      land: "Terrain disponible",
      landOptions: ["Oui", "En cours", "Non"],
      deadline: "Délai souhaité",
      deadlineOptions: ["Urgent (moins d'1 mois)", "1 à 3 mois", "Plus de 3 mois"],
      budget: "Budget indicatif",
      budgetOptions: ["Fourchettes en FCFA [À VALIDER]"],
      details: "Précisions",
      detailsPlaceholder: "Décrivez votre besoin",
      step3: "Vos coordonnées",
      name: "Nom complet",
      company: "Entreprise (facultatif)",
      phone: "Téléphone / WhatsApp",
      email: "E-mail",
      consent: "J'accepte d'être recontacté au sujet de ma demande",
      back: "Retour",
      next: "Continuer",
      submit: "Envoyer ma demande",
      successTitle: "Merci ! Votre demande a bien été envoyée.",
      successText:
        "Un conseiller Yves OLOUME vous contactera très prochainement. Besoin d'une réponse immédiate ? Écrivez-nous sur WhatsApp.",
      whatsapp: "Écrire sur WhatsApp",
    },
    aside: {
      imageAlt: "Ingénieurs consultant les plans d'un chantier",
      eyebrow: "CONTACT DIRECT",
      title: "Vous préférez nous parler directement ?",
      whatsapp: "WhatsApp",
      points: ["Devis gratuit et sans engagement", "Conseil personnalisé", "Intervention partout au Cameroun"],
    },
  },
  contact: {
    metaTitle: "Contact — Yves OLOUME SARL, Akwa, Douala",
    metaDescription:
      "Contactez Yves OLOUME SARL au 114 Rue Joffre, Akwa, Douala. Téléphone et WhatsApp : +237 676 31 33 33. E-mail : info@yves-oloume.com.",
    title: "Contactez Yves OLOUME SARL à Douala",
    intro: "Une question, un projet, une demande de visite ? Notre équipe vous répond.",
    breadcrumb: "Contact",
    cards: {
      address: "Adresse",
      addressText: "114 Rue Joffre (rue des Écoles), Akwa — Douala, Cameroun · BP 18629 Douala",
      phone: "Téléphone",
      phoneAction: "Appeler",
      whatsapp: "WhatsApp",
      whatsappAction: "Écrire",
      email: "E-mail",
    },
    hours: "Lundi – vendredi 8 h – 17 h · Samedi 8 h – 13 h [À VALIDER]",
    form: {
      label: "ÉCRIVEZ-NOUS",
      title: "Parlez-nous de votre projet",
      name: "Nom",
      phone: "Téléphone",
      email: "E-mail",
      subject: "Objet",
      subjects: ["Devis", "Information", "Partenariat", "Autre"],
      message: "Message",
      submit: "Envoyer",
      success: "Merci ! Votre message a bien été envoyé. Nous vous répondons rapidement.",
    },
    map: {
      title: "Akwa, Douala",
      text: "114 Rue Joffre, au cœur du quartier d'affaires.",
      button: "Itinéraire",
    },
  },
  legal: {
    metaTitle: "Mentions légales | Yves OLOUME SARL",
    metaDescription: "Mentions légales du site de Yves OLOUME SARL, Akwa, Douala.",
    title: "Mentions légales",
    breadcrumb: "Mentions légales",
    publisherTitle: "Éditeur du site",
    publisherText:
      "Raison sociale : Yves OLOUME SARL · Siège : 114 Rue Joffre, Akwa, Douala · RCCM et NIU [À VALIDER] · Directeur de publication [À VALIDER] · Hébergeur [À VALIDER] · Crédits photos : Unsplash et Yves OLOUME SARL.",
  },
}

export type Dictionary = typeof fr
export default fr
