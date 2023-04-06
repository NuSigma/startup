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

### Feb 22-24, 2023 - Functions, Arrow Functions, Arrays, and Objects and Classes.

- <a href="https://codepen.io/NuSigma/pen/BaOzEwR">Assignment</a>: - A Codepen that: uses all function concepts, uses arrays, uses the arrow function, and uses objects and classes

- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions">Functions</a>: functions can be passed as paramaters, returned as a result, and reference from an object or array like any other variable.
    - Syntax:
        ``` JavaScript
        function functionName(params = defaultValue) {
            // function code
            return returnValueorStatement; //optional
        }
        ```
    - If a parameter is not provided to a function then the value of the parameter is set as <code>undefined</code> when the function executes.
    - Anonomous Functions: An unnamed function assigned to a variable specifically so it can be passed as a parameter to some other function or stored as an object property.
        - Example:
            ```JavaScript
            // Function that takes a function as a parameter
            function doMath(operation, a, b) {
            return operation(a, b);
            }

            // Anonymous function assigned to a variable
            const add = function (a, b) {
            return a + b;
            };

            console.log(doMath(add, 5, 3));
            // OUTPUT: 8

            // Anonymous function assigned to a parameter
            console.log(
            doMath(
                function (a, b) {
                return a - b;
                },
                5,
                3
            )
            );
            // OUTPUT: 2
            ```
    - Inner functions: Functions can be declared inside other functions, allowing modularization without exposing private details
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Arrays</a>: represent a sequence of other objects and primitives.
    - Array Functions:
        - push:	Add an item to the end of the array	
        - pop:	Remove an item from the end of the array	
        - slice:	Return a sub-array	
        - sort:	Run a function sort an array in place	
        - values:	Creates an iterator for use with a for of loop	 
        - find:	Find the first item satisfied by a test function	
        - forEach:	Run a function on each array item
        - reduce:	Run a function to reduce each array item to a single item	
        - map:	Run a function to map an array to a new array	
        - filter:	Run a function to remove items	
        - every:	Run a function to test if all items match	
        - some:	Run a function to test if any items match	
- The Arrow Function: replaces the need for the <code>function</code> keyword in anonomous functions with <code>=></code> 
    - Example: these functions are equivalent.
        ```JavaScriptz
        // standard function syntax
        a.sort(function (v1, v2) {
        return v1 - v2;
        });

        // arrow function syntax
        a.sort((v1, v2) => v1 - v2);
        ```
    - Return values:
        ```JavaScript
        () => 3;
        // RETURNS: 3

        () => {
        3;
        };
        // RETURNS: undefined

        () => {
        return 3;
        };
        // RETURNS: 3
        ```
    - <code>this</code> pointer: 
        - wat. Refer to future discussion on scope.
- Object and <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript">Classes</a>:
    - The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">JavaScript Object</a> object: A JS Object represents a collection of name value pairs (called properties). The property name must be a String or Symbol, but the value can be any type. They are created with the <code>new</code> operator.
         * Note the different uses of the term object. Object can refer to the standard JavaScript objects (e.g. Promise, Map, Object, Function, Date, ...), or it can refer specifically to the JavaScript Object object (i.e. new Object()), or it can refer to any JavaScript object you create (e.g. {a:'a', b:2} ). This overloaded usage can be a bit confusing.
    - Object-literals: You can declare a veriable of object type with object-literal syntax as th example below:
        ```JavaScript
        const obj = {
        a: 3,
        b: 'fish',
        };
        ```
    - Object functions: A JS Object has several static functions associated with it. The most common are: entries, keys, and values. Which output a JS Objects keys and values, keys, and values, respectively.
    - Constructor: Any function which returns an object and can be invoked with the new operator.
        - Example:
            ```JavaScript
            function Person(name) { //defining the object "Person"
            return {
                name: name,  //sets the key 'name' to = the param input 'name'
                log: function () {
                console.log('My name is ' + this.name); //this.name something about scope I guess... 
                },
            };
            }

            const p = new Person('Eich'); //creating an "Person" instance, held within variable "p", parametarized with 'Eich'
            p.log();
            // OUTPUT: My name is Eich
            ```
    - This pointer: In this context refers to a pointer to the object. Refer to future discussion on scope.
    - Classes: Can use to define objects, using a class instead of an object clarifies the intent to create a reusable component.
        - If we created the "Person" object from above as a class:
            ```JavaScript
            class Person {
            constructor(name) { 
                this.name = name;
            }

            log() {
                console.log('My name is ' + this.name);
            }
            }

            const p = new Person('Eich');
            p.log();
            // OUTPUT: My name is Eich
            ```
        - properties and functions can be made private via prefixing with a <code>#</code>
    - Inheritance: Extends classes using the <code>extends</code> keyword. <code>super</code> function used to pass child variables to parent function, and can be used to access parents function explicitly when a child function has overridden it. 
        - example extending previous code:
            ```JavaScript
            class Person {
            constructor(name) {
                this.name = name;
            }

            print() {
                return 'My name is ' + this.name;
            }
            }

            class Employee extends Person {
            constructor(name, position) {
                super(name);
                this.position = position;
            }

            print() {
                return super.print() + '. I am a ' + this.position;
            }
            }

            const e = new Employee('Eich', 'programmer');
            console.log(e.print());
            // OUTPUT: My name is Eich. I am a programmer
            ```

