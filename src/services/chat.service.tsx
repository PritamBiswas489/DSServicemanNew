import api from "../config/authApi.config";
interface Response {
	data: any;
	status: number;
	statusText: string;
	headers: any;
	config: any;
	request?: any;
}

export const getCustomerChannels = async (limit:number,offset:number): Promise<Response> => {
    try {
		const response = await api.get(`/serviceman/chat/channel-list?limit=${limit}&offset=${offset}&type=customer`);
		return response;
	} catch (error:any) {
		return error.response;
	}
}

export const getServicemanChannels = async (limit:number,offset:number): Promise<Response> => {
    try {
		const response = await api.get(`/serviceman/chat/channel-list?limit=${limit}&offset=${offset}&type=provider`);
		return response;
	} catch (error:any) {
		return error.response;
	}
}

export const getChannelMessages =  async (channelId:string,limit:number,offset:number): Promise<Response> => {
    try {
		const response = await api.get(`/serviceman/chat/conversation?channel_id=${channelId}&limit=${limit}&offset=${offset}`);
		return response;
	} catch (error:any) {
		return error.response;
	}
}
export const sendMessageInChannel = async (formData:FormData): Promise<Response> => {
	try {
		const response = await api.post(`/serviceman/chat/send-message`,formData);
		return response;
	} catch (error:any) {
		return error.response;
	}
}
export const createChatChannel = async (formData:FormData): Promise<Response> => {
	try {
		const response = await api.post(`/serviceman/chat/create-channel`,formData);
		return response;
	} catch (error:any) {
		return error.response;
	}
}