import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { QuizState } from '../QuizContext';

export default function AnswerOptions({ options }) {
    const {
        setAnswerSelected,
        setShowAnswer,
        answerSelected,
        showAnswer,
        timeUpState,
    } = QuizState();

    //on change of radio option make the show answer correct false and update the answer to state
    function handleRadioChange(e) {
        setShowAnswer(false);
        setAnswerSelected(e.target.value);
    }

    return (
        <FormControl>
            <RadioGroup
                name="radio-buttons-group"
                onChange={handleRadioChange}
                value={answerSelected}
            >
                {options.map((val) => {
                    return (
                        <FormControlLabel
                            value={val}
                            control={<Radio />}
                            key={val}
                            label={val}
                            disabled={showAnswer || timeUpState}
                        />
                    );
                })}
            </RadioGroup>
        </FormControl>
    );
}
