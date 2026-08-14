import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE = 'https://yolo365books.live';

// Define all routes with their metadata
const routes = [
  { 
    path: '/', 
    canonical: `${SITE}/`,
    title: "YOLO365 — India's #1 Online Cricket Betting ID, IPL & Live Casino 2026",
    description: "YOLO365 is India's most trusted online cricket betting exchange. Get your IPL betting ID on WhatsApp in 60 seconds with instant INR deposits and 5-minute withdrawals. 24/7 support."
  },
  { 
    path: '/about', 
    canonical: `${SITE}/about`,
    title: "About YOLO365 — India's Trusted Cricket Betting ID & Live Casino Site",
    description: "Learn about YOLO365 — India's most trusted online cricket betting exchange since 2021. 5 lakh+ users, instant UPI deposits, 5-minute withdrawals, licensed & regulated."
  },
  { 
    path: '/contact', 
    canonical: `${SITE}/contact`,
    title: "Contact YOLO365 — 24×7 WhatsApp Support for Cricket Betting ID",
    description: "Contact YOLO365 customer support 24×7 on WhatsApp for cricket betting ID, deposit, withdrawal, or live casino help. Hindi & English support."
  },
  { 
    path: '/blog', 
    canonical: `${SITE}/blog`,
    title: "YOLO365 Blog — IPL Betting Tips, Cricket Strategy & Live Casino Guides 2026",
    description: "Expert IPL 2026 betting tips, cricket strategy, Teen Patti & live casino guides from YOLO365 — India's #1 cricket betting exchange. New articles every week."
  },
  { 
    path: '/games/cricket-betting', 
    canonical: `${SITE}/games/cricket-betting`,
    title: "Online Cricket Betting in India 2026 — IPL, T20 & Test | YOLO365",
    description: "Bet on live cricket matches at YOLO365 — IPL 2026, T20 World Cup, BBL, PSL with best odds, in-play markets, instant UPI deposit & 5-minute withdrawal."
  },
  { 
    path: '/games/teen-patti', 
    canonical: `${SITE}/games/teen-patti`,
    title: "Play Teen Patti Online Real Money India — Live Dealer | YOLO365",
    description: "Play Teen Patti online for real money at YOLO365 with live dealers, instant withdrawals, and ₹100 minimum bets. Best Teen Patti casino in India."
  },
  { 
    path: '/games/aviator', 
    canonical: `${SITE}/games/aviator`,
    title: "Play Aviator Game Online India — Real Money Crash Game | YOLO365",
    description: "Play Aviator crash game online for real money at YOLO365. Instant withdrawals, live statistics, and ₹100 minimum bets. Best Aviator casino in India."
  },
  { 
    path: '/games/andar-bahar', 
    canonical: `${SITE}/games/andar-bahar`,
    title: "Play Andar Bahar Online Real Money India — Live Dealer | YOLO365",
    description: "Play Andar Bahar online for real money at YOLO365 with live dealers, instant withdrawals, and ₹100 minimum bets. Best Andar Bahar casino in India."
  },
];

// Read the main index.html
const mainIndexPath = path.join(__dirname, 'index.html');
let indexHtml = fs.readFileSync(mainIndexPath, 'utf8');

