import {BrowserRouter, Route, Switch} from 'react-router-dom';
import routes from './config/routes'
import './App.scss';
import AuthProvider from './Providers/AuthProvider';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
        {
          routes.map((ruta, index) => (
            <RouteWithSubRoutes key={index} {...ruta} />
          ))
        }
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

function RouteWithSubRoutes(rou) {
  return (
    <Route
      path={rou.path}
      exact= {rou.exact}
      render={props => <rou.component routes={rou.routes} {...props} />}
    />
  )
}

export default App;
