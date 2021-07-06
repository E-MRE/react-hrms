import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const history = useHistory();

  function handleSignedIn() {
    setIsAuthenticate(true);
  }

  function handleSignedOut() {
    setIsAuthenticate(false);
    history.push("/")
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="Anasayfa" />
          <Menu.Item name="Hakkımızda" />

          <Menu.Menu position="right">
            {isAuthenticate ? <SignedIn signedOut={handleSignedOut} /> : <SignedOut signedIn={handleSignedIn} />}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
