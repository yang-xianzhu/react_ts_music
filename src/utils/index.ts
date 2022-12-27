// 42117528 ---> 421万 转换
export const numberTransition = (
  numStr: number | string,
  point: number = 0
): string => {
  const str = String(numStr)
  if (str.length < 5) {
    return str
  }

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
): string => `${url}?param=${width}y${height}`

// 格式化时间  2000000 ---> 04:13
export const transitionTimer = (time: number) => {
  const timeSeconds = time / 1000
  const minute = Math.floor(timeSeconds / 60)
  const second = Math.floor(timeSeconds) % 60

  // 补0操作
  const formatMinute = String(minute).padStart(2, '0')
  const formatSecond = String(second).padStart(2, '0')

  return `${formatMinute}:${formatSecond}`
}

export interface ILyricArr {
  text: string
  time: number
}

// 解析歌词
export const parseLyric = (lyricString: string) => {
  const timeRegExp = /\[(\d{2}):(\d{2}).(\d{2,3})\]/
  const lyric: ILyricArr[] = []

  const arr = lyricString.split('\n')
  const _len = arr.length
  for (let i = 0; i < _len; i++) {
    const results = timeRegExp.exec(arr[i])
    if (!results) continue
    const time1 = Number(results[1]) * 60 * 1000
    const time2 = Number(results[2]) * 1000
    const time3 =
      results[3].length === 3 ? Number(results[3]) : Number(results[3]) * 10
    const timeRes = time1 + time2 + time3
    lyric.push({
      time: timeRes,
      text: arr[i].replace(timeRegExp, '')
    })
  }
  return lyric
}

// 解析url参数 ?id=xxx&name=yyy ===> {id:xxx,name:yyy}
export const transitionUrlParams = (url: string, key?: string) => {
  const paramsArr = url.slice(1).split('&')

  const paramsObj: {
    [k in string]: string
  } = {}

  for (const k of paramsArr) {
    const [key, val] = k.split('=')
    paramsObj[key] = val
  }

  type TParams = typeof paramsObj
  return key ? paramsObj[key] : (paramsObj as TParams)
}

// 带有动画返回顶部函数
export const backTopTransiton = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// 补0
export const zeroFilling = (target: number | string) =>
  String(target).padStart(2, '0')
