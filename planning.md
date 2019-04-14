## Specification (Deliverables)

Our assignment is to create a React application that meets the following design specifications.  The app should have:

- A distinct welcome screen
- An index view
- A random planet view
- A way to navigate across pages - such as with buttons that set a state variable called `currentView`.
- It must be decently styled using CSS.  Delete all the default CSS that comes with `create-react-app`.

We will use the following API routes to access data:

Base URL: https://wdi-nyc-planets-api.herokuapp.com/planets

API routes:

GET /planets => render all planets

GET /planets/random => get a single random planet

POST /planets { name: <string>, num_moons: <number>, color: <strings> }

## Navbar

The app will have a `Nav` component that is always rendered at the top of the page. 
The navbar should include a button for each view. 
The `onClick` handler for each button should call `setState` to change the `currentView` property in state.

## Views:

Each view of the app should be its own component. (At least one component. It can be more than one as in the render all planets view). Component names should match their functionality (i.e. the `Form` component should have the word 'form' in its name). All of the components should live in a `components` directory. We don't have to move `App.js`into the `components` directory, but we can if we really want to. Just remember that will change the relative paths for import statements. Note that a function that does not return any `jsx` is not a component and therefore should not be inside of the the `components` directory. (For example, a file that only returns data from an API call is not a component).

### The app should have the following views:
 
**1. Welcome Screen:** 

 Create a welcome screen that introduces the app.

**2. Index:** 

  Make a view to render a list of all the planets' names. 

  Include a button to refresh the index. (Make a new call to `/planets` in the `onClick` handler of this refresh button.)

**3. Random:** 

  This view will render a random planet by making a call to the `/planets/random` route. Render all available data in the random planet view: name, color and number of moons.

  Include a button to refresh the random planet. (Make a new call to `/planets/random` on click).

**4. Create new planet form view:** 

  This view renders a form that you can use to create a new planet. Change the view in the 
  `onSubmit` handler of the form so that you can see the new planet rendered at the bottom of the list of 
   planets right after the new planet is submitted.
   
## Controller function
   
  In order to switch between different views, you will create a function in `App.js` that renders a different 
  view depending on what the `currentView` in state is. This will be like the `getView` function we saw today in class. You can see it in [today's lecture notes](https://git.generalassemb.ly/sei-nyc-jeopardy/conditional-render). You can use a switch statement or if/else. 
  Call this function in the render method of `App.js`.
  
 
   
### Bonuses

- Create a button that `onClick` filters for only blue planets.
- Create a button that `onClick` filters only planets with 0 moons.
- Position the planets in the render all planet view using [CSS grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- Add a 'favorite' button that adds a planet to a favorite array property in state. Add a view that renders a list of all favorite planets. 

# Our Approach

As always, we begin by reading our full spec and conceptualizing which components we believe we will build to complete the assignment.  This is a mental exercise in preparation, to help us understand at a high level what we want to do, which decisions we need to make, where data (state) will live, etc.  It is important not to get wrapped up in the details of how to implement any given component yet- we trust in the skills we have built so far, and that specifying JSX for HTML elements, mapping over arrays, etc. are well within our abilities as developers.

Having read just the five bulleted deliverables listed first, we could be forgiven for envisioning Index and Random views as components, with a simple welcome splash page hard-coded into App.js and removed via DOM manipulation once an initial view is selected.  However, after digging deeper into the spec we see that the welcome screen is expected to be a "view" with "its own component" as well, and that the welcome view should always be accessible via the nav functionality.  When we receive a specification, sometimes important details and decisions only become clear once we proceed past enumerated deliverables and on to examples and other "supporting" information.

It is also important to understand which features qualify as bonuses, beyond our minimum viable product (MVP).  We will keep bonuses in mind as we make design decisions (to make their implementation as easy as possible, when we're ready), but our focus is always on completing the MVP before diving into additional, non-critical features.  Styling with CSS, while important and a specified requirement, will always wait until we have implemented the MVP structure and functionality.  We may use CSS to help illustrate our design (such as setting a background color to lime, so we can easily identify an active tab).

## The Views

We've determined that we will need at least Welcome, Index, and Random views meet the specification.  We also need to be able to create a new planet using a form- while this functionality does not necessarily require its own view according to the enumerated deliverables, the section on Views clearly indicates that a form view is expected in our final product.  For now, our view components shall be:

- WelcomeView
- IndexView
- RandomPlanetView
- CreatePlanetView (this view will include a Form component)

## The Navbar

Since the navigation functionality will be rendered for each view, it can exist as its own entity in the App.js file.  A simple implementation of the App component's (incomplete) render method could include hard-coded buttons for switching views, as follows:

```
render() {
	return (
	  <div className="App">
	    <nav>
	      <ul>
	        <li><button type="submit" onClick={this.setCurrentView}>Welcome</button></li>
	        <li><button type="submit" onClick={this.setCurrentView}>All Planets</button></li>
	        <li><button type="submit" onClick={this.setCurrentView}>See a Random Planet</button></li>
	        <li><button type="submit" onClick={this.setCurrentView}>Create a New Planet</button></li>
	      </ul>
	    </nav>
	    <h1>This is my Planet App!</h1>
	  </div>
	);
}
```

The specification indicates that each view should have a button to display it, which we have placed within list items in an unordered list in a nav element.  (Remember to use semantic HTML elements in place of divs as often as possible, though div is an acceptible choice for an element that simply enables the rendering of multiple sibling elements.)  Each button has an onClick handler that will execute a (yet unwritten) setCurrentView method.  Let's take a look at our in-progress App component:

```
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentView: null // this will be a string
    }
  }

  setCurrentView() {

  }

  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li><button type="submit" onClick={this.setCurrentView}>Welcome</button></li>
            <li><button type="submit" onClick={this.setCurrentView}>All Planets</button></li>
            <li><button type="submit" onClick={this.setCurrentView}>See a Random Planet</button></li>
            <li><button type="submit" onClick={this.setCurrentView}>Create a New Planet</button></li>
          </ul>
        </nav>
        <h1>This is my Planet App!</h1>
      </div>
    );
  }
}

export default App;
```

Along with the setCurrentView method, our App component includes a constructor that calls the constructor of our super class as well as establishes a currentView property in its state.  Now is as good a time as any to establish our view components.  We will create a components directory in the src directory, and add a component file inside a new namesake directory (that will eventually include a separate CSS file for the component).  Here's what our src directory looks like:

```
-src
	-components
		-CreatePlanetView
			--CreatePlanetView.js
		-IndexView
			--IndexView.js
		-RandomPlanetView
			--RandomPlanetView.js
		-WelcomeView
			--WelcomeView.js
```