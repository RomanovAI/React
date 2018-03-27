import React, {Component} from "react";
import {Route, Switch, HashRouter} from "react-router-dom";
import MoviesRender from "./MoviesRender";
import About from "./About";


export default class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            arr: []
        };

        this.deleteFilm = this.deleteFilm.bind(this);
        this.getFilm = this.getFilm.bind(this);
    }

    componentDidMount() {
         fetch('http://localhost:3000/test')
             .then(response =>
               response.json()
             )
             .then((res) =>
               this.setState({
                arr:res.body
                })
              )
            .catch(error => console.error(error))
    }

    render () {
        const wrapperMoviesRender = ()=> <MoviesRender movies={this.state.arr} deleteFilm={this.deleteFilm} getFilm={this.getFilm}/>;
        const wrapperAbout = () => <About movies={this.state.arr}/>;
        return (
            <HashRouter>
             <Switch>
                <Route exact path="/" component={wrapperMoviesRender} />
                <Route path="/about" component={wrapperAbout} />
             </Switch>
            </HashRouter>
        )
    }

    deleteFilm(event) {
        let idFilm = +event.target.parentNode.id;
        let arrAfterDeleting = this.state.arr.filter((movie) =>
            movie.id !== idFilm);
        let after = JSON.stringify(arrAfterDeleting);
        fetch('http://localhost:3000/test', {
            method: "post",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: after
            })
            .then( response =>
                response.json()
            )
            .then( res => {
            this.setState({
                arr: res.body
                })
            })
            .catch(error => console.error(error))
    }

    getFilm(value) {
        let arrFilms = [...this.state.arr];
        arrFilms.push(value);
        let after = JSON.stringify(arrFilms);
        fetch('http://localhost:3000/test', {
            method: "post",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: after
            })
            .then(response =>
                    response.json()
            )
            .then(res =>
                this.setState({
                    arr: res.body
                })
            )
    }
};
