import { RegisterHeader, FormRegister } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  const registerSchema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .min(2, "Mínimo de 2 caracteres")
      .max(100, "Máximo de 100 caracteres"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(/(?=.*?[A-Z])/, "Insira pelo menos uma letra maiúscula.")
      .matches(/(?=.*?[a-z])/, "Insira pelo menos uma letra minúscula.")
      .matches(/(?=.*?[0-9])/, "Insira pelo menos um número.")
      .matches(
        /(?=.*?[#?!@$%^&*-])/,
        "Insira pelo menos um caractere especial."
      )
      .min(6, "A senha deve conter no mínimo 6 caracteres."),
    passwordConfirm: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "A senha deve ser igual."),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    async function registerNewUser() {
      try {
        const response = await api.post("/users", data);

        navigate("/");
      } catch (error) {
        console.error(error);
      }
    }

    registerNewUser();
  };

  return (
    <>
      <RegisterHeader>
        <h3>Kenzie Hub</h3>
        <div>
          <Link to="/">Voltar</Link>
        </div>
      </RegisterHeader>
      <FormRegister onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <p>Crie sua conta</p>
          <small>Rápido e grátis, vamos nessa:</small>
        </div>

        <label>Nome</label>
        <input
          type="text"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        {errors.name?.message && <p>{errors.name.message}</p>}
        <label>Email</label>
        <input
          type="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        {errors.email?.message && <p>{errors.email.message}</p>}
        <label>Senha</label>
        <input
          type="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        {errors.password?.message && <p>{errors.password.message}</p>}
        <label>Confirmar Senha</label>
        <input
          type="password"
          placeholder="Confirme sua senha"
          {...register("passwordConfirm")}
        />
        {errors.passwordConfirm?.message && (
          <p>{errors.passwordConfirm.message}</p>
        )}
        <label>Bio</label>
        <input type="text" placeholder="Fale sobre você" {...register("bio")} />
        {errors.bio?.message && <p>{errors.bio.message}</p>}
        <label>Contato</label>
        <input
          type="text"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        {errors.contact?.message && <p>{errors.contact.message}</p>}
        <label>Selecionar módulo</label>
        <select name="módulo" {...register("course_module")}>
          <option value="">Selecionar...</option>
          <option value="Primeiro módulo">Primeiro módulo</option>
          <option value="Segundo módulo">Segundo módulo</option>
          <option value="Terceiro módulo">Terceiro módulo</option>
          <option value="Quarto módulo">Quarto módulo</option>
          <option value="Quinto módulo">Quinto módulo</option>
          <option value="Sexto módulo">Sexto módulo</option>
        </select>
        {errors.course_module?.message && <p>{errors.course_module.message}</p>}

        <button>Cadastrar</button>
      </FormRegister>
    </>
  );
};
