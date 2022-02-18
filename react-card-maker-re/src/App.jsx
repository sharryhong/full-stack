import "./App.css";
import Login from "components/login/Login";

function App({ authService }) {
  return <Login authService={authService} />;
}

export default App;
