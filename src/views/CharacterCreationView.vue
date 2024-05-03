<template>
    <div class="background" id="character">
        <main-page-link/>

        <div class="title">
            <h1>Создание персонажа</h1>
            <div class="line"></div>
        </div>

        <div class="links">
            
        </div>
    </div>
</template>

<script>

import { defineComponent } from 'vue'; 
import MainPageLink from '../components/MainPageLink.vue';

export default defineComponent({
    name: 'CharacterCreationView',
    components: {
        MainPageLink
    },
});

</script>

<style scoped lang="scss">
#character {
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
</style>