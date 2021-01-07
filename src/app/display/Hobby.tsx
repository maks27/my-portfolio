import React from "react";
import { Container, Divider, Header } from "semantic-ui-react";

const Hobby = () => {
  return (
    <div className="sections">
      <Container textAlign="left" fluid>
        <Header size="large" className="text-center">
          Zainteresowania
        </Header>
        <p>
          Posiadam szeroki zakres zainteresowań. W wolnym czasie zajmuje się
          projektowaniem gry przy wykorzystaniu środowiska Unity, która mam
          nadzieję, kiedyś doczeka się premiery. Oprócz tego moją pasją jest
          muzyka, a w szczególności gra na gitarze. Interesuje się także
          zwierzętami egzotycznymi takimi jak gekony lamparcie, których w tym
          momencie posiadam, aż 10 sztuk.
        </p>
        <Divider />
      </Container>
    </div>
  );
};

export default Hobby;
