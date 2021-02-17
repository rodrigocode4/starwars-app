import React, { useState, useContext, createContext } from 'react'
import { Character } from 'Utils/types'

export const FunctionContext = React.createContext(Function())

export const data: Array<Character> = [
  {
    name: '',
    gender: '',
    homeworld: '',
    url: ''
  }
]

export const CharacterContext = React.createContext(data)

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

type Props = {
  children: React.ReactNode
}

export const TransportPrivider = ({ children }: Props) => {
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
