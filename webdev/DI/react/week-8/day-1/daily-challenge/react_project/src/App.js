import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const images = [
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/HK_Victoria_Harbour_at_night_%28Panaroma%29.jpg/800px-HK_Victoria_Harbour_at_night_%28Panaroma%29.jpg",
        label: "Hong Kong"
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Macau_Ruins_of_St._Paul%27s_1.jpg/800px-Macau_Ruins_of_St._Paul%27s_1.jpg",
        label: "Macao"
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Mt_Fuji_from_Lake_Kawaguchiko_2009.jpg/800px-Mt_Fuji_from_Lake_Kawaguchiko_2009.jpg",
        label: "Japan"
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Las_Vegas_Strip_at_night_%282011%29.jpg/800px-Las_Vegas_Strip_at_night_%282011%29.jpg",
        label: "Las Vegas"
    }
]

function App() {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Travel Carousel</h2>
            <Carousel showArrows={true} infiniteLoop={true} showThumbs={false}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image.src} alt={image.label} />
                        <p className="legend">{image.label}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default App
