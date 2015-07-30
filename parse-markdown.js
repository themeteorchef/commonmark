parseMarkdown = function( string ) {

  var reader = new CommonMark.Parser(),
      writer = new CommonMark.HtmlRenderer(),
      parsed = reader.parse( string );

  return writer.render( parsed ).trim();
};
