import '../Footer/Footer.css'

const Footer = () => {
    return (
        <div className="footer mt3">
            <div className="dFlexCol centered">
                <ul className="centered mt4 mb4">
                    <li className="noBullet me3">
                        <a href="https://www.linkedin.com/in/agustin-dell-aquila-a5b2451b2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BtZOt1B%2B%2FRwSvTkR3q67M7g%3D%3D" target="_blank" rel="noreferrer" className="noUnderline">
                            <img src="https://agusdellaquila.github.io/acu-web-portfolio/img/socialMedia/icons8-linkedin.svg" alt="my linkedIn profile"/>
                        </a>
                    </li>
                    <li className="noBullet ms3 me3">
                        <a href="https://github.com/" target="_blank" rel="noreferrer" className="noUnderline">
                            <img src="https://agusdellaquila.github.io/acu-web-portfolio/img/socialMedia/githubIcon.png" alt="my github github" width="48px" height="48px"/>
                        </a>
                    </li>
                    <li className="noBullet ms3">
                        <a href="https://twitter.com/acu__js" target="_blank" rel="noreferrer" className="noUnderline">
                            <img src="https://agusdellaquila.github.io/acu-web-portfolio/img/socialMedia/icons8-twitter.svg" alt="my twitter profile"/>
                        </a>
                    </li>
                </ul>
                <div className="dFlex mb3 centered">
                    <img src="https://agusdellaquila.github.io/acu-web-portfolio/img/socialMedia/icons8-email-48.png" alt="email logo"/>
                    <p className="fwBold fs5 ms2">agusdellaquila72@gmail.com</p>
                </div>

                <p className="textAlignCenter mb4">© Agustin Dell Aquila. All Rights Reserved. Buenos Aires, AR.</p>
            </div>
        </div>
    )
}

export default Footer