export default function (num: number, decimal = 2): string {
  return num.toLocaleString(undefined, {
    style: 'decimal',
    useGrouping: true,
    minimumFractionDigits: decimal,
    maximumFractionDigits: decimal,
  })
}