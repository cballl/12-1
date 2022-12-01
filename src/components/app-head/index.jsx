import React, {useEffect} from 'react';
import {NavLink, useLocation, useNavigate} from "react-router-dom";

import routers from '@/router/index';
import {DivIndex, Root, FatherRoot} from "./style";
import baseImg from '../../assets/img/triangle.png'

function Header(props) {
    const {pathname} = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (pathname === '/' || pathname === '/*') {
            navigate("/*/recommend");
        }
    });

    return (
        <FatherRoot>
            <Root>
                <div className={'img-box'}>
                    <img src={require('../../assets/img/wyy02.png')} alt=''/>
                </div>
                <DivIndex>
                    {
                        routers.map((item, index) => {
                            return (
                                <NavLink
                                    to={item.path}
                                    key={index}
                                    className={'NavLink'}
                                    style={(e) => {
                                        return e.isActive ? {
                                            color: 'red',
                                            backgroundColor: '#000000',
                                            backgroundImage: `url(${baseImg})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: '38px 72px',
                                            backgroundSize: "14px 8px"

                                        } : {}
                                    }}
                                >
                                    {
                                        routers[routers.length - 1].name === item.name &&
                                        <span>
                                        <img src={require('../../assets/img/sophiebonne.png')} alt='11'/>
                                     </span>
                                    }
                                    {item.name}
                                </NavLink>
                            )
                        })
                    }

                    <div className={'rightDiv'}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-search" viewBox="0 0 16 16" style={{marginLeft:'6px'}}>
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                            <input/>
                        </div>
                        <div>
                            创作者中心
                        </div>
                        <div>登录</div>
                    </div>

                </DivIndex>
            </Root>

        </FatherRoot>


    );
}

export default Header;