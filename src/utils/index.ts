export const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const convertToCurrency = (number: number) => {
  return number.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};
