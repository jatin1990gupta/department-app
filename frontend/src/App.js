import "./App.css";
import "antd/dist/antd.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { publicRoutes } from "./routes";

const App = (props) => {
  return (
    <Router>
      <Switch>
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
  );
};

const mapStateToProps = (state) => {
  return {
    idToken: state.auth.token,
  };
};

export default connect(mapStateToProps)(App);
