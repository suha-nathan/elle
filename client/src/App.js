import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Layout from './components/Layout'
import Login from './components/Login';
import Signup from './components/Signup'
import CourseList from './components/CourseList'
import ChatPage from './components/ChatPage'


function App() {
  return (
    <div>
      <Router>
        <Switch> 
          <Route exact path="/login" >
            <Login/>
          </Route>

          <Route exact path="/signup" >
            <Signup/>
          </Route>

          <Route exact path="/dashboard" >
            <Layout> 
            <h3 className="header-text" >Dashboard</h3>
      
              <Dashboard/>

            </Layout>
          </Route>

          <Route exact path="/my-courses" >
          <Layout> 
            <h3 className="header-text" >My Courses</h3>
              <CourseList/>
          </Layout>
          </Route>

          <Route path="/my-courses/:id" >
            <Layout> 
              <h3>test</h3>
            </Layout>
          </Route>

          <Route path="/chat" >
          <Layout> 
            <h3>Chat</h3>
            <ChatPage/>
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
              smth wrong
            </Layout>
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
