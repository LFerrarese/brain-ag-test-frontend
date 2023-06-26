import { useState } from "react";
import { MdOutlinePostAdd } from "react-icons/md";
import { Image } from "~/components/atoms/Image";
import { Breadcrumb } from "~/components/atoms/Breadcrumb";
import { Button } from "~/components/atoms/Button";
import { ThemeSwitcher } from "~/components/atoms/ThemeSwitcher";
import { Modal } from "~/components/atoms/Modal";
import { FarmerForm } from "~/components/molecules/FarmerForm";
import { Container, Content, Actions } from "./styles";

export const Header = (): JSX.Element => {
  const [farmerModalOpened, setFarmerModalOpened] = useState<boolean>(false);

  const toggleModal = () => setFarmerModalOpened((state) => !state);

  return (
    <Container>
      <Image
        src="/logo2.png"
        alt="Company logo"
        width="auto"
        height="auto"
        fit="contain"
      />
      <Content>
        <Breadcrumb />
        <Actions>
          <ThemeSwitcher />
          <Button onClick={toggleModal}>
            Cadastrar Agricultor
            <MdOutlinePostAdd size={30} />
          </Button>
        </Actions>
      </Content>

      <Modal opened={farmerModalOpened} onClose={toggleModal}>
        <FarmerForm onSubmit={toggleModal} />
      </Modal>
    </Container>
  );
};
