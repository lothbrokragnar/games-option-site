<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Games Opinion</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <router-link class="nav-link" :to="{name: 'home'}">Home</router-link>
                        <router-link class="nav-link" :to="{name: 'opiniones'}">Opiones</router-link>
                        <router-link class="nav-link" :to="{name: 'administracion'}">Administracion</router-link>
                    </div>
                </div>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>