export const getKoefTarget = (target) => {
  if (target === 'weightloss') {
    return 0.8;
  } else if (target === 'maintenance') {
    return 1;
  } else {
    return 1.2;
  }
};

export const getAf = (aktivita) => {
  if (aktivita === 'answer1') {
    return 1.2;
  } else if (aktivita === 'answer2') {
    return 1.4;
  } else if (aktivita === 'answer3') {
    return 1.6;
  } else if (aktivita === 'answer4') {
    return 1.8;
  } else if (aktivita === 'answer5') {
    return 2;
  } else {
    return 2.2;
  }
};
