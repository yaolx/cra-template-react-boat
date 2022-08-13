import { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

import { Provider } from 'mobx-react'

import Router from '@/routes'
import globalStore from '@/store/global'
import './index.less'

const stores = {
  globalStore
}
ReactDOM.render(
  <StrictMode>
    <Provider stores={stores}>
      <HashRouter>
        <Suspense>
          <Router />
        </Suspense>
      </HashRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
