import { expect, test } from 'vitest'
import { getUrlParam } from '../src/getUrlParam'

test('getUrlParam', () => {
  expect(getUrlParam('http://localhost/#/ask?ask_id=1', 'ask_id')).toBe('1')
  expect(getUrlParam('https://www.xxx.com/ask?ask_id=1', 'ask_id')).toBe('1')
  expect(getUrlParam('https://www.xxx.com/ask', 'ask_id')).toBe('')
})