# react-native-primer
This is the first project from **Stephen Grider's The Complete React Native and Redux Course**, and my first exposure to React Native. 

## What does it do?

The "completed" app displays Album information and some images for a particular artist.

* Upon mounting, it performs a GET request to a proprietary API that Grider has specifically created for this project.
* The API will respond with Album data.
* The JSON data is mapped over to display a list of cards
* Each card is split up into three sections:
  1. A header with an Avatar picture, Album title, and Artist Name
  2. A large, full-width Album Art section,
  3. A touchable button that redirects the user's default browser to that album's Amazon page.


## What did building this app teach me?

* React Native doesn't use Web based HTML tags, so understanding the built-in React Native Components and reading the official documentation is key.
* All of the styling for the app is done at the component level, so no CSS files found tucked away anywhere.
* Because styling is time consuming, this creates the incentive to make/utilize as many highly resuable components possible.
* Flexbox is primarily used to position things and all the styling is pixel-based out of the box.
* Images need defined height's and width's before it can be seen on screen.
* I learned the power of `props. children` and how it drives a ton of resuability.
* Styling between iOS and Android apps have some significant differences as each platform has it's own React Native code.
* I would assume that being able to code for both platforms with the single language helps to ease the learning curve of either, if needed.
* Remote debugging is possible with Chrome DevTools, which is how we debugged this particular app.
* I'm pretty interested in developing things with the app directly on my phone, so I'm looking out for something like the in the next project or so.

## Final thoughts: 

This *initial* project was made with the beginner in mind, so some of his diagrams and examples are pretty basic, but they're all relevent and convey the knowledge well. Coming from a web-based React background, it's nice to be able to develop something that's made to be used on a phone.

I wish Grider would've challenged his students with more coding challenges as they gain proficiency and confidence with certain concepts. I find that kind of teaching style to promote more active (rather than passive) participation from the viewer, but regardless, pausing the video to try some stuff out before hearing his explanation does the trick just fine. 

The next project will use many of the components that were made within this project, but the focus will switch towards understanding Authentication and interfacing it with Firebase, so I'm looking forward to more complexity. 


