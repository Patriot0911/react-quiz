import { useState } from 'react';
import createInitial from './scripts/InitialArray';
import Body from './components/Body';
import './App.css';

export default function App() {
  const [results, setResults] = useState(createInitial);
  const [curQuest, setCurQuest] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  function ChangeStatus(index) {
    const list = [...results];
    list[index] = !results[index];
    setResults(list);
    setCorrectAnswers((e) => e+1);
  }
  function goToQuestion(index) {
    if(index === curQuest) return;
    setCurQuest(index);
  }

  return (
    <Body 
      results={results}
      questIndex={curQuest}
      setQuestIndex={goToQuestion}
      ChangeStatus={ChangeStatus}
      correctAnswers={correctAnswers}
    />
  );
};