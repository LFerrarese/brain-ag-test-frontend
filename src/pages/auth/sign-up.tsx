import { SignUp } from "~/components/organisms/SignUp";
import { withSSRGuest } from "~/hocs/withSSRGuest";

const SignUpPage = (): JSX.Element => <SignUp />;

export default SignUpPage;

export const getServerSideProps = withSSRGuest(async () => ({ props: {} }));
