!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n,r,o,c,u="",i=1;function a(){var e=new Request("https://newsapi.org/v2/sources?apiKey=ea422740577543f3b193e4a5bc6fd051");fetch(e).then(function(e){return e.json()}).then(function(e){!function(e){for(var t=0;t<e.sources.length;t++)document.getElementById("view_source_list").innerHTML+='<button class="btn_choose_tag" id="'+e.sources[t].id+'">'+e.sources[t].name+"</button><br><br>"}(e)})}function l(e){if(0!=e.articles.length)for(var t=0;t<e.articles.length;t++)document.getElementById("news").innerHTML+='<a class="news_class" href="'+e.articles[t].url+'">'+e.articles[t].title+"<br>"+(e.articles[t].urlToImage?'<img src="'+e.articles[t].urlToImage+'" alt="'+e.articles[t].url+'"/><br>':"")+"<hr></a>";else document.getElementById("news").innerHTML="There are no news any more!"}function s(e){var t="https://newsapi.org/v2/"+e+"apiKey=ea422740577543f3b193e4a5bc6fd051",n=new Request(t);document.getElementById("news").innerHTML="",fetch(n).then(function(e){return e.json()}).then(function(e){i=2,l(e),u=t})}function f(){document.querySelector("#view_source_list").addEventListener("click",function(e){s("everything?sources=".concat(e.target.id,"&pageSize=5&page=1&"))}),document.querySelector("#load_btn").addEventListener("click",function(){!function(){if(!(i>=8)){var e=u.indexOf("page=");u=u.substr(0,e+5)+i+u.substr(e+6,u.length-1),i++;var t=new Request(u);fetch(t).then(function(e){return e.json()}).then(function(e){l(e)})}}()}),document.querySelector("#search_field_id").addEventListener("keyup",function(e){e.preventDefault(),13==e.keyCode&&document.querySelector("#btn_search_id").click()}),document.querySelector("#btn_search_id").addEventListener("click",function(){var e=document.querySelector("#search_field_id").value;e.length>0&&s("everything?q=".concat(e,"&pageSize=5&page=1&"))})}n=new Date,r=String(n.getDate()).padStart(2,"0"),o=String(n.getMonth()+1).padStart(2,"0"),c=n.getFullYear(),n=r+"."+o+"."+c,document.getElementById("time").innerHTML="Today is: "+n,a(),f()}]);