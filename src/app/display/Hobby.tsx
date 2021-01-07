import React from "react";
import { Container, Divider, Header } from "semantic-ui-react";

const Hobby = () => {
  return (
    <div className="sections">
      <Container textAlign="justified" fluid>
        <Header size="large" className="text-center">
          Zainteresowania
        </Header>
        <p>
          Posiadam szeroki zakres zainteresowań. W wolnym czasie zajmuje się
          projektowaniem gry przy wykorzystaniu środowiska Unity, która mam
          nadzieję, kiedyś doczeka się premiery. Poza tym moją pasją jest muzyka, 
          a w szczególności gra na gitarze. Interesuje się także zwierzętami egzotycznymi. 
          Aktualnie hoduje gekony lamparcie. 
        </p>
        <Divider />
      </Container>
    </div>
  );
};

export default Hobby;
