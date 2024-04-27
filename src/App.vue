<template>
    <div id="main">
        <img src="./static/adnd logo.png" alt="Advanced Dungeons and Dragons">
        <div class="title">
            <p>Player’s Hand Book</p>
            <p><b>IRRILIUM Edition</b></p>
        </div>
        <p>Dice Roller image</p>

        <div id="links">
            <div class="row">
                <div class="card">
                    <p>Создание персонажа</p>
                    <a href="/irrilium/character_creation.html">
                        <img src="./static/links_1.gif" alt="Создание персонажа">
                    </a>
                </div>
                <div class="card">
                    <p>Боги Иррилиума</p>
                    <a href="/irrilium/gods.html">
                        <img src="./static/links_2.gif" alt="Боги Иррилиума">
                    </a>
                </div>
                <div class="card">
                    <p>Магия</p>
                    <a href="/irrilium/magic.html">
                        <img src="./static/links_3.gif" alt="Магия">
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="card">
                    <p>Разные правила</p>
                    <a href="/irrilium/other_rules.html">
                        <img src="./static/links_4.gif" alt="Разные правила">
                    </a>
                </div>
                <div class="card">
                    <p>Снаряжение</p>
                    <a href="/irrilium/equipment.html">
                        <img src="./static/links_5.gif" alt="Снаряжение">
                    </a>
                </div>
                <div class="card">
                    <p>Сражение и тактика</p>
                    <a href="/irrilium/equipment.html">
                        <img src="./static/links_6.gif" alt="Сражение и тактика">
                    </a>
                </div>
            </div>
        </div>

        <div class="footer">
            <p>Наследный PHB (ссылка)</p>
            <p id="update-date">Последнее обновление: 27.04.2024</p>
        </div>
    </div>
</template>

<script>

import { defineComponent } from 'vue'; 

export default defineComponent({
    name: 'App'
});

</script>

<style scoped>

#main {
	width: 100%;
	background-color: #150115;
	background-image: url("static/main background.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
}

img {
	padding-top: 1em;
}

#links {
	display: flex;
	flex-direction: column;
}

#links img {
	padding-top: 0.3em;
	height: 150px;
	width: 150px;
}

#links .row {
	display: flex;
	justify-content: space-between;
}

#links .row .card {
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
	background: linear-gradient(180deg, rgba(39, 8, 75, 0.759) 0%, rgba(57, 12, 89, 0.219) 62%, rgba(0, 212, 255, 0) 100%);
}

#links .row .card img {
	border-radius: 25px;
}

#links .row .card p {
	text-align: center;
}

#links .row .card:not(:last-child) {
	margin-right: 1em;
}

.title {
	padding-top: 1em;
	padding-bottom: 1em;
	font-size: 14.0pt;
	text-align: center;
	font-family: "Cambria", "serif";
	color: #D9D9D9;
	line-height: 1.2;
}

.title p {
	margin: 0px;
}

.title :last-child {
	font-weight: bold;
}

.footer {
	font-weight: italic;
	text-align: center;
	color: #d9d9d991;
}

.footer p:not(:last-child) {
	margin: 0px;
}

.footer #update-date {
	margin-top: 0px;
	font-size: smaller;
}
</style>