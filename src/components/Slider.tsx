
import React from "react";
import { useEffect } from "react";
import { createTheme, ThemeProvider, PaletteMode } from '@mui/material/styles';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Typography from '@mui/material/Typography';
//import { useTheme } from "@material-ui/core/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import getBlogTheme from '../theme/getBlogTheme';

// Collection of images with their labels and paths
const MyCollection = [
    {
        label: "First Picture",
        imgPath:
            "https://media.geeksforgeeks.org/wp-content/uploads/20210208000010/1.png",
    },
    {
        label: "Second Picture",
        imgPath:
            "https://media.geeksforgeeks.org/wp-content/uploads/20210208000009/2.png",
    },
    {
        label: "Third Picture",
        imgPath:
            "https://media.geeksforgeeks.org/wp-content/uploads/20210208000008/3.png",
    },
];

export default function Slider() {
    const CollectionSize = MyCollection.length;
    const [index, setActiveStep] = React.useState(0);
    const blogTheme = createTheme(getBlogTheme('light'));
    //const defaultTheme = createTheme({ palette: { 'light' } });
     // Function to go to the next picture
    const goToNextPicture = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const goToPreviousPicture = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prevActiveStep) => (prevActiveStep + 1) == CollectionSize ? 0 : prevActiveStep + 1 )

        }, 3000);
      
        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
      }, [])

    return (
        <div
            style={{
                marginLeft: "-15%",
                marginRight: "-15%",

            }}
        >
            <div
                style={{
                    width: "%100",
                    flexGrow: 1,
                }}
            >
                <Paper
                    square
                    elevation={0}
                    style={{
                        height: 50,
                        display: "flex",
                        paddingLeft: 4,
                        backgroundColor: blogTheme.palette.background.default,
                        alignItems: "center",
                    }}
                >
                    <Typography>{MyCollection[index].label}</Typography>
                </Paper>
                <img
                    src={MyCollection[index].imgPath}
                    style={{
                        height: 355,
                        width: "100%",
                        display: "relative",
                        overflow: "hidden",
                    }}
                    alt={MyCollection[index].label}
                />

            </div>
        </div>
    );

}