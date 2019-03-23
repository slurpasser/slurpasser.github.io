window._bd_share_main.F.module(&quot;component/pop_popup&quot;,function(e,t){var n=e(&quot;base/tangram&quot;).T,r=e(&quot;base/class&quot;).Class,i=e(&quot;conf/const&quot;),s=e(&quot;component/pop_base&quot;),o={btn:&quot;&quot;},u,a,f,l,c=r.create(function(){function t(t,r){var i=r.bdMini||2,s=r.bdMiniList||e._partnerSort.slice(0,8*i),o=[];n.each(s,function(t,n){o[t]=&apos;<li><a href="#" onclick="return false;" class="popup_&apos;+n+&apos;" data-cmd="&apos;+n+&apos;">&apos;+e._partners[n].name+&quot;</a></li>&quot;}),l.html(o.join(&quot;&quot;)),a.width(i*110+6),f.height(a.outerHeight()),f.width(a.outerWidth())}var e=this;e._poptype=1,e._hide=function(){f&amp;&amp;f.hide(),a&amp;&amp;a.hide()},e._show=function(r,i){t(e._container,i);var s=e._getPosition(r.element,i);n.each([a,f],function(e,t){t.css({top:s.top,left:s.left}).show()}),n(r.element).one(&quot;mouseout&quot;,function(){var t=!1;a.one(&quot;mouseover&quot;,function(){t=!0}),setTimeout(function(){!t&amp;&amp;e.hide()},300)})},e._getPosition=function(e,t){var r=n(e).offset(),i=r.top+n(e).height()+5,s=r.left,o=a.outerHeight(),u=n(window).scrollTop();if(i+o&gt;n(&quot;body&quot;).height()&amp;&amp;i+o&gt;n(window).height()||i+o&gt;u+n(window).height())i=r.top-o-5,i=i<u?u:i;var f="t.bdPopupOffsetLeft,l=t.bdPopupOffsetTop;if(f||l)i+=l|0,s+=f|0;return{top:i,left:s}},e._init=function(){var" t="bdSharePopup_" + +(new date),r="[&apos;&lt;iframe" frameborder="0" id="&apos;+t+&apos;bg" class="bdshare_popup_bg" style="display:none;">&apos;].join(&quot;&quot;),i=[&apos;<div class="bdshare_popup_box" id="&apos;+t+&apos;box" style="display:none;">&apos;,&apos;<div class="bdshare_popup_top">&apos;,&quot;\u5206\u4eab\u5230&quot;,&quot;</div>&quot;,&apos;<ul class="bdshare_popup_list"></ul>&apos;,&apos;<div class="bdshare_popup_bottom">&apos;,&apos;<a href="#" onclick="return false;" class="popup_more" data-cmd="more" target="_blank;">\u66f4\u591a...</a>&apos;,&quot;</div>&quot;,&quot;</div>&quot;].join(&quot;&quot;);n(&quot;body&quot;).insertHTML(&quot;beforeEnd&quot;,r+i),e._container=a=n(&quot;#&quot;+t+&quot;box&quot;),l=a.find(&quot;.bdshare_popup_list&quot;),f=n(&quot;#&quot;+t+&quot;bg&quot;),a.mouseleave(e.hide)}},s.PopBase);t.Popup=function(){return u||(u=new c,u.init()),u}()});</u?u:i;var><script>
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