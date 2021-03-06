import { React, useState, useEffect } from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Alert } from "react-bootstrap"
import axios from "axios"
import Dashboard from './components/Dashboard';
import Layout from './components/Layout'
import Login from './components/Login';
import Signup from './components/Signup'
import CourseList from './components/CourseList'
import CourseHome from './components/CourseHome'
import ChatPage from './components/ChatPage'
import CreateCourse from './components/CreateCourse'
import SubCourseList from './components/SubCourseList'
import CourseStart from './components/CourseStart'
import Chat from './components/Chat'

function App() {
  const [isSignedUp, setSignedUp] = useState(false)
    const [isAuth, setAuth] = useState(false)
    
    const [user, setUser] = useState({})
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [userCourseData, setUserCourseData] = useState([])
    const [ allCourseData, setAllCourseData ] = useState([])
    const [currentCourse, setCurrentCourse ] = useState({})

    useEffect(()=>{
      loadUser()
      loadAllCourseData()
    },[])

    useEffect(()=>{
      window.scrollTo(0,0)
    }, [successMessage, errorMessage])

    async function loadAllCourseData() {
        try {
            let res = await axios.get('/course')
            console.log(res.data.data)
            setAllCourseData(res.data.data)
        } catch (e) {
            console.log("error loading course data")
        }

    }
    async function login(values) {
        try{
            let res = await axios.post("/account/login", values)
            localStorage.setItem("token",res.data.token)
            setAuth(true)
            console.log(res.data.user)
            setUser(res.data.user)  
            loadUser() 
            setSuccessMessage("Login success")
            setTimeout(() => {
              setSuccessMessage("")
          }, 4000)
            
        }catch(e){
            setErrorMessage("cannot login")
            setTimeout(() => {
                setErrorMessage("")
            }, 4000)
        }
    }

    async function signUp(userInfo) {
        try{
            let res = await axios.post("/account/signup", userInfo)
            localStorage.setItem("token",res.data.token)
            setAuth(true)
            setUser(res.data.user) 
            loadUser()
            setSuccessMessage("signup success")
            setTimeout(() => {
                setSuccessMessage("")
            }, 4000)
            localStorage.setItem("token",res.data.token)
        }catch(e){
            // console.log(e.response.data.message)
            setErrorMessage("Sign up failure, please try again")
            setTimeout(() => {
                setErrorMessage("")
            }, 4000)
        }
    }

    async function loadUser() {
      try{
        const token = localStorage.getItem('token');
        if (token) {
            axios.defaults.headers.common['Authorization'] = "Bearer " + token;
        }
            let res = await axios.get(`/user/${user._id}`)
            setAuth(true)
            console.log(user)
            console.log("loading user ", user._id)
            setUser(res.data.user)
        }catch(e){
            // setErrorMessage(e.response.data.message)
            console.log("error loading user", user._id)
            setAuth(false)
            localStorage.removeItem("token")
        }
    }

    function logOut() {
      console.log("loggin out")
        setAuth(false)
        localStorage.removeItem("token")
    }
    
  console.log(user)
  console.log(isAuth)
  return (
    <div>
      {errorMessage && <Alert variant="danger" className="error-alert">{errorMessage}</Alert>}
      {successMessage && <Alert variant="success" className="error-alert">{successMessage}</Alert>}
      <Router>
        <Switch> 
          <Route exact path="/login" >
            <Login isAuth={isAuth} login={login} />
          </Route>

          <Route exact path="/signup" >
            <Signup isAuth={isAuth} signUp={signUp} />
          </Route>

          <Route exact path="/dashboard" >
            {isAuth ? 
              <Layout logOut={logOut} user={user}> 
                <h3 className="header-text" >Dashboard</h3>
                <Dashboard user={user} isAuth={isAuth} />
              </Layout>
              :
              <Redirect to="/login"/>            
            }
          </Route>

          <Route exact path="/my-courses" >
            {isAuth ?
              <Layout logOut={logOut} user={user} > 
              <h3 className="header-text" >My Courses</h3>
                <CourseList user={user} loadUser={loadUser} setSuccessMessage={setSuccessMessage} />
              </Layout>
              :
              <Redirect to="/login"/>
              }          
          </Route>

          <Route exact path="/subscribe" >
            {isAuth ?
              <Layout logOut={logOut} user={user} > 
              <h3 className="header-text" >subscribe to courses</h3>
                <SubCourseList allCourseData={allCourseData} user={user} setSuccessMessage= {setSuccessMessage} loadUser={loadUser}/>
              </Layout>
              :
              <Redirect to="/login"/>
              }          
          </Route>

          <Route exact path="/my-courses/:id" >
            {isAuth ?
              <Layout logOut={logOut} user={user} > 
                <CourseHome currentCourse={currentCourse} setCurrentCourse={setCurrentCourse} />
              </Layout>
              :
              <Redirect to="/login"/>
            } 
          </Route>
          <Route exact path="/my-courses/:id/:title" >
          {isAuth ?
              <Layout logOut={logOut} user={user} > 
              <p>Course Content</p>
              <CourseStart currentCourse={currentCourse}/>
            </Layout>
              :
              <Redirect to="/login"/>
            } 
          </Route>

          <Route path="/create-course" >
          {isAuth ?
            <Layout logOut={logOut} user={user} > 
              <h3>Create Course</h3>
              <CreateCourse setSuccessMessage={setSuccessMessage} setErrorMessage={setErrorMessage} />
            </Layout>    
            :
            <Redirect to="/login"/>
          } 
          </Route>

          <Route path="/chat" >
          {isAuth ?
            <Layout logOut={logOut} user={user} > 
              <h3>Chat</h3>
              <Chat/>
            </Layout> 
            :
            <Redirect to="/login"/>
          }
          </Route>

          <Route path="/games" >
            {isAuth ?
              <Layout logOut={logOut} user={user} > 
              <h3>Games</h3>
              </Layout>
              :
              <Redirect to="/login"/>
            }
          </Route>

          <Route path="/my-profile" >
            {isAuth ?
              <Layout logOut={logOut} user={user} > 
              <h3>My Profile</h3>
            </Layout>
              :
              <Redirect to="/login"/>
            }
          </Route>

          <Route path="/settings" >
            {isAuth ?
              <Layout logOut={logOut} user={user} > 
              <h3>Settings</h3>
              </Layout> 
              :
              <Redirect to="/login"/>
            }
          </Route>

          <Route>
          {isAuth ?
              <Layout logOut={logOut} user={user} >
              smth wrong
              </Layout>
              :
              <Redirect to="/login"/>
            }
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
