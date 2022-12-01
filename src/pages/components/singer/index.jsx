import React, {useEffect} from 'react';


import {Root} from  './style'
import {getEnterSigenAsync} from '../../../store/reducers/recommend/activeCreate'
import {useDispatch, useSelector} from "react-redux";
import {Button} from "antd";
function Singer(props) {
   const dispatch = useDispatch()

    useEffect(()=>{
        getEnterSigenAsync().then(res=>{
             dispatch(res)
        })
    },[dispatch])

    const selector =useSelector((state)=>{
        return state.recommend.singer

    })


//         <div className={'Root-index-right'}>
//         <div></div>
//     <div>
//         <div>111111111</div>
//         <div>22221111</div>
//     </div>
// </div>
    return (
        <Root>
            <div className={'Root-index'}>
                <div className={'Root-index-header'}>
                    <div>入住歌手</div>
                    <div>查看全部</div>
                </div>
                <hr/>
                <div>
                    {
                        selector.map((item,index)=>{
                            return (
                                <div className={'Root-index-right'} key={item.id}>
                                    <div style={{
                                        backgroundImage:`url(${item.picUrl})`,
                                        backgroundSize:'70px'
                                    }}></div>
                                    <div>
                                        <div>{item.name}</div>
                                        <div>{item.alias.join()}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <Button style={{
                    marginTop:'20px',
                    marginBottom:'20px',
                    width:'100%'
                }}>
                    <div>申请成为网易音乐人</div>
                </Button>
            </div>
        </Root>
    );
}

export default Singer;