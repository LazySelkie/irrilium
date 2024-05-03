<template>
    <div class="background" id="equipment">
        <main-page-link/>

        <h1>Вещи и снаряжение</h1>
        <div class="line"></div>

        <div class="links">
            <div class="link-item">
                <RouterLink style="text-decoration: none; color: white;" to="/weapons">
                    <p>Оружие</p>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>

import { defineComponent } from 'vue'; 
import MainPageLink from '../Components/MainPageLink.vue';

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

.links .link-item {
    min-width: 250px;
    text-align: center;

    border-width: 3px;
    border-style: solid;
    border-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        purple, 
        rgba(0, 0, 0, 0)
    ) 0 100%;

    border-radius: 0.6em;
    border-right: 0;
    
    background: linear-gradient(90deg, rgba(39, 8, 75, 0.759) 0%, rgba(57, 12, 89, 0.219) 62%, rgba(0,212,255,0) 100%); 
}

h1 {
    margin-bottom: 0;
}
.line {
    margin-bottom: 1em;
}
</style>