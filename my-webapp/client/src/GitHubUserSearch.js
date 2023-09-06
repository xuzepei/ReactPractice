import { useState } from 'react'
import './css/githubusersearch.css'
import axios from 'axios';

function Form({ onSubmit, onChange, value }) {
    return (
        <form className="search-form" onSubmit={onSubmit}>
            <input
                id="search"
                type="text"
                placeholder="Enter username or email"
                onChange={onChange}
                value={value}
            />
            <button type="submit">Search</button>
        </form>
    );
}


export default function GitHubUserSearch() {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const baseUrl = "https://api.github.com";

    async function getResults(query) {

        const url = baseUrl + '/search/users?q=' + query;
        try {
            const response = await axios.get(url);
            const jsonData = response.data;

            // 在这里处理 jsonData，进行后续操作
            console.log("response: " + (typeof jsonData.items))

            if (Array.isArray(jsonData.items)) {
                setResults(jsonData.items)
            } else {
                setResults([])
            }

        } catch (error) {
            console.error(error);
        }


    }

    function onSearchChange(event) {
        setQuery(event.target.value);
    }

    async function onSearchSubmit(event) {
        event.preventDefault();

        console.log("onSearchSubmit")

        await getResults(query)
    }

    function User({ avatar, url, username }) {
        return (
            <div className="user">
                <img src={avatar} alt="Profile" width="50" height="50" />
                <a href={url} target="_blank" rel="noopener noreferrer">
                    {username}
                </a>
            </div>
        );
    }

    return (
        <div className="main">
            <h2>Project 5: GitHub User Search</h2>
            <form className="search-form" onSubmit={onSearchSubmit}>
                <input
                    id="search"
                    type="text"
                    placeholder="Enter username or email"
                    onChange={onSearchChange}
                    value={query}
                />
                <button type="submit">Search</button>
            </form>
            <h3>Results</h3>
            <div id="results">
                <div>
                    {
                        results.map((user) => (
                            <User
                                key={user.login}
                                avatar={user.avatar_url}
                                url={user.html_url}
                                username={user.login}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}