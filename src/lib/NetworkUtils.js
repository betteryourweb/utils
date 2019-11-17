export function ip4ToHex (ip) {
  return ip.split(`.`).map(x => {
    let hex = parseInt(x).toString(16)
    if (`${hex}`.length < 2) hex = '0' + hex
    return hex
  })
}

export function ip4ToBin (ip) {
  return ip.split(`.`).map(x => {
    let hex = parseInt(x).toString(2)
    if (`${hex}`.length < 8) hex = '0'.repeat(8 - hex.length) + hex
    return hex
  })
}