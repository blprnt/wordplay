##WordPlay

The Office For Creative Research
jer@o-c-r.org

*Linguistic exploration API / web tool*

###To get this working locally:

1. Install Node.js: http://nodejs.org/

2. Run 'npm install' from the wordplay directory to install all of the required dependencies. (This should work. If it doesn't, you can manually install the follwoing using npm install <module>: express, rita, jade, stylus, nib, forever, marked )

3. Run 'node wordplay-app.js'

4. Visit http://121.0.0.7 in your browser

###To edit pages

Right now I'm using a templating system to serve content. Which is probably overkill, but it gives me a good chance to learn to use this stuff.

Pages are being served by Jade: http://jade-lang.com/
CSS by Nib & Stylus: http://learnboost.github.io/stylus/  http://visionmedia.github.io/nib/

##API Endpoints

http://wordplay.o-c-r.org/wp/<corpus>/<search text>/

http://wordplay.o-c-r.org/wp/<corpus>/<search text>/<limit>

Currently available corpii: 

* shakes - Complete works of Shakespeare
* bible - The New Testament
* mobydick - Moby Dick
* freud - Sigmund Freud's 'A General Introduction to Psychoanalysis'
* bieber - 10,000 tweets about Justin Bieber
