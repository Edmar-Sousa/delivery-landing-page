<template>
    <header class="header">
        <nav class="navigation">
            <div>
                <img class="logo" src="../assets/logo.png" alt="logo" />
            </div>

            <ul>
                <li class="nav-item"><a href="#">Home</a></li>
                <li class="nav-item"><a href="#about">Sobre</a></li>
                <li class="nav-item"><a href="#feature">Servicos</a></li>
                <li class="nav-item"><a href="#download">Download</a></li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">



</script>

<style scoped>

.header {
    width: 100%;
    height: 70px;

    background: var(--primary-color);
}


.logo {
    width: 90px;
}

.navigation {
    width: 100%;
    max-width: 1100px;
    
    height: 100%;
    margin: auto;
    padding: 0 10px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
}

.nav-item {
    display: inline;
    height: 30px;
    margin: 0 5px;

    font-size: 1.4rem;
}

.nav-item a {
    color: var(--white-color);
    text-decoration: none;
}

@media (min-width: 425px) {
    .navigation {
        flex-direction: row;
        justify-content: space-between;
    }
}

</style>