import React from 'react';
import {  Divider, Header, List } from 'semantic-ui-react';

const Links = () =>{
  return (
    <div className="sections">
    <Header size='large' className="text-center">Linki do projektów</Header>
    <List divided relaxed>
    <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a' href="https://github.com/maks27/Pure_JS-HTML-CSS_Website">SpaceX website</List.Header>
        <List.Description>Projekt strony wykorzystujący SapceX API</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a' href="https://github.com/maks27/Pure_JS-HTML-CSS_Website">Praca Inżynierska</List.Header>
        <List.Description >Gra z gatunku RPG stworzona na silniku Unity z wykorzystaniem narzędzia Blender</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a' href="https://github.com/maks27/WebServer_NodeExpress">Web server Express</List.Header>
        <List.Description>Prosty serwer WWW wykorzystujący framework Express </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a' href="https://github.com/maks27/React-Redux-app">React-redux-app</List.Header>
        <List.Description>Dynamiczny konfigurator stworzony z wykorzystaniem React Redux oraz Bootstrap</List.Description>
      </List.Content>
    </List.Item>
  </List>
  <Divider />
  </div>
  );
}

export default Links;
