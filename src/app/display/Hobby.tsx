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
          Jedną z moich największych pasji jest muzyka – w wolnych chwilach
          tworzę nowe riffy jako gitarzysta lokalnego zespołu. Fascynują mnie
          zwierzęta, szczególnie egzotyczne. Aktualnie hoduje gekony lamparcie.
          Jako fan wszelkiego rodzaju RPG od kilku miesięcy rozwijam własny
          projekt gry, przy wykorzystaniu środowiska Unity. Zgromadziłem mały
          zespół i konsekwentnie pracuję nad tym, aby tytuł doczekał się
          premiery. Zacząłem również pracę nad komercyjnym projektem strony do
          obsługi salonu sukni ślubnych, z wykorzystaniem technologii React,
          Reduxa oraz .Net .
        </p>
        <Divider />
      </Container>
    </div>
  );
};

export default Hobby;
