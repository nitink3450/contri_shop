export const formatCurrency = (value: number) => {
  return Number(value)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
};
