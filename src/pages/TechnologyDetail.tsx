import { useParams } from 'react-router-dom';
import type { Portfolio } from '../types';
import GenericHeader from '../components/GenericHeader';
import LogoBig from '../components/LogoBig';
import portfolioData from '../experiences.json';
import CardContainer from '../components/CardContainer';


function TechnologyDetail() {

    const { technologySlug } = useParams();
    const portfolio: Portfolio = portfolioData
    // const technology = portfolioData.technologies.find(t => t.slug === technologySlug);
    const technology = portfolio["technologies"][technologySlug];
    console.log(technology)
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
    let experiences: Array<Object> = []
    if (technology?.experiences.companies.length > 0 ||
        technology?.experiences.personal_projects.length > 0 ||
        technology?.experiences.freelance_projects.length > 0 
    ) {

        Object.entries(technology.experiences).forEach(([exp_type, exp_slugs]) => {
            console.log("In cycle with ", exp_type, exp_slugs)
            Object.values(portfolio["experiences"][exp_type]).forEach(value => {
                console.log("In cycle with ", value)
                console.log(`${value.slug} in ${exp_slugs}: ${exp_slugs.includes(value.slug)}`)
                if (exp_slugs.includes(value.slug)) {
                    
                    console.log("Adding experience " + portfolio["experiences"][exp_type][value.slug] + "to experiences")
                    experiences.push(portfolio["experiences"][exp_type][value.slug])
                }
            })
            // experiences.push(portfolio[exp_type])
        })
        // experiences = technology.experiences.companies.map((index, _) => portfolio.experiences[index]) 
        console.log(technology?.experiences.companies.length > 0 ||technology?.experiences.personal_projects.length > 0 || technology?.experiences.freelance_projects.length > 0)
        console.log(experiences)
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