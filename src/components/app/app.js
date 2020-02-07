import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import ErrorBoundry from '../error-boundry';
import SwapiService from "../../services/swapi-service";

import {SwapiServiceProvider} from '../swapi-service-context';

import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  LoginPage,
  SecredPage
} from '../pages';

import './app.css';

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { StarshipDetails } from '../sw-components';

export default class App extends Component {

  state = {
    isLoggedIn: false,
  }

  swapiService = new SwapiService();

  onLogin = () => {
    this.setState({
      isLoggedIn:true,
    })
  };

/*   componentDidCatch(error, info){
     debugger; 

    console.log('componentDidCatch');
    this.setState=({ hasError: true});
  } */

  
  render() {

    const {isLoggedIn} = this.state;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div className="stardb-app">
              <Header />

              <RandomPlanet />
              
              <Switch>

                <Route path='/' 
                      render={()=> <h2>Welcome to Star DB</h2>}
                      exact/>

                <Route path='/people/:id?' component= {PeoplePage}/>
                <Route path='/planets' component= {PlanetsPage}/>
                <Route path='/starships' 
                      exact /* exact - точно цей шлях і ніякий інший  */ 
                      component={StarshipsPage} />
                <Route path='/starships/:id' 
                      render={({match})=>{
                        const {id} = match.params;
                        return <StarshipDetails itemId={id} />
                      }}/>
                <Route path='/login' render={()=>(
                  <LoginPage 
                      isLoggedIn={isLoggedIn}
                      onLogin={this.onLogin}/>
                )}/>
                <Route path='/secret' render={() => (
                  <SecredPage isLoggedIn={isLoggedIn}/>
                )} />

                {/* <Redirect to='/'/> */}
                <Route render={() => <h2>Page not found</h2>} />

              </Switch>

            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  };
}