### Feb 27, 2023 - JS; Reg. Expressinos, Rest and Spread, Destructuring, Exceptions
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">Regular Expressions</a>: 
    - can be used to find text in a string so you can do something with it.
    - Can be done in 2 ways:
        1. by calling the construction function of the RegExp object. This is better if the expression pattern will be changing or don't know the pattern(i.e. user input).
            ```JavaScript
            const re = new RegExp("ab+c");
            ```
        2. Using a regular expression literal, which is the pattern enclosed in between slashes. The below is an example that does the same as the previous code. (Use when the regular expession is constant can improve performance)
            ``` JavaScript
            const re = /ab+c/;
            ```
    - <code>string</code> class has several functions that accept regular expressions. 
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters">Rest</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax">Spread</a>:
    - Rest: (Allows JS to provide "variadic functions") When you need to write a function to take an unknown number of parameters, you could make an array, or use the rest function to take care of it automatically. Only the last parameter can be a <code>rest</code> parameter.

    - Spread: does the opposite as rest, takes an iterable and expands it into a functions parameters.

- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">Destructuring</a>: (NOT destructing) The process of pulling individual items out of a bigger structure.

- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch">Exceptions</a>:
    - Exceptions are generated by  the <code>throw</code> keyword. To catch you wrap the block of code that has a throw block with the <code>try</code> keyword, then follow the try block with a <code>catch(*Error Code*)</Code> Block. You can also use a <code>finally</code> block after the <code>catch</code> block(s) that will always be called when try is excited whether or not an exception was thrown.
    - NOTE: these should NOT be used for normal flows of a program!
    - Fallbacks: Fallback handling pattern is when you put the normal feature path in a try block then provide a falback implementation in the catch block. Common implementation of exception handling. Provides "content" returned from your program even if the desired feature is temporarily unavailable.

### Feb 27-Mar 1, 2023 - JavaScript: Scope, Modules, and Document Object Model
- <a href="https://codepen.io/NuSigma/pen/oNPZWJX">Assignment</a>: Create your own code pen that manipulates the DOM.
- <a href="https://developer.mozilla.org/en-US/docs/Glossary/Scope">Scope</a>:
    - JavaScript has four different types of scope:
        1. Gobal - Visible to all code
        2. Module - Visible to all code running in a module
        3. Function - Visible within a function
        4. Block - Visible within a block of code delimited by curly braces
    - <code>var</code> ignores block scope, so only use <code>const</code> and <code>let</code> unless you know exactly what you are doing.
    - The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this">this</a> keyword: It refers to an object, which object depends on the context in which it is called.
        1. When referenced outside a function or object it represents the context for runtime environment. (the globalThis object)
        2. When referenced inside a function it refers to the object that owns the function. (Either an object you defined or globalThis if function is outside an object unless in JS 'strict mode' in which case a globals function this is undefined instead of globalThis)
        3. When this is referenced in an object it refers to the object.
    - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures">Closure</a>: a function and its surrounding state.
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules">Modules</a>:
    - two types Node.js modules(called CommonJS modues) and the later standard module representation JavaScript ES6 modules (called ES modules).
    - you must explicitly <code>export</code> the objects you want to be visible outside the module
    - these exported functions can then be imported into another module using <code> import</code>
    - Modules can only be called from other modules, not into a globally scoped JavaScript file
    - in your HTML differentiate that you are using an ES module by including the type of <code>module</code> in the <code>script</code> element.
