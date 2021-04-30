import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Code from './components/Code'
import Contact from './components/Contact'
import Photos from './components/Photos'

export default (
    <Switch>
        <Route exact path ='/' component={Home}/>
        <Route path='/code' component={Code}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/photos' component={Photos}/>
    </Switch>
)