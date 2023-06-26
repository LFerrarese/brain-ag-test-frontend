import * as yup from "yup";
import { useFormik } from "formik";
import { MdOutlineMailOutline, MdOutlinePassword } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";
import { useUser } from "~/hooks/useUser";
import { Image } from "~/components/atoms/Image";
import { Form } from "~/components/atoms/Form";
import { Input } from "~/components/atoms/Input";
import {
  Container,
  Content,
  Title,
  Subtitle,
  FormWrapper,
  Submit,
  Footer,
  Register,
  SubmitWrapper,
} from "./styles";

export const SignIn = (): JSX.Element => {
  const { authenticate } = useUser();
  const { push } = useRouter();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async (data) => {
      if (await authenticate(data)) {
        push("/");
      }
    },
  });

  return (
    <Container>
      <Content>
        <Image
          src="/logo2.png"
          alt="Company logo"
          width="auto"
          height="10rem"
          fit="contain"
        />
        <Title>Bem-vindo!</Title>
        <Subtitle>Faça login com suas credenciais</Subtitle>
        <Form onSubmit={form.handleSubmit}>
          <FormWrapper>
            <Input
              type="email"
              label="E-mail"
              id="email"
              name="email"
              onChange={form.handleChange}
              placeholder="joao@agro.com"
              value={form.values.email}
              icon={{
                start: {
                  Icon: MdOutlineMailOutline,
                },
              }}
            />
            <Input
              type="password"
              label="Senha"
              id="password"
              name="password"
              onChange={form.handleChange}
              placeholder="Senha muito segura"
              value={form.values.password}
              icon={{
                start: {
                  Icon: MdOutlinePassword,
                },
              }}
            />
            <SubmitWrapper>
              <Submit>Login</Submit>
              <Link href="/auth/recover/verify">Recuperar senha</Link>
            </SubmitWrapper>
          </FormWrapper>
        </Form>
        <Footer>
          <Register>
            Não possui cadastro?{" "}
            <Link href="/auth/sign-up">Crie uma conta</Link>
          </Register>
        </Footer>
      </Content>
    </Container>
  );
};
