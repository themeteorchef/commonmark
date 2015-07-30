## CommonMark
A wrapper around [commonmark.js](https://github.com/jgm/commonmark.js) along with a helper function for parsing Markdown on the client and server.

#### Features
- Simple wrapper around [CommonMark.js](https://github.com/jgm/commonmark.js), exposed as a global on the client and server at `CommonMark`.
- Helper function for parsing Markdown on the client and server `parseMarkdown()`.

#### Contents

1. Basic Usage
2. API & Defaults
3. Customization
4. Contributing
5. License


#### Basic Usage
This package was simply designed to aid with parsing of Markdown to HTML. On the client and server, we have access to a function `parseMarkdown()` that accepts a string of Markdown.

```javascript
var exampleMarkdownString = "We're using [Markdown](http://daringfireball.net/projects/markdown/)!";
var htmlFromMarkdown      = parseMarkdown( exampleMarkdownString );

return htmlFromMarkdown;
// '<p>We're using <a href="http://daringfireball.net/projects/markdown/">Markdown</a>!</p>'
```

#### Customization

We also have full access to commonmark.js directly on the client and server using the global `CommonMark`:

```javascript
var reader = new CommonMark.Parser();
var writer = new CommonMark.HtmlRenderer();
var parsed = reader.parse( "Hello *world*" );

var result = writer.render(parsed);
```

For more info on customization using `CommonMark` directly, [check out the CommonMark docs](https://github.com/jgm/commonmark.js).

#### Contributing
Because this package is just a simple wrapper, it's recommended that you contribute to CommonMark directly. If you'd like to help keep this wrapper up to date, feel free to [submit a pull request](https://github.com/themeteorchef/commonmark/pulls)!

#### Tests
This package comes with [a small suite of tests](https://github.com/themeteorchef/commonmark/tree/master/tests) to ensure that `parseMarkdown()` is available on the client and server and returns an HTML string from Markdown. To run the tests:

1. Install the TinyTest package `meteor add tinytest`.
2. Run Meteor with tests `meteor test-packages`.
3. Pop open your browser `http://localhost:3000`.
4. Verify tests are passing.

![Tests passing in TinyTest](http://cl.ly/image/3s2A3M0C081e/Image%202015-07-30%20at%2010.52.03%20AM.png)

**Note:** if your app is already running on `http://localhost:3000`, you can run tests separately by running `meteor --port 3001 test-packages`.

#### License
The code for this package is licensed under the [MIT License](http://opensource.org/licenses/MIT).

The license for CommonMark can be [found here](https://github.com/jgm/commonmark.js/blob/master/LICENSE).
