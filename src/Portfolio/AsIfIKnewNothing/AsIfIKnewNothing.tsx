// https://www.youtube.com/watch?v=GrbsbaQNAqw

import '../Portfolio.css';
import Gallery, { ImageItem } from '../../Gallery/Gallery';
import { initialSketches, refinedSketches } from './Sketches';
import NavMenu from '../../NavMenu/NavMenu';

export default function MeButton(){
    const conceptItems = initialSketches as ImageItem[];
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
                        cpsc 581 project 4: as if i knew nothing 
                    </div>
                    <div className="descriptionTitle">
                        description 
                    </div>
                    <div className="descriptionContent" id="shuffle">
                        For the final project of the course, my group and I created a prototype 
                        for an app that facilitates collaboration and communication remotely.
                        This idea lets an individual gauge their knowledge on a certain topic
                        by sending their explanation to an expert, who is also a stranger.
                        The user can make their explanation using diagrams that allow
                        for text, shapes, and pen. After receiving feedback from an expert,
                        the user has the option to pay the expert with money.
                        
                    </div>
                    <div className="conceptTitle" id="shuffle">
                        initial sketches
                    </div>
                    <div className="conceptDescription" id="shuffle">
                        Each group member created their own initial sketches for the group's top ten sketches.
                    </div>
                    <div className="conceptGallery" id="shuffle">
                        <Gallery items={conceptItems} numOfCols={2}/>
                    </div>
                    <div className="refinedTitle" id="shuffle">
                        refined sketches
                    </div>
                    <div className="refinedDescription" id="shuffle">
                        After discussing our initial sketches, we chose to focus our refined sketches on the idea communicated in Initial Sketch #5.
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
                            src="https://www.youtube.com/embed/GrbsbaQNAqw" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className="extras" id="shuffle">links</div>
                    <div className="extrasContent" id="nothing">
                        <a className="nothingLink" href="https://www.figma.com/file/zdYQ1VJe5nc6nA1FaDJ2kL/Prototype?node-id=0%3A1" target="_blank" rel="noreferrer">figma mockup and prototype</a>
                    </div>
                    <div className="myContributionsTitle" id="shuffle">
                        my contributions
                    </div>
                    <div className="myContributions" id="shuffle">
                        For the initial sketches, I created sketches 6 and 7. I also did refined sketches 9 and 10.
                        I worked on the mockup and prototype using Figma, recorded the demo for the stranger perspective, and edited the video.
                    </div>
                </div>
            </div>
        </>
    );
}
