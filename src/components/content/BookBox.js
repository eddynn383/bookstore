import React from 'react'
import {Card } from 'react-bootstrap'

export default function BookBox({details}) {
    return (
        <Card className="w-100 h-100 mx-3">
            <Card.Body className="d-flex flex-column align-items-center">
                <img src={details.imageLinks.thumbnail} alt={details.title} />
                <p className="mb-0 mt-4 fw-bold lh-sm text-center">{details.title}</p>
            </Card.Body>
        </Card>
    )
}
