import React from 'react'
import NoUser from './NoUser'
import User from './User'

import { useAuth } from '../../contexts/AuthProvider'

export default function ProfilePanel() {

    const { currentUser } = useAuth()
    
    return (
        <div className="action-panel action-panel--profile">
            {!currentUser ? <NoUser /> : <User />}
        </div>
    )
}
