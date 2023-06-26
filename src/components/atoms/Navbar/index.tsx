import { useRouter } from "next/router";
import { MdDashboard, MdAnalytics } from "react-icons/md";
import { GiFarmTractor } from "react-icons/gi";
import { Container, Item } from "./styles";

export const Navbar = (): JSX.Element => {
  const { pathname } = useRouter();

  return (
    <Container>
      <Item href="/" className={`${pathname === "/" && "active"}`}>
        <MdDashboard size={24} />
        Dashboard
      </Item>
      <Item href="/farmer" className={`${pathname === "/farmer" && "active"}`}>
        <GiFarmTractor size={24} />
        Agricultores
      </Item>
      <Item
        href="/analytics"
        className={`${pathname === "/analytics" && "active"}`}
      >
        <MdAnalytics size={24} />
        Dados
      </Item>
    </Container>
  );
};