- <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction">Document Object Model</a>: 
    - For everything in an HTML document there is a node in the DOM which allows programming languages to interact with the page.
    - Accessing:
        - Via the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element">Element Interface</a>
    - Modifying:
        - Can insert, modify, or delete elements
        - The below is a function which creates then inserts a new <code>div</code> element into the desired parent(in this case '#courses') with desired text content (in this case 'new course')
            ```JavaScript
            function insertChild(parentSelector, text) {
                const newChild = document.createElement('div');
                newChild.textContent = text;

                const parentElement = document.querySelector(parentSelector);
                parentElement.appendChild(newChild);
            }

            insertChild('#courses', 'new course');
            ```
        - To delete call <code>removeChild</code> on the parent element
    - Injecting HTML:
        - Make sure if you are injecting HTML it CANNOT be manipulated by the user! Sanatize any HTML that contains variables or use DOM manipulation instead.
        - done with the <code>innerHTML</code> function
    - <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener">Event Listener</a>: 
        - The ability to attach a function that gets called when an event occurs
        - <a href="https://developer.mozilla.org/en-US/docs/Web/Events">List of all events</a>

### Mar 1-3, 2023 - JavaScript: Promises, and Async/Await
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promises</a> - for executing code asynchronously (meaning the promise constructor may return before the promise executor function runs) <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises">Usage</a>
    - <a href="https://codepen.io/NuSigma/pen/yLxbQGr">Assignment</a>: create your own example of using promises.
    - Promise Object creation:
        - by calling the promise object constructor and passing it an executor function that runs the asynch operation:
            ```JavaScript
            new Promise((resolve, reject) => {
                // code executing in the promise
            });

            //code executing after the promise
            ```
    - possible promise Object states:
        1. pending - currently runnin asynchronously
        2. fulfilled - completed successfully
        3. rejected - failed to complete
    - Resolving and Rejecting: calling solve sets the promise to the fulfulled state and calling reject sets the promise to the rejected state
    - Then, catch, finally: promise has three functions
        - then: called if the promise is fulfilled
        - catch: called if the promise is rejected
        - finally: always called after all the processing is completed
        - Simple example of a coin toss:
            ```JavaScript
            const coinToss = new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() > 0.1) {
                    resolve(Math.random() > 0.5 ? 'heads' : 'tails');
                    } else {
                    reject('fell off table');
                    }
                }, 10000);
            });
            coinToss
                .then((result) => console.log(`Coin toss result: ${result}`))
                .catch((err) => console.log(`Error: ${err}`))
                .finally(() => console.log('Toss completed'));

            // OUTPUT:
            //    Coin toss result: tails
            //    Toss completed
            ```
    - The Observer Pattern: another way of asynch processing
        - Promises immedietly begin to execute when the Promise is created, while Observers form a pipeline that you then pass an execution object into. Observers are therefore reusable
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function">Async</a>/Await: A more consise representation than promises
    - <a href="https://codepen.io/NuSigma/pen/dyqWwoR">Assignment</a>: copy codepen from promises and transform it to use async/await
    - <code>await</code> keyword wraps the execution of a promise an removed the need to chain functions, it will block until the promise state moves to fulfileed or rejected.
    - Coin toss example from promises except with async try/catch:
        ```JavaScript
        try {
            const result = await coinToss();
            console.log(`Toss result ${result}`);
        } catch (err) {
            console.error(`Error: ${err}`);
        } finally {
            console.log(`Toss completed`);
        }
        ```
    - Async: <code>async</code> keyword makes the function return a promise that will resolve with the value the function returns. Turns any function into an asynchronous function, so can make asnch requests.
        - <code>await</code> restriction: cannot call it unless it's at the tplevel of the JavaScipt or is in a function that is defined with the <code>async</code> keyword.
        - Basic function:
            ```JavaScript
            function cow() {
                return 'moo';
            }
            console.log(cow());
            // OUTPUT: moo
            ```
        - Function with async only:
            ```JavaScript
            async function cow() {
                return 'moo';
            }
            console.log(cow());
            // OUTPUT: Promise {<fulfilled>: 'moo'}
            ```
        - Function with async and explicitly created promise:
            ```JavaScript
            async function cow() {
                return new Promise((resolve) => {
                    resolve('moo');
                });
            }           
            console.log(cow());
            // OUTPUT: Promise {<pending>}  
            ```
    - Await: Declares that a function returns a promise. Wraps an async function and blocks its execution until the promis is resolved then returns result.
        - call to cow async explicit promise function from above:
            ```JavaScript
            console.log(cow());
            // OUTPUT: Promise {<pending>}

            console.log(await cow());
            // OUTPUT: moo
            ```
    - Real World Example: consider the case of needing to resolve 2 promises: A network call and converting the result to JSON:
        - promise implementation:
            ```JavaScript
            const httpPromise = fetch('https://simon.cs260.click/api/user/me');
            const jsonPromise = httpPromise.then((r) => r.json());
            jsonPromise.then((j) => console.log(j));
            console.log('done');

            // OUTPUT: done
            // OUTPUT: {email: 'bud@mail.com', authenticated: true}
            ```
        - async/await implementation:
            ```JavaScript
            const httpResponse = await fetch('https://simon.cs260.click/api/user/me');
            const jsonResponse = await httpResponse.json();
            console.log(jsonResponse));
            console.log('done');

            // OUTPUT: {email: 'bud@mail.com', authenticated: true}
            // OUTPUT: done
            ```

