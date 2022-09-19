// ReactDOM.render(<h1>Hello, fuckers!</h1>, document.getElementById("root"))

// const MainContent = () => {
//     return (
//         <h1>I'm learning React!</h1>
//     )
// }

// ReactDOM.render(
//     <div>
// <ul>
//     <li>List Item 1</li>
//     <li>List Item 2</li>
// </ul>
// <MainContent />
// </div>,
// document.getElementById('root')
// )

// ReactDOM.render(<h1>Hello, fuckers!</h1>, document.getElementById("root"))

// IMPERATIVE way of programming
// Challenge - recreate the above line of code in vanilla JS by creating and
// appending an h1 to our div#root (without using innerHTML).

// - Create a new h1 element
// - Give it some textContent
// - Give it a class name of "header"
// - append it as a child of the div#root

// const h1 = document.createElement('h1')
// h1.textContent = "Some h1 content"
// h1.className = 'header'
// document.getElementById('root').appendChild('h1')

// React is declarative, we say what we need and it gonna make it happen.
// ReactDOM.render(<h1 className="header">Hello, fuckers!</h1>, document.getElementById("root"))

// Challenge: 

// Create a navbar in JSX:
//     - Use the semantic `nav` element as the parent wrapper
//     - Have an h1 element with the brand name of your "website"
//     - Insert an unordered list for the other nav elements
//         - Inside the `ul`, have three `li`s for "Pricing",
//         "About", and "Contact"
//     - Don't worry about styling yet - it'll just be plain-looking HTML for now
// */

const myNavBar = 
(<nav>
    <h1>Clunc's Brand</h1>
    <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
</nav>)

ReactDOM.render(myNavBar, document.getElementById('root'));
