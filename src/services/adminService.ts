import { get, post, ResponseProps } from '@/services/root.ts'

export const getUserTypeLogin = async (): Promise<ResponseProps> => {
    return await get('User/GetUserTypeLogin')
}

export const getUserRole = async (): Promise<ResponseProps> => {
    return await get('User/GetRoleForAdmin')
}

export const getUserAge = async (): Promise<ResponseProps> => {
    return await get('User/GetUserAge')
}

export const getAllUser = async (page: number): Promise<ResponseProps> => {
    return await get(`User/Get-All?page=${page}`)
}