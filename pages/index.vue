<template>
    <div class="app">
        <HeaderComponent />
        <BannerComponent />
        <AboutUsComponent />
        <FeatureComponent />
        <DownloadComponent />
        <FoodsComponent />
        <FooterComponent />
    </div>
</template>

<script lang="ts" setup>

import HeaderComponent from "@/components/Header.vue";
import BannerComponent from "@/components/Banner.vue";
import AboutUsComponent from "@/components/About.vue";
import FeatureComponent from "@/components/Feature.vue";
import DownloadComponent from "@/components/Download.vue";
import FoodsComponent from "@/components/Food.vue";
import FooterComponent from "@/components/Footer.vue";

</script>

<style>

.app {
    width: 100vw;
    height: 100vh;
}

</style>