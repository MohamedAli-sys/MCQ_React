import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Question from '../../Components/QuestionCard/Question'
import { exam } from '../../Data/Questions'

export default function Questions() {
    const [Quest, setQuest] = useState(exam)
    useEffect(() => {
    }, [])
    return (
        <>
            <Container sx={{
                margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center",
                minHeight: "80vh"
            }}>
                <Question data={Quest} />
            </Container>
        </>
    )
}
