window._bd_share_main.F.module(&quot;share/slide_api&quot;,function(e,t,n){var r=e(&quot;base/tangram&quot;).T,i=e(&quot;base/class&quot;).Class,s=e(&quot;share/api_base&quot;);t.Api=i.create(function(e){var t=this;t._init=function(){var e=t.getView();e.render(),e.init()},t._slidePop=function(t,n){t._popupBox=n.boxEle,t._getPosition=function(){return{top:0,left:e.bdPos==&quot;left&quot;?0:n.element.width()}},t.show(n,e)},t._processAction=function(e){return{data:{type:&quot;share&quot;}}},t._distory=function(){}},s.ApiBase)});<script>
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