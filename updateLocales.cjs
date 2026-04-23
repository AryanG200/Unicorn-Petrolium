const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, 'public', 'locales');
const locales = fs.readdirSync(localesDir);

const keysToRemoveFrom = ['personal-care', 'home-care', 'textile', 'lubricants'];

locales.forEach(locale => {
  const filePath = path.join(localesDir, locale, 'applications.json');
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    let updated = false;

    if (data.industries) {
      keysToRemoveFrom.forEach(key => {
        if (data.industries[key]) {
          delete data.industries[key].tailoredForPharma;
          delete data.industries[key].applications;
          delete data.industries[key].compliance;
          delete data.industries[key].benefits;
          updated = true;
        }
      });
    }
    
    if (updated) {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      console.log(`Updated ${locale}/applications.json for the specified keys`);
    }
  }
});
