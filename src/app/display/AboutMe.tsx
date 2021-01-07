import React from "react";
import { Container, Divider, Header } from "semantic-ui-react";

const AboutMe = () => {
  return (
    <div className="sections">
      <Container textAlign="justified" fluid>
        <Header size="large" className="text-center">
          O mnie
        </Header>
        <p>
          Mam na imię Maksymilian Pliszczyński. Aktualnie jestem w trakcie
          poszukiwania pierwszej pracy w dziale IT. Najbardziej chciałbym się
          rozwijać w kierunku Full-stack developer, ponieważ zarówno tworzenie
          back-endu jak i front-endu strony sprawia mi wielką satysfakcję.
        </p>
        <Divider />
      </Container>
    </div>
  );
};

export default AboutMe;
