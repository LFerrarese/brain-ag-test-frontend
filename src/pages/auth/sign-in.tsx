import { SignIn } from "~/components/organisms/SignIn";
import { withSSRGuest } from "~/hocs/withSSRGuest";

const SignInPage = (): JSX.Element => <SignIn />;

export default SignInPage;

export const getServerSideProps = withSSRGuest(async () => ({ props: {} }));
