import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Overlay, Content } from "./styles";

type ModalProps = {
  opened: boolean;
  custompagechange?: boolean;
  onClose?: () => void;
  children?: ReactNode;
};

type ModalComponent = (props: ModalProps) => JSX.Element;

const Component: ModalComponent = ({
  opened,
  custompagechange,
  onClose,
  children,
}) => {
  const contentRef = useRef();

  useEffect(() => {
    const checkClickOutside = (event: MouseEvent) => {
      //@ts-ignore
      if (contentRef.current && !contentRef.current.contains(event.target)) {
        if (opened && onClose) {
          onClose();
        }
      }
    };

    const escKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose && onClose();
      }
    };

    document.addEventListener("keydown", escKeyPress);
    document.addEventListener("click", checkClickOutside);
    return () => {
      document.removeEventListener("keydown", escKeyPress);
      document.removeEventListener("click", checkClickOutside);
    };
  }, [onClose, opened]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <Overlay
      className={`${opened && "opened"} ${custompagechange && "loader"}`}
    >
      <Content>{children}</Content>
    </Overlay>
  );
};

export const Modal = (props: ModalProps) =>
  typeof window === "object" && props.opened ? (
    createPortal(
      <Component {...props} />,
      document.getElementById("portal-target") as Element
    )
  ) : (
    <></>
  );
