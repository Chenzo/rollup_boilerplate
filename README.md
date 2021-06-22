Murray Bot
====================  
running on heroku  
~~http://localhost:3002/~~  
http://localhost:9001/ 


http://localhost:9001/remote/thbar   
http://localhost:9001/   



Test Locally:  
`node server.js` or `npm start`

Using Rollup now:  
`npm run build` to compile JS



To build to HEROKU:  
`git push heroku master`  


To Debug HEROKU:  
`heroku logs --tail`  




Stop Heroku Server:
`heroku ps` - find name of server   

`heroku ps:stop web.1`   
`heroku ps:start web.1`   

or try this:
`heroku ps:scale web=0`  

then 
`heroku ps:scale web=1`



Restart:
`heroku restart`



-------------

Discord Bot:   
https://discord.com/oauth2/authorize?client_id=535890250933731330&scope=bot


JUNKBOT: 
https://discord.com/oauth2/authorize?client_id=176734918028689408&scope=bot
------------

Cron Job to ping the server alive:  
https://cron-job.org/  

pinging: http://localhost:3002/success.txt   
https://fierce-springs-20115.herokuapp.com/success.txt  

I'm not sure this is required now that it's running a discord server - that might keep it alive?  




Twitch Web Hooks:
http://localhost:3002/com?getuserdata=chenzorama - get user data
http://localhost:3002/com?tester=wh - get current webhooks




How to run the webhooks locally...


launch ngrok   
`ngrok http 3002`  
copy the new URL and put in in the `.env` file 

then launch the server.




Sort : `{_id: -1}` 




https://chenzorama.com/sot/pirate_silo.png




invite bot to server (junkbot):
https://discord.com/oauth2/authorize?client_id=176734918028689408&scope=bot 




https://discord.com/api/oauth2/authorize?client_id=176734918028689408&redirect_uri=http%3A%2F%2Flocalhost%3A9001%2Fauthenticated&response_type=code&scope=identify


https://discord.com/api/oauth2/authorize?client_id=535890250933731330&redirect_uri=https%3A%2F%2Ffierce-springs-20115.herokuapp.com%2Fauthenticated&response_type=code&scope=identify





INFO POST:




The ship logger is a web app that lets a user with a press of a button record their events to a log as they happen while sailing in the Sea of Thieves.


---------------------

To access the logger, you only need to go to the #remote-commands channel and type `!promote` - this will set you as an active user of the app and give you a URL to your ship admin panel. Once you authorize @Murray, our bot, you'll be taken to your ships admin page:

http://sotshiplog.com/myship

Select a unique name, a base color (for alerts,) and a logo. You can also add crew members - any other member of this discord that has run the `!promote` command to also have access to the remote. Once you've submitted your ship, you can go to your logger:

http://sotshiplog.com/logger

From there while you are sailing, press a button, and the event will be logged in your ships perosonal log:

http://sotshiplog.com/log/<SHIP ID>


---------------------

FAQs without questions:

- All captains have their own ship.
- There can only be one captain per ship, but anyone that's in the crew can use the logger (but only the captain can manage/edit the ship)
- All ships and their logs can be found here - http://sotshiplog.com/ships
- Your logs and alerts are private until you are vetted - it requires a special role in the discord
- There may be a delay from when the app says an item was recorded and when Discord displays the alert. 

---------------------

Invite your crew to have access to the logger: 
http://discord.gg/DuR7U54



