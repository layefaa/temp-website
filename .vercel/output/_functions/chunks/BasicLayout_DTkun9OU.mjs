import { c as createAstro, a as createComponent, e as addAttribute, f as renderHead, d as renderSlot, b as renderTemplate } from './astro/server_D_sz6CSQ.mjs';
/* empty css                                                                   */

const $$Astro = createAstro("https://gianmarco.xyz/");
const $$BasicLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BasicLayout;
  const { title, description, page } = Astro2.props;
  const image = `${Astro2.url.origin}/me.webp`;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/x-icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta name="robots" content="/favicon/sitemap-index.xml"><!-- Basic OG tags for sharing your website's content on platforms like Facebook and LinkedIn --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url.origin, "content")}><meta property="og:image"${addAttribute(image, "content")}><!-- Basic Twitter Card tags --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(image, "content")}><link rel="preconnect" href="https://cdn.fontshare.com">${renderHead()}</head> <body class="bg-darkslate-700 md:h-screen flex flex-col justify-center items-center"> ${renderSlot($$result, $$slots["loader"])} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/layefa/Projects/My Websites/temp-website/src/layouts/BasicLayout.astro", void 0);

export { $$BasicLayout as $ };