### Mar 3-6, 2023 - Debugging, SimonJS, and Midterm Review
- <a href="">Simon JS</a> Completed!

- Debugging: <a href="">Console</a>


### Mar 8-10, 2023 - URL, Ports, HTTP 
- <a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL">URL</a> - "Uniform Resource Locator"
    - Convention:
        - Scheme - protocul required to ask for the resource. i.e. "https", "ftp", etc
        - Domain Name - domain name that owns the resource represented by the url. i.e. "byu.edu"
        - Port - the numbered network port used to connect to the domain server. lower numbers reserved for common internet protocols while higher numbers can be userd for anything. HTTP uses port 80 as default, while HTTPS uses 443.
        - Path - path to the resource on the domain. Does not need to be physically located on the file system, can be a logical path. i.e. "/school/byu/user"
        - Parameters - a list of key value pairs. Usually provide qualifiers on the resource represented by the path. Also called the query string. i.e. "fileter=names&highlight=intro,summary"
        - Anchor - usually represents a sub-location in the resource. i.e in HTML pages it's a request for the browser to scroll to the element with an ID that matches the anchor. Also known as the hash, or fragment ID.
    - Uniform Resource Name(URN) - resource name that does not specify location info
    - Uniform Resource Identifier(URI) - general resource identifier that could refer to either a URL or URN.
- Ports
    - Allow a single device to support multiple protocols and services.
    - Internet governing body (<a href="https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml">IANA</a>) defines standard protocols usage (ports 0 to 1023). Ports 1024 to 49151 are assigned to requesting entities or used for internal device servicses. Ports 49152 to 65535 are dynamic and used for dynamic connections
    - Common Port Numbers:
        - 20 - File Transfer Protocol(FTP) 
        - 22 - Secure Shell (SSH)
        - 25 - Simple Mail Transfer Protocol (SMTP) - send email
        - 53 - Domain Name System (DNS)
        - 80 - Hypertext Transfer Protocol (HTTP)
        - 110 - Post Office Protocol (POP3) - get email
        - 123 - Network Time Protocol (NTP)
        - 161 - Simple Network Management Protocol (SNMP) - for network devices like routers and printers
        - 194 - Internet Relay Chat (IRC)
        - 443 - HTTP Secure (HTTPS)
    - NOTE: we use port 22 to SSH into our webserve, port 80 and 443 for HTTP and HTTPS access, then port 3000 for Simon, and port 4000 for startup.
