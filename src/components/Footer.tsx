
import githubLogoDark from '../assets/github_dark.svg'
import linkedinLogo from '../assets/linkedin.svg'
import emailLogoDark from '../assets/email_dark.svg'
import phoneLogoDark from '../assets/phone_dark.svg'

function Footer() {
    const iconClasses = "h-5 w-5 object-contain inline mr-2";
    const contactLineClasses = "block my-3 font-semibold";
    const contactLinksClasses = contactLineClasses + " underline";
  return (
    <footer className="footer flex-col align-center py-6 bg-slate-100">
        <h3 className="text-lg font-bold text-center">Giulio Scutari</h3>
        <div className="flex justify-center gap-16 px-1">
            <span className={contactLineClasses}><img src={phoneLogoDark} alt="Phone" className={iconClasses} />+39 3455907888</span>
                    <a className={contactLinksClasses} href="mailto:scutarigiulio@gmail.com">
                        <img src={emailLogoDark} alt="Email" className={iconClasses} />
                        scutarigiulio@gmail.com
                    </a>
                    <a className={contactLinksClasses} href="https://github.com/giulioscutari" target="_blank" rel="noopener noreferrer">
                        <img src={githubLogoDark} alt="GitHub" className={iconClasses} />
                        https://github.com/giulioscutari
                    </a>
                    <a className={contactLinksClasses} href="https://www.linkedin.com/in/giulio-scutari-616452159/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinLogo} alt="LinkedIn" className={iconClasses} />
                        https://www.linkedin.com/in/giulio-scutari-616452159/
                    </a>
        </div>
    </footer>
  );
}

export default Footer;