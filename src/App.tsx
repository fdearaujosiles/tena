import styles from './App.module.scss';
import React from 'react';
import Home from './components/Home/Home';
import Water from './components/Water/Water';
import Finances from './components/Finances/Finances';

import { Button, CssBaseline } from '@nextui-org/react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

const App: React.FC = () => {

    return <Router>
        <CssBaseline></CssBaseline>
        <nav className={styles.Nav}>
            <span className={styles.Title} >Tena</span>
            <div className={styles.Links} >
                <Link className={styles.Link} to="/">Home</Link>
                <Link className={styles.Link} to="/water">Health</Link>
                <Link className={styles.Link} to="/finances">Finances</Link>
            </div>
        </nav>
        <div className={styles.Content} >
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/water" component={Water} />
                <Route exact path="/finances" component={Finances} />
            </Switch>
        </div>
    </Router>
}

export default App;
