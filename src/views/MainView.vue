<template>
    <div class="background" id="main">
        <img src="../static/adnd logo.png" alt="Advanced Dungeons and Dragons">
        <div class="title">
            <p>Player’s Hand Book</p>
            <p><b>IRRILIUM Edition</b></p>
        </div>
        <!-- <p>Dice Roller image</p> -->

        <div id="links">
            <div class="row">
                <div class="card">
                    <p>Создание персонажа</p>
                    <RouterLink to="/character_creation">
                        <img src="../static/links_1.gif" alt="Создание персонажа">
                    </RouterLink>
                </div>
                <div class="card">
                    <p>Боги Иррилиума</p>
                    <RouterLink to="/gods">
                        <img src="../static/links_2.gif" alt="Боги Иррилиума">
                    </RouterLink>
                </div>
                <div class="card">
                    <p>Магия</p>
                    <RouterLink to="/magic">
                        <img src="../static/links_3.gif" alt="Магия">
                    </RouterLink>
                </div>
            </div>
            <div class="row">
                <div class="card">
                    <p>Разные правила</p>
                    <RouterLink to="/other_rules">
                        <img src="../static/links_4.gif" alt="Разные правила">
                    </RouterLink>
                </div>
                <div class="card">
                    <p>Снаряжение</p>
                    <RouterLink to="/equipment">
                            <img src="../static/links_5.gif" alt="Снаряжение">
                    </RouterLink>
                </div>
                <div class="card">
                    <p>Сражение и тактика</p>
                    <RouterLink to="/battle">
                        <img src="../static/links_6.gif" alt="Сражение и тактика">
                    </RouterLink>
                </div>
            </div>
        </div>

        <div class="footer">
            <p>Наследный PHB (ссылка)</p>
            <p id="update-date">Последнее обновление: 03.05.2024</p>
        </div>
    </div>
</template>

<script>

import { defineComponent } from 'vue'; 

export default defineComponent({
    name: 'MainView'
});

</script>

<style scoped lang="scss">
#main {
    background-image: url("../static/main background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}
img {
    padding-top: 1em;
}
#links {
    display: flex;
    flex-direction: column;

    img {
        padding-top: 0.3em;
        height: 150px;
        width: 150px;
    }

    .row {
        display: flex;
        justify-content: space-between;

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
            }
            p {
                text-align: center;
            }
        }
        .card:not(:last-child) {
            margin-right: 1em;
        }
    }
}
.title {
    padding-top: 1em;
    padding-bottom: 1em;

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
.footer {
    font-weight: italic;
    text-align: center;
    color: #d9d9d991;

    p:not(:last-child) {
        margin: 0px;
    }
    #update-date {
        margin-top: 0px;
        font-size: smaller;
    }
}
</style>