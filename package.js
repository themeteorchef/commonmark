Package.describe({
  name: 'themeteorchef:commonmark',
  version: '1.1.0',
  summary: 'CommonMark.js and helper function for converting Markdown to HTML on the client and server.',
  git: 'http://github.com/themeteorchef/commonmark',
  documentation: 'README.md'
});

Package.onUse( function( api ) {
  api.versionsFrom( '1.1.0.2' );

  api.addFiles([
    'commonmark/dist/commonmark.min.js',
    'commonmark.js',
    'parse-markdown.js'
  ], [ 'client', 'server' ] );

  api.export( [ "CommonMark", "parseMarkdown" ] );
});

Package.onTest( function( api ) {
  api.use( 'tinytest' );
  api.use( 'themeteorchef:commonmark' );
  api.addFiles( 'tests/client.js', 'client' );
  api.addFiles( 'tests/server.js', 'server' );
});
