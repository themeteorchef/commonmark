Tinytest.add( 'CommonMark object exists on CLIENT', function ( test ) {
  test.equal( typeof CommonMark, "object" );
});

Tinytest.add( 'parseMarkdown function exists on CLIENT', function ( test ) {
  test.equal( typeof parseMarkdown, "function" );
});

Tinytest.add( 'parseMarkdown converts Markdown to HTML on CLIENT', function ( test ) {
  var input  = "This **is our test string**. It _should_ render from [Markdown](http://daringfireball.net/projects/markdown/) to HTML just fine.";
  var output = '<p>This <strong>is our test string</strong>. It <em>should</em> render from <a href="http://daringfireball.net/projects/markdown/">Markdown</a> to HTML just fine.</p>';

  var result = parseMarkdown( input );

  test.equal( output, result );
});
