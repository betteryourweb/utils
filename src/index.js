import { ip4ToHex, ip4ToBin } from './lib/NetworkUtils';
import { log } from 'util';
export * from './lib/NetworkUtils'
export function Capitalize (val) {
  if (typeof val !== 'string') throw new Error(`You can ONLY capitalize strings!!`)
  let _chunks = val.toLowerCase().split('')
  return _chunks.shift().toUpperCase() + _chunks.join('')

}

log(ip4ToHex('192.168.43.1'))
log(ip4ToBin('192.168.43.1'))