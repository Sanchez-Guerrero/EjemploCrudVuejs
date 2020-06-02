import Vue from 'vue';

export async function getPersonas( {commit } ){
    try
    {
        const { data } = await Vue.axios.get('/personas');
        commit('SET_PERSONAS', data)
    }   
    catch(error)
    {
        commit('ERROR', error.message)
    }
    finally{
        console.log('La peticion get se realiazo correctamente')
    }
}

export async function postPersona( {commit}, objPersona){
    try
    {
        const { data } = await Vue.axios.post('/personas', objPersona)
        commit('ADD_PERSONA', data)
    }
    catch(error)
    {
        commit('ERROR', error.message)
    }
    finally
    {
        console.log('La promesa put se ejecuto correctamente');
    }
}