import { useParams } from 'react-router-dom';
import type { Experience, ExperienceType, Portfolio } from '../types';
import GenericHeader from '../components/GenericHeader';
import LogoBig from '../components/LogoBig';
import portfolioData from '../experiences.json';
import CardContainer from '../components/CardContainer';


function TechnologyDetail() {

    const { technologySlug } = useParams();
    const portfolio: Portfolio = portfolioData
    const technology = technologySlug ? portfolio.technologies[technologySlug] : undefined;
    const achievements = (<div className="bg-slate-100 rounded-lg shadow-md my-16 p-4"> 
                        <h4 className="text-lg font-bold">My main achievements:</h4>
                        <ul className="list-disc list-inside m-4">
                            {technology?.achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                            ))}
                        </ul>
                    </div>)
    const externalLinks = technology?.external_links.length ? (
        <ul className='mt-3'>
            {technology.external_links.map((link, index) => <li key={index}><a href={link} target="_blank" className='underline text-blue-700'>{link}</a></li>)}
        </ul>
    ) : null;
    const experiences: Experience[] = technology
        ? (Object.entries(technology.experiences) as [ExperienceType, string[]][]).flatMap(([experienceType, slugs]) =>
            slugs.map(slug => portfolio.experiences[experienceType][slug])
                .filter((experience): experience is Experience => Boolean(experience))
        )
        : [];
    return (
        <div className="@container">
            <GenericHeader />
            <div className="mx-24">
                <div className="tech-title my-8 flex items-center gap-16">
                    <LogoBig href={technology?.logo || "https://placehold.co/100"} alt={technology?.title || "Technology Logo"}/>
                    <div className="tech-about">
                        <h2 className="text-2xl font-bold">{technology?.title}</h2>
                        <p className="text-lg">{technology?.description}</p>
                        {externalLinks}
                    </div>
                </div>
                <div className="tech-body my-16">
                    
                    <p className="mt-2">{technology?.comment}</p>

                    {Boolean(technology?.achievements.length) && achievements}

                    {experiences.length > 0 ? (<div className="bg-slate-100 rounded-lg shadow-md my-16 p-4"> 
                        <h4 className="text-lg font-bold"></h4>
                        <CardContainer cardList={experiences} title={`Things where I used ${technology?.title}:`}/>
                    </div>): ""}
                </div>

            </div>
        </div>
    );
}

export default TechnologyDetail;