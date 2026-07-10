globalThis.process ??= {}; globalThis.process.env ??= {};
import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_B963UJrR.mjs';
import { manifest } from './manifest_CZmnLgCM.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/404.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page3 = () => import('./pages/category/_slug_.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/disclaimer.astro.mjs');
const _page6 = () => import('./pages/en/sim-lab/charging-cost.astro.mjs');
const _page7 = () => import('./pages/en/sim-lab/solar-battery-sizer.astro.mjs');
const _page8 = () => import('./pages/en/sim-lab.astro.mjs');
const _page9 = () => import('./pages/faq.astro.mjs');
const _page10 = () => import('./pages/privacy.astro.mjs');
const _page11 = () => import('./pages/rss.xml.astro.mjs');
const _page12 = () => import('./pages/search.json.astro.mjs');
const _page13 = () => import('./pages/terms.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const _page15 = () => import('./pages/_---slug_.astro.mjs');
const pageMap = new Map([
    ["src/pages/404.astro", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/blog/[...slug].astro", _page2],
    ["src/pages/category/[slug].astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/disclaimer.astro", _page5],
    ["src/pages/en/sim-lab/charging-cost.astro", _page6],
    ["src/pages/en/sim-lab/solar-battery-sizer.astro", _page7],
    ["src/pages/en/sim-lab/index.astro", _page8],
    ["src/pages/faq.astro", _page9],
    ["src/pages/privacy.astro", _page10],
    ["src/pages/rss.xml.js", _page11],
    ["src/pages/search.json.js", _page12],
    ["src/pages/terms.astro", _page13],
    ["src/pages/index.astro", _page14],
    ["src/pages/[...slug].astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
