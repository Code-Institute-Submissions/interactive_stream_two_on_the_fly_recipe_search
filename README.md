# On the Fly


## Single Page Recipe Search Application Using an API

This website is designed to provide users with the ability to supply one ingredient to a search function when they see a supermarket special offer or simply have a perishable ingredient hanging about in their fridge or cupboard. As the instances of when users would use this app would often be when they are out and about shopping the website needs to have an app like feel and functionality.

The site is a single page site using an a recipe API to provide users with a simple and efficient solution to their food perparation needs "On the Fly". There are very few supermarkets nowadays that don't offer in particular extensive vegetable offers when you walk in their doors. For many of us these offers end up lurking in our fridges and cupboards never used as they aren't part of our usual meal prep knowledge. This app seeks to make life easier while also reducing food waste in the home and save some money in the process. 

## Live Demo

Follow this link to view deployed version of this website https://nikralave.github.io/interactive_stream_two_project/.

### UX

#### 1. Initial Planning 

The planning commenced with pen and paper brainstorming and some competitor website analysis. Here website purpose and goals were laid out along with thoughts on the type of feel and message the site ought to protray to the user. Competitor analysis was then carried out on other food recipe websites along with food mobile applications. It was at this point that the food API which would be used was decided upon also. Having reviewed several APIs, [Edamam](https://developer.edamam.com "Edamam Developer Portal") was chosed. This decision process was difficult and required consideration to be given a number of points. The API needed to be free to use which in itself places limitations on the development. The data format and fields were also important to research given that they would affect what features could be offered to the user. 

#### 2. User Stories

From here I decided to complete some user stories before commencing wireframing. This helped me to think through the user journey and design a good site map and navigation path. 

The following is a list of some user stories:
 - As a user of a recipe search application when out and about, I need to be able to search for a recipe quickly when I land on the site's homepage, this will help me to make decisions quickly on the go.
 - As a user seeking an application from which to obtain food inspiration, I would like to have images and links to the original recipe source so that I have the full background on what I'm about to cook.
 - As a user seeking to reduce my food waste, I would like to be able to search for ingredients that I have in my kitchen at present quickly so that I can make decisions to use these in a time effective manner.
 - As a user with special dietary needs, I would like to be able to filter my recipe search results so that I can choose a suitable recipe for my needs without having to read through many unsuitable options. 
 - As a user who is somewhat health conscious, I would like to be able to see nutritional information at a glance, this will help filter out options that I feel are not within my eating plan.
 - As a user who regularly shops in the special offer section of the supermarket, I would like the option of a preselected list of common offers, this will speed up my shopping decisions on the fly.

#### 3. Wireframes

After the initial planning stage, analog pen and paper wireframes were completed. From here I developed these wireframes further using [Balsamiq](https://www.balsamiq.com "Balsamiq Homepage"). At this point I fine tuned down my features and layout. There were some cosmetic adjustments during the development process but on a whole the original mockups were followed quite closely. All wireframes have been included in a file labelled "Wireframes" for project review.

#### 4. Overall Look and Feel

As this is designed as an application where people come for their food preparation inspiration, it needed a fresh and simple but also appealing interface. After some research I found that images are extremely important when people are searching for food. For this reason I wanted to set the scene with attractive images in the "Trending Recipes" section of the landing page.  I chose green and white as my base colours for the site as along with giving the site a crisp feel, green also conjures up images of freshness and zest which is important when thinking of one's food needs.

### Features
- This is a single page website/application built using a Bootstrap framework for responsive layout. Please note that no template was used to build this project.
- There is a clean sidebar which functions very well as a clear and user friendly filtering system. A hamburger menu appears on this when collapses and this animates into an X when open using a combination of CSS and Jquery. The main purpose of this site is to enable the user to easily search for a recipe using a single ingredient. The search bar therefore takes pride of place at the top of the page under the logo. You can also open this sidebar by clicking on a link named "Advanced Search Options" before the primary search button.
- A user has the option of typing an ingredient or selecting one from a dropdown menu of popular offers. 
- Once the user hits the search button a nicely diplayed list of recipe results appear. There is slide/toggle functionality on the list of Nutrition Details and Ingredients. The sugar and fat results have also been calculated in the JavaScript in terms of RDA and visualised using a Bootstrap progress bar. 
- On the landing page there is an attractive carousel of enticing food images on which the user can click to reveal a trending recipe. It was decided to hide the carousel on mobile devices and display as a clean clickable list as there was some overflow of content which didn't read well on mobile.

#### Future Development
- Currently each search yields five pages of recipes this will also be worked on in the future to implement a "load more" button up to the maximum available result. 
- Perhaps other food APIs might be looked at and connected to this model so that I can offer more food information on recipes. 

### Technologies Used

- HTML5 
- CSS3 - Along with using CSS for styling this was also used to create the side filtering menu.
- [Bootstrap Version 3](https://getbootstrap.com/docs/3.3/ "Bootstrap 3 Homepage")  - used for responsive layout of both the homepage and search results.
- JavaScript - JavaScript has been used to connect to the API and return results in optimal format to the HTML.
- [Jquery](https://jquery.com/Jquery "Jquery Homepage") - Jquery has been used on the sidebar filter menu and for a slide toggle effect on recipe ingredients and nurtition info.


## Testing & Deployment

### Testing

- Manual testing was carried out on this site.
- All code used has been tested to ensure that everything is working as it ought to.
- All CSS code has passed the official [Jigsaw Validator](https://jigsaw.w3.org/css-validator/ "Jigsaw Validator Homepage")
- [Cross Browser Testing](https://crossbrowsertesting.com/ "Cross Browser Testing Homepage")  was used to ensure that the site has been tested for viewing support across the following browsers:
  - Google Chrome
  - Opera
  - Microsoft Edge
  - Internet Explorer 11
  - Mozilla Firefox
  - Safari
- Responsiveness has also been tested across multiple devices through the use of Google Dev Tools and also using the following resources:
  - [Responsinator](http://www.responsinator.com/ "Responsinator Homepage")
  - [Google Resizer](https://material.io/tools/resizer/ "Google Resizer Homepage")
  - [Mobile Test](http://mobiletest.me/ "Mobile test Homepage")


#### Known Bugs
- Search on keyboard enter will be implemented in the future. The clear form function I believe is currently affecting this. 
- Due to connecting to this API through JavaScript the API keys are visible through Google Developer Tools. I would fix this by perhaps a different development approach using environment variables.

### Deployment

The site has been deployed to be hosted on Github pages. (please see the live link above)


## Credits

I would like to acknowledge the following sources:

### Content
- The recipe results and images were obtained by connecting with the [Edamam](https://developer.edamam.com "Edamam Developer Portal") recipe search API.

### Media
- The photos used on the Trending Recipes section were obtained from a combination of sources including stock photo sites such as [Pexels](https://www.pexels.com/ "Pexels") and [Unsplash](https://unsplash.com/ "Unsplash") .
- The instructional icons on the homepage were obtained from a vector icon site called [Flaticon](https://www.flaticon.com/ "Flaticon")

### Acknowledgements
- I took inspiration and manipulated code to make it my own from this Codepen account for the desktop carousel: https://codepen.io/epkeaton/  


