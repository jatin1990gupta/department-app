import "antd/dist/antd.css";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { protectedRoutes, publicRoutes } from "./routes";
import { setCurrentUser } from "./store/features/auth";

const App = () => {
  const dispatch = useDispatch();

  if (localStorage.userInfo || sessionStorage.userInfo) {
    dispatch(setCurrentUser());
  }

  return (
    <div className="app">
      <Router>
        <Switch>
          {protectedRoutes.map((routes, idx) => (
            <ProtectedRoutes
              key={idx}
              path={routes.path}
              exact={!!routes.exact}
              component={routes.component}
            />
          ))}

          {publicRoutes.map((routes, idx) => {
            return (
              <Route
                key={idx}
                path={routes.path}
                exact={routes.exact}
                component={routes.component}
              />
            );
          })}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
