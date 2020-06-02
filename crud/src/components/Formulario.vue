<template>
    <div>
        <form>
            <input type="text" placeholder="ingresa id" v-model="objPersona.id"/>
            <br/>
            <input type="text" placeholder="Ingresa nombre" v-model="objPersona.nombre"/>
            <br/>
            <input type="text" placeholder="Ingresa apellidos" v-model="objPersona.apellidos"/>
            <br/>
            <button type="submit" @click.prevent="postPersona(objPersona)">Registrar</button>
        </form>

        <ul>
            <li v-for="persona of personas" :key="persona.id"> 
               {{persona.id}} | {{persona.nombre}} | {{persona.apellidos}}
                </li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default{
    data() {
        return {
            objPersona: {
                id: '',
                nombre: '',
                apellidos: ''
            }
        }
    },

    computed:{
        ...mapState('personas',['personas'])
    },

    mounted(){
        this.getPersonas();
    },

    methods: {
        ...mapActions({
            createPersona: 'personas/postPersona',
            consultarPersonas: 'personas/getPersonas'
        }),

        postPersona(objPersona){
            this.createPersona(objPersona).then( ()=> {
                this.objPersona = ''
                console.log('Se regitro');
            })
        },
        
        getPersonas(){
            this.consultarPersonas().then( ()=>{
                console.log('Cargo datos');
            })
        }
    }

}
</script>