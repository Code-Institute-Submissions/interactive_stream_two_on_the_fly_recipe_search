# On the Fly


## Single Page Recipe Search Application Using an API

This website is designed to provide users with the ability to supply one ingredient to a search function when they see a supermarket special offer or simply have a perishable ingredient hanging about in their fridge or cupboard. As the instances of when users would use this app would often be when they are out and about shopping the website needs to have an app like feel and functionality.

The site is a single page site using a recipe API to provide users with a simple and efficient solution to their food preparation needs "On the Fly". There are very few supermarkets nowadays that don't offer in particular extensive vegetable offers when you walk in their doors. For many of us these offers end up lurking in our fridges and cupboards never used as they aren't part of our usual meal prep knowledge. This app seeks to make life easier while also reducing food waste in the home and save some money in the process. 

## Live Demo

Follow this link to view deployed version of this website https://nikralave.github.io/interactive_stream_two_on_the_fly_recipe_search/

## UX


#### 1. Initial Planning 

The planning commenced with pen and paper brainstorming and some competitor website analysis. Here website purpose and goals were laid out along with thoughts on the type of feel and message the site ought to portray to the user. Competitor analysis was then carried out on other food recipe websites along with food mobile applications. It was at this point that the food API which would be used was decided upon also. Having reviewed several APIs, [Edamam](https://developer.edamam.com "Edamam Developer Portal") was chosen. This decision process was difficult and required consideration to be given to a number of points. The API needed to be free to use which places limitations on the development. The data format and fields were also important to research given that they would affect what features could be offered to the user. 

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

After the initial planning stage, analog pen and paper wireframes were completed. From here I developed these wireframes further using [Balsamiq](https://www.balsamiq.com "Balsamiq Homepage"). At this point I fine tuned down my features and layout. There were some cosmetic adjustments during the development process but on a whole the original mockups were followed quite closely. All wireframes have been included in a file labelled [wireframes](wireframes/) for project review.

#### 4. Overall Look and Feel

As this is designed as an application where people come for their food preparation inspiration, it needed a fresh and simple but also appealing interface. After some research I found that images are extremely important when people are searching for food. For this reason, I wanted to set the scene with attractive images in the "Trending Recipes" section of the landing page.  I chose green and white as my base colours for the site as along with giving the site a crisp feel, green also conjures up images of freshness and zest which is important when thinking of one's food needs.


## Features

- This is a single page website/application built using a Bootstrap framework for responsive layout. Please note that no template was used to build this project.
- The main purpose of this site is to enable the user to easily search for a recipe using a single ingredient. The search bar therefore takes pride of place at the top of the page under the logo. 
- There is a clean sidebar which functions very well as a clear and user friendly filtering system. A hamburger menu appears on this when collapsed and this animates into an X when open using a combination of CSS and jQuery. You can also open this sidebar by clicking on a link named "Advanced Search Options" before the primary search button.
- A user has the option of typing an ingredient or selecting one from a dropdown menu of popular offers. 
- Once results appear the search bar is still visible on the top of the page giving the choice of further searches. A user can also click a reset button which appears on search to go back to home and reset the search form.
- A back to page top arrow button appears on scroll to make the user navigation experience flow well.
- Once the user hits the search button a nicely displayed list of recipe results appear. There is slide/toggle functionality on the list of Nutrition Details and Ingredients. The sugar and fat results have also been calculated in the JavaScript in terms of RDA and visualised using a Bootstrap progress bar. 
- On the landing page there is an attractive carousel of enticing food images on which the user can click to reveal a trending recipe. It was decided to hide the carousel on mobile devices and display as a clean clickable list as there was some overflow of content which didn't read well on mobile.

#### Future Development
- Currently each search yields five pages of recipes this will also be worked on in the future to implement a "load more" button up to the maximum available result. 
- Perhaps other food APIs might be looked at and connected to this model so that I can offer more food information on recipes. 


## Technologies Used

- HTML5 
- CSS3 - Along with using CSS for styling this was also used to create the side filtering menu.
- [Bootstrap Version 3](https://getbootstrap.com/docs/3.3/ "Bootstrap 3 Homepage")  - used for responsive layout of both the homepage and search results.
- JavaScript - JavaScript has been used to connect to the API and return results in optimal format to the HTML.
- [jQuery](https://jquery.com/Jquery "jQuery Homepage") - Jquery has been used on the sidebar filter menu and for a slide toggle effect on recipe ingredients and nutrition info.


## Testing & Deployment

### Testing

- Manual testing was carried out on this site. Some of the items found include:
    - The API documentation stated that a time parameter was available for use. I discovered that for a number of recipe results this in fact shows up as zero. To avoid confusion for users I inserted an if statement to handle cases where the time result was zero by replacing this with a "No time available string".
    - The API documentation also stated that under the field "dietLabels" attributes “high-fiber” and "low-sodium" were available. While testing search cases for all attributes in my filter functionality, I discovered that these labels in fact yielded no results for any of my test examples. I subsequently removed these attributes from my filter to avoid users experiencing search failures.
    - While testing the search including filter options I noted that these options stayed selected when the search results appeared. To aid further user searches I placed a clear button at the bottom of the filter so that the user can start a clean search quickly.
    - I had originally specified in my code that 10 pages of results should be available for each search. However, after viewing several pagination results, I decided to limit this to 5 pages as the API is limited on results. As mentioned in the future development section above I intend to implement code that shows the maximum results for each search.
    - A reset button was required for the form. I found that displaying this in the search box wasn't making sense when the user hadn't yet entered anything in the search. For this reason, I decided to add a function to only show the reset button on user search.
    
- All links were tested to ensure working correctly & all external links are opening on a new tab.
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
- Along with the emulator tests above, the site has been tested on my own phone along with other physical devices to ensure all looks and works as it should. 

#### Development Challenges

- One particularly challenging aspect of testing and indeed developing this application was the fact that the  [Edamam](https://developer.edamam.com "Edamam Developer Portal") API free version being used has a request limit of 5 search "hits" per minute. This slows down the and makes the process of refactoring and updating code more difficult.

#### Known Bugs

- Search on keyboard enter will be implemented in the future. The clear form function I believe is currently affecting this. 
- I have made an assumption that there will alays be enough results for 5 full pages, which there will be for the most popular items searched for. In the cases where there are not, I intend to address this issue to ensure that pagination works correctly for less than 5 pages. 
- In the cases where a user has not entered anything and hits the return key, no results are returned. This will involve redevelopment of the search/filter functionality to prevent blank searches. 
- In the cases where a user enters something that does not return any valid results, there is no message to indicate that. A message should appear to them to let them know they should retype something else.
- Due to connecting to this API through JavaScript the API keys are visible through Google Developer Tools. I would fix this by perhaps a different development approach using environment variables.

### Deployment

The site has been deployed to be hosted on GitHub pages. (please see the live link above). Below are the deployment instructions:

1. On GitHub, navigate to the repository you wish to deploy from.
2. Under your repository name, click Settings.
3. Navigate to the GitHub Pages section.
4. Use the Select source drop-down menu to select master branch.
5. Click Save.

### Installation

If you wish to clone this project, follow the below instructions. In developing this project, I used Cloud9, the following instructions have been made with this in mind. If you are using a different editor you may need to look at its documentation for your terminal commands.

1. If you wish to use the Cloud 9 code editor click here https://c9.io
2. Proceed to the folder which you want to store the cloned project and, in your terminal, & type: `$ git clone https://github.com/nikralave/user_centric_stream_one_aoife_holidaysplease_travel_site.git`
3. When done cut ties with my GitHub: `$ git remote rm origin`
4. Please note that you should obtain your own API keys by signing up here [Edamam](https://developer.edamam.com "Edamam Developer Portal")


## Credits

I would like to acknowledge the following sources:

### Content
- The recipe results and images were obtained by connecting with the [Edamam](https://developer.edamam.com "Edamam Developer Portal") recipe search API.

### Media
- The photos used on the Trending Recipes section were obtained from a combination of sources including stock photo sites such as [Pexels](https://www.pexels.com/ "Pexels") and [Unsplash](https://unsplash.com/ "Unsplash") .
- The instructional icons on the homepage were obtained from a vector icon site called [Flaticon](https://www.flaticon.com/ "Flaticon")

### Acknowledgements
- I took inspiration and manipulated code to make it my own from this Codepen account for the desktop carousel: https://codepen.io/epkeaton/  


