import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface ImageItem {
    image: string;
    title: string;
    description: string;
}

interface Props {
    items: ImageItem[];
    numOfCols: number;
}


export default function Gallery(props: Props){
    return(
        <>
            <Box sx={{ width: "100%", height: "100%", overflowY: "scroll" }}>
                <ImageList variant="masonry" cols={props.numOfCols} gap={8}>
                    {props.items.map((item) => (
                    <ImageListItem key={item.image}>
                        <img
                        src={`${item.image}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                        />
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>{item.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {item.description}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </>
    );
}