/**
 * 截取字符串，使其不超过指定的字数限制，并在超出时添加省略号。
 * @param str 要截取的字符串
 * @param wordLimit 字数限制
 * @returns 截取后的字符串
 */
export function cutString(
  str: string | null | undefined,
  wordLimit: number,
): string {
  // 如果输入的字符串不是字符串类型，或者字数限制小于1，返回空字符串
  if (typeof str !== 'string' || wordLimit < 1) {
    return ''
  }

  // 如果字数限制等于1，返回第一个字符
  if (wordLimit === 1) {
    return str[0] || ''
  }

  // 如果字符串长度超过字数限制，截取前 (wordLimit - 1) 个字符并添加省略号
  if (str.length > wordLimit) {
    return str.substring(0, wordLimit - 1) + '...'
  }

  // 否则，返回原字符串
  return str
}
