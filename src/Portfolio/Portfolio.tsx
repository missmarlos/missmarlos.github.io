import './Portfolio.css';
import Gallery, { ImageItem } from '../Gallery/Gallery';
import { conceptSketches, refinedSketches } from './Sketches';
import CodeIcon from '@mui/icons-material/Code';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Button } from '@mui/material';
import NavMenu from '../NavMenu/NavMenu';

export default function Portfolio(){
    const conceptItems = conceptSketches as ImageItem[];
    const refintedItems = refinedSketches as ImageItem[];

    return(
        <>
            <div className="root" id="portfolio">
                <div className="title" id="portfolio">
                    portfolio
                </div>
                <div className="hci">
                    <div className="navigation">
                        <NavMenu/>
                    </div>
                    <div className="hciTitle">
                        cpsc 581 project 1: me-button 
                    </div>
                    <div className="descriptionTitle">
                            description 
                    </div>
                    <div className="descriptionContent">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolorem quidem aliquid nulla incidunt eos ea, eius, dolores quo est ex omnis ut! Excepturi, dolore laboriosam! Incidunt enim cupiditate deserunt.
                    </div>
                    <div className="conceptTitle">
                        concept sketches
                    </div>
                    <div className="conceptGallery">
                        <Gallery items={conceptItems}/>
                    </div>
                    <div className="refinedTitle">
                        refined sketches
                    </div>
                    <div className="refinedGallery">
                        <Gallery items={refintedItems}/>
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
                    <div className="extras">
                        <div className="sourceCode">
                            source code
                            <div>
                                <Button style={{maxHeight: "30px", maxWidth: "30px", minHeight: "30px", minWidth: "30px"}} href="https://github.com/soapsrc/Project-Me-Button.git">
                                    <CodeIcon style={{maxHeight: "55px", maxWidth: "55px", minHeight: "55px", minWidth: "55px", color: "#303C36"}}/>
                                </Button>
                            </div>
                        </div>
                        <div className="pdfReport">
                            pdf report
                            <div>
                                <Button style={{maxHeight: "30px", maxWidth: "30px", minHeight: "30px", minWidth: "30px"}} href="https://github.com/soapsrc/Project-Me-Button.git">
                                    <PictureAsPdfIcon style={{maxHeight: "55px", maxWidth: "55px", minHeight: "55px", minWidth: "55px", color: "#303C36"}}/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
