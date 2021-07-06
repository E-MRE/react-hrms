import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn({signedOut}) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png"
        />
        <Dropdown pointing="top left" text="Emre">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={signedOut} text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
