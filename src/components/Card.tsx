import type { Experience } from '../types';
import { Link } from 'react-router-dom';

function Card({ obj }: { obj: Experience }) {
    return (
        <div className="card bg-slate-100 rounded-lg shadow-md w-64 flex flex-col">
            <img src={obj.cover || "https://placehold.co/150"} alt={obj.title || "Card Image"} className="card-image rounded-t-lg h-full object-cover" />
            <div className="card-body p-4 h-auto">
                <h3 className="text-lg font-bold">{obj.title || "Card Title"}</h3>
                <p className="text-gray-700">{obj.description_brief || "Card description goes here."}</p>
            </div>
            <div className="card-footer p-4 mt-auto ">
                <Link to={obj.internal_link || "#"} className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition duration-300 w-full text-center">
                    Learn More
                </Link>
            </div>
        </div>
    )
}

export default Card;