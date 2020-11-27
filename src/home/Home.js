import VerbList from './VerbList';

const Home = () => {
    return (
        <div class="container mt-4">
            <div class="card mb-4">
                <div class="card-body">
                    <h2> Verben lernen </h2>
                    <div>
                        <VerbList/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;