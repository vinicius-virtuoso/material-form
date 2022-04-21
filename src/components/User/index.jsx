import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

import "./style.css";

const User = ({ data }) => {
  const history = useHistory();

  const {
    userName,
    name,
    email,
    confirmEmail,
    password,
    confirmPassword,
    checkInput,
  } = data;

  return (
    <div className="card-user">
      <div className="infos-container"></div>
      <div className="card-info">
        <p>Nome de usuário:</p>
        <span> {userName}</span>
      </div>
      <div className="card-info">
        <p>Nome de Completo:</p>
        <span>{name}</span>
      </div>
      <div className="card-info">
        <p>Email:</p>
        <span>{email}</span>
      </div>
      <div className="card-info">
        <p>Confirmação de Email:</p>
        <span>{confirmEmail}</span>
      </div>
      <div className="card-info">
        <p>Senha:</p>
        <span>{password}</span>
      </div>
      <div className="card-info">
        <p>Confirmação de Senha:</p>
        <span>{confirmPassword}</span>
      </div>

      <div className="card-info">
        <p>Aceitou os termos:</p>
        <span>{checkInput ? "Sim" : "Não"}</span>
      </div>

      <div className="card-button">
        <Button
          className="btn"
          variant="contained"
          onClick={() => history.push("/")}
        >
          Voltar
        </Button>
      </div>
    </div>
  );
};

export default User;
