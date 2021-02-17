import React, { useState, useContext, createContext } from 'react'

type TransportContextType = {
  param: string
  setParam: (param: string) => void
  modalVisible: boolean
  setModalVisible: (param: boolean) => void
  name: string
  setName: (param: string) => void
}

const TransportContext = createContext<TransportContextType>({
  param: '',
  setParam: (): void => {
    throw new Error('A função setParam dever ser substituída')
  },
  modalVisible: false,
  setModalVisible: (): void => {
    throw new Error('A função setModalVisible dever ser substituída')
  },
  name: '',
  setName: (): void => {
    throw new Error('A função setName dever ser substituída')
  }
})

export const TransportPrivider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [param, setParam] = useState<string>('')
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  return (
    <TransportContext.Provider
      value={{ param, setParam, modalVisible, setModalVisible, name, setName }}
    >
      {children}
    </TransportContext.Provider>
  )
}

export const useTransport = () => {
  const context = useContext(TransportContext)
  if (!context)
    throw new Error('useStarship deve set usado em um StartshipPrivider')
  return { ...context }
}
