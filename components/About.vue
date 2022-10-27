<template>
    <section class="setion-about-us" id="about">
        <div 
            class="image-temperos"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000">
                <img class="image-temperos" src="../assets/temperos.png" alt="imagem de temperos" />
        </div>

        <div 
            class="text-container"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000">
                <p class="title-small">Sobre</p>
                <h2 class="title-about-us">
                    Conheça aqui um pouco <br />
                    sobre nossos serviços
                </h2>

                <p class="legend custom-color">
                    Food é um serviço online de delivery de comida.
                    Conectamos restaurantes e lanchonete com clientes famitos!
                    Faça login para vender e exibir seu cardapio ou faça seu pedido
                    e receba na sua casa, de forma segura e rapida.
                </p>

                <button class="button">Ler mais</button>
        </div>
    </section>
</template>

<script lang="ts" setup>



</script>

<style scoped>

.setion-about-us {
    max-width: 1100px;
    width: 100%;

    padding: 50px 20px;
    margin: auto;
}

.title-about-us {
    font-size: 1.8rem;
}

.image-temperos {
    max-width: 570px;
    width: 100%;
}

.custom-color {
    color: var(--gray-color);
}

@media (min-width: 600px) {
    .setion-about-us {
        display: flex;
    }
}

</style>