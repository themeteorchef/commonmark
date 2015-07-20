Package.describe({
  name: 'themeteorchef:commonmark',
  version: '0.21.0', // Version equal to commonmark.js.
  summary: 'CommonMark.js Markdown parser and helper functions for converting Markdown to HTML on the server.',
  git: 'http://github.com/themeteorchef/commonmark',
  documentation: 'README.md'
});

Npm.depends({
  "commonmark": "0.21.0"
});

Package.onUse( function( api ) {
  api.versionsFrom( '1.1.0.2' );

  api.addFiles( [
    'commonmark.js'
  ], [ 'server' ]);

  api.export( "parseMarkdown", 'server' );
});

Package.onTest( function( api ) {
  api.use( 'tinytest' );
  api.use( 'themeteorchef:commonmark' );
  api.addFiles( 'tests/server.js', 'server' );
});
