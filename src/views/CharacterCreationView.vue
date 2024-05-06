<template>
    <div class="background" id="character">
        <main-page-link/>

        <div class="title">
            <h1>Создание персонажа</h1>
            <div class="line"></div>
        </div>

        <div class="links">
            <div class="flex-row">
                <img src="../static/character.jpg">
                <div class="flex-column">
                    <template v-for="(link, index) in links">
                        <RouterLink :to="link.link">
                            <p> {{ link.name }} </p>
                        </RouterLink>
                    </template>
                </div>
            </div>
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
    data: () => {
        return { 
            links: [{
                name: "Система создания",
                link: "/character_creation/creation_system"
            }, {
                name: "Расы",
                link: "/character_creation/races"
            }, {
                name: "Классы",
                link: "/character_creation/classes"
            }, {
                name: "Параметры",
                link: "/character_creation/parameters"
            }, {
                name: "Профессии",
                link: "/character_creation/professions"
            }, {
                name: "Таланты",
                link: "/character_creation/talents"
            }, {
                name: "Навыки",
                link: "/character_creation/skills"
            }, {
                name: "Спасительные броски",
                link: "/character_creation/saving_throws"
            }, {
                name: "Расчёт Thac0 у классов",
                link: "/character_creation/thaco"
            }, {
                name: "Таблицы проф",
                link: "/character_creation/prof_tables"
            }, {
                name: "Таблица опыта классов",
                link: "/character_creation/exp_class_tables"
            }]
        }
    }
});

</script>

<style scoped lang="scss">
#character {
    background-image: url("../static/background_2.jpg");
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

img {
    border-radius: 25px;
    object-fit: cover;
}
.links {
    font-size: 20px;

    a {
        width: 100%;
        text-decoration: none;
        color: #D9D9D9;
        
        p {
            text-align: center;
            width: 100%;
            margin: 0.2em;
            margin-left: 1.5em;
            padding: 0.3em 0;
            
            border: 2px solid rgba(0, 0, 0, 0.37);
            border-radius: 5px;
            background: linear-gradient(90deg, rgba(39, 8, 75, 0.759) 0%, rgba(57, 12, 89, 0.219) 62%, rgba(200, 0, 255, 0.05) 100%);
        }
    }
}
</style>