<template>
    <RouterLink style="text-decoration: none;" to="/">
        <div class="title">
            <p>ADND Player’s Hand Book</p>
            <p><b>IRRILIUM Edition</b></p>
        </div>
    </RouterLink>
</template>

<script>

import { defineComponent } from 'vue'; 

export default defineComponent({
    name: 'MainPageLink'
});

</script>

<style scoped lang="scss">
.title {
    border-width: 3px;
    border-style: solid;
    border-image: linear-gradient(
        to bottom, 
        purple, 
        rgba(0, 0, 0, 0)
    ) 1 100%;

    padding: 0 1em 1em;
    margin-top: 1em;
    margin-bottom: 1em;

    font-size: 14.0pt;
    text-align: center;
    font-family: "Cambria", "serif";
    color: #D9D9D9;
    line-height: 1.2;
    
    p {
        margin: 0px;
    }

    :last-child {
        font-weight: bold;
    }
}
</style>