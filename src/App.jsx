import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LoginPage, MainPage, RegisterPage, UseageHistory } from "./pages";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/history" component={UseageHistory} />
          <Route exact path="/register" component={RegisterPage} />
          <Route path="*" component={MainPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
