type TItem = { text: string; href: string }

export interface IHeaderInfo {
  title: string
  infos?: TItem[]
  onClick?: (item: TItem) => void
}
