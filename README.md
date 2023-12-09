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
This site is available online. You may want to take a look: [Memory Storage](https://memory-storage.netlify.app) <br/>

> [!IMPORTANT]
> Due to lack of security, you should neither use your commonly used password nor upload your private images to it.

> [!NOTE]
> I'm using free hosting service (Render), which will automatically spun down after 15 minutes of inactivity. Render spins it up again when a new requset come. Which mean, the first time you send request (Register, login... etc), it will takes sometime.<br/>

## Installation
If you want this site to run locally<br/>
1. Install the newest version of Nodejs on your machine.<br/>
2. Create MongoDB account. And get the connection string.<br/>
3. Create a file .env inside server directory. Paste your connection string like this:<br/>
```
    URI = "Your connection string here".
    PORT = 1707
    TOKEN_SECRET = "your secret string"
    SESSION_SECRET = "your secret string too"
```
5. Open 2 terminal windows, each in client and server directory.<br/>
6. Run `npm install` command in both terminal.<br/>
7. Run `npm run dev` command in both terminal.<br/>
8. Open your browser and go to: `localhost:5173`.<br/>
9. Enjoy

## Features
Currently support features as below, there are still many features that I'm working on. So, this list will be updated in the future.<br/>
- [x] Register<br/>
- [x] Login/logout<br/>
- [x] Profile<br/>
- [x] Upload Imagebr/>
- [x] View Image<br/>
- [x] Upload product<br/>
- [x] View product<br/>

Auth-relates feature:
- [x] Protect routes<br/>
- [ ] Protect Password<br/>
- [ ] Session management<br/>

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
