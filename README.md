# "startup" - BYU CS260 Web Programming Project

<a href='https://github.com/webprogramming260/.github/blob/main/profile/instructionTopics.md#readme'>The Class GitHub</a>
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
``` 
ssh -i 'CS260(Key Pair Login).pem' ubuntu@18.219.210.238
```


### Feb 1, 2023 - AWS - Route 53
My new Domain Name: 
http://numealplanz.click/

### Feb 3, 2023 - HTTP, TLS, and Web Certificates
Caddy handels manage gateway to web services. <br>
ssh into webserver then:<br>
1. ``` <code> cd ~ ``` <br>
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
```
./deployWebsite.sh  -k ~/OneDrive/Dylan\ School/\#CS260\ -\ Web\ Programming/CS260\(Key\ Pair\ Login\).pem -h numealplanz.click 
```

2. Running deployFiles.sh to push SIMON changes to caddy:<br>
```
./deployFiles.sh -k ~/OneDrive/Dylan\ School/\#CS260\ -\ Web\ Programming/CS260\(Key\ Pair\ Login\).pem -h numealplanz.click -s simon
``` 


### Feb 10, 2023 - CSS: Selctors,Declaration,Fonts,Animation
- CSS Selectors - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors<br>
Used to select parts of HTML code to then apply a rule (i.e. styling) to.<br>
Basic Types of Selectors: Element Type, Combinators, Class, ID, Attribute, and Pseudo  <br>
Codepen Example: https://codepen.io/NuSigma/pen/Yzjmpoe <br>

- CSS (Rule) Declarations - https://developer.mozilla.org/en-US/docs/Web/CSS/Reference<br>
Used to assign a property and value to the selected parts of the HTML.<br>
Values & Units: https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units <br>
Coloring: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Applying_color <br>
Codepen Example: https://codepen.io/NuSigma/pen/BaPXpmX <br>

- CSS Fonts - https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts<br>
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


- CSS Animation - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations<br>
Done using "animation" properties and defining "keyframes"<br>
Simple Text Animation: https://codepen.io/NuSigma/pen/zYLgNmp<br>
Animating a Watch: https://codepen.io/NuSigma/pen/LYBwxgJ<br>

### Feb 13, 2023 - CSS Practice
Assignment: https://codepen.io/NuSigma/pen/eYjqgbG <br>


### Feb 15, 2023 - Responsive Design, CSS Grid, and CSS Flexbox
-  Responsive Design - 
    The ability to reconfigure a web applications interface to accommodate varying screen sizes and orientations.
    See more <a href='https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design/'>here</a> <br>
    - <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/display'>Display:</a> 
    Changes how HTML elements are displayed. Options: none, block, inline, flex, and grid. Experiment with each <a href='https://codepen.io/NuSigma/pen/XWPJePo'>here.</a> 
    - To stop mobile browsers scaling from interfering with your scaling, include the below in the head element of your HTML page:
        ```
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        ```
    - <code>float</code> - moves an element to leaft or right of its container and allows inline elements to wrap around it. <a href='https://codepen.io/NuSigma/pen/XWPJePo'>Experiment here</a> 
    - <code>@media</code> selector- dynamically detects the size and orientation of the viewport and applies CSS rules to accommodate any change.
    - <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout">Grid</a> - useful when you want to display a group of child elements in a responsive grid. <br>
    <a href="https://codepen.io/NuSigma/pen/vYzEWLg">CodePen</a> <br>
    <a href="https://gridbyexample.com/">Grid by Example</a> <br>
    - <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">Flex</a> - useful for partitioning application into areas that responsivly move as the window resizes or orientation changes. See the <a href="https://codepen.io/NuSigma/pen/qBMEVqb">CodePen</a>.
- Assignment: <a href='https://codepen.io/NuSigma/pen/ExeabZa'>CodePen</a>

