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
html, body, #main, .background {
    height: 100%;
}
body {
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
}
.background {
    width: 100%;
    background-color: #150115;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
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
// #main {
    
//     width: 100%;
//     background-color: #150115;
//     background-image: url("static/main background.jpg");
//     background-repeat: no-repeat;
//     background-size: cover;
//     color: white;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: flex-end;
// }
// img {
//     padding-top: 1em;
// }
// #links {
//     display: flex;
//     flex-direction: column;

//     img {
//         padding-top: 0.3em;
//         height: 150px;
//         width: 150px;
//     }

//     .row {
//         display: flex;
//         justify-content: space-between;

//         .card {
//             display: flex;
//             flex-direction: column;
//             justify-content: space-between;

//             margin: 0 0 0.5em 0;
//             padding-right: 0.3em;
//             padding-left: 0.3em;
//             padding-top: 0.6em;
//             padding-bottom: 0.2em;
            
//             border: 2px solid rgba(0, 0, 0, 0.37);
//             border-radius: 25px;
//             background: linear-gradient(180deg, rgba(39, 8, 75, 0.759) 0%, rgba(57, 12, 89, 0.219) 62%, rgba(0,212,255,0) 100%);

//             img {
//                 border-radius: 25px;
//             }
//             p {
//                 text-align: center;
//             }
//         }
//         .card:not(:last-child) {
//             margin-right: 1em;
//         }
//     }
// }
// .title {
//     padding-top: 1em;
//     padding-bottom: 1em;

//     font-size: 14.0pt;
//     text-align: center;
//     font-family: "Cambria", "serif";
//     color: #D9D9D9;
//     line-height: 1.2;
    
//     p {
//         margin: 0px;
//     }

//     :last-child {
//         font-weight: bold;
//     }
// }
// .footer {
//     font-weight: italic;
//     text-align: center;
//     color: #d9d9d991;

//     p:not(:last-child) {
//         margin: 0px;
//     }
//     #update-date {
//         margin-top: 0px;
//         font-size: smaller;
//     }
// }
</style>