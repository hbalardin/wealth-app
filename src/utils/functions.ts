export const convertToCurrency = (number: number) => {
  return number.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};
