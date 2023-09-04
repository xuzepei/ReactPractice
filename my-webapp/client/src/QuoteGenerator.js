import axios from 'axios';
import { useState, useEffect } from 'react'



export default function QuoteGenerator() {

    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState(null);

    useEffect(() => {
        axios.get("https://type.fit/api/quotes")
            .then(res => {
                console.log(res)
                if(Array.isArray(res.data)) {
                    setQuotes(res.data)
                    if(res.data.length > 0) {
                        setQuote(res.data[0])
                    }
                }
            })
            .catch(err => {
                console.log("Get quotes failed! Error: " + err)
            })
      }, []);

    function getRandomQuote(quotes) {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    function getNewQuote() {
        setQuote(getRandomQuote(quotes));
    }
    
    function showText(quote) {
        if (quote != null) {

            return (
                <h3>
                    <span>"</span>
                    {quote?.text}
                    <span>"</span>
                </h3>
            );

        } else {

            return <h3></h3>
        }
    }

    return (<div>
        <h1>Project 3: Quote Generator</h1>
        <section>
        <button onClick={getNewQuote}>New Quote</button>
        {!quote ? "" : (
            <h3>
                <span>"</span>
                {quote?.text}
                <span>"</span>
            </h3>
        )}
        <i>{!quote ? "" : "-" + quote?.author}</i>
        </section>
    </div>);
}