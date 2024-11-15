/**
 * 将数字转换为价格字符串， 如 23.4567 => "23.46"
 *
 * @param num 要格式化的数字
 * @param decimal 小数位数，默认为2位
 * @returns 格式化后的价格字符串
 */ export function number2price(num: number, decimal = 2): string {
  return num.toLocaleString(undefined, {
    style: 'decimal',
    useGrouping: true,
    minimumFractionDigits: decimal,
    maximumFractionDigits: decimal,
  })
}
