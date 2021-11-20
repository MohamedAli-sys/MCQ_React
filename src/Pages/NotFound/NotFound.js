import { Container } from '@mui/material'
import React from 'react'

export default function NotFound() {
    return (
        <>
            <Container sx={{
                margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center",
                minHeight: "80vh"
            }}>
                <h1>Not Founded</h1>
            </Container>
        </>
    )
}
