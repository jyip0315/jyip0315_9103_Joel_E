# The Scream
## by Joyce Yip ( jyip0315) 


### *Instructions*
1.	**Move mouse curser slowly over the canvas from left to right** to paint repeated circles behind the character. 
As the mouse moves hues of blue change (left) into hues of yellow (right), creating a multi coloured effect. 
2.	**Click the buttons** to view different expressions.
3.	**Press a, s, d, and f  keys on the keyboard** to activate the buttons. Hold f key to see the mouth jitter.
This offers two options of input.

------------

### *My Approach to animating the group code*

My individual approach to the group artwork focuses on user interaction through both mouse and keyboard input to make the experience more engaging. To reflect the chaotic background of The Scream, I drew visual inspiration from the artwork plant growing_test by cloud.cb found in the OpenProcessing platform, which uses a brush-like effect I admired. However, I adapted only the visual style, leaving out its lack of interactivity. Unlike my group members, I removed special effects from their elements to keep my version simpler and more focused.

![An image of plant growing_test by cloud.cb](<assets/plant growing_test.png>)

plant growing_test by cloud.cb


I also changed the button labels "Levels 1–4" to keyboard keys “A”, “S”, “D”, and “F”. I originally planned to add a singing voice to each key to mimic a piano input, but decided against it to avoid overlapping with a teammate’s audio-based work. Instead, I animated the largest mouth to quiver, referencing the TikTok Pitch Perfect challenge to suggest a high-pitched scream. These changes in interaction and design distinguish my submission from the rest of the group.

![An image of pitch perfect challenge](<assets/Pitch Perfect Challenge.png>)

YouTube short video link: https://www.youtube.com/shorts/84tQiELfF9Y  

------------
### *Techniques*

For the spinning circles that repeat like brushstrokes, I referenced a rotate() and map() function example from Week 10 lecture and merged it with a colour changing technique I found in p5.js map() reference page. The map() function translates the mouse position value into different colours, and made 5 shapes in different sizes. The rotate() function creates the spinning effect around the mouse.

For the character, I traced the The Scream reference image in Adobe Illustrator and exported it as an SVG vector. It is then opened the SVG file in VS Code to access the path data, which I converted into p5.js code using ChatGPT and the svg2p5.com converter. 

--------------
### *References*

1. YuAViolin. (2024, October 15). Perfect pitch challenge on my Miku Otamatone!! [Video]. YouTube. https://www.youtube.com/shorts/84tQiELfF9Y

2. p5.js. (n.d.). map(). p5.js Reference. https://p5js.org/reference/#/p5/map

3. cloud.cb. (n.d.). plant growing_test [OpenProcessing Sketch]. OpenProcessing. https://openprocessing.org/sketch/2643090 

4. Week 10 Lecture Example. https://canvas.sydney.edu.au/courses/64347/pages/week-10-lecture?module_item_id=2585760 
