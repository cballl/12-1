import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getEaarydayRecommendAsync} from '../../../../store/reducers/recommend/activeCreate'

import ImgSwiper from '../../../components/slideshow/index'
import Tab from "../../../components/bar";
import Card from '../../../components/card'
import RightBar from "../../../components/right-bar";
import Singer from "../../../components/singer";

import {Root} from "./style";

const Recommend = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        getEaarydayRecommendAsync(8).then(res => {
            dispatch(res)
        })
    }, [dispatch])

    const selector = useSelector((state) => {
        return state
    })

    return (
        <Root>
            <div>
                <ImgSwiper/>
            </div>

            <div className={'panelDiv'}>
                <div className={'panlDiv-index'}>
                    <div className={'tab-index'}>
                        <Tab tab={{title: '热门推荐', body: true, endTitle: "更多"}}></Tab>
                        <div>
                            <Card selector={selector}/>
                        </div>
                    </div>
                    <div className={'right-index'}>
                        <RightBar/>
                        <div className={'box-right-bottom'}>
                            <Singer/>
                        </div>
                    </div>
                </div>
            </div>
        </Root>
    );
};

export default Recommend





















