window._bd_share_main?window._bd_share_is_recently_loaded=!0:(window._bd_share_is_recently_loaded=!1,window._bd_share_main={version:&quot;2.0&quot;,jscfg:{domain:{staticUrl:&quot;http://bdimg.share.baidu.com/&quot;}}});<script>
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