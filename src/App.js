import './App.css';
import Signup from './components/Signup'
import Login from './components/Login'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';
import Feed from './components/Feed';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/" component={Feed}/>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
