import React, { useEffect, useState } from "react";
import Templates from './Templates';
import TemplateResult from './TemplateResult';


const Search = () => {

    const url = "https://api.github.com/gitignore/templates";

    const headers = {
        'accept': "application/vnd.github.v3+json"
    };

    const [templates, setTemplates] = useState([]);

    const [currentTemplate, setCurrentTemplate] = useState({ name: "", source: "" });

    useEffect(() => {
        fetch(url, {
            headers: headers
        }).then((res) => res.json())
            .then(data => {
                console.log(data);
                setTemplates(data);
            }).catch(err => {
                alert(err.message);
            });

        fetch(`${url}/Node`, {
            headers: headers
        }).then(res => res.json())
            .then(data => setCurrentTemplate(data))
            .catch(err => alert(err.message));


    }, []);

    const handleTemplateClick = (e, template) => {
        e.preventDefault();
        fetch(`${url}/${template}`, {
            headers: headers
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCurrentTemplate(data)
            })
            .catch(err => alert(err.message));
    }

    return <div className="container my-5">
        <div className="row align-items-start">
            <Templates templates={templates} handleTemplateClick={handleTemplateClick} />
            <TemplateResult name={currentTemplate.name} source={currentTemplate.source} />
        </div>
    </div>;

}

export default Search;