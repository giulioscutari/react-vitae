import { useParams } from 'react-router-dom';
import portfolioData from '../experiences.json';
import type { Technology, Experience, Portfolio } from '../types';
import GenericHeader from '../components/GenericHeader';
import TechnologyBadge from '../components/TechnologyBadge';
import SlideShow from '../components/SlideShow';
import LogoBig from '../components/LogoBig'


function ExperienceDetail() {
    const { experienceType, experienceSlug } = useParams();
    const portfolio: Portfolio = portfolioData
    const experience = portfolio["experiences"][experienceType][experienceSlug];
    const logo = <LogoBig href={experience?.logo || "https://placehold.co/100"} alt={experience?.title || "Company Logo"}/>
    let contributions = (<div className="bg-slate-100 rounded-lg shadow-md my-16 p-4"> 
                        <h4 className="text-lg font-bold">My main contributions:</h4>
                        <ul className="list-disc list-inside m-4">
                            {experience?.contributions.map((contribution, index) => (
                            <li key={index}>{contribution}</li>
                            ))}
                        </ul>
                    </div>)
    let external_links = false
    if (experience?.external_links.length > 0) {
        external_links = <ul className='mt-3'>
                            {experience?.external_links.map((link, index) => <li key={index}><a href={link} target="_blank" className='underline text-blue-700'>{link}</a></li>)}
                        </ul>
    }
    let slideShow = false;
    if( experience?.slides && experience?.slides.length > 0 ) {
        slideShow = <SlideShow images={experience.slides} />
    }
    return (<>
        <div className="@container">
            <GenericHeader />
            <img src={experience?.cover || "https://placehold.co/600x400"} alt={experience?.title || "Company Image"} className="w-full h-64 object-cover" />
            <div className="mx-24">
                <div className="experience-title my-8 flex items-center gap-16">
                    {slideShow ? slideShow : logo}
                    <div className="experience-about">
                        <h2 className="text-2xl font-bold">{experience?.title}</h2>
                        <p className="text-lg">{experience?.description}</p>
                        {external_links}
                    </div>
                </div>
                <div className="experience-body my-16">
                    
                    {experience?.role && <h3 className="text-xl font-semibold mt-4">{experience?.role}</h3>}
                    {experience?.role && <p className="mt-2">{experience?.role_description}</p>}

                    {experience?.contributions.length > 0 && contributions}

                    <div className="bg-slate-100 rounded-lg shadow-md my-16 p-4"> 
                        <h4 className="text-lg font-bold">Technologies used:</h4>
                        <div className="flex m-4 gap-8">
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