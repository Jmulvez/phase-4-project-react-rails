import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Wrapper>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <Divider />
          <p>
            Don't have an account?
            <Button onClick={() => setShowLogin(false)}>
              Sign Up
            </Button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <Divider />
          <p>
            Already have an account?
            <Button onClick={() => setShowLogin(true)}>
              Log In
            </Button>
          </p>
        </>
      )}
    </Wrapper>
  );
}

export default Login;
