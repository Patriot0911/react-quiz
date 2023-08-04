import Card from './Card';
import QuestionList from './QuestionList';
import FinalInfo from './FinalInfo';

export default function Body({ 
    results,
    questIndex,
    setQuestIndex,
    ChangeStatus,
    correctAnswers
}) {
    return (
        <>
            <div className={'quiz-body'}>
                {
                    correctAnswers >= results.length &&
                    <FinalInfo />
                }                
                <div className={'answer-counter'}>
                    {correctAnswers}/{results.length}
                </div>
                <QuestionList 
                    list={results}
                    index={questIndex}
                    setQuestIndex={setQuestIndex}
                />
                <Card 
                    results={results}
                    index={questIndex}
                    ChangeStatus={ChangeStatus}
                />
            </div>
        </>
    );
};