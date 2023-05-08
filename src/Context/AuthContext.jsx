import { createContext, useState, useContext } from 'react'
import { Connect} from '../logic/Ether'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(false)

  const Login = async() => {
    const wallet = await Connect()
    setUser(wallet)
  }

  const Logout = () => {
    setUser(false)
  }

  const state = {
    user
  }
  const actions = {
    Login,
    Logout
  }

  return (
    <AuthContext.Provider value={{state, actions}}>
      {children}
    </AuthContext.Provider>
  )
}


export function useAuth() {
  const { 
    state: {user}, 
    actions: {Login, Logout} } = useContext(AuthContext);

  return { user, Login, Logout }
}