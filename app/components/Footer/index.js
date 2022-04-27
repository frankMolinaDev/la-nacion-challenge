import './styles.css';

const Footer = () => {

    const socialMedia = [
        { text: 'Facebook', href: 'www.facebook.com' },
        { text: 'Twitter', href: 'www.twitter.com' },
        { text: 'Intagram', href: 'www.instagram.com' },
        { text: 'RSS Feed', href: '/' },
    ];
    const apps = [
        { text: 'Google play', href: 'www.facebook.com' },
        { text: 'App store', href: 'www.facebook.com' },
    ];
    const siteMap = [
        { text: 'Mapa del sitio', href: '/' },
        { text: 'Ayuda', href: '/' },
        { text: 'Terminos y condiciones', href: '/' },
        { text: '¿Cómo anunciar?', href: '/' },
        { text: 'Suscribirse al diario impreso', href: '/' },
    ]
    const tos = [
        { text: 'Condiciones', href: '/' },
        { text: 'Privacidad', href: '/' },
    ];

    const LinksList = ({ data }) => {
        return (
            <>
                <ul className='footer-links-list-ul'>
                    {data.map((item, index) => {
                        const { text, href } = item;

                        return (
                            <li key={`${text}-${index}`}>
                                <a href={href}>
                                    {text}
                                </a>
                            </li>
                        )
                    })}
                </ul>

            </>
        )
    }

    const CopyRight = () => {
        return (
            <>
                <div className='copyright-wrapper'>
                    <p>Copyright 2022 Francisco Molina</p>
                    <p>Parte del challenge para la posición de frontend Dev La Nación</p>
                </div>
            </>
        )
    }
    return (
        <>
            <div>
                <div className="footer-section-wrapper border-bottom">
                    <LinksList data={socialMedia} />
                    <a href="/" className='header-logo'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/2/28/Logo_La_Naci%C3%B3n.svg' alt='' />
                    </a>
                    <LinksList data={apps} />
                </div>
                <div className="footer-section-wrapper">
                    <LinksList data={siteMap} />
                    <LinksList data={tos} />
                </div>
                <div className="footer-section-wrapper">
                    <CopyRight />
                </div>
            </div>
        </>
    )
}

export default Footer;