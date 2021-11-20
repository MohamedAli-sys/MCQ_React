import { Container } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import Question from '../../Components/QuestionCard/Question'
import { exam } from '../../Data/Questions'
import { IsLoggedIn } from '../../Services/Login'
import { Results } from '../../Services/Result'

export default function Questions() {
    const [Quest] = useState(exam)
    const { res, setRes } = useContext(Results)
    const nav = useNavigate()
    const [config, setConfig] = useState({
        current: 0,
        Quest: Quest,
    })
    const { log, setLog } = useContext(IsLoggedIn)
    useEffect(() => {
        setRes({ count: 0, answered: true })
        if (log === false) nav('/Login')
        window.history.pushState(setLog(false), null, null)
    }, [])
    const handleQuestion = (a) => {
        if (a.e.isCorrect) {
            setRes({ ...res, count: res.count++ })
        }
        if (config.current < 6) {
            setConfig({ ...config, current: config.current + 1 })
            setRes({ ...res, answered: false })
        } else {
            setRes({ ...res })
            nav('/Result')
        }
    }
    return (
        <>
            <Container sx={{
                margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center",
                minHeight: "80vh"
            }}>
                <Question handle={handleQuestion} dataSet={config.Quest[config.current]} counter={config.current} />
            </Container>
        </>
    )
}
