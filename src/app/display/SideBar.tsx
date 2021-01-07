import React from "react";
import { Image, List } from "semantic-ui-react";

function SideBar() {
  return (
    <div className="sidebar-content">
      <Image
        src="https://aduu.pl/wp-content/uploads/2019/04/placeholder-image.jpg"
        size="medium"
        rounded
      />
      <List>
        <List.Item>
          <List.Icon name="user" />
          <List.Content>Maksymilian Pliszczyński</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="marker" />
          <List.Content>Olsztyn</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="mail" />
          <List.Content>
            <a href="mailto:maks2796@gmail.com">maks2796@gmail.com</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="github" />
          <List.Content>
            <a href="https://github.com/maks27">Github</a>
          </List.Content>
        </List.Item>
      </List>
      
    </div>
  );
}

export default SideBar;
