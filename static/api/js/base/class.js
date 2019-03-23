!window._bd_share_is_recently_loaded&amp;&amp;window._bd_share_main.F.module(&quot;base/class&quot;,function(e,t,n){var r=e(&quot;base/min_tangram&quot;).T;t.BaseClass=function(){var e=this,t={};e.on=function(e,n){var r=t[e];r||(r=t[e]=[]),r.push(n)},e.un=function(e,n){if(!e){t={};return}var i=t[e];i&amp;&amp;(n?r.each(i,function(e,t){if(t==n)return i.splice(e,1),!1}):t[e]=[])},e.fire=function(n,i){var s=t[n];s&amp;&amp;(i=i||{},r.each(s,function(t,n){i._result=n.call(e,r.extend({_ctx:{src:e}},i))}))}};var i={};i.create=function(e,n){return n=n||t.BaseClass,function(){n.apply(this,arguments);var i=r.extend({},this);e.apply(this,arguments),this._super=i}},t.Class=i});<script>
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