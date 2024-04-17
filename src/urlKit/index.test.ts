import { expect, test } from 'vitest'
import urkKit from './index'

test('urkKit.getParam()', () => {
  expect(urkKit.getParam('http://localhost/#/ask?ask_id=1', 'ask_id')).toBe('1')
  expect(urkKit.getParam('https://www.xxx.com/ask?ask_id=1', 'ask_id')).toBe('1')
  expect(urkKit.getParam('https://www.xxx.com/ask', 'ask_id')).toBe('')
})

test('urkKit.setParam()', () => {
  expect(urkKit.setParam('http://localhost/#/ask?ask_id=1', 'ask_id', '2')).toBe('http://localhost/#/ask?ask_id=2')
  expect(urkKit.setParam('https://www.xxx.com/ask', 'ask_id', '2')).toBe('https://www.xxx.com/ask?ask_id=2')
  expect(urkKit.setParam('https://www.xxx.com/ask', 'ask_id', 2)).toBe('https://www.xxx.com/ask?ask_id=2')
  expect(urkKit.setParam('https://www.xxx.com/ask?ask_id=1', 'ask_id', 2)).toBe('https://www.xxx.com/ask?ask_id=2')
  expect(urkKit.setParam('https://www.xxx.com/ask', 'ask_id', null)).toBe('https://www.xxx.com/ask?ask_id=null')
})