import fs from 'fs';
import path from 'path';
import https from 'https';

const icons = {
  'tenis-meja': 'sports_tennis',
  'badminton': 'sports_tennis',
  'padel': 'sports_tennis',
  'tennis': 'sports_tennis',
  'futsal': 'sports_soccer',
  'basket': 'sports_basketball',
  'lari': 'sprint',
  'art': 'palette',
  'bootcamp': 'fitness_center',
  'menembak': 'crisis_alert',
  'pes': 'sports_esports',
  'ml': 'sports_esports',
  'juara': 'workspace_premium'
};

const outDir = path.join(process.cwd(), 'src', 'assets', 'icons');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

Object.entries(icons).forEach(([name, icon]) => {
  const url = `https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/${icon}/default/24px.svg`;
  const outPath = path.join(outDir, `${name}.svg`);
  https.get(url, (res) => {
    if (res.statusCode !== 200) {
       console.log('Failed for', name, res.statusCode);
       fs.writeFileSync(outPath, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><text y="20" font-size="20">${name.charAt(0)}</text></svg>`);
       return;
    }
    const file = fs.createWriteStream(outPath);
    res.pipe(file);
  });
});
console.log('Finished initiating downloads.');
