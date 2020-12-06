import QuizComponent from 'react-quiz-component';
import Questions from './qusetions'
import { useState } from 'react';

const Quiz = () => {

 
    const questions = new Questions();
    const quizQuestions = questions.getQuestions(5);
    const [isRestart, restart] = useState(0);


    const getObject = (questions) => {
        return {
            quizTitle: "React Quiz Component Demo",
            quizSynopsis: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
            questions: questions
        };
    }

    const [stateQuiz, setQuestions] = useState(getObject(questions.getQuestions(5)));


    return (
        <div>
            <button nClick={() => setQuestions(getObject(questions.getQuestions(5)))} type="button" class="btn btn-secondary">Neu starten</button>
            <QuizComponent quiz={stateQuiz} continueTillCorrect={true}/>
        </div>
    )
}

export default Quiz;