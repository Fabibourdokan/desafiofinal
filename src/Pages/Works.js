import React from "react";
import * as S from "../Components/styles";
import Sopadonenem from "../img/sopadonenem.jpg";
import Bolinha from "../img/bolinha.jpg";
import Cafune from "../img/cafune.jpg";
import Cozinhandonaescola from "../img/cozinhandonaescola.jpg";
import Diadafamilia from "../img/diadafamilia.jpg";
import Escalda from "../img/escaldapes.jpg";

export default function Works() {
  return (
    <S.Div>
      <h1>Página dos trabalhos </h1>
      <S.DivF>
        <S.Figure>
          <S.Img src={Sopadonenem} alt="Cozinhando a Sopa do Neném" />
          <figcaption>A sopa do neném</figcaption>
        </S.Figure>
        <S.Figure>
          <S.Img src={Bolinha} alt="Fazendo Bolinhas de sabão" />
          <figcaption> Bolinha de sabão</figcaption>
        </S.Figure>
        <S.Figure>
          <S.Img src={Cafune} alt="Recebendo Cafuné" />
          <figcaption>Cafuné com acessórios</figcaption>
        </S.Figure>
        <S.Figure>
          <S.Img src={Cozinhandonaescola} alt="Fizemos receitas na escola" />
          <figcaption>Cozinhando na Escola</figcaption>
        </S.Figure>
        <S.Figure>
          <S.Img src={Diadafamilia} alt="diadafamilia" />
          <figcaption>Dia da Familia</figcaption>
        </S.Figure>
        <S.Figure>
          <S.Img src={Escalda} alt="Fizemos Escalda pés" />
          <figcaption>Escalda pés</figcaption>
        </S.Figure>
      </S.DivF>
    </S.Div>
  );
}
