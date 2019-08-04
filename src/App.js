import React from 'react';

//react-router
import { Switch, Route } from 'react-router-dom';

//pages
import Users from './pages/Users';
import Announcements from './pages/Announcements';
import Guardians from './pages/Guardians';
import Login from './pages/Login';
import Register from './pages/Register';
import Messages from './pages/Messages';
import Students from './pages/Students';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/404';
import AttendanceMonitoring from './pages/AttendanceMonitoring';
import StudentProvider from './store/StudentProvider';

//components


function App() {
  return (
    <StudentProvider>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/attendance" component={AttendanceMonitoring} />
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/users" component={Users}/>
          <Route path="/announcements" component={Announcements}/>
          <Route path="/guardians" component={Guardians}/>
          <Route path="/students" component={Students}/>
          <Route path="/messages" component={Messages}/>
          <Route path="" component={NotFound}/>
        </Switch>
      </div>
    </StudentProvider>
  );
}

export default App;
