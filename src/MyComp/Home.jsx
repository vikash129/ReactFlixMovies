import React from 'react'

import { Header } from './Header'
import { Footer } from './Footer'
import { Featured } from './Featured'
import { List } from './List'
import { Watch } from './Watch'
import { Register } from './Resgister'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { SignIn } from './SignIn'

const Home = () => {
    return (
        <div className='home'>


            <Router>

                <Header />
                <Switch>
                    <Route exact path='/' >  <Register />   </Route>

                    <Route path='/signIn'>  <SignIn />   </Route>

                    <Route path='/home'>
                        <Featured type={'movies'} />
                        <List />
                        <List />
                    </Route>

                    <Route path='/watch'> <Watch /></Route>
                </Switch>
<Footer/>
            </Router>



        </div>
    )
}
export default Home