import React from 'react';

import {Root} from './style'

function Tab(props) {
    const {tab} = props
    return (
        <Root>
            <div className={'DivOne'}>
                <div>
                    <img src={require('../../../assets/img/hotRecommended.png')} alt=""/>
                    <span>{tab.title}</span>
                </div>
                <div style={tab.body ? {display:"block"} :{display:"none"}}>
                  <div className={'DivTwo'}>
                      <div>华语</div>
                      <span>|</span>
                      <div>流行</div>
                      <span>|</span>
                      <div>音乐</div>
                      <span>|</span>
                      <div>电子</div>
                      <span>|</span>
                      <div>民谣</div>
                  </div>
                </div>
            </div>
            <div className={'DivThree'}>
                <div className={'right-end'}>{tab.endTitle}</div>
            </div>
        </Root>
    );
}

export default Tab;