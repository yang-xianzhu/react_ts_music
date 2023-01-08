export interface IProps {
  title: string
  list: IList[]
  handleItem?: (item: IList) => void | undefined
  currentItem: string | undefined
}

export interface IList {
  value: string | number
  text: string
}
