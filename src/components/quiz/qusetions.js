import verbs from '../../assets/verben.json';

export default class Questions {

    getPerpositions = (verbs) => {
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


    shuffleElements = (unshuffled, limit) => {

        if (!limit) {
            limit = unshuffled.length;
        }

        const shuffled = unshuffled
            .map((a) => ({sort: Math.random(), value: a}))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value);
        return shuffled.slice(0, limit - 1);
    }

    getQuestionAlternatives = (questionAnswers, answerPool, count, extraAnswersOffset = 1, addExtraAlternatives = 2) => {
        const shuffledAlternatives = this.shuffleElements(answerPool, answerPool.length);
        
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

        return this.shuffleElements(questionAlternatives);
    }

    prepareCorrectAnwser(question, count) {
        const answerIndeces = [];
        question.answers.forEach((alternative, index) => {
            if (question.preposition.includes(alternative)) {
                answerIndeces.push(index + 1);
            }
        })

        question.messageForCorrectAnswer = "Correct answer. Good job.";
        question.messageForIncorrectAnswer = "Incorrect answer. Please try again.";
        question.questionType = 'text';
        question.explanation = question.sample.join(' -- ');
        question.question = question.verb;

        if (answerIndeces.length > 1) {
            question.correctAnswer = answerIndeces;
            question.answerSelectionType = 'multiple';
        } else {
            question.correctAnswer = answerIndeces[0] + '';
            question.answerSelectionType = 'single';

        }
        question.point = 100 / count;
    }

    getQuestions = (count = 5) => {
        const questions = this.shuffleElements(verbs, count);
        const prepositionPool = this.getPerpositions(verbs);
        questions.map(question => {
            question.answers = this.getQuestionAlternatives(
                question.preposition.slice(0), 
                prepositionPool, 
                4,
                1,
                2
            );
            this.prepareCorrectAnwser(question, count);
        });

        return questions;
    }
}