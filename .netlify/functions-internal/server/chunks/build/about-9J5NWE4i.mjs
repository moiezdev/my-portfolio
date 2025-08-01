import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './Services-CqlTLhpy.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import './server.mjs';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AboutSection = __nuxt_component_1;
  const _component_Services = __nuxt_component_2;
  _push(`<!--[--><div class="mt-[70px]"></div>`);
  _push(ssrRenderComponent(_component_AboutSection, null, null, _parent));
  _push(`<div class="border-b-[5px] dark:border-b-white border-b-darkBackground"></div>`);
  _push(ssrRenderComponent(_component_Services, null, null, _parent));
  _push(`<div class="border-b-[5px] dark:border-b-white border-b-darkBackground"></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { about as default };
//# sourceMappingURL=about-9J5NWE4i.mjs.map
