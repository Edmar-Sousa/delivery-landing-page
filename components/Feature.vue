<template>
    <section class="section-feature" id="feature">
        <div 
            class="text-align"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000">
                <p class="title-small">feature</p>
                <h2 class="title-feature">Confira o que nossa plataforma tem a oferecer</h2>
        </div>

        <div 
            class="card-container">
                <CardComponent 
                    title="Entrega" 
                    description="Nossa plaforma ofere entrega com eficiência e segurança!"
                    aos="fade-up"
                    delay="300"
                    duration="1000">
                        <img src="../assets/caixa-de-papelao.png" />
                </CardComponent>

                <CardComponent 
                    title="Delivery" 
                    description="Nossos entregadores são rapidos e eficiente"
                    aos="fade-up"
                    delay="600"
                    duration="1000">
                        <img src="../assets/delivery.png" />
                </CardComponent>

                <CardComponent 
                    title="Pagamentos" 
                    description="Pagamentos na plataforma com cashback!"
                    aos="fade-up"
                    delay="900"
                    duration="1000">
                        <img src="../assets/credit-card.png" />
                </CardComponent>
        </div>
    </section>
</template>

<script lang="ts" setup>

import CardComponent from "@/components/Card.vue";

</script>

<style scoped>

.section-feature {
    max-width: 1100px;
    margin: auto;
    padding: 50px 20px;
}

.card-container {
    width: 100%;
    margin-top: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.title-feature {
    font-size: 1.8rem;
    margin-top: 20px;
}

.text-align {
    text-align: center;
}

@media (min-width: 600px) {
    .card-container {
        flex-direction: row;
    }
}
</style>