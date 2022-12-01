import React from 'react';
import {Root} from "./style";

function Card(props) {
    const sunRecommend = props.selector.recommend.sunRecommend
    const resettingNumbers = num => String(num).substring(0, 4) + '万';

    return (
        <Root>
            <div className={'cart-index-main'}>
                {
                    sunRecommend.map((item) => {
                        return (
                                <div className={'Root-index'} key={item.id}>
                                    <div className={'cart-index'}
                                         style={{backgroundImage: `url(${item.picUrl})`}}>
                                        <div className={'cartBottom'}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor"
                                                 className="bi bi-headphones" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5z"/>
                                            </svg>
                                            <span>{resettingNumbers(item.playCount)}</span>
                                            <span style={{
                                                display: "block",
                                                fontSize: '18px',
                                                cursor: "pointer"
                                            }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-play" viewBox="0 0 16 16">
                                            <path
                                                d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                                        </svg>
                                         </span>
                                        </div>
                                    </div>
                                    <div>
                                        {item.name}
                                    </div>
                                </div>
                        )
                    })
                }
            </div>
        </Root>
    );
}

export default Card;