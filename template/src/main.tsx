import { StrictMode, Suspense } from 'react'
import { HashRouter } from 'react-router-dom'

import { Provider } from 'mobx-react'
import ReactDom from 'react-dom/client'

import Router from '@/routes'
import globalStore from '@/store/global'
import './index.less'

const stores = {
  globalStore
}
const rootElement = document.getElementById('root') as Element | DocumentFragment
const root = ReactDom.createRoot(rootElement)
root.render(
  <StrictMode>
    <Provider stores={stores}>
      <HashRouter>
        <Suspense>
          <Router />
        </Suspense>
      </HashRouter>
    </Provider>
  </StrictMode>
)
