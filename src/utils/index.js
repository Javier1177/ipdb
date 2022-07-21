export const capitalizeString = string =>
  string.replace(/^\w/, c => c.toUpperCase());

export const convertQuantityFrom = (type, quanitity) => {
  const QUANTITY_TYPES = {
    HG: 'hg',
    DM: 'dm',
  };

  switch (type) {
    case QUANTITY_TYPES.HG:
      return quanitity / 10;
    case QUANTITY_TYPES.DM:
      return quanitity * 10;
    default:
      return quanitity;
  }
};
