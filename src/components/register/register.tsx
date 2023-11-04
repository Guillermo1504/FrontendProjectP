import { Button, ContentInformation, Form, Input, Span, Title } from "./styled";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Header from "../header/header";
import { useAuth } from "../../context/registerContext";
import { TRegister } from "./types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { signUp, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/profile");
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (values: TRegister | any) => {
    signUp(values);
  };

  const schema = yup.object({
    fullName: yup
      .string()
      .required("El nombre completo es requerido")
      .matches(/^[^\d]+$/, "No se permiten numeros"),
    email: yup
      .string()
      .required("El correo es requerido")
      .matches(/^\S*$/, "No se permiten espacios"),
    password: yup
      .string()
      .required("La contraseña es requerida")
      .min(6, "La longitud minima es de 6 caracteres"),
  });

  const {
    register,
    handleSubmit: sub,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const notification = () => {
    if (Object.keys(errors).length === 0 && "") {
      toast.success("Registrado/a exitosamente");
    } else {
      toast.error("Todos los campos son obligatorios");
    }
  };

  return (
    <>
      <Header />
      <Form onSubmit={sub(handleSubmit)}>
        <ContentInformation>
          <Title>Registrate</Title>
          <Span>Nombre completo</Span>
          <Input
            type="text"
            id="fullName"
            placeholder="Nombre completo"
            {...register("fullName")}
          />
          <p style={{ color: " red", fontFamily: "monospace" }}>
            {errors?.fullName?.message}
          </p>
          <Span>Correo electronico</Span>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email")}
          />
          <p style={{ color: " red", fontFamily: "monospace" }}>
            {errors?.email?.message}
          </p>
          <Span>Contraseña</Span>
          <Input
            type="password"
            id="password"
            {...register("password")}
            placeholder="Contraseña"
          />
          <p style={{ color: " red", fontFamily: "monospace" }}>
            {errors?.password?.message}
          </p>
          <ToastContainer position="top-right" />
          <Button
            type="submit"
            onClick={notification}
          >
            add
          </Button>
        </ContentInformation>
      </Form>
    </>
  );
};

export default Register;
