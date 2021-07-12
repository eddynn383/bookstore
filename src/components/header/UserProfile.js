import React from 'react'
import ProfilePanel from './ProfilePanel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'

export default function UserProfile({ handleClick, elemState }) {
    return (
        <div className="action-btn">
            <Button type="button" className="rounded-circle text-white" variant="profile" style={{width: "40px", height: "40px"}} onClick={handleClick()}>
                <FontAwesomeIcon icon={faUser} />
            </Button>
            {elemState && <ProfilePanel />}
        </div>
    )
}
