/* 
** DocsifyScript Plugin
** 2019 Luis Alves Martins
*/
function docsifyPhaser(hook,vm){
  hook.beforeEach(function(content) {
      // Invoked each time before parsing the Markdown file.
      this.jscriptSrc=[];
      var p1=0;
      while(p1>=0){
        p1=content.toUpperCase().indexOf("<!-- SCRIPT");
        if (p1>=0)
        {
          var p3=content.indexOf("(", p1);
          var p5=content.indexOf("-->",p1 );
          if (p3>-1 && p3<p5){
            var p4=content.indexOf(")",p3);
            this.jscriptSrc.push( content.substr(p3+1,p4-p3-1) );
          }
          content=content.substr(0,p1) + content.substr(p5+3);
        }
      }
      return content;
    });

    hook.ready(function() {
      jscriptSrc.forEach(sc=>{
        // get some kind of XMLHttpRequest
        var xhrObj = new XMLHttpRequest();
        // open and send a synchronous request
        xhrObj.open('GET', sc, false);
        xhrObj.send('');
        // add the returned content to a newly created script tag
        var se = document.createElement('script');
        se.type = "text/javascript";
        se.text = xhrObj.responseText;
        document.getElementsByTagName('head')[0].appendChild(se);        
      })
    });
}

if (window) {
  window.$docsify = window.$docsify || {};

  window.$docsify.plugins = [].concat(
      docsifyPhaser,
      (window.$docsify.plugins || [])
  );
}