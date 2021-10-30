import { useState } from 'react';

const TemplateResult = (props) => {

    const [showMessage, setShowMessage] = useState(false);

    const { name, source } = props;

    const handleClick = () => {
        navigator.clipboard.writeText(source);
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 2000);
    }

    return (
        <div className="col-md-6 col-sm-12">
            <div className="border border-primary p-3 rounded">
                <div className="d-flex justify-content-between align-items-center">
                    <h4>{name}</h4>
                    <div className="badge bg-secondary cursor-pointer border border-dark rounded" onClick={() => handleClick()} >{showMessage ? <span className="text-dark"><i className="fas fa-clipboard-check text-success"></i> copied</span> : <span className="text-dark"><i className="far fa-clipboard"></i> copy</span>}</div>
                </div>
                <div className="my-5"><p>{source}</p></div>
            </div>
        </div>
    );
}

export default TemplateResult;