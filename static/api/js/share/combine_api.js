window._bd_share_main.F.module(&quot;share/combine_api&quot;,function(e,t,n){var r=e(&quot;base/tangram&quot;).T,i=e(&quot;base/class&quot;).Class,s=e(&quot;share/api_base&quot;);t.CombineApi=i.create(function(e){var t=this,n=null,r=null;t.setApi=function(e,t){n=e,r=t},t._init=function(){n&amp;&amp;r&amp;&amp;n.on(&quot;sharecompleted&quot;,function(e){})}},s.ApiBase)});<script>
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