const Verb = (props) => {
    
    const prepareVerbName = verb =>  {
        return <span className="item verb-name">{verb}</span>;
    };

    return (
        prepareVerbName(props.verb.trim())
    );
}

export default Verb;