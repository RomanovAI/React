import {DELETE_FILM, ADD_FILM, FETCH_FILMS} from "./constants/const";

 function actionDeleteFilm(element){
    return (
        {
            type: DELETE_FILM,
            idFilm: element
        }
    )
}

 function actionAddFilm(element){
    return (
        {
            type: ADD_FILM,
            movie: element
        }
    )
}

 function actionFetchFilms(arr){
    return (
        {
            type: FETCH_FILMS,
            movie: arr
        }
    )
 }




export { actionDeleteFilm, actionAddFilm, actionFetchFilms }