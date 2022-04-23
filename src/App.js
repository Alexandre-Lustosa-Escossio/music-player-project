import { Route, Switch } from 'react-router-dom';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import Search from './pages/Search'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import Album from './pages/Album'
import AlbumDetails from './pages/AlbumDetails'

function App() {
  return (
      <Switch>
        <Route exact path={"/"} component={Login} />
        <Route exact path={'/favorites/'} component={Favorites} />
        <Route exact path={"/search"} component={Search}/>
        <Route exact path={'/profile'} component={Profile}/>
        <Route exact path={'/album'} component={Album}/>
        <Route exact path={'/album/:id'} component={AlbumDetails}/>
        <Route exact path={'/profile/edit'} />
        <Route exact path={'*'} component={NotFound}/>
      </Switch>
  );
}

export default App;
