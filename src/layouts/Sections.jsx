import React from "react";
import { Menu } from "semantic-ui-react";

export default function Sections() {
  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item name="Bilgileri Düzenle" />
        <Menu.Item name="İlanlara Bak" />
        <Menu.Item name="Özgeçmiş Oluştur" />
      </Menu>
    </div>
  );
}
