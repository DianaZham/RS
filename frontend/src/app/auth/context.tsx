import React, {createContext, FC, PropsWithChildren, useContext, useMemo} from 'react'
import {useNavigate} from 'react-router-dom'
import {useLocalStorage} from '../../share'

type User = {
    permissions: string
    login: string
    fullName: string
    email: string
}

type AuthData = {
    login: string
    password: string
}

const AuthContext = createContext<{ user: User | undefined }>({
    user: {
        permissions: '',
        login: '',
        fullName: '',
        email: ''
    }
})

export const AuthProvider: FC<PropsWithChildren> = ({children}) => {
    const [user, setUser] = useLocalStorage('user', null)
    const navigate = useNavigate()
    
    const login = async (data: AuthData) => {
        // запрос авторизации
        setUser(data)
        navigate('/')
    }
    
    const logout = () => {
        setUser(null)
        navigate('/login', {replace: true})
    }
    
    const value = useMemo(
        () => ({
            user,
            login,
            logout
        }),
        [user]
    )
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}
