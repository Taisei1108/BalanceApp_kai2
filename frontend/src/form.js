import React from 'react';

export default class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            event_name: '',
            event_date: '',
            price: '',
            is_paid: false,
        };

        this.nameChange = this.nameChange.bind(this);
        this.eventnameChange = this.eventnameChange.bind(this);
        this.eventdateChange = this.eventdateChange.bind(this);
        this.priceChange = this.priceChange.bind(this);
        this.isPaidChange = this.isPaidChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    nameChange(event) {
        this.setState({
            todoText: event.target.value,
        });
    }
    eventnameChange(event) {
        this.setState({
            event_name: event.target.value,
        });
    }
    eventdateChange(event) {
        this.setState({
            event_date: event.target.value,
        });
    }
    priceChange(event) {
        this.setState({
            price: event.target.value,
        });
    }
    isPaidChange(event) {
        this.setState({
            is_paid: event.target.value,
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        if(this.state.todoText === ''){
            return;
        }
        this.setState({
            todoText: '',
        });
        //this.props.addEvent(this.state.todoText);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div ><input type="text" value={this.state.todoText} onChange={this.todoTextChange} />
                    <button type="submit">Add</button></div>
                </form>
            </div>
        );
    }
}