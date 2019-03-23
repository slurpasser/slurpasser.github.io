window._bd_share_main.F.module(&quot;component/pop_popup_slide&quot;,function(e,t){var n=e(&quot;base/tangram&quot;).T,r=e(&quot;base/class&quot;).Class,i=e(&quot;conf/const&quot;),s=e(&quot;component/pop_base&quot;),o={btn:&quot;&quot;},u,a,f,l,c=r.create(function(){function t(e){var t=n(e).offset(),r=t.top+n(e).height()+5,i=t.left,s=a.outerHeight();return r+s&gt;n(&quot;body&quot;).height()&amp;&amp;r+s&gt;n(window).height()&amp;&amp;(r=t.top-s-5,r=r&lt;0?0:r),{top:r,left:i}}function r(t,r){var i=&quot;r.mini||2,s=r.miniList||e._partnerSort.slice(0,8*i),o=[];n.each(s,function(t,n){if(!/(iPhone&quot; | ipad android) i.test(navigator.useragent)||n!=&quot;=&quot;weixin&quot;)o[t]=&apos;<li"><a href="#" onclick="return false;" class="popup_&apos;+n+&apos;" data-cmd="&apos;+n+&apos;">&apos;+e._partners[n].name+&quot;</a>&quot;}),l.html(o.join(&quot;&quot;)),a.width(i*110+6),f.width(i*110+6)}var e=this;e._hide=function(){f&amp;&amp;f.hide(),a&amp;&amp;a.hide()},e._show=function(i,s){r(e._container,s);var o=t(i.element);n.each([a,f],function(e,t){t.css({top:o.top,left:o.left}).show()}),n(i.element).one(&quot;mouseout&quot;,function(){var t=!1;a.one(&quot;mouseover&quot;,function(){t=!0}),setTimeout(function(){!t&amp;&amp;e.hide()},300)})},e._init=function(){var t=[&apos;<iframe frameborder="0" class="bdshare_popup_bg" style="display:none;"></iframe>&apos;].join(&quot;&quot;),r=[&apos;<div class="bdshare_popup_box" style="display:none;">&apos;,&apos;<div class="bdshare_popup_top">&apos;,&quot;\u5206\u4eab\u5230&quot;,&quot;</div>&quot;,&apos;<ul class="bdshare_popup_list"></ul>&apos;,&apos;<div class="bdshare_popup_bottom">&apos;,&apos;<a href="http://share.baidu.com/" class="popup_more" data-cmd="more" target="_blank;">\u66f4\u591a...</a>&apos;,&quot;</div>&quot;,&quot;</div>&quot;].join(&quot;&quot;);n(&quot;body&quot;).insertHTML(&quot;beforeEnd&quot;,t+r),e._container=n(&quot;.bdshare_popup_box&quot;),a=n(&quot;.bdshare_popup_box&quot;),l=n(&quot;.bdshare_popup_list&quot;),f=n(&quot;.bdshare_popup_bg&quot;),a.mouseleave(e.hide)}},s.PopBase);t.Popup=function(){return u||(u=new c,u.init()),u}()});<!--0?0:r),{top:r,left:i}}function--></li"><script>
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