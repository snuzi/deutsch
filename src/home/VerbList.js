import verbList from '../assets/verben.json';
import React from "react";
import ReactDOM from "react-dom";
import VerbRow from '../verbs/verbRow'

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
        <div>
             <div class="row">
                <div class="col-md-12">
                    <h2 class="pt-3 pb-4 text-center font-bold font-up deep-purple-text">Verben und ihre Präpositionalergänzungen</h2>
                    <div class="input-group md-form form-sm form-2 pl-0">
                        <input
                        type="input"
                        value={searchTerm}
                        onChange={handleChange}
                        class="form-control my-0 py-1 pl-3 purple-border" 
                        id="search-box" 
                        aria-describedby="emailHelp"
                        placeholder="Suche.."/>
                    </div>
                </div>
            </div>
             
            <div class="col-lg-12">
                <table class="table table-verbs">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Verb</th>
                            <th scope="col">Präposition+Kasus</th>
                            <th scope="col">Beispielsatz</th>
                        </tr>
                    </thead>
                    <tbody>
                        {  
                            searchResults.map((verb, i) => {
                                return <VerbRow key={i} verb={verb} index={i}/>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default VerbList;