import React, {Component} from "react";
import ShowForm from "./ShowForm";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {actionDeleteFilm, actionFetchFilms} from "./actions";

export class MoviesRender extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const buttonDownload = <button onClick={this.fetchFilm.bind(this)}>Загрузить фильмы</button>;
        let moviesToRender = this.props.films.map((movie,index) => {
            const span = <span>{movie.name}</span>;
            const buttonDelete = <button onClick={this.deleteFilm.bind(this)}  className="button-delete">Удалить</button>;
            const buttonDescription = <button>Подробнее</button>;
            return (
                <div id={movie.id} key={index}>
                    {span}
                     <Link to={`/about/${movie.id}`}>{buttonDescription}</Link>
                    {buttonDelete}
                </div>
            )
        });
        return (
            <div>
                {buttonDownload}
                <ShowForm/>
                {moviesToRender}
            </div>
        )
    }

    deleteFilm(event) {
        let idFilm = +event.target.parentNode.id;
        this.props.delFilm(idFilm);
    }

    fetchFilm(){
         fetch('http://localhost:3000/test')
            .then(response => response.json())
            .then((res) => this.props.getFilm(res.body))
            .catch(error => console.error(error))
    }
}


export default connect(
    state =>({
        films: state
    }),
    dispatch =>({
        delFilm: (element)=> dispatch(actionDeleteFilm(element)),
        getFilm: (element)=> setTimeout(() => { dispatch(actionFetchFilms(element))},2000)
    })
)(MoviesRender);



