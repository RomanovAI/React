import React, {Component} from "react";
import ShowForm from "./ShowForm";
import MoviesRender from "./MoviesRender";



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
        .then(response => response.json())
        .then((res) => {
            this.setState({
                arr:res.body})
        })
    }


    render () {
        return (
            <div>
                <ShowForm getFilm={this.getFilm}/>
                <MoviesRender movies={this.state.arr} deleteFilm={this.deleteFilm}/>
            </div>
        )
    }

    deleteFilm(event) {
        let idFilm = +event.target.parentNode.id;
        let arrAfterDeleting = this.state.arr.filter((movie) =>
            movie.id !== idFilm);
        console.log(arrAfterDeleting);
        let after = JSON.stringify(arrAfterDeleting);
        console.log(after);
        fetch('http://localhost:3000/test', {
            method: "post",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body:after
        })
            .then(response =>
                response.json()
            )
            .then(res => {
                JSON.parse(res);
                console.log("res :",res);
            this.setState({
                arr: res
            })})

            .catch(error => console.error(error))
    }


    getFilm(value) {
        let mov = [...this.state.arr];
        mov.push(value);
        this.setState({
            arr: mov
        })
    }
};
