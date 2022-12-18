import http from '@/api'
import { FC, useEffect, useState } from 'react'

interface IOptions {
  methods: 'get' | 'post'
  url: string
  data: {
    [k in string]: any
  }
}

const useFetch: FC<IOptions> = ({ methods, url, data }: IOptions) => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [responseData, setResponseData] = useState([])
  const [errData, setErrData] = useState([])

  useEffect(() => {
    const controller = new AbortController()
    http[methods](url, data)
      .then((res: any) => {
        setResponseData(res.data)
      })
      .catch((err) => {
        setErrData(err)
      })
      .finally(() => {
        setLoading(true)
      })

    return () => {
      // 页面销毁取消请求
      controller.abort()
    }
  }, [url])

  return { isLoading, responseData, errData }
}

export default useFetch
