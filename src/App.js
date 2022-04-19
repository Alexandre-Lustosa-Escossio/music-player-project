import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import Search from './pages/Search'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import Album from './pages/Album'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} component={Login}></Route>
        <Route path={'/favorites/'} component={Favorites}></Route>
        <Route path={'/search'} component={Search}></Route>
        <Route path={'/profile'} component={Profile}></Route>
        <Route path={'*'} component={NotFound}></Route>
        <Route path={'/profile/edit'} ></Route>
        <Route path={'/album'} component={Album}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
