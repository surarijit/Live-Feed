#LIVE-FEED
	
As the name suggests, this web application takes live feed (both audio and video) from your web cam and displays the same in the preview window, where we also have the option to download the video. In other words we can call it live streaming. 

INGREDIENTS

I have used Django 2.1.10 (python3 and above is supported) as the backend of the web application while the front-end is supported by HTML, CSS, and JAVASCRIPT.  The code is stored on Github and the web application is hosted in pythonanywhere.com. 
The pictures used as the background of the webpages are taken from google.

WORKING

The front page of the website (index.html) gives a basic introduction about what the site it. It contains a dynamic moving background which is built with the help of html and css. It also contains a button which is the link to the desired page or the working page of the application (hompage.html). 
This page would display the live feed as captured fromt the webcam, store it and preview it later, from where it can also be downloaded. I have used Javascript and HTML to capture the video. 
I have used a virtural environment, so that i could use different versions of Django to work simultaneously at the same time in different projects.
WHAT’S GOING ON INSIDE

Any urls entered is passed from mysite/urls.py to blog/urls.py, from where it is transferred to views.py which revokes the assigned template to it.

HOW TO RUN IT??

We can run it on our local host by using django. Phew!! That’s a high sounding term. 
First we need to install python3 on our device, then pip which in turn would install Django. You can just search “how to install django in my os <your operating system>” and follow the steps given there. Then create a directory under which you would store this project. The folders inside it should be the apps of my project. 
Enter the folder which contains manage.py file and then run python manage.py runserver on the console window, and there you go. Yeah!!

Or you can just cut the load and visit https://pizzagirl1998.pythonanywhere.com/ , where i have hosted this website.

LIMITATIONS

The video recorded should not exceed the time limit of 5 seconds.

