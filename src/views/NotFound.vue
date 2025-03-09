<template>
    <div class="background">
        <container>
            <main-page-link/>

            <div class="title">
                <h1>Страница не найдена. Кликните надпись выше, чтобы вернуться на главную</h1>
                <div class="line"></div>
            </div>

            <div class="links">
                
            </div>
        </container>
    </div>
</template>

<script>

import { defineComponent } from 'vue';
import MainPageLink from '../components/MainPageLink.vue';

export default defineComponent({
    name: 'NotFound',
    components: {
        MainPageLink
    },
});

</script>

<style scoped lang="scss">
.background {
    background-image: url("../static/background_1.jpg");
    background-repeat: no-repeat;
    background-size: cover;

    justify-content: center;

    text-align: center;
    font-family: "Cambria", "serif";
    color: #D9D9D9;

    .title {
        width: 99%;
    }
}
</style>