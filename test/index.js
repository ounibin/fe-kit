import { numberKit,urlKit } from '../dist/index.mjs'

// console.log('kj----数字格式化', numberKit.format(1234567.89))

console.log('kj----url参数操作', urlKit.getParam('http://localhost:8866/#/ask?ask_id=20073480', 'ask_id1'))