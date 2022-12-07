export type TChangType = 'right' | 'left'

export interface IList {
  newAlbum: boolean
  albumId: number
  albumName: string
  artistName: string
  price: number
  customPriceConfig: any
  coverUrl: string
  pubTime: number
  productId: number
  saleNum: number
  topfans: any
  albumType: number
  area: number
  artistType: number
  status: number
}
