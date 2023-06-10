import { LoginBox, FormLogin, LoginLogo } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const LoginPage = () => {
  const loginSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { onSubmit } = useContext(AuthContext);

  return (
    <>
      <LoginLogo>Kenzie Hub</LoginLogo>
      <LoginBox>
        <FormLogin onSubmit={handleSubmit(onSubmit)} noValidate>
          <p>Login</p>
          <label>Email</label>
          <input type="email" {...register("email")} />
          {errors.email?.message && <p>{errors.email.message}</p>}
          <label>Senha</label>
          <input type="password" {...register("password")} />
          {errors.password?.message && <p>{errors.password.message}</p>}
          <button type="submit">Entrar</button>
        </FormLogin>

        <div className="LoginBottomBox">
          <small>Ainda não possui uma conta?</small>
          <div className="loginBoxLink">
            <Link to="/register">Cadastre-se</Link>
          </div>
        </div>
      </LoginBox>
    </>
  );
};
