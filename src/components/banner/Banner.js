import React from 'react'
import WelcomeMessage from './WelcomeMessage'
import SearchBar from './SearchBar'
import { Container } from 'react-bootstrap'

export default function Banner() {
    return (
        <Container className="d-flex flex-column justify-content-center h-100"> 
            <WelcomeMessage />
            <SearchBar />
        </Container>
    )
}
