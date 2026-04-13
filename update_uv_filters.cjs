const fs = require('fs');

const translations = {
  en: {
    meta: {
      title: 'UV Filters - Unicorn Petroleum | Organic & Inorganic UV Filters for Sun Protection',
      description: 'Broad-spectrum UV filters (UVA & UVB) for sunscreens, cosmetics, and moisturizers. Organic and inorganic UV filters to protect against sunburns, premature aging, and skin cancer. Regulatory-compliant grades.',
      keywords: 'UV filters, organic UV filters, inorganic UV filters, sunscreen ingredients, UVA protection, UVB protection, sun protection, cosmetic UV filters, regulatory compliant, Unicorn Petroleum'
    },
    name: 'UV Filters',
    purity: 'Organic and inorganic UV filters for broad-spectrum protection',
    common: {
      title: 'UV Filters',
      description: 'UV filters are used to manufacture personal care products to protect our skin from detrimental ultraviolet radiation. It has the ability to prevent skin defacement caused by exposure to UVA & UVB lights by absorbing or reflecting UV Rays. UV filters are used in cosmetics, sunscreens and moisturizers that work as a shield against sunburns, premature ageing and skin cancer. To ensure safety and effectiveness in consumer products, it is regulated in many countries.'
    },
    products: [
      { name: 'Octylmethoxy cinnamate', desc: 'A popular choice in sunscreen formulations due to its stability' },
      { name: 'Octyl salicylate', desc: 'Formed from salicylic acid and 2-ethylhexanol, is used to filter UVB rays in the range of 280-320 nm' },
      { name: 'Homosalate', desc: 'Protective barrier against UVB rays but provides minimal defense against UVA rays' },
      { name: 'Avobenzone', desc: 'A potent UV filter often combined with other stabilizers like Octocrylene to improve stability' },
      { name: 'Benzophenone 3', desc: 'Offers protection against UVB and a portion of UVA rays, preventing both sunburn and DNA damage' },
      { name: 'Benzophenone 4', desc: 'Safeguard filter against both UVA and UVB rays, enhancing effectiveness and longevity of product' },
      { name: 'Ethyl hexyl triazone', desc: 'Synthetic organic compound known for its photostability, protecting against UVB rays' },
      { name: 'Octocrylene', desc: 'Broad spectrum sun protection used enhancing defence with dual absorption' }
    ],
    applications: {
      intro: 'UV filters are used to manufacture personal care products to protect our skin from detrimental ultraviolet radiation. It has the ability to prevent skin defacement caused by exposure to UVA & UVB lights by absorbing or reflecting UV Rays.',
      points: [
        'Facial creams & moisturizers',
        'Sunblocks & sunscreens',
        'Foundation beauty balms/color corrector creams and lip care products',
        'Hair care products'
      ],
      items: ['Sunscreens','Sun Care','SPF Creams','Moisturizers','Cosmetics']
    },
    characteristics: {
      heading: 'Characteristics',
      items: [
        'Absorption of UV Radiation: UV filters act as a shield by blocking UV radiation from entering into the skin either by reflecting, absorbing or scattering the UV radiation. They provide a shield against UVA and UVB radiation which contributes to premature skin ageing and sunburns.',
        'Wide-Range protection: Our Avobenzone and Octocrylene have the ability to provide complete protection by blocking UVA & UVB radiation respectively.',
        'Photostability: This is the property that determines the stability of UV Filters when exposed to direct sunlight. Example: Avobenzone can deteriorate under direct sunrays unless it is stabilised by other ingredients such as Octocrylene.',
        'Safety and Compatibility: UV Filters should not cause any adverse effects for continuous skin exposure. There should not be any irritation or allergic reaction and they should have the tendency not to block the pores. Example: Benzophenone is considered to be safe for all skin types. Various UV Filters can be used in diverse formulations to impart all-around stability and skin-friendly performance.'
      ]
    }
  },
  de: {
    meta: {
      title: 'UV-Filter - Unicorn Petroleum | Organische & anorganische UV-Filter für Sonnenschutz',
      description: 'Breitband-UV-Filter (UVA & UVB) für Sonnenschutzmittel, Kosmetika und Feuchtigkeitscremes. Organische und anorganische UV-Filter zum Schutz vor Sonnenbrand, vorzeitiger Hautalterung und Hautkrebs. Behördlich zugelassene Sorten.',
      keywords: 'UV-Filter, organische UV-Filter, anorganische UV-Filter, Inhaltsstoffe für Sonnenschutzmittel, UVA-Schutz, UVB-Schutz, Sonnenschutz, kosmetische UV-Filter, behördlich zugelassen, Unicorn Petroleum'
    },
    name: 'UV-Filter',
    purity: 'Organische und anorganische UV-Filter für einen Breitbandschutz',
    common: {
      title: 'UV-Filter',
      description: 'UV-Filter werden zur Herstellung von Körperpflegeprodukten verwendet, um unsere Haut vor schädlicher ultravioletter Strahlung zu schützen. Sie haben die Fähigkeit, Hautschäden durch Exposition gegenüber UVA- und UVB-Licht zu verhindern, indem sie UV-Strahlen absorbieren oder reflektieren. UV-Filter werden in Kosmetika, Sonnenschutzmitteln und Feuchtigkeitscremes verwendet, die als Schutzschild gegen Sonnenbrand, vorzeitige Hautalterung und Hautkrebs wirken. Um die Sicherheit und Wirksamkeit in Konsumgütern zu gewährleisten, sind sie in vielen Ländern reguliert.'
    },
    products: [
      { name: 'Octylmethoxycinnamat', desc: 'Aufgrund seiner Stabilität eine beliebte Wahl in Sonnenschutzformulierungen' },
      { name: 'Octylsalicylat', desc: 'Wird aus Salicylsäure und 2-Ethylhexanol gebildet und dient zum Filtern von UVB-Strahlen im Bereich von 280-320 nm' },
      { name: 'Homosalat', desc: 'Schutzbarriere gegen UVB-Strahlen, bietet jedoch minimalen Schutz gegen UVA-Strahlen' },
      { name: 'Avobenzon', desc: 'Ein potenter UV-Filter, der oft mit anderen Stabilisatoren wie Octocrylen kombiniert wird, um die Stabilität zu verbessern' },
      { name: 'Benzophenon 3', desc: 'Bietet Schutz gegen UVB- und einen Teil der UVA-Strahlen und verhindert so sowohl Sonnenbrand als auch DNA-Schäden' },
      { name: 'Benzophenon 4', desc: 'Schutzfilter gegen UVA- und UVB-Strahlen, der die Wirksamkeit und Langlebigkeit des Produkts verbessert' },
      { name: 'Ethylhexyltriazon', desc: 'Synthetische organische Verbindung, die für ihre Photostabilität bekannt ist und vor UVB-Strahlen schützt' },
      { name: 'Octocrylen', desc: 'Breitband-Sonnenschutz, der die Abwehr durch duale Absorption verstärkt' }
    ],
    applications: {
      intro: 'UV-Filter werden zur Herstellung von Körperpflegeprodukten verwendet, um unsere Haut vor schädlicher ultravioletter Strahlung zu schützen. Sie haben die Fähigkeit, Hautschäden durch Exposition gegenüber UVA- und UVB-Licht zu verhindern, indem sie UV-Strahlen absorbieren oder reflektieren.',
      points: [
        'Gesichtscremes & Feuchtigkeitscremes',
        'Sonnenschutzmittel & Sonnencremes',
        'Foundation Beauty Balms/CC-Creams und Lippenpflegeprodukte',
        'Haarpflegeprodukte'
      ],
      items: ['Sonnenschutzmittel','Sonnenpflege','LSF-Cremes','Feuchtigkeitscremes','Kosmetik']
    },
    characteristics: {
      heading: 'Eigenschaften',
      items: [
        'Absorption von UV-Strahlung: UV-Filter wirken wie ein Schutzschild, indem sie verhindern, dass UV-Strahlung in die Haut eindringt, indem sie die UV-Strahlung entweder reflektieren, absorbieren oder streuen. Sie bieten einen Schutz gegen UVA- und UVB-Strahlung, die zu vorzeitiger Hautalterung und Sonnenbrand beiträgt.',
        'Breitbandschutz: Unser Avobenzon und Octocrylen haben die Fähigkeit, durch Blockieren von UVA- bzw. UVB-Strahlung einen vollständigen Schutz zu bieten.',
        'Photostabilität: Dies ist die Eigenschaft, welche die Stabilität von UV-Filtern bestimmt, wenn sie direktem Sonnenlicht ausgesetzt sind. Beispiel: Avobenzon kann unter direkter Sonneneinstrahlung zerfallen, es sei denn, es wird durch andere Inhaltsstoffe wie Octocrylen stabilisiert.',
        'Sicherheit und Verträglichkeit: UV-Filter sollten bei dauerhafter Hautexposition keine nachteiligen Auswirkungen haben. Es sollten keine Reizungen oder allergischen Reaktionen auftreten, und sie sollten dazu neigen, die Poren nicht zu verstopfen. Beispiel: Benzophenon gilt für alle Hauttypen als sicher. Verschiedene UV-Filter können in unterschiedlichen Formulierungen verwendet werden, um Rundum-Stabilität und hautfreundliche Leistung zu verleihen.'
      ]
    }
  },
  es: {
    meta: {
      title: 'Filtros UV - Unicorn Petroleum | Filtros UV Orgánicos e Inorgánicos para Protección Solar',
      description: 'Filtros UV de amplio espectro (UVA y UVB) para protectores solares, cosméticos y cremas hidratantes. Filtros UV orgánicos e inorgánicos para proteger contra quemaduras solares, envejecimiento prematuro y cáncer de piel. Grados conformes a la normativa.',
      keywords: 'filtros UV, filtros UV orgánicos, filtros UV inorgánicos, ingredientes para protectores solares, protección UVA, protección UVB, protección solar, filtros UV cosméticos, conforme a la normativa, Unicorn Petroleum'
    },
    name: 'Filtros UV',
    purity: 'Filtros UV orgánicos e inorgánicos para una protección de amplio espectro',
    common: {
      title: 'Filtros UV',
      description: 'Los filtros UV se utilizan para fabricar productos de cuidado personal para proteger nuestra piel de la radiación ultravioleta perjudicial. Tiene la capacidad de prevenir el deterioro de la piel causado por la exposición a las luces UVA y UVB al absorber o reflejar los rayos UV. Los filtros UV se utilizan en cosméticos, protectores solares y cremas hidratantes que funcionan como un escudo contra las quemaduras solares, el envejecimiento prematuro y el cáncer de piel. Para garantizar la seguridad y eficacia en los productos de consumo, está regulado en many países.'
    },
    products: [
      { name: 'Metoxicinamato de octilo', desc: 'Una opción popular en formulaciones de protectores solares debido a su estabilidad' },
      { name: 'Salicilato de octilo', desc: 'Formado a partir de ácido salicílico y 2-etilhexanol, se utiliza para filtrar los rayos UVB en el rango de 280-320 nm' },
      { name: 'Homosalato', desc: 'Barrera protectora contra los rayos UVB pero proporciona una defensa mínima contra los rayos UVA' },
      { name: 'Avobenzona', desc: 'Un potente filtro UV a menudo combinado con otros estabilizadores como el octocrileno para mejorar la estabilidad' },
      { name: 'Benzofenona 3', desc: 'Ofrece protección contra los rayos UVB y una parte de los rayos UVA, previniendo tanto las quemaduras solares como el daño del ADN' },
      { name: 'Benzofenona 4', desc: 'Filtro de salvaguardia contra los rayos UVA y UVB, mejorando la eficacia y longevidad del producto' },
      { name: 'Etilhexil triazona', desc: 'Compuesto orgánico sintético conocido por su fotoestabilidad, que protege contra los rayos UVB' },
      { name: 'Octocrileno', desc: 'Protección solar de amplio espectro utilizada mejorando la defensa con doble absorción' }
    ],
    applications: {
      intro: 'Los filtros UV se utilizan para fabricar productos de cuidado personal para proteger nuestra piel de la radiación ultravioleta perjudicial. Tiene la capacidad de prevenir el deterioro de la piel causado por la exposición a las luces UVA y UVB al absorber o reflejar los rayos UV.',
      points: [
        'Cremas faciales e hidratantes',
        'Bloqueadores y protectores solares',
        'Bálsamos de belleza base/cremas correctoras de color y productos para el cuidado de los labios',
        'Productos para el cuidado del cabello'
      ],
      items: ['Protectores solares','Cuidado solar','Cremas con SPF','Hidratantes','Cosméticos']
    },
    characteristics: {
      heading: 'Características',
      items: [
        'Absorción de la radiación UV: Los filtros UV actúan como un escudo bloqueando la entrada de la radiación UV en la piel, ya sea reflejando, absorbiendo o dispersando la radiación UV. Proporcionan un escudo contra la radiación UVA y UVB que contribuye al envejecimiento prematuro de la piel y a las quemaduras solares.',
        'Protección de amplio rango: Nuestra avobenzona y octocrileno tienen la capacidad de proporcionar una protección completa bloqueando la radiación UVA y UVB respectivamente.',
        'Fotoestabilidad: Esta es la propiedad que determina la estabilidad de los filtros UV cuando se exponen a la luz solar directa. Ejemplo: la avobenzona puede deteriorarse bajo los rayos directos del sol a menos que esté estabilizada por otros ingredientes como el octocrileno.',
        'Seguridad y compatibilidad: Los filtros UV no deben causar efectos adversos por la exposición continua de la piel. No debe haber ninguna irritación o reacción alérgica y deben tener la tendencia a no bloquear los poros. Ejemplo: la benzofenona se considera segura para todo tipo de pieles. Se pueden usar varios filtros UV en diversas formulaciones para impartir estabilidad total y un rendimiento agradable para la piel.'
      ]
    }
  },
  fr: {
    meta: {
      title: 'Filtres UV - Unicorn Petroleum | Filtres UV Organiques et Inorganiques pour la Protection Solaire',
      description: 'Filtres UV à large spectre (UVA et UVB) pour les crèmes solaires, les cosmétiques et les hydratants. Filtres UV organiques et inorganiques pour protéger contre les coups de soleil, le vieillissement prématuré et le cancer de la peau. Grades conformes à la réglementation.',
      keywords: 'filtres UV, filtres UV organiques, filtres UV inorganiques, ingrédients de protection solaire, protection UVA, protection UVB, protection solaire, filtres UV cosmétiques, conforme à la réglementation, Unicorn Petroleum'
    },
    name: 'Filtres UV',
    purity: 'Filtres UV organiques et inorganiques pour une protection à large spectre',
    common: {
      title: 'Filtres UV',
      description: 'Les filtres UV sont utilisés pour fabriquer des produits de soins personnels afin de protéger notre peau des rayonnements ultraviolets nocifs. Ils ont la capacité de prévenir la dégradation de la peau causée par l\'exposition aux lumières UVA et UVB en absorbant ou en réfléchissant les rayons UV. Les filtres UV sont utilisés dans les cosmétiques, les crèmes solaires et les hydratants qui agissent comme un bouclier contre les coups de soleil, le vieillissement prématuré et le cancer de la peau. Pour garantir la sécurité et l\'efficacité des produits de consommation, ils sont réglementés dans de nombreux pays.'
    },
    products: [
      { name: 'Méthoxycinnamate d\'octyle', desc: 'Un choix populaire dans les formulations solaires en raison de sa stabilité' },
      { name: 'Salicylate d\'octyle', desc: 'Formé à partir d\'acide salicylique et de 2-éthylhexanol, est utilisé pour filtrer les rayons UVB dans la plage de 280-320 nm' },
      { name: 'Homosalate', desc: 'Barrière protectrice contre les rayons UVB mais offre une défense minimale contre les rayons UVA' },
      { name: 'Avobenzone', desc: 'Un filtre UV puissant souvent combiné avec d\'autres stabilisants comme l\'octocrylène pour améliorer la stabilité' },
      { name: 'Benzophénone 3', desc: 'Offre une protection contre les rayons UVB et une partie des rayons UVA, prévenant à la fois les coups de soleil et les dommages à l\'ADN' },
      { name: 'Benzophénone 4', desc: 'Filtre de sauvegarde contre les rayons UVA et UVB, améliorant l\'efficacité et la longévité du produit' },
      { name: 'Éthyl hexyl triazone', desc: 'Composé organique synthétique connu pour sa photostabilité, protégeant contre les rayons UVB' },
      { name: 'Octocrylène', desc: 'Protection solaire à large spectre utilisée améliorant la défense avec une double absorption' }
    ],
    applications: {
      intro: 'Les filtres UV sont utilisés pour fabriquer des produits de soins personnels afin de protéger notre peau des rayonnements ultraviolets nocifs. Ils ont la capacité de prévenir la dégradation de la peau causée par l\'exposition aux lumières UVA et UVB en absorbant ou en réfléchissant les rayons UV.',
      points: [
        'Crèmes visage et hydratants',
        'Écrans totaux et crèmes solaires',
        'Baumes de beauté fondation/crèmes correctrices de couleur et produits de soin des lèvres',
        'Produits de soins capillaires'
      ],
      items: ['Écrans solaires','Soins solaires','Crèmes SPF','Hydratants','Cosmétiques']
    },
    characteristics: {
      heading: 'Caractéristiques',
      items: [
        'Absorption des rayonnements UV : Les filtres UV agissent comme un bouclier en empêchant les rayonnements UV de pénétrer dans la peau en les réfléchissant, les absorbant ou les dispersant. Ils fournissent un bouclier contre les rayonnements UVA et UVB qui contribuent au vieillissement cutané prématuré et aux coups de soleil.',
        'Protection large plage : Notre Avobenzone et notre Octocrylène ont la capacité de fournir une protection complète en bloquant respectivement les rayonnements UVA et UVB.',
        'Photostabilité : C\'est la propriété qui détermine la stabilité des filtres UV lorsqu\'ils sont exposés à la lumière directe du soleil. Exemple : l\'Avobenzone peut se détériorer sous les rayons directs du soleil à moins qu\'elle ne soit stabilisée par d\'autres ingrédients tels que l\'Octocrylène.',
        'Sécurité et compatibilité : Les filtres UV ne doivent pas causer d\'effets indésirables lors d\'une exposition cutanée continue. Il ne doit y avoir aucune irritation ou réaction allergique et ils doivent avoir tendance à ne pas obstruer les pores. Exemple : la benzophénone est considérée comme sûre pour tous les types de peau. Divers filtres UV peuvent être utilisés dans diverses formulations pour conférer une stabilité totale et des performances respectueuses de la peau.'
      ]
    }
  },
  nl: {
    meta: {
      title: 'UV-filters - Unicorn Petroleum | Organische & Anorganische UV-filters voor Zonbescherming',
      description: 'Breedspectrum UV-filters (UVA & UVB) voor zonnebrandmiddelen, cosmetica en moisturizers. Organische en anorganische UV-filters ter bescherming tegen zonnebrand, vroegtijdige veroudering en huidkanker. Kwaliteiten conform de regelgeving.',
      keywords: 'UV-filters, organische UV-filters, anorganische UV-filters, ingrediënten voor zonnebrandcrème, UVA-bescherming, UVB-bescherming, zonbescherming, cosmetische UV-filters, conform de regelgeving, Unicorn Petroleum'
    },
    name: 'UV-filters',
    purity: 'Organische en anorganische UV-filters voor breed-spectrum bescherming',
    common: {
      title: 'UV-filters',
      description: 'UV-filters worden gebruikt om persoonlijke verzorgingsproducten te vervaardigen om onze huid te beschermen tegen schadelijke ultraviolette straling. Het heeft het vermogen om huidbeschadiging veroorzaakt door blootstelling aan UVA- en UVB-straling te voorkomen door UV-stralen te absorberen of te reflecteren. UV-filters worden gebruikt in cosmetica, zonnebrandmiddelen en moisturizers die werken als een schild tegen zonnebrand, vroegtijdige veroudering en huidkanker. Om de veiligheid en effectiviteit in consumentenproducten te waarborgen, zijn ze in veel landen gereguleerd.'
    },
    products: [
      { name: 'Octylmethoxycinnamaat', desc: 'Een populaire keuze in zonnebrandformuleringen vanwege de stabiliteit' },
      { name: 'Octylsalicylaat', desc: 'Gevormd uit salicylzuur en 2-ethylhexanol, wordt gebruikt om UVB-stralen te filteren in het bereik van 280-320 nm' },
      { name: 'Homosalaat', desc: 'Beschermende barrière tegen UVB-stralen maar biedt minimale verdediging tegen UVA-stralen' },
      { name: 'Avobenzon', desc: 'Een krachtig UV-filter vaak gecombineerd met andere stabilisatoren zoals Octocryleen om de stabiliteit te verbeteren' },
      { name: 'Benzofenon 3', desc: 'Biedt bescherming tegen UVB- en een deel van de UVA-stralen, waardoor zowel zonnebrand als DNA-schade wordt voorkomen' },
      { name: 'Benzofenon 4', desc: 'Beschermingsfilter tegen zowel UVA- als UVB-stralen, waardoor de effectiviteit en levensduur van het product worden verbeterd' },
      { name: 'Ethylhexyltriazon', desc: 'Synthetische organische verbinding bekend om zijn fotostabiliteit, die beschermt tegen UVB-stralen' },
      { name: 'Octocryleen', desc: 'Breedspectrum zonbescherming gebruikt ter verbetering van de verdediging met dubbele absorptie' }
    ],
    applications: {
      intro: 'UV-filters worden gebruikt om persoonlijke verzorgingsproducten te vervaardigen om onze huid te beschermen tegen schadelijke ultraviolette straling. Het heeft het vermogen om huidbeschadiging veroorzaakt door blootstelling aan UVA- en UVB-straling te voorkomen door UV-stralen te absorberen of te reflecteren.',
      points: [
        'Gezichtscrèmes & moisturizers',
        'Zonneblokkers & zonnebrandmiddelen',
        'Foundation beauty balsems/kleurcorrigerende crèmes en lipverzorgingsproducten',
        'Haarverzorgingsproducten'
      ],
      items: ['Zonnebrandmiddelen','Zonverzorging','SPF-crèmes','Moisturizers','Cosmetica']
    },
    characteristics: {
      heading: 'Kenmerken',
      items: [
        'Absorptie van UV-straling: UV-filters werken als een schild door UV-straling te blokkeren voor toegang tot de huid door de UV-straling te reflecteren, te absorberen of te verstrooien. Ze bieden een schild tegen UVA- en UVB-straling die bijdraagt aan vroegtijdige huidveroudering en zonnebrand.',
        'Breed-spectrum bescherming: Onze Avobenzon en Octocryleen hebben het vermogen om volledige bescherming te bieden door respectievelijk UVA- en UVB-straling te blokkeren.',
        'Fotostabiliteit: Dit is de eigenschap die de stabiliteit van UV-filters bepaalt bij blootstelling aan direct zonlicht. Voorbeeld: Avobenzon kan onder direct zonlicht verslechteren, tenzij het gestabiliseerd wordt door andere ingrediënten zoals Octocryleen.',
        'Veiligheid en compatibiliteit: UV-filters mogen geen nadelige effecten veroorzaken bij voortdurende blootstelling van de huid. Er mag geen irritatie of allergische reactie optreden en ze mogen de poriën niet verstoppen. Voorbeeld: Benzofenon wordt als veilig beschouwd voor alle huidtypen. Verschillende UV-filters kunnen in uiteenlopende formuleringen worden gebruikt om all-around stabiliteit en huidvriendelijke prestaties te bieden.'
      ]
    }
  },
  pt: {
    meta: {
      title: 'Filtros UV - Unicorn Petroleum | Filtros UV Orgânicos e Inorgânicos para Proteção Solar',
      description: 'Filtros UV de amplo espectro (UVA e UVB) para protetores solares, cosméticos e hidratantes. Filtros UV orgânicos e inorgânicos para proteger contra queimaduras solares, envelhecimento precoce e cancro de pele. Graus em conformidade com as normas.',
      keywords: 'filtros UV, filtros UV orgânicos, filtros UV inorgânicos, ingredientes para protetores solares, proteção UVA, proteção UVB, proteção solar, filtros UV cosméticos, em conformidade com as normas, Unicorn Petroleum'
    },
    name: 'Filtros UV',
    purity: 'Filtros UV orgânicos e inorgânicos para proteção de amplo espectro',
    common: {
      title: 'Filtros UV',
      description: 'Os filtros UV são utilizados para fabricar produtos de higiene pessoal para proteger a nossa pele da radiação ultravioleta prejudicial. Têm a capacidade de prevenir a degradação da pele causada pela exposição às luzes UVA e UVB, absorvendo ou refletindo os raios UV. Os filtros UV são utilizados em cosméticos, protetores solares e hidratantes que funcionam como um escudo contra queimaduras solares, envelhecimento precoce e cancro de pele. Para garantir a segurança e a eficácia nos produtos de consumo, são regulamentados em muitos países.'
    },
    products: [
      { name: 'Metoxicinamato de octilo', desc: 'Uma escolha popular em formulações de protetores solares devido à sua estabilidade' },
      { name: 'Salicilato de octilo', desc: 'Formado a partir de ácido salicílico e 2-etilhexanol, é utilizado para filtrar os raios UVB na gama de 280-320 nm' },
      { name: 'Homossalato', desc: 'Barreira protetora contra os raios UVB, mas oferece defesa mínima contra os raios UVA' },
      { name: 'Avobenzona', desc: 'Um potente filtro UV frequentemente combinado com outros estabilizadores como o octocrileno para melhorar a estabilidade' },
      { name: 'Benzofenona 3', desc: 'Oferece proteção contra os raios UVB e uma parte dos raios UVA, prevenindo tanto a queimadura solar como danos no ADN' },
      { name: 'Benzofenona 4', desc: 'Filtro de salvaguarda contra os raios UVA e UVB, aumentando a eficácia e a longevidade do produto' },
      { name: 'Etilhexil triazona', desc: 'Composto orgânico sintético conhecido pela sua fotoestabilidade, protegendo contra os raios UVB' },
      { name: 'Octocrileno', desc: 'Proteção solar de amplo espectro utilizada para melhorar a defesa com dupla absorção' }
    ],
    applications: {
      intro: 'Os filtros UV são utilizados para fabricar produtos de higiene pessoal para proteger a nossa pele da radiação ultravioleta prejudicial. Têm a capacidade de prevenir a degradação da pele causada pela exposição às luzes UVA e UVB, absorvendo ou refletindo os raios UV.',
      points: [
        'Cremes faciais e hidratantes',
        'Bloqueadores e protetores solares',
        'Bálsamos de beleza de base/cremes corretores de cor e produtos de cuidados labiais',
        'Produtos para o cuidado do cabelo'
      ],
      items: ['Protetores solares','Cuidados solares','Cremes com FPS','Hidratantes','Cosméticos']
    },
    characteristics: {
      heading: 'Características',
      items: [
        'Absorção da Radiação UV: Os filtros UV atuam como um escudo, impedindo que a radiação UV penetre na pele, seja refletindo, absorvendo ou dispersando-a. Fornecem um escudo contra a radiação UVA e UVB que contribui para o envelhecimento precoce da pele e queimaduras solares.',
        'Proteção de Ampla Gama: A nossa Avobenzona e o Octocrileno têm a capacidade de fornecer proteção completa, bloqueando a radiação UVA e UVB, respetivamente.',
        'Fotoestabilidade: Esta é la propriedade que determina a estabilidade dos filtros UV quando expostos à luz solar direta. Exemplo: A Avobenzona pode deteriorar-se sob os raios solares diretos, a menos que seja estabilizada por outros ingredientes, como o Octocrileno.',
        'Segurança e Compatibilidade: Os filtros UV não devem causar efeitos adversos na exposição contínua da pele. Não deve haver irritação ou reação alérgica e devem ter a tendência a não bloquear os poros. Exemplo: A Benzofenona é considerada segura para todos os tipos de pele. Vários filtros UV podem ser usados em diversas formulações para conferir estabilidade total e desempenho amigo da pele.'
      ]
    }
  },
  ar: {
    meta: {
      title: 'مرشحات الأشعة فوق البنفسجية - يونيكورن بتروليوم | مرشحات عضوية وغير عضوية للحماية من الشمس',
      description: 'مرشحات الأشعة فوق البنفسجية واسعة النطاق (UVA و UVB) لواقيات الشمس ومستحضرات التجميل والمرطبات. مرشحات عضوية وغير عضوية للحماية من حروق الشمس والشيخوخة المبكرة وسرطان الجلد. درجات متوافقة مع الأنظمة.',
      keywords: 'مرشحات الأشعة فوق البنفسجية، مرشحات عضوية، مرشحات غير عضوية، مكونات واقي الشمس، حماية UVA، حماية UVB، حماية من الشمس، مرشحات تجميلية، متوافقة مع الأنظمة، يونيكورن بتروليوم'
    },
    name: 'مرشحات الأشعة فوق البنفسجية',
    purity: 'مرشحات عضوية وغير عضوية للحماية واسعة النطاق',
    common: {
      title: 'مرشحات الأشعة فوق البنفسجية',
      description: 'تستخدم مرشحات الأشعة فوق البنفسجية لتصنيع منتجات العناية الشخصية لحماية بشرتنا من الأشعة فوق البنفسجية الضارة. لديها القدرة على منع تلف الجلد الناتج عن التعرض لأضواء UVA و UVB عن طريق امتصاص أو عكس الأشعة فوق البنفسجية. تستخدم مرشحات الأشعة فوق البنفسجية في مستحضرات التجميل، واقيات الشمس والمرطبات التي تعمل كدرع ضد حروق الشمس، والشيخوخة المبكرة وسرطان الجلد. لضمان السلامة والفعالية في المنتجات الاستهلاكية، يتم تنظيمها في العديد من البلدان.'
    },
    products: [
      { name: 'أوكتيل ميثوكسي سينامات', desc: 'خيار شائع في تركيبات واقي الشمس بسبب استقراره' },
      { name: 'أوكتيل ساليسيلات', desc: 'يتكون من حمض الساليسيليك و 2-إيثيل هكسانول، ويستخدم لتصفية أشعة UVB في نطاق 280-320 نانومتر' },
      { name: 'هوموسالات', desc: 'حاجز وقائي ضد أشعة UVB ولكنه يوفر حماية ضئيلة ضد أشعة UVA' },
      { name: 'أفوبينزون', desc: 'مرشح فعال للأشعة فوق البنفسجية غالباً ما يقترن بمثبتات أخرى مثل الأوكتوكرلين لتحسين الاستقرار' },
      { name: 'بنزوفينون 3', desc: 'يوفر حماية ضد أشعة UVB وجزء من أشعة UVA، مما يمنع كل من حروق الشمس وتلف الحمض النووي' },
      { name: 'بنزوفينون 4', desc: 'مرشح وقائي ضد كل من أشعة UVA و UVB، مما يعزز فعالية المنتج وطول عمره' },
      { name: 'إيثيل هكسيل تريازون', desc: 'مركب عضوي اصطناعي معروف باستقراره الضوئي، يحمي من أشعة UVB' },
      { name: 'أوكتوكرلين', desc: 'حماية من الشمس واسعة النطاق تستخدم لتعزيز الدفاع عبر الامتصاص المزدوج' }
    ],
    applications: {
      intro: 'تستخدم مرشحات الأشعة فوق البنفسجية لتصنيع منتجات العناية الشخصية لحماية بشرتنا من الأشعة فوق البنفسجية الضارة. لديها القدرة على منع تلف الجلد الناتج عن التعرض لأضواء UVA و UVB عن طريق امتصاص أو عكس الأشعة فوق البنفسجية.',
      points: [
        'كريمات الوجه والمرطبات',
        'حواجز الشمس واقيات الشمس',
        'بلسم التجميل الأساسي/كريمات تصحيح اللون ومنتجات العناية بالشفاه',
        'منتجات العناية بالشعر'
      ],
      items: ['واقيات الشمس','العناية بالشمس','كريمات SPF','مرطبات','مستحضرات التجميل']
    },
    characteristics: {
      heading: 'الخصائص',
      items: [
        'امتصاص الأشعة فوق البنفسجية: تعمل مرشحات الأشعة فوق البنفسجية كدرع من خلال منع الأشعة فوق البنفسجية من دخول الجلد إما عن طريق عكس الأشعة أو امتصاصها أو تشتيتها. فهي توفر درعاً ضد أشعة UVA و UVB التي تساهم في شيخوخة الجلد المبكرة وحروق الشمس.',
        'حماية واسعة المدى: يتمتع الأفوبينزون والأوكتوكرلين لدينا بالقدرة على توفير حماية كاملة من خلال حجب أشعة UVA و UVB على التوالي.',
        'الاستقرار الضوئي: هذه هي الخاصية التي تحدد استقرار مرشحات الأشعة فوق البنفسجية عند تعرضها لأشعة الشمس المباشرة. مثال: يمكن أن يتدهور الأفوبينزون تحت أشعة الشمس المباشرة ما لم يتم تثبيته بواسطة مكونات أخرى مثل الأوكتوكرلين.',
        'السلامة والتوافق: لا ينبغي أن تسبب مرشحات الأشعة فوق البنفسجية أي آثار ضارة عند التعرض المستمر للجلد. يجب ألا يكون هناك أي تهيج أو تفاعل حساسي ويجب أن يكون لديها نزعة لعدم سد المسام. مثال: يعتبر البنزوفينون آمناً لجميع أنواع البشرة. يمكن استخدام مرشحات الأشعة فوق البنفسجية المتنوعة في تركيبات مختلفة لمنح استقرار شامل وأداء صديق للبشرة.'
      ]
    }
  },
  ru: {
    meta: {
      title: 'УФ-фильтры - Unicorn Petroleum | Органические и неорганические УФ-фильтры для защиты от солнца',
      description: 'УФ-фильтры широкого спектра действия (UVA и UVB) для солнцезащитных кремов, косметики и увлажняющих средств. Органические и неорганические УФ-фильтры для защиты от солнечных ожогов, преждевременного старения и рака кожи. Сорта, соответствующие нормативам.',
      keywords: 'уф-фильтры, органические уф-фильтры, неорганические уф-фильтры, ингредиенты для солнцезащитного крема, защита от UVA, защита от UVB, защита от солнца, косметические уф-фильтры, соответствие нормативам, Unicorn Petroleum'
    },
    name: 'УФ-фильтры',
    purity: 'Органические и неорганические УФ-фильтры для защиты широкого спектра',
    common: {
      title: 'УФ-фильтры',
      description: 'УФ-фильтры используются при производстве средств личной гигиены для защиты нашей кожи от вредного ультрафиолетового излучения. Они способны предотвращать повреждение кожи, вызванное воздействием лучей UVA и UVB, путем поглощения или отражения УФ-лучей. УФ-фильтры используются в косметике, солнцезащитных и увлажняющих кремах, которые служат щитом против солнечных ожогов, преждевременного старения и рака кожи. Для обеспечения безопасности и эффективности потребительских товаров они регулируются во многих странах.'
    },
    products: [
      { name: 'Октилметоксициннамат', desc: 'Популярный выбор в составах солнцезащитных средств благодаря своей стабильности' },
      { name: 'Октилсалицилат', desc: 'Образуется из салициловой кислоты и 2-этилгексанола, используется для фильтрации лучей UVB в диапазоне 280-320 нм' },
      { name: 'Гомосалат', desc: 'Защитный барьер от лучей UVB, но обеспечивает минимальную защиту от лучей UVA' },
      { name: 'Авобензон', desc: 'Мощный УФ-фильтр, который часто комбинируют с другими стабилизаторами, такими как октокрилен, для повышения стабильности' },
      { name: 'Бензофенон 3', desc: 'Обеспечивает защиту от лучей UVB и части лучей UVA, предотвращая как солнечные ожоги, так и повреждение ДНК' },
      { name: 'Бензофенон 4', desc: 'Защитный фильтр от лучей UVA и UVB, повышающий эффективность и долговечность продукта' },
      { name: 'Этилгексилтриазон', desc: 'Синтетическое органическое соединение, известное своей фотостабильностью, защищающее от лучей UVB' },
      { name: 'Октокрилен', desc: 'Солнцезащита широкого спектра действия, используемая для усиления защиты за счет двойного поглощения' }
    ],
    applications: {
      intro: 'УФ-фильтры используются при производстве средств личной гигиены для защиты нашей кожи от вредного ультрафиолетового излучения. Они способны предотвращать повреждение кожи, вызванное воздействием лучей UVA и UVB, путем поглощения или отражения УФ-лучей.',
      points: [
        'Кремы для лица и увлажняющие средства',
        'Солнцезащитные блоки и кремы',
        'Тональные бальзамы/BB-кремы и средства для ухода за губами',
        'Средства для ухода за волосами'
      ],
      items: ['Солнцезащитные средства','Уход за кожей под солнцем','Кремы с SPF','Увлажняющие средства','Косметика']
    },
    characteristics: {
      heading: 'Характеристики',
      items: [
        'Поглощение УФ-излучения: УФ-фильтры действуют как щит, блокируя проникновение УФ-излучения в кожу путем его отражения, поглощения или рассеивания. Они обеспечивают защиту от лучей UVA и UVB, которые способствуют преждевременному старению кожи и солнечным ожогам.',
        'Защита широкого диапазона: Наши Авобензон и Октокрилен способны обеспечить полную защиту, блокируя излучение UVA и UVB соответственно.',
        'Фотостабильность: Это свойство, определяющее стабильность УФ-фильтров при воздействии прямого солнечного света. Пример: Авобензон может разрушаться под прямыми солнечными лучами, если он не стабилизирован другими ингредиентами, такими как октокрилен.',
        'Безопасность и совместимость: УФ-фильтры не должны вызывать побочных эффектов при постоянном воздействии на кожу. Они не должны вызывать раздражения или аллергических реакций и не должны закупоривать поры. Пример: Бензофенон считается безопасным для всех типов кожи. Различные УФ-фильтры могут использоваться в разнообразных рецептурах для обеспечения всесторонней стабильности и безопасности для кожи.'
      ]
    }
  },
  zh: {
    meta: {
      title: '紫外线过滤剂 - 独角兽石油 | 用于防晒的有机和无机紫外线过滤剂',
      description: '用于防晒霜、化妆品和保湿霜的全波段紫外线过滤剂（UVA 和 UVB）。有机和无机紫外线过滤剂，保护皮肤免受晒伤、过早老化和皮肤癌的伤害。符合监管要求的等级。',
      keywords: '紫外线过滤剂, 有机紫外线过滤剂, 无机紫外线过滤剂, 防晒霜成分, UVA防护, UVB防护, 防晒, 化妆品紫外线过滤剂, 符合监管, 独角兽石油'
    },
    name: '紫外线过滤剂',
    purity: '全波段防护的有机和无机紫外线过滤剂',
    common: {
      title: '紫外线过滤剂',
      description: '紫外线过滤剂用于制造个人护理产品，以保护我们的皮肤免受有害紫外线辐射。它具有通过吸收或反射紫外线来防止因暴露于 UVA 和 UVB 光而引起的皮肤损伤的能力。紫外线过滤剂用于化妆品、防晒霜和保湿霜，作为防止晒伤、过早老化和皮肤癌的屏障。为了确保消费品的安全性和有效性，许多国家对其进行了监管。'
    },
    products: [
      { name: '甲氧基肉桂酸乙基己酯', desc: '因其稳定性而成为防晒配方中的热门选择' },
      { name: '水杨酸辛酯', desc: '由水杨酸和 2-乙基己醇形成，用于过滤 280-320 nm 范围内的 UVB 射线' },
      { name: '胡莫柳酯', desc: '抵御 UVB 射线的保护屏障，但对 UVA 射线的防御能力极小' },
      { name: '阿伏苯宗', desc: '一种强效紫外线过滤剂，常与奥克立林等其他稳定剂结合使用以提高稳定性' },
      { name: '二苯酮-3', desc: '提供针对 UVB 和部分 UVA 射线的保护，防止晒伤和 DNA 损伤' },
      { name: '二苯酮-4', desc: '针对 UVA 和 UVB 射线的保障过滤剂，提高产品的有效性和持久性' },
      { name: '乙基己基三嗪酮', desc: '以其光稳定性著称的合成有机化合物，可防御 UVB 射线' },
      { name: '奥克立林', desc: '通过双重吸收增强防御能力的全波段防晒保护' }
    ],
    applications: {
      intro: '紫外线过滤剂用于制造个人护理产品，以保护我们的皮肤免受有害紫外线辐射。它具有通过吸收或反射紫外线来防止因暴露于 UVA 和 UVB 光而引起的皮肤损伤的能力。',
      points: [
        '面霜和保湿霜',
        '阻光剂和防晒霜',
        '粉底美颜霜/修饰霜和唇部护理产品',
        '护发产品'
      ],
      items: ['防晒霜','防晒护理','SPF 面霜','保湿霜','化妆品']
    },
    characteristics: {
      heading: '特性',
      items: [
        '吸收紫外线辐射：紫外线过滤剂通过反射、吸收或散射紫外线辐射来阻止紫外线辐射进入皮肤，起到屏障作用。它们提供针对 UVA 和 UVB 辐射的屏障，这些辐射会导致皮肤过早老化和晒伤。',
        '宽范围保护：我们的阿伏苯宗和奥克立林分别通过阻挡 UVA 和 UVB 辐射提供全面保护。',
        '光稳定性：这是决定紫外线过滤剂暴露于阳光直射时稳定性的特性。例如：阿伏苯宗在阳光直射下会降解，除非使用奥克立林等其他成分进行稳定。',
        '安全性和兼容性：紫外线过滤剂不应对持续的皮肤接触产生任何副作用。不应有任何刺激或过敏反应，且不应有堵塞毛孔的倾向。例如：二苯酮被认为对所有皮肤类型都是安全的。各种紫外线过滤剂可用于多种配方中，以赋予全方位的稳定性和亲肤性能。'
      ]
    }
  }
};

for (const [lang, data] of Object.entries(translations)) {
  const filePath = `public/locales/${lang}/products.json`;
  const fileContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  fileContent.pages['uv-filters'] = data;
  fs.writeFileSync(filePath, JSON.stringify(fileContent, null, 2));
  console.log(`Updated ${lang}`);
}
