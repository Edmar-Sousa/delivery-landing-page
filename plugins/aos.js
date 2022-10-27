import AOS from "aos";

export default defineNuxtPlugin((NuxtApp) => {
    NuxtApp.AOS = new AOS.init({ 

    });
})
