<template>
    <div class="banner">
        <div class="title-container">
            <div class="text-container">
                <p 
                    class="title-small" 
                    data-aos="fade-right"
                    data-aos-duration="1000">
                        Food delivery ___
                </p>

                <h1 
                    class="title" 
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-duration="1000">
                        Food seu app de delivery <br />
                        seguro e eficiente
                </h1>

                <p 
                    class="legend" 
                    data-aos="fade-right"
                    data-aos-delay="200"
                    data-aos-duration="1000">
                        Faça seu pedido de qualquer lugar e receba em sua casa em poucos minutos 
                </p>

                <button 
                    class="button" 
                    data-aos="fade-right"
                    data-aos-delay="300"
                    data-aos-duration="1000">
                        Pedir agora
                </button>
            </div>

            <div 
                class="img-container"
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-duration="1000">
                    <img class="image" src="../assets/Prato.png" alt="prato com frutas e verduras" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>


</script>

<style scoped>

.banner {
    width: 100%;
    height: 500px;

    background: url("../assets/banner.png");
    background-size: cover;
}

.title-container {
    width: 100%;
    max-width: 1100px;
    margin: auto;

    height: 100%;

    display: flex;
    align-items: center;
    gap: 10px;
}

.banner div {
    flex: 1;
}

.img-container {
    display: none;
    align-items: center;
}

.image {
    max-width: 500px;
    width: 100%;
}

.title {
    font-size: 2rem;
}

@media (min-width: 600px) {
    .img-container {
        display: flex;
    }
}

</style>