import React, { useState, useContext, createContext } from 'react'

type SearchType = {
  search: string
  setSearch: (query: string) => void
}
const SearchContext = createContext<SearchType>({
  search: '',
  setSearch: (): void => {
    throw new Error('A função setSearch dever ser revisada!')
  }
})

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [search, setSearch] = useState<string>('')
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = (): SearchType => {
  const context = useContext(SearchContext)
  if (!context) throw Error('useStarship deve estar usado em um SearchProvider')
  return context
}
