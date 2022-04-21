import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";

const NotFound = () => {
  const history = useHistory();
  return (
    <div>
      <h2 className="title">Pagina não encontrada</h2>
      <h3 className="g-title">404</h3>
      <Button
        className="btn"
        variant="contained"
        onClick={() => history.push("/")}
      >
        Voltar
      </Button>
    </div>
  );
};

export default NotFound;
