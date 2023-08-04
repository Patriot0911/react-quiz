import quizInfo from './info';

export default function answersInitial() {
    const list = [];
    for(let i = 0; i < quizInfo.length; i++) {
        list[i] = '';
    }
    return list;
};