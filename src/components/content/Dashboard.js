import React, { useState, useEffect } from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import BookCategoryList from './BookCategoryList'

export default function Dashboard() {
    // const { currentUser, logout } = useAuth()
    // const searchRef = useRef();
    // const history = useHistory()

    // async function handleLogout(e) {
    //     e.preventDefault()

    //     try {
    //         setError('')
    //         setLoading(true)
    //         await logout(currentUser)
    //         history.push('/login')
    //     } catch (err) {
    //         const error = err.message
    //         setError(error)
    //     }
    //     setLoading(false)
    // }
    
    return (
        <>
            <Container>
                <Row className="py-5">
                    <BookCategoryList categoryList="javascript"/>
                </Row>
                <Row className="py-5">
                    <BookCategoryList categoryList="fashion"/>
                </Row>
                <Row className="py-5">
                    <BookCategoryList categoryList="thriller"/>
                </Row>
            </Container>
            
        </>
    )
}
