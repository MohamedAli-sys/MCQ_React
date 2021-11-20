import { Button, Card, CardActions, CardContent, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { IsLoggedIn } from '../../Services/Login'
import { Results } from '../../Services/Result'

export default function Result() {
    const { res } = useContext(Results)
    const { log } = useContext(IsLoggedIn)
    const navigate = useNavigate()

    useEffect(() => {
        if (log === false) navigate('/Login')
        window.history.pushState(null, null)
    }, [])
    let result = Math.floor(res.count / 7 * 100)
    return (
        <>
            <Container sx={{
                margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center",
                minHeight: "80vh"
            }}>
                <Box component="div" sx={{ minWidth: "80vw" }}>
                    <Card sx={{ padding: "20px 30px" }}>
                        <CardContent>
                            <Typography component="div" variant="h3">
                                Your Results is ( {result}% )
                            </Typography>
                            <Typography sx={{ marginY: "20px" }} component="div" variant="body">
                                Thank you to complete this exam hope to listen from you very soon
                            </Typography>
                            <Typography sx={{ fontSize: 14, marginY: "20px" }} color="text.secondary" component="div" variant="body2">
                                With My Best Wishes
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ justifyContent: "end" }}>
                            <Button component={Link} to="/Logout" variant="outlined" color="primary">
                                Logout
                            </Button>
                        </CardActions>
                    </Card>
                </Box>
            </Container>
        </>
    )
}
