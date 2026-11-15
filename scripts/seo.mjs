import {readFile,writeFile,mkdir,rm} from 'node:fs/promises';
const origin=process.env.VITE_SITE_URL?.replace(/\/$/,'');
if(origin){const url=new URL(origin);if(url.protocol!=='https:'||url.search||url.hash||url.username||url.password)throw new Error('VITE_SITE_URL must be an HTTPS site URL without credentials, query or fragment.');}
const routes={'/':'Car Detailing Sonoma CA','/about':'About Us','/services':'Our Services','/pricing':'Pricing & Packages','/gallery':'Automotive Gallery','/contact':'Contact Us','/book':'Request an Appointment','/privacy':'Privacy Policy','/services/exterior-detailing':'Exterior Detailing','/services/interior-detailing':'Interior Detailing','/services/full-vehicle-detailing':'Full Vehicle Detailing','/services/paint-correction':'Paint Correction','/services/ceramic-coating':'Ceramic Coating','/services/engine-bay-detailing':'Engine Bay Detailing'};
const heroImages={'/':'hero','/about':'interior','/services':'mercedes','/pricing':'porsche','/gallery':'detail','/contact':'mercedes','/book':'hero','/privacy':'road','/services/exterior-detailing':'mercedes','/services/interior-detailing':'interior','/services/full-vehicle-detailing':'hero','/services/paint-correction':'polishing','/services/ceramic-coating':'porsche','/services/engine-bay-detailing':'road'};
const base=process.env.VITE_BASE_PATH || '/';
const template=await readFile('dist/index.html','utf8');
const esc=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
for(const [route,name] of Object.entries(routes)){
 const title=`${name} | Cali Vehicle Detailing`;
 const description=`${name} in Sonoma, California. Contact Cali Vehicle Detailing at +1 (707) 309-8836 to discuss your vehicle.`;
 const schema={'@context':'https://schema.org','@type':'AutomotiveBusiness',name:'Cali Vehicle Detailing',telephone:'+17073098836',address:{'@type':'PostalAddress',streetAddress:'13 Rancho Dr',addressLocality:'Sonoma',addressRegion:'CA',postalCode:'95476',addressCountry:'US'},...(origin?{url:origin}:{})};
 const hero=heroImages[route];
 const preload=`<link rel="preload" as="image" href="${base}images/${hero}-1600.webp" imagesrcset="${[640,960,1600].map(w=>`${base}images/${hero}-${w}.webp ${w}w`).join(', ')}" imagesizes="100vw" fetchpriority="high"/>`;
 const meta=`${preload}<meta property="og:title" content="${esc(title)}"/><meta property="og:description" content="${esc(description)}"/><meta property="og:type" content="website"/>${origin?`<link rel="canonical" href="${origin}${route}"/><meta property="og:url" content="${origin}${route}"/><meta property="og:image" content="${origin}/images/hero.jpg"/>`:''}<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
 let html=template.replace(/<title>.*?<\/title>/,`<title>${esc(title)}</title>`).replace(/<meta name="description"[^>]*>/,`<meta name="description" content="${esc(description)}"/>`).replace('</head>',meta+'</head>');
 const dir=route==='/'?'dist':`dist${route}`;await mkdir(dir,{recursive:true});await writeFile(`${dir}/index.html`,html);
}
await writeFile('dist/robots.txt',origin?`User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`:'User-agent: *\nDisallow: /\n');
if(origin)await writeFile('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${Object.keys(routes).map(r=>`<url><loc>${origin}${r}</loc></url>`).join('')}</urlset>`);
else { await rm('dist/sitemap.xml',{force:true}); console.log('SEO: Set VITE_SITE_URL for production canonical URLs and sitemap. Preview indexing is disabled.'); }
console.log(`Prepared ${Object.keys(routes).length} direct-refresh route documents.`);
await writeFile('dist/404.html', await readFile('dist/index.html','utf8'));
await writeFile('dist/.nojekyll','');
