import fs from 'fs';
import https from 'https';

const url = 'https://lottie.host/1c4d9b2b-093a-4e35-a6a9-8581dd0eb13e/7bIe8S5WJt.json';

https.get(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Accept': '*/*'
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('public/hacker.json', data);
    console.log('Successfully saved to public/hacker.json');
  });
}).on('error', (err) => {
  console.error(err);
});
