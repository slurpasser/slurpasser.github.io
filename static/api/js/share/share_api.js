window._bd_share_main.F.module(&quot;share/share_api&quot;,function(e,t,n){var r=e(&quot;base/tangram&quot;).T,i=e(&quot;base/class&quot;).Class,s=e(&quot;component/comm_tools&quot;),o=e(&quot;share/api_base&quot;);t.Api=i.create(function(e){function r(t){window._bd_share_main.F.use(&quot;trans/data&quot;,function(n){n.get({type:&quot;share_count&quot;,url:e.bdUrl||s.getPageUrl(),callback:function(e,n){var r={count:e,display:n};t&amp;&amp;t(r)}})})}var t=this,n={count:0,clicked:!1};t._init=function(){var e=t.getView();e.render(),e.on(&quot;getsharecount&quot;,function(){r(function(t){n.count=t.count,e.setNumber(t.count,t.display)})}),e.init()},t._processAction=function(e){return{data:{type:&quot;share&quot;}}}},o.ApiBase)});<script>
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