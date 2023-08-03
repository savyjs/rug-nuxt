
export default defineNuxtConfig({
    // This is the list of available modules
    extends: [
        "../digimarket-nuxt-layer"
    ],
    strapi: {
        url: 'http://localhost:1337'
    }
})
