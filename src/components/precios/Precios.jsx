import React from 'react';
import { TitleSection, Container } from '../stylesColorGlobal';
import {
  Card,
  BeneficiosCard,
  ContenedorCards,
  TituloCard,
  ParrafoCard,
  BotonCard,
} from './Styles';
import { allDatos } from './../../datos';
import 'boxicons';

export function Precios() {
  return (
    <section id="planes">
      <Container maxWidth={'80%'}>
        <TitleSection>
          P<span>lanes</span>
        </TitleSection>

        <ContenedorCards>
          {allDatos.map(({ id, titulo, subtitulo, boton, beneficios }) => (
            <Card key={id}>
              <TituloCard>{titulo}</TituloCard>
              <ParrafoCard>{subtitulo}</ParrafoCard>
              <BotonCard href="#">{boton}</BotonCard>
              <BeneficiosCard>
                {beneficios.map((item, index) => (
                  <ul key={index}>
                    <li>
                      <box-icon
                        type="solid"
                        color="rgb(0, 182, 122)"
                        name="badge-check"
                      />
                      <p>{item}</p>
                    </li>
                  </ul>
                ))}
              </BeneficiosCard>
            </Card>
          ))}
        </ContenedorCards>
      </Container>
    </section>
  );
}
