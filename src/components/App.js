import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Home from "./Home";
import '../css/App.css';

function App() {
    // * isLoading is used for making sure that content isn't rendered
    // * until the JSON data is loaded.
    const [isLoading, setIsLoading] = useState(true);

    // Loads the JSON data into variables after initial mount
    useEffect(() => {
        setIsLoading(false);
    }, []);

    if (!isLoading) {
        return (
            <div className="App">
                <Header />
                <div id="content">
                    <Home />
                </div>
            </div>
        );
    }
    else {
        return (<p>Loading...</p>);
    }
}

export default App;
