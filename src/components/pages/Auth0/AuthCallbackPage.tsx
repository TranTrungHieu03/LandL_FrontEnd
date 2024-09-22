import Loading from '@/components/templates/Loading'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import auth from '@/services/authService'
import { UserSignInGGType } from '@/schemas/userSchema.ts'
import toast from 'react-hot-toast'
import authService from '@/services/authService.ts'
import { useAuth } from '@/context/authContext.tsx'

const AuthCallbackPage = () => {
  const navigate = useNavigate()
  const { user } = useAuth0()
  const hasCreatedUser = useRef(false)
  const { setAuth } = useAuth()
  const handleSignInWithGG = async (user: any) => {
    const data: UserSignInGGType = {
      email: user.email,
      userName: user.nickname!,
      fullName: user.given_name!,
      avatar: user.picture!,
      typeAccount: 'Customer'
    }
    const response = await auth.loginWithGG({ data })
    if (response.success) {
      localStorage.setItem('accessToken', response?.result?.data as string)
      const result = await authService.getUserInfo()
      if (result.success) {
        setAuth({ user: result.result?.data })
      }
      toast.success(response?.result?.message as string)
    } else {
      toast.error(response?.result?.message as string)
    }
  }

  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      handleSignInWithGG(user)
      hasCreatedUser.current = true
    }
    navigate('/')
  }, [user, navigate])
  return <Loading />
}

export default AuthCallbackPage
