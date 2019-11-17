import { 
  Capitalize,
 } from './index'

test('Calitalize first letter of a word and make all other letters lower case', () => {
  expect(Capitalize('tEST')).toEqual('Test')
})
