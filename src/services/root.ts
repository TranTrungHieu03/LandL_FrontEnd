import axios, { AxiosError, AxiosResponse } from 'axios'
import toast from 'react-hot-toast'
import { jwtDecode, JwtPayload } from 'jwt-decode'
import authService from '@/services/authService.ts'

const BASE_URL = import.meta.env.VITE_ORIGINAL_URL || ''
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})
api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken')
  let decode = null
  if (accessToken) {
    decode = jwtDecode<JwtPayload>(accessToken ?? '')
  }
  const refreshToken = async () => {
    const response = await authService.getRefresh()
    if (response.success) {
      localStorage.setItem('accessToken', response.result?.data)
    }
  }
  if (decode?.exp && accessToken && decode?.exp * 1000 > Date.now()) {
    refreshToken()
  }

  if (accessToken) {
    config.headers.set('Authorization', `Bearer ${accessToken}`)
  }
  return config
})

export interface ResponseProps<T = any> {
  success?: boolean
  result?: {
    message?: string
    data?: T
  }
}

const handleApiError = (error: AxiosError) => {
  const { response } = error
  if (response?.status === 401) {
    toast.error('Please login again.')
  }
  return response?.data as ResponseProps
}

export const get = async <T>(url: string): Promise<T | ResponseProps> => {
  try {
    const response: AxiosResponse<T> = await api.get<T>(url)
    return response.data
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      handleApiError(error)
    }
    throw error
  }
}

export const post = async <T>(url: string, data?: unknown): Promise<T | ResponseProps> => {
  try {
    const response: AxiosResponse<T> = await api.post<T>(url, data)
    console.log(response)
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      return handleApiError(error)
    }
    throw error
  }
}

export const put = async <T>(url: string, data?: unknown): Promise<T | ResponseProps> => {
  try {
    const response: AxiosResponse<T> = await api.put<T>(url, data)
    return response.data
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return handleApiError(error)
    }
    throw error
  }
}

export const patch = async <T>(url: string, data: unknown): Promise<T | ResponseProps> => {
  try {
    const response: AxiosResponse<T> = await api.patch<T>(url, data)
    return response.data
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return handleApiError(error)
    }
    throw error
  }
}

export const del = async <T>(url: string): Promise<T | ResponseProps> => {
  try {
    const response: AxiosResponse<T> = await api.delete<T>(url)
    return response.data
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      handleApiError(error)
    }
    throw error
  }
}

export const patchFormData = async <T>(url: string, data: unknown): Promise<T | ResponseProps> => {
  try {
    const accessToken = localStorage.getItem('accessToken')
    const response: AxiosResponse<T> = await axios
      .create({
        baseURL: BASE_URL,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`
        }
      })
      .patch<T>(url, data)
    return response.data
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      handleApiError(error)
    }
    throw error
  }
}
