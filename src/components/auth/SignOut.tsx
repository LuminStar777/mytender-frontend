import { useOktaAuth } from "@okta/okta-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SignOut = () => {
  const { oktaAuth } = useOktaAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await oktaAuth.signOut();
    navigate("/login");
  };

  return <Button onClick={handleSignOut}>Sign Out</Button>;
};

export default SignOut;
