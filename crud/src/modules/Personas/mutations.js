export function SET_PERSONAS( state, personas ){
    state.personas = personas
}

export function ERROR(state, payload){
    state.errorMessage = payload;
    state.personas = []
}

export function ADD_PERSONA(state, objPersona){
    state.personas.push(objPersona);
    state.message = objPersona;
}