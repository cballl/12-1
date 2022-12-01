import React, { memo } from 'react';
import {BottomStyle} from './bottom'
const Bottom = memo(() => {
    return (
        <div>
            <BottomStyle>
                <div className='bottom'>
                    <div className='bottom-left'>
                        <ul className='ul-now'>
                            <li>联系我们</li>
                            <li>隐私</li>
                            <li>儿童隐私</li>
                            <li>版权投诉</li>
                            <li>广告合作</li>
                        </ul>
                        <ul className='ul-now'>
                            <li>网易公司版权所有©1997-2022杭州乐读科技有限公司运营：浙网文[2021] 1186-054号</li>
                        </ul>

                        <ul className='ul-now'>
                            <li>
                            互联网宗教信息服务许可证：浙（2022）0000120 监督举报邮箱：51jubao@service.netease.com
                            </li>
                        </ul>
                    </div>
                    <div className='bottom-right'>
                       
                    </div>
                </div>
            </BottomStyle>
        </div>
    );
});

export default Bottom;