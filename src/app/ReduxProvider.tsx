'use client'

import { FC } from "react"
import { persistor, store } from "@/store/store"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"


const ReduxProvider: FC<{ children: React.ReactNode }> = ({ children }) => {

  if (!persistor) return children

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default ReduxProvider