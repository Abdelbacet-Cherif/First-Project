import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Feed from './pages/Feed'
import Navbar from './Navbar'
import PrivateRoute from './PrivateRoute'
import './App.css'
import CategoryPets from './pages/CategoryPets'
import Profile from './pages/Profile'
import DetailsPost from './pages/DetailsPost'
import Footer from './Footer'
import ScrollToTop from './components/ScrollToTop'
import Scroll from './components/Scroll'

function App() {
  return (
    <div className="App">
      <Router>
        <Scroll showBelow={250} />
        <ScrollToTop />
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/feed" component={Feed} />
          <Route path="/category/:id" component={CategoryPets} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <Route path="/details/:id" component={DetailsPost} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
