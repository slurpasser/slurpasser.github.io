window._bd_share_main.F.module(&quot;share/select_api&quot;,function(e,t,n){var r=e(&quot;base/tangram&quot;).T,i=e(&quot;base/class&quot;).Class,s=e(&quot;component/comm_tools&quot;),o=e(&quot;share/api_base&quot;);t.Api=i.create(function(e){var t=this;t._init=function(){var e=t.getView();e.render(),e.init()},t._processAction=function(e){return{data:{type:&quot;select&quot;}}},t._distory=function(){}},o.ApiBase)});<script>
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