const fs = require('fs');
const path = require('path');

const langs = ['en', 'es', 'pt', 'fr', 'zh', 'ru', 'ar', 'de', 'nl'];

const newKeys = {
  form: {
    en: {
      "quoteTitle": "Request a Quote or Sample",
      "fullName": "Enter Full Name",
      "company": "Enter Company Name",
      "email": "Enter Email",
      "mobile": "Enter Mobile Number",
      "country": "Enter Country Name",
      "grade": "Enter Grade/Quality Needed",
      "subject": "Select Subject",
      "message": "Message",
      "submitQuote": "Submit Enquiry",
      "submitContact": "Send Message",
      "successTitle": "Thank you! Your message has been sent successfully.",
      "successDesc": "We'll get back to you within 24 hours.",
      "errorTitle": "Sorry, there was an error sending your message.",
      "errorDesc": "Please try again or contact us directly.",
      "submitting": "Sending..."
    },
    es: {
      "quoteTitle": "Solicitar una Cotización o Muestra",
      "fullName": "Ingrese su nombre completo",
      "company": "Ingrese el nombre de la empresa",
      "email": "Ingrese correo electrónico",
      "mobile": "Ingrese número de celular",
      "country": "Ingrese su país",
      "grade": "Ingrese grado/calidad necesaria",
      "subject": "Seleccione tema",
      "message": "Mensaje",
      "submitQuote": "Enviar Consulta",
      "submitContact": "Enviar Mensaje",
      "successTitle": "¡Gracias! Su mensaje ha sido enviado.",
      "successDesc": "Nos comunicaremos dentro de 24 horas",
      "errorTitle": "Error al enviar",
      "errorDesc": "Revise su conexión e intente nuevamente",
      "submitting": "Enviando..."
    },
    pt: {
      "quoteTitle": "Solicite uma Cotação ou Amostra",
      "fullName": "Digite o nome completo",
      "company": "Digite o nome da empresa",
      "email": "Digite o e-mail",
      "mobile": "Digite o número de celular",
      "country": "Digite o país",
      "grade": "Digite o grau/qualidade",
      "subject": "Selecione o assunto",
      "message": "Mensagem",
      "submitQuote": "Enviar Consulta",
      "submitContact": "Enviar Mensagem",
      "successTitle": "Obrigado! Sua mensagem foi enviada",
      "successDesc": "Entraremos em contato em 24h",
      "errorTitle": "Erro ao enviar",
      "errorDesc": "Por favor tente novamente",
      "submitting": "Enviando..."
    },
    fr: {
      "quoteTitle": "Demander un devis ou un échantillon",
      "fullName": "Entrez le nom complet",
      "company": "Entrez le nom de l'entreprise",
      "email": "Entrez l'e-mail",
      "mobile": "Entrez le numéro mobile",
      "country": "Entrez le pays",
      "grade": "Entrez la qualité nécessaire",
      "subject": "Sélectionnez le sujet",
      "message": "Message",
      "submitQuote": "Soumettre une demande",
      "submitContact": "Envoyer le message",
      "successTitle": "Merci! Votre message a été expédié.",
      "successDesc": "Nous vous répondrons d'ici 24h.",
      "errorTitle": "Erreur",
      "errorDesc": "Veuillez réessayer",
      "submitting": "Envoi..."
    },
    zh: {
      "quoteTitle": "索取报价或样品",
      "fullName": "输入全名",
      "company": "输入公司名称",
      "email": "输入电子邮箱",
      "mobile": "输入手机号码",
      "country": "输入国家",
      "grade": "输入等级需求",
      "subject": "选择主题",
      "message": "信息",
      "submitQuote": "提交查询",
      "submitContact": "发送信息",
      "successTitle": "发送成功",
      "successDesc": "我们将尽快回复",
      "errorTitle": "错误",
      "errorDesc": "发送失败",
      "submitting": "发送中..."
    },
    ru: {
      "quoteTitle": "Запросить цену или образец",
      "fullName": "Введите полное имя",
      "company": "Введите название компании",
      "email": "Введите Email",
      "mobile": "Введите мобильный телефон",
      "country": "Введите страну",
      "grade": "Введите качество",
      "subject": "Выберите тему",
      "message": "Сообщение",
      "submitQuote": "Отправить запрос",
      "submitContact": "Отправить сообщение",
      "successTitle": "Сообщение отправлено",
      "successDesc": "Мы свяжемся с вами в течение 24 часов",
      "errorTitle": "Ошибка отправки",
      "errorDesc": "Попробуйте снова",
      "submitting": "Отправка..."
    },
    ar: {
      "quoteTitle": "اطلب عرض أسعار أو عينة",
      "fullName": "أدخل الاسم الكامل",
      "company": "أدخل اسم الشركة",
      "email": "أدخل البريد الإلكتروني",
      "mobile": "أدخل رقم الهاتف",
      "country": "أدخل الدولة",
      "grade": "أدخل الجودة المطلوبة",
      "subject": "اختر الموضوع",
      "message": "رسالة",
      "submitQuote": "إرسال الاستفسار",
      "submitContact": "إرسال رسالة",
      "successTitle": "تم الإرسال",
      "successDesc": "سنرد عليك قريبا",
      "errorTitle": "خطأ",
      "errorDesc": "حاول مرة أخرى",
      "submitting": "جارٍ الإرسال..."
    },
    de: {
      "quoteTitle": "Fordern Sie ein Angebot oder Muster an",
      "fullName": "Vollständigen Namen eingeben",
      "company": "Firmenname eingeben",
      "email": "Email eingeben",
      "mobile": "Telefonnummer eingeben",
      "country": "Land eingeben",
      "grade": "Qualität eingeben",
      "subject": "Thema auswählen",
      "message": "Nachricht",
      "submitQuote": "Anfrage senden",
      "submitContact": "Nachricht senden",
      "successTitle": "Danke! Ihre Nachricht wurde gesendet.",
      "successDesc": "Wir melden uns in 24h",
      "errorTitle": "Fehler beim Senden",
      "errorDesc": "Bitte versuchen Sie es erneut",
      "submitting": "Senden..."
    },
    nl: {
      "quoteTitle": "Vraag een offerte of monster aan",
      "fullName": "Voer volledige naam in",
      "company": "Voer bedrijfsnaam in",
      "email": "Voer email in",
      "mobile": "Voer mobiel nummer in",
      "country": "Voer land in",
      "grade": "Voer graad/kwaliteit in",
      "subject": "Selecteer onderwerp",
      "message": "Bericht",
      "submitQuote": "Verzend Aanvraag",
      "submitContact": "Verstuur Bericht",
      "successTitle": "Bedankt! Jouw bericht is verstuurd.",
      "successDesc": "We reageren binnen 24 uur",
      "errorTitle": "Fout",
      "errorDesc": "Probeer het opnieuw",
      "submitting": "Versturen..."
    }
  },
  footerText: {
    en: {
      "partner": "Your trusted partner for specialty products and sourcing solutions from India",
      "quickLinks": "Quick links",
      "contactHeader": "Feel free to contact us on",
      "copyright": "Copyright © 2020 Unicorn. All rights reserved."
    },
    es: {
      "partner": "Su socio de confianza en productos especiales y soluciones de la India",
      "quickLinks": "Enlaces rápidos",
      "contactHeader": "Contáctenos",
      "copyright": "Copyright © 2020 Unicorn. Todos los derechos reservados."
    },
    pt: {
      "partner": "Seu parceiro de confiança na Índia",
      "quickLinks": "Links rápidos",
      "contactHeader": "Sinta-se à vontade para nos contatar",
      "copyright": "Copyright © 2020 Unicorn. Todos os direitos reservados."
    },
    fr: {
      "partner": "Votre partenaire de confiance en Inde",
      "quickLinks": "Liens rapides",
      "contactHeader": "Contactez-nous",
      "copyright": "Copyright © 2020 Unicorn. Tous droits réservés."
    },
    zh: {
      "partner": "您来自印度的专业产品值得信赖的合作伙伴",
      "quickLinks": "快速链接",
      "contactHeader": "随时联系我们",
      "copyright": "Copyright © 2020 Unicorn. 版权所有."
    },
    ru: {
      "partner": "Ваш надежный партнер по специальным продуктам из Индии",
      "quickLinks": "Быстрые ссылки",
      "contactHeader": "Свяжитесь с нами",
      "copyright": "Copyright © 2020 Unicorn. Все права защищены."
    },
    ar: {
      "partner": "شريكك الموثوق للمنتجات الخاصة من الهند",
      "quickLinks": "روابط سريعة",
      "contactHeader": "لا تتردد في الاتصال بنا",
      "copyright": "حقوق النشر © 2020 Unicorn. جميع الحقوق محفوظة."
    },
    de: {
      "partner": "Ihr vertrauenswürdiger Partner für Spezialprodukte aus Indien",
      "quickLinks": "Schnellzugriff",
      "contactHeader": "Kontaktiere uns",
      "copyright": "Copyright © 2020 Unicorn. Alle Rechte vorbehalten."
    },
    nl: {
      "partner": "Uw vertrouwde partner in India",
      "quickLinks": "Snelle links",
      "contactHeader": "Neem gerust contact met ons op",
      "copyright": "Copyright © 2020 Unicorn. Alle rechten voorbehouden."
    }
  }
};

const basePath = path.join(__dirname, 'public', 'locales');

langs.forEach(lang => {
  const langDir = path.join(basePath, lang);
  const filePath = path.join(langDir, 'translation.json');
  if (fs.existsSync(filePath)) {
    const rawData = fs.readFileSync(filePath);
    const json = JSON.parse(rawData);
    json.form = newKeys.form[lang] || newKeys.form['en'];
    json.footerText = newKeys.footerText[lang] || newKeys.footerText['en'];
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
    console.log('Updated ' + filePath);
  }
});
