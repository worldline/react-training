# Introduction

React JS is a Javascript library that is designed exclusively at building user interfaces. Unlike Angular, React is not a full fledged framework but rather a small and focus library to build UI components.

As the central building block, React let you choose if you want to use it alone (even injected in a page written with another technology) or to embrace it fully. You can rely on the huge community around React to have libraries for about everything you can think of (routing, internationalisation, state management, etc.). The downside is that you have to try and pick the right tool for your project.

## Extended HTML

You can think of building React components like if you were extending HTML tags catalog. Those new components are then used in your application to build more complex UI, abstracting its complexity.

Let's take for example the following HTML element:

 ```html
 <input value="click me" type="button" onclick="alert('you clicked')"> 
 ```
 
 When used in an HTML page, it will render a button (draw rectagle on screen), handle the fact that the background color changes when the mouse is hovering it, use the text provided as ``value`` (or inside the opening and closing tags) as display text. It will as well handle the click functionality and call whatever function is provided in the "onclick" property.

 This is a great example of complexity abstraction done by the browser. As an HTML developer, you just have to use the tag and customise its behavior thanks to the available properties. You can pass any value to these properties as long as the comply with what the tag is waiting for.

 You should think of React as a library allowing you to create extra tags (called Components in React) to build your application by abstracting complexity at each level.

 React will allow you to create bigge components like this

 ```jsx
 <LoginForm onLogin={moveToDashboard} />
 ```

 You can imagine that such component will:
 - display the login form
 - capture user input
 - check that mandatory fields are present
 - call the login API
 - catch and display any error
 - once the user is successfully logged in, call the method provided in the `onLogin` property and passing it the logged in user

## Component data flow

## JSX: What is that beast?