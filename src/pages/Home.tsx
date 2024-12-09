import LoginLayout from "@/pages/Layouts/LoginLayout";
import { LoginForm } from "@/components/login-form";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Home = () => {
  return (
    <LoginLayout>
      <Button asChild>
        <Link to="login">Login</Link>
      </Button>
    </LoginLayout>
  );
};

export default Home;
