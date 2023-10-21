import React, { createContext, useContext, useState } from 'react';
import { quiz } from './MockData/mockData';
let QuizApp = createContext();

const QuizContext = ({ children }) => {
    const [answerSelected, setAnswerSelected] = useState('');

    const [showAnswer, setShowAnswer] = useState(false);
    const [score, setScore] = useState(0);
    const [answerChoosen, setAnswerChoose] = useState([]);
    const [timeRemaining, setTimeRemaining] = useState(120);
    const [timeUpState, setTimeUpState] = useState(false);
    const quizData = quiz.questions;
    //reeset function
    function reset() {
        setAnswerSelected('');
        setShowAnswer(false);
        setScore(0);
        setAnswerChoose([]);
        setTimeRemaining(120);
        setTimeUpState(false);
    }

    return (
        <QuizApp.Provider
            value={{
                answerSelected,
                setAnswerSelected,
                showAnswer,
                setShowAnswer,
                answerChoosen,
                setAnswerChoose,
                score,
                setScore,
                reset,
                timeRemaining,
                setTimeRemaining,
                timeUpState,
                setTimeUpState,
                quizData,
            }}
        >
            {children}
        </QuizApp.Provider>
    );
};
export default QuizContext;

export const QuizState = () => {
    return useContext(QuizApp);
};
