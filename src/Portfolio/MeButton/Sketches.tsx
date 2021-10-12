import c1 from '../../Assets/ConceptSketches/1.png';
import c2 from '../../Assets/ConceptSketches/2.png';
import c3 from '../../Assets/ConceptSketches/3.png';
import c4 from '../../Assets/ConceptSketches/4.png';
import c5 from '../../Assets/ConceptSketches/5.png';
import c6 from '../../Assets/ConceptSketches/6.png';
import c7 from '../../Assets/ConceptSketches/7.png';
import c8 from '../../Assets/ConceptSketches/8.png';
import c9 from '../../Assets/ConceptSketches/9.png';
import c10 from '../../Assets/ConceptSketches/10.png';

import r1 from '../../Assets/RefinedSketches/1.png';
import r2 from '../../Assets/RefinedSketches/2.png';
import r3 from '../../Assets/RefinedSketches/3.png';
import r4 from '../../Assets/RefinedSketches/4.png';
import r5 from '../../Assets/RefinedSketches/5.png';
import r6 from '../../Assets/RefinedSketches/6.png';
import r7 from '../../Assets/RefinedSketches/7.png';
import r8 from '../../Assets/RefinedSketches/8.png';
import r9 from '../../Assets/RefinedSketches/9.png';
import r10 from '../../Assets/RefinedSketches/10.png';


export const conceptSketches = [
    {
        image: c1,
        title: "Concept Sketch 1",
        description: "This idea conforms to Kirby’s love of food and his Japanese origins, being a character of Nintendo. The button would need to be constantly pressed so that Kirby can continue eating. Every time he eats, he would produce a sound of satisfaction. If there is no button press after about three seconds, Kirby would make a sad noise. The concept of food inhalation and sound effects are captured in our implementation for Project 1."
    },
    {
        image: c2,
        title: "Concept Sketch 2",
        description: "This is another sketch dealing with feeding Kirby. It also ties in with Kirby’s love of saving the world. Here, he has the opportunity to fight evil with enough food- the button-presser would spam the button to feed Kirby until the ‘feed’ button turns into a ‘fight’ button. Again, Kirby gets fed in our implementation. The fighting aspect was not pursued further but transformation from ‘normal’ Kirby to Kirby of another form- like in this sketch where he goes from ‘normal’ to ‘fight’ Kirby- is present."
    },
    {
        image: c3,
        title: "Concept Sketch 3",
        description: "This sketch communicates the idea of pressing a button to upgrade the graphics on the screen. Kirby would start off pixelated and then get more and more modernized with each button press. This relates to Kirby’s history in that the first Kirby game was available on the original Game Boy, which has graphics that are more pixelated than what we see in video games today. In our implementation, we decided to maintain the 2D pixel-art style with no graphics upgrade."
    },
    {
        image: c4,
        title: "Concept Sketch 4",
        description: "This idea involves the trend of ASMR. ASMR stands for Autonomous Sensory Meridian Response and it is meant to facilitate tingles when heard. Here, the sounds are achieved through different button presses. For example, spamming the button leads to Kirby playing the Game Boy- and the sounds associated with that. In our implementation, doing a long hold of the button will cause Kirby to eat and then say ‘Poyo!’- this ASMR sketch definitely inspired the many sound effects in our project. Other sounds that can be heard in our project include: Kirby inhaling, an item coming out of the pot, an item landing on the grass, a meme displaying on the mirror, and the background music."
    },
    {
        image: c5,
        title: "Concept Sketch 5",
        description: "This sketch depicts Kirby as the button. Each button click displays a different Kirby meme. This meme generator was something we wanted in our project because we thought it was funny. Kirby memes are prevalent in our generation and we are happy to have immortalized them in our project. We took this idea further by having the memes displayed on a mirror each time Kirby inhales a tomato- which can be attained with a double click on our button. The Mtomatos that Kirby loves to eat were convenient since an M is printed on each- M for meme."
    },
    {
        image: c6,
        title: "Concept Sketch 6",
        description: "There are multiple buttons here, each being a different paint colour on a palette. Whatever colour you click on will be the colour of the art on the canvas. We did not pursue this idea in our project, since we wanted to keep the focus on one main button."
    },
    {
        image: c7,
        title: "Concept Sketch 7",
        description: "This is another idea that had a significant impact on our implementation. Kirby’s power stems from the fact that he can copy another power, simply through inhalation. In this sketch, Kirby is the button and each press leads to different versions of Kirby- versions of him in his copy ability forms- being displayed. In our project, Kirby must inhale a ‘copy ability’ item in order to transform. From the above, we have the sword and mirror copy abilities available in our project."
    },
    {
        image: c8,
        title: "Concept Sketch 8",
        description: "Kirby’s quality of helping others is demonstrated in this idea. There is a doctor version of Kirby that is the button. As enemies appear on the screen, the user must click on doctor Kirby to throw pills at them. In response, the enemies would disappear. After a certain number of regular enemies, a boss enemy will appear. The boss would take 5-10 pills to defeat. This idea is like a mini game. We carry this game vibe to our project as it is meant to look like a game, minus the fighting."
    },
    {
        image: c9,
        title: "Concept Sketch 9",
        description: "These three pictures are three variations surrounding the idea of Kirby eating. In the first image, there is a ‘feed’ button that then displays food on the screen, which Kirby very shortly inhales. The second picture has a column to the right that is constantly scrolling. The user should press the button to feed Kirby the item that is in the middle slot of the column. If Kirby eats a non-food item, the user is met with a ‘Game Over’ screen. The final variation is like the second idea but it incorporates lives. Every time Kirby eats a non-food item, his life supply depletes. Our project stays closer to the first variation, where Kirby inhales all the objects outputted by the button- though not always food."
    },
    {
        image: c10,
        title: "Concept Sketch 10",
        description: "In this sketch, the user must follow the instructions on the screen. The middle item in the column would be chosen when the user presses the ‘add’ button. If the instructions are followed, the recipe is correct and Kirby eats the item created. If it’s wrong, Kirby eats a blob. Though the technicalities of this idea are not followed through in our project, this chef version of Kirby is what we used as our button."
    }
];

