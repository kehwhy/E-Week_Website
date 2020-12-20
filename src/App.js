import { ThemeProvider } from 'evergreen-ui'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { appTheme } from './Theme'
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home'
import AboutEvent from './components/AboutEvent/AboutEvent'
import Sponsors from './components/Sponsors/Sponsors';

export default function App() {

  console.log(appTheme)
  
  return (
    <Router>
      <ThemeProvider value={appTheme}>
      <div>
        <Header className="header"/>
        <Switch>
          <Route path="/E-Week-2021">
            <AboutEvent/>
          </Route>
          <Route path="/Our-Sponsors">
            <Sponsors/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
      </ThemeProvider>
    </Router>
  );
}
