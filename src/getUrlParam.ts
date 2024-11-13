/**
 * 从给定的URL中提取指定的查询参数值
 * 
 * @param url 完整的URL字符串，包含查询参数
 * @param name 需要提取的查询参数的名称
 * @returns 返回指定查询参数的值；如果参数不存在或为空，则返回空字符串
 */
/**
 * 从URL中获取指定名称的查询参数值。
 * @param url - 要解析的URL字符串。
 * @param name - 要获取的查询参数名称。
 * @returns 查询参数值，如果不存在则返回空字符串。
 */
export function getUrlParam(url: string, name: string): string {
  try {
    // 查找查询字符串的起始位置
    const queryStart = url.indexOf('?');
    if (queryStart === -1) {
      // 如果URL中没有查询字符串部分，直接返回空字符串
      return '';
    }

    // 获取查询字符串部分
    const searchStr = url.substring(queryStart + 1);

    // 创建URLSearchParams对象以解析查询字符串
    const searchParams = new URLSearchParams(searchStr);

    // 获取指定名称的查询参数值，如果不存在，则返回空字符串
    const res = searchParams.get(name) || '';

    // 返回查询参数值
    return res;
  } catch (error) {
    // 记录解析URL时的错误
    console.error('Error parsing URL:', error);
    return '';
  }
}
