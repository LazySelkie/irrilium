<template>
    <div class="background" id="battle">
        <main-page-link/>

        <div class="title">
            <h1>Сражение и тактика</h1>
            <div class="line"></div>
        </div>

        <div class="links">
            <div class="flex-column">
                <template v-for="(link, index) in links">
                    <RouterLink :to="link.link">
                        <p> {{ link.name }} </p>
                    </RouterLink>
                </template>
            </div>
        </div>
    </div>
</template>

<script>

import { defineComponent } from 'vue'; 
import MainPageLink from '../components/MainPageLink.vue';

export default defineComponent({
    name: 'BattleView',
    components: {
        MainPageLink
    },
    data: () => {
        return { 
            links: [{
                name: "Карта сражения и токены",
                link: "/battle/-"
            }, {
                name: "Боевой раунд",
                link: "/battle/-"
            }, {
                name: "Инициатива",
                link: "/battle/-"
            }, {
                name: "Передвижение",
                link: "/battle/-"
            }, {
                name: "Масштаб и диапазон оружия",
                link: "/battle/-"
            }, {
                name: "Свободные атаки",
                link: "/battle/-"
            }, {
                name: "Неожиданность",
                link: "/battle/-"
            }, {
                name: "Основные боевые действия",
                link: "/battle/-"
            }, {
                name: "Расталкивание",
                link: "/battle/-"
            }, {
                name: "Мораль",
                link: "/battle/-"
            }, {
                name: "Укрытие и завеса",
                link: "/battle/-"
            }, {
                name: "Верховой бой",
                link: "/battle/-"
            }, {
                name: "Позиционный бой",
                link: "/battle/-"
            }, {
                name: "Сбивание с ног",
                link: "/battle/-"
            }, {
                name: "Хит поинты",
                link: "/battle/-"
            }, {
                name: "АС",
                link: "/battle/-"
            }, {
                name: "Thac0",
                link: "/battle/-"
            }, {
                name: "Усталость и ST points",
                link: "/battle/-"
            }, {
                name: "ABS - поглощение и доспех",
                link: "/battle/-"
            }, {
                name: "Возможности нападения",
                link: "/battle/-"
            }, {
                name: "Темнота и бой вслепую",
                link: "/battle/-"
            }, {
                name: "Подводный бой",
                link: "/battle/-"
            }, {
                name: "Лазание",
                link: "/battle/-"
            }, {
                name: "Бой двумя оружиями",
                link: "/battle/-"
            }]
        }
    }
});

</script>

<style scoped lang="scss">
#battle {
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
    width: 90%;
    max-height: 75%;

    .flex-column {
        margin-top: 3%;
        flex-wrap: wrap;
        height: 75%;
    }

    a {
        min-width: 260px;
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