- <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview">HTTP</a> - how the internet talks
    - web client and webserver exchange HTTP requests and responses. You can see these by using the browser debugger or a console tool like the below:
        ```
        curl -v -s http://info.cern.ch/hypertext/WWW/Helping.html
        ```
    - HTTP request syntax:
        ```yaml
        <verb> <url path, parameters, anchor> <HTTP version>
        [<header key: value>]*
        [

        <body>
        ]
        ```
        - Most common HTTP `verb`s: 
            - GET: get the requested resource. single resource or a resource that is a list of resources
            - POST: create a new resource, contained in the body.
            - PUT: update a resource
            - DELETE: delete a resource
            - OPTIONS: get metadata about a resource

    - HTTP response syntx:
        ```yaml
        <version> <status code> <status string>
        [<header key: value>]*
        [

        <body>
        ]
        ```
        - Status Codes <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status">enumerated</a>:
            - 1xx - informational
            - 2xx - success
            - 3xx - redirect to another location, or prev cached resource is still valid
            - 4xx - client errors. invalid request
            - 5xx - server errors. request cannot be satisfied due to server error
    - <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers">Headers</a> - specify metatdata about a request or response. Common Headers include:
        - Authorization - token that authorized the user making the request
        - Accept - content format the client accepts
        - Content-Type - format of the reqponse content. Standard <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types">MIME</a> types
        - Cookie - key value pairs generated by server stored on client
        - Host - domain name of the server
        - Origin - origin that cause the request
        - Access-Control-Allow-Origin - server response of what origins can make a request
        - Content-Length - # of bytes contained in response
        - Cache-Control - tells client how to cache the response
        - User-Agent - name of client app making the request
    - Body
        - format is defined by the Content-Type header
        - A client may specify which formats it accepts using `accept` header
    - <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies">Cookies</a>
        - "stateless": HTTP requests do not know anything about previous or future requests.
        - One method of traking state across requests is using the `cookie`
        - Generated by server and pasted to client as an HTTP header, client then caches it and returns it as a header back on subsequent requests
        - Allows server to remember things about the user (both good and bad)
    - Versions: <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP">HTTP EVOLUTION</a>
        - 1990 - HTTP0.9 - one line, no versions, only get
        - 1996 - HTTP1 - get/post, header, status codes, content-type
        - 1997 - HTTP1.1 - put/patch/delete/options, persistent connection
        - 2015 - HTTP2 - multiplex, server push, binary representation
        - 2022 - HTTP3 - QUIC for transport protocol, always encrypted


