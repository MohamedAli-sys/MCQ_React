import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { IsLoggedIn } from '../../Services/Login'

export default function Logout() {
    const { setLog } = useContext(IsLoggedIn)
    const nav = useNavigate()
    useEffect(() => {
        setLog(false)
        nav('/Login')
    }, [])
    return (<></>)
}
