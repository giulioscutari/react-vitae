import { useParams } from 'react-router-dom';
import portfolioData from '../experiences.json';
import type { ExperienceType, Portfolio } from '../types';
import GenericHeader from '../components/GenericHeader';
import TechnologyBadge from '../components/TechnologyBadge';
import SlideShow from '../components/SlideShow';
import LogoBig from '../components/LogoBig'


function ExperienceDetail() {
    const { experienceType, experienceSlug } = useParams<{ experienceType: ExperienceType; experienceSlug: string }>();
    const portfolio: Portfolio = portfolioData
    const experience = experienceType && experienceSlug
        ? portfolio.experiences[experienceType]?.[experienceSlug]
        : undefined;
    const logo = <LogoBig href={experience?.logo || "https://placehold.co/100"} alt={experience?.title || "Company Logo"}/>
    let contributions = (<div className="bg-slate-100 rounded-lg shadow-md my-16 p-4"> 
                        <h4 className="text-lg font-bold">My main contributions:</h4>
                        <ul className="list-disc list-inside m-4">
                            {experience?.contributions.map((contribution, index) => (
                            <li key={index}>{contribution}</li>
                            ))}
                        </ul>
                    </div>)
    const externalLinks = experience?.external_links.length ? (
        <ul className='mt-3'>
            {experience.external_links.map((link, index) => <li key={index}><a href={link} target="_blank" className='underline text-blue-700'>{link}</a></li>)}
        </ul>
    ) : null;
    const slideShow = experience?.slides?.length ? <SlideShow images={experience.slides} /> : null;
    return (<>
        <div className="@container">
            <GenericHeader />
            <img src={experience?.cover || "https://placehold.co/600x400"} alt={experience?.title || "Company Image"} className="w-full object-fill hidden md:inline" />
            <div className="mx-4 md:mx-24">
                <div className="experience-title my-8 flex md:flex-row flex-col  items-center gap-16">
                    {slideShow || logo}
                    <div className="experience-about">
                        <h2 className="text-2xl font-bold">{experience?.title}</h2>
                        <p className="text-lg">{experience?.description}</p>
                        {externalLinks}
                    </div>
                </div>
                <div className="experience-body my-16">
                    
                    {experience?.role && <h3 className="text-xl font-semibold mt-4">{experience?.role}</h3>}
                    {experience?.role && <p className="mt-2">{experience?.role_description}</p>}

                    {Boolean(experience?.contributions.length) && contributions}

                    <div className="bg-slate-100 rounded-lg shadow-md my-16 p-4"> 
                        <h4 className="text-lg font-bold">Technologies used:</h4>
                        <div className="flex flex-wrap m-4 md:gap-8 gap-2">
                            {experience?.technologies.map((technology, index) => (
                                <TechnologyBadge key={index} technology={technology} />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
    );
}

export default ExperienceDetail;