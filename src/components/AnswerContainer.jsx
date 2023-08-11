export default function AnswerContainer({ 
    answers, 
    results,
    checkAnswer,
    changeAnswer,
    index
}) {
    function handleKeyDown(event) {
        if(event.key === 'Enter') {
            checkAnswer(index);
        }
    }
    return (
        <div className={'answer-container'}>
            <input
                disabled={results[index] ? 'disabled' : ''}
                className={'answer-input'}
                placeholder={'Put your answer here'}
                value={answers[index]}
                onChange={(e) => changeAnswer(index, e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button
                onClick={() => checkAnswer(index)}
            >
                Check
            </button>
        </div>
    );
};