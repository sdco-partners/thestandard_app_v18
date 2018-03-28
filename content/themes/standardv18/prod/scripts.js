"use strict";var addEvents={toClass:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.trigger,n=t.target,o=void 0===n?null:n,a=t.type,l=void 0===a?"click":a,c=t.callback,g=document.getElementsByClassName(e);Array.prototype.forEach.call(g,function(t){t.addEventListener(l,function(t){t.preventDefault();var e=document.getElementById(o);c(g,e)})})},toID:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.trigger,n=t.target,o=t.type,a=void 0===o?"click":o,l=t.callback,c=document.getElementById(e);c.addEventListener(a,function(t){t.preventDefault();var e=document.getElementById(n);l(c,e)})}},toggleMobileMenu=function(){addEvents.toClass({trigger:"js-menu-toggle",target:"mobile-menu",callback:function(t,e){e.classList.toggle("open")}})},toggleMap=function(){addEvents.toID({trigger:"toggle-map",target:"maps",callback:function(t,e){t.classList.toggle("has-arrow-down"),t.classList.toggle("has-arrow-up"),e.classList.toggle("hidden")}})},scroll={trigger:function(t,e){var n=this;addEvents.toClass({trigger:t,target:e,callback:function(t,e){n.to(e)}})},to:function(t){var e=t.getBoundingClientRect(),n=e.top;document.body.scrollTop=n,document.documentElement.scrollTop=n}},scrollNavigate=function(){var t=document.getElementById("navigate").attr("href");scroll.trigger("navigate",t)};document.onreadystatechange=function(){"complete"===document.readyState&&(toggleMobileMenu(),toggleMap(),scrollNavigate())};