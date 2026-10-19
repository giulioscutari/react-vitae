import { Link } from 'react-router-dom';
import portfolioData from '../experiences.json';
import type { Technology, Experience, Portfolio } from '../types';


function TechnologyBadge({ technologySlug }: { technology: string }) {
    const portfolio: Portfolio = portfolioData
    const technology = portfolio["technologies"][technologySlug];


    return (
        <Link to={`/tech/${technology?.slug}`}>
        <div className="technology-badge flex items-center gap-2 border-2 border-slate-300 rounded-lg px-4 py-1 shadow-md">
            <img src={technology?.logo || "https://placehold.co/50"} alt={technology?.title || "Technology Logo"} className="w-12 h-12 object-contain rounded-full"/>
            <span className="text-lg font-semibold">{technology?.title || "Technology Name"}</span>

        </div>
        </Link>
    )
}

export default TechnologyBadge;