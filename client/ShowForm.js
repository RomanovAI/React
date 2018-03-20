import React, {Component} from "react";
import CreateForm from "./CreateForm";

export default class ShowForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showForm: false
        };

        this.show=this.show.bind(this);
    }

    render() {
        return (
            <div>
                <button id="addButton" onClick={this.show}>add</button>
                {this.state.showForm && <CreateForm getFilm={this.props.getFilm}/>}
            </div>
        )
    }

    show() {
        this.setState({
            showForm:!this.state.showForm
        });
            console.log(this);
        fetch('http://localhost:3000/test')
            .then(function(response) {
                console.log(response);

                return response.json();
            })
            .then(function(user) {
                console.log(user.name);
            })
            .catch( console.log );

    }
}
