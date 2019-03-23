window._bd_share_main.F.module(&quot;share/api_base&quot;,function(e,t,n){var r=e(&quot;base/tangram&quot;).T,i=e(&quot;base/class&quot;).Class;t.ApiBase=i.create(function(e){function s(e){window._bd_share_main.F.use(&quot;component/anticheat&quot;,function(t){t.process(&quot;mouseenter&quot;,e.event,e.element)}),t._processEvent(e)}function o(n){window._bd_share_main.F.use(&quot;component/anticheat&quot;,function(e){e.process(&quot;mouseclick&quot;,n.event,n.element)});var i=t._processAction(n);if(i&amp;&amp;i.data)if(n.cmd==&quot;more&quot;||n.cmd==&quot;count&quot;)window._bd_share_main.F.use(&quot;component/pop_dialog&quot;,function(t){var r=t.Dialog;r.un(),r.on(&quot;clickact&quot;,o),r.on(&quot;mouseenter&quot;,s),r.show(n,e)});else if(n.cmd==&quot;popup&quot;)u(n);else{var a;r.type(e.onBeforeClick)==&quot;function&quot;&amp;&amp;(a=r.extend({},e),a=e.onBeforeClick(n.cmd,a));var f=r.extend({},e,a,{__type:i.data.type,__buttonType:n.buttonType,__cmd:n.cmd,__element:n.element});window._bd_share_main.F.use(&quot;trans/trans&quot;,function(e){e.run(f)}),r.type(e.onAfterClick)==&quot;function&quot;&amp;&amp;e.onAfterClick(n.cmd)}}function u(t){window._bd_share_main.F.use(&quot;component/pop_popup&quot;,function(n){var r=n.Popup;r.un(),r.on(&quot;clickact&quot;,o),r.on(&quot;mouseenter&quot;,s),r.show(t,e)})}var t=this,n=null,i=null;t.getView=function(){return n},t.setView=function(e){n=e},t.init=function(){t._init(),n&amp;&amp;(n.on(&quot;clickact&quot;,o),n.on(&quot;mouseenter&quot;,s),n.on(&quot;moreover&quot;,u))},t.distory=function(){t._distory(),n&amp;&amp;(n.un(),n.distory()),delete t},t._init=function(){},t._distory=function(){},t._processEvent=function(e){},t._processAction=function(e){}})});<script>
        document.querySelectorAll('.github-emoji')
          .forEach(el => {
            if (!el.dataset.src) { return; }
            const img = document.createElement('img');
            img.style = 'display:none !important;';
            img.src = el.dataset.src;
            img.addEventListener('error', () => {
              img.remove();
              el.style.color = 'inherit';
              el.style.backgroundImage = 'none';
              el.style.background = 'none';
            });
            img.addEventListener('load', () => {
              img.remove();
            });
            document.body.appendChild(img);
          });
      </script>