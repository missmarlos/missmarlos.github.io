import '../Portfolio.css';
import Gallery, { ImageItem } from '../../Gallery/Gallery';
import { conceptSketches, refinedSketches } from './Sketches';
import CodeIcon from '@mui/icons-material/Code';
import { Button } from '@mui/material';
import NavMenu from '../../NavMenu/NavMenu';

export default function StudyShuffle(){
    const conceptItems = conceptSketches as ImageItem[];
    const refintedItems = refinedSketches as ImageItem[];

    return(
        <>
            <div className="portfolioRoot" id="shuffle">
                <div className="title" id="portfolio">
                    portfolio
                </div>
                <div className="subRoot" id="shuffle">
                    <div className="navigation">
                        <NavMenu/>
                    </div>
                    <div className="subRootTitle">
                        cpsc 581 project 3: study-shuffle 
                    </div>
                    <div className="descriptionTitle">
                            description 
                    </div>
                    <div className="descriptionContent" id="shuffle">
                    Study Shuffle solves the everyday problem students are faced with when trying to have effective study sessions. 
                    This Arduino-based project allows users to quickly establish an optimal environment for focusing through
                    auto-loading music upon genre selection, setting pomodoro timers, and providing rewards.
                    </div>
                    <div className="conceptTitle" id="shuffle">
                        initial sketches
                    </div>
                    <div className="conceptDescription" id="shuffle">
                        Each person came up with 10 initial sketches. Out of the combined total of 30 sketches, we chose our top 10. 
                        From these sketches, we created variations for our refined sketches.
                    </div>
                    <div className="conceptGallery" id="shuffle">
                        <Gallery items={conceptItems} numOfCols={2}/>
                    </div>
                    <div className="refinedTitle" id="shuffle">
                        refined sketches
                    </div>
                    <div className="refinedDescription" id="shuffle">
                        We created a total of 10 sketches as a team for our refined sketches step. From these, we solidified our implementation to
                        include a spinner with study music genres instead of TV shows because the Netflix API was limited. We also implemented the candy dispenser idea. 
                    </div>
                    <div className="refinedGallery" id="shuffle">
                        <Gallery items={refintedItems} numOfCols={2}/>
                    </div>
                    <div className="videoTitle" id="shuffle">
                        demo
                    </div>
                    <div className="video" id="shuffle">
                        <iframe 
                            width="70%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/MSpxPj6dNmA" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className="extras" id="shuffle">
                        <div className="sourceCode">
                            <a href="https://github.com/soapsrc/study-shuffle" target="_blank" rel="noreferrer">source code</a>
                            <div>
                                <Button style={{maxHeight: "30px", maxWidth: "30px", minHeight: "30px", minWidth: "30px"}} href="https://github.com/soapsrc/Project-Me-Button.git" target="_blank" rel="noreferrer">
                                    <CodeIcon style={{maxHeight: "55px", maxWidth: "55px", minHeight: "55px", minWidth: "55px", color: "#303C36"}}/>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="myContributionsTitle" id="shuffle">
                        my contributions
                    </div>
                    <div className="myContributions" id="shuffle">
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
