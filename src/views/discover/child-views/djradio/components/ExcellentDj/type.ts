export interface IProps {
  currentId: number | undefined
}

export interface IList {
  dj: Dj
  category: string
  secondCategory: string
  buyed: boolean
  price: number
  originalPrice: number
  discountPrice: any
  purchaseCount: number
  lastProgramName: string
  videos: any
  finished: boolean
  underShelf: boolean
  liveInfo: any
  playCount: number
  privacy: boolean
  icon: any
  manualTagsDTO: any
  descPicList: any[]
  dynamic: boolean
  shortName: any
  categoryId: number
  taskId: number
  programCount: number
  picId: number
  subCount: number
  lastProgramId: number
  feeScope: number
  lastProgramCreateTime: number
  radioFeeType: number
  intervenePicUrl: string
  picUrl: string
  intervenePicId: number
  desc: string
  createTime: number
  name: string
  id: number
  rcmdtext: string
  subed: boolean
  lastUpdateProgramName: string
}

export interface Dj {
  defaultAvatar: boolean
  province: number
  authStatus: number
  followed: boolean
  avatarUrl: string
  accountStatus: number
  gender: number
  city: number
  birthday: number
  userId: number
  userType: number
  nickname: string
  signature: string
  description: string
  detailDescription: string
  avatarImgId: number
  backgroundImgId: number
  backgroundUrl: string
  authority: number
  mutual: boolean
  expertTags: any
  experts: any
  djStatus: number
  vipType: number
  remarkName: any
  authenticationTypes: number
  avatarDetail: any
  avatarImgIdStr: string
  backgroundImgIdStr: string
  anchor: boolean
  avatarImgId_str: string
}
