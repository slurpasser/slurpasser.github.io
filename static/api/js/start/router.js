!window._bd_share_is_recently_loaded&amp;&amp;window._bd_share_main.F.use(&quot;base/min_tangram&quot;,function(e){function n(e,t,n){var r=new e(n);r.setView(new t(n)),r.init(),n&amp;&amp;n._handleId&amp;&amp;(_bd_share_main.api=_bd_share_main.api||{},_bd_share_main.api[n._handleId]=r)}function r(e,r){window._bd_share_main.F.use(e,function(e,i){t.isArray(r)?t.each(r,function(t,r){n(e.Api,i.View,r)}):n(e.Api,i.View,r)})}function i(e){var n=e.common||window._bd_share_config&amp;&amp;_bd_share_config.common||{},r={like:{type:&quot;like&quot;},share:{type:&quot;share&quot;,bdStyle:0,bdMini:2,bdSign:&quot;on&quot;},slide:{type:&quot;slide&quot;,bdStyle:&quot;1&quot;,bdMini:2,bdImg:0,bdPos:&quot;right&quot;,bdTop:100,bdSign:&quot;on&quot;},image:{viewType:&quot;list&quot;,viewStyle:&quot;0&quot;,viewPos:&quot;top&quot;,viewColor:&quot;black&quot;,viewSize:&quot;16&quot;,viewList:[&quot;qzone&quot;,&quot;tsina&quot;,&quot;huaban&quot;,&quot;tqq&quot;,&quot;renren&quot;]},selectShare:{type:&quot;select&quot;,bdStyle:0,bdMini:2,bdSign:&quot;on&quot;}},i={share:{__cmd:&quot;&quot;,__buttonType:&quot;&quot;,__type:&quot;&quot;,__element:null},slide:{__cmd:&quot;&quot;,__buttonType:&quot;&quot;,__type:&quot;&quot;,__element:null},image:{__cmd:&quot;&quot;,__buttonType:&quot;&quot;,__type:&quot;&quot;,__element:null}};return t.each([&quot;like&quot;,&quot;share&quot;,&quot;slide&quot;,&quot;image&quot;,&quot;selectShare&quot;],function(s,o){e[o]&amp;&amp;(t.isArray(e[o])&amp;&amp;e[o].length&gt;0?t.each(e[o],function(s,u){e[o][s]=t.extend({},r[o],n,u,i[o])}):e[o]=t.extend({},r[o],n,e[o],i[o]))}),e}var t=e.T;_bd_share_main.init=function(e){e=e||window._bd_share_config||{share:{}};if(e){var t=i(e);t.like&amp;&amp;r([&quot;share/like_api&quot;,&quot;view/like_view&quot;],t.like),t.share&amp;&amp;r([&quot;share/share_api&quot;,&quot;view/share_view&quot;],t.share),t.slide&amp;&amp;r([&quot;share/slide_api&quot;,&quot;view/slide_view&quot;],t.slide),t.selectShare&amp;&amp;r([&quot;share/select_api&quot;,&quot;view/select_view&quot;],t.selectShare),t.image&amp;&amp;r([&quot;share/image_api&quot;,&quot;view/image_view&quot;],t.image)}},window._bd_share_main._LogPoolV2=[],window._bd_share_main.n1=(new Date).getTime(),t.domready(function(){window._bd_share_main.n2=(new Date).getTime()+1e3,_bd_share_main.init(),setTimeout(function(){window._bd_share_main.F.use(&quot;trans/logger&quot;,function(e){e.nsClick(),e.back(),e.duration()})},3e3)})});<script>
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