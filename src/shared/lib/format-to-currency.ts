export const formatToCurrency = (
  amount: number,
  currency: string,
  locale: string = "de-DE",
): string => {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 0,
    useGrouping: "auto",
  }).format(amount);
};
