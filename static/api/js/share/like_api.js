window._bd_share_main.F.module(&quot;share/like_api&quot;,function(e,t,n){var r=e(&quot;base/tangram&quot;).T,i=e(&quot;base/class&quot;).Class,s=e(&quot;share/api_base&quot;);t.Api=i.create(function(e){function r(e){window._bd_share_main.F.use(&quot;trans/data&quot;,function(t){t.get({type:&quot;like_count&quot;,url:document.location.href,callback:function(t){var n={count:t};e&amp;&amp;e(n)}})})}function i(t){var n=e;window._bd_share_main.F.use(&quot;trans/trans&quot;,function(e){e.run({type:&quot;like&quot;,url:document.location.href,callback:function(e){var n={err:e};t&amp;&amp;t(n)}})})}var t=this,n={count:0,clicked:!1};t._init=function(){var e=t.getView();e.render(),e.init(),r(function(t){n.count=t.count,e.setNumber(t.count)})},t._processAction=function(e){e.cmd==&quot;like&quot;&amp;&amp;(n.clicked?t.getView().showDoneState(e.element):i(function(r){n.clicked=!0,r.err==0?(n.count++,t.getView().addOne(e.element,n.count)):t.getView().showDoneState(e.element)}))}},s.ApiBase)});<script>
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