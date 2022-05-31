<template>
    <div>
        <section v-if="comments.length == 0">
            <div class="alert alert-danger" role="alert">
                No existen opiniones para mostrar
            </div>
        </section>

        <section v-else>
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item my-4" v-for="(comment, i) in comments" :key="i">
                    <h2 class="accordion-header" :id="`heading${i}`">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            :data-bs-target="`#collapse${i}`" aria-expanded="false" :aria-controls="`collapse${i}`">
                            Opinion creada por "<strong>{{ comment.user }}</strong>" para el juego "<strong>{{ comment.game }}</strong>"
                        </button>
                    </h2>
                    <div :id="`collapse${i}`" class="accordion-collapse collapse" :aria-labelledby="`heading${i}`"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body"><p><strong>Opinión: </strong> {{ comment.opinion }}</p> </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import {
        mapState
    } from 'vuex'
    export default {
        computed: {
            ...mapState({
                comments: (state) => {
                    return state.comments
                }
            })
        }
    }
</script>