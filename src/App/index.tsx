import React from 'react'
import Layout from 'Layout'
import { TransportPrivider } from 'Utils/context'
import { SearchProvider } from 'Utils/search.context'

function App() {
  return (
    <>
      <SearchProvider>
        <TransportPrivider>
          <Layout />
        </TransportPrivider>
      </SearchProvider>
    </>
  )
}

export default App
