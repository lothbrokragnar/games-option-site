<template>
    <div>
        <header>
            <h1>Editando la opinion de: <br><span class="display-3">{{comments[payload.id].game}}</span></h1>
        </header>
        <form>
            <label><strong>Ingresa tu nombre:</strong></label>
                <input required type="text" v-model="payload.user" class="form-control" :placeholder="comments[payload.id].user">
                <br>
                <strong>Ingresa tu opinión:</strong>
                <textarea required type="text" v-model="payload.opinion" class="form-control" :placeholder="comments[payload.id].opinion"></textarea>
                <br>
                <router-link :to="{name: 'administracion'}"><button class="btn btn-primary mx-3">Regresar</button></router-link>
                <button class="btn btn-info mx-3" @click="modifyComment()">Guardar</button>
        </form>
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
        data() {
            return {
                payload:{
                    user: '',
                    opinion: '',
                    id: this.$route.params.id,
                }
            };
        },
                computed: {
            ...mapState({
                comments: (state) => {
                    return state.comments
                }
            })
        },
        methods: {
            ...mapMutations(['MODIFY_COMMENT']),
            modifyComment(){
                alert(`Se ha modificado su comentario sobre este juego`)
                this.$store.commit('MODIFY_COMMENT', this.payload)
            }
        },
}
</script>