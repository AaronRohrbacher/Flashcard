var toggleBoth = function(flash, def) {
$(document).ready(function(){
  $(flash).click(function(){
    $(flash).slideToggle();
    $(def).slideToggle();
  });
  $(def).click(function(){
    $(def).slideToggle();
    $(flash).slideToggle();
  });
});
}

toggleBoth("#javaScript", "#javaScriptDef");
toggleBoth("#operators","#operatorsDef");
toggleBoth("#variables", "#variablesDef");
toggleBoth("#variableNaming", "#variableNamingDef");
toggleBoth("#functions", "#functionsDef");
toggleBoth("#methods", "#methodsDef");
