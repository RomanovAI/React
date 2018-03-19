import React, {Component} from "react";
import ShowForm from "./ShowForm";
import moviesDb from "./db";
import MoviesRender from "./MoviesRender";

export default class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            arr: moviesDb
        };

        this.deleteFilm = this.deleteFilm.bind(this);
        this.getFilm = this.getFilm.bind(this);
    }

    render () {
        return (
            <div>
                <ShowForm getFilm={this.getFilm}/>
                <MoviesRender movies={this.state.arr} deleteFilm={this.deleteFilm}/>
            </div>
        )
    }

    deleteFilm(event){
        let idFilm = +event.target.parentNode.id;
        let arrAfterDeleting = this.state.arr.filter((movie) =>
            movie.id !== idFilm);
        this.setState({
            arr: arrAfterDeleting
        })
    }

    getFilm(value) {
        let mov = [...this.state.arr];
        mov.push(value);
        this.setState({
            arr: mov
        })
    }
};
