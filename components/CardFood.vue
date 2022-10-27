<template>
    <div 
        class="card-food"
        v-bind:data-aos="aos"
        v-bind:data-aos-delay="delay"
        v-bind:data-aos-duration="duration">
            <div class="image-container">
                <slot></slot>

                <div class="price">
                    <p>R$ {{ price }}</p>
                </div>
            </div>

            <div class="text-container">
                <h4 class="title">{{ title }}</h4>
                <p class="description">{{ description }}</p>
            </div>

            <button class="button outline">
                Comprar
            </button>
    </div>
</template>

<script lang="ts" setup>

defineProps(["title", "price", "description", "aos", "delay", "duration"]);

</script>

<style scoped>

.card-food {
    min-height: 300px;
    max-width: 300px;
    width: 100%;
    position: relative;

    margin-top: 80px;
    border-radius: 5px;
    border: 1px solid var(--primary-color);
}

.image-container {
    max-width: 200px;
    width: 100%;
    position: relative;
    top: -40px;

    margin: auto;
}

.price {
    width: 50px;
    height: 50px;

    position: absolute;
    bottom: 0;
    right: 10px;
    border-radius: 25px;

    background: var(--orange-color);
}

.price p {
    font-size: 12px;
    text-align: center;
    line-height: 50px;
    font-weight: 600;
}

.text-container {
    text-align: center;
}

.title {
    font-size: 1.8rem;
}

.description {
    font-size: 1.6rem;
    color: var(--gray-color);
}

.outline {
    background: var(--white-color);
    border: 1px solid var(--orange-color);
    color: var(--orange-color);

    width: 150px;

    position: absolute;
    bottom: -15px;
    left: calc(50% - 75px);
}

.outline:hover {
    background: var(--orange-color);
    color: var(--white-color);
}

</style>