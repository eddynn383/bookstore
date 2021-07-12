import React from 'react'
import { Container } from 'react-bootstrap'
import Logo from './Logo'
import Navigation from './Navigation'
import ActionButtons from './ActionButtons'

export default function Header() {
    return (
        <Container className="d-flex align-items-center">
            <Logo />
            <Navigation />
            <ActionButtons/>
        </Container>
    )
}
