import React from 'react';

const Result = ({ values: [key] }) => {
  const weight = key['Váha'];
  const height = key['Výška'];
  const age = key['Věk'];
  const aktivita = key['Aktivita'];
  const target = key['Cíl'];
  let af = '';
  let koefTarget = '';

  if (target === 'hubnutí') {
    koefTarget = 0.8;
  } else if (target === 'udržování váhy') {
    koefTarget = 1;
  } else {
    koefTarget = 1.2;
  }

  if (aktivita === 'Sedavé zaměstnání + žádný trénink') {
    af = 1.2;
  } else if (
    aktivita ===
    'Sedavé zaměstnání + trénink vyšší intenzity (posilování, funkční trénink, kruhový trénink, běh, plavání apod.) 2x týdně, případně vícekrát týdně o nižší intenzitě (jóga, pilates)'
  ) {
    af = 1.4;
  } else if (
    aktivita ===
    'Sedavé zaměstnání + trénink vyšší intenzity 3x- 4x týdně; nebo manuální těžké zaměstnání'
  ) {
    af = 1.6;
  } else if (
    aktivita ===
    'Sedavé zaměstnání + trénink vyšší intenzity 6x týdně a více; nebo manuální těžké zaměstnání + trénink vyšší intenzity 2x týdně'
  ) {
    af = 1.8;
  } else if (
    aktivita ===
    'Manuální těžké zaměstnání + trénink vyšší intenzity 3x – 4x týdně'
  ) {
    af = 2;
  } else {
    af = 2.2;
  }

  const bmr = 655.0955 + 9.5634 * weight + 1.8496 * height - 4.6756 * age;
  const tdee = bmr * af;
  const kcl = tdee * koefTarget;

  return (
    <>
      tady bude tabulka s výsledkem, která se zobrazí po kliknutí na Odeslat
      <p>Tvůj denní příjem kalorií- {kcl}</p>
    </>
  );
};

export default Result;
