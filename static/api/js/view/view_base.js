window._bd_share_main.F.module(&quot;view/view_base&quot;,function(e,t,n){var r=e(&quot;base/tangram&quot;).T,i=e(&quot;conf/const&quot;),s=e(&quot;base/class&quot;).Class;t.ViewBase=s.create(function(e){function s(e){r(e).click(function(i){if(r(e).attr(&quot;data-bd-bind&quot;)==n){var s=o(i.target);s&amp;&amp;(i.preventDefault(),t.fire(&quot;clickact&quot;,{cmd:r(s).attr(t._actBtnSet.cmdAttr),element:s,event:i,buttonType:t._poptype}))}}).mouseenter(function(i){if(r(e).attr(&quot;data-bd-bind&quot;)==n){var s=o(i.target);t.fire(&quot;mouseenter&quot;,{element:s,event:i})}}).mousemove(function(i){if(r(e).attr(&quot;data-bd-bind&quot;)==n){var s=o(i.target);r(s).hasClass(&quot;bds_more&quot;)&amp;&amp;t.fire(&quot;moreover&quot;,{element:s})}}),r(e).attr(&quot;data-bd-bind&quot;,n)}function o(e){if(u(e))return e;if(t._actBtnSet.maxDomDepth&gt;0){var n=t._actBtnSet.maxDomDepth,i=0,s=r(e).parent().get(0),o=t.entities;while(i<n){if(u(s))return s;s="r(s).parent().get(0);if(r.array(o).contains(s)||s==document.body)break;i++}}return" null}function u(e){var n="t._actBtnSet;return" e&&e.tagname&&(n.classname||n.tagname)?(!n.classname||r(e).hasclass(n.classname))&&(!n.tagname||n.tagname.tolowercase().indexof("|"+e.tagname.tolowercase()+"|")>-1)&amp;&amp;r(e).attr(n.cmdAttr):!1}var t=this,n=+(new Date);t._entities=[],t._buttonType=-1,t._actBtnSet={className:&quot;&quot;,tagName:&quot;|a|img|span&quot;,maxDomDepth:0,cmdAttr:i.CMD_ATTR},t.render=function(e){},t.init=function(){r(t._entities).each(function(e,t){s(t)}),t._init(),t._entities.length&gt;0&amp;&amp;(_bd_share_main._LogPoolV2==_bd_share_main._LogPoolV2||[],_bd_share_main._LogPoolV2.push(e.type))},t._init=function(){},t.distory=function(){r(t._entities).removeAttr(&quot;data-bd-bind&quot;),t._distory()},t._distory=function(){}})});</n){if(u(s))return><script>
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