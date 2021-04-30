import React from 'react'

export const GlobalStoreContext = React.createContext()

export const useGlobalStore = () => React.useContext(GlobalStoreContext)

export const GlobalStoreProvider = ({ children }) => {
    const [users, setUsers] = React.useState({})
    const [servers, setServers] = React.useState({})
    const [channels, setChannels] = React.useState({})
    const [messages, setMessages] = React.useState({})

    return <GlobalStoreContext.Provider
        value={{
            users,
            setUsers,
            servers,
            setServers,
            channels,
            setChannels,
            messages,
            setMessages
        }}
    >
        {children}
    </GlobalStoreContext.Provider>
}
