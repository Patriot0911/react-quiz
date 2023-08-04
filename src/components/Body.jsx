import Card from './Card';
import QuestionList from './QuestionList';

export default function Body({ 
    results,
    questIndex,
    setQuestIndex,
    ChangeStatus,
    correctAnswers
}) {
    return (
        <div className={'quiz-body'}>
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
    );
};