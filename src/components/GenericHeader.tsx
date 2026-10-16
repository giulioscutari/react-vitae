import { Link } from "react-router-dom";

function genericHeader() {
    return (
        <header className="bg-slate-800 text-white flex px-16 py-8 gap-16 items-center font-semibold">
            <Link to="/"><h4 className="text-lg font-bold">Home</h4></Link>
        </header>
    )
}

export default genericHeader;