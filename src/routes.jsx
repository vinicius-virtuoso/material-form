import { Switch, Route } from "react-router-dom";
import SignUp from "./components/SingUp/SingUp";
import User from "./components/User";
import NotFound from "./components/NotFound";

const Routes = ({ data, setData }) => {
  console.log(data);
  return (
    <Switch>
      <Route exact path="/">
        <SignUp setData={setData} />
      </Route>

      {data && data?.name ? (
        <Route exact path="/user/:id">
          <User data={data} />
        </Route>
      ) : (
        <Route exact path="/*">
          <NotFound />
        </Route>
      )}
    </Switch>
  );
};

export default Routes;
