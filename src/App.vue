<template>
    <RouterView />
</template>

<script>

import { defineComponent } from 'vue'; 

export default defineComponent({
    name: 'App'
});

</script>

<style lang="scss">
/* НЕ СТАВИТЬ height: 100% или 100vh у html, body, #main, .background, 
иначе на длинных страницах фон не "прилипает" к камере (двигаясь вместе с ней), а зависает чисто наверху */

body {
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
}
.background {
    width: 100%;
    background-color: #150115;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: flex-end;
    justify-content: space-between;

    font-family: "Cambria", "serif";
    color: #D9D9D9;
}
.line {
    width: 90%;
    height: 3px;
    border: 3px solid white;
    border-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0),
        violet, 
        rgba(0, 0, 0, 0)
    ) 0 1 100%;
}

.flex-column {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.flex-row {
    display: flex;
    justify-content: center
}

container {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    width: 100%;
}
</style>