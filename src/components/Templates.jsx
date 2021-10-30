import React from "react";

const Templates = (props) => {

    const { templates, handleTemplateClick } = props;

    return (<div className="col-md-6 col-sm-12 d-flex flex-wrap align-items-center" >{templates.map((template, index) => (<Template key={index} template={template} handleTemplateClick={handleTemplateClick} />))} </div>);
}

export default Templates;


const Template = (props) => {
    
    const { template, handleTemplateClick } = props;

    return (<div className="badge text-dark border border-dark m-1" style={{cursor : "pointer", backgroundColor : "#dcdcdc"}} onClick={(e) => handleTemplateClick(e, template)} >{template}</div>);
}