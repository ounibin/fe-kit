# number2percentage(num: number, decimal = 2): string

将数字转换为百分比字符串

## 参数

| 参数                | 类型       | 默认值 | 说明                                                                     |
| ------------------ | --------   | --------  |------------------------------------------------------------------------ |
| num                | `number`   |  |  需要被转化的数字                                      |
| decimal            | `number`   |  2 | 精度，小数点后的位数                                    |              




## 返回值

`string` 百分比字符串

## 示例

```js
number2percentage(0.99, 0) // => 99%
number2percentage(0.99, 1) // => 99.0%
number2percentage(0.99, 2) // => 99.00%
```
