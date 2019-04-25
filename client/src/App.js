import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Voter from './Components/Voter';
import Contestant from './Components/Contestant';
import Electorate from './Components/Electorate';
import login from './Components/login';
import dashboard from './Components/dashboard'
import adminPanel from './Components/adminPanel';
import addElectorate from './Components/addElectorate';
import addElection from './Components/addElection';
import addVoter from './Components/addVoter';
import addContestant from './Components/addContestant'
import signup from './Components/signup';
import contestantList from './Components/contestantList';
import electionLIst from './Components/electionLIst';
import electorateList from './Components/electorateList';
import singleElection from './Components/singleElection';
import vote from './Components/vote';
import './index'
import './css/paper-dashboard.css'
import './css/demo.css'




class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div >

          <Route path="/admin/election/one/:id" component={singleElection} />
         <Route path="/admin/election/all" component={electionLIst} /> 
          <Route path="/admin/electorate/all" component={electorateList} />
          <Route path="/admin/contestant/all" component={contestantList} />
          <Route path="/signup" component={signup} />
          <Route path="/admin/contestant/new" component={addContestant} />
          <Route path="/admin/voter/new" component={addVoter} />
          <Route path="/admin/election/new" component={addElection} />
          <Route path="/admin/electorate/new" component={addElectorate} />
          <Route path="/adminPanel" component={adminPanel} />
          <Route path="/vote/:electionId" component={vote} />
          <Route path="/dashboard" component={dashboard} />
          <Route path="/login" component={login} />
          {/* <Route path="/voter" component={Voter} />
          <Route path="/contestant" component={Contestant} />
          <Route path="/electorate" component={Electorate} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
