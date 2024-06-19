const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" },
    [
        React.createElement("div", { id: "child1", key:"child1" },
            [
                React.createElement("h1", { key: "h1" }, "I'm a h1 tag"),
                React.createElement("h2", { key: "h2" }, "h2 Tag")
            ]
        ),
        React.createElement("div", { id: "child2", key:"child2" },
            [
                React.createElement("h3", { key: "h3" }, "I'm a h3 tag"),
                React.createElement("h4", { key: "h4" }, "h4 Tag")
            ]
        )
    ]
);
console.log(parent);
root.render(parent);