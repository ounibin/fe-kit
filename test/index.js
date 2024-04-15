import { urlKit } from '../dist/index.mjs'

console.log('kj----parse', urlKit.parse('http://www.1baidu.com?name=wangkj&age=12'))
console.log('kj----get', urlKit.get('http://www.1baidu.com?name=wangkj&age=12', 'age'))
console.log('kj----set', urlKit.set('http://www.1baidu.com?name=wangkj', 'age', '30'))