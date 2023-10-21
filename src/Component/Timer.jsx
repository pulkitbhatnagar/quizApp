import React, { useEffect, useRef } from 'react';
import { Grid, Snackbar } from '@mui/material';
import { QuizState } from '../QuizContext';
const Timer = () => {
    let {
        timeRemaining,
        setTimeRemaining,
        timeUpState,
        setTimeUpState,
        setShowAnswer,
    } = QuizState();

    let timer = useRef();

    useEffect(() => {
        timer.current = setInterval(() => {
            setTimeRemaining((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timer.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (timeRemaining <= 0) {
            clearInterval(timer.current);
            setTimeUpState(true);
            setShowAnswer(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeRemaining]);

    return (
        <Grid sx={{ display: 'flex' }}>
            <Grid
                sx={{
                    color: timeRemaining > 20 ? 'green' : 'red',
                    fontSize: '24px',
                }}
            >
                {timeRemaining} seconds
            </Grid>
            <Snackbar
                open={timeUpState}
                autoHideDuration={3000}
                message="Times Up!!!!"
            />
        </Grid>
    );
};

export default Timer;
