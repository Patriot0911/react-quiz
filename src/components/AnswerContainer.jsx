export default function AnswerContainer({ 
    answers, 
    results,
    checkAnswer,
    changeAnswer,
    index
}) {
    return (
        <div className={'answer-container'}>
        <input
            disabled={results[index] ? 'disabled' : ''}
            className={'answer-input'}
            placeholder={'Напиши відповідь тут!'}
            value={answers[index]}
            onChange={(e) => changeAnswer(index, e.target.value)}
        />
        <button
            onClick={() => checkAnswer(index)}
        >
            Перевірити
        </button>
    </div>
    );
};