import React, {Component} from "react";


export default class CreateForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            myValue: "",
            descriptionFilm: ""
        };

        this.saveValue=this.saveValue.bind(this);
        this.clearValue=this.clearValue.bind(this);
        this.clickChange=this.clickChange.bind(this);
        this.clickChangeTo=this.clickChangeTo.bind(this);
    }

    render() {
        const input = <input type="text" ref="text" placeholder="введи название" value={this.state.myValue} onChange={this.clickChange}/>;
        const buttonSave = <button className="button-save" onClick={this.saveValue}>Сохранить</button>;
        const buttonClear = <button id="clearButtonId" onClick={this.clearValue}>Очистить</button>;
        const textarea = <textarea ref="text" value={this.state.descriptionFilm} onChange={this.clickChangeTo}/>;
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
        if (this.state.myValue !=="" && this.state.descriptionFilm !=="") {
            const film = {
                name: this.state.myValue,
                id: Math.random(),
                description: this.state.descriptionFilm
            };
            this.props.getFilm(film);
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
