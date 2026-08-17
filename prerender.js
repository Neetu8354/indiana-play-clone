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
    description: "YOLO365 is India's most trusted online cricket betting exchange. Get your IPL betting ID on WhatsApp in 60 seconds with instant INR deposits and 5-minute withdrawals. 24/7 support.",
    faqs: [
      { q: "How do I get a YOLO365 betting ID?", a: "Click any 'Get ID' button on yolo365books.live. It opens WhatsApp where our team shares your ID and password within 60 seconds." },
      { q: "Is YOLO365 safe and legal in India?", a: "YOLO365 operates under international gaming licenses, uses bank-grade SSL encryption, and is trusted by 1 million+ Indian players. Users should verify the legal status of online betting in their specific jurisdiction before participating." },
      { q: "What is the minimum deposit on YOLO365?", a: "You can start with as little as ₹100. YOLO365 accepts UPI, PhonePe, GPay, Paytm, IMPS and net banking with instant credit." },
      { q: "How long do YOLO365 withdrawals take?", a: "Most withdrawals are processed within 5 minutes directly to your Indian bank account, with no hidden fees." },
      { q: "Can I bet on IPL 2026 on YOLO365?", a: "Yes. YOLO365 covers every IPL 2026 match, international cricket (T20, ODI, Test), domestic leagues and women's cricket — with the sharpest odds in India." },
      { q: "Does YOLO365 have live casino games?", a: "YOLO365 offers live Teen Patti, Andar Bahar, Roulette, Dragon Tiger, Blackjack, Baccarat and 1,000+ slot games with real dealers from Evolution, Ezugi and Pragmatic Play." }
    ],
    noscriptH1: "YOLO365 — India's #1 Online Cricket Betting ID & Live Casino",
    noscriptP: "YOLO365 is India's trusted online cricket betting exchange. Get your IPL betting ID on WhatsApp in 60 seconds. Bet on IPL 2026, T20, ODI, Test cricket, kabaddi, tennis and live casino with instant INR deposits."
  },
  { 
    path: '/about', 
    canonical: `${SITE}/about`,
    title: "About YOLO365 — India's Trusted Cricket Betting ID & Live Casino Site",
    description: "Learn about YOLO365 — India's most trusted online cricket betting exchange since 2021. 5 lakh+ users, instant UPI deposits, 5-minute withdrawals, licensed & regulated.",
    faqs: [
      { q: "When was YOLO365 founded?", a: "YOLO365 was founded in 2020 and has grown to serve over 5 lakh+ active users across India." },
      { q: "Is YOLO365 licensed and regulated?", a: "Yes. YOLO365 operates under international gaming licenses with full KYC compliance and bank-grade SSL security." },
      { q: "How many users does YOLO365 have?", a: "YOLO365 has over 5 lakh+ active users and is one of India's fastest-growing cricket betting communities." },
      { q: "What payment methods does YOLO365 accept?", a: "YOLO365 accepts UPI, PhonePe, GPay, Paytm, IMPS, and net banking with instant credit and 5-minute withdrawals." }
    ],
    noscriptH1: "About YOLO365 — India's Trusted Cricket Betting ID & Live Casino Site",
    noscriptP: "Learn about YOLO365 — India's most trusted online cricket betting exchange since 2021. 5 lakh+ users, instant UPI deposits, 5-minute withdrawals, licensed & regulated."
  },
  { 
    path: '/contact', 
    canonical: `${SITE}/contact`,
    title: "Contact YOLO365 — 24×7 WhatsApp Support for Cricket Betting ID",
    description: "Contact YOLO365 customer support 24×7 on WhatsApp for cricket betting ID, deposit, withdrawal, or live casino help. Hindi & English support.",
    faqs: [
      { q: "How to contact YOLO365 support?", a: "Message us on WhatsApp at wa.link/reddyanna_ for instant 24×7 support in English and Hindi." },
      { q: "What is YOLO365 email support?", a: "You can email us at support@yolo365.live for non-urgent inquiries. WhatsApp is recommended for fastest response." },
      { q: "Is YOLO365 support available 24/7?", a: "Yes. YOLO365 customer support is available 24×7, 365 days a year via WhatsApp." },
      { q: "What languages does YOLO365 support?", a: "YOLO365 provides customer support in both English and Hindi for Indian users." }
    ],
    noscriptH1: "Contact YOLO365 — 24×7 WhatsApp Support for Cricket Betting ID",
    noscriptP: "Contact YOLO365 customer support 24×7 on WhatsApp for cricket betting ID, deposit, withdrawal, or live casino help. Hindi & English support."
  },
  { 
    path: '/blog', 
    canonical: `${SITE}/blog`,
    title: "YOLO365 Blog — IPL Betting Tips, Cricket Strategy & Live Casino Guides 2026",
    description: "Expert IPL 2026 betting tips, cricket strategy, Teen Patti & live casino guides from YOLO365 — India's #1 cricket betting exchange. New articles every week.",
    faqs: [
      { q: "What topics does YOLO365 blog cover?", a: "Our blog covers IPL betting tips, cricket strategy, Teen Patti guides, live casino strategies, and bankroll management." },
      { q: "How often is the YOLO365 blog updated?", a: "We publish new articles every week during cricket seasons and major tournaments like IPL and T20 World Cup." },
      { q: "Are the betting tips on YOLO365 blog free?", a: "Yes. All our IPL betting tips, cricket strategies, and casino guides are completely free for all users." },
      { q: "Can I request specific betting topics?", a: "Yes. Message us on WhatsApp with topic suggestions and we'll cover them in upcoming blog posts." }
    ],
    noscriptH1: "YOLO365 Blog — IPL Betting Tips, Cricket Strategy & Live Casino Guides 2026",
    noscriptP: "Expert IPL 2026 betting tips, cricket strategy, Teen Patti & live casino guides from YOLO365 — India's #1 cricket betting exchange. New articles every week."
  },
  { 
    path: '/games/cricket-betting', 
    canonical: `${SITE}/games/cricket-betting`,
    title: "Online Cricket Betting in India 2026 — IPL, T20 & Test | YOLO365",
    description: "Bet on live cricket matches at YOLO365 — IPL 2026, T20 World Cup, BBL, PSL with best odds, in-play markets, instant UPI deposit & 5-minute withdrawal.",
    faqs: [
      { q: "How to bet on IPL 2026 on YOLO365?", a: "Get your cricket betting ID on WhatsApp in 60 seconds, deposit via UPI, and access the Cricket section. YOLO365 covers all IPL 2026 matches with live in-play betting every ball." },
      { q: "What cricket betting markets are available?", a: "YOLO365 offers match-winner, top batsman, top bowler, session runs, over/under, and 50+ in-play markets for every cricket match including IPL, T20 World Cup, BBL, and PSL." },
      { q: "What is the minimum bet for cricket?", a: "Start with just ₹100. YOLO365 supports INR-native betting with UPI deposits and accepts both small stakes and high-roller wagers." },
      { q: "Are cricket odds better on YOLO365?", a: "Yes. YOLO365 exchange odds are typically 5-8% sharper than traditional bookmakers, giving you better value on every cricket bet." },
      { q: "Can I bet live during cricket matches?", a: "Absolutely. YOLO365 offers ball-by-ball live betting with real-time odds that update every delivery for T20, ODI, and Test matches." }
    ],
    noscriptH1: "Online Cricket Betting in India 2026 — IPL, T20 & Test | YOLO365",
    noscriptP: "Bet on live cricket matches at YOLO365 — IPL 2026, T20 World Cup, BBL, PSL with best odds, in-play markets, instant UPI deposit & 5-minute withdrawal."
  },
  { 
    path: '/games/teen-patti', 
    canonical: `${SITE}/games/teen-patti`,
    title: "Play Teen Patti Online Real Money India — Live Dealer | YOLO365",
    description: "Play Teen Patti online for real money at YOLO365 with live dealers, instant withdrawals, and ₹100 minimum bets. Best Teen Patti casino in India.",
    faqs: [
      { q: "How to play Teen Patti online for real money?", a: "Get your YOLO365 ID on WhatsApp, deposit via UPI, and join the Teen Patti tables. Start with ₹100 and play with live dealers from Evolution and Ezugi." },
      { q: "What Teen Patti variants are available?", a: "YOLO365 offers Classic Teen Patti, 3 Card Poker, Andar Bahar, and multiple live dealer variants with real Indian dealers 24/7." },
      { q: "Is Teen Patti online fair?", a: "Yes. YOLO365 uses licensed providers (Evolution, Ezugi) with certified RNG and live dealers. All games are audited for fairness." },
      { q: "What is the minimum bet for Teen Patti?", a: "Start with just ₹100 per hand. YOLO365 supports both small stakes and high-roller tables for Teen Patti." },
      { q: "Can I play Teen Patti on mobile?", a: "Yes. YOLO365 Teen Patti is fully optimized for mobile with smooth gameplay, live dealer video, and instant betting on any device." }
    ],
    noscriptH1: "Play Teen Patti Online Real Money India — Live Dealer | YOLO365",
    noscriptP: "Play Teen Patti online for real money at YOLO365 with live dealers, instant withdrawals, and ₹100 minimum bets. Best Teen Patti casino in India."
  },
  { 
    path: '/games/aviator', 
    canonical: `${SITE}/games/aviator`,
    title: "Play Aviator Game Online India — Real Money Crash Game | YOLO365",
    description: "Play Aviator crash game online for real money at YOLO365. Instant withdrawals, live statistics, and ₹100 minimum bets. Best Aviator casino in India.",
    faqs: [
      { q: "How to play Aviator crash game?", a: "Get your YOLO365 ID, deposit via UPI, and place bets before the plane takes off. Cash out before it flies away to win. Start with just ₹100." },
      { q: "What is the Aviator game strategy?", a: "Popular strategies include betting small amounts consistently, cashing out early (1.5x-2x), and setting auto-cashout limits. Never chase losses." },
      { q: "Is Aviator game fair?", a: "Yes. YOLO365 Aviator uses provably fair technology with live statistics showing all crash multipliers and player bets in real-time." },
      { q: "What is the minimum bet for Aviator?", a: "Start with just ₹10 per round. YOLO365 supports both conservative and aggressive betting strategies for Aviator." },
      { q: "Can I play Aviator on mobile?", a: "Yes. YOLO365 Aviator is fully mobile-optimized with smooth gameplay, live statistics, and instant betting on any device." }
    ],
    noscriptH1: "Play Aviator Game Online India — Real Money Crash Game | YOLO365",
    noscriptP: "Play Aviator crash game online for real money at YOLO365. Instant withdrawals, live statistics, and ₹100 minimum bets. Best Aviator casino in India."
  },
  { 
    path: '/games/andar-bahar', 
    canonical: `${SITE}/games/andar-bahar`,
    title: "Play Andar Bahar Online Real Money India — Live Dealer | YOLO365",
    description: "Play Andar Bahar online for real money at YOLO365 with live dealers, instant withdrawals, and ₹100 minimum bets. Best Andar Bahar casino in India.",
    faqs: [
      { q: "How to play Andar Bahar online?", a: "Get your YOLO365 ID on WhatsApp, deposit via UPI, and join the Andar Bahar tables. Bet on Andar or Bahar and watch the live dealer draw cards." },
      { q: "What Andar Bahar variants are available?", a: "YOLO365 offers Classic Andar Bahar, Speed Andar Bahar, and multiple live dealer variants with real Indian dealers and side bets." },
      { q: "Is Andar Bahar online fair?", a: "Yes. YOLO365 uses licensed providers (Evolution, Ezugi) with live dealers and transparent card drawing. All games are audited for fairness." },
      { q: "What is the minimum bet for Andar Bahar?", a: "Start with just ₹100 per round. YOLO365 supports both small stakes and high-roller tables for Andar Bahar." },
      { q: "Can I play Andar Bahar on mobile?", a: "Yes. YOLO365 Andar Bahar is fully mobile-optimized with live dealer video, smooth betting, and instant gameplay on any device." }
    ],
    noscriptH1: "Play Andar Bahar Online Real Money India — Live Dealer | YOLO365",
    noscriptP: "Play Andar Bahar online for real money at YOLO365 with live dealers, instant withdrawals, and ₹100 minimum bets. Best Andar Bahar casino in India."
  },
];

