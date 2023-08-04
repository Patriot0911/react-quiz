import { useState } from 'react';
import quizInfo from '../scripts/info';
import ErrorCard from './ErrorCard';
import CardHead from './CardHead';
import AnswerContainer from './AnswerContainer';
import answersInitial from '../scripts/answersInitial';
import ImageContainer from './ImageContainer';
import Question from './Question';


export default function Card({ 
    results, 
    index,
    ChangeStatus
}) {
    const [answers, setAnswers] = useState(answersInitial);

    if(!quizInfo[index]) return <ErrorCard errName={`Card doesn't exist`} />

    function changeAnswer(index, value) {
        const list = [...answers];
        list[index] = value;
        setAnswers(list);
    };
    function checkAnswer(index) {
        if(results[index]) return;
        const correctAnswers = quizInfo[index].answer.toLocaleLowerCase().split(',');
        if(correctAnswers.includes(answers[index].toLocaleLowerCase())) {
            ChangeStatus(index);
            console.log('correct!')
        }
    }

    return (
        <div className={'info-container'}>
            <CardHead 
                info={quizInfo[index]}
                index={index}
            />
            <Question
                str={quizInfo[index].question}
            />
            { 
                quizInfo[index].imglink &&
                <ImageContainer 
                    link={quizInfo[index].imglink}
                />
            }
            <AnswerContainer 
                checkAnswer={checkAnswer}
                changeAnswer={changeAnswer}
                answers={answers}
                results={results}
                index={index}
            />
        </div>
    );
};