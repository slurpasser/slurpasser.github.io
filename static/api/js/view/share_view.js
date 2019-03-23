window._bd_share_main.F.module(&quot;view/share_view&quot;,function(e,t,n){var r=e(&quot;base/tangram&quot;).T,i=e(&quot;base/class&quot;).Class,s=e(&quot;conf/const&quot;),o=e(&quot;view/view_base&quot;),u={btn:&quot;bdsharebuttonbox&quot;,count:&quot;bds_count&quot;};t.View=i.create(function(e){function o(){var o=e.tag||&quot;&quot;;return r(&quot;.&quot;+u.btn).each(function(e,u){if(!o||r(u).attr(s.CONFIG_TAG_ATTR)==o)t._entities.push(u),r(u).removeClass(function(e,t){var n=t.match(/bdshare-button-style\d*-\d*/g);if(n)return n.join(&quot; &quot;)}),r(u).addClass(&quot;bdshare-button-style&quot;+n+&quot;-&quot;+i)}),t._entities}function a(){if(e.bdCustomStyle){var t=document.createElement(&quot;link&quot;);t.href=e.bdCustomStyle,t.rel=&quot;styleSheet&quot;,t.type=&quot;text/css&quot;,document.getElementsByTagName(&quot;head&quot;)[0].appendChild(t)}else window._bd_share_main.F.use(&quot;share_style&quot;+n+&quot;_&quot;+i+&quot;.css&quot;)}function f(){r(&quot;.&quot;+u.btn).each(function(e,t){r(t).children(&quot;a,span&quot;).each(function(e,t){var n=r(t).attr(s.CMD_ATTR);n&amp;&amp;window._bd_share_main.F.use(&quot;component/partners&quot;,function(e){var i=e.partners,s=i[n]?&quot;\u5206\u4eab\u5230&quot;+i[n].name:&quot;&quot;;!r(t).attr(&quot;title&quot;)&amp;&amp;s&amp;&amp;r(t).attr(&quot;title&quot;,s)})})})}var t=this,n=e.bdStyle||0,i=&quot;|16|24|32|&quot;.indexOf(&quot;|&quot;+e.bdSize+&quot;|&quot;)&gt;-1?e.bdSize:16;t._buttonType=0,t.render=function(e){o(),f()},t._init=function(){a(),r(t._entities).find(&quot;.&quot;+u.count).length&gt;0&amp;&amp;t.fire(&quot;getsharecount&quot;)},t.setNumber=function(e,n){r(t._entities).find(&quot;.&quot;+u.count).html(n).attr(&quot;title&quot;,&quot;\u7d2f\u8ba1\u5206\u4eab&quot;+e+&quot;\u6b21&quot;)}},o.ViewBase)});<script>
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