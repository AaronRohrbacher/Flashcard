
var toggleBoth = function(flash, def) {
  $(flash).click(function(){
    $(flash).slideToggle();
    $(def).slideToggle();
  });
  $(def).click(function(){
    $(def).slideToggle();
    $(flash).slideToggle();
  });

}

$(document).ready(function(){

toggleBoth("#javaScript", "#javaScriptDef");
toggleBoth("#operators","#operatorsDef");
toggleBoth("#variables", "#variablesDef");
toggleBoth("#variableNaming", "#variableNamingDef");
toggleBoth("#functions", "#functionsDef");
toggleBoth("#methods", "#methodsDef");
});
