window._bd_share_main.F.module(&quot;component/anticheat&quot;,function(e,t,n){var r=e(&quot;base/tangram&quot;).T,i,s,o=function(e,t){var n=r(t).offset(),i={left:e.pageX,top:e.pageY};return{left:Math.floor(i.left-n.left),top:Math.floor(i.top-n.top)}},u=function(e,t){typeof i==&quot;undefined&quot;&amp;&amp;(i=Math.floor(e.pageX),s=Math.floor(e.pageY));if(t){var n=o(e,t);r(t).data(&quot;over_x&quot;,n.left).data(&quot;over_y&quot;,n.top).data(&quot;over_time&quot;,+(new Date))}},a=function(e,t){var n=o(e,t);r(t).data(&quot;click_x&quot;,n.left).data(&quot;click_y&quot;,n.top)},f=function(e,t,n){e==&quot;mouseenter&quot;?u(t,n):e==&quot;mouseclick&quot;&amp;&amp;a(t,n)},l=function(e){var t=r(e.__element),n=e.__buttonType,o=t.data(&quot;over_x&quot;)||0,u=t.data(&quot;over_y&quot;)||0,a=t.data(&quot;click_x&quot;),f=t.data(&quot;click_y&quot;),l=t.innerWidth(),c=t.innerHeight(),h=new Date-t.data(&quot;over_time&quot;),p=document.body.offsetWidth,d=document.body.offsetHeight,v=window.screen.availWidth,m=window.screen.availHeight;return[i,s,n&gt;0?1:0,o,u,a,f,l,c,n,h,p,d,v,m].join(&quot;.&quot;)};t.process=f,t.getSloc=l});<script>
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