const Verb = (props) => {
    
    const prepareVerbName = verb =>  {
        return <span>{verb}</span>;
    };

    return (
        prepareVerbName(props.verb.trim())
    );
}

export default Verb;