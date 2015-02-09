Hi, Louis,

So first you said in an email to me: " However, please bare in mind we are mainly looking for JS, HTML and CSS on this challenge"


That seemed fair wnough so I started thinking about other things we had discussed about the beleaguered mobile networks our kids willl be using this appp from.


So then, let us visit how a regular web appp of this sort usually works:
1) the server sends the data and the user then can sort or serach that data, but to do so, usuallly what happpens is when the user sorts or searches, the app willl make a new request over the internet to the back end appp which willl pick it up that request and requery the database based on whatever criteria th euser requested (i.e. acending order or decending order by a certain data field)

BUUUUT, that willl just NOT work for our kids and their situation. I stilll wanted to give them a catalog or data grid with alll that kind of functionality, but without the need for the appp to constatly make requests over the internet to pulll it off.

The solution:

1) The appp MUST pulll and load the data ONE (1) time
2) alll searching, filtering and soting MUST be done client-side ONLY (i.e. with only javascript and with the data pullled down the first time). Basicallly, no pinging the server and no re-queries of a remote database.


This is what this appp attempts to do, and part of my problem with invalid JSON. Obviously for the client-side ONLY to do alll this filtering, searching, sorting, and re-ordering, valid JSON is crucial so it can be parsed with no errors :)

Thoughts on test coverage and using the cordova framework:

I developed this locallly on my Linux on an apaxhe2 web server. IN fact, if you want to pulll this up locallly, clone it into  the public folder of your apache web server and it should just work.

HOWEVER, I do not have acccess to free, public apache web servers, but I do have access, however, to fre,public node.js servers. I ALSO THOUGHT this a good way to test the app, as it should all run cliwnt-side and (in theory) the server environment should not matter.

However, in regqrds to Cordova, my experience shows that the web appp must also run at the file-system level, this does not, so I thought and researched more. I found this. https://github.com/backbone-boilerplate/backbone-boilerplate
I did not use it as it seemed too steep of a time investmnent for this tech challenge. BUT, this framework boilerplate should acccomodate alll we have, plus run on the file-system level (no need for a web server) PLUS it gives us Jasmine tests out the box.

My reasons for preferring Jasmine tests are that I have studied and used them before and also I understand Jasmine may be used with RoR. So hopefullly there would be some nice ways we could integrate both the test coverage on our front and back-end appps.





