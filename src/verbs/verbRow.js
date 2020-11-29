import Verb from './verb';
import Preposition from './preposition';

const VerbRow = ({verb, index}) => {
    return (
        <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-xs-6 section">
                        <Verb key={index} verb={verb.verb}/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-xs-6 section">
                        {
                            verb.preposition.map((preposition, index) => {
                                return <Preposition key={index} preposition={preposition}/>
                            })
                        }
                    </div>
                    <div className=" col-lg-6 col-md-12 col-sm-12 section">
                        <p>
                            <span className="example-label">Beispiel </span>
                            <ul>
                            {
                                verb.sample.map(sample => {
                                    return <li  key={sample + index}>{sample}</li>
                                })
                            }
                            </ul>
                        </p>
                    </div>
                </div>

            </td>
            
        </tr>
    );
}

export default VerbRow;