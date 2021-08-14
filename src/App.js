import React from 'react';
import './App.css';
import Navbar from './components/SidbarNabar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/main/Dashboard';
import Employee from './components/main/Employee';
import Management from './components/main/Management';
import Footer from './components/Footer/Footer';
import Project from './components/main/Project'
import Support from './components/main/Support'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/Employee' component={Employee} />
          <Route path='/Management' component={Management} />
          <Route path='/Project' component={Project} />
          <Route path='/Support' component={Support} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;