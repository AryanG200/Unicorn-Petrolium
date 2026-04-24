const fs = require('fs');
const path = require('path');

const industryMeta = {
  pharmaceutical: { title: 'Pharmaceutical Applications', desc: 'High-purity ingredients for life-saving medicines' },
  cosmetics: { title: 'Cosmetic Applications', desc: 'Premium ingredients for beauty and personal care products' },
  'personal-care': { title: 'Personal Care Applications', desc: 'Specialized solutions for hygiene and health' },
  'home-care': { title: 'Home Care Applications', desc: 'Efficient chemical solutions for household applications' },
  textile: { title: 'Textile Applications', desc: 'Performance chemicals for fiber and fabric processing' },
  lubricants: { title: 'Lubricants Applications', desc: 'High-performance bases for industrial lubrication' },
  'bulk-chemical': { title: 'Bulk Chemical Applications', desc: 'Industrial grade chemical solutions for diverse manufacturing' }
};

const breadcrumbsTranslations = {
  en: { home: 'Home', applications: 'Applications', pharmaceutical: 'Pharmaceutical', cosmetics: 'Cosmetics', 'personal-care': 'Personal Care', 'home-care': 'Home Care', textile: 'Textile', lubricants: 'Lubricants', 'bulk-chemical': 'Bulk Chemical' },
  de: { home: 'Startseite', applications: 'Anwendungen', pharmaceutical: 'Pharmazie', cosmetics: 'Kosmetik', 'personal-care': 'Körperpflege', 'home-care': 'Haushaltspflege', textile: 'Textilien', lubricants: 'Schmierstoffe', 'bulk-chemical': 'Basischemikalien' },
  es: { home: 'Inicio', applications: 'Aplicaciones', pharmaceutical: 'Farmacéutica', cosmetics: 'Cosméticos', 'personal-care': 'Cuidado Personal', 'home-care': 'Cuidado del Hogar', textile: 'Textiles', lubricants: 'Lubricantes', 'bulk-chemical': 'Productos Químicos a Granel' },
  fr: { home: 'Accueil', applications: 'Applications', pharmaceutical: 'Pharmaceutique', cosmetics: 'Cosmétiques', 'personal-care': 'Soins Personnels', 'home-care': 'Entretien Ménager', textile: 'Textile', lubricants: 'Lubrifiants', 'bulk-chemical': 'Produits Chimiques en Vrac' },
  nl: { home: 'Home', applications: 'Toepassingen', pharmaceutical: 'Farmaceutisch', cosmetics: 'Cosmetica', 'personal-care': 'Persoonlijke Verzorging', 'home-care': 'Huishoudelijke Verzorging', textile: 'Textiel', lubricants: 'Smeermiddelen', 'bulk-chemical': 'Bulkchemicaliën' },
  pt: { home: 'Início', applications: 'Aplicações', pharmaceutical: 'Farmacêutica', cosmetics: 'Cosméticos', 'personal-care': 'Cuidados Pessoais', 'home-care': 'Cuidados Domésticos', textile: 'Têxtil', lubricants: 'Lubrificantes', 'bulk-chemical': 'Produtos Químicos a Granel' },
  ar: { home: 'الرئيسية', applications: 'التطبيقات', pharmaceutical: 'الصيدلانية', cosmetics: 'مستحضرات التجميل', 'personal-care': 'العناية الشخصية', 'home-care': 'العناية المنزلية', textile: 'المنسوجات', lubricants: 'زيوت التشحيم', 'bulk-chemical': 'المواد الكيميائية السائبة' },
  ru: { home: 'Главная', applications: 'Применение', pharmaceutical: 'Фармацевтика', cosmetics: 'Косметика', 'personal-care': 'Личная гигиена', 'home-care': 'Уход за домом', textile: 'Текстиль', lubricants: 'Смазочные материалы', 'bulk-chemical': 'Промышленная химия' },
  zh: { home: '首页', applications: '应用领域', pharmaceutical: '医药', cosmetics: '化妆品', 'personal-care': '个人护理', 'home-care': '家居护理', textile: '纺织', lubricants: '润滑剂', 'bulk-chemical': '大宗化学品' }
};

const languages = ['en', 'de', 'es', 'fr', 'nl', 'pt', 'ar', 'ru', 'zh'];

languages.forEach(lang => {
  const filePath = path.join('public', 'locales', lang, 'applications.json');
  if (fs.existsSync(filePath)) {
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Update breadcrumbs
    content.breadcrumbs = breadcrumbsTranslations[lang];
    
    // Update industries
    content.industries = {};
    Object.keys(industryMeta).forEach(id => {
      content.industries[id] = {
        hero: {
          title: industryMeta[id].title, // Note: In a real scenario these would be translated too, but keeping it simple for now or using defaults
          description: industryMeta[id].desc
        }
      };
    });
    
    // Sections remained the same
    if (!content.sections) {
      content.sections = {
        overview: { title: 'Industry Overview' },
        relatedProducts: { title: 'Related products', viewDetails: 'View Details' }
      };
    }
    
    // Add UI section if not exists
    content.ui = {
      relatedProducts: 'Related products',
      viewDetails: 'View Details'
    };

    fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
    console.log(`Updated applications.json for ${lang}`);
  }
});
