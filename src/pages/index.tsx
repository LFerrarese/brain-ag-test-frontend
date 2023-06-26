import { Dashboard } from "~/components/organisms/Dashboard";
import { withSSRAuth } from "~/hocs/withSSRAuth";

const HomePage = () => <Dashboard />;

export default HomePage;

export const getServerSideProps = withSSRAuth(async () => ({
  props: {},
}));
