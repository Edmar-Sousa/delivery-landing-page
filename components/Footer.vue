<template>
    <footer class="footer">
        <div class="flex">
            <div class="column">
                <div>
                    <img src="../assets/logo.png" alt="logo" class="logo" />
                </div>
                <p class="legend">Nossas redes sociais</p>

                <div class="social-networking">
                    <div>
                        <a href="#">
                            <img src="../assets/facebook.png" alt="facebook" />
                        </a>
                    </div>

                    <div>
                        <a href="#">
                            <img src="../assets/instagram.png" alt="instagram" />
                        </a>
                    </div>
                </div>
            </div>

            <div class="column">
                <p class="title">Categorias</p>

                <div>
                    <p class="link">Frutas</p>
                    <p class="link">Lanches</p>
                    <p class="link">Pratos típicos</p>
                    <p class="link">Outros</p>
                </div>
            </div>

            <div class="column">
                <p class="title">Perfeito para</p>

                <div>
                    <p class="link">Restaurantes</p>
                    <p class="link">Lanchonetes</p>
                    <p class="link">Padarias</p>
                    <p class="link">Outros</p>
                </div>
            </div>

            <div class="column">
                <p class="title">Entre em contato</p>

                <div>
                    <p class="link">(00) 00000-000</p>
                    <p class="link">nosso@email.com.br</p>
                    <p class="link">Rua tal cidade tal</p>
                    <p class="link">00000123456789</p>
                </div>
            </div>

            <div class="column">
                <div class="input-container">
                    <input type="text" name="email" class="input" placeholder="endereço de email" />
                    <button class="icon-button">
                        <img src="../assets/send.png" alt="send" />
                    </button>
                </div>
            </div>
        </div>

        <div class="created">
            <p>criado por &copy; edmar sousa</p>
        </div>
    </footer>
</template>

<script lang="ts" setup>



</script>

<style scoped>

.footer {
    padding: 50px 20px 10px;
    background: var(--primary-color);
}

.logo {
    width: 90px;
}

.icon-button {
    width: 30px;
    height: 30px;

    font-weight: bold;
    font-size: 1.2rem;

    border-radius: 5px;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--orange-color);
    color: var(--white-color);

    cursor: pointer;
}

.icon-button img {
    width: 20px;
}

.icon-button:hover {
    background: var(--orange-dark-color);
    transform: scale(0.98);
}

.flex {
    margin: auto;
    max-width: 1100px;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.legend {
    margin-top: 10px;
    font-size: 1.2rem;
}

.section {
    list-style: none;
}

.title {
    font-size: 1.8rem;
}

.link {
    margin-top: 5px;
    font-size: 1.6rem;
    color: var(--gray-color);
}

.input-container {
    max-width: 300px;
    width: 100%;

    margin-top: 10px;
    padding: 5px;
    border-radius: 5px;
    background: var(--white-color);

    display: flex;
}

.column {
    width: 100%;
    margin-top: 10px;
}

.input {
    flex: 1;
    height: 30px;
    border: none;
}

.created {
    max-width: 1100px;
    width: 100%;

    margin: 20px auto 0;
    border-top: 1px solid var(--gray-color);
    padding: 10px 0px;
}

.created p {
    text-align: center;
}

.social-networking {
    display: flex;
    gap: 5px;
    padding: 5px 0;
}

.social-networking img {
    width: 30px;
}

@media (min-width: 460px) {
    .flex {
        display: grid;
        grid-template-columns: 50% 50%;
    }
}

@media (min-width: 700px) {
    .flex {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
}

@media (min-width: 930px) {
    .flex {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
}

</style>