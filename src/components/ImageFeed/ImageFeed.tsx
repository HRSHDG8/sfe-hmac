import {FC, useEffect, useState} from "react";
import {useQuery} from "react-query";
import {imageOfTheDay as imageApi, ImageOfTheDayResponse} from "../../service/image-of-the-day.service";
import {Loader} from "../Loader/Loader";
import {Image} from './ImageComponents/ImageCard'
import {getSavedLikes} from "../../service/save-like-idb.service";


export const FeedLoader: FC = () => {
    return <>
        <Loader/>
        <Loader/>
        <Loader/>
    </>
}

export const ImageFeed: FC = () => {
    const {data, error, isLoading} = useQuery<ImageOfTheDayResponse[]>('apod-api', imageApi)
    const [likes, setLikes] = useState<any[]>([])
    useEffect(() => {
        getSavedLikes().then(res => {
            setLikes(res);
        })
    }, [])
    if (error) {
        return <div> Error occured </div>
    }
    return <div style={{
        maxHeight: 'calc(100vh - 100px)',
        overflowY: "auto",
        marginTop: 10
    }}>
        {isLoading ? <FeedLoader/> : data?.map(image => <Image key={image.date} {...image} likes={likes}/>)}
    </div>
}