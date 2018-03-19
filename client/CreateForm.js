import React, {Component} from "react";


export default class CreateForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            myValue: ""
        };

        this.saveValue=this.saveValue.bind(this);
        this.clearValue=this.clearValue.bind(this);
        this.clickChange=this.clickChange.bind(this);
    }

    render() {
        const input = <input type="text" ref="text" placeholder="введи название" value={this.state.myValue} onChange={this.clickChange}/>;
        const buttonSave = <button className="button-save" onClick={this.saveValue}>save</button>;
        const buttonClear = <button id="clearButtonId" onClick={this.clearValue}>clear</button>;
        return (
            <div id="createForm">
                {input}
                {buttonSave}
                {buttonClear}
            </div>
        )
    }

    saveValue() {
        let valueFilm = this.refs.text.value;
        if (valueFilm) {
            const film = {
                name: valueFilm,
                id: Math.random()
            };
            this.props.getFilm(film);
        }
        this.setState({
            myValue: ""
        })
    }

    clickChange(event){
        this.setState({
            myValue: event.target.value
        })
    }

    clearValue(){
        this.setState({
            myValue: ""
        })
    }
}
