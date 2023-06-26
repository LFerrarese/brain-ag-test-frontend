import * as yup from "yup";
import { useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import {
  MdOutlineMailOutline,
  MdOutlinePassword,
  MdOutlinePhoneIphone,
  MdPersonOutline,
} from "react-icons/md";
import { useUser } from "~/hooks/useUser";
import { useAlert } from "~/hooks/useAlert";
import { Image } from "~/components/atoms/Image";
import { Form } from "~/components/atoms/Form";
import { Input } from "~/components/atoms/Input";
import {
  Container,
  Content,
  Title,
  FormWrapper,
  Submit,
  Footer,
} from "./styles";
import Link from "next/link";

export const SignUp = (): JSX.Element => {
  const [disabled, setDisabled] = useState<boolean>(false);

  const { register } = useUser();
  const { push } = useRouter();
  const { error } = useAlert();

  const toggleDisabled = () => setDisabled((state) => !state);

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    password: yup.string().required(),
    passwordMatch: yup.string().required(),
  });

  const form = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      passwordMatch: "",
    },
    validationSchema: schema,
    onSubmit: async (data) => {
      toggleDisabled();

      const { passwordMatch, ...user } = data;

      if (user.password !== passwordMatch) {
        toggleDisabled();
        return error("A confirmação de senha está incorreta");
      }

      if (!(await register(user))) {
        toggleDisabled();
        return error("Não foi possível efetuar o cadastro");
      }

      push("/auth/sign-in");
    },
  });

  return (
    <Container>
      <Content>
        <Image
          src="/logo2.png"
          alt="Company logo"
          width="auto"
          height="8rem"
          fit="contain"
        />
        <Title>Cadastre-se</Title>
        <Form onSubmit={form.handleSubmit}>
          <FormWrapper>
            <Input
              label="Nome"
              id="name"
              name="name"
              placeholder="Seu nome"
              onChange={form.handleChange}
              value={form.values.name}
              icon={{
                start: {
                  Icon: MdPersonOutline,
                },
              }}
            />
            <Input
              label="E-mail"
              id="email"
              name="email"
              type="email"
              placeholder="joao@agro.com"
              onChange={form.handleChange}
              value={form.values.email}
              icon={{
                start: {
                  Icon: MdOutlineMailOutline,
                },
              }}
            />
            <Input
              label="Telefone"
              id="phone"
              name="phone"
              placeholder="(00) 9 1234-5678"
              onChange={form.handleChange}
              value={form.values.phone}
              icon={{
                start: {
                  Icon: MdOutlinePhoneIphone,
                },
              }}
            />
            <Input
              label="Senha"
              id="password"
              name="password"
              type="password"
              placeholder="*********"
              onChange={form.handleChange}
              value={form.values.password}
              icon={{
                start: {
                  Icon: MdOutlinePassword,
                },
              }}
            />
            <Input
              label="Confirmação de senha"
              id="passwordMatch"
              name="passwordMatch"
              type="password"
              placeholder="*********"
              onChange={form.handleChange}
              value={form.values.passwordMatch}
              icon={{
                start: {
                  Icon: MdOutlinePassword,
                },
              }}
            />
            <Submit disabled={disabled}>Cadastrar</Submit>
          </FormWrapper>
        </Form>
        <Footer>
          Já possui cadastro?{" "}
          <Link href="/auth/sign-in">
            <strong>Faça login</strong>
          </Link>
        </Footer>
      </Content>
    </Container>
  );
};
