# react-native-primer
This is the first project from **Stephen Grider's The Complete React Native and Redux Course**, and my *first* exposure to React Native.

## What does it do?

* Upon mounting, it performs a GET request to a proprietary API that Grider supplied.
* The JSON data is mapped over to display a list of cards
* Each card is split up into three sections:
  1. A header with an Avatar picture, Album title, and Artist Name
  2. A large, full-width Album Art section,
  3. A touchable button that redirects the user's default browser to that album's Amazon page.


## What did building this app teach me?

* React Native doesn't use Web based HTML tags, so understanding the built in Components is key.
* All of the styling for the app is done at component level.
* Because styling is time consuming, this creates the incentive to make/utilize as many highly resuable components as possible.
* Flexbox was primarily used to position things and all the styling is pixel-based out of the box.
* Images need defined height's and width's in order to display anything.
* I learned the power of `props. children` and how it drives a ton of resuability.
* Styling between iOS and Android apps have some significant differences as each platform has it's own React Native code, but being able to code both with the same language helps to ease the learning curve of either.
* Remote debugging is possible with Chrome DevTools, which is how we debugged this particular app.
* I'm pretty interested in developing things with the app directly on my phone, so I'm looking out for something like the in the next project or so.

## Final thoughts:

This was a great primer for understanding the bare basics. 

Clearly made for those who are just getting into the React language, some of his diagrams and examples are pretty basic, but they're all relevent and convey the knowledge well. Coming from a web-based React background, it's nice to be able to develop something that's made to be used on a phone.

I wish Grider would challenge his viewers with detailed examples followed by coding challenges. I find that style more active for the viewer, but you could easily pause the video and try some stuff out before he explains exactly how to do it. The next project is based around authentication with Firebase, so I'm looking forward to more complexity. 


