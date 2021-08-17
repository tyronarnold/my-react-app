import React from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import Blog from './components/Blog';
import NotFound from './components/NotFound';
import SingleBlog from './components/SingleBlog';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
    return (
        <Router>
            <div className="App" >
                <Nav />
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/my-react-app" exact component={Main} />
                    <Route path="/blog" exact component={Blog} />
                    <Route path="/blog/:id" component={SingleBlog} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