### Feb 17, 2023 - Debugging CSS, Frameworks
- <a href='https://codepen.io/NuSigma/pen/ExeabZa'>Debugging</a>: Right click and select 'inspect'. (Or use F12)
- Frameworks - Provide functions and components that commonly appear in web applications.
    - Tailwind: uses smaller definitions applied specifically to individual HTML elements.
    - <a href='https://getbootstrap.com/docs/5.2/getting-started/introduction/'>Bootstrap</a> - Most Popular. <a href='https://codepen.io/NuSigma/pen/zYJGQOd'>CodePen Example</a>
    - Assignment <a href='https://codepen.io/NuSigma/pen/WNgvBNv'>CodePen</a>

### Feb 18-21, 2023 - CSS Simon, UX Design
- CSS Simon
    - updated <a href="https://simon.numealplanz.click/">simon on my website</a>
- UX Design
    - Design a story: user entering a stage(your website).
    - Simplicity: visually appealing and engaging, focused on a single purpose.
    - Consistent: Tention between familiarity of being similar to other websites the user has used, and being unique and interesting. Use the standard layout.
    - Navigation: Carefully design flow of your application so user never gets lost. 
        - Step 1 in buildig your application should be a concise application map.
        - Step 2 navigation controls that follow the application map that are consistent with the devices that may be used.
        - breadcrumb control: listing the path to where they are and how they got there
        - anticipate where a user will commonly want to go based on where they are.
    - Colors: usually need a primary, secondary, and focus color.
        - free color palett picking tools: <a href="https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF">Paletton</a> and <a href="https://color.adobe.com/create/color-wheel">Adobe</a>
        - Stick with your color scheme to avoid a chaotic rainbow of a website, even consider it when selecting font colors and images.
    - Typography:
        - Types of Fonts:
            - San Serif = only major strokes
            - Serif = Minor strokes off the major strokes
            - Monospace = all letters the same size
            - Handwritting = cursive strokes
        - Usually want 3 or less fonts on your website. And they should be consistently used each for their designated purpose (i.e. buttons, links, headings, body, coding examples, etc) Commonly: San Serif fonts for buttons, navigation links, and body text, Serif fonts for paragraph headings, and Monospaced fonts for coding examples or text that need alignment.
        - <a href="https://fonts.google.com/about">Google's Open Collection of Free Fonts</a>
    - Iconography: Standardized icons reduce the learning curve for using your website. Icons provide a visually appealing and space saving alternative to text. There are lots of standard icon packages to choose from.
    - Text:
        - Common Sizing Standards: (Not hard rules, consistency is most important)
            - Page Title: 96 px
            - Titles: 20-48 px
            - Text: 16 px
            - Secondary text: 14 px
            - Input: 16 px
        - Line length: Usually 60 to 80 characters is ideal. Set with <code>max-width</code> and usually use <code>em</code> as units. (Note: <code>em</code> is approx. the width of 'm' in the font, which is ~double the width of other characters so 60-60 characters would be ~30-40 em.)
    - Internationalization: Should be planned from the beginning. Need to consider: direction of reading, translation of content, ability to select desired language, formatting and symbols, and Icons.
    - Space: space around your application can help lessen the effor the user needs to exert to interperate the information.
    - Interaction: powerful way to engage user
    - Images: can convey deeper understanding than words, and make it more visually appealing. Avoid using as space fillers which distract.
    - Animation: Can help confirm choices, demonstrate progress, and focus attention, but too much can cause motion sickness.
    - Decision Fatigue: Hick's Law states that the time necessary to make a decision increases logarithmically with the number of choices presented. Separate when choices are made to reduce decision fatigue.
    - Device aware: The more seamless the application is integrated with the device the more intuitive and useful the application will be.
    - Device Size and Orientation: properly reorient and alter the functionality of your application based on users display, especially on mobile devices.
    - <a href="https://developer.mozilla.org/en-US/docs/Web/Performance">Performance:</a>  According to a <a href="https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/">study</a> past 5 seconds of loading 90% of users will leave before loading completion. Loading under 1 second is ideal, but can mitigate effect of longer load timse by giving impression of progress, partially loading some content, or displaying loading animation. Use Chrome debugging tools performance and network tabs. Or Lighthouse tool for app analysis.
    - Short Circuit: When outside factors impact your website, consider how to create an good experience even when unable to provice full functionality. "fallback functionality" if something goes wrong.
    - <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility">Accessibility:</a> 
        - Visual: High contrast themes, color selection, screen readers
        - Audio: Closed captions, textual aternatives, visual animation
        - Physical: Keyboar navitgation, element ordering
    - Legal: "Every industry and local has different legal constraints. You should be aware of the major legislation that impacts your application."
    - Walls: Things that hinder a user's experience with an application
        - Complexity: More features means higher learning curve
        - Payment: User should see value in what they're paying for before seeing pay wall. 
        - App Failure
        - Security: Authentication of user. Should be proportional to value of resource you are securing. Consider frequency and complexity.
        - Legal: Protect the vendor. i.e. terms and conditions
