<template>
    <div class="row row-cols-1 row-cols-md-3 g-4 m-0">
        <div class="col" v-for="(game, i) in games" :key="i">
            <div class="card border-secondary h-100 m-2">
                <img :src="game.background_image" class="card-img-top" alt="...">
                <div class="card-body">
                    <h3 class="card-title">{{ game.name }}</h3>
                    <p class="card-text"><strong>Rating</strong>: {{ game.rating }}</p>
                    <p class="card-text"><strong>Released</strong>: {{ game.released }}</p>
                    <p class="card-text"><strong>Updated</strong>: {{ game.updated }}</p>
                </div>
                <div class="card-footer">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                        :data-bs-target="'#' + createIDs(game.name)">Opinar</button>
                    
                    <!-- Modal -->
                    
                    <div class="modal fade" :id="createIDs(game.name)" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="true">
                        <div class="modal-dialog modal-xl">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Escribe tu opinion para el juego:
                                        <br>
                                        <strong>{{game.name}}</strong>
                                    </h5>
                                    <button type="button" @click="refreshGameOpinion" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div class="mb-3">
                                            <label class="col-form-label"><strong>Ingresa tu nombre:</strong></label>
                                            <input required type="text" v-model="gameOpinion.userName" class="form-control" placeholder="Juanito Perez">
                                        </div>
                                        <div class="mb-3">
                                            <label class="col-form-label"><strong>Ingresa tu opinión:</strong></label>
                                            <textarea required type="text" v-model="gameOpinion.userComment" class="form-control" placeholder="Tu opinión debe ir aquí..."></textarea>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" @click="refreshGameOpinion" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Cerrar</button>
                                    <button type="button" @click="addComment(game)" data-bs-dismiss="modal" class="btn btn-primary">Guardar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {
        mapMutations,
        mapState
    } from 'vuex'
    export default {
        data() {
            return {
                gameOpinion:{
                    userName: '',
                    userComment: '',
                    userGame: ''
                }
            }
        },
        computed: {
            ...mapState({
                games: (state) => {
                    return state.games
                }
            })
        },
        methods: {
            createIDs(gameName) {
                const newID = `modal_${gameName.replace(/\s/g, '').replace(/:/g,'')}`
                return newID
            },
            refreshGameOpinion(){
                this.gameOpinion.userName = ''
                this.gameOpinion.userComment = ''
            },
            ...mapMutations(['ADD_COMMENT']),
            addComment(game){
                this.gameOpinion.userGame = game.name
                this.$store.commit('ADD_COMMENT', this.gameOpinion)
                alert(`Su comentario para el juego ${game.name} ha sido agregado`)
                this.gameOpinion.userName = ''
                this.gameOpinion.userComment = ''
                this.gameOpinion.userGame = ''
            }
        }
    }
</script>
<style scoped>
    img {
        object-fit: cover;
        height: 80%
    }
    textarea{
        height:150px
    }
</style>