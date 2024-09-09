export function number2percentage(num: number, decimal = 2):string {
  return (num * 100).toFixed(decimal) + '%'
}

export function number2price(num: number, decimal = 2):string {
  return num.toLocaleString(undefined, {
    style: 'decimal',
    useGrouping: true,
    minimumFractionDigits: decimal,
    maximumFractionDigits: decimal,
  })
}