### Mar 10-13, 2023 - SOP and CORS, fetch, service design
- Same Origin Policy(<a href="https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy">SOP</a>) & Cross Origin Resource Sharing(<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">CORS</a>)
    - These are security measures to prevent malicious actors rom stealing users data
    - SOP: Only allows JS to make request to a domain if it is the same domain the user is currently viewing. However makes building web applications more complicated to build
    - CORS: Addresses isues of sharing resources across web applications by allowing the client(browser) to specify the origin of a request then let the server respond with what origins are allowed. It is the browser protecting users from accessing things from the wrong origin and is only meant to alert users something bad is being attempted.
    - Using 3rd Party Services:
        - The service you are trying to request must have the header Access-Control-Allow-Origin specifically allowing your origin or * for everyone.
- Fetch
    - <a href="https://codepen.io/NuSigma/pen/bGxmMQj">AssignmentM</a>: fork the codpen and replace the quotable service with a different one.
    - <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch">Using</a> the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">fetch API</a> - basically takes a URL and returns a promise, the promise's `then` function takes a callback function that is asynch called when the URL conetent is obtained.
- Service Design
    - Model & Sequence Diagrams - Build a model of the apps primary objects and interactions of those objects. You can use a tool like <a href="https://sequencediagram.org/">this</a> one.
    - Try to leverage existing HTTP technologies (i.e. HTTP verbs, MIME content types, etc) as much as posible so you don't need to do everything from scratch.
    - Endpoints:
        - Service Endpoints are often called Applicatiopn Progamming Interfaces (APIs)
        - Points to Consider when designing a service's endpoints:
            - Grammatical - everything is a resource in HTTP
            - Readable - resources should be clearly readable in the URL path
            - Discoverable - Your resources are all able to be found easily
            - Compatible - endpoints should enable adding new functionality without breaking existing clients. Usually by allowing older clients to ignore new stuff they don't understand.
            - Simple - Keep endpoints focused on the primary resources. Endpoints should only do one thing, there should only be oe way to act on a resource.
            - Documented - Use the <a href="https://spec.openapis.org/oas/latest.html">Open API Specification</a> as an example of how to create, use, and maintain documentation of your service endpoints.
    - Exposing Endpoints, three most common models:
        - RPC - Rempte Procedure Calls
            - Expose service enpoints as simple function calls, over HTTP usually just levarages the POST verb.
            - One advantage is that it maps directly to function calls in the server. Can also be a disadvantage as it directly exposes the inner workings of the service.
        - REST - Representational State Transfer
            - tries to take advantage of the foundational principles of HTTP. REST HTTP verbs always act on a resource. 
        - GraphQL
            - Focuses on the manipulation of data instead of a function call(like RPC) or resource(like REST).GraphQL uses a query tghat specifies the desired data and how it should be joined and filtered.
            - Helps to remove a lot of logic for parsing enpoints and mapping request to specific resources. therfore only one endpoint: query enpoint.
            - Downside: client can now consume significant resources without clear oundary on what, how much, or how complex the data aggregation is.

### Mar 13-15, 2023 - Node.js
- <a href="">Assignment</a>: Install Node.js in develment environment. Then create, and run, a simple webservice. Then copy the code to CodePen(though it won't work in the codepen)
- Node.JS - The first sucessful application for deploying JavaScript outside a browser. Managed by <a href="https://openjsf.org/">OpenJS foundation</a>
    - windows installation from <a href="https://github.com/coreybutler/nvm-windows#installation--upgrades">windows-nvm</a>
        * WINDOWS INSTALL ISSUE: <a href="https://stackoverflow.com/questions/66047161/getting-exit-status-1-when-i-run-the-command-nvm-use-12-18-0">Stack Overflow</a> - "NVM for windows is an attempt to port from the linux and currently does not support spaces in the path." 
        * Also NVM for Windows will be Depriciated after "Runtime" is released. <a href="https://github.com/coreybutler/nvm-windows/wiki/Runtime">The Announcement</a> - Jan 2023
    - Node Package Manager (installed automatically when node.js is installed)
        1. create a directory to contain your JS and run `npm init` or `npm init -y` to accept all defaults
        2. put `node-modules` in `.gitignore` 
        3. Install desired package loacally using NPM (search via <a href="https://www.npmjs.com/">NPM website</a>) using `npm install <package name>` in the code directory
        4. Include a `require('<package name here>')` statement in your main code that references the package name.
        5. Run code with `node main.js` (assuming main file is called `main.js`)
        - NOTE: when installing package dependencies, `node-modules` will be created. Do NOT check this directory into your source control system due to it's size and can be rebuild using `package.json` and `package-lock.json`. 
            * PUT `node-modules` INTO `.gitignore` FILE!
    - EXAMPLE: Creating a web service
        - initialization:
            1. `mkdir webservicetest`
            2. `cd webservicetest`
            3. `npm init -y`
            4. `npm install http`
        - main.js code:
           ```javascript
            const http = require('http');
            const server = http.createServer(function (req, res) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<h1>Hello Node.js!</h1>');
            res.end();
            });

            server.listen(8080, () => {
            console.log(`Web service listening on port 8080`);
            });
           ``` 
        - execution:
            ```
            ➜ node main.js
            Web service listening on port 8080
            ```
        - Open browser to `localhost:8080` to see output
    - Deno & Bun
        - Deno: successor to Node.js. More complient with ECMAScript + performance enhancements.
        - Bun: an interesting competitor server JavaSDcript app

### Mar 15-20, 2023 - Express, Debugging Node.JS, Service Daemons - PM2
- Assignment <a href="https://sequencediagram.org/index.html#initialData=C4S2BsFMAIGVIE4DcQGMYCVIEcCukBnYAgKBIENVgB7BaAYVwXDMeYFoA+eZNSALmgBtAAoBVACoBdaAHois2pAC2JAHbVgMBCADmAC2DRqAMziIU6fuQAONgHQ3cwABQByecABUs-kSUAcuTKkG4ANAA6atAuCDhh0HEEAJTQALyciYT2BJBqACYuUQDe0Lg2+eRagnHYjuQIwQQ5NHFBIdAAvsnJANwkbOAAPEPs7DyWAtDFAETllVoz-DNKyjOdJEA">Sequence Diagram</a> - create a web service with Express called testExpress
- <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction">Express</a>
    - Provides support for:
        1. Routing requests for service endpoints
        2. Manipulating HTTP requests with JSON body content
        3. Generating HTTP responses
        4. Using middleware to add functionality
    - Create an Express application by:
        1. `npm install express` (in your code directory)
        2. listen for HTTP request on a desired port:
            ```javascript
            const express = require('express');
            const app = express();

            app.listen(8080);
            ```
    - Defining routes

    - <a href="https://expressjs.com/en/resources/middleware.html">Express Middleware</a>
        - <a href="https://www.patterns.dev/posts/mediator-pattern">Mediator/Middleware</a> design pattern:
            - mediator: loads the middleware components and determines their order of execution (Express in this case)
            - middleware: componentized pieces of functionality
        - Creating your own middleware
        - Builtin middleware
        - Third party middleware
        - Error handling middleware
- Debugging Node.js (<a href="https://code.visualstudio.com/docs/nodejs/nodejs-debugging">in VS Code</a>)
    - Start Debugging by pressing F5, use node.js debugger
    - <a href="https://www.npmjs.com/package/nodemon">Nodemon</a> - watches for files in the project directory to change during debugging and automatically restarts node
        - to install globally: 
            ```
            npm install -g nodemon
            ```
        - Then create a VS Code Launch Config with CTRL-SHIFT-P -> Debug:add configuration -> type Node.js -> select Node.js: Nodemon setup -> change program from app.js to main.js(or whatever main JS file for your program is) -> save -> now when open debugging with F5 it will run Nodemon instead of Node.js
- PM2(Process Manager 2)
    - In order to keep programs running after a shutdown you need to register it as a `daemon`. PM2 manages these running in the background
    - (already installed in the webserver) to see it running ssh into webserver and run: `pm2 ls`
    - Register a new web service:
        1. add the rule to the Caddyfile and tell it how to direct requests
            - Example: create a new section with the following syntax
            ```
            (example: tacos.cs260.click)
            <SubDomain>.<DomainName>.<Extension> {
                //settings Examples:
                reverse_proxy _ localhost:5000 <-- Pass requests to webservice listeing to localhost on port 5000
                header Cache-Control none      <-- disable caching
                header -server                 <-- hides that telling others caddy is the server
                header Access-Control-Allow-Origin * <-- allows endpoint requests (disable CORS)
            }
            ```
        2. create a directory and add the files for the service
            - Example: 
                ```
                cp -r ~/services/startup ~/services/tacos <-- copy code from startup to 'tacos'
                ```
                - This code causes the web service to listen on a port that is provided by the command line
                    ```javascript
                    const port = process.argv.length > 2 ? process.argv[2] : 3000;
                    app.listen(port, () => {
                    console.log(`Listening on port ${port}`);
                    });
                    ```
                - the `public` directory has HTML/CSS/JavaScript files that you web service will respond with when reuested. This is enabled in index.js with:
                    ```JavaScript
                    app.use(express.static('public'));
                    ```
                - Then you can start it up manually with: `node index.js <desired port>`
                - Then can be accessed through browser (in this case https://tacos.cs260.click) or using `curl https://tacos.cs260.click`
        3. configure PM2 to host it
            - Example:
                ```
                cd ~<directory from step2>
                pm2 start <indexfilefromstep2>.js -n <servicename> -- <desired port from step 1>
                pm2 save
                ```

### Mar 20-22, 2023 - UI testing, Endpoint Testing, Simon Service
- UI Testing
    - The problem: testing your application on all the different browsers on all the different devices of all different sizes and... on and on.
    - Playwright (<a href="https://playwright.dev/docs/getting-started-VSCode">in VS Code</a>)
    - <a href="https://www.browserstack.com/">Browser Stack</a>
- Endpoint Testing
    - <a href="https://jestjs.io/">Jest</a>
- Simon Service
    * Setup to deploy on port 3000, STARTUP  should be on *PORT 4000*
    - Deploy with deployService.sh (for mine):
        ```
        ./deployService.sh -k ~/OneDrive/Dylan\ School/\#CS260\ -\ Web\ Programming/CS260\(Key\ Pair\ Login\).pem -h numealplanz.click -s simon
        ```

### Mar 22-24, 2023 - Storage Services, Data Services, Simon DB
- Storage Services
    - Usually a BAD IDEA to stor files on your server because:
        1. Limited drive space. 
        2. You should keep the server easilly replacable. It is not intended for permenant storage.
        3. Need backup copies of app and user files.
    - <a href="https://aws.amazon.com/s3/">AWS S3</a>

- Data Services
    - Assignment: Set up MongoDB Atlas database service. Then test it's properly set up.
    - Popular Data Services:
        - MySQL - Relational queries
        - Redis - Memory cached objects
        - ElasticSearch - Ranked free text
        - MongoDB - JSON objects
        - DynamoDB - Key value pairs
        - Neo4J - Graph based data
        - InfluxDB - Time series data
    - We're using MongoDB: <a href="https://www.mongodb.com/developer/languages/javascript/node-crud-tutorial/">Tutorial</a>, and <a href="https://www.mongodb.com/docs/">Documentation</a>
        1. Install MongoDB in your application with npm:
            ```
            npm install mongodb
            ```
        2. Use the `MongoClient` object to make a client connection to the database server
        3. With the client connection you can get a database object from the collection object.

    - 

- Simon DB

### Mar 24-27, 2023 - Authorization Services, Acc. Creation & Login, Simon Login
- Authorization Services

- Account Creation and Login

- Simon Login


### Mar 27-29, 2023 - WebSocket, Debug WebSocket, WebSocket Chat, Simon WebSocket
- WebSocket

- Debug

- WebSocket chat

- Simon WebSocket


### Mar 29-31, 2023 - Web Frameworks, React, React Components
- Web Frameworks - <a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction">Intro</a>
    - Make writing web applications easier by providing tools for common application tasks.

- React - <a href="https://react.dev/learn#components">Quick Start</a>
    - abstracts HTML into a JS variate called <a href="https://legacy.reactjs.org/docs/introducing-jsx.html">JSX</a> which is converted into HTML and JS by the preprocessor <a href="https://babeljs.io/">Babel</a>.

- React <a href="https://react.dev/learn/your-first-component">Components</a>
    - <a href="https://codepen.io/NuSigma/pen/poOMmXe">Assignment</a>: Modify the codpen by:
        1. Adding a new property to the Demo component that provides the background color
        2. Adding another state variable that changes the color on a mouse over event
    - Purpose of Components: to modularize code.
    -



### Mar 31-Apr 3, 2023 - React Tic-tac-toe tutorial, Reactivity
- React Tic-Tac-toe
    - Follow the <a href="https://react.dev/learn/tutorial-tic-tac-toe">tutorial</a>

- Reactivity: making the UI react to tchanges in user input or data. Can be applied to the following pices of a React component:
    - `props`

    - `state`

    - `render`
- <a href="https://codepen.io/NuSigma/pen/JjagQXe">Assignment</a>: Modify the codepen. Change the input from using the color and radio button to an edit box that displays text as you type. 


### Apr 3-5, 2023 - Hooks, Toolchains, React CLI, Start up deliverable - Service
- 


### Apr 5-7, 2023 - React Router, Simon React
- 


### Apr 7-10, 2023 - Security, OWASP top 10, Practice
- 


### Apr 10-12, 2023 - Gruyere?
- 


### Apr 12-14, 2023 - TypeScript, Performance monitoring, (opt: Demo Day submission)
- 


### Apr 14-17, 2023 - Search Engine Optimization, Device APIs