// Read the Vite-built index.html from dist
// This ensures the correct asset references (e.g., /assets/index-xxx.js) are preserved
const mainIndexPath = path.join(__dirname, 'dist', 'index.html');
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

  // Replace meta description (handle HTML entities - more robust pattern)
  routeHtml = routeHtml.replace(
    /<meta name="description" content="YOLO365 is India&#39;s most trusted online cricket betting exchange. Get your IPL betting ID on WhatsApp in 60 seconds with instant INR deposits and 5-minute withdrawals. 24\/7 support.">/,
    `<meta name="description" content="${route.description.replace(/'/g, '&#39;').replace(/"/g, '&quot;')}">`
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

  // Replace noscript H1
  routeHtml = routeHtml.replace(
    /<noscript>[\s\S]*?<\/noscript>/,
    `<noscript>
      <h1>${route.noscriptH1}</h1>
      <p>${route.noscriptP}</p>
      <p>Visit <a href="${route.canonical}">${route.canonical}</a> or message us on <a href="https://wa.link/yolo365">WhatsApp</a>.</p>
    </noscript>`
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
  
  // Add Organization and WebSite schema to all pages for @id references
  const globalSchema = `
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
    </script>`;

  if (route.path === '/') {
    // Homepage specific schema
    pageSchema = `${globalSchema}

    <!-- FAQ Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        ${route.faqs.map(faq => JSON.stringify({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": { "@type": "Answer", "text": faq.a }
        })).join(',\n        ')}
      ]
    }
    </script>`;
  } else if (route.path.includes('games')) {
    // Game page schema with page-specific FAQ
    const faqSchema = route.faqs ? `
    <!-- Game Page FAQ Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        ${route.faqs.map(faq => `{
          "@type": "Question",
          "name": "${faq.q}",
          "acceptedAnswer": { "@type": "Answer", "text": "${faq.a}" }
        }`).join(',\n        ')}
      ]
    }
    </script>` : '';

    const gameName = getPageName(route.path);
    pageSchema = `${globalSchema}

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
    </script>${faqSchema}`;
  } else {
    // Other pages (about, contact, blog) with optional FAQ
    const faqSchema = route.faqs ? `
    <!-- Page FAQ Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        ${route.faqs.map(faq => `{
          "@type": "Question",
          "name": "${faq.q}",
          "acceptedAnswer": { "@type": "Answer", "text": "${faq.a}" }
        }`).join(',\n        ')}
      ]
    }
    </script>` : '';

    pageSchema = `${globalSchema}

    <!-- Page Schema -->
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
    </script>${faqSchema}`;
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