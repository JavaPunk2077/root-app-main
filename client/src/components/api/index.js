import axios from 'axios';
export const getImage = ()=>axios.get("http://localhost:4001/creater/image");
export const getAudio = ()=>axios.get("http://localhost:4001/creater/audio");
export const getVideo = ()=>axios.get("http://localhost:4001/creater/video");