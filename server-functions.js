markdownToHTML = function( string ) {
  var reader     = new CommonMark.Parser();
  var writer     = new CommonMark.HtmlRenderer();
  var parsed     = reader.parse( string );
  return writer.render( parsed );
};
