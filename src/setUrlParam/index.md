# setUrlParam(url: string, name: string): string

设置 url 中的参数值，如果没有该参数，则添加

## 参数

| 参数                | 类型       | 默认值 | 说明                                                                     |
| ------------------ | --------   | --------  |------------------------------------------------------------------------ |
| url                | `string`   |   |  要修改的链接                                      |
| name               | `string`   |   | 参数名                                      |              




## 返回值

`string` 新的 url

## 示例

```js
setUrlParam('https://baidu.com?q=你好', 'q', '你也一样')
```
