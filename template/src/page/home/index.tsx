import { useNavigate } from 'react-router-dom'

import { Button } from 'antd'
import { observer } from 'mobx-react'

import useModal from '@/components/modal'
import { useStores } from '@/hooks'
import Student from '@/page/student'

import logo from './logo.svg'
import homeStore from './model'
import styles from './style/index.module.less'
const config = import.meta.env
function Home(): JSX.Element {
  const globalStore = useStores('globalStore')
  const { modalRef, FormModal } = useModal({}, Student)
  const navigate = useNavigate()
  const gotoPage = () => {
    navigate('student')
  }
  const gotoModal = () => {
    modalRef.current?.open()
  }
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>{config.VITE_TITLE}</p>
        <p>
          <Button type="primary" onClick={homeStore.add}>
            count is: {homeStore.count}
          </Button>
        </p>
        <div>
          <Button type="primary" onClick={gotoPage} style={{ marginRight: 20 }}>
            学生页面路由跳转
          </Button>
          <Button type="primary" onClick={gotoModal}>
            学生页面打开弹框
          </Button>
        </div>
        <div>
          <Button type="primary" onClick={globalStore.success}>
            登录
          </Button>
          <Button type="primary" onClick={globalStore.fail}>
            注销
          </Button>
          登录状态：{globalStore.isLogin ? 1 : 0}
        </div>
        <p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          {' | '}
          <a className={styles['App-link']} href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
            Vite Docs
          </a>
        </p>
        <FormModal />
      </header>
    </div>
  )
}

export default observer(Home)
