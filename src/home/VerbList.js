import verbList from '../assets/verben.json';
import React from "react";
import VerbRow from '../verbs/verbRow'
import {Helmet} from "react-helmet";

const VerbList = () => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState(verbList);
    const handleChange = event => {
        setSearchTerm(event.target.value);
     };

     React.useEffect(() => {
        const results = verbList.filter(verb =>
            verb.verb.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
        setSearchResults(results);
      }, [searchTerm]);

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Deutsch - Verben und ihre Präpositionalergänzungen </title>
                <link rel="canonical" href="http://deutsch.nuzi.eu" />
            </Helmet>
             <div className="row">
                <div className="col-md-12">
                    <h4 className="pt-3 pb-4 text-center font-bold font-up deep-purple-text title-verbe">Verben und ihre Präpositionalergänzungen</h4>
                    <div className="input-group md-form form-sm form-2 pl-0">
                        <input
                        type="input"
                        value={searchTerm}
                        onChange={handleChange}
                        className="form-control my-0 py-1 pl-3 purple-border" 
                        id="search-box" 
                        aria-describedby="emailHelp"
                        placeholder="Suche.."/>
                    </div>
                </div>
            </div>
             
            <div className="col-lg-12">
                <table className="table table-verbs">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Verb</th>
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