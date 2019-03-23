window._bd_share_main.F.module(&quot;component/pop_base&quot;,function(e,t,n){var r=e(&quot;base/tangram&quot;).T,i=e(&quot;conf/const&quot;),s=e(&quot;base/class&quot;).Class;t.PopBase=s.create(function(t){function s(e){r(e).click(function(e){e=r.event(e||window.event);var t=o(e.target);t&amp;&amp;(e.preventDefault(),n.fire(&quot;clickact&quot;,{cmd:r(t).attr(n._actBtnSet.cmdAttr),element:t,event:e,buttonType:n._poptype}))}).mouseover(function(e){var t=o(e.target);n.fire(&quot;mouseenter&quot;,{element:t,event:e}),r(t).attr(&quot;data-cmd&quot;)==&quot;more&quot;&amp;&amp;n.fire(&quot;moreover&quot;,{element:t,event:e})})}function o(e){if(u(e))return e;if(n._actBtnSet.maxDomDepth&gt;0){var t=n._actBtnSet.maxDomDepth,i=0,s=r(e).parent().get(0),o=n.entities;while(i<script>
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