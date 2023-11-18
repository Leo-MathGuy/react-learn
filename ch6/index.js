function Header() {
    return (
        <nav>
            <a href="">Page 1</a>
            <a href="">Page 2</a>
            <a href="">Page 3</a>
            <a href="">Page 4</a>
            <a href="">Page 5</a>
        </nav>
    );
}

function Content() {
    return (
        <main>
            <h1>Header</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At harum, quas quos nam consequatur nesciunt repellendus aspernatur. Nisi magnam dolores, aperiam nostrum labore iure delectus. Odio fugit sed nostrum repudiandae!</p>
            <ul>
                <li>1 <Button /></li>
                <li>2 <Button /></li>
                <li>3 <Button /></li>
                <li>4 <Button /></li>
                <li>5 <Button /></li>
            </ul>
        </main>
    );
}

function Button() {
    return (
        <button className="button">Button</button>
    );
}

ReactDOM.render(
    <div>
        <Header />
        <Content />
    </div>,
    $("#root").get(0)
);