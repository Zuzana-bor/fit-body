export const getKoefTarget = (target) => {
  switch (target) {
    case 'weightloss':
      return 0.8;
    case 'maintenance':
      return 1;
    default:
      return 1.2;
  }
};

export const getAf = (activity) => {
  switch (activity) {
    case 'activLevel1':
      return 1.2;

    case 'activLevel2':
      return 1.4;

    case 'activLevel3':
      return 1.6;

    case 'activLevel4':
      return 1.8;

    case 'activLevel5':
      return 2;

    default:
      return 2.2;
  }
};
