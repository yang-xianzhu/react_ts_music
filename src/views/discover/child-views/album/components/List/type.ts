export interface IList {
  songs: any[]
  paid: boolean
  onSale: boolean
  status: number
  tags: string
  copyrightId: number
  artist: Artist
  picId: number
  alias: any[]
  artists: Artist2[]
  publishTime: number
  picUrl: string
  commentThreadId: string
  briefDesc: string
  blurPicUrl: string
  companyId: number
  pic: number
  subType: string
  description: string
  company: string
  name: string
  id: number
  type: string
  size: number
  picId_str: string
  areaId: number
  exclusive: boolean
  isSub: boolean
}

export interface Artist {
  img1v1Id: number
  topicPerson: number
  picId: number
  alias: string[]
  trans: string
  albumSize: number
  img1v1Url: string
  picUrl: string
  followed: boolean
  briefDesc: string
  musicSize: number
  name: string
  id: number
  picId_str: string
  img1v1Id_str: string
}

export interface Artist2 {
  img1v1Id: number
  topicPerson: number
  picId: number
  alias: any[]
  trans: string
  albumSize: number
  img1v1Url: string
  picUrl: string
  followed: boolean
  briefDesc: string
  musicSize: number
  name: string
  id: number
  img1v1Id_str: string
}
