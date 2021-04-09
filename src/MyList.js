import React from 'react';
import Services from "./services";

class MyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        Services.getVals().then(a => {
            this.setState({ data: a.data })
        })
    }

    render() {
        return (
            <>
                {
                    this.state.data.map(b => <p>{b.pname}</p>)
                }
            </>
        );
    }
}

export default MyList;