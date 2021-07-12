import React, {useRef, useState} from 'react'
import { Button, Alert, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar({getBooks}) {
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const searchRef = useRef();
    const styles = {
        form: {
            maxWidth: "400px",
            position: "relative"
        },
        input: {
            padding: "0.375rem 3rem 0.375rem 0.75rem",
            fontWeight: "600"
        },
        btn: {
            position: "absolute",
            right: "0",
            top: "0"
        }
    }

    return (
        <Form onSubmit={getBooks} style={styles.form}>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group id="email">
                <Form.Label className="sr-only">Search Books</Form.Label>
                <Form.Control type="text" ref={searchRef} style={styles.input} placeholder="Search Books"/> 
            </Form.Group>
            <Button type="submit" disabled={loading} className="text-primary" variant="transparent" style={styles.btn}>
                <FontAwesomeIcon icon={faSearch} />
            </Button>
        </Form>
    )
}
