import '../Portfolio.css';
import WebIcon from '@mui/icons-material/Web';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import { Button } from '@mui/material';
import NavMenu from '../../NavMenu/NavMenu';
import Gallery, { ImageItem } from '../../Gallery/Gallery';
import { barkipediaImages } from './Images';

export default function Barkipedia(){
    const conceptItems = barkipediaImages as ImageItem[];

    return(
        <>
            <div className="portfolioRoot" id="barkipedia">
                <div className="title" id="portfolio">
                    portfolio
                </div>
                <div className="subRoot" id="barkipedia">
                    <div className="navigation">
                        <NavMenu/>
                    </div>
                    <div className="subRootTitle">
                        cpsc 481 course project: barkipedia 
                    </div>
                    <div className="descriptionTitle">
                            description 
                    </div>
                    <div className="descriptionContent">
                        Barkipedia was a prototype created following the User Centred Design process. It was prototyped as a mobile application
                        and was an informational dog application for current and prospective dog owners. The app allowed users to optimize
                        their dog-related tasks by implementing features including reviews, forums, and events. This was a group project that
                        spanned the entirety of the course. The end goal was to create a high fidelity prototype on Adobe XD. 
                    </div>
                    <div className="stepsTitle">
                            steps 
                    </div>
                    <div className="stepsContent">
                            1. Decide on a project, determine users, conduct research methods <br/>
                            2. Brainstorm as a team, sketch ideas, refine best ideas, create a wireframe/low fidelity prototype <br/>
                            3. Create a high fidelity prototype on Adobe XD, identify weak points of the prototype, finalize high fidelity prototype <br/>
                    </div>
                    <div className="prototypeTitle">
                        prototype images
                    </div>
                    <div className="prototypeGallery">
                        <Gallery items={conceptItems} numOfCols={2}/>
                    </div>
                    <div className="extras" id="barkipedia">
                        <div>
                            <a href="https://cpsc481fall2019.github.io/index.html" target="_blank" rel="noreferrer">group portfolio</a>
                            <div>
                                <Button style={{maxHeight: "30px", maxWidth: "30px", minHeight: "30px", minWidth: "30px"}} href="https://cpsc481fall2019.github.io/index.html" target="_blank" rel="noreferrer">
                                    <WebIcon style={{maxHeight: "55px", maxWidth: "55px", minHeight: "55px", minWidth: "55px", color: "#303C36"}}/>
                                </Button>
                            </div>
                        </div>
                        <div>
                            <a href="https://xd.adobe.com/view/f1f8bda3-f374-49f9-776b-e1133915443b-87c9/?fullscreen" target="_blank">final high fidelity prototype</a>
                            <div>
                                <Button style={{maxHeight: "30px", maxWidth: "30px", minHeight: "30px", minWidth: "30px"}} href="https://xd.adobe.com/view/f1f8bda3-f374-49f9-776b-e1133915443b-87c9/?fullscreen" target="_blank" rel="noreferrer">
                                    <SlideshowIcon style={{maxHeight: "55px", maxWidth: "55px", minHeight: "55px", minWidth: "55px", color: "#303C36"}}/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
