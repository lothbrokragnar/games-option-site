<template>
    <div class="text-center">
        <img class="w-50 my-5" src="../assets/NotFound.gif" alt="">
        <h1>La página que buscas no existe o ha ocurrido otro error.</h1>
        <h2>Regresa a nuestra pagina principal y vuelve a intentar...</h2>
        <router-link :to="{name: 'home'}">Volver al inicio</router-link>
        <br>
    </div>
</template>