import React, {Component} from "react";
import CreateForm from "./CreateForm";


export default class ShowForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showForm: false
        };
    }

    render() {
        return (
            <div>
                <button id="addButton" onClick={this.show.bind(this)}>Добавить</button>
                {this.state.showForm && <CreateForm />}
            </div>
        )
    }

    show() {
        this.setState({
            showForm:!this.state.showForm
        });
    }
}
