import React, { Component } from 'react';
import NewGamer from './NewGamer';

class Gamers extends Component {
    state = {
        gamers: {
            'Iconjurer': {
                first: 'James',
                last: 'Jackson',
                gamesPlayed: 0
            },
            'Chimpanzy': {
                first: 'Gustavo',
                last: 'Bates',
                gamesPlayed: 0
            },
            'Delhiminate': {
                first: 'Victor',
                last: 'Sharp',
                gamesPlayed: 0
            },
            'Tweetail': {
                first: 'Amos',
                last: 'Jones',
                gamesPlayed: 0
            },
            'SisterWizard': {
                first: 'Kelvin',
                last: 'Ford',
                gamesPlayed: 0
            },
            'CrazyPhantom': {
                first: 'Loretta',
                last: 'Underwood',
                gamesPlayed: 0
            },
            'CookingFerret': {
                first: 'Katrina',
                last: 'Bryant',
                gamesPlayed: 0
            },
            'GorgeousMosquito': {
                first: 'Shirley',
                last: 'Roberson',
                gamesPlayed: 0
            },
            'JuniorValkyrie': {
                first: 'Leigh',            
                last: 'Ball',
                gamesPlayed: 0
            },
            'ArcticShade': {
                first: 'Della',
                last: 'White',
                gamesPlayed: 0
            },
        }
    };

    addUserName = (first,last,username, gamesPlayed = 0) => {
        this.setState((prevState) => ({
            gamers: Object.assign({},prevState.gamers,{
                [username]: {
                    first,
                    last,
                    gamesPlayed
                }
            })
        }));
    };

    getUserNames = () => Object.keys(this.state.gamers);

    getUsersGamesPlayed = (username) => 
        this.state[username] ? this.state[username].gamesPlayed : 0;

    render = () => (
        <div className="gamers">
            <NewGamer addNewGamer={this.addUserName} gamers={this.state.gamers}/>
            <ul>
                {this.getUserNames().map((username) => 
                    (<li key={username}>{username} has played {this.getUsersGamesPlayed(username)} games</li>)
                )}
            </ul>
        </div>
    );
}

export default Gamers;