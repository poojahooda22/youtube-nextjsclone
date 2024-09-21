import Card from "./Card"

const data = [
    {
        title: "Ep.2 Trailer | People by WTF : Nikhil Kamath & Ranbir Kapoor",
        image: 'pick1.webp',
        thumbImage: 'nikhil.jpg',
        author: 'Nikhil Kamath',
        views: '543K views',
        timeStamp: '4 years ago'
    },
    {
        title: "Ep.2 Trailer | People by WTF : Nikhil Kamath & Ranbir Kapoor",
        image: 'pick1.webp',
        thumbImage: 'nikhil.jpg',
        author: 'Nikhil Kamath',
        views: '543K views',
        timeStamp: '4 years ago'
    },
    {
        title: "Ep.2 Trailer | People by WTF : Nikhil Kamath & Ranbir Kapoor",
        image: 'pick1.webp',
        thumbImage: 'nikhil.jpg',
        author: 'Nikhil Kamath',
        views: '543K views',
        timeStamp: '4 years ago'
    },
    {
        title: "Ep.2 Trailer | People by WTF : Nikhil Kamath & Ranbir Kapoor",
        image: 'pick1.webp',
        thumbImage: 'nikhil.jpg',
        author: 'Nikhil Kamath',
        views: '543K views',
        timeStamp: '4 years ago'
    },
    {
        title: "Ep.2 Trailer | People by WTF : Nikhil Kamath & Ranbir Kapoor",
        image: 'pick1.webp',
        thumbImage: 'nikhil.jpg',
        author: 'Nikhil Kamath',
        views: '543K views',
        timeStamp: '4 years ago'
    },
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
    return <div 
    className="grid grid-cols-1 md:grid-cols-2 
    lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
        {data.map((video, index) => {
            return (
                <Card 
             key={index} 
                    title={video.title}
                    image={video.image}
                    thumbImage={video.thumbImage}
                    author={video.author}
                    views={video.views}
                    timeStamp={video.timeStamp}
                />
            )
        })}
    </div>
}