import {FC} from "react";
import {Card, CardContent, CardHeader, Skeleton} from "@mui/material";

export const Loader: FC = () => {
    return <Card sx={{width: 600, m: 2}}>
        <CardHeader
            title={
                <Skeleton
                    animation="wave"
                    height={20}
                    width="80%"
                    style={{marginBottom: 6}}
                />
            }
            subheader={
                <Skeleton animation="wave" height={10} width="40%"/>
            }
        />
            <Skeleton sx={{height: 290}} animation="wave" variant="rectangular"/>
        <CardContent>
                <>
                    <Skeleton animation="wave" height={10} width="100%" />
                    <Skeleton animation="wave" height={10} width="100%" />
                    <Skeleton animation="wave" height={10} width="100%" />
                    <Skeleton animation="wave" height={10} width="100%" />
                </>
        </CardContent>
    </Card>
}