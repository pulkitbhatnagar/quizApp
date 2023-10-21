import React, { useState } from 'react';

import { Card, Alert, LinearProgress, Grid } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AnswerOptions from './AnswerOptions';
import { QuizState } from '../QuizContext';

import Report from './Report';
import Timer from './Timer';
const QuestionCard = () => {
    let [queetionIndex, setQuestionIndex] = useState(0);
    let [reportGenerate, setGenerateReport] = useState(false);

    let {
        answerSelected,
        showAnswer,
        setShowAnswer,
        setAnswerSelected,
        setScore,
        setAnswerChoose,
        answerChoosen,
        setTimeRemaining,
        timeUpState,
        setTimeUpState,
        quizData,
    } = QuizState();

    let { question, choices, correctAnswer } = quizData[queetionIndex];

    //on  Click of submit shoq answer is correct or not
    function submitHandler() {
        setShowAnswer(true);
    }

    //on click next set the show answer to false,time remainig status to false,timer value to 120sec,ad update the array with the option choosen
    //also inceremnt the score if correct and make the currnet ooption selected value to empty
    function handleNext() {
        setShowAnswer(false);
        setTimeUpState(false);
        setTimeRemaining(120);
        setAnswerChoose([...answerChoosen, answerSelected]);
       
        if (answerSelected === correctAnswer) {
            setScore((prev) => prev + 1);
        }
        setQuestionIndex((prev) => prev + 1);
        setAnswerSelected('');
    }
    return (
        <>
            {reportGenerate ? (
                <Report></Report>
            ) : (
                <>
                    <LinearProgress
                        variant="determinate"
                        color="secondary"
                        sx={{
                            mb: '10px',
                            height: '8px',
                        }}
                        value={(queetionIndex / quizData.length) * 100}
                    ></LinearProgress>
                    <Card sx={{ maxHeight: 'auto' }}>
                        <CardContent>
                            <Grid>
                                <Typography variant="h5" color="text.secondary">
                                    {queetionIndex + 1}/{quizData.length}
                                </Typography>
                            </Grid>
                            <Grid
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                    mb: '10px',
                                }}
                            >
                                <Grid
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'end',
                                        width: '100%',
                                    }}
                                >
                                    <Typography variant="h2" color="primary">
                                        Quiz
                                    </Typography>
                                </Grid>
                                <Grid
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'end',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Timer></Timer>
                                </Grid>
                            </Grid>

                            <Typography
                                sx={{ fontSize: '24px' }}
                                color="text.secondary"
                               
                            >
                                {question}
                            </Typography>
                            <AnswerOptions options={choices} />

                            {(showAnswer || timeUpState) && (
                                <Alert
                                    severity={
                                        answerSelected === correctAnswer
                                            ? 'success'
                                            : 'error'
                                    }
                                >
                                    <Typography
                                        sx={{ fontSize: 14 }}
                                        color="text.secondary"
                                        
                                    >
                                        {answerSelected === correctAnswer
                                            ? 'Congrats your answer is correct'
                                            : answerSelected === '' &&
                                              !timeUpState
                                            ? 'Please select any of the option'
                                            : `The answer is incorrect`}
                                    </Typography>
                                </Alert>
                            )}
                        </CardContent>
                        <CardActions
                            sx={{ display: 'flex', justifyContent: 'end' }}
                        >
                            
                            <Button
                                variant="contained"
                                onClick={submitHandler}
                                disabled={showAnswer || timeUpState}
                            >
                                Submit
                            </Button>
                            {queetionIndex !== quizData.length - 1 && (
                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    disabled={
                                        (answerSelected === '' &&
                                            !timeUpState) ||
                                        !showAnswer
                                    }
                                >
                                    Next
                                </Button>
                            )}

                            {queetionIndex === quizData.length - 1 && (
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        setGenerateReport(true);
                                        setAnswerChoose([
                                            ...answerChoosen,
                                            answerSelected,
                                        ]);
                                    }}
                                    disabled={
                                        (answerSelected === '' &&
                                            !timeUpState) ||
                                        !showAnswer
                                    }
                                >
                                    Report
                                </Button>
                            )}
                        </CardActions>
                    </Card>
                </>
            )}
        </>
    );
};

export default QuestionCard;
