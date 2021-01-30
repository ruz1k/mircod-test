import React from 'react'
import logo from '../../img/Logo.svg'
import './header.sass'
import { NavLink } from 'react-router-dom'
import {HeartOutlined, SearchOutlined} from '@ant-design/icons'

const Header = () => {
    return (
        <header>
            <div className="header__container">
                <div className="container__item-logo">
                    <img src={logo} alt='logo' />
                    <span>Framework</span>
                </div>
                <div className="container__item-sign-in">
                    <NavLink to='/'>Sign in</NavLink>
                </div>
            </div>
            <div className='header__submenu'>
                <div className='submenu__container'>
                    <div className="container__sections">
                    <NavLink activeClassName='active' to='/'>Constructor</NavLink>
                    <NavLink activeClassName='active' to='https://mircod.com/ru/'>Help</NavLink>
                    <NavLink activeClassName='active' to='https://mircod.com/ru/'>User panels</NavLink>
                    <NavLink activeClassName='active' to='https://mircod.com/ru/'>Faq</NavLink>
                    <NavLink activeClassName='active' to='https://mircod.com/ru/'>About</NavLink>
                    <NavLink activeClassName='active' to='https://mircod.com/ru/'>Blog</NavLink>
                    </div>
                    <div className='container__like-search'>
                        <HeartOutlined />
                        <SearchOutlined />
                    </div>
                </div>
            </div>
            <div className="header__page-name">
                <span>[</span>
                <p>Chip <span className=''>Constructor</span></p>
                <span>]</span>
            </div>
        </header>
    )
}

export default Header