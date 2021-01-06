import React from "react";
// @ts-ignore
import DevIcon from "devicon-react-svg";
import { List } from "semantic-ui-react";
function ListItem() {
  const devIconStyle = {
    width: "50px",
    height: "80px",
  };
  const lang = [
    "React",
    "JavaScript",
    "CSS3",
    "TypeScript_badge",
    "Sass",
    "Dotnet",
    "NodeJS",
    "Html5",
    "Bootstrap",
    "Unity_small",
    "Sqllite",
  ];
  const list = lang.map((value) => {
    let valuename = value;
    if (value.includes("_")) valuename = value.slice(0, value.indexOf("_"));
    return (
      <List.Item key={value} className="skills">
        <DevIcon
          icon={value.toLocaleLowerCase().toString()}
          style={devIconStyle}
        />
        <List.Content>{valuename}</List.Content>
      </List.Item>
    );
  });
  return (
    <List className="display-skills">
      <List.Item className="skills">
        <img
          src="https://cdn.worldvectorlogo.com/logos/blender-1.svg"
          style={devIconStyle}
          alt="blender"
        />
        <List.Content>Blender</List.Content>
      </List.Item>
      {list}
    </List>
  );
}

export default ListItem;
