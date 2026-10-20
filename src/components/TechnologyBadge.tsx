import { Link } from 'react-router-dom';
import portfolioData from '../experiences.json';
import type { Portfolio } from '../types';


function TechnologyBadge({ technology }: { technology: string }) {
    const portfolio: Portfolio = portfolioData
    const technologyItem = portfolio.technologies[technology];


    return (
        <Link to={`/tech/${technologyItem?.slug}`}>
        <div className="technology-badge flex items-center gap-2 border-2 border-slate-300 rounded-lg px-4 py-1 shadow-md">
            <img src={technologyItem?.logo || "https://placehold.co/50"} alt={technologyItem?.title || "Technology Logo"} className="w-12 h-12 object-contain rounded-full"/>
            <span className="text-lg font-semibold">{technologyItem?.title || "Technology Name"}</span>

        </div>
        </Link>
    )
}

export default TechnologyBadge;