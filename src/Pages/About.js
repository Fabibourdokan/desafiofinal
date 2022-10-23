import React from "react";
import * as S from "../Components/styles";
import Element from "../img/fabi1.jpg";
import Filhos from "../img/maria clara e daniel.jpg";
import Rafael from "../img/Rafa.jpg";
import Joinville from "../img/joinville.jpg";

export default function About() {
  return (
    <S.Div>
      <h1>Página Sobre mim </h1>
      <S.DivF>
        <S.Figure>
          <S.Img src={Element} alt="Assinando o meu TCC" />
          <p>Sou pedagoga, formada desde 2019 </p>
        </S.Figure>

        <S.Figure>
          <S.Img src={Filhos} alt="Maria Clara e Daniel" />
          <p>Tenho dois filhos, Maria Clara e Daniel </p>
        </S.Figure>
        <S.Figure>
          <S.Img src={Rafael} alt="Meu namorado, Rafael" />
          <p>Namoro com o Rafael a quase 4 anos </p>
        </S.Figure>
        <S.Figure>
          <S.Img src={Joinville} alt="Joinville - SC" />
          <p>Atualmente moro em Joinville-SC</p>
        </S.Figure>
      </S.DivF>
    </S.Div>
  );
}
