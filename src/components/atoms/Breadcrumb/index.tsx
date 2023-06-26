import { useRouter } from "next/router";
import data from "./data.json";
import { Text } from "./styles";

export const Breadcrumb = (): JSX.Element => {
  const { pathname } = useRouter();

  const getBreadcrumbName = () => {
    if (pathname === data.dashboard) {
      return "Dashboard";
    }

    const route = Object.keys(data.routes)
      .filter((routePath) => pathname.includes(routePath))
      .toString();

    const method = Object.keys(data.methods)
      .filter((routePath) => pathname.includes(routePath))
      .toString();

    const breadcrumb = [route, method];

    return breadcrumb.join(" - ");
  };

  return <Text>{getBreadcrumbName()}</Text>;
};
