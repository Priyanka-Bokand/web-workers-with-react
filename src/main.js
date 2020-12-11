import React, { Component } from 'react';

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.worker = new Worker('worker.js');
        this.worker.addEventListener(
            'message', event => {
                console.log('Message from Worker::::', event.data);
                this.setState({ message: event.data })
            }
        )
    }

    render() {
        const { message } = this.state;

        return(
            <>
                <button onClick={() => this.worker.postMessage('Hello from main thread!!!!!!')}>
                    Send Message to Worker
                </button>
                &nbsp;&nbsp;
                <button onClick={() => this.setState({ message: '' })}>
                   Clear
                </button>

                {message && <div >Resonse From Worker::: 
                    <div style={{ border: '2px solid black' }}>{message}</div>
                </div>}
            </>
        );
    }
}