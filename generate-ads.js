import fs from 'fs';
import path from 'path';

// Get the publisher ID from Netlify environment variables
const pubId = process.env.VITE_GOOGLE_ADSENSE_VERIFICATION.replace("ca-", "");

if (!pubId) {
  console.error('❌ Error: VITE_GOOGLE_ADSENSE_VERIFICATION environment variable is missing.');
  process.exit(1);
}

// Ensure the public directory exists
const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Define the file path and content
const filePath = path.join(publicDir, 'ads.txt');
const content = `google.com, ${pubId}, DIRECT, f08c47fec0942fa0\n`;

// Write the file
fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ ads.txt generated successfully inside the public folder!');
