import { useParams } from 'react-router-dom';
import GenericHeader from '../components/GenericHeader';
import LogoBig from '../components/LogoBig';
import portfolioData from '../experiences.json';
import CardContainer from '../components/CardContainer';


function TechnologyDetail() {

    const { technologySlug } = useParams();
    const technology = portfolioData.technologies.find(t => t.slug === technologySlug);
    let achievements = (<div className="bg-slate-100 rounded-lg shadow-md my-16 p-4"> 
                        <h4 className="text-lg font-bold">My main achievements:</h4>
                        <ul className="list-disc list-inside m-4">
                            {technology?.achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                            ))}
                        </ul>
                    </div>)
    let external_links = false
        if (technology?.external_links.length > 0) {
            external_links = <ul className='mt-3'>
                                {technology?.external_links.map((link, index) => <li key={index}><a href={link} target="_blank" className='underline text-blue-700'>{link}</a></li>)}
                            </ul>
        }
    let experiences = false
    if (technology?.experiences.length > 0) {
        experiences = technology.experiences.map((index, _) => portfolioData.experiences[index])
    }
    return (
        <div className="@container">
            <GenericHeader />
            <div className="mx-24">
                <div className="tech-title my-8 flex items-center gap-16">
                    <LogoBig href={technology?.logo} alt={technology?.title}/>
                    <div className="tech-about">
                        <h2 className="text-2xl font-bold">{technology?.title}</h2>
                        <p className="text-lg">{technology?.description}</p>
                        {external_links}
                    </div>
                </div>
                <div className="tech-body my-16">
                    
                    <p className="mt-2">{technology?.comment}</p>

                    {technology?.achievements.length > 0 && achievements}

                    {technology?.experiences.length > 0 ? (<div className="bg-slate-100 rounded-lg shadow-md my-16 p-4"> 
                        <h4 className="text-lg font-bold"></h4>
                        <CardContainer cardList={experiences} title={`Things where I used ${technology?.title}:`}/>
                    </div>): ""}
                </div>

            </div>
        </div>
    );
}

export default TechnologyDetail;