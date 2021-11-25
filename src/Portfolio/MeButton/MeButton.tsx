import '../Portfolio.css';
import Gallery, { ImageItem } from '../../Gallery/Gallery';
import { conceptSketches, refinedSketches } from './Sketches';
import CodeIcon from '@mui/icons-material/Code';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Button } from '@mui/material';
import NavMenu from '../../NavMenu/NavMenu';

export default function MeButton(){
    const conceptItems = conceptSketches as ImageItem[];
    const refintedItems = refinedSketches as ImageItem[];

    return(
        <>
            <div className="portfolioRoot" id="me">
                <div className="title" id="portfolio">
                    portfolio
                </div>
                <div className="subRoot" id="me">
                    <div className="navigation">
                        <NavMenu/>
                    </div>
                    <div className="subRootTitle">
                        cpsc 581 project 1: me-button 
                    </div>
                    <div className="descriptionTitle">
                            description 
                    </div>
                    <div className="descriptionContent">
                        For our Project 1, we decided to have Chef Kirby as our button. 
                        Different types of clicks on him produce different items. 
                        Our project focuses on Kirby's copy ability transformations, 
                        meme generation, feeding Kirby, and the involvement of multiple 
                        sound effects to enhance the User Experience. 
                        Our concept sketches effectively served the purpose for ideation.
                        We chose our favourite three concept sketches to create variations for the refined sketches.
                        This project is coded in HTML, CSS, and JavaScript. 
                    </div>
                    <div className="conceptTitle">
                        concept sketches
                    </div>
                    <div className="conceptGallery">
                        <Gallery items={conceptItems} numOfCols={2}/>
                    </div>
                    <div className="refinedTitle">
                        refined sketches
                    </div>
                    <div className="refinedGallery">
                        <Gallery items={refintedItems} numOfCols={2}/>
                    </div>
                    <div className="videoTitle">
                        demo
                    </div>
                    <div className="video">
                        <iframe 
                            width="70%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/1FUKtXMk_Oo" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className="extras" id="me">
                        <div className="sourceCode">
                            <a href="https://github.com/soapsrc/Project-Me-Button.git" target="_blank" rel="noreferrer">source code</a>
                            <div>
                                <Button style={{maxHeight: "30px", maxWidth: "30px", minHeight: "30px", minWidth: "30px"}} href="https://github.com/soapsrc/Project-Me-Button.git" target="_blank" rel="noreferrer">
                                    <CodeIcon style={{maxHeight: "55px", maxWidth: "55px", minHeight: "55px", minWidth: "55px", color: "#303C36"}}/>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="myContributionsTitle">
                        my contributions
                    </div>
                    <div className="myContributions">
                        As for the sketches, the ones I came up with were concept sketches 9 and 10, 
                        as well as refined sketches 1-4. For the implementation, I added the copy ability items, 
                        transformations, and the 'Poyo!' sound effects. Lastly, I edited the demo video above. 
                        I am grateful to have such strong teammates and am always grateful for our success in collaboration!
                    </div>
                </div>
            </div>
        </>
    );
}
