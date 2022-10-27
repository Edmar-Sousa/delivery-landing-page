<template>
    <section class="download-section" id="download">
        <div 
            class="text-container"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000">
                <p class="title-small">download</p>
                <h3 class="title-download">Disponivel na sua loja de aplicativos!</h3>
                <p class="description">
                    Pedidos na palma da sua mão! Faça pedidos de seus pratos ou lanches
                    favoritos de forma rapida e segura atraves de seu smatphone! <br />
                    Baixe nosso aplicativo e faça pedidos de onde você quiser!
                </p>

                <a href="#">
                    <img class="download-button" src="../assets/play-store-download.png" alt="download on play store" />
                </a>
        </div>
    </section>
</template>

<script lang="ts" setup>



</script>

<style scoped>

.download-section {
    margin: auto;
    max-width: 1100px;
    width: 100%;
    padding: 50px 20px;
}

.download-button {
    width: 120px;
}

.text-container {
    max-width: 500px;
    width: 100%;
}

.title-download {
    margin-top: 20px;
    font-size: 2rem;
}

.description {
    margin-top: 20px;
    font-size: 1.6rem;
    color: var(--gray-color);
}

</style>