const fs = require('fs');
const path = require('path');

const langs = ['en', 'es', 'pt', 'fr', 'zh', 'ru', 'ar', 'de', 'nl'];

const dicts = {
  events: {
    en: {
      "upcomingEvents": "Upcoming Events",
      "upcomingEventsDesc": "Connect with Unicorn Petroleum and explore our latest innovations at premier industry exhibitions.",
      "pastEvents": "Past Events",
      "pastEventsDesc": "Take a look back at some of our significant international showcases and industry engagements over the years.",
      "eventDate": "Event Date",
      "location": "Location",
      "aboutEvent": "About the Event",
      "joinUsAt": "Join us at",
      "discoverDesc": "to discover the latest advancements and innovations in the industry. Connect with our experts and learn how Unicorn Petroleum's high-quality products can support your business requirements.",
      "upcomingEvent": "Upcoming Event",
      "pastEvent": "Past Event",
      "close": "Close",
      "contactUs": "Contact Us"
    },
    es: {
      "upcomingEvents": "Próximos eventos",
      "upcomingEventsDesc": "Conéctese con Unicorn Petroleum y explore nuestras últimas innovaciones en las principales exposiciones.",
      "pastEvents": "Eventos pasados",
      "pastEventsDesc": "Eche un vistazo a algunas de nuestras importantes exhibiciones internacionales.",
      "eventDate": "Fecha del evento",
      "location": "Ubicación",
      "aboutEvent": "Sobre el evento",
      "joinUsAt": "Únase a nosotros en",
      "discoverDesc": "para descubrir los últimos avances e innovaciones de la industria.",
      "upcomingEvent": "Próximo evento",
      "pastEvent": "Evento pasado",
      "close": "Cerrar",
      "contactUs": "Contáctenos"
    },
    pt: {
      "upcomingEvents": "Próximos Eventos",
      "upcomingEventsDesc": "Conecte-se com a Unicorn Petroleum e explore nossas inovações.",
      "pastEvents": "Eventos Anteriores",
      "pastEventsDesc": "Dê uma olhada em algumas de nossas vitrines internacionais significativas.",
      "eventDate": "Data do Evento",
      "location": "Local",
      "aboutEvent": "Sobre o Evento",
      "joinUsAt": "Junte-se a nós em",
      "discoverDesc": "para descobrir os últimos avanços e inovações da indústria.",
      "upcomingEvent": "Próximo Evento",
      "pastEvent": "Evento Anterior",
      "close": "Fechar",
      "contactUs": "Contate-Nos"
    },
    fr: {
      "upcomingEvents": "Événements à Venir",
      "upcomingEventsDesc": "Connectez-vous avec Unicorn Petroleum et explorez nos dernières innovations.",
      "pastEvents": "Événements Passés",
      "pastEventsDesc": "Jetez un œil à certaines de nos grandes vitrines internationales.",
      "eventDate": "Date de l'événement",
      "location": "Lieu",
      "aboutEvent": "À propos de l'événement",
      "joinUsAt": "Rejoignez-nous à",
      "discoverDesc": "pour découvrir les dernières avancées et innovations.",
      "upcomingEvent": "Événement à Venir",
      "pastEvent": "Événement Passé",
      "close": "Fermer",
      "contactUs": "Contactez-nous"
    },
    zh: {
      "upcomingEvents": "即将举行的活动",
      "upcomingEventsDesc": "联系Unicorn Petroleum并在顶级行业展览会上探索我们的最新创新。",
      "pastEvents": "过去活动",
      "pastEventsDesc": "回顾一下我们多年来参与的重大国际展示和行业活动。",
      "eventDate": "活动日期",
      "location": "地点",
      "aboutEvent": "关于活动",
      "joinUsAt": "加入我们",
      "discoverDesc": "以发现行业内最新进展和创新。",
      "upcomingEvent": "即将举行的活动",
      "pastEvent": "过去活动",
      "close": "关闭",
      "contactUs": "联系我们"
    },
    ru: {
      "upcomingEvents": "Предстоящие События",
      "upcomingEventsDesc": "Свяжитесь с Unicorn Petroleum и изучите наши последние инновации.",
      "pastEvents": "Прошедшие События",
      "pastEventsDesc": "Взгляните на наши значимые международные выставки.",
      "eventDate": "Дата События",
      "location": "Местоположение",
      "aboutEvent": "О Событии",
      "joinUsAt": "Присоединяйтесь к нам на",
      "discoverDesc": "чтобы узнать о последних достижениях и инновациях.",
      "upcomingEvent": "Предстоящее Событие",
      "pastEvent": "Прошедшее Событие",
      "close": "Закрыть",
      "contactUs": "Свяжитесь с нами"
    },
    ar: {
      "upcomingEvents": "الفعاليات القادمة",
      "upcomingEventsDesc": "تواصل مع شركة Unicorn Petroleum واستكشف ابتكاراتنا.",
      "pastEvents": "الفعاليات السابقة",
      "pastEventsDesc": "ألقِ نظرة عامة على مشاركاتنا الدولية الهامة.",
      "eventDate": "تاريخ الحدث",
      "location": "الموقع",
      "aboutEvent": "حول الحدث",
      "joinUsAt": "انضم إلينا في",
      "discoverDesc": "لاكتشاف أحدث التطورات.",
      "upcomingEvent": "حدث قادم",
      "pastEvent": "حدث سابق",
      "close": "إغلاق",
      "contactUs": "اتصل بنا"
    },
    de: {
      "upcomingEvents": "Kommende Veranstaltungen",
      "upcomingEventsDesc": "Verbinden Sie sich mit Unicorn Petroleum und erkunden Sie unsere neuesten Innovationen.",
      "pastEvents": "Vergangene Veranstaltungen",
      "pastEventsDesc": "Werfen Sie einen Blick zurück auf unsere bedeutenden internationalen Showcases.",
      "eventDate": "Veranstaltungsdatum",
      "location": "Standort",
      "aboutEvent": "Über die Veranstaltung",
      "joinUsAt": "Besuchen Sie uns am",
      "discoverDesc": "um die neuesten Fortschritte zu entdecken.",
      "upcomingEvent": "Kommende Veranstaltung",
      "pastEvent": "Vergangene Veranstaltung",
      "close": "Schließen",
      "contactUs": "Kontaktiere uns"
    },
    nl: {
      "upcomingEvents": "Aankomende Evenementen",
      "upcomingEventsDesc": "Maak contact met Unicorn Petroleum en verken onze innovaties.",
      "pastEvents": "Eerdere Evenementen",
      "pastEventsDesc": "Kijk terug op onze belangrijke internationale showcases.",
      "eventDate": "Evenement Datum",
      "location": "Locatie",
      "aboutEvent": "Over het Evenement",
      "joinUsAt": "Ontmoet ons bij",
      "discoverDesc": "om de nieuwste ontwikkelingen te ontdekken.",
      "upcomingEvent": "Aankomend Evenement",
      "pastEvent": "Vorig Evenement",
      "close": "Sluiten",
      "contactUs": "Neem contact op"
    }
  },
  contact: {
    en: {
      "title": "Get in touch with us",
      "subtitle": "We're here to assist with your inquiries.",
      "mainOffice": "Main Office Address:",
      "factoryAddresses": "Factory Addresses:",
      "phones": "Phone Numbers:",
      "emails": "Email Addresses:",
      "workingHours": "Working Hours:",
      "sendMessage": "Send us a message",
      "officeLocation": "Unit No. 1, Riddhi Siddhi Corporate Park, VN Purav Marg, (Sion Trombay Road), Chembur, Mumbai - 400071, MH, India.",
      "factory1": "Unicorn Petroleum Industries Pvt. Ltd., 10, Vaibhav Industrial Estate, Sion - Trombay Road, Deonar, Mumbai - 400088, MH, India.",
      "factory2": "Eastern Petroleum Pvt. Ltd., 235-239 Jawahar Industrial Estate, Kamothe, Panvel, Dist. Raigad, Maharashtra 410209, India.",
      "hoursVal": "Monday - Saturday, 9 AM - 6 PM IST"
    },
    es: {
      "title": "Póngase en contacto con nosotros",
      "subtitle": "Estamos aquí para ayudarle.",
      "mainOffice": "Sede principal:",
      "factoryAddresses": "Direcciones de fábrica:",
      "phones": "Teléfonos:",
      "emails": "Correos electrónicos:",
      "workingHours": "Horas de trabajo:",
      "sendMessage": "Envíanos un mensaje",
      "officeLocation": "Unit No. 1, Riddhi Siddhi Corporate Park, Chembur, Mumbai, India.",
      "factory1": "Unicorn Petroleum Industries Pvt. Ltd., Deonar, Mumbai.",
      "factory2": "Eastern Petroleum Pvt. Ltd., Kamothe, Panvel.",
      "hoursVal": "Lunes - Sábado, 9 AM - 6 PM IST"
    },
    pt: {
       "title": "Entre em contato conosco",
       "subtitle": "Estamos aqui para ajudar com suas dúvidas.",
       "mainOffice": "Escritório principal:",
       "factoryAddresses": "Endereços da fábrica:",
       "phones": "Telefones:",
       "emails": "E-mails:",
       "workingHours": "Horário de trabalho:",
       "sendMessage": "Mande-nos uma mensagem",
       "officeLocation": "Unit No. 1, Riddhi Siddhi Corporate Park, Chembur, Mumbai, India.",
       "factory1": "Unicorn Petroleum Industries Pvt. Ltd., Deonar, Mumbai.",
       "factory2": "Eastern Petroleum Pvt. Ltd., Kamothe, Panvel.",
       "hoursVal": "Segunda - Sábado, 9 AM - 6 PM IST"
    },
    fr: {
       "title": "Contactez-nous",
       "subtitle": "Nous sommes là pour répondre à vos demandes.",
       "mainOffice": "Siège social:",
       "factoryAddresses": "Adresses des usines:",
       "phones": "Numéros de téléphone:",
       "emails": "Adresses e-mail:",
       "workingHours": "Heures de travail:",
       "sendMessage": "Envoyez-nous un message",
       "officeLocation": "Unit No. 1, Riddhi Siddhi Corporate Park, Chembur, Mumbai, India.",
       "factory1": "Unicorn Petroleum Industries Pvt. Ltd., Deonar, Mumbai.",
       "factory2": "Eastern Petroleum Pvt. Ltd., Kamothe, Panvel.",
       "hoursVal": "Lundi - Samedi, 9 AM - 6 PM IST"
    },
    zh: {
       "title": "联系我们",
       "subtitle": "我们随时为您提供帮助。",
       "mainOffice": "总公司地址:",
       "factoryAddresses": "工厂地址:",
       "phones": "电话号码:",
       "emails": "电子邮件:",
       "workingHours": "工作时间:",
       "sendMessage": "发送信息",
       "officeLocation": "Unit No. 1, Riddhi Siddhi Corporate Park, Chembur, Mumbai, India.",
       "factory1": "Unicorn Petroleum Industries Pvt. Ltd., Deonar, Mumbai.",
       "factory2": "Eastern Petroleum Pvt. Ltd., Kamothe, Panvel.",
       "hoursVal": "星期一至星期六，上午9点至下午6点"
    },
    ru: {
       "title": "Свяжитесь с нами",
       "subtitle": "Мы всегда готовы помочь.",
       "mainOffice": "Главный офис:",
       "factoryAddresses": "Адреса фабрики:",
       "phones": "Телефоны:",
       "emails": "Эл. почта:",
       "workingHours": "Рабочие часы:",
       "sendMessage": "Отправить сообщение",
       "officeLocation": "Unit No. 1, Riddhi Siddhi Corporate Park, Chembur, Mumbai, India.",
       "factory1": "Unicorn Petroleum Industries Pvt. Ltd., Deonar, Mumbai.",
       "factory2": "Eastern Petroleum Pvt. Ltd., Kamothe, Panvel.",
       "hoursVal": "Понедельник - Суббота, 9:00 - 18:00 IST"
    },
    ar: {
       "title": "ابقى على تواصل معنا",
       "subtitle": "نحن هنا للمساعدة في استفساراتك.",
       "mainOffice": "المكتب الرئيسي:",
       "factoryAddresses": "عناوين المصانع:",
       "phones": "أرقام الهواتف:",
       "emails": "عناوين البريد الإلكتروني:",
       "workingHours": "ساعات العمل:",
       "sendMessage": "أرسل لنا رسالة",
       "officeLocation": "Unit No. 1, Riddhi Siddhi Corporate Park, Chembur, Mumbai, India.",
       "factory1": "Unicorn Petroleum Industries Pvt. Ltd., Deonar, Mumbai.",
       "factory2": "Eastern Petroleum Pvt. Ltd., Kamothe, Panvel.",
       "hoursVal": "الإثنين - السبت، 9 صباحاً - 6 مساءً"
    },
    de: {
        "title": "Nimm Kontakt mit uns auf",
        "subtitle": "Wir helfen Ihnen gerne bei Ihren Anfragen.",
        "mainOffice": "Hauptsitz:",
        "factoryAddresses": "Fabrikadressen:",
        "phones": "Telefonnummern:",
        "emails": "E-Mail-Adressen:",
        "workingHours": "Arbeitszeiten:",
        "sendMessage": "Senden Sie uns eine Nachricht",
        "officeLocation": "Unit No. 1, Riddhi Siddhi Corporate Park, Chembur, Mumbai, India.",
        "factory1": "Unicorn Petroleum Industries Pvt. Ltd., Deonar, Mumbai.",
        "factory2": "Eastern Petroleum Pvt. Ltd., Kamothe, Panvel.",
        "hoursVal": "Montag - Samstag, 9 - 18 Uhr"
    },
    nl: {
        "title": "Neem contact met ons op",
        "subtitle": "We zijn er om u te helpen.",
        "mainOffice": "Hoofdkantoor:",
        "factoryAddresses": "Fabriek Adressen:",
        "phones": "Telefoonnummers:",
        "emails": "E-mailadressen:",
        "workingHours": "Werkuren:",
        "sendMessage": "Stuur ons een bericht",
        "officeLocation": "Unit No. 1, Riddhi Siddhi Corporate Park, Chembur, Mumbai, India.",
        "factory1": "Unicorn Petroleum Industries Pvt. Ltd., Deonar, Mumbai.",
        "factory2": "Eastern Petroleum Pvt. Ltd., Kamothe, Panvel.",
        "hoursVal": "Maandag - Zaterdag, 9 - 18 uur"
    }
  },
  reach: {
    en: {
      "years": "years",
      "countries": "countries",
      "companies": "companies",
      "title": "Global reach",
      "subtitle": "Delivering quality beyond borders",
      "desc1": "Given our impeccable quality adherence, over past six decades, we enjoy the patronage of majority of the world's most recognisable top notch pharmaceutical, cosmetic & FMCG companies, whose loyalty is a testament of our time tested, product quality.",
      "desc2": "With exports to more than 60 countries, we specialize in providing consistent quality products, which meets the most stringent quality requirements of various pharmacopoeias."
    },
    es: {
      "years": "años",
      "countries": "países",
      "companies": "empresas",
      "title": "Alcance global",
      "subtitle": "Entregando calidad más allá de las fronteras",
      "desc1": "Dada nuestra impecable adherencia a la calidad, durante las últimas seis décadas, hemos disfrutado del patrocinio de la mayoría de las empresas farmacéuticas y cosméticas más reconocidas.",
      "desc2": "Con exportaciones a más de 60 países, nos especializamos en proporcionar productos de calidad constante."
    },
    pt: {
      "years": "anos",
      "countries": "países",
      "companies": "empresas",
      "title": "Alcance global",
      "subtitle": "Entregando qualidade além das fronteiras",
      "desc1": "Dada a nossa impecável aderência à qualidade, ao longo das últimas seis décadas, desfrutamos do patrocínio da maioria das empresas farmacêuticas mais reconhecidas.",
      "desc2": "Com exportações para mais de 60 países, nos especializamos em fornecer produtos de qualidade consistente."
    },
    fr: {
      "years": "années",
      "countries": "pays",
      "companies": "entreprises",
      "title": "Portée mondiale",
      "subtitle": "Offrir de la qualité au-delà des frontières",
      "desc1": "Étant donné notre respect irréprochable de la qualité au cours des six dernières décennies, nous bénéficions du patronage de la majorité des entreprises pharmaceutiques les plus reconnues.",
      "desc2": "Avec des exportations vers plus de 60 pays, nous sommes spécialisés dans la fourniture de produits de qualité."
    },
    zh: {
      "years": "年",
      "countries": "个国家",
      "companies": "家公司",
      "title": "全球影响力",
      "subtitle": "跨越国界提供高品质",
      "desc1": "基于我们对质量的严格要求，在过去的60年里，我们赢得了世界上最知名的制药和化妆品公司的长期选择。",
      "desc2": "产品出口到60多个国家，我们专注于提供稳定的质量产品。"
    },
    ru: {
       "years": "лет",
       "countries": "стран",
       "companies": "компаний",
       "title": "Глобальный охват",
       "subtitle": "Обеспечение качества за пределами границ",
       "desc1": "Учитывая нашу безупречную приверженность качеству на протяжении шести десятилетий, мы пользуемся покровительством большинства мировых фармацевтических компаний.",
       "desc2": "Экспортируя продукцию в более чем 60 стран, мы специализируемся на стабильном качестве."
    },
    ar: {
       "years": "سنوات",
       "countries": "دولة",
       "companies": "شركة",
       "title": "الوصول العالمي",
       "subtitle": "تقديم الجودة وراء الحدود",
       "desc1": "نظراً لالتزامنا الدائم بالجودة عبر العقود الستة الماضية، فإننا نحظى برعاية معظم شركات الأدوية الكبرى.",
       "desc2": "مع الصادرات إلى أكثر من 60 دولة، نحن متخصصون في تقديم منتجات عالية الجودة."
    },
    de: {
        "years": "Jahre",
        "countries": "Länder",
        "companies": "Unternehmen",
        "title": "Globale Reichweite",
        "subtitle": "Qualität über Grenzen hinaus",
        "desc1": "Dank unserer makellosen Einhaltung der Qualitätsstandards in den letzten sechs Jahrzehnten genießen wir das Vertrauen der weltweit bekanntesten Pharmaunternehmen.",
        "desc2": "Mit Exportangeboten in über 60 Ländern haben wir uns auf die Bereitstellung konsistenter Qualität spezialisiert."
    },
    nl: {
        "years": "jaren",
        "countries": "landen",
        "companies": "bedrijven",
        "title": "Wereldwijd bereik",
        "subtitle": "Kwaliteit over grenzen heen",
        "desc1": "Gezien onze onberispelijke kwaliteit, genieten we al zes decennia de bescherming van de meest bekende farmaceutische bedrijven.",
        "desc2": "Met export naar meer dan 60 landen, zijn we gespecialiseerd in het leveren van consequente kwaliteit."
    }
  }
};

const basePath = path.join(__dirname, 'public', 'locales');

langs.forEach(lang => {
  const langDir = path.join(basePath, lang);
  if (!fs.existsSync(langDir)) {
    console.log('Skipping ' + langDir);
    return;
  }
  
  Object.keys(dicts).forEach(ns => {
    const filePath = path.join(langDir, `${ns}.json`);
    const content = JSON.stringify(dicts[ns][lang] || dicts[ns]['en'], null, 2);
    fs.writeFileSync(filePath, content);
    console.log(`Written ${filePath}`);
  });
});
