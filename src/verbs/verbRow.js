import Verb from './verb';
import Preposition from './preposition';

const VerbRow = ({verb, index}) => {
    return (
        <tr key={index}>
            <th scope="row">{index+1}</th>
            <td> <Verb key={index} verb={verb.verb}/></td>
            <td>
                <ul className={'no-bullets'}>
                {
                    verb.preposition.map(preposition => {
                        return <li  key={preposition}> <Preposition preposition={preposition}/> </li>
                    })
                }
                </ul>
            </td>
            <td>
                <ul className={'no-bullets'}>
                {
                    verb.sample.map(sample => {
                        return <li key={sample}>{sample}</li>
                    })
                }
                </ul>
            </td>
        </tr>
    );
}

export default VerbRow;