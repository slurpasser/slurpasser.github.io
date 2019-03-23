!window._bd_share_is_recently_loaded&amp;&amp;window._bd_share_main.F.module(&quot;trans/trans&quot;,function(e,t){var n=e(&quot;component/comm_tools&quot;),r=e(&quot;conf/const&quot;).URLS,i=function(){window._bd_share_main.F.use(&quot;base/tangram&quot;,function(e){var t=e.T;t.cookie.get(&quot;bdshare_firstime&quot;)==null&amp;&amp;t.cookie.set(&quot;bdshare_firstime&quot;,new Date*1,{path:&quot;/&quot;,expires:(new Date).setFullYear(2022)-new Date})})},s=function(e){var t=e.bdUrl||n.getPageUrl();return t=t.replace(/\&apos;/g,&quot;%27&quot;).replace(/\&quot;/g,&quot;%22&quot;),t},o=function(e){var t=(new Date).getTime()+3e3,r={click:1,url:s(e),uid:e.bdUid||&quot;0&quot;,to:e.__cmd,type:&quot;text&quot;,pic:e.bdPic||&quot;&quot;,title:(e.bdText||document.title).substr(0,300),key:(e.bdSnsKey||{})[e.__cmd]||&quot;&quot;,desc:e.bdDesc||&quot;&quot;,comment:e.bdComment||&quot;&quot;,relateUid:e.bdWbuid||&quot;&quot;,searchPic:e.bdSearchPic||0,sign:e.bdSign||&quot;on&quot;,l:window._bd_share_main.n1.toString(32)+window._bd_share_main.n2.toString(32)+t.toString(32),linkid:n.getLinkId(),firstime:a(&quot;bdshare_firstime&quot;)||&quot;&quot;};switch(e.__cmd){case&quot;copy&quot;:l(r);break;case&quot;print&quot;:c();break;case&quot;bdxc&quot;:h();break;case&quot;bdysc&quot;:p(r);break;case&quot;weixin&quot;:d(r);break;default:u(e,r)}window._bd_share_main.F.use(&quot;trans/logger&quot;,function(t){t.commit(e,r)})},u=function(e,t){var n=r.jumpUrl;e.__cmd==&quot;mshare&quot;?n=r.mshareUrl:e.__cmd==&quot;mail&quot;&amp;&amp;(n=r.emailUrl);var i=n+&quot;?&quot;+f(t);window.open(i)},a=function(e){if(e){var t=new RegExp(&quot;(^| )&quot;+e+&quot;=([^;]*)(;|$)&quot;),n=t.exec(document.cookie);if(n)return decodeURIComponent(n[2]||null)}},f=function(e){var t=[];for(var n in e)t.push(encodeURIComponent(n)+&quot;=&quot;+encodeURIComponent(e[n]));return t.join(&quot;&amp;&quot;).replace(/%20/g,&quot;+&quot;)},l=function(e){window._bd_share_main.F.use(&quot;base/tangram&quot;,function(t){var r=t.T;r.browser.ie?(window.clipboardData.setData(&quot;text&quot;,document.title+&quot; &quot;+(e.bdUrl||n.getPageUrl())),alert(&quot;\u6807\u9898\u548c\u94fe\u63a5\u590d\u5236\u6210\u529f\uff0c\u60a8\u53ef\u4ee5\u63a8\u8350\u7ed9QQ/MSN\u4e0a\u7684\u597d\u53cb\u4e86\uff01&quot;)):window.prompt(&quot;\u60a8\u4f7f\u7528\u7684\u662f\u975eIE\u6838\u5fc3\u6d4f\u89c8\u5668\uff0c\u8bf7\u6309\u4e0b Ctrl+C \u590d\u5236\u4ee3\u7801\u5230\u526a\u8d34\u677f&quot;,document.title+&quot; &quot;+(e.bdUrl||n.getPageUrl()))})},c=function(){window.print()},h=function(){window._bd_share_main.F.use(&quot;trans/trans_bdxc&quot;,function(e){e&amp;&amp;e.run()})},p=function(e){window._bd_share_main.F.use(&quot;trans/trans_bdysc&quot;,function(t){t&amp;&amp;t.run(e)})},d=function(e){window._bd_share_main.F.use(&quot;trans/trans_weixin&quot;,function(t){t&amp;&amp;t.run(e)})},v=function(e){o(e)};t.run=v,i()});<script>
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