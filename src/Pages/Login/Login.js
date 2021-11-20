import { Alert, Button, Card, Container, TextField } from '@mui/material'
import './Login.css'
import React, { useContext, useEffect, useState } from 'react'

import { Students } from '../../Data/Students'
import { IsLoggedIn } from '../../Services/Login'
import { useNavigate } from 'react-router'
export default function Login() {
    const { log, setLog } = useContext(IsLoggedIn)
    const navigate = useNavigate()
    useEffect(() => {
        if (log === true) navigate('/Exam')
        window.history.pushState(setLog(false), null, null)
    }, [])
    const [login, setLogin] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [validation, setValidation] = useState({
        nameVal: null,
        passwordVal: null,
        emailVal: null
    })
    const [message, setMessage] = useState("")
    const handleForm = (e) => {
        switch (e.target.name) {
            case "name":
                setLogin({
                    ...login,
                    name: e.target.value
                });
                setValidation({
                    ...validation,
                    nameVal: e.target.value.length === 0 ?
                        "This Input Is Required" :
                        e.target.value.length < 3 ?
                            "min length 3 chars" :
                            (!(/^[a-zA-Z]{3,}(?: [a-zA-Z]*){0,2}$/).test(e.target.value)) ?
                                "Name not valid" : null
                })
                break;
            case "email":
                setLogin({
                    ...login,
                    email: e.target.value
                })
                setValidation({
                    ...validation,
                    emailVal: e.target.value.length === 0 ?
                        "This Input Is Required" :
                        e.target.value.length < 3 ? "min length 3 chars" :
                            (!(/^[a-zA-Z0-9]+@[a-zA-Z]+\.[A-Za-z]+$/).test(e.target.value)) ?
                                "Not Valid Email" : null
                })
                break;
            case "password":
                setLogin({
                    ...login,
                    password: e.target.value
                })
                setValidation({
                    ...validation,
                    passwordVal: e.target.value.length === 0 ?
                        "This Field Is Required" :
                        e.target.value.length < 6 ? "min length 6 chars" :
                            (!(/^[0-9]{6,}$/).test(e.target.value)) ?
                                `Not Valid 'numbers only'` : null
                })
                break;
            default:
                break;
        }
    }

    const LoggedIn = () => {
        const getStudent = Students.find(
            e => e.password === login.password
                && e.name === login.name
                && e.email === login.email)
        getStudent === undefined ?
            setMessage("Student Not Founded") : setLog(true); navigate('/Exam')
    }

    return (
        <>
            <Container sx={{
                margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center",
                minHeight: "100vh", textAlign: "center"
            }}>
                <Card>
                    <h1>Login</h1>
                    {message && <Alert severity="error" style={{ margin: '5px' }}>{message}</Alert>}
                    <div className="Login">
                        <TextField
                            id="standard-basic"
                            label="Full Name"
                            variant="standard"
                            type="text"
                            name="name"
                            margin="normal"
                            required
                            error={validation.nameVal !== null}
                            helperText={`${validation.nameVal ? validation.nameVal : ''}`}
                            value={login.name}
                            onChange={handleForm}
                        />
                        <TextField
                            id="standard-basic"
                            label="Email"
                            variant="standard"
                            type="email"
                            name="email"
                            margin="normal"
                            required
                            error={validation.emailVal !== null}
                            helperText={`${validation.emailVal ? validation.emailVal : ''}`}
                            value={login.email}
                            onChange={handleForm}
                        />
                        <TextField
                            id="standard-basic"
                            label="Password"
                            variant="standard"
                            type="password"
                            name="password"
                            margin="normal"
                            required
                            error={validation.passwordVal !== null}
                            helperText={`${validation.passwordVal ? validation.passwordVal : ''}`}
                            value={login.password}
                            onChange={handleForm}
                        />
                        <div className="Button">
                            <Button
                                disabled={!login.name || !login.email || !login.password ||
                                    validation.nameVal !== null || validation.emailVal !== null || validation.passwordVal !== null}
                                variant="contained"
                                color="primary"
                                onClick={() => {
                                    LoggedIn()
                                }}
                            >
                                Log In
                            </Button>
                        </div>
                    </div>
                </Card>
            </Container>
        </>
    )
}
