import React, {Component} from "react";
import {Link} from "react-router-dom";


export default class About extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let url = document.location.href;
        let str = +url.slice(30);
        const {movies} = this.props;
        let aboutToRender = movies.filter((movie) =>  (movie.id === str));
        let renderDiscription = aboutToRender.map(( movie ) => {
            const span = <p>{movie.description}</p>;
            return (
                <div id={movie.id} key={movie.id}>
                    {span}
                </div>
        )});
        const buttonBack = <Link to={"/"} ><button>Назад</button></Link>;
        return (
        <div>
            {renderDiscription}
            {buttonBack}
        </div>
        )
    }
}