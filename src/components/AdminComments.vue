<template>
    <div>
        <section v-if="comments.length == 0">
            <div class="alert alert-danger" role="alert">
                No existen opiniones para mostrar
            </div>
        </section>

        <table v-else class="table table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Persona</th>
                    <th scope="col">Juego</th>
                    <th scope="col">Opinion</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(comment, i) in comments" :key="i">
                    <th scope="row">{{ i+1 }}</th>
                    <td>{{ comment.user }}</td>
                    <td>{{ comment.game }}</td>
                    <td>{{ comment.opinion }}</td>
                    <td><button class="btn btn-danger" @click="deleteComment(i)">Eliminar</button></td>
                    <td><router-link :to="`/editcomment/${i}`"><button class="btn btn-info">editar</button></router-link></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'
    export default {
        computed: {
            ...mapState({
                comments: (state) => {
                    return state.comments
                }
            })
        },
        methods: {
            ...mapMutations(['DELETE_COMMENT']),
            deleteComment(index){
                this.$store.commit('DELETE_COMMENT', index)
                alert('El comentario ha sido elimidado')
            }
        },
    }
</script>