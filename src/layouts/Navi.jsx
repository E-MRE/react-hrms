import React from 'react'
import { Button, Container, Menu } from "semantic-ui-react";

export default function Navi() {
    return (
        <div>
            <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="Anasayfa" />
          <Menu.Item name="Hakkımızda" />

          <Menu.Menu position="right">
            <Menu.Item>
              <Button primary>Kayıt Ol</Button>
            </Menu.Item>
            <Menu.Item>
              <Button color="green">Giriş Yap</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
        </div>
    )
}
