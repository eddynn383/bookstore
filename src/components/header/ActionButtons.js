import React, { useState } from 'react'
import UserProfile from './UserProfile'
import ShoppingCart from './ShoppingCart'

export default function ActionButtons({ forwardedRef }) {
    const [profileState, setProfileState] = useState(false)
    const [shoppingState, setShoppingState] = useState(false)

    const handleProfilePanel = (e) => {
        e.preventDefault()
        setProfileState(!profileState)
        setShoppingState(false)
    }

    const handleShoppingPanel = (e) => {
        e.preventDefault()
        setShoppingState(!shoppingState)
        setProfileState(false)
    }

    return (
        <div className="action-btns">
            <UserProfile testRef={forwardedRef} handleClick={() => handleProfilePanel} elemState={profileState}/>
            <ShoppingCart handleClick={() => handleShoppingPanel} elemState={shoppingState}/>
        </div>
    )
}
