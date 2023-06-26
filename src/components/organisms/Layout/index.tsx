import { ReactNode } from "react";
import { Header } from "~/components/molecules/Header";
import { Navbar } from "~/components/atoms/Navbar";
import { Container, Content, Main } from "./styles";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps): JSX.Element => (
  <Container>
    <Header />
    <Content>
      <Navbar />
      <Main>{children}</Main>
    </Content>
  </Container>
);
