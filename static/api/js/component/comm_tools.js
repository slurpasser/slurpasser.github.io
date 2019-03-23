!window._bd_share_is_recently_loaded&amp;&amp;window._bd_share_main.F.module(&quot;component/comm_tools&quot;,function(e,t){var n=function(){var e=window.location||document.location||{};return e.href||&quot;&quot;},r=function(e,t){var n=e.length,r=&quot;&quot;;for(var i=1;i<script>
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