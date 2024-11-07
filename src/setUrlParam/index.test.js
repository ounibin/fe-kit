import { expect, test } from 'vitest'
import { setUrlParam } from './index'

test('setUrlParam', () => {
  expect(setUrlParam('https://www.xxx.com', 'index', 2)).toBe('https://www.xxx.com?index=2')
  expect(setUrlParam('https://www.xxx.com?index=1', 'index', 2)).toBe('https://www.xxx.com?index=2')
  expect(setUrlParam('https://www.xxx.com?index=1', 'index', undefined)).toBe('https://www.xxx.com?index=')
})