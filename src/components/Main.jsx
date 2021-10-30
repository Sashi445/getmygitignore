import { useState } from "react";
import About from "./About";
import Search from './Search';

const Main = () => {

    const [showApp, setShowApp] = useState(true);

    return (<div className="main">
        <header className="navbar row bg-dark text-white">
            <div className="col-md-6"><h3 className="rbto-slab text-white text-center">getmygitignore</h3></div>
            <div className="col-md-6">
                <span className="m-3" onClick={(e) => setShowApp(true)}>Home</span>
                <span className="m-1" onClick={(e) => setShowApp(false)}>About</span>
            </div>
        </header>
        <div>
            {showApp ? <Search /> : <About/>}
        </div>

    </div>);
}

export default Main;