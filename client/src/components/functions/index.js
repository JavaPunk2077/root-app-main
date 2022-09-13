import * as api from '../api';

export const getImage = async()=>{
    try {
        const {data} = await api.getImage();
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getAudio = async()=>{
    try {
        const {data} = await api.getAudio();
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getVideo = async()=>{
    try {
        const {data} = await api.getVideo();
        return data
    } catch (error) {
        console.log(error)
    }
}






