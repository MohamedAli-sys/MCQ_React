import { Button, Card, CardActions, CardContent, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router'
import { IsLoggedIn } from '../../Services/Login'
import { Results } from '../../Services/Result'


export default function Question({ handle, dataSet, counter }) {
    const { res, setRes } = useContext(Results)
    const [checker, setChecker] = useState()
    const handleAnswers = (e) => {
        setRes({ ...res, answered: true })
    }

    const quest = (e) => {
        setChecker({ e })
    }
    const { log } = useContext(IsLoggedIn)
    const navigate = useNavigate()

    useEffect(() => {
        if (log === false) navigate('/Login')
        window.history.pushState(null, null, null)
    }, [])
    return (
        <>
            <Box component="div" sx={{ minWidth: "80vw" }}>
                <Card sx={{ padding: "20px 30px" }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Question {counter + 1} : 7
                        </Typography>
                        <Typography component="div" variant="h5">
                            {dataSet.question}
                        </Typography>
                        <Typography component="div" variant="body2">
                            <FormControl component="fieldset">
                                <RadioGroup
                                    aria-label="answer"
                                    name="answer"
                                    onChange={handleAnswers}
                                >
                                    {dataSet.answers.map((a, i) => {
                                        return (
                                            <FormControlLabel key={i} value={a.answer} control={<Radio onClick={() => quest(a)} />} label={a.answer} />
                                        )
                                    })}
                                </RadioGroup>
                            </FormControl>
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "end" }}>
                        <Button onClick={() => handle(checker)} size="small" disabled={!res.answered}>{counter === 6 ? "Result" : "Next"}</Button>
                    </CardActions>
                </Card>
            </Box>

        </>
    )
}
