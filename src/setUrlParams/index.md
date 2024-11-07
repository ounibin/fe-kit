# setUrlParams(url: string, query: Object): string 

批量设置 url 中参数为指定的值，如果没有该参数，则添加该参数。

## 参数

| 参数                | 类型       | 默认值 | 说明                                                                     |
| ------------------ | --------   | --------  |------------------------------------------------------------------------ |
| url                | `string`   |   |  要修改的链接                                      |
| query            | `Object`   |   | 多个参数的对象，key 为参数名，value 为参数值                                      |      




## 返回值

`string` 新的 url

## 示例

```js
setUrlParams('https://xxx.com?q=你好', {
  q: '你也一样'
})
```
