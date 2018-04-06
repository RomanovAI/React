import React, {Component} from "react";
import {connect} from "react-redux";
import {actionAddFilm} from "./actions";
import uuidv1 from "uuid";

export class CreateForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            myValue: "",
            descriptionFilm: ""
        };
    }

    render() {
        const input = <input type="text" ref="text" placeholder="введи название" value={this.state.myValue} onChange={this.clickChange.bind(this)}/>;
        const buttonSave = <button className="button-save" onClick={this.saveValue.bind(this)}>Сохранить</button>;
        const buttonClear = <button id="clearButtonId" onClick={this.clearValue.bind(this)}>Очистить</button>;
        const textarea = <textarea ref="text" value={this.state.descriptionFilm} onChange={this.clickChangeTo.bind(this)}/>;
        return (
            <div id="createForm">
                {input}
                {buttonSave}
                {buttonClear}
                <br/>
                {textarea}
            </div>
        )
    }

    saveValue() {
        if (this.state.myValue.length !== 0 && this.state.descriptionFilm.length !== 0) {
            const film = {
                name: this.state.myValue,
                id: uuidv1(),
                description: this.state.descriptionFilm
            };
            this.props.addFilm(film);
            this.setState({
                myValue: "",
                descriptionFilm: ""
            })
        }
    }

    clickChange(event){
        this.setState({
            myValue: event.target.value
        })
    }

    clickChangeTo(event){
        this.setState({
            descriptionFilm: event.target.value
        })
    }

    clearValue(){
        this.setState({
            myValue: "",
            descriptionFilm:""
        })
    }
}

export default connect(
    state => ({
        films:state
    }),
    dispatch => ({
        addFilm: (arr) =>dispatch(actionAddFilm(arr))
    })
)(CreateForm)


