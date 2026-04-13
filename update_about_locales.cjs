const fs = require('fs');
const path = require('path');

const nameTranslations = {
  en: 'Unicorn Petroleum Industries Pvt. Ltd.',
  de: 'Unicorn Petroleum Industries Pvt. Ltd.',
  es: 'Unicorn Petroleum Industries Pvt. Ltd.',
  fr: 'Unicorn Petroleum Industries Pvt. Ltd.',
  nl: 'Unicorn Petroleum Industries Pvt. Ltd.',
  pt: 'Unicorn Petroleum Industries Pvt. Ltd.',
  ar: 'شركة يونيكورن للصناعات البترولية المحدودة',
  ru: 'Юникорн Петролеум Индастриз Пвт. Лтд. (Unicorn Petroleum Industries Pvt. Ltd.)',
  zh: '独角兽石油工业有限公司 (Unicorn Petroleum Industries Pvt. Ltd.)'
};

const metaTranslations = {
  en: {
    title: 'About Us - Unicorn Petroleum Industries | A Legacy of Excellence Since 1964',
    description: 'Learn about Unicorn Petroleum Industries, a trusted manufacturer of petroleum products since 1964. Discover our values, vision, mission, and commitment to quality, consistency, and customer satisfaction.',
    keywords: 'Unicorn Petroleum, about us, company history, petroleum manufacturer, quality standards, customer satisfaction, ethical business, Mumbai India'
  },
  de: {
    title: 'Über Uns - Unicorn Petroleum Industries | Ein Erbe der Exzellenz seit 1964',
    description: 'Erfahren Sie mehr über Unicorn Petroleum Industries, einen vertrauenswürdigen Hersteller von Erdölprodukten seit 1964. Entdecken Sie unsere Werte, Vision, Mission und unser Engagement für Qualität.',
    keywords: 'Unicorn Petroleum, über uns, Firmengeschichte, Erdölhersteller, Qualitätsstandards, Kundenzufriedenheit, Mumbai Indien'
  },
  es: {
    title: 'Sobre Nosotros - Unicorn Petroleum Industries | Un Legado de Excelencia desde 1964',
    description: 'Conozca Unicorn Petroleum Industries, un fabricante confiable de productos derivados del petróleo desde 1964. Descubra nuestros valores, visión, misión y compromiso con la calidad.',
    keywords: 'Unicorn Petroleum, sobre nosotros, historia de la empresa, fabricante de petróleo, estándares de calidad, satisfacción del cliente, Mumbai India'
  },
  fr: {
    title: 'À Propos de Nous - Unicorn Petroleum Industries | Un Héritage d\'Excellence depuis 1964',
    description: 'Découvrez Unicorn Petroleum Industries, un fabricant de confiance de produits pétroliers depuis 1964. Découvrez nos valeurs, notre vision, notre mission et notre engagement envers la qualité.',
    keywords: 'Unicorn Petroleum, à propos de nous, histoire de l\'entreprise, fabricant de pétrole, normes de qualité, satisfaction du client, Mumbai Inde'
  },
  nl: {
    title: 'Over Ons - Unicorn Petroleum Industries | Een Erfgoed van Uitmuntendheid sinds 1964',
    description: 'Lees meer over Unicorn Petroleum Industries, een vertrouwde fabrikant van aardolieproducten sinds 1964. Ontdek onze waarden, visie, missie en toewijding aan kwaliteit.',
    keywords: 'Unicorn Petroleum, over ons, bedrijfsgeschiedenis, aardoliefabrikant, kwaliteitsnormen, klanttevredenheid, Mumbai India'
  },
  pt: {
    title: 'Sobre Nós - Unicorn Petroleum Industries | Um Legado de Excelência desde 1964',
    description: 'Saiba mais sobre a Unicorn Petroleum Industries, um fabricante de confiança de produtos petrolíferos desde 1964. Descubra nossos valores, visão, missão e compromisso com a qualidade.',
    keywords: 'Unicorn Petroleum, sobre nós, história da empresa, fabricante de petróleo, padrões de qualidade, satisfação do cliente, Mumbai Índia'
  },
  ar: {
    title: 'معلومات عنا - يونيكورن للصناعات البترولية | إرث من التميز منذ عام 1964',
    description: 'تعرف على شركة يونيكورن للصناعات البترولية، وهي شركة مصنعة موثوقة للمنتجات البترولية منذ عام 1964. اكتشف قيمنا ورؤيتنا ومهمتنا والتزامنا بالجودة.',
    keywords: 'يونيكورن بتروليوم، معلومات عنا، تاريخ الشركة، مصنع بترول، معايير الجودة، رضا العملاء، مومباي الهند'
  },
  ru: {
    title: 'О нас - Unicorn Petroleum Industries | Наследие совершенства с 1964 года',
    description: 'Узнайте о компании Unicorn Petroleum Industries, надежном производителе нефтепродуктов с 1964 года. Откройте для себя наши ценности, видение, миссию и стремление к качеству.',
    keywords: 'Unicorn Petroleum, о нас, история компании, производитель нефти, стандарты качества, удовлетворенность клиентов, Мумбаи Индия'
  },
  zh: {
    title: '关于我们 - 独角兽石油工业 | 自 1964 年以来的卓越传承',
    description: '了解独角兽石油工业，一家自 1964 年以来值得信赖的石油产品制造商。探索我们的价值观、愿景、使命以及对质量的承诺。',
    keywords: '独角兽石油, 关于我们, 公司历史, 石油制造商, 质量标准, 客户满意度, 孟买印度'
  }
};

const shortNameTranslations = {
  en: 'Unicorn',
  de: 'Unicorn',
  es: 'Unicorn',
  fr: 'Unicorn',
  nl: 'Unicorn',
  pt: 'Unicorn',
  ar: 'يونيكورن',
  ru: 'Юникорн',
  zh: '独角兽'
};

const localesDir = path.join(__dirname, 'public', 'locales');
const languages = ['en', 'de', 'es', 'fr', 'nl', 'pt', 'ar', 'ru', 'zh'];

languages.forEach(lang => {
  const filePath = path.join(localesDir, lang, 'about.json');
  if (fs.existsSync(filePath)) {
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Update hero title
    content.hero.title = nameTranslations[lang];
    
    // Add meta tags
    content.meta = metaTranslations[lang];
    
    // Update intro.p1
    if (content.intro && content.intro.p1) {
      if (lang === 'ar' || lang === 'zh') {
        content.intro.p1 = content.intro.p1.replace(/Unicorn Petroleum Industries Private Limited/g, nameTranslations[lang]);
      } else if (lang === 'ru') {
        content.intro.p1 = content.intro.p1.replace(/Unicorn Petroleum Industries Private Limited/g, `Unicorn Petroleum Industries Private Limited (${nameTranslations[lang]})`);
      }
    }
    
    // Update belief.text
    if (content.belief && content.belief.text) {
      content.belief.text = content.belief.text.replace(/Unicorn/g, shortNameTranslations[lang]);
      // Note: toUpperCase() might not be ideal for Arabic/Chinese but doesn't hurt.
      content.belief.text = content.belief.text.replace(/UNICORN/g, shortNameTranslations[lang].toUpperCase());
    }
    
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
    console.log(`Updated ${lang}`);
  }
});
