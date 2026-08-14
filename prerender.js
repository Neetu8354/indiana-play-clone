import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE = 'https://yolo365books.live';

// Define all routes and their canonical URLs
const routes = [
  { path: '/', canonical: `${SITE}/` },
  { path: '/about', canonical: `${SITE}/about` },
  { path: '/contact', canonical: `${SITE}/contact` },
  { path: '/blog', canonical: `${SITE}/blog` },
  { path: '/games/cricket-betting', canonical: `${SITE}/games/cricket-betting` },
  { path: '/games/teen-patti', canonical: `${SITE}/games/teen-patti` },
  { path: '/games/aviator', canonical: `${SITE}/games/aviator` },
  { path: '/games/andar-bahar', canonical: `${SITE}/games/andar-bahar` },
];

// Read the main index.html
const mainIndexPath = path.join(__dirname, 'index.html');
let indexHtml = fs.readFileSync(mainIndexPath, 'utf8');

// Function to create HTML file with specific canonical URL
function createRouteHTML(route) {
  // Replace the canonical URL in the HTML
  const routeHtml = indexHtml.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${route.canonical}" />`
  );

  // Determine the output path
  let outputPath;
  if (route.path === '/') {
    outputPath = path.join(__dirname, 'dist', 'index.html');
  } else {
    outputPath = path.join(__dirname, 'dist', route.path, 'index.html');
  }

  // Create directory if it doesn't exist
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write the file
  fs.writeFileSync(outputPath, routeHtml);
  console.log(`✅ Created: ${outputPath}`);
}

// Process all routes
console.log('🚀 Generating static HTML files with canonical URLs...\n');

routes.forEach(route => {
  createRouteHTML(route);
});

console.log('\n✨ All static HTML files generated successfully!');
console.log('📁 Files are in the dist/ directory');