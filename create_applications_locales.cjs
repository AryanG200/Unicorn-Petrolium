const fs = require('fs');
const path = require('path');

const pharmaceuticalTranslations = {
  en: {
    meta: {
      title: "Pharmaceutical Applications - Unicorn Petroleum | Pharmaceutical Ingredients & Excipients",
      description: "High-quality pharmaceutical ingredients and excipients including petroleum jelly, mineral oils, waxes, preservatives, and specialty chemicals. Compliant with pharmacopoeial standards for pharmaceutical formulations.",
      keywords: "pharmaceutical ingredients, pharmaceutical excipients, pharmaceutical applications, pharmacopoeial standards, tablet coating, ointment base, pharmaceutical wax, pharmaceutical preservatives"
    },
    hero: {
      title: "Pharmaceutical Applications",
      description: "High-purity ingredients for life-saving medicines"
    },
    breadcrumbs: {
      home: "Home",
      applications: "Applications",
      pharmaceutical: "Pharmaceutical"
    },
    sections: {
      overview: {
        title: "Tailored for pharmaceutical products",
        description: "Our products are widely used as practical additives and manufacturing aids in the pharmaceutical business. They help in the production of lotions, gels, creams, liquids, and pills for oral use by increasing durability, homogeneity, and consistency. These components are also employed in topical, oral, and external formulations, as well as medicinal and wellness applications. Additionally, they help with lubrication, surface protection, and equipment efficiency during packaging activities within this industry. Their purified character makes them ideal for applications that need purity and dependability. Manufacturers utilize them to guarantee that their finished products are processed efficiently, operate consistently, and give secure and excellent healthcare solutions."
      },
      relatedProducts: {
        title: "Related products",
        viewDetails: "View Details"
      }
    },
    products: {
      petroleumJelly: "Healing ointments, skin protectants, and excipients in topical medicines.",
      whiteMineralOils: "Used as a laxative, tablet coating, ointment base, and in topical formulations.",
      lanolin: "Refined wool grease used as a skin-conditioning excipient in cosmetic and topical formulations.",
      naturalBeeswax: "Used in ointments, tablet coatings, slow-release formulations, and as a binding agent.",
      emulsifyingWax: "Used in emulsified medicinal creams.",
      dPanthenol: "Provitamin of B5 supporting skin regeneration and hydration.",
      preservatives: "Prevent microbial growth in syrups, eye drops, ointments, and injectables."
    }
  },
  de: {
    meta: {
      title: "Pharmazeutische Anwendungen - Unicorn Petroleum | Pharmazeutische Inhaltsstoffe & Hilfsstoffe",
      description: "Hochwertige pharmazeutische Inhaltsstoffe und Hilfsstoffe wie Vaseline, Mineralöle, Wachse, Konservierungsmittel und Spezialchemikalien. Konform mit Arzneibuchstandards.",
      keywords: "pharmazeutische Inhaltsstoffe, pharmazeutische Hilfsstoffe, pharmazeutische Anwendungen, Arzneibuchstandards, Tablettenüberzug, Salbengrundlage, pharmazeutisches Wachs, pharmazeutische Konservierungsmittel"
    },
    hero: {
      title: "Pharmazeutische Anwendungen",
      description: "Hochreine Inhaltsstoffe für lebensrettende Medikamente"
    },
    breadcrumbs: {
      home: "Startseite",
      applications: "Anwendungen",
      pharmaceutical: "Pharmazie"
    },
    sections: {
      overview: {
        title: "Maßgeschneidert für pharmazeutische Produkte",
        description: "Unsere Produkte finden breite Anwendung als praktische Additive und Herstellungshilfsmittel in der pharmazeutischen Industrie. Sie unterstützen die Herstellung von Lotionen, Gels, Cremes, Säften und Tabletten zur oralen Anwendung, indem sie Haltbarkeit, Homogenität und Konsistenz verbessern. Diese Komponenten werden auch in topischen, oralen und externen Formulierungen sowie in medizinischen und Wellness-Anwendungen eingesetzt. Darüber hinaus helfen sie bei der Schmierung, beim Oberflächenschutz und bei der Effizienz der Anlagen während der Verpackungsaktivitäten in dieser Branche. Ihr gereinigter Charakter macht sie ideal für Anwendungen, die Reinheit und Zuverlässigkeit erfordern. Hersteller nutzen sie, um sicherzustellen, dass ihre Endprodukte effizient verarbeitet werden, konsistent funktionieren und sichere sowie exzellente Gesundheitslösungen bieten."
      },
      relatedProducts: {
        title: "Verwandte Produkte",
        viewDetails: "Details anzeigen"
      }
    },
    products: {
      petroleumJelly: "Heilsalben, Hautschutzmittel und Hilfsstoffe in topischen Medikamenten.",
      whiteMineralOils: "Verwendet als Abführmittel, Tablettenüberzug, Salbengrundlage und in topischen Formulierungen.",
      lanolin: "Raffiniertes Wollfett, das als hautpflegender Hilfsstoff in kosmetischen und topischen Formulierungen verwendet wird.",
      naturalBeeswax: "Verwendet in Salben, Tablettenüberzügen, Retard-Formulierungen und als Bindemittel.",
      emulsifyingWax: "Verwendet in emulgierten medizinischen Cremes.",
      dPanthenol: "Provitamin von B5, das die Hautregeneration und Feuchtigkeitsversorgung unterstützt.",
      preservatives: "Verhindern mikrobielles Wachstum in Sirupen, Augentropfen, Salben und Injektionsmitteln."
    }
  },
  es: {
    meta: {
      title: "Aplicaciones Farmacéuticas - Unicorn Petroleum | Ingredientes y Excipientes Farmacéuticos",
      description: "Ingredientes y excipientes farmacéuticos de alta calidad que incluyen vaselina, aceites minerales, ceras, conservantes y productos químicos especializados. Cumple con los estándares farmacopeicos.",
      keywords: "ingredientes farmacéuticos, excipientes farmacéuticos, aplicaciones farmacéuticas, estándares farmacopeicos, recubrimiento de tabletas, base de ungüento, cera farmacéutica, conservantes farmacéuticos"
    },
    hero: {
      title: "Aplicaciones Farmacéuticas",
      description: "Ingredientes de alta pureza para medicamentos que salvan vidas"
    },
    breadcrumbs: {
      home: "Inicio",
      applications: "Aplicaciones",
      pharmaceutical: "Farmacéutica"
    },
    sections: {
      overview: {
        title: "Diseñado para productos farmacéuticos",
        description: "Nuestros productos se utilizan ampliamente como aditivos prácticos y ayudas de fabricación en el negocio farmacéutico. Ayudan en la producción de lociones, geles, cremas, líquidos y píldoras para uso oral aumentando la durabilidad, homogeneidad y consistencia. Estos componentes también se emplean en formulaciones tópicas, orales y externas, así como en aplicaciones medicinales y de bienestar. Además, ayudan con la lubricación, la protección de superficies y la eficiencia del equipo durante las actividades de envasado dentro de esta industria. Su carácter purificado los hace ideales para aplicaciones que necesitan pureza y confiabilidad. Los fabricantes los utilizan para garantizar que sus productos terminados se procesen de manera eficiente, funcionen de manera constante y brinden soluciones de atención médica seguras y excelentes."
      },
      relatedProducts: {
        title: "Productos relacionados",
        viewDetails: "Ver detalles"
      }
    },
    products: {
      petroleumJelly: "Ungüentos curativos, protectores de la piel y excipientes en medicamentos tópicos.",
      whiteMineralOils: "Se utiliza como laxante, recubrimiento de tabletas, base de ungüento y en formulaciones tópicas.",
      lanolin: "Grasa de lana refinada utilizada como excipiente acondicionador de la piel en formulaciones cosméticas y tópicas.",
      naturalBeeswax: "Se utiliza en ungüentos, recubrimientos de tabletas, formulaciones de liberación lenta y como agente aglutinante.",
      emulsifyingWax: "Utilizado en cremas medicinales emulsionadas.",
      dPanthenol: "Provitamina de B5 que apoya la regeneración e hidratación de la piel.",
      preservatives: "Previenen el crecimiento microbiano en jarabes, gotas para los ojos, ungüentos e inyectables."
    }
  },
  fr: {
    meta: {
      title: "Applications Pharmaceutiques - Unicorn Petroleum | Ingrédients et Excipients Pharmaceutiques",
      description: "Ingrédients et excipients pharmaceutiques de haute qualité comprenant de la vaseline, des huiles minérales, des cires, des conservateurs et des produits chimiques spécialisés. Conforme aux normes pharmacopées.",
      keywords: "ingrédients pharmaceutiques, excipients pharmaceutiques, applications pharmaceutiques, normes pharmacopées, enrobage de comprimés, base de pommade, cire pharmaceutique, conservateurs pharmaceutiques"
    },
    hero: {
      title: "Applications Pharmaceutiques",
      description: "Ingrédients de haute pureté pour des médicaments vitaux"
    },
    breadcrumbs: {
      home: "Accueil",
      applications: "Applications",
      pharmaceutical: "Pharmaceutique"
    },
    sections: {
      overview: {
        title: "Adapté aux produits pharmaceutiques",
        description: "Nos produits sont largement utilisés comme additifs pratiques et auxiliaires de fabrication dans le secteur pharmaceutique. Ils aident à la production de lotions, gels, crèmes, liquides et pilules à usage oral en augmentant la durabilité, l'homogénéité et la consistance. Ces composants sont également employés dans les formulations topiques, orales et externes, ainsi que dans les applications médicales et de bien-être. De plus, ils aident à la lubrification, à la protection des surfaces et à l'efficacité des équipements lors des activités de conditionnement au sein de cette industrie. Leur caractère purifié les rend idéaux pour les applications nécessitant pureté et fiabilité. Les fabricants les utilisent pour garantir que leurs produits finis sont transformés efficacement, fonctionnent de manière constante et offrent des solutions de santé sûres et excellentes."
      },
      relatedProducts: {
        title: "Produits connexes",
        viewDetails: "Voir les détails"
      }
    },
    products: {
      petroleumJelly: "Pommades cicatrisantes, protecteurs cutanés et excipients dans les médicaments topiques.",
      whiteMineralOils: "Utilisé comme laxatif, enrobage de comprimés, base de pommade et dans les formulations topiques.",
      lanolin: "Graisse de laine raffinée utilisée comme excipient de soin de la peau dans les formulations cosmétiques et topiques.",
      naturalBeeswax: "Utilisé dans les pommades, les enrobages de comprimés, les formulations à libération lente et comme agent liant.",
      emulsifyingWax: "Utilisé dans les crèmes médicinales émulsionnées.",
      dPanthenol: "Provitamine B5 favorisant la régénération et l'hydratation de la peau.",
      preservatives: "Empêchent la croissance microbienne dans les sirops, les collyres, les pommades et les injectables."
    }
  },
  nl: {
    meta: {
      title: "Farmaceutische Toepassingen - Unicorn Petroleum | Farmaceutische Ingrediënten & Hulpstoffen",
      description: "Hoogwaardige farmaceutische ingrediënten en hulpstoffen, waaronder vaseline, minerale oliën, wassen, conserveermiddelen en gespecialiseerde chemicaliën. Voldoet aan farmacopee-normen.",
      keywords: "farmaceutische ingrediënten, farmaceutische hulpstoffen, farmaceutische toepassingen, farmacopee-normen, tabletcoating, zalfbasis, farmaceutische was, farmaceutische conserveermiddelen"
    },
    hero: {
      title: "Farmaceutische Toepassingen",
      description: "Hoogzuivere ingrediënten voor levensreddende medicijnen"
    },
    breadcrumbs: {
      home: "Home",
      applications: "Toepassingen",
      pharmaceutical: "Farmaceutisch"
    },
    sections: {
      overview: {
        title: "Op maat gemaakt voor farmaceutische producten",
        description: "Onze producten worden op grote schaal gebruikt als praktische additieven en fabricagehulpmiddelen in de farmaceutische sector. Ze helpen bij de productie van lotions, gels, crèmes, vloeistoffen en pillen voor oraal gebruik door de duurzaamheid, homogeniteit en consistentie te vergroten. Deze componenten worden ook gebruikt in topische, orale en externe formuleringen, evenals in medicinale en wellness-toepassingen. Bovendien helpen ze bij smering, oppervlaktebescherming en apparatuurefficiëntie tijdens verpakkingsactiviteiten binnen deze industrie. Hun gezuiverde karakter maakt ze ideaal voor toepassingen die zuiverheid en betrouwbaarheid vereisen. Fabrikanten gebruiken ze om te garanderen dat hun eindproducten efficiënt worden verwerkt, consistent werken en veilige en uitstekende zorgoplossingen bieden."
      },
      relatedProducts: {
        title: "Gerelateerde producten",
        viewDetails: "Details bekijken"
      }
    },
    products: {
      petroleumJelly: "Genezende zalven, huidbeschermers en hulpstoffen in topische medicijnen.",
      whiteMineralOils: "Gebruikt als laxeermiddel, tabletcoating, zalfbasis en in topische formuleringen.",
      lanolin: "Geraffineerd wolvet dat wordt gebruikt als huidverzorgende hulpstof in cosmetische en topische formuleringen.",
      naturalBeeswax: "Gebruikt in zalven, tabletcoatings, formuleringen met vertraagde afgifte en als bindmiddel.",
      emulsifyingWax: "Gebruikt in geëmulgeerde medicinale crèmes.",
      dPanthenol: "Provitamine van B5 die huidregeneratie und hydratatie ondersteunt.",
      preservatives: "Voorkomen microbiële groei in siropen, oogdruppels, zalven en injectievloeistoffen."
    }
  },
  pt: {
    meta: {
      title: "Aplicações Farmacêuticas - Unicorn Petroleum | Ingredientes e Excipientes Farmacêuticos",
      description: "Ingredientes e excipientes farmacêuticos de alta qualidade, incluindo vaselina, óleos minerais, ceras, conservantes e especialidades químicas. Em conformidade com as normas farmacopeicas.",
      keywords: "ingredientes farmacêuticos, excipientes farmacêuticos, aplicações farmacêuticas, normas farmacopeicas, revestimento de comprimidos, base de pomada, cera farmacêutica, conservantes farmacêuticos"
    },
    hero: {
      title: "Aplicações Farmacêuticas",
      description: "Ingredientes de alta pureza para medicamentos vitais"
    },
    breadcrumbs: {
      home: "Início",
      applications: "Aplicações",
      pharmaceutical: "Farmacêutica"
    },
    sections: {
      overview: {
        title: "Adaptado para produtos farmacêuticos",
        description: "Nossos produtos são amplamente utilizados como aditivos práticos e auxiliares de fabricação no negócio farmacêutico. Eles auxiliam na produção de loções, géis, cremes, líquidos e pílulas para uso oral, aumentando a durabilidade, homogeneidade e consistência. Esses componentes também são empregados em formulações tópicas, orais e externas, bem como em aplicações medicinais e de bem-estar. Além disso, ajudam na lubrificação, proteção de superfícies e eficiência de equipamentos durante as atividades de embalagem nesta indústria. Seu caráter purificado torna-os ideais para aplicações que exigem pureza e confiabilidade. Os fabricantes utilizam-nos para garantir que seus produtos finais sejam processados de forma eficiente, operem de forma consistente e forneçam soluções de saúde seguras e excelentes."
      },
      relatedProducts: {
        title: "Produtos relacionados",
        viewDetails: "Ver Detalhes"
      }
    },
    products: {
      petroleumJelly: "Pomadas cicatrizantes, protetores cutâneos e excipientes em medicamentos tópicos.",
      whiteMineralOils: "Utilizado como laxante, revestimento de comprimidos, base de pomada e em formulações tópicas.",
      lanolin: "Gordura de lã refinada utilizada como excipiente condicionador da pele em formulações cosméticas e tópicas.",
      naturalBeeswax: "Utilizado em pomadas, revestimentos de comprimidos, formulações de libertação prolongada e como agente aglutinante.",
      emulsifyingWax: "Utilizado em cremes medicinais emulsionados.",
      dPanthenol: "Pró-vitamina B5 que apoia a regeneração e hidratação da pele.",
      preservatives: "Previnem o crescimento microbiano em xaropes, colírios, pomadas e injetáveis."
    }
  },
  ar: {
    meta: {
      title: "تطبيقات الصيدلانية - يونيكورن بتروليوم | المكونات والمواد المضافة الصيدلانية",
      description: "مكونات ومواد مضافة صيدلانية عالية الجودة تشمل الفازلين والزيوت المعدنية والشموع والمواد الحافظة والمواد الكيميائية المتخصصة. متوافق مع معايير دستور الأدوية.",
      keywords: "المكونات الصيدلانية، المواد المضافة الصيدلانية، تطبيقات الصيدلانية، معايير دستور الأدوية، طلاء الأقراص، قاعدة المرهم، شمع صيدلاني، مواد حافظة صيدلانية"
    },
    hero: {
      title: "تطبيقات الصيدلانية",
      description: "مكونات عالية النقاء للأدوية المنقذة للحياة"
    },
    breadcrumbs: {
      home: "الرئيسية",
      applications: "التطبيقات",
      pharmaceutical: "الصيدلانية"
    },
    sections: {
      overview: {
        title: "مصمم خصيصاً للمنتجات الصيدلانية",
        description: "تُستخدم منتجاتنا على نطاق واسع كإضافات عملية ومساعدات تصنيع في مجال الصناعات الدوائية. فهي تساعد في إنتاج المستحضرات، والجيل، والكريمات، والسوائل، والحبوب للاستخدام الفموي من خلال زيادة المتانة والتجانس والاتساق. كما تُستخدم هذه المكونات في التركيبات الموضعية والفموية والخارجية، فضلاً عن التطبيقات الطبية والعافية. بالإضافة إلى ذلك، فهي تساعد في التزييت وحماية الأسطح وكفاءة المعدات أثناء أنشطة التعبئة والتغليف داخل هذه الصناعة. طابعها المنقى يجعلها مثالية للتطبيقات التي تحتاج إلى النقاء والموثوقية. يستخدمها المصنعون لضمان معالجة منتجاتهم النهائية بكفاءة، وعملها باستمرار، وتقديم حلول رعاية صحية آمنة وممتازة."
      },
      relatedProducts: {
        title: "منتجات ذات صله",
        viewDetails: "عرض التفاصيل"
      }
    },
    products: {
      petroleumJelly: "مراهم الشفاء، وواقيات الجلد، والمواد المضافة في الأدوية الموضعية.",
      whiteMineralOils: "يستخدم كملين، وطلاء للأقراص، وقاعدة للمراهم، وفي التركيبات الموضعية.",
      lanolin: "دهن الصوف المكرر المستخدم كمادة مضافة لتكييف الجلد في التركيبات التجميلية والموضعية.",
      naturalBeeswax: "يستخدم في المراهم، وطلاء الأقراص، وتركيبات الإطلاق البطيء، وكعامل رابط.",
      emulsifyingWax: "يستخدم في الكريمات الطبية المستحلبة.",
      dPanthenol: "بروفيتامين B5 يدعم تجدد البشرة وترطيبها.",
      preservatives: "تمنع النمو الميكروبي في الشراب، وقطرات العين، والمراهم، والحقن."
    }
  },
  ru: {
    meta: {
      title: "Фармацевтическое применение - Unicorn Petroleum | Фармацевтические ингредиенты и вспомогательные вещества",
      description: "Высококачественные фармацевтические ингредиенты и вспомогательные вещества, включая вазелин, минеральные масла, воски, консерванты и специальные химикаты. Соответствует стандартам фармакопеи.",
      keywords: "фармацевтические ингредиенты, фармацевтические вспомогательные вещества, фармацевтическое применение, стандарты фармакопеи, оболочка таблеток, мазевая основа, фармацевтический воск, фармацевтические консерванты"
    },
    hero: {
      title: "Фармацевтическое применение",
      description: "Ингредиенты высокой чистоты для жизненно важных лекарств"
    },
    breadcrumbs: {
      home: "Главная",
      applications: "Применение",
      pharmaceutical: "Фармацевтика"
    },
    sections: {
      overview: {
        title: "Специально для фармацевтических продуктов",
        description: "Наша продукция широко используется в качестве практических добавок и вспомогательных средств в фармацевтическом бизнесе. Она помогает в производстве лосьонов, гелей, кремов, жидкостей и таблеток для перорального применения, увеличивая долговечность, гомогенность и консистенцию. Эти компоненты также используются в топических, пероральных и наружных составах, а также в медицинских и велнес-приложениях. Кроме того, они помогают в смазке, защите поверхностей и повышении эффективности оборудования при упаковке в этой отрасли. Их очищенный характер делает их идеальными для применений, требующих чистоты и надежности. Производители используют их, чтобы гарантировать эффективную переработку готовой продукции, стабильную работу и предоставление безопасных и отличных решений в области здравоохранения."
      },
      relatedProducts: {
        title: "Сопутствующие товары",
        viewDetails: "Подробнее"
      }
    },
    products: {
      petroleumJelly: "Лечебные мази, средства защиты кожи и вспомогательные вещества в местных лекарствах.",
      whiteMineralOils: "Используется как слабительное, оболочка таблеток, мазевая основа и в местных составах.",
      lanolin: "Очищенный шерстяной жир, используемый в качестве кондиционирующего кожу вспомогательного вещества в косметических и местных составах.",
      naturalBeeswax: "Используется в мазях, оболочках таблеток, препаратах с замедленным высвобождением и в качестве связующего агента.",
      emulsifyingWax: "Используется в эмульгированных лечебных кремах.",
      dPanthenol: "Провитамин B5, поддерживающий регенерацию и увлажнение кожи.",
      preservatives: "Предотвращают рост микробов в сиропах, глазных каплях, мазях и инъекционных препаратах."
    }
  },
  zh: {
    meta: {
      title: "医药应用 - 独角兽石油 | 医药原料与辅料",
      description: "高质量医药原料与辅料，包括凡士林、矿物油、蜡、防腐剂和特种化学品。符合药典标准。",
      keywords: "医药原料, 医药辅料, 医药应用, 药典标准, 片剂包衣, 软膏基质, 医药蜡, 医药防腐剂"
    },
    hero: {
      title: "医药应用",
      description: "用于救命药物的高纯度原料"
    },
    breadcrumbs: {
      home: "首页",
      applications: "应用领域",
      pharmaceutical: "医药"
    },
    sections: {
      overview: {
        title: "专为医药产品量身定制",
        description: "我们的产品在制药业务中广泛用作实用的添加剂和制造助剂。它们通过增加耐用性、均一性和一致性，帮助生产用于口服的乳液、凝胶、霜剂、液体和药片。这些成分也用于局部、口服和外部配方，以及医药和健康应用。此外，它们在制药行业的包装活动期间有助于润滑、表面保护和提高设备效率。它们的纯化特性使其成为需要纯度和可靠性应用的理想选择。制造商利用它们确保成品加工高效、运行稳定，并提供安全优质的医疗解决方案。"
      },
      relatedProducts: {
        title: "相关产品",
        viewDetails: "查看详情"
      }
    },
    products: {
      petroleumJelly: "局部药物中的治疗软膏、皮肤保护剂和辅料。",
      whiteMineralOils: "用作泻药、片剂包衣、软膏基质和局部制剂。",
      lanolin: "精制羊毛脂，在化妆品和局部配方中用作调理皮肤的辅料。",
      naturalBeeswax: "用于软膏、片剂包衣、缓释制剂并用作粘合剂。",
      emulsifyingWax: "用于乳乳化药膏。",
      dPanthenol: "维生素B5的前体，支持皮肤再生和保湿。",
      preservatives: "防止糖浆、滴眼液、软膏和注射剂中的微生物生长。"
    }
  }
};

const languages = ['en', 'de', 'es', 'fr', 'nl', 'pt', 'ar', 'ru', 'zh'];

languages.forEach(lang => {
  const dirPath = path.join(__dirname, 'public', 'locales', lang);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  const filePath = path.join(dirPath, 'applications.json');
  fs.writeFileSync(filePath, JSON.stringify(pharmaceuticalTranslations[lang], null, 2), 'utf8');
  console.log(`Created applications.json for ${lang}`);
});
