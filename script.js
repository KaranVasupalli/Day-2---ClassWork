const MyComponent = () => {
  return React.createElement(
    "div",
    {class:"maindiv"},
    React.createElement("h1", {class:"h1"}, "React js"),
    React.createElement(
      "div",
      {class:"div1"},
      React.createElement(
        "p",
        null,
        "React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps."
      )
    ),
    React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        {class:"div1"},
        "To begin, check out the official ReactJS documentation for a comprehensive " +
          "guide on how to get started. You can find it ",
        React.createElement(
          "a",
          { href: "https://react.dev/", target: "_blank" },
          " here"
        ),
        ". Happy coding!"
      )
    ),
    React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        {class:"div1"},
        "React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps."
      )
    )
  );
};

ReactDOM.render(
  React.createElement(MyComponent),
  document.getElementById("root")
);
