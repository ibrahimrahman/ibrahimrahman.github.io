!function(s){"use strict";function n(s){return new RegExp("(^|\\s+)"+s+"(\\s+|$)")}function a(s,n){var a=e(s,n)?c:t;a(s,n)}var e,t,c;"classList"in document.documentElement?(e=function(s,n){return s.classList.contains(n)},t=function(s,n){s.classList.add(n)},c=function(s,n){s.classList.remove(n)}):(e=function(s,a){return n(a).test(s.className)},t=function(s,n){e(s,n)||(s.className=s.className+" "+n)},c=function(s,a){s.className=s.className.replace(n(a)," ")}),s.classie={hasClass:e,addClass:t,removeClass:c,toggleClass:a,has:e,add:t,remove:c,toggle:a}}(window);
//# sourceMappingURL=classief488-dist.js.map