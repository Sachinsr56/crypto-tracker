import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import CoinPage from "./Pages/CoinPage";
import { makeStyles } from '@material-ui/core/styles';
import "./App.css";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
  },
});


function App() {

  const classes = useStyles();

  return (
     <div className={classes.root} > 
    <Router>

        <Header />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/coins/:id" exact element={<CoinPage />} />
        </Routes>
      
    </Router>
     </div> 
  );
}

export default App;
