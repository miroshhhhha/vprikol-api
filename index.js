//author: miroshhhhha#6234
const axios = require('axios');
class API{
    members = async (server, fraction_id, token) =>{   
        await axios.get(`https://api.vprikol.dev/members?token=${token}&fraction_id=${fraction_id}&server=${server}`).then(async response =>{
            return response.data
        }).catch(e => {
            return e.response.data
        })
    }
    find = async (server, nick, token) =>{
        await axios.post(`https://api.vprikol.dev/find/createTask?server=${server}&nick=${nick}&token=${token}`).then(async response =>{
            let data = response.data
            await axios.get(`https://api.vprikol.dev/find/getTaskResult?request_id=${data.request_id}`).then(async results =>{
                let result = results.data
                return result
            })
        }).catch(e => {
            this.find(server, nick, token)
            return e.response.data
        })
    }
    rating = async (server, type, token) =>{
        await axios.get(`https://api.vprikol.dev/rating?server=${server}&type=${type}&token=${token}`).then(async response =>{
            return response.data
        }).catch(e => {
            return e.response.data
        })
    }
    status = async (token, server) =>{
        if (!server){
            await axios.get(`https://api.vprikol.dev/status?token=${token}`).then(async response =>{
                return response.data
            }).catch(e => {
                return e.response.data
            })
        } else {
            await axios.get(`https://api.vprikol.dev/status?token=${token}&server=${server}`).then(async response =>{
                return response.data
            }).catch(e => {
                return e.response.data
            })
        }
    }
    get_estate = async (server, estate_type, token) =>{
        await axios.get(`https://api.vprikol.dev/get_estate?server=${server}&estate_type=${estate_type}&token=${token}`).then(async response =>{
            return response.data
        }).catch(e => {
            return e.response.data
        })
    }
    checkrp = async (nick, token) =>{
        await axios.get(`https://api.vprikol.dev/checkrp?nick=${nick}&token=${token}`).then(async response =>{
            return response.data
        }).catch(e => {
            return e.response.data
        })
    }
    checkrp = async (gender, nation, token) =>{
        await axios.get(`https://api.vprikol.dev/rpnick?gender=${gender}&nation=${nation}&token=${token}`).then(async response =>{
            return response.data
        }).catch(e => {
            return e.response.data
        })
    }
    ip = async (token, ip) =>{
        await axios.get(`https://api.vprikol.dev/ip?token=${token}&ip=${ip}`).then(async response =>{
            return response.data
        }).catch(e => {
            return e.response.data
        })
    }
}

module.exports = new API()