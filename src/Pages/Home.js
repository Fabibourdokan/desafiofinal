import React from "react";
import * as S from "../Components/styles";
import Element from "../img/Fabi.jpg";

export default function Home() {
  return (
    <S.Div>
      <h1>Desenvolvedor Front-end</h1>
      <p>Fabiana Bourdokan</p>
      <S.Figure>
        <S.Img src={Element} alt="Fabi" />
      </S.Figure>
    </S.Div>
  );
}
