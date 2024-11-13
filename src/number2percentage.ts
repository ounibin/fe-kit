export function number2percentage(num: number, decimal = 2): string {
  return (num * 100).toFixed(decimal) + "%"
}
