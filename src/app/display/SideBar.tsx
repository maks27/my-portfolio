import React from "react";
import { Divider, Image, List } from "semantic-ui-react";

function SideBar() {
  return (
    <div className="sidebar-content">
      <Image
        src="https://aduu.pl/wp-content/uploads/2019/04/placeholder-image.jpg"
        size="medium"
        rounded
      />
      <List className="contact-info">
      <Divider />
        <List.Item>
          <List.Icon name="user" />
          <List.Content className="font-weight-bold">Maksymilian Pliszczyński</List.Content>
        </List.Item>
        <Divider />
        <List.Item>
          <List.Icon name="marker" />
          <List.Content className="font-weight-bold">Olsztyn</List.Content>
        </List.Item>
        <Divider />
        <List.Item>
          <List.Icon name="mail" />
          <List.Content className="font-weight-bold">
            <a href="mailto:maks2796@gmail.com">maks2796@gmail.com</a>
          </List.Content>
        </List.Item>
        <Divider />
        <List.Item>
          <List.Icon name="github" />
          <List.Content className="font-weight-bold">
            <a href="https://github.com/maks27">Github</a>
          </List.Content>
        </List.Item>
        <Divider />
      </List>
      
    </div>
  );
}

export default SideBar;
