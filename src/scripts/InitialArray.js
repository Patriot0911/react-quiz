import quizInfo from './info';

export default function createInitial() {
    const arr = [];
    for(let i = 0; i < quizInfo.length; i++){
      arr[i] = false;
    }
    return arr;
};