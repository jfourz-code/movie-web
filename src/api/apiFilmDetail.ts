import { axiosInstance } from "@/lib/axios";


export const getDetail = async (mediaType: string, id: string) => {
    const response = await axiosInstance.get(`/${mediaType}/${id}`);
    return response.data;
}

export const getCredits = async (mediaType: string, id: string) => {
    const response = await axiosInstance.get(`${mediaType}/${id}/credits`);
    return response.data;
}