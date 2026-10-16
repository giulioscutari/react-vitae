import CardContainer from '../components/CardContainer'
import githubLogoLight from '../assets/github_light.svg'
import linkedinLogoLight from '../assets/linkedin_light.svg'
import emailLogoLight from '../assets/email_light.svg'
import phoneLogoLight from '../assets/phone_light.svg'
import portfolioData from '../experiences.json'
import ProfilePicture from '../assets/media/profile_picture.jpg'

function Home() {
    // const experiences = portfolioData.experiences.map(experience => ({
    //     ...experience,
    //     start_date: new Date(experience.start_date),
    //     end_date: new Date(experience.end_date),
    // }));

    const iconClasses = "h-5 w-5 object-contain inline mr-2";
    const contactLineClasses = "block my-3";
    const contactLinksClasses = contactLineClasses + " underline";
    return (
        <div className="@container">
            <header className="bg-slate-800 text-white flex px-16 py-8 gap-16 items-center font-semibold">
                <img src={ProfilePicture} alt="Profile" className="rounded-full" />
                <div className="">
                    <div>
                        <h1 className="name text-5xl">Giulio Scutari</h1>
                        <h3 className="title text-3xl pt-4">Web Developer</h3>
                    </div>
                </div>
                <div className="contact-info">
                    <span className={contactLineClasses}><img src={phoneLogoLight} alt="Phone" className={iconClasses} />+39 3455907888</span>
                    <a className={contactLinksClasses} href="mailto:scutarigiulio@gmail.com">
                        <img src={emailLogoLight} alt="Email" className={iconClasses} />
                        scutarigiulio@gmail.com
                    </a>
                    <a className={contactLinksClasses} href="https://github.com/giulioscutari" target="_blank">
                        <img src={githubLogoLight} alt="GitHub" className={iconClasses} />
                        https://github.com/giulioscutari
                    </a>
                    <a className={contactLinksClasses} href="https://www.linkedin.com/in/giulio-scutari-616452159/" target="_blank">
                        <img src={linkedinLogoLight} alt="LinkedIn" className={iconClasses} />
                        https://www.linkedin.com/in/giulio-scutari-616452159/
                    </a>
                </div>
            </header>
            <CardContainer cardList={portfolioData.experiences.companies} title="Companies I worked for:" />
            <CardContainer cardList={portfolioData.experiences.freelance_projects} title="Freelance projects I made:" />
            <CardContainer cardList={portfolioData.experiences.personal_projects} title="Personal projects I made:" />
            <CardContainer cardList={portfolioData.technologies} title="Technologives I have used:" />
        </div>
    );
}

export default Home;