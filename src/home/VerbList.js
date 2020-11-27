import verbList from '../assets/verben.json';
import React from "react";
import ReactDOM from "react-dom";
import Verb from '../verbs/verb'

const VerbList = () => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState(verbList);
    const handleChange = event => {
        setSearchTerm(event.target.value);
     };

     React.useEffect(() => {
        const results = verbList.filter(verb =>
            verb.verb.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
      }, [searchTerm]);

    return (
        <div classs="container">
            <p>
                <h2> Verben und ihre Präpositionalergänzungen </h2>
            </p>
            <div class="col-lg-12">
                <input
                    type="input"
                    value={searchTerm}
                    onChange={handleChange}
                    class="form-control" 
                    id="search-box" 
                    aria-describedby="emailHelp"
                    placeholder="Suche.."/>
            </div>
            <div class="col-lg-12">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Verb</th>
                            <th scope="col">Präposition+Kasus</th>
                            <th scope="col">Beispielsatz</th>
                        </tr>
                    </thead>
                    {  
                        searchResults.map((verb, i) => {
                            // <VerbRow key={i} verbRow={verb} index={i}/> 
                            return (
                                <tr>
                                    <td>{i+1}</td>
                                    <td> <Verb verb={verb.verb}/></td>
                                    <td>{verb.preposition.join(' - ')}</td>
                                    <td>{verb.sample.join(' - ')}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}

export default VerbList;