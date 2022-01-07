import {FC, useEffect, useState} from "react";
import {ImageOfTheDayResponse} from "../../../service/image-of-the-day.service";
import {Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";
import {LikeButton} from "./Like";
import {like, unlike} from "../../../service/save-like-idb.service";

export interface ImageProps{
    likes: any[]
}
export const Image: FC<ImageOfTheDayResponse & ImageProps> = ({title, date, url, explanation, likes}) => {
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(true);
        like(date);
    }

    const handleUnlike = () => {
        setLiked(false);
        unlike(date)
    }

    useEffect(()=>{
        setLiked(likes.includes(date))
    },[likes,date])
    return <Card sx={{maxWidth: 600, m: 2}}>
        <CardHeader
            title={title}
            subheader={date}
        />
        <CardActionArea>
            <CardMedia
                component={"img"}
                src={url}
                alt={explanation}
                onDoubleClick={handleLike}
            />
            <CardContent>
                <LikeButton liked={liked} onClick={liked ?handleUnlike : handleLike }/>
                <Typography variant="body2" color="text.secondary">
                    {explanation}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
}