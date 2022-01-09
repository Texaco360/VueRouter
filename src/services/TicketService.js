import axios from "axios";

const clientApiService = axios.create({
    baseURL:'https://my-json-server.typicode.com/Texaco360/fakejson/',
    withCredentials:false,//geen inlog gegevens
    header:{
        Accept:'application/json',
        'Content-type':'application/json'
    }
})

export default {
    getEvents(){
        return clientApiService.get('events')
    },
    getEvent(id){
        return clientApiService.get('events/'+id)
    }
}