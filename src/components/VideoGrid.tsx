import Card from "./Card"

const data = [
    {
        title: "Ep.2 Trailer | People by WTF : Nikhil Kamath & Ranbir Kapoor",
        image: 'pick1.webp',
        thumbImage: 'nikhil.jpg',
        author: 'Nikhil Kamath',
        views: '543K views',
        timeStamp: '4 years ago'
    }
]


export const VideoGrid = () => {
    return <div>
        {data.map((video, index) => {
            return (
                <div key={index}>
                    <Card 
                        title={video.title}
                        image={video.image}
                        thumbImage={video.thumbImage}
                        author={video.author}
                        views={video.views}
                        timeStamp={video.timeStamp}
                    />
                </div>
            )
        })}
    </div>
}