import {FC} from "react";
import {Header} from "./Header/Header";
import {ImageFeed} from "./ImageFeed/ImageFeed";
import classes from "./Spacestagram.module.css";
import {QueryClient, QueryClientProvider} from "react-query";
import {Box, createTheme, ThemeProvider} from "@mui/material";

const client = new QueryClient();
const theme = createTheme({
    palette: {
        mode: 'dark',
    },
});
export const Spacestagram: FC = () => {
    return <ThemeProvider theme={theme}>
        <QueryClientProvider client={client}>
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    height: '100vh',
                    justifyContent: 'center',
                    bgcolor: 'background.default',
                    color: 'text.primary',
                    p: 3,
                    padding: 0
                }}
            >
                <div className={classes.appRoot}>
                    <div className={classes.appContent}>
                        <Header/>
                        <ImageFeed/>
                    </div>
                </div>
            </Box>
    </QueryClientProvider>
    </ThemeProvider>
}