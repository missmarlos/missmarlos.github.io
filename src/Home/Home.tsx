import './Home.css'
import marela from '../Assets/marela.jpeg';
import title from '../Assets/name.svg'
import NavMenu from '../NavMenu/NavMenu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import { Button, createTheme, ThemeProvider } from '@mui/material';
import resume from '../Assets/Resume.pdf';

const theme = createTheme({
    palette: {
        primary: {
            main: "#838B60"
        },
        secondary: {
            main: "#F4F2E8"
        }
    }
  });

interface Props {
    text: string;
}

export default function Home(props: Props){
    return(
        <>
            <ThemeProvider theme={theme}>
                <div className="root" id="home">
                    <div className="menu">
                        <NavMenu/>
                    </div>
                    <div className="title" id="home">
                        <img src={title}/>
                    </div>
                    <div className="image">
                        <img src={marela}/>
                    </div>
                    <div className="about">
                        {props.text}
                    </div>
                    <div className="links">
                        <Button style={{maxHeight: "30px", maxWidth: "30px", minHeight: "30px", minWidth: "30px"}} href="https://github.com/missmarlos">
                            <GitHubIcon style={{maxHeight: "55px", maxWidth: "55px", minHeight: "55px", minWidth: "55px"}}/>
                        </Button>
                        <Button style={{maxHeight: "30px", maxWidth: "30px", minHeight: "30px", minWidth: "30px"}} href="https://www.linkedin.com/in/marela-carlos">
                            <LinkedInIcon style={{maxHeight: "55px", maxWidth: "55px", minHeight: "55px", minWidth: "55px"}}/>
                        </Button>
                        <Button style={{maxHeight: "30px", maxWidth: "30px", minHeight: "30px", minWidth: "30px"}} href={resume} target="_blank">
                            <DescriptionIcon style={{maxHeight: "55px", maxWidth: "55px", minHeight: "55px", minWidth: "55px"}}/>
                        </Button>
                    </div>
                </div>
            </ThemeProvider>
        </>
    );
}