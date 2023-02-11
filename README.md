# "startup" - BYU CS260 Web Programming Project

## Notes:
### Jan 25, 2023
<p>
Learned basics of Git and GitLense plugin for VS Code. Extremely overwhelming amount of information, very confused. So many small buttons, so much text, so many commands.
Ended the lesson with 6 more GitHub pages to read about repositories, forks, and Markdown syntax. Will I read them all? I dunno. Will the tabs stay open on my computer for the majority of the semester "just in case"? Almost certainly.
</p>

### Jan 27, 2023 - "Elevator Pitch"
<p>
I've decided to create a pantry tracker/recepie storage/meal planner application. It's basic function will be to provide recepie storage and a food calander to plan/track meals and the ingredients you have on hand. It will also automatically modify how much of each ingredient you have left after a meal is recorded as having been prepared and generate a grocery list of the items you have run out of or are low on. I want it to be streamlined and avoid the "cluttered" feeling a lot of planning apps have. 
</p>

![20230127_213824](https://user-images.githubusercontent.com/44269945/215242503-dd8dd713-222c-4d8d-84f4-f11b597c67b1.jpg)


### Jan 30, 2023 - AWS - EC2
My web server's public (Elatstic) IP: <br>
http://18.219.210.238/

Command for ssh into webserver: <br>
``` ssh -i 'CS260(Key Pair Login).pem' ubuntu@18.219.210.238 ```


### Feb 1, 2023 - AWS - Route 53
My new Domain Name: 
http://numealplanz.click/

### Feb 3, 2023 - HTTP, TLS, and Web Certificates
Caddy handels manage gateway to web services. <br>
ssh into webserver then:<br>
1. ``` cd ~ ``` <br>
2. ``` sudo vi Caddyfile ``` <br>
3. ``` :wq ``` (to save and exit VI) <br>
4. ``` sudo service caddy restart ``` (to restart caddy for changes to take effect)


### Feb 6-7, 2023 - HTML: intro,input,media, and structure
HTML Basics Resource: <br>
https://developer.mozilla.org/en-US/docs/Web/HTML#beginners_tutorials <br>
HTML Basic Structure: <br>
https://github.com/webprogramming260/.github/raw/main/profile/html/structure/htmlStructure.jpg <br>
HTML Input Elements Resource & Example: <br>
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
https://codepen.io/NuSigma/pen/yLqWBrg <br>
HTML Media Basics Example Codepen: <br>
https://codepen.io/NuSigma/pen/OJwYJRy


### Feb 8-9, 2023 - HTML Website & Simon, and Cascading Style Sheets (CSS)
1. Running deployWebsite.sh to push main page changes to caddy:<br>
``` ./deployWebsite.sh  -k ~/OneDrive/Dylan\ School/\#CS260\ -\ Web\ Programming/CS260\(Key\ Pair\ Login\).pem -h numealplanz.click ```<br>
2. Running deployFiles.sh to push SIMON changes to caddy:<br>
``` ./deployFiles.sh -k ~/OneDrive/Dylan\ School/\#CS260\ -\ Web\ Programming/CS260\(Key\ Pair\ Login\).pem -h numealplanz.click -s simon ```

### Feb 10, 2023 - CSS: Selctors,Declaration,Fonts,Animation
1. CSS Selectors - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors<br>
Used to select parts of HTML code to then apply a rule (i.e. styling) to.<br>
Basic Types of Selectors: Element Type, Combinators, Class, ID, Attribute, and Pseudo  <br>
Codepen Example: https://codepen.io/NuSigma/pen/Yzjmpoe <br>

2. CSS (Rule) Declarations - https://developer.mozilla.org/en-US/docs/Web/CSS/Reference<br>
Used to assign a property and value to the selected parts of the HTML.<br>
Values & Units: https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units <br>
Coloring: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Applying_color <br>
Codepen Example: https://codepen.io/NuSigma/pen/BaPXpmX <br>

3. CSS Fonts - https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts<br>
The "font-family" property defines what fonts to use. The first font available in the list will be used.<br>
Four Major Font Families: Serif, san-serif, fixed, and symbol.<br>
Importing Custom Fonts: <br>
```
@font-face {
  font-family: '[Font Name]';
  src: url('[Source URL for font].woff2');
}
```
Or you can import them in from a font provider like https://fonts.google.com/ <br>
By using:<br>
```
@import url('[Embed Link for Font]');
```
Codepen Example: https://codepen.io/NuSigma/pen/vYaogRv<br>

4. CSS Animation - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations<br>
Done using "animation" properties and defining "keyframes"<br>
Simple Text Animation: https://codepen.io/NuSigma/pen/zYLgNmp<br>
Animating a Watch: https://codepen.io/NuSigma/pen/LYBwxgJ<br>

### Feb 13, 2023 - CSS Practice
Assignment: https://codepen.io/NuSigma/pen/eYjqgbG <br>

