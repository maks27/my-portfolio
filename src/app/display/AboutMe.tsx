import React from "react";
import { Container, Divider, Header } from "semantic-ui-react";

const AboutMe = () => {
  return (
    <div className="sections">
       <Header size="large" className="text-center">
          O mnie
      </Header>
      <Container textAlign="justified" fluid>
        <p>
          Nazywam się Maksymilian Pliszczyński. Posiadam tytuł inżyniera, uzyskany na Uniwersytecie Warmińsko-Mazurskim w Olsztynie.
          Aktualnie jestem w trakcie poszukiwania pierwszej pracy w dziale IT. Najbardziej chciałbym się
          rozwijać w kierunku Full-stack developer, ponieważ zarówno tworzenie
          back-endu jak i front-endu strony sprawia mi wielką satysfakcję.
          </p>
        <Divider />
      </Container>
    </div>
  );
};

export default AboutMe;
