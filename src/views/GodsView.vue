<template>
    <div class="background" id="gods">
        <main-page-link/>

        <div class="title">
            <h1>Боги Иррилиума</h1>
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
    name: 'GodsView',
    components: {
        MainPageLink
    },
});

</script>

<style scoped lang="scss">
#gods {
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