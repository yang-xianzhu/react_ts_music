// 42117528 ---> 421万 转换
export const numberTransition = (
  numStr: number | string,
  point: number = 0
): string => {
  const str = String(numStr)
  if (str.length < 5) {
    return str
  }

  // if (str.length > 5) {
  //   return str
  // }
  //大于8位数是亿
  else if (str.length > 8) {
    let decimal = str.substring(str.length - 8, str.length - 8 + point)
    return (
      parseFloat(parseInt(Number(numStr) / 100000000 + '') + '.' + decimal) +
      '亿'
    )
  }
  //大于5位数是一万 (以1W分割 1W以下全部显示)
  else if (str.length > 4) {
    let decimal = str.substring(str.length - 4, str.length - 4 + point)
    return (
      parseFloat(parseInt(Number(numStr) / 10000 + '') + '.' + decimal) + '万'
    )
  }
  return str
}

// 图片url拼接上 ?parmas=140x140
export const transitionSamllImg = (
  url: string,
  width: number,
  height: number
): string => `${url}?param=${width}x${height}`
