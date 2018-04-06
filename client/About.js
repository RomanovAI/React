import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

export function About (props) {
        let url = document.location.href;
        let findStrAbout= url.indexOf("about/");
        let str = url.substr(findStrAbout+6);
        let aboutToRender = props.films.filter( movie =>
              (movie.id === str)
        );
        let renderDescription = aboutToRender.map(( movie ) => {
            const span = <p>{movie.description}</p>;
            return (
                <div id={movie.id} key={movie.id}>
                    {span}
                </div>
        )});
        const buttonBack = <Link to={"/"} ><button>Назад</button></Link>;
        return (
        <div>
            {renderDescription}
            {buttonBack}
        </div>
        )
}


export default connect (
    state => ({
    films:state
})
)(About)