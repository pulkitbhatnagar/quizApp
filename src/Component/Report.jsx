import React from 'react';
import { QuizState } from '../QuizContext';
import { Card, CardContent, Grid, CardActions, Button } from '@mui/material';

import Typography from '@mui/material/Typography';

const Report = () => {
    let { answerChoosen, score, quizData } = QuizState();

    return (
        <Card>
            <CardContent>
                <Typography variant="h3">
                    You have scored :&nbsp;&nbsp;{score}{' '}
                </Typography>
                {quizData.map((val, index) => {
                    return (
                        <Grid sx={{ margin: '20px' }} key={val.question}>
                            <Typography
                                variant="h5"
                                color="text.secondary"
                                gutterBottom
                            >
                                Ques{index + 1}: {val.question}
                            </Typography>
                            <Grid
                                sx={{
                                    margin: '10px',
                                }}
                            >
                                <Grid sx={{ display: 'flex' }}>
                                    <Grid
                                        sx={{
                                            fontSize: '20px',
                                            color: 'purple',
                                        }}
                                    >
                                        Your Answer:
                                    </Grid>
                                    <Grid sx={{ fontSize: '20px' }}>
                                        &nbsp;{answerChoosen[index]}
                                    </Grid>
                                </Grid>
                                <Grid sx={{ display: 'flex' }}>
                                    <Grid
                                        sx={{
                                            color: 'green',
                                            fontSize: '20px',
                                        }}
                                    >
                                        Correct Answer:
                                    </Grid>
                                    <Grid sx={{ fontSize: '20px' }}>
                                        &nbsp;
                                        {quizData[index].correctAnswer}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    );
                })}
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    variant="contained"
                    onClick={() => {
                        window.location.reload();
                    }}
                >
                    Restart
                </Button>
            </CardActions>
        </Card>
    );
};
export default Report;
