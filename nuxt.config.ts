// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    head: {
        htmlAttrs: {
            lang: "pt-br"
        },

        meta : [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" },
        ],
    },

    css: [
        "@/static/reset.css",
        "aos/dist/aos.css",
    ],

    plugins: [
        { src: "~/plugins/aos", mode: 'client' },
    ]
})
