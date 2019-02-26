import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './components/HomePageComponent'
import Header from './components/Header'
import History from './components/History'
import Favorites from './components/Favorites'
import Search from './components/Search'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Welcome to Tourist Search Engine",
        };
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <Header />
                <History />
                <Favorites />
                <Search />
                <Switch>
                    <Route path="/" render={props => (
                        <Home {...props} />
                    )} />
                </Switch>
            </div>

        )
    }
}
export default App;