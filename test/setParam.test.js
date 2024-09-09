import { expect, test } from 'vitest'
import { setUrlParam } from '../src/index'

test('setUrlParam', () => {
  expect(setUrlParam('http://localhost/#/ask?ask_id=1', 'ask_id', '2')).toBe('http://localhost/#/ask?ask_id=2')
  expect(setUrlParam('https://www.xxx.com/ask', 'ask_id', '2')).toBe('https://www.xxx.com/ask?ask_id=2')
  expect(setUrlParam('https://www.xxx.com/ask', 'ask_id', 2)).toBe('https://www.xxx.com/ask?ask_id=2')
  expect(setUrlParam('https://www.xxx.com/ask?ask_id=1', 'ask_id', 2)).toBe('https://www.xxx.com/ask?ask_id=2')
  expect(setUrlParam('https://www.xxx.com/ask', 'ask_id', null)).toBe('https://www.xxx.com/ask?ask_id=null')
})