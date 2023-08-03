# Memory-Storage

## Name
Memory Storage<br/>

## Description
Website to store your precious memory in more visible way.<br/>

I used to store many images with my family and friends on the computer and keep one backup version on Google Drive.<br/>
This way has a lot of disadvantages:<br/>
+ It takes a lot of time to find an image.<br/>
+ Restoring all the files also takes a long time.<br/>
+ Viewing images by clicking on each file is somehow boring.<br/>

Besides, not only images, I also want to write down a detail about something that I created (why I make it, for who... etc), while I still remember, for example: small programs, handicraft toys...<br/>

So, I created this site, for easier storing, giving details and viewing your memories.<br/>

## Visual
This site is available online. You may want to take a look: memory-storage.netlify.app<br/>
P/s: I'm using free hosting service (Render), which will automatically spun down after 15 minutes of inactivity. Render spins it up again when a new requset come. Which mean, the first time you send request (Register, login... etc), it will take sometime.<br/>

## Installation
If you want this site to run locally<br/>
1. Install the newest version of Nodejs on your machine.<br/>
2. Create MongoDB account. And get the connection string.<br/>
3. Create a file .env inside server directory. Paste your connection string like this:<br/>
    URI = "Your connection string here".<br/>
4. Open 2 terminal windows, each in client and server directory.<br/>
5. Run "npm install" command in both terminal.<br/>
6. Run "npm run dev" command in both terminal.<br/>
7. Open your browser and go to: localhost:5173.<br/>
8. Enjoy

## Feattures
Currently support features as below, there are still many features that I'm working on. So, this list will be updated in the future.<br/>
    Register: [o]<br/>
    Login/logout: [o]<br/>
    Profile: [o]<br/>
    Upload Image: [o]<br/>
    View Image: [o]<br/>
    Upload product: [o]<br/>
    View product: [o]<br/>

Auth-relates feature:
    Protect routes: [0]<br/>
    Protect Password: [*]<br/>

--------------------------
[x]: Do not have.<br/>
[*]: Incompleted.<br/>
[o]: Done.<br/>
--------------------------

## Project status

Version: 1.0.0<br/>
Status : Useable<br/>
Working Time: 70 h<br/>

## Contributing
+ YaseiTanuki (me)<br/>



## Something you may want to know
----------
Q: What did you use to make this site?<br/>
A: Client-side code (front-end) is made with React, folder structure is provide by Vite.<br/>
   And using ExpressJS web framework in server-side code (back-end).<br/>

----------
Q: Where did you deploy the site? Is it free?<br/>
A: Back-end is hosted using Render. Front-end using Netlify. Both are free to use.<br/>