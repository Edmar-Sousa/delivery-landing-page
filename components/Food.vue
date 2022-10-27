<template>
    <section class="food-section">
        <div 
            class="text-container"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000">
                <p class="title-small">Produtos</p>
                <h2 class="title">Tenha um gostinho dos principais <br /> produtos da plataforma</h2>
        </div>

        <div class="cards-container">
            <CardFood
                title="Pizza de frango com catupiry"
                description="Pizza de frango com catupiry e borda recheada"
                price="9.90"
                aos="fade-up"
                delay="300"
                duration="1000">
                    <img src="../assets/pizza.png" class="image-produto" alt="pizza" />
            </CardFood>

            <CardFood
                title="Salada de alface com tomate"
                description="Salada de alface com tomante e champignon"
                price="9.90"
                aos="fade-up"
                delay="600"
                duration="1000">
                    <img src="../assets/salada.png" class="image-produto" alt="pizza" />
            </CardFood>

            <CardFood
                title="Pizza de calabresa"
                description="Pizza de calabresa com mussarela e azeitona"
                price="9.90"
                aos="fade-up"
                delay="900"
                duration="1000">
                    <img src="../assets/pizza.png" class="image-produto" alt="pizza" />
            </CardFood>
        </div>
    </section>
</template>

<script lang="ts" setup>

import CardFood from "./CardFood.vue";

</script>

<style scoped>

.food-section {
    margin: auto;
    max-width: 1100px;
    width: 100%;
    padding: 50px 20px;
}

.cards-container {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.text-container {
    text-align: center;
}

.title {
    font-size: 2rem;
}

.image-produto {
    width: 100%;
}

@media (min-width: 600px) {
    .cards-container {
        flex-direction: row;
    }
}

</style>