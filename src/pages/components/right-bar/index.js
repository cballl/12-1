import React from 'react';
import {Root} from './style'
import {Button} from 'antd';


function RightBar(props) {
    return (
        <Root imgUrl={require('../../../assets/img/index.png')}>
            <div className={'Root-index'}>
                <span>
                    登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
                </span>
                <Button type="primary" danger>
                    <div>用户登录</div>
                </Button>

            </div>
        </Root>
    );
}

export default RightBar;