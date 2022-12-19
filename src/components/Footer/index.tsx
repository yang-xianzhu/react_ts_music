import { Link } from 'react-router-dom'
import styleObj from './style.module.css'
import type { IFooterList } from './type'

const list: IFooterList[] = [
  {
    to: 'https://developer.music.163.com/st/developer',
    text: '音乐开放平台'
  },
  {
    to: 'https://developer.music.163.com/st/developer',
    text: '云村交易所'
  },
  {
    to: 'https://developer.music.163.com/st/developer',
    text: 'Amped Studio'
  },
  {
    to: 'https://developer.music.163.com/st/developer',
    text: '用户认证'
  },
  {
    to: 'https://developer.music.163.com/st/developer',
    text: '独立音乐人'
  },
  {
    to: 'https://developer.music.163.com/st/developer',
    text: '赞赏'
  },
  {
    to: 'https://developer.music.163.com/st/developer',
    text: '视频激励'
  }
]
const treatyList: IFooterList[] = [
  {
    to: '/',
    text: '服务条款'
  },
  {
    to: '/',
    text: '隐私政策'
  },
  {
    to: '/',
    text: '儿童隐私政策'
  },
  {
    to: '/',
    text: '版权投诉'
  },
  {
    to: '/',
    text: '投资者关系'
  },
  {
    to: '/',
    text: '广告合作'
  },
  {
    to: '/',
    text: '联系我们'
  }
]
const Footer = () => {
  return (
    <div className={styleObj.footer}>
      <div className="mini-warp">
        <ul className={styleObj['footer-list']}>
          {list.map((v: IFooterList, idx: number) => (
            <li key={idx}>
              <Link to={v.to} className={`foot-img ${styleObj['item']}`}></Link>
              <span className={styleObj['text']}>{v.text}</span>
            </li>
          ))}
        </ul>
        <div
          style={{
            marginTop: '60px',
            textAlign: 'center'
          }}
        >
          <ul className={styleObj['treaty-list']}>
            {treatyList.map((v: IFooterList, idx: number) => (
              <li key={idx}>
                <Link to={v.to}>{v.text}</Link>
              </li>
            ))}
          </ul>
          <p style={{ marginTop: '12px' }}>
            廉正举报 不良信息举报邮箱: 51jubao@service.netease.com
            客服热线：95163298
          </p>
          <p style={{ margin: '12px 0' }}>
            互联网宗教信息服务许可证：浙（2022）0000120 粤B2-20090191-18
            工业和信息化部备案管理系统网站 浙公网安备 33010902002564号
          </p>
          <p>
            网易公司版权所有©1997-2022杭州乐读科技有限公司运营：浙网文[2021]
            1186-054号
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
