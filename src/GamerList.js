import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GamerList extends Component {
    static propTypes = {
        users: PropTypes.object.isRequired   
    }

    state = {
        showGamesPlayed: true,
    }

    toggleGamesPlayed = () => {
        this.setState((prevState) => ({
            showGamesPlayed: !prevState.showGamesPlayed
        }))
    }
    render = () => (
        <div>
            <button className="smallButton" onClick={this.toggleGamesPlayed}>{this.state.showGamesPlayed ? `Hide the Number of Games Played`: `Show the Number of Games Played`}</button>
            <div>
                <ol>
                    {Object.keys(this.props.users).map((username) => 
                        (<li key={username}>{username} {this.state.showGamesPlayed ? `played ${this.props.users[username].gamesPlayed || 0} game${this.props.users[username].gamesPlayed === 0? ``:`s`}`: ``}</li>)
                    )}
                </ol>
            </div>
        </div>
    )
}

export default GamerList;