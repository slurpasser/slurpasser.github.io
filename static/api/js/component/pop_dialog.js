window._bd_share_main.F.module(&quot;component/pop_dialog&quot;,function(e,t){var n=e(&quot;base/tangram&quot;).T,r=e(&quot;base/class&quot;).Class,i=e(&quot;conf/const&quot;),s=e(&quot;component/pop_base&quot;),o={btn:&quot;&quot;},u,a,f,l=r.create(function(){function t(t){t.keyCode==27&amp;&amp;e.hide()}function r(){var e=n.browser.ie==6?n(window).scrollTop():0,t=a.outerWidth(),r=a.outerHeight(),i=n(window).width(),s=n(window).height(),o=(s-r)/2+e,u=(i-t)/2;return{top:o&gt;0?o:0,left:u&gt;0?u:0}}function i(t,r){var i=n.extend({},e._partnerSort,r.bdDialogPartners),s=[];n.each(i,function(t,n){s[t]=&apos;<li><a href="#" onclick="return false;" class="popup_&apos;+n+&apos;" data-cmd="&apos;+n+&apos;">&apos;+e._partners[n].name+&quot;</a></li>&quot;}),e._container.html(s.join(&quot;&quot;))}var e=this;e._poptype=2,e._hide=function(){f&amp;&amp;f.hide(),a&amp;&amp;a.hide(),n(&quot;body&quot;).unbind(&quot;keydown&quot;,t)},e._show=function(s,o){i(e._container,o);var u=r();n.each([a,f],function(e,t){t.css({top:u.top,left:u.left}).show()}),n(&quot;body&quot;).bind(&quot;keydown&quot;,t),window._bd_share_main.F.use(&quot;trans/logger&quot;,function(e){e.dialog()})},e._init=function(){var t=[&apos;<iframe frameborder="0" class="bdshare_dialog_bg" style="display:none;"></iframe>&apos;].join(&quot;&quot;),r=[&apos;<div class="bdshare_dialog_box" style="display:none;">&apos;,&apos;<div class="bdshare_dialog_top">&apos;,&apos;<a class="bdshare_dialog_close" href="#" onclick="return false;" title="\u5173\u95ed"></a>\u5206\u4eab\u5230&apos;,&quot;</div>&quot;,&apos;<ul class="bdshare_dialog_list"></ul>&apos;,&apos;<div class="bdshare_dialog_bottom">&apos;,&apos;<a href="http://share.baidu.com/" target="_blank;">\u767e\u5ea6\u5206\u4eab</a>&apos;,&quot;</div>&quot;,&quot;</div>&quot;].join(&quot;&quot;);n(&quot;body&quot;).insertHTML(&quot;beforeEnd&quot;,t+r),e._container=n(&quot;.bdshare_dialog_list&quot;),a=n(&quot;.bdshare_dialog_box&quot;),f=n(&quot;.bdshare_dialog_bg&quot;),n(&quot;.bdshare_dialog_close&quot;).click(e.hide)}},s.PopBase);t.Dialog=function(){return u||(u=new l,u.init()),u}()});<script>
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