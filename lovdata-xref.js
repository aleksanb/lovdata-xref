function bootstrap() {
  var regex = /(?:i|av|jf\.|etter) §+(\s\d+)?(\s\w)?(\s\w+ ledd\b)?[\s.,!:_-]/g;
  var baseUrl = window.location.href;
  var currentLawId = baseUrl.match(/lov\/(.+)\//)[1];

  function matcher(match, paragrafnr, bokstav, ledd) {
    var linkTarget = ""; 
    var linkStyle = ""; 
    paragrafnr = paragrafnr ? paragrafnr.substr(1) : '';
    bokstav = bokstav ? bokstav.substr(1) : '';

    linkStyle = "background-color: #CC0513; color: white; font-weight: bold; padding: 2px 5px;";
    linkTarget = `https://lovdata.no/lov/${currentLawId}/§${paragrafnr}${bokstav}`
      return `<a href='${linkTarget}' style='${linkStyle}'>${match}</a>`;
  }

  var query = document.querySelectorAll("span, p");
  for (let node of query) {
    node.innerHTML = node.innerHTML.replace(regex, matcher);
  }
}

bootstrap();
