import React from 'react';
import axios from "axios";

class TList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8089/tbls").then(a => {
            this.setState({ arr: a.data })
        })
        console.log(JSON.stringify(this.state.arr));
    }

    render() {
        return (
            <>
                {
                    this.state.arr.map(n => <div>{n.scid}{n.scname}</div>)
                }
            </>
        );
    }
}

export default TList;