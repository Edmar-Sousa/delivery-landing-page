<template>
    <div 
        class="card"
        v-bind:data-aos="aos"
        v-bind:data-aos-delay="delay"
        v-bind:data-aos-duration="duration">
            <div>
                <slot></slot>
            </div>

            <h3 class="title-card">{{ title }}</h3>
            <p class="description">{{ description }}</p>
    </div>
</template>

<script lang="ts" setup>

const props = defineProps(["title", "description", "src", "duration", "delay", "aos"]);

</script>

<style scoped>

.card {
    max-width: 250px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.title-card {
    margin-top: 10px;
    font-size: 1.6rem;
}

.description {
    margin-top: 10px;
    text-align: center;
    font-size: 1.6rem;
    color: var(--gray-color);
}
</style>