import { AlertCircle, X } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { axiosUnauth } from "@/axiosConfig";
import { AxiosError } from "axios";
import React from "react";

const LoginForm = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState("");
  const [isVisible, setIsVisible] = React.useState(false);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value);
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axiosUnauth.post("/auth/token/obtain/", {
        username,
        password,
      });
      console.log("Login Data: ", response.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        const err: AxiosError = error;
        if (err.status === 401) {
          setErrorMsg("Invalid username or password.");
          setIsVisible(true);
        }
      }
      console.log("Login Error: ", error);
    }
  };

  return (
    <>
      {errorMsg && isVisible && (
        <Alert variant="danger" className="absolute top-5 justify-center w-1/4">
          <a
            className="absolute top-1 right-1"
            onClick={() => setIsVisible(false)}
          >
            <X className="w-4" />
          </a>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{errorMsg}.</AlertDescription>
        </Alert>
      )}
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your username below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Username</Label>
                <Input
                  id="username"
                  placeholder="username"
                  required
                  onChange={handleUsernameChange}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  onChange={handlePasswordChange}
                />
              </div>
              <Button variant="secondary" type="submit" className="w-full">
                Login
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="underline">
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export { LoginForm };
