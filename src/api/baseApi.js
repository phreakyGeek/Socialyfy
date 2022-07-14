import axios from "axios";

const post = async (url,Body) => {
    try{
        const response = await axios.post(url,Body);
        if(response ){
            return response
        }
    }catch(error){
        return error;
    }
}

const put = async (url,Body) => {
    try{
        const response = await axios.put(url,Body);
        if(response){
            return response.data
        }
    }catch(error){
            return error;
    }
}


const patch = async (url,Body) => {
    try{
        const response = await axios.patch(url,Body);
        if(response){
            return response.data
        }
    }catch(error){
        return error;
    }
}

const get = async (url) => {
    try{
        const response = await axios.get(url);
        if(response){
            return response
        }
    }catch(error){
        return error;
    }
}

const deleteAxios = async (url,Body) => {
    try{
        const response = await axios.delete(url,{data:Body});
        if(response){
            return response.data
        }
    }catch(error){
            return error;
    }
}


export { get, post, put, patch, deleteAxios };