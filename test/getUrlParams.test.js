import { expect, test } from 'vitest'
import { getUrlParams } from '../src/index'

test('getUrlParams', () => {
  expect(getUrlParams('http://localhost/#/ask?ask_id=1')).toStrictEqual({ask_id:'1'})
  expect(getUrlParams('http://localhost/#/ask?ask_id=1&age=2')).toStrictEqual({ask_id:'1',age:'2'})
})