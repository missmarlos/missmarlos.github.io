import Gallery, { ImageItem } from '../../Gallery/Gallery';
import NavMenu from '../../NavMenu/NavMenu';
import '../Portfolio.css';
import { conceptSketches, refinedSketches } from './Sketches';

export default function PhoneUnlock(){
    const conceptItems = conceptSketches as ImageItem[];
    const refintedItems = refinedSketches as ImageItem[];

    return(
        <>
            <div className="portfolioRoot" id="unlock">
                <div className="title" id="portfolio">
                    portfolio
                </div>
                <div className="subRoot" id="unlock">
                    <div className="navigation">
                        <NavMenu/>
                    </div>
                    <div className="subRootTitle">
                        cpsc 581 project 2: phone unlock
                    </div>
                    <div className="descriptionTitle">
                            description 
                    </div>
                    <div className="descriptionContent" id="unlock">
                        Ravioli Ravioli and PenGUI are HCI projects that center on animated touch-based and 
                        sensor based interface for a mobile device that provide an alternative to 'slide to unlock'. 
                        It was made in collaboration between Sophia Le, Marela Carlos, and Daniel Tiu.  T
                        his page documents the iterative design process that lead to our final products that demonstrated two different techniques with:
                        <br/>-One based on gesture or multi-touch input
                        <br/>-The other based on sensor input (e.g. for one-hand use).
                        <br/><br/>
                        Examples of sensor are accelerometer, gyroscope, light, camera, etc. Our products use animation 
                        to provide feedback that the system is recognizing the action being taken, and how the system then 
                        unlocks the device after the action is completed. Accidental Accidental activation is avoided due 
                        the comprehensive and thorough design of our techniques. 
                    </div>
                    <div className="conceptTitle" id="unlock">
                        initial sketches
                    </div>
                    <div className="conceptDescription" id="unlock">
                        Each person came up with 5 novel ideas for each of Part A and Part B to have a total of 10 initial sketches. 
                        We looked at our 30 sketches combined and chose our favourites to create variations for our refined sketches. 
                        The images shown below are the seven sketches that we picked.
                    </div>
                    <div className="conceptGallery" id="unlock">
                        <Gallery items={conceptItems} numOfCols={2}/>
                    </div>
                    <div className="refinedTitle" id="unlock">
                        refined sketches
                    </div>
                    <div className="refinedDescription" id="unlock">
                        For our refined sketches, each person, again, came up with 10 sketches each- 5 for Part A and 5 for Part B. 
                        These sketches were variations of our top initial sketches.
                        <br/>
                        After completing these refined sketches, we solidified our decision on implementing the item selection and 
                        proximity sensor ideas. Each person chose a few items to be included in Part A. The character used in Part B was 
                        taken from one of the refined sketches below.  
                    </div>
                    <div className="refinedGallery" id="unlock">
                        <Gallery items={refintedItems} numOfCols={2}/>
                    </div>
                    <div className="videoTitle" id="unlock">
                        demo
                    </div>
                    <div className="video" id="unlock">
                        <iframe 
                            width="70%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/ZnSatIL6B38" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className="extras" id="unlock">links</div>
                    <div className="extrasContent" id="unlock">
                        <a className="unlockLink" href="https://github.com/mightymosdan/ravioli" target="_blank" rel="noreferrer">part a source code</a>
                        <a className="unlockLink" href="https://www.figma.com/file/17X9niDSoSJPE4SCrRaKBX/CPSC-581-Project-2?node-id=0%3A1" target="_blank" rel="noreferrer">part b figma mockup</a>
                        <a className="unlockLink" href="https://cloud.protopie.io/p/edec27bf7e" target="_blank" rel="noreferrer">part b protopie prototype</a>
                    </div>
                    <div className="myContributionsTitle" id="unlock">
                        my contributions
                    </div>
                    <div className="myContributions" id="unlock">
                        The sketches I contributed are labelled with my name in the above sketch sections.
                        For the implementation, I created the phone unlock for Part B, using Figma to design each 
                        screen and Protopie to animate and use the proximity sensors. Finally, I edited the demo video captured above.
                    </div>
                </div>
            </div>
        </>
    );
}