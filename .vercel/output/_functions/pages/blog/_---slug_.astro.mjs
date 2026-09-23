/* empty css                                     */
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_D_sz6CSQ.mjs';
import { g as getCollection } from '../../chunks/_astro_content_dGP9Kvz5.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://gianmarco.xyz/");
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  if (slug === void 0) {
    throw new Error("slug is missing");
  }
  const posts = (await getCollection("blog")).sort(
    (blogEntryA, blogEntryB) => blogEntryB.data.pubDate.getTime() - blogEntryA.data.pubDate.getTime()
  );
  const entry = posts.find((entry2) => entry2.slug === slug);
  if (entry === void 0) {
    return Astro2.redirect("/404");
  }
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Content", Content, {})}`;
}, "/Users/layefa/Projects/My Websites/temp-website/src/pages/blog/[...slug].astro", void 0);

const $$file = "/Users/layefa/Projects/My Websites/temp-website/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
