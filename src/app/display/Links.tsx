import React from 'react';
import { Container, Header, List } from 'semantic-ui-react';

const Links = () =>{
  return (
    <div>
    <Header size='large' className="text-center">Linki do projektów</Header>
    <Container text>
    <List divided relaxed>
    <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a' href="https://github.com/maks27/Pure_JS-HTML-CSS_Website">SpaceX website</List.Header>
        <List.Description as='a'>Projekt strony wykorzystujący SapceX API</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a' href="https://github.com/maks27/Pure_JS-HTML-CSS_Website">Praca Inżynierska</List.Header>
        <List.Description as='a'>Gra z gatunku RPG stworzona na silniku Unity z wykorzystaniem narzędzia Blender</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a' href="https://github.com/maks27/WebServer_NodeExpress">Web server Express</List.Header>
        <List.Description as='a'>Prosty serwer WWW wykorzystujący framework express </List.Description>
      </List.Content>
    </List.Item>
  </List>
  </Container>
  </div>
  );
}

export default Links;
