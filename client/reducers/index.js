import {combineReducers} from "redux";
//import {routerReducer} from "react-router-redux";

 function listFilms (state = [], action){

     switch (action.type){
         case "FETCH_FILMS":
             return action.movie;
             break;
         case "ADD_FILM":
             return [...state, action.movie];
             break;
         case "DELETE_FILM":
             return Object.assign([],state.filter(movie=>movie.id !== action.idFilm) );
             break;
         default:
             return state;
     }
}


/*export default combineReducers({
    routing: routerReducer,
    listFilms
})*/
export default listFilms;