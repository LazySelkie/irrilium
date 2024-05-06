<template>
    <div class="background" id="magic">
        <main-page-link/>

        <div class="title">
            <h1>Магия</h1>
            <div class="line"></div>
        </div>

        <div class="links flex-column">
            <div class="flex-row">
                <div class="card">
                    <p>Тайная магия</p>
                    <RouterLink to="/arcane_magic">
                        <img src="../static/magic_1.gif" alt="">
                    </RouterLink>
                </div>
                <div class="card">
                    <p>Божественная магия</p>
                    <RouterLink to="/divine_magic">
                        <img src="../static/magic_2.gif" alt="">
                    </RouterLink>
                </div>
                <div class="card">
                    <p>Магические компоненты</p>
                    <RouterLink to="/magic_components">
                        <img src="../static/magic_3.gif" alt="">
                    </RouterLink>
                </div>
            </div>
            <!-- <div class="flex-row">
                <div class="card">
                    <p>Магические компоненты</p>
                    <RouterLink to="/magic_components">
                        <img src="../static/magic_3.gif" alt="">
                    </RouterLink>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>

import { defineComponent } from 'vue'; 
import MainPageLink from '../components/MainPageLink.vue';

export default defineComponent({
    name: 'MagicView',
    components: {
        MainPageLink
    },
});

</script>

<style scoped lang="scss">
#magic {
    background-image: url("../static/background_1.jpg");
    background-repeat: no-repeat;
    background-size: cover;

    justify-content: flex-start;
}
.title {
    width: 90%;
    text-align: center;
    
    h1 {
        margin: 0;
    }
    .line {
        margin-bottom: 1em;
    }
}

.links {
    width: 80%;
    margin-top: 5%;
}
.flex-row {
    width: 100%;
    height: 150%;
    justify-content: space-evenly;
}
.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: 0 0 0.5em 0;
    padding-right: 0.3em;
    padding-left: 0.3em;
    padding-top: 0.6em;
    padding-bottom: 0.2em;
    
    border: 2px solid rgba(0, 0, 0, 0.37);
    border-radius: 25px;
    background: linear-gradient(180deg, rgba(39, 8, 75, 0.759) 0%, rgba(57, 12, 89, 0.219) 62%, rgba(0,212,255,0) 100%);

    img {
        border-radius: 25px;
        max-height: 180px;
    }
    p {
        text-align: center;
    }
}
</style>