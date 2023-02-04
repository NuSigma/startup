# "startup" - BYU CS260 Web Programming Project

## Notes:
### Jan 25, 2023
Learned basics of Git and GitLense plugin for VS Code. Extremely overwhelming amount of information, very confused. So many small buttons, so much text, so many commands.
Ended the lesson with 6 more GitHub pages to read about repositories, forks, and Markdown syntax. Will I read them all? I dunno. Will the tabs stay open on my computer for the majority of the semester "just in case"? Almost certainly.


### Jan 27, 2023 - "Elevator Pitch"
I've decided to create a pantry tracker/recepie storage/meal planner application. It's basic function will be to provide recepie storage and a food calander to plan/track meals and the ingredients you have on hand. It will also automatically modify how much of each ingredient you have left after a meal is recorded as having been prepared and generate a grocery list of the items you have run out of or are low on. I want it to be streamlined and avoid the "cluttered" feeling a lot of planning apps have. 

![20230127_213824](https://user-images.githubusercontent.com/44269945/215242503-dd8dd713-222c-4d8d-84f4-f11b597c67b1.jpg)


### Jan 30, 2023 - AWS - EC2
My web server's public (Elatstic) IP: 
http://18.219.210.238/

Command for ssh into webserver:
ssh -i 'CS260(Key Pair Login).pem' ubuntu@18.219.210.238


### Feb 1, 2023 - AWS - Route 53
My new Domain Name: 
http://numealplanz.click/

### Feb 3, 2023 - HTTP, TLS, and Web Certificates
Caddy handels manage gateway to web services.
ssh into webserver then:
    1. cd ~
    2. sudo vi Caddyfile
    3. :wq (to save and exit VI)
    4. sudo service caddy restart (to restart caddy for changes to take effect)




