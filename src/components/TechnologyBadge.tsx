import { Link } from 'react-router-dom';
import portfolioData from '../experiences.json';


function TechnologyBadge({ technology }: { technology: string }) {

    const tech = portfolioData.technologies.find(t => t.slug === technology);

    return (
        <Link to={`/tech/${tech?.slug}`}>
        <div className="technology-badge flex items-center gap-2 border-2 border-slate-300 rounded-lg px-4 py-1 shadow-md">
            <img src={tech?.logo || "https://placehold.co/50"} alt={tech?.title || "Technology Logo"} className="w-12 h-12 object-contain rounded-full"/>
            <span className="text-lg font-semibold">{tech?.title || "Technology Name"}</span>

        </div>
        </Link>
    )
}

export default TechnologyBadge;