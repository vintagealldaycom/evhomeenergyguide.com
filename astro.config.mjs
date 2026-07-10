import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

// TODO: confirm the production domain before launch (see README questions)
export default defineConfig({
  site: 'https://evhomeenergyguide.com',
  output: 'static',
  trailingSlash: 'ignore',

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you'),
    }),
  ],

  build: {
    inlineStylesheets: 'auto',
  },

  adapter: cloudflare()
});