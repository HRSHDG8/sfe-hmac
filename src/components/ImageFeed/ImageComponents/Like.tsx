import {FC} from "react";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import {makeStyles} from "@mui/styles";

interface LikeButtonProps {
    liked: boolean
    onClick: () => void
}

export const useImageCardStyles = makeStyles(() => ({
    like: {
        animation: "$like-button-animation 0.45s",
        animationTimingFunction: "ease-in-out",
        color: "#fb3958",
        transform: "scale(1)",
    },
    liked: {
        animation: "$liked-button-animation 0.45s",
        animationTimingFunction: "ease-in-out",
        color: "#fb3958",
        transform: "scale(1)",
    },
    "@keyframes like-button-animation": {
        "0%": {transform: "scale(1)"},
        "25%": {transform: "scale(1.2)"},
        "50%": {transform: "scale(0.95)"},
        "100%": {transform: "scale(1)"},
    },
    "@keyframes liked-button-animation": {
        "0%": {transform: "scale(1)"},
        "25%": {transform: "scale(1.2)"},
        "50%": {transform: "scale(0.95)"},
        "100%": {transform: "scale(1)"},
    }
}));

export const LikeButton: FC<LikeButtonProps> = ({liked, onClick}) => {
    const classes = useImageCardStyles();


    const Icon = liked ? Favorite : FavoriteBorder;
    const className = liked ? classes.liked : classes.like;
    return <Icon className={className} onClick={onClick}/>;
}