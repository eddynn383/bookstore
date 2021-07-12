import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthProvider' 
import { Link } from 'react-router-dom'
import logo from '../bookstore.svg';

export default function ForgotPassword() {
    const emailRef = useRef()

    const { resetPassword } = useAuth()

    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('An reset code was sent to your email address')
        } catch (err) {
            const error = err.message
            setError(error)
        }
        setLoading(false)
    }

    return (
        <>
            <Card className="w-100 border-0 shadow overflow-hidden" style={{maxWidth: "900px", height: "50vh", minHeight: "300px", maxHeight: "500px"}}>
                <Card.Body className="p-0">
                    <div className="row m-0 h-100">
                        <div className="col-12 col-sm-5 bg-primary d-flex flex-column justify-content-center align-items-center text-white p-4">
                            <img src={logo} alt="Bookstore" className="mb-4" style={{maxWidth: "100px"}}/>
                            <h1>Welcome!</h1>
                            <p>Don't have an account?</p>
                            <Link to="/signup" className="btn btn-secondary text-white mt-4 text-uppercase shadow-sm">Sign Up</Link>
                        </div>
                        <div className="col-12 col-sm-7 p-4 bg-light d-flex flex-column justify-content-center">
                            <Form onSubmit={handleSubmit}>
                                {error && <Alert variant="danger">{error}</Alert>}
                                {message && <Alert variant="success">{message}</Alert>}
                                <Form.Group id="email" className="mb-2">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required /> 
                                </Form.Group>
                                <Button type="submit" disabled={loading} className="mt-2 text-white text-uppercase shadow-sm">Reset Password</Button>
                            </Form>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}
