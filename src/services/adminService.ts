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

export const getAllTruck = async (page: number): Promise<ResponseProps> => {
    return await get(`Truck/GetAllTruck?page=${page}`)
}

export const getTruckMiles = async (year: number = 2024): Promise<ResponseProps> => {
    return await get(`Truck/GetTotalDistance?year=${year}`)
}

export const getTruckStatusInYear = async (year: number = 2024): Promise<ResponseProps> => {
    return await get(`Truck/GetStatusTruckInYear?year=${year}`)
}

export const getAllOrder = async (page: number): Promise<ResponseProps> => {
    return await get(`Order/GetAllOrderForAdmin?page=${page}`)
}

export const getAllOrderInYear = async (year: number = 2024): Promise<ResponseProps> => {
    return await get(`Order/GetTotalOrderInYear?year=${year}`)
}