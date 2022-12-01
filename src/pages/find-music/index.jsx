import React from 'react';
import {NavLink, Route, Routes} from "react-router-dom";

import routers from "../../router";
import {Root} from "./style"
import {FatherRootTwo} from "../../components/app-head/style";

function FindMusic(props) {
    return (
        <Root>
            <FatherRootTwo numerica={340}>
                <div style={{
                    width: '340px'
                }}>
                </div>
                {routers[0].child.map((item, index) => {
                    return (
                        <NavLink
                            className={'NavLink-two'}
                            to={item.path}
                            key={index}
                            style={(e) => {
                                return e.isActive ? {
                                    backgroundColor: '#9b0909'
                                } : {}
                            }}
                        >
                            {item.name}
                        </NavLink>
                    )
                })}
            </FatherRootTwo>
            <div>
                <Routes>
                    {routers[0].child.map((item, index) => {
                        return (
                            <Route path={item.path} element={<item.component/>} key={index}/>
                        )
                    })}
                </Routes>
            </div>
        </Root>
    );
}

export default FindMusic;