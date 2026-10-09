
export const USD_TO_MDL = 17.7;

export function formatPrice(usd) {
  const mdl = usd * USD_TO_MDL;
  return (
    mdl.toLocaleString('ro-RO', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + ' MDL'
  );
}

// Valorile categoriilor vin in engleza din API (se folosesc în URL);
// aici le traducem doar pentru afișare.
const categoryLabels = {
  electronics: 'Electronice',
  jewelery: 'Bijuterii',
  "men's clothing": 'Îmbrăcăminte bărbați',
  "women's clothing": 'Îmbrăcăminte femei',
};

export function categoryLabel(category) {
  return categoryLabels[category] || category;
}
