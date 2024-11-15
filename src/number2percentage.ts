/**
 * 将数字转换为百分比字符串, 如 0.98 => '98%'
 *
 * @param num 要转换的数字
 * @param decimal 小数点后的位数，默认为2
 * @returns 转换后的百分比字符串
 */
export function number2percentage(num: number, decimal = 2): string {
  return (num * 100).toFixed(decimal) + '%'
}
