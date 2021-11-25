import '../Portfolio.css';
import WebIcon from '@mui/icons-material/Web';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import { Button } from '@mui/material';
import NavMenu from '../../NavMenu/NavMenu';
import CodeIcon from '@mui/icons-material/Code';
import Gallery, { ImageItem } from '../../Gallery/Gallery';
import { hypertrophyImages } from './LandingPage';

export default function Hypertrophy(){
    const landingPageImages = hypertrophyImages as ImageItem[];

    return(
        <>
            <div className="portfolioRoot" id="hypertrophy">
                <div className="title" id="portfolio">
                    portfolio
                </div>
                <div className="subRoot" id="hypertrophy">
                    <div className="navigation">
                        <NavMenu/>
                    </div>
                    <div className="subRootTitle">
                        cpsc 471 course project: hypertrophy 
                    </div>
                    <div className="descriptionTitle">
                            description 
                    </div>
                    <div className="descriptionContent">
                        Hypertrophy was a full stack web application coded using HTML5, CSS3, Bootstrap 4, and PHP. 
                        The app was intended for users to share their workouts within a supportive fitness community.
                        User workouts would inputted through a responsive user interface that would then be stored to the backend.
                        Users could then later look back at previous workouts so that they can see their growth.
                        This was a group project done for the course.
                    </div>
                    <div className="landingPageTitle">
                        landing page images
                    </div>
                    <div className="landingPageGallery">
                        <Gallery items={landingPageImages} numOfCols={1}/>
                    </div> 
                    <div className="extras" id="hypertrophy">
                        <div>
                            <a href="https://github.com/nmoton/CPSC471-HYPERTROPHY-WEB-APP" target="_blank" rel="noreferrer">source code</a>
                            <div>
                                <Button style={{maxHeight: "30px", maxWidth: "30px", minHeight: "30px", minWidth: "30px"}} href="https://github.com/nmoton/CPSC471-HYPERTROPHY-WEB-APP" target="_blank" rel="noreferrer">
                                    <CodeIcon style={{maxHeight: "55px", maxWidth: "55px", minHeight: "55px", minWidth: "55px", color: "#303C36"}}/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
