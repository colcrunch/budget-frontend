import LoginLayout from "@/pages/Layouts/LoginLayout";
import { LoginForm } from "@/components/login-form";

import { axiosUnauth } from "@/axiosConfig";

const Login = () => {

  return (
    <LoginLayout>
      <LoginForm />
    </LoginLayout>
  );
};

export default Login;
