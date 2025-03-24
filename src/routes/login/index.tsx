import { AuthPage, ThemedTitleV2 } from "@refinedev/antd";
import { useLogin } from "@refinedev/core";
import { Button, Image } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import LoginImage from "../../../public/login.jpeg";

export const authCredentials = {
  email: "michael.scott@dundermifflin.com",
  password: "demodemo",
};

export const LoginPage = () => {
  const { mutate: login } = useLogin();

  const handleGoogleLogin = () => {
    login({ provider: "google" });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        height: "100vh",
      }}
    >
      <div style={{ flex: 1 }}>
        <img
          src={LoginImage}
          alt="Login Image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <AuthPage
        type="login"
        registerLink={false}
        forgotPasswordLink={true}
        renderContent={(content) => (
          <div style={{ width: "100%", textAlign: "center" }}>
            <Button
              type="default"
              icon={<GoogleOutlined />}
              onClick={handleGoogleLogin}
              style={{ marginBottom: 16 }}
            >
              Login with Google
            </Button>
            {content}
          </div>
        )}
        title={<ThemedTitleV2 collapsed={false} text="Refine Project" />}
        formProps={{
          initialValues: authCredentials,
        }}
      />
    </div>
  );
};
