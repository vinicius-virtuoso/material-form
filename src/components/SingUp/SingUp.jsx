import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Box } from "@mui/system";

import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  CircularProgress,
} from "@mui/material";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import "./style.css";

function SignUp({ setData }) {
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const formSchema = yup.object().shape({
    checkInput: yup
      .string()
      .required("Aceite os termos de uso para prosseguir")
      .matches("true", "Aceite os termos de uso para prosseguir"),
    userName: yup.string().required("Nome de usuário obrigatório!"),
    name: yup.string().required("Nome completo obrigatório!"),

    email: yup.string().required("Email obrigatório*").email("Email invalido"),
    confirmEmail: yup
      .string()
      .required("Confirmação é obrigatório!")
      .oneOf([yup.ref("email"), null], "Email diferente!"),
    password: yup
      .string()
      .required("Senha é obrigatório!")
      .matches(
        /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/gm,
        "Sua senha precisa ter: 8 caracteres, 1 letra maiúscula, 1 digito, 1 símbolo: $*&@#"
      ),
    confirmPassword: yup
      .string()
      .required("Confirmação é obrigatório!")
      .oneOf([yup.ref("password"), null], "As precisam ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submitForm = (data) => {
    setData(data);
    setLoading(true);
    setTimeout(() => {
      history.push(`user/${data.userName}`);
      setLoading(false);
    }, 1000);
  };

  return (
    <form className="form-box" onSubmit={handleSubmit(submitForm)}>
      <h2 className="title">Crie sua conta!</h2>
      <Box className="input-group">
        <TextField
          className="b-white"
          fullWidth
          id="username"
          label="Nome de usuário*"
          variant="outlined"
          {...register("userName")}
          error={errors.userName && true}
          helperText={errors.userName && errors.userName.message}
        />
        <TextField
          className="b-white"
          fullWidth
          id="setFullNameUser"
          label="Nome completo*"
          variant="outlined"
          {...register("name")}
          error={errors.name && true}
          helperText={errors.name && errors.name.message}
        />
      </Box>
      <Box className="input-group">
        <TextField
          className="b-white"
          fullWidth
          id="email"
          label="Endereço de Email*"
          variant="outlined"
          {...register("email")}
          error={errors.email && true}
          helperText={errors.email?.message}
        />
        <TextField
          className="b-white"
          fullWidth
          id="confirmEmail"
          label="Confirme seu Email*"
          variant="outlined"
          {...register("confirmEmail")}
          error={errors.confirmEmail && true}
          helperText={errors.confirmEmail?.message}
        />
      </Box>
      <Box className="input-group flex-group">
        <TextField
          className="b-white"
          id="password"
          label="Senha*"
          variant="outlined"
          type="password"
          {...register("password")}
          error={errors.password && true}
          helperText={errors.password?.message}
        />
        <TextField
          className="b-white"
          id="confirmPassword"
          label="Confirme sua senha*"
          variant="outlined"
          type="password"
          {...register("confirmPassword")}
          error={errors.confirmPassword && true}
          helperText={errors.confirmPassword?.message}
        />
      </Box>
      <Box>
        <FormControlLabel
          className="j-c"
          control={
            <>
              <Checkbox
                color="primary"
                id="checkInput"
                {...register("checkInput")}
              />
            </>
          }
          label="Eu aceito os termos de uso da aplicação."
        />
        <small className="error-small">{errors.checkInput?.message}</small>
      </Box>

      {loading ? (
        <Button className="btn" variant="contained" disabled type="submit">
          <CircularProgress color="inherit" />
        </Button>
      ) : (
        <Button className="btn" variant="contained" type="submit">
          Cadastrar
        </Button>
      )}
      <Link href="#" variant="body4">
        Já possui uma conta?
      </Link>
    </form>
  );
}

export default SignUp;
