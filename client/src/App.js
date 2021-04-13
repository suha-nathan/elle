import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Layout from './components/Layout'

function App() {
  return (
    <div>
      <Router>
        <Switch> 
          <Route path="/login" >

          </Route>

          <Route path="/signup" >
            
          </Route>

          <Route path="/dashboard" >
            <Layout> 
            <h3>Dashboard</h3>
      
              <Dashboard/>

            </Layout>
          </Route>

          <Route path="/my-courses" >
          <Layout> 
            <h3>My courses</h3>
  
            </Layout>
          </Route>

          <Route path="/chat" >
          <Layout> 
            <h3>Chat</h3>
          </Layout>

          </Route>

          <Route path="/games" >
            <Layout> 
              <h3>Games</h3>
            </Layout>

          </Route>

          <Route path="/my-profile" >
          <Layout> 
            <h3>My Profile</h3>
          </Layout>
          </Route>

          <Route path="/settings" >
          <Layout> 
            <h3>Settings</h3>
          </Layout>
            
          </Route>

          <Route>
            <Layout>
              
            </Layout>
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
