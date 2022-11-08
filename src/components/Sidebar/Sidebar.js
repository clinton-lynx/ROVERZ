import React from "react";
// import * as  FaIcons from "react-icons/fa"
import * as AmenitiesIcon from "react-icons/io"
import * as Cancelbtn from "react-icons/ai"
import { Link, useLocation } from "react-router-dom"
import './index.scss'
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
// import { slide as Menu } from 'react-burger-menu';


const SidebarItems = [
    {
        title: 'Amenities',
        to: '/result',
        icons: <AmenitiesIcon.IoIosCreate />,
        // image: ""
    },
    {
        title: 'Hotels',
        to: '/result',
        icons: <AmenitiesIcon.IoIosBed />
    },
    {
        title: 'Resturrants',
        to: '/result',
        icons: <AmenitiesIcon.IoIosCafe />
    },
    {
        title: 'Malls',
        to: '/result',
        icons: <AmenitiesIcon.IoIosCart />
    },
    {
        title: 'Event Places',
        to: '/result',
        icons: <AmenitiesIcon.IoIosPeople />
    },
    {
        title: 'Cinemas',
        to: '/result',
        icons: <AmenitiesIcon.IoIosTv />
    },
    {
        title: 'Night Clubs',
        to: '/result',
        icons: <AmenitiesIcon.IoIosMoon />
    }
]
const Sidebar = () => {
    const [activeIndex, setactiveIndex] = useState(0)
    const [StepHeight, setStepHeight] = useState(0)
    const [navbarOpen, setNavbarOpen] = useState(false)
    const sidebaRef = useRef()
    const indicatorRef = useRef()
    const location = useLocation()

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebaRef.current.querySelector('.side-bar-menu-items');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`
            setStepHeight(SidebarItems.clientHeight)
        }, 50)
    }, [])


    //change active index

    useEffect(() => {
        const curpath = window.location.pathname.split('/')[1];
        const activeItem = SidebarItems.findIndex(item => item.section === curpath);
        setactiveIndex(curpath.length === 0 ? 0 : activeItem)
    }, [location]);





    return (
        <div className={`side-bar-parent-container ${navbarOpen ? " showMenu" : ""}`} >
            <div ref={sidebaRef} className="side-bar-menu-container">
                <div
                    ref={indicatorRef}
                    style = {{transform: `translateX(-50%) translateY(${activeIndex*StepHeight});`}}
                    className="side-bar-indicator">
                    {
                        SidebarItems.map((items, Index) => (
                            <Link style={{ textDecoration: 'none' }} to={items.to} key={Index}>
                                <div className={`side-bar-menu-items  ${activeIndex === Index ? 'actve' : ''}`}>
                                    <div className="side-bar-menu-icon">
                                        {items.icons}
                                    </div>

                                    <div className="side-bar-menu-text">
                                        {items.title}
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>

            <div className="cancel-btn-container">
                <Cancelbtn.AiOutlineClose/>
            </div>
        </div>
    )
}

export default Sidebar