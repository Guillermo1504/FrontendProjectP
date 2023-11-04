import { yupResolver } from "@hookform/resolvers/yup";
import { Form, ContentInformation, Input, Span, Title, Button } from "./styled";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Header from "../header/header";

const Login = () => {
  interface TLogin {
    email: string;
    password: string;
  }

  const handleSubmit = (values: TLogin) => {
    console.log("😂😂😂");
    console.log(values);
  };

  const schema = yup.object({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit: sub,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <>
      <Header />
      <Form onSubmit={sub(handleSubmit)}>
        <ContentInformation>
          <Title>Login</Title>
          <Span>Correo electronico</Span>
          <Input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Email"
          />
          <p style={{ color: " red", fontFamily: "monospace" }}>
            {errors.email?.message}
          </p>
          <Span>Contraseña</Span>
          <Input
            type="password"
            id="password"
            {...register("password")}
            placeholder="Contraseña"
          />
          <p style={{ color: " red", fontFamily: "monospace" }}>
            {errors.password?.message}
          </p>
          <Button type="submit">
            <Span>login</Span>
          </Button>
        </ContentInformation>
      </Form>
    </>
  );
};

export default Login;
