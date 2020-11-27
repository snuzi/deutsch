const Preposition = (props) => {
    
    const prepareVerbName = preposition =>  {
        debugger;
        const parts = preposition.split('+');
        console.log(parts[1]);
        let styles = {};
        if (parts[1] == 'Dativ') {
            styles = {color: '#c20808'};
        } else if (parts[1] == 'Akkusativ') {
            styles = {color: '#060f91'};
        }
        return (<span>{parts[0]} + <span style={styles}>{parts[1]}</span></span>);
    };

    return (
        prepareVerbName(props.preposition.trim())
    );
}

export default Preposition;