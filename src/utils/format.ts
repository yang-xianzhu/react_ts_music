import dayjs from 'dayjs'

// 格式化时间
export const formatTime = (time: number, type?: string = 'MM月DD日') => {
  return dayjs(time).format(type)
}
