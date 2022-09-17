// ReactDOM.render(<h1>Hello, fuckers!</h1>, document.getElementById("root"))

const MainContent = () => {
    return (
        <h1>I'm learning React!</h1>
    )
}

ReactDOM.render(
    <div>
<ul>
    <li>List Item 1</li>
    <li>List Item 2</li>
</ul>
<MainContent />
</div>,
document.getElementById('root')
)