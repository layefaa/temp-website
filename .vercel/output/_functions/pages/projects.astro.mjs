/* empty css                                  */
import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_D_sz6CSQ.mjs';
import { $ as $$BasicLayout } from '../chunks/BasicLayout_DTkun9OU.mjs';
export { renderers } from '../renderers.mjs';

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BasicLayout", $$BasicLayout, { "title": "Martin Luther Obahor - Projects", "description": "", "page": "projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/" class="text-white absolute bg-neutral-900 hover:bg-neutral-800 top-4 left-4 px-4 py-2 border-1 border-solid border-neutral-600 rounded-lg">Back</a> <main class="text-white m-auto p-2 grid gap-2 max-w-6xl overflow-hidden relative w-full sm:p-4 sm:gap-2 md:grid-cols-2 md:gap-3 md:p-6 lg:h-screen lg:grid-rows-8 lg:grid-cols-4 lg:gap-4 lg:max-h-[800px]"> <div${addAttribute(`card group overflow-hidden transform-y-[-40%] bg-darkslate-500 shadow-lg rounded-lg p- border border-darkslate-100 hover:border-primary-500 align-start flex-none justify-start relative transform perspective-1200 w-full transition duration-75 ease-in-out col-span-1 h-auto md:col-span-2 md:row-span-4`, "class")}> <div class="flex w-full h-full"> <div class="flex flex-col justify-between w-full
                 md:max-h-[300px] gap-4"> <div class="bg-red w-full p-4"></div> </div> </div> </div> </main> ` })}`;
}, "/Users/layefa/Projects/My Websites/temp-website/src/pages/projects.astro", void 0);

const $$file = "/Users/layefa/Projects/My Websites/temp-website/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Projects,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
