import { _ as __nuxt_component_0$2 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './Services-CqlTLhpy.mjs';
import { _ as __nuxt_component_0$1 } from './ProjectsSection-CwYsgZrO.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-4 text-[14px] flex-col justify-center items-center w-[60%] mx-auto min-h-screen pb-15" }, _attrs))}><h1 class="text-[48px] font-bold dark:text-darkText text-text">Hi, I am Moiz Ur Rehman</h1><h3 class="text-[24px] font-bold text-darkCyan">Front - End Developer</h3><p class="text-[20px] font-bold">Creating beautiful and functional web experiences with modern technologies. Passionate about clean code,user experience,and bringing ides to life through innovative solutions.</p><div class="flex gap-4 text-[14px] font-bold">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/projects",
    class: "px-[25px] py-[15px] rounded-full bg-darkCyan text-white font-display"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` View Projects `);
      } else {
        return [
          createTextVNode(" View Projects ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contacts",
    class: "px-[25px] py-[15px] rounded-full border-[1px] border-darkCyan text-darkCyan font-display"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Contact Me `);
      } else {
        return [
          createTextVNode(" Contact Me ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]), { __name: "HeroSection" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HeroSection = __nuxt_component_0;
  const _component_AboutSection = __nuxt_component_1;
  const _component_Services = __nuxt_component_2;
  const _component_ProjectsSection = __nuxt_component_0$1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
  _push(`<div class="border-b-[5px] dark:border-b-white border-b-darkBackground"></div>`);
  _push(ssrRenderComponent(_component_AboutSection, null, null, _parent));
  _push(`<div class="border-b-[5px] dark:border-b-white border-b-darkBackground"></div>`);
  _push(ssrRenderComponent(_component_Services, null, null, _parent));
  _push(`<div class="border-b-[5px] dark:border-b-white border-b-darkBackground"></div>`);
  _push(ssrRenderComponent(_component_ProjectsSection, null, null, _parent));
  _push(`<div class="border-b-[5px] dark:border-b-white border-b-darkBackground"></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-JImyFZxP.mjs.map
