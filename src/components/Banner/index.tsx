import './Banner.css'


interface BannerProps {
    imgSrc: string
    alternativeText?: string 
}

function Banner({ imgSrc, alternativeText} : BannerProps) {
    return (
        <header className='banner'>
            <img src={imgSrc} alt={alternativeText}/>
        </header>
    )
}
export default Banner