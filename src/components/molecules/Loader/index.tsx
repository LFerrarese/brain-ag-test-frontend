import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Modal } from "~/components/atoms/Modal";
import { Container, Spinner, Description } from "./styles";

export const Loader = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const startLoading = () => setIsLoading(true);
    const endLoading = () => setIsLoading(false);
    router.events.on("routeChangeStart", startLoading);
    router.events.on("routeChangeComplete", endLoading);
    return () => {
      router.events.off("routeChangeStart", startLoading);
    };
  }, [router.events]);

  if (isLoading) {
    return (
      <Modal opened={isLoading} custompagechange>
        <Container>
          <Spinner />
          <Description>Carregando, aguarde...</Description>
        </Container>
      </Modal>
    );
  }

  return <></>;
};
