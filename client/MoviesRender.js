import React, {Component} from "react";


export default class MoviesRender extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {movies} = this.props;
        let moviesToRender = movies.map((movie) => {
            const span = <span>{movie.name}</span>;
            const buttonDelete = <button onClick={this.props.deleteFilm} className="button-delete">delete</button>;
            const br = <br/>;
            return (
                <div id={movie.id} key={movie.id}>
                    {span}
                    {buttonDelete}
                    {br}
                </div>
            )
        });
        return (
            <div>
            {moviesToRender}
            </div>
        )
    }
}




