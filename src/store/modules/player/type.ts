export interface IPlayer {
  name: string
  id: number
  pst: number
  t: number
  ar: any[]
  alia: any[]
  pop: number
  st: number
  rt: string | null
  fee: number
  v: number
  crbt: any
  cf: string
  al: Al
  dt: number
  h: H
  m: M
  l: L
  sq: any
  hr: any
  a: any
  cd: string
  no: number
  rtUrl: any
  ftype: number
  rtUrls: any[]
  djId: number
  copyright: number
  s_id: number
  mark: number
  originCoverType: number
  originSongSimpleData: any
  tagPicList: any
  resourceState: boolean
  version: number
  songJumpInfo: any
  entertainmentTags: any
  awardTags: any
  single: number
  noCopyrightRcmd: any
  mv: number
  rtype: number
  rurl: any
  mst: number
  cp: number
  publishTime: number
}

export interface Al {
  id: number
  name: string
  picUrl: string
  tns: any[]
  pic_str: string
  pic: number
}

export interface H {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

export interface M {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

export interface L {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}
