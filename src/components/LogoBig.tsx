

function LogoBig ({href, alt}: {href: string, alt: string}) {

    return (
        <img src={href} alt={alt} className="w-48 h-48 object-contain rounded-full"/>
    )
}

export default LogoBig;