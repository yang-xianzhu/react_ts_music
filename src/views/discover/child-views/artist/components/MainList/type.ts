export interface ISgerList {
  list: ISgerItem[]
}

export interface ISgerItem {
  albumSize: number
  alias: string[]
  briefDesc: string
  fansCount: number
  followed: boolean
  id: number
  img1v1Id: number
  img1v1Id_str: string
  img1v1Url: string
  musicSize: number
  name: string
  picId: number
  picId_str: string
  picUrl: string
  topicPerson: number
  trans: string
}

export interface ISgerProps {
  list?: any[]
}

export interface ISettleList {
  imgUrl: string
  songer: string
}
