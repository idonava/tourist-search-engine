import React from 'react';
import { Helmet } from 'react-helmet';

class Home extends React.Component {
    exampleMethod() {
        console.log('JS is running');
    }
    head() {
        return (
            <Helmet>
                <title>Tourist Search Engine</title>
            </Helmet>
        );
    }
    render() {
        return <div>
            {this.head()}
            <p>
                Some content
            </p>
            <button onClick={() => this.exampleMethod()} >Console log some text</button>
        </div>
    }
}

export default Home;