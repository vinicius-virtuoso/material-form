import { useHistory } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { Button } from "@mui/material";
import SignUp from "./components/SingUp/SingUp";
import User from "./components/User";

const Routes = ({ data, setData }) => {
  const history = useHistory();
  return (
    <Switch>
      <Route exact path="/">
        <SignUp setData={setData} />
      </Route>
      <Route exact path="/user/:id">
        <User data={data} />
      </Route>
      <Route exact path="/*">
        <h1>Pagina não encontrada</h1>
        <Button
          className="btn"
          color="secondary"
          variant="contained"
          onClick={() => history.push("/")}
        >
          Voltar
        </Button>
      </Route>
    </Switch>
  );
};

export default Routes;
