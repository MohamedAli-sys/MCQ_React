import { Button, Card, CardActions, CardContent, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function Question({ data }) {
    return (
        <>
            <Box component="div" sx={{ minWidth: "80vw" }}>
                <Card sx={{ padding: "20px 30px" }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Question 1 : 7
                        </Typography>
                        <Typography variant="h5" component="div">
                            Question Name
                        </Typography>
                        <Typography variant="body2">
                            <FormControl component="fieldset">
                                <RadioGroup
                                    aria-label="gender"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl>
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "end" }}>
                        <Button size="small">Next</Button>
                    </CardActions>
                </Card>
            </Box>
        </>
    )
}