export const refinedSketches = [
    {
        image: r1,
        title: "Refined Sketch 1",
        description: "This sketch incorporates other Nintendo games, like Mario and Animal Crossing, and has Kirby transform into a character from the game by inhaling an item from the game. Kirby continues walking until he reaches the end of the screen, in which the setting would change, indicating his entry into another game. Kirby walking and inhaling objects to transform is upheld in our implementation. His transformations in our project are of different copy abilities and not of Nintendo characters. The idea of changing backgrounds is also present in our project- each time Kirby transforms into a new copy ability, the background changes."
    },
    {
        image: r2,
        title: "Refined Sketch 2",
        description: "Here, the number of button clicks determines the outcome. Too many button clicks would make Kirby annoyed. Two button presses would display a meme. The memes would be mapped to the number of clicks. In our project, we have the actions of single click, double click, and long click. All items outputted from the pot are generated randomly and so, transformations and meme generations are random, rather than being mapped to a specific variable like in this sketch."
    },
    {
        image: r3,
        title: "Refined Sketch 3",
        description: "Inspired by dress up computer games from the 2000s, the clothes in the closet are the buttons and the action is Kirby inhaling the piece of clothing and transforming into a Nintendo character. Transformations after inhalations are available in our project, each time a copy ability item is released from the pot- when the user single clicks the button."
    },
    {
        image: r4,
        title: "Refined Sketch 4",
        description: "In this sketch, the two trends of Mukbang and ASMR are combined. Mukbang is a trend where people eat food in front of a camera. It is often combined with ASMR. Since Kirby loves to eat, this idea just made sense. In our project, you can feed Kirby with a long click. Tying into the satisfying sounds of ASMR, Kirby says ‘Poyo!’ after inhaling a food item."
    },
    {
        image: r5,
        title: "Refined Sketch 5",
        description: "This is an idea inspired by the meme generator. We had to think of how to display the memes in a clever way, since they were not readily available in sprite form and thus, we had to work around the possibility of some memes not having a transparent background. Though we did not use a TV in our implementation, the mirror that the memes are displayed on is similar in essence, to a meme showing up on a screen. In this sketch, Kirby is the button and when pressing him, a meme shows up on the TV."
    },
    {
        image: r6,
        title: "Refined Sketch 6",
        description: "This sketch works with the concept of Kirby meme generation. The user holds down on Kirby and then releases their mouse for a Kirby meme to show up on their screen. This can be related to the long hold we do in our project. However, instead of a meme, a food item would be released."
    },
    {
        image: r7,
        title: "Refined Sketch 7",
        description: "Here, Kirby inhales a Legend of Zelda item and transforms into Link. This is very similar to how Kirby inhales copy ability items and transforms into a different version of himself that reflects the item inhaled."
    },
    {
        image: r8,
        title: "Refined Sketch 8",
        description: "Here is a sketch that was heavily involved in our final idea. Kirby runs into items and then a meme is displayed on the billboard in the background. In our project, Kirby is running and inhales items as they approach him. In order to generate a meme, the user must double click on the button and then the meme will show up in the background on a mirror, instead of a billboard. "
    },
    {
        image: r9,
        title: "Refined Sketch 9",
        description: "In this sketch, the outcome occurs with lack of action. Waiting too long without pressing a button leads to Meta Knight or jester hacking the computer. The more relevant detail of this sketch would be the bottom part where the idea of displaying the meme on a mirror is realized. We use a mirror in our project to display the memes. Every time a meme appears, sparkles appear on the mirror, with an accompanying sound, to enhance the transformation of the mirror."
    },
    {
        image: r10,
        title: "Refined Sketch 10",
        description: "Chef Kirby is the star of this sketch. The pot is the button and Kirby reacts to the items generated. Like our implementation, Kirby says ‘Poyo!’ in response to specific items. Items coming out of the pot is an idea also seen in our project. This idea is when we realized that Kirby should be our button because we were really sold on the idea of items coming out of a pot."
    }
];