- Assignment: Find a web application that is particularly interesting to you, submit the URL of the application, along with a comment about what you found interesting. <a href="https://cplusplus.com/">An interesting webpage?</a>

### Feb 21-22, 2023 - JavaScript: Intro, Consol, Adding to HTML, and "Types, Operators, Conditonals, and Loops"
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a> Intro: Officially known as <a href="https://tc39.es/ecma262/">ECMAScript.</a>
- The JS <a href="https://developer.mozilla.org/en-US/docs/Web/API/console">Console</a>:
    - Output a log message: 
        ```
        console.log('%c JavaScript Demo', 'font-size:1.5em; color:green;');
        // OUTPUT: JavaScript Demo //in large green text
        ```
    - Timer: Outputs duration of a piece of code.
        ```
        console.time('demo time');
        // ... some code that takes a long time.
        console.timeEnd('demo time');
        // OUTPUT: demo time: 9762.74 ms
        ```
    - Count: Counts how many times a code block is called.
        ```
        console.count('a');
        // OUTPUT: a: 1
        console.count('a');
        // OUTPUT: a: 2
        console.count('b');
        // OUTPUT: b: 1
        ```
- Adding JS to HTML: 
    1. By directly including it within the content of a <code>&lt;script&gt;</code> element
    2. By using the src attribute to reference an external javascript file. 
        <br>i.e.
        ```
        <head>
            <script src="javascript.js"></script>
        </head>
        ```
        Then call the functions from the JS file in the HTML.
- JS Type and Construct:
    - Variables:
        ```
        let x = 1; //A manipulatable variable (do not use "var")

        const y = 2; //A constant variable
        ```
    - Types:
        - Primitive:
            - Null:
            - Undefined:
            - Boolean:
            - Number:
            - BigInt:
            - String:
            - Symbol:
        - Object Types:
            - Object: collection of properties of name:value pairs
            - Function: Object that can be called
            - Date: 
            - Array: Ordered sequence of any type
            - Map: collection of key value pairs, supports efficient lookups
            - JSON: lightweight data-interchange format, used for sharing info across programs
        - Common Operators:
            - +: Add(Numbers) or Concatenate(Strings)
            - -: Subtract
            - *: Multiply
            - /: Divide
            - ===: Strict Equality (Numbers or Strings), strict means it does not type convert.
            - &&: And (boolean)
            - ||: Or (boolean)
            - !: Not (boolean)
        - Type Conversions: JS is weakly typed: All variables have a type but it can change at any time. This can cause funny errors if not careful.
    - Conditionals:
        - if, else, and else if:
            ```JavaScript
            if (a === 1) {
            //...
            } else if (b === 2) {
            //...
            } else {
            //...
            }
            ```
            - Alternatively, use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator">ternary</a> operator:
                ```JavaScript
                condition ? exprIfTrue : exprIfFalse
                ```
            - Can also use the boolean operators
    - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration">Loops</a>:
        - for: Standard
        - while: Standard
        - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch">switch</a>:
        - do while: while loop, except does once before checking conditionals
        - for in: iterates over an JS Object's properties' NAMES (or an Array's indexes)
        - for of: iterates over an iterable's (Array, Map, Set, etc) property VALUES
        - break: aborts the loop and exits
        - continue: restarts the loop
    - <a href="https://codepen.io/NuSigma/pen/gOdrJxd">Assignment</a>: Create a codepen that uses conditional and loop statements.

        
