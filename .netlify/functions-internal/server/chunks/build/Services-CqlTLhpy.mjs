import { defineComponent, mergeProps, reactive, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { a as __nuxt_component_0$1 } from './server.mjs';

const _imports_0 = publicAssetsURL("/about.jpeg");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-[50px]" }, _attrs))}><div class="grid grid-cols-2 gap-x-4 px-26 h-full dark:bg-dark-5 bg-darkMuted"><div class="p-[100px] relative"><div class="relative w-full h-full"><span class="dark:opacity-100 opacity-50 bg-[#203441] absolute w-[87px] aspect-square top-[-20px] right-[-80px] rounded-full"></span><span class="dark:opacity-100 opacity-50 bg-[#203441] absolute w-[118px] aspect-square bottom-[-15px] left-[-85px] rounded-full"></span><img class="relative w-full h-full rounded-3xl object-cover z-10"${ssrRenderAttr("src", _imports_0)} alt="About.img"></div></div><div class="flex flex-col justify-between py-[80px]"><div><h1 class="text-[32px] font-bold">About Me</h1><p class="text-[16px] my-[50px]">I’m Moiz ur Rehman, a JavaScript developer with expertise in front-end and full-stack development. From 3D visuals to sleek user interfaces and powerful web applications, I turn ideas into engaging digital experiences.</p><p class="text-[16px] my-[50px]">My journey in web began with a curiosity about how websites work, and it has evolved into a deep passion for crafting pixel-perfect interface that not only look great but also procide exceptional user experiences. I love the challenge of turning complex problems into simple, beautiful solutions</p><p class="text-[16px] my-[50px]">When I’m not coding ,you can find me exploring new technologies, contributing to open source projects, or sharing my knowledge through technical writing and mentoring fellow developers.</p></div><div class="flex gap-4"><div class="py-[18px] px-[11px] dark:bg-[#374151] text-white bg-darkButton rounded-xl"><p class="text-[22px] font-semibold text-darkCyan">25+</p><p>Completed Projects</p></div><div class="py-[18px] px-[11px] dark:bg-[#374151] text-white bg-darkButton rounded-xl"><p class="text-[22px] font-semibold text-darkCyan">20+</p><p>Happy Clients</p></div><div class="py-[18px] px-[11px] dark:bg-[#374151] text-white bg-darkButton rounded-xl"><p class="text-[22px] font-semibold text-darkCyan">5+</p><p>Year Experience</p></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "AboutSection" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    const devLanguages = reactive([
      {
        name: "JavaScript",
        text: "Dynamic web application",
        icon: "js.png"
      },
      {
        name: "HTML",
        text: "Semantic web structure",
        icon: "html.png"
      },
      {
        name: "CSS",
        text: "Modern web styling",
        icon: "css.png"
      },
      {
        name: "SCSS",
        text: "Enhanced CSS workflow",
        icon: "scss.png"
      },
      {
        name: "Sass",
        text: "CSS with superpower",
        icon: "sass.png"
      }
    ]);
    const backendLanguages = reactive([
      {
        name: "PHP",
        text: "Server- side development",
        icon: "php.png"
      },
      {
        name: "Python",
        text: "Versatile programmimg",
        icon: "python.png"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionTitle = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-[40px] px-26" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SectionTitle, {
        title: "Programming Languages & Technologies",
        subtitle: "Core Languages and technologies I use for full-stack development"
      }, null, _parent));
      _push(`<div class="grid grid-cols-3 grid-rows-2 gap-4"><div class="col-span-1 row-span-2 rounded-3xl dark:bg-dark-5 bg-darkMuted overflow-hidden"><div class="px-[22px] py-[25px] bg-darkCyan text-white"><h2>Frontend Development</h2><p>Creating Interactive and responsive user interfaces</p></div><div class="p-[35px] dark:bg-dark-5 bg-darkMuted flex flex-col gap-[30px]"><!--[-->`);
      ssrRenderList(devLanguages, (language) => {
        _push(`<div class="flex"><div class="dark:bg-[#374151] text-white bg-darkButton rounded-xl py-[10px] px-[10px]"><img class="w-[24] mt-1 aspect-square"${ssrRenderAttr("src", `/${language.icon}`)}${ssrRenderAttr("alt", language.icon)}></div><div class="flex-1 flex flex-col justify-between py-2 px-[12px]"><p class="text-[16px] font-semibold">${ssrInterpolate(language.name)}</p><p class="text-[12px] font-semibold">${ssrInterpolate(language.text)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="col-span-1 row-span-1 rounded-3xl dark:bg-dark-5 bg-darkMuted overflow-hidden"><div class="px-[22px] py-[25px] bg-darkCyan text-white"><h2>Backend Development</h2><p>Building robust server side applications and APIs </p></div><div class="p-[35px] flex flex-col gap-[30px]"><!--[-->`);
      ssrRenderList(backendLanguages, (language) => {
        _push(`<div class="flex"><div class="dark:bg-[#374151] text-white bg-darkButton rounded-xl py-[10px] px-[10px]"><img class="w-[24] mt-1 aspect-square"${ssrRenderAttr("src", `/${language.icon}`)}${ssrRenderAttr("alt", language.icon)}></div><div class="flex-1 flex flex-col justify-between py-2 px-[12px]"><p class="text-[16px] font-semibold">${ssrInterpolate(language.name)}</p><p class="text-[12px] font-semibold">${ssrInterpolate(language.text)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="col-span-1 row-span-1 rounded-3xl dark:bg-dark-5 bg-darkMuted overflow-hidden"><div class="px-[22px] py-[25px] bg-darkCyan text-white"><h2>Backend Development</h2><p>Building robust server side applications and APIs </p></div><div class="p-[35px] flex flex-col gap-[30px]"><!--[-->`);
      ssrRenderList(backendLanguages, (language) => {
        _push(`<div class="flex"><div class="dark:bg-[#374151] text-white bg-darkButton rounded-xl py-[10px] px-[10px]"><img class="w-[24] mt-1 aspect-square"${ssrRenderAttr("src", `/${language.icon}`)}${ssrRenderAttr("alt", language.icon)}></div><div class="flex-1 flex flex-col justify-between py-2 px-[12px]"><p class="text-[16px] font-semibold">${ssrInterpolate(language.name)}</p><p class="text-[12px] font-semibold">${ssrInterpolate(language.text)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="col-span-2 row-span-1 rounded-3xl dark:bg-dark-5 bg-darkMuted overflow-hidden px-[22px] py-[25px]"><div class="flex flex-col justify-between gap-[30px]"><div class="flex flex-col gap-[30px]"><h1 class="text-[22px] font-semibold">Development Philosophy</h1><p class="text-[12px] font-semibold">I believe in writing clean, maintainable code and staying current with industry best practices. <br>Always learning new technologies to deliver better solutions.</p></div><div class="flex gap-4"><div class="py-[8px] px-[13px] dark:bg-[#374151] text-white bg-darkButton rounded-full"><p class="text-[12px] font-medium">Clean Code</p></div><div class="py-[8px] px-[13px] dark:bg-[#374151] text-white bg-darkButton rounded-full"><p class="text-[12px] font-medium">Best Practices</p></div><div class="py-[8px] px-[13px] dark:bg-[#374151] text-white bg-darkButton rounded-full"><p class="text-[12px] font-medium">Continuous Learning</p></div><div class="py-[8px] px-[13px] dark:bg-[#374151] text-white bg-darkButton rounded-full"><p class="text-[12px] font-medium">Problem Solving</p></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main, { __name: "Services" });

export { __nuxt_component_1 as _, __nuxt_component_2 as a };
//# sourceMappingURL=Services-CqlTLhpy.mjs.map
