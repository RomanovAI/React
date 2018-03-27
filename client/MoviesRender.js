import React, {Component} from "react";
import ShowForm from "./ShowForm";
import {Link} from "react-router-dom";


export default class MoviesRender extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {movies} = this.props;
        let moviesToRender = movies.map((movie) => {
            const span = <span>{movie.name}</span>;
            const buttonDelete = <button onClick={this.props.deleteFilm}  className="button-delete">Удалить</button>;
            const buttonDescription = <button>Подробнее</button>;
            return (
                <div id={movie.id} key={movie.id}>
                    {span}
                     <Link to={`/about/${movie.id}`}>{buttonDescription}</Link>
                    {buttonDelete}
                    <br/>
                </div>
            )
        });
        return (
            <div>
                <ShowForm getFilm={this.props.getFilm}/>
                {moviesToRender}
            </div>
        )
    }
}




