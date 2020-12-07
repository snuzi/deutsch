import QuizComponent from 'react-quiz-component';
import Questions from './qusetions'
import { useState } from 'react';

const Quiz = () => {

 
    const questions = new Questions();
    const [count, setCount] = useState(0);

    const getQuizObject = (questions) => {
        return {
            "appLocale": {
                "landingHeaderText": "<questionLength> Übungen",
                "question": "Übung",
                "startQuizBtn": "Quiz starten",
                "resultFilterAll": "Alle",
                "resultFilterCorrect": "Richtig",
                "resultFilterIncorrect": "Falsch",
                "nextQuestionBtn": "Weiter",
                "resultPageHeaderText": " Sie haben das Quiz abgeschlossen. Sie haben <correctIndexLength> von <questionLength> Fragen erhalten."
            } ,
            quizTitle: "Verben mit Präpositionen-Quiz",
            // quizSynopsis: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
            questions: questions
        };
    }

    const [stateQuiz, setQuestions] = useState(getQuizObject(questions.getQuestions(5)));
    const resetQuiz = () => {
        setCount(count + 1);
        setQuestions(getQuizObject(questions.getQuestions(5)));
    }

    return (
        <div>
            <button onClick={resetQuiz} type="button" class="btn btn-secondary">Neu starten</button>
            <div key={count}>
                <QuizComponent quiz={stateQuiz} continueTillCorrect={true}/>
            </div>
        </div>
    )
}

export default Quiz;