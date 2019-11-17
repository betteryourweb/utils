import { ip4ToHex, ip4ToBin } from "./NetworkUtils"

test('Break up IPv4 address into hex representation in an array', () => {
  expect(ip4ToHex('192.168.43.1')).toEqual([ 'c0', 'a8', '2b', '01' ])
})
test('Break up IPv4 address into binary representation in an array', () => {
  expect(ip4ToBin('192.168.43.1')).toEqual([ '11000000', '10101000', '00101011', '00000001' ])
})
