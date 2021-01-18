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
          Jestem Maks – młody informatyk z ogromnymi ambicjami, analitycznym
          umysłem i kreatywną duszą. Posiadam tytuł inżyniera, uzyskany na
          Uniwersytecie Warmińsko-Mazurskim w Olsztynie. Większość czasu
          poświęcam na rozwijanie umiejętności programistycznych. Aktualnie
          jestem w trakcie poszukiwania pracy w dziale IT. Największą
          satysfakcję sprawia mi tworzenie back-endu i front-endu strony,
          dlatego interesuje mnie rozwój w kierunku full-stack developera.
        </p>
        <Divider />
      </Container>
    </div>
  );
};

export default AboutMe;
