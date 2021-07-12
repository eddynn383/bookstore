import React, { useState } from 'react'
import ShoppingPanel from './ShoppingPanel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'

export default function ShoppingCart({ handleClick, elemState }) {
    const [items, setItems] = useState(0)

    return (
        <div className="action-btn">
            <Button type="button" className="rounded-circle text-white ms-4" variant="shopping" style={{width: "40px", height: "40px"}} onClick={handleClick()}>
                <FontAwesomeIcon icon={faShoppingBag} />
                <span className="count-items">{items}</span>
            </Button>
            {elemState && <ShoppingPanel />}
        </div>
    )
}
