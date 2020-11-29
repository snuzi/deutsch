const Preposition = (props) => {
    
    const prepareVerbName = preposition =>  {
        const parts = preposition.split('+');
        let styles = {};
        if (parts[1] == 'Dativ') {
            styles = {color: '#c20808'};
        } else if (parts[1] == 'Akkusativ') {
            styles = {color: '#060f91'};
        }
        return (<span className="item"> {parts[0]} + <span style={styles}>{parts[1]}</span></span>);
    };

    return (
        prepareVerbName(props.preposition.trim())
    );
}

export default Preposition;