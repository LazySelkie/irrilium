<template>
    <div class="background" id="equipment">
        <container>
            <main-page-link/>

            <div class="title">
                <h1>Вещи и снаряжение</h1>
                <div class="line"></div>
            </div>

            <div class="links flex-column">
                <RouterLink to="/weapons">
                    <p>Оружие</p>
                </RouterLink>
            </div>
        </container>
    </div>
</template>

<script>

import { defineComponent } from 'vue'; 
import MainPageLink from '../components/MainPageLink.vue';

export default defineComponent({
    name: 'EquipmentView',
    components: {
        MainPageLink
    },
});

</script>

<style scoped lang="scss">
#equipment {
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
    font-size: 20px;

    a {
        min-width: 180px;
        width: 100%;
        text-decoration: none;
        text-align: center;
        color: #D9D9D9;
        
        margin: 0.2em;
        padding: 0.4em 0.5em;
        
        border: 2px solid rgba(0, 0, 0, 0.37);
        border-radius: 5px;
        background: linear-gradient(90deg, rgba(39, 8, 75, 0.759) 0%, rgba(57, 12, 89, 0.219) 62%, rgba(200, 0, 255, 0.05) 100%);

        p {
            margin: 0;
        }
    }
}

</style>