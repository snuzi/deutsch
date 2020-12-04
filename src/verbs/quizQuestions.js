const fs = require('fs');

let rawdata = fs.readFileSync('./src/assets/verben.json');
let list = JSON.parse(rawdata);


const getPerpositions = (verbs) => {
    const prepositions = [];

    verbs.forEach(verbRow => {
        verbRow.preposition.forEach(preposition => {
            const prep = preposition.trim();
            if (!prep) return;
    
            if (!prepositions.includes(prep)) {
                prepositions.push(prep);
            }
        })
    });

    return prepositions;
}


const shuffleElements = (unshuffled, limit) => {

    if (!limit) {
        limit = unshuffled.length;
    }

    const shuffled = unshuffled
        .map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
    return shuffled.slice(0, limit - 1);
}

const getQuestionAlternatives = (questionAnswers, answerPool, count, extraAnswersOffset = 1, addExtraAlternatives = 2) => {
    const shuffledAlternatives = shuffleElements(answerPool, answerPool.length);
    
    // Add extra alternatives
    count = (count - questionAnswers.length <= extraAnswersOffset) ? count + addExtraAlternatives : count; 


    const questionAlternatives = questionAnswers;
    for(const alternative of shuffledAlternatives) {
        if (questionAlternatives.length > count) {
            break;
        }
        if (questionAlternatives.includes(alternative)) {
            continue;
        }
        questionAlternatives.push(alternative);
    }

    return shuffleElements(questionAlternatives);
}

//console.log(getPerpositions(list));
//console.log(shuffleElements(list, 3));

//console.log(list[0]);
//console.log(getQuestionAlternatives(list[0].preposition, getPerpositions(list), 4));

const getQuestions = (count = 5) => {
    const questions = shuffleElements(list, count);
    const prepositionPool = getPerpositions(list);
    questions.map(question => {
        question.alternatives = getQuestionAlternatives(
            question.preposition.slice(0), 
            prepositionPool, 
            4,
            1,
            2
        );
    });

    return questions;
}


console.log(getQuestions());
