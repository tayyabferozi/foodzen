import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "pages/Home/Home";
import BaseSearch from "pages/BaseSearch/BaseSearch";
import SearchPage from "pages/SearchPage/SearchPage";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/:id/:name" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/base-search" component={BaseSearch} />
          <Route exact path="/search-page" component={SearchPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