// Function to create HTML file with specific page metadata
function createRouteHTML(route) {
  let routeHtml = indexHtml;

  // Replace canonical URL
  routeHtml = routeHtml.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${route.canonical}" />`
  );

  // Replace og:url
  routeHtml = routeHtml.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${route.canonical}" />`
  );

  // Replace hreflang en-IN
  routeHtml = routeHtml.replace(
    /<link rel="alternate" hreflang="en-IN" href="[^"]*" \/>/,
    `<link rel="alternate" hreflang="en-IN" href="${route.canonical}" />`
  );

  // Replace hreflang x-default
  routeHtml = routeHtml.replace(
    /<link rel="alternate" hreflang="x-default" href="[^"]*" \/>/,
    `<link rel="alternate" hreflang="x-default" href="${route.canonical}" />`
  );

  // Replace title
  routeHtml = routeHtml.replace(
    /<title>[^<]*<\/title>/,
    `<title>${route.title}</title>`
  );

  // Replace meta description
  routeHtml = routeHtml.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${route.description}" />`
  );

  // Remove duplicate meta tags at the end of the file
  routeHtml = routeHtml.replace(
    /<meta property="og:title"[^>]*>[\s\S]*?<meta name="twitter:description"[^>]*>/,
    ''
  );

  // Add og:title after og:site_name if not present
  if (!routeHtml.includes('<meta property="og:title"')) {
    routeHtml = routeHtml.replace(
      /<meta property="og:site_name"[^>]*>/,
      `$&\n    <meta property="og:title" content="${route.title}" />`
    );
  } else {
    // Replace og:title in Open Graph section
    routeHtml = routeHtml.replace(
      /<meta property="og:title" content="[^"]*" \/>/,
      `<meta property="og:title" content="${route.title}" />`
    );
  }

  // Add og:description after og:url if not present
  if (!routeHtml.includes('<meta property="og:description"')) {
    routeHtml = routeHtml.replace(
      /<meta property="og:url"[^>]*>/,
      `$&\n    <meta property="og:description" content="${route.description}" />`
    );
  } else {
    // Replace og:description in Open Graph section
    routeHtml = routeHtml.replace(
      /<meta property="og:description" content="[^"]*" \/>/,
      `<meta property="og:description" content="${route.description}" />`
    );
  }

  // Replace twitter:title in Twitter section
  routeHtml = routeHtml.replace(
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${route.title}" />`
  );

  // Replace twitter:description in Twitter section
  routeHtml = routeHtml.replace(
    /<meta name="twitter:description" content="[^"]*" \/>/,
    `<meta name="twitter:description" content="${route.description}" />`
  );

  // Update breadcrumb schema to include current page
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE },
      { "@type": "ListItem", "position": 2, "name": getPageName(route.path), "item": route.canonical }
    ]
  };

  // Add page-specific schema
  let pageSchema = '';
  if (route.path === '/') {
    // Homepage schema
    pageSchema = `
    <!-- Organization Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "${SITE}/#organization",
      "name": "YOLO365",
      "alternateName": ["Yolo 365", "YOLO365 Bookmaker", "Yolo365 India"],
      "url": "${SITE}/",
      "logo": "${SITE}/favicon.png",
      "description": "India's premium online cricket betting and live casino platform. Get your betting ID on WhatsApp in 60 seconds.",
      "foundingDate": "2020",
      "areaServed": { "@type": "Country", "name": "India" },
      "sameAs": [
        "https://wa.link/reddyanna_",
        "https://t.me/yolo365",
        "https://twitter.com/yolo365",
        "https://www.instagram.com/yolo365"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "url": "https://wa.link/reddyanna_",
        "availableLanguage": ["English", "Hindi"],
        "hoursAvailable": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59"
      }
    }
    </script>

    <!-- Website + Sitelinks Search Box -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "${SITE}/#website",
      "url": "${SITE}/",
      "name": "YOLO365",
      "publisher": { "@id": "${SITE}/#organization" },
      "inLanguage": "en-IN"
    }
    </script>

    <!-- FAQ Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How do I get a YOLO365 betting ID?", "acceptedAnswer": { "@type": "Answer", "text": "Click any 'Get ID' button on yolo365books.live. It opens WhatsApp where our team shares your ID and password within 60 seconds." } },
        { "@type": "Question", "name": "Is YOLO365 safe and legal in India?", "acceptedAnswer": { "@type": "Answer", "text": "YOLO365 operates under international gaming licenses, uses bank-grade SSL encryption, and is trusted by 1 million+ Indian players. Users should verify the legal status of online betting in their specific jurisdiction before participating." } },
        { "@type": "Question", "name": "What is the minimum deposit on YOLO365?", "acceptedAnswer": { "@type": "Answer", "text": "You can start with as little as ₹100. YOLO365 accepts UPI, PhonePe, GPay, Paytm, IMPS and net banking with instant credit." } },
        { "@type": "Question", "name": "How long do YOLO365 withdrawals take?", "acceptedAnswer": { "@type": "Answer", "text": "Most withdrawals are processed within 5 minutes directly to your Indian bank account, with no hidden fees." } },
        { "@type": "Question", "name": "Can I bet on IPL 2026 on YOLO365?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. YOLO365 covers every IPL 2026 match, international cricket (T20, ODI, Test), domestic leagues and women's cricket — with the sharpest odds in India." } },
        { "@type": "Question", "name": "Does YOLO365 have live casino games?", "acceptedAnswer": { "@type": "Answer", "text": "YOLO365 offers live Teen Patti, Andar Bahar, Roulette, Dragon Tiger, Blackjack, Baccarat and 1,000+ slot games with real dealers from Evolution, Ezugi and Pragmatic Play." } }
      ]
    }
    </script>`;
  } else if (route.path.includes('games')) {
    // Game page schema
    const gameName = getPageName(route.path);
    pageSchema = `
    <!-- Game Page Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "${route.canonical}#webpage",
      "url": "${route.canonical}",
      "name": "${route.title}",
      "description": "${route.description}",
      "inLanguage": "en-IN",
      "isPartOf": { "@id": "${SITE}/#website" },
      "about": { "@id": "${SITE}/#organization" }
    }
    </script>`;
  }

  // Replace breadcrumb schema and add page-specific schema
  routeHtml = routeHtml.replace(
    /<!-- Breadcrumb -->/,
    `${pageSchema}

    <!-- Breadcrumb -->`
  );

  routeHtml = routeHtml.replace(
    /<!-- Breadcrumb -->[\s\S]*?<\/script>/,
    `<!-- Breadcrumb -->
    <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>`
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

// Helper function to get page name from path
function getPageName(path) {
  if (path === '/') return 'Home';
  if (path === '/about') return 'About';
  if (path === '/contact') return 'Contact';
  if (path === '/blog') return 'Blog';
  if (path.includes('cricket-betting')) return 'Cricket Betting';
  if (path.includes('teen-patti')) return 'Teen Patti';
  if (path.includes('aviator')) return 'Aviator';
  if (path.includes('andar-bahar')) return 'Andar Bahar';
  return 'Page';
}

// Process all routes
console.log('🚀 Generating static HTML files with complete SEO metadata...\n');

routes.forEach(route => {
  createRouteHTML(route);
});

console.log('\n✨ All static HTML files generated successfully!');
console.log('📁 Files are in the dist/ directory');
console.log('🔍 Each file now has matching canonical, og:url, hreflang, and breadcrumb schema');