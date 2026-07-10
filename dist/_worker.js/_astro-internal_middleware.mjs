globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_3xwTcgAE.mjs';
import './chunks/astro/server_B2aSax0L.mjs';
import { s as sequence } from './chunks/render-context_B5k7TPuO.mjs';

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
