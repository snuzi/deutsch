
import Quiz from '../components/quiz/quiz';
import {Helmet} from "react-helmet";

const QuizPage = () => {
    
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Deutsch Verben lernen - Quiz</title>
                <link rel="canonical" href="http://deutsch.nuzi.eu/quiz" />
            </Helmet>
            <Quiz/>
        </div>
    )
}

export default QuizPage;