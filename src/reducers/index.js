import { combineReducers } from "redux";

function tituloReducer(state = { titulo: "Lista de ... ou Convidados da festa de ..."}, action) {
    if (action.type === "alterar") {
        return { titulo: action.value };
    } else {
        return state;
    }
};

const initialstate = {
    item: []
};

function itemReducer(state = initialstate, action) {    
    if (action.type === "adicionar") {
        return { item: [ ...state.item, { ...action.value }] };
    } else {
        return state;
    }
};

const reducers = combineReducers({tituloReducer, itemReducer});

export default reducers;