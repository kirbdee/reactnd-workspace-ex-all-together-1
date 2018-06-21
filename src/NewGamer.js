import React, { Component } from 'react';
import GamerInput from './GamerInput';
import PropTypes from 'prop-types';

class NewGamer extends Component {
    static propTypes = {
        addNewGamer: PropTypes.func.isRequired,
        gamers: PropTypes.object.isRequired
    }

    state = {
        firstName: '',
        lastName: '',
        username: '',
        taken: false,
        showError: false,
        showSuccess: false
    }
    
    setTaken = (value) => this.setState(() => ({taken:value}));
    
    isTaken = () => this.setTaken(!!this.props.gamers[this.state.username])

    onFirstNameChange = (value) => {
        this.setState(() => ({
            firstName: value,
            showSuccess: false
        }));
    };

    onLastNameChange = (value) => {
        this.setState(() => ({
            lastName: value,
            showSuccess: false
        }));
    };

    onUsernameChange = (value) => {
        this.setState(() => ({
            username: value,
            showSuccess: false
        }),this.isTaken);
    };

    isFormComplete = () => !!(this.state.firstName && this.state.lastName && this.state.username)

    onSubmit = (event) => {
        event.preventDefault();
        if( !this.state.taken ) {
            this.props.addNewGamer(this.state.firstName,this.state.lastName,this.state.username);
            this.setState(() => ({
                showError: false,
                showSuccess: true,
                firstName: '',
                lastName: '',
                username: '',
            }));
        } else {
            this.setState(() => ({
                showError: true
            }));
        }
        
    }
    
    render = () => (
        <div>
            <form className="new-gamer" onSubmit={this.onSubmit}>
                <GamerInput
                    placeholder="First Name"
                    value={this.state.firstName}
                    handleChange={this.onFirstNameChange}
                />
                <GamerInput
                    placeholder="Last Name"
                    value={this.state.lastName}
                    handleChange={this.onLastNameChange}
                />
                <GamerInput
                    placeholder="Username"
                    value={this.state.username}
                    handleChange={this.onUsernameChange}
                />            
                <button disabled={!this.isFormComplete()}>Add</button>
            </form>
            { this.state.showError ? <p style={{color:'red',fontWeight:'bold'}}>Username Is Taken</p>: null}
            { this.state.showSuccess ? <p style={{color:'green',fontWeight:'bold'}}>Username Is Added</p>: null}
        </div>
    )
}

export default NewGamer;