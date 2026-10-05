import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { render } from '../dist-ssr/entry-server.js';

const template = await readFile('dist/index.html', 'utf8');
const pages = [
  {
    path: '/',
    title: 'Frontline Crafted | Handcrafted Furniture in Parker County, TX',
    description:
      'Explore made-to-order dining tables, chairs, dressers, desks, and storage furniture. Veteran-owned custom furniture in Parker County, Texas.',
  },
  {
    path: '/weatherford-tx-custom-woodworking',
    title: 'Custom Furniture in Weatherford TX | Frontline Crafted',
    description:
      'Veteran-owned Frontline Crafted builds made-to-order dining tables, chairs, bedroom furniture, desks, and storage pieces for Weatherford and Parker County, TX.',
  },
];
for (const page of pages) {
  const url = `https://frontlinecrafted.com${page.path === '/' ? '/' : page.path}`;
  // React 19 emits document metadata during server rendering; the template owns it.
  const content = render(page.path)
    .replace(/<title[^>]*>[\s\S]*?<\/title>/g, '')
    .replace(/<meta\s[^>]*>/g, '')
    .replace(/<link\s[^>]*rel="canonical"[^>]*>/g, '');
  let html = template.replace('<div id="root"></div>', `<div id="root">${content}</div>`);
  html = html.replace(
    /<title[^>]*>[\s\S]*?<\/title>/,
    `<title data-rh="true">${page.title}</title>`,
  );
  html = html.replace(
    /(<meta(?:\s+data-rh="true")?\s+(?:name="(?:description|twitter:description)"|property="og:description")\s+content=")[^"]*("\s*\/?>)/g,
    `$1${page.description}$2`,
  );
  html = html.replace(
    /(<meta(?:\s+data-rh="true")?\s+(?:name="twitter:title"|property="og:title")\s+content=")[^"]*("\s*\/?>)/g,
    `$1${page.title}$2`,
  );
  html = html.replace(
    /(<link(?:\s+data-rh="true")?\s+rel="canonical"\s+href=")[^"]*("\s*\/?>)/,
    `$1${url}$2`,
  );
  html = html.replace(
    /(<meta(?:\s+data-rh="true")?\s+property="og:url"\s+content=")[^"]*("\s*\/?>)/,
    `$1${url}$2`,
  );
  const directory = page.path === '/' ? 'dist' : `dist${page.path}`;
  await mkdir(directory, { recursive: true });
  await writeFile(`${directory}/index.html`, html);
  console.log(`Prerendered ${page.path}`);
}
