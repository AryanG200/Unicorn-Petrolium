const fs = require('fs');
const path = require('path');

const categoriesTranslations = {
  en: { pharmaceutical: 'Pharmaceutical', cosmetics: 'Cosmetics', 'personal-care': 'Personal Care', 'home-care': 'Home Care', textile: 'Textile', lubricants: 'Lubricants' },
  de: { pharmaceutical: 'Pharmazie', cosmetics: 'Kosmetik', 'personal-care': 'Körperpflege', 'home-care': 'Haushaltspflege', textile: 'Textilien', lubricants: 'Schmierstoffe' },
  es: { pharmaceutical: 'Farmacéutica', cosmetics: 'Cosméticos', 'personal-care': 'Cuidado Personal', 'home-care': 'Cuidado del Hogar', textile: 'Textiles', lubricants: 'Lubricantes' },
  fr: { pharmaceutical: 'Pharmaceutique', cosmetics: 'Cosmétiques', 'personal-care': 'Soins Personnels', 'home-care': 'Entretien Ménager', textile: 'Textile', lubricants: 'Lubrifiants' },
  nl: { pharmaceutical: 'Farmaceutisch', cosmetics: 'Cosmetica', 'personal-care': 'Persoonlijke Verzorging', 'home-care': 'Huishoudelijke Verzorging', textile: 'Textiel', lubricants: 'Smeermiddelen' },
  pt: { pharmaceutical: 'Farmacêutica', cosmetics: 'Cosméticos', 'personal-care': 'Cuidados Pessoais', 'home-care': 'Cuidados Domésticos', textile: 'Têxtil', lubricants: 'Lubrificantes' },
  ar: { pharmaceutical: 'الصيدلانية', cosmetics: 'مستحضرات التجميل', 'personal-care': 'العناية الشخصية', 'home-care': 'العناية المنزلية', textile: 'المنسوجات', lubricants: 'زيوت التشحيم' },
  ru: { pharmaceutical: 'Фармацевтика', cosmetics: 'Косметика', 'personal-care': 'Личная гигиена', 'home-care': 'Уход за домом', textile: 'Текстиль', lubricants: 'Смазочные материалы' },
  zh: { pharmaceutical: '医药', cosmetics: '化妆品', 'personal-care': '个人护理', 'home-care': '家居护理', textile: '纺织', lubricants: '润滑剂' }
};

const languages = ['en', 'de', 'es', 'fr', 'nl', 'pt', 'ar', 'ru', 'zh'];

languages.forEach(lang => {
  const filePath = path.join('public', 'locales', lang, 'applications.json');
  if (fs.existsSync(filePath)) {
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    content.categories = {};
    Object.keys(categoriesTranslations[lang]).forEach(id => {
      content.categories[id] = { name: categoriesTranslations[lang][id] };
    });
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
    console.log(`Updated applications.json for ${lang} with categories`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});
