'use client';

import React, { useEffect } from 'react';
import QuestionCard from './Component/QuestionCard';
import Container from '@mui/material/Container';

import { QuizState } from './QuizContext';

function App() {
    let { reset } = QuizState();

    //on load set the store to default state
    useEffect(() => {
        reset();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            style={{
                backgroundImage:
                    'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                margin: '0px',
            }}
        >
            <Container sx={{ p: '24px' }}>
                <QuestionCard />
            </Container>
        </div>
    );
}

export default App;
