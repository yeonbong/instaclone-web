import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Route path="/">
          <h1>Home</h1>
        </Route>
      </Router>
    </div>
  );
}

export default App;
