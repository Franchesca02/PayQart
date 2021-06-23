import './App.css';
import Home from "./pages/home";
import Payment from "./pages/payment";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
<Switch>
  <Route path="/payment" component={Payment} />
  <Route path="/" exact component={Home} />
</Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
