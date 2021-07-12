import React from 'react'

export default function WelcomeMessage() {
    const styles = {
        fontSize: "5rem",
        lineHeight: "0.6",
        fontWeight: "bold",
        color: 'var(--bs-primary)'
    }
    return (
        <div className="text-white mb-4">
            <h1 className="text-uppercase mb-4">
                <span className="d-block fs-6">Our Biggest</span>
                <span className="d-block fw-bolder">Summer</span>
                <span className="d-block" style={styles}>Sale</span>
            </h1>
            <p className="fs-3 mb-0">Order now, only while the prices are still low</p>
        </div>
    )
}
