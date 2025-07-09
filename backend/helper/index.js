export const filterFiscalQuarter = (data, fiscal_quarter) => {
  if (['2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2'].includes(fiscal_quarter))
    return data.filter((item) => item.closed_fiscal_quarter === fiscal_quarter);
  return data;
};
