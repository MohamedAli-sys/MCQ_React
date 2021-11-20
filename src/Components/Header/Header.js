import { AppBar, Button, Container, IconButton, Toolbar, Typography } from '@mui/material'
import './Header.css'
import { Box } from '@mui/system'
import React from 'react'

export function Header() {

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Container >
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                MCQ
                            </Typography>
                            <Button color="inherit">
                                <a href="logout">Logout</a>
                            </Button>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
        </>
    )
}
