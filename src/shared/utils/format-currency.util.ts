export const formatCurrency = (
  amount: number | string,
  currency = 'USD',
  locale = 'en-US',
): string => {
  if (amount === null || amount === undefined) return 'N/A';

  const numericAmount = typeof amount === 'string' ? parseFloat(amount) : amount;

  if (isNaN(numericAmount)) return 'Invalid amount';

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numericAmount);
};
