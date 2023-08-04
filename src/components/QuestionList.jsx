export default function QuestionList({ 
    list, 
    index, 
    setQuestIndex 
}) {
    return (
        <ul>
            {
                list.map((item, key) => 
                    <li 
                        className={ 
                            key !== index ?
                            (
                                !list[key] ? 
                                'quest-item' : 
                                'quest-item done'
                            ) : 
                            'quest-item in-use'
                        }
                        key={key}
                        onClick={() => setQuestIndex(key)}
                    >
                        {key+1}
                    </li>
                )
            }
        </ul>
    );
};