import { useNavigate } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import { useEffect } from "react";

const LoginCallback = () => {
  const { oktaAuth } = useOktaAuth();
  const navigate = useNavigate();

  useEffect(() => {
    oktaAuth
      .handleLoginRedirect()
      .then(() => {
        navigate("/dashboard"); // or your desired redirect path
      })
      .catch((error) => {
        console.error("Error handling login redirect:", error);
        navigate("/login");
      });
  }, [oktaAuth, navigate]);

  return <div>Loading...</div>;
};

export default LoginCallback;
