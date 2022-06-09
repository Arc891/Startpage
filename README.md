# startpage
My custom startpage, edited from https://github.com/kencx and https://github.com/nwvh. 
I added an interactive gif, and an actual typing interface in which you can enter websites (no browser search support tho, so entering a look-up term will not work. Therefore I just added the 'http://www.' to the beginning of the entered text to go to said page) and my own quick links.


# Showcase of my page

![startpage_example](https://user-images.githubusercontent.com/76947137/172838904-becac13c-5b95-450d-97c8-48152c92d2a5.gif)


# How to use?

1. git clone this repo
```git clone git@github.com:Arc891/Startpage.git```
2. copy the path to the index.html file
3. set the path as your default startpage in your desired browser

# Customization

### Image(s)
There are a few vaporwave/retro styled gifs included in this repo, you can edit which one you want to use instead of the current interactive one I made myself on line <b>27</b> of index.html by adding ```src="img/example.gif"``` (or your own image/gif) and changing the ```rest``` class to ```vapor```.

### URLs
you can edit all of the URLs to your desired, starting on line **40** in ```index.html```
<br> **Example:** <br>
**line 43:** ```<li><a href="https://photos.google.com/">photos</a></li>``` <br >can be changed to <br> **line 43:** ```<li><a href="https://yoururl.com/">your url</a></li>```

### Categories

You can ofcourse go ahead and add your own categories should you wish to do so, have fun with it :)
