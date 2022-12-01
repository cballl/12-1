import {getSongPlaySiteType, getSongType} from '../../../store/activeType'

const data = {
    songData:[],
    songPlaySite:[]
}


const Song = (state=data,action) =>{
    switch (action.type) {
        case getSongType:
            return {...state,songData: action.result}
        case getSongPlaySiteType :
            return {...state,songPlaySite:action.songPlaySite}
        default:
            return state
    }
}


export  default  Song