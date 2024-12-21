'use client'

import React, { ReactElement } from 'react'
import * as AiReactIcons from 'react-icons/ai'

const DynamicReactIcons = () => {

    /**
     * 
     * @param iconName 
     * @returns 
     */

    const DisplayIcons = (iconName: string) => {   
        return (AiReactIcons as any)[iconName]
    }

    const icons = [
        {
            icon: 'AiFillApple',
            title: 'Account Book'
        },
        {
            icon: 'AiFillGithub',
            title: 'Account',
        },
        {
            icon: 'AiFillApple',
            title: 'Account 2'
        }
    ]

    return (
        <div>
            {
                icons.map((icon, index) => {
                    const IconComponent = DisplayIcons(icon.icon);
                    return IconComponent ? React.createElement(IconComponent, { key: index }) : null;
                })
            }
        </div>
    )
}

export default DynamicReactIcons
