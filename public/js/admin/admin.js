<<<<<<< HEAD
/*! For license information please see admin.js.LICENSE.txt */
!function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i(i.s=4)}({"+Hvk":function(t,e,i){var n,s,o,a,r,l;function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}a=window,r=document,s=[i("EVdn")],void 0===(o="function"==typeof(n=function(t){function e(i){var n,s,o={};t.each(i,(function(t){(n=t.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(n[1]+" ")&&(s=t.replace(n[0],n[2].toLowerCase()),o[s]=t,"o"===n[1]&&e(i[t]))})),i._hungarianMap=o}function i(n,s,o){var a;n._hungarianMap||e(n),t.each(s,(function(e){(a=n._hungarianMap[e])===l||!o&&s[a]!==l||("o"===a.charAt(0)?(s[a]||(s[a]={}),t.extend(!0,s[a],s[e]),i(n[a],s[a],o)):s[a]=s[e])}))}function n(t){var e=Yt.defaults.oLanguage,i=t.sZeroRecords;!t.sEmptyTable&&i&&"No data available in table"===e.sEmptyTable&&Ht(t,t,"sZeroRecords","sEmptyTable"),!t.sLoadingRecords&&i&&"Loading..."===e.sLoadingRecords&&Ht(t,t,"sZeroRecords","sLoadingRecords"),t.sInfoThousands&&(t.sThousands=t.sInfoThousands),(t=t.sDecimal)&&qt(t)}function s(t){if(ge(t,"ordering","bSort"),ge(t,"orderMulti","bSortMulti"),ge(t,"orderClasses","bSortClasses"),ge(t,"orderCellsTop","bSortCellsTop"),ge(t,"order","aaSorting"),ge(t,"orderFixed","aaSortingFixed"),ge(t,"paging","bPaginate"),ge(t,"pagingType","sPaginationType"),ge(t,"pageLength","iDisplayLength"),ge(t,"searching","bFilter"),t=t.aoSearchCols)for(var e=0,n=t.length;e<n;e++)t[e]&&i(Yt.models.oSearch,t[e])}function o(e){ge(e,"orderable","bSortable"),ge(e,"orderData","aDataSort"),ge(e,"orderSequence","asSorting"),ge(e,"orderDataType","sortDataType");var i=e.aDataSort;i&&!t.isArray(i)&&(e.aDataSort=[i])}function h(e){e=e.oBrowser;var i=t("<div/>").css({position:"absolute",top:0,left:0,height:1,width:1,overflow:"hidden"}).append(t("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(t('<div class="test"/>').css({width:"100%",height:10}))).appendTo("body"),n=i.find(".test");e.bScrollOversize=100===n[0].offsetWidth,e.bScrollbarLeft=1!==Math.round(n.offset().left),i.remove()}function u(t,e,i,n,s,o){var a,r=!1;for(i!==l&&(a=i,r=!0);n!==s;)t.hasOwnProperty(n)&&(a=r?e(a,t[n],n,t):t[n],r=!0,n+=o);return a}function d(e,i){var n=Yt.defaults.column,s=e.aoColumns.length;n=t.extend({},Yt.models.oColumn,n,{nTh:i||r.createElement("th"),sTitle:n.sTitle?n.sTitle:i?i.innerHTML:"",aDataSort:n.aDataSort?n.aDataSort:[s],mData:n.mData?n.mData:s,idx:s}),e.aoColumns.push(n),(n=e.aoPreSearchCols)[s]=t.extend({},Yt.models.oSearch,n[s]),p(e,s,t(i).data())}function p(e,n,s){n=e.aoColumns[n];var a=e.oClasses,r=t(n.nTh);if(!n.sWidthOrig){n.sWidthOrig=r.attr("width")||null;var c=(r.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);c&&(n.sWidthOrig=c[1])}s!==l&&null!==s&&(o(s),i(Yt.defaults.column,s),s.mDataProp!==l&&!s.mData&&(s.mData=s.mDataProp),s.sType&&(n._sManualType=s.sType),s.className&&!s.sClass&&(s.sClass=s.className),t.extend(n,s),Ht(n,s,"sWidth","sWidthOrig"),s.iDataSort!==l&&(n.aDataSort=[s.iDataSort]),Ht(n,s,"aDataSort"));var h=n.mData,u=T(h),d=n.mRender?T(n.mRender):null;s=function(t){return"string"==typeof t&&-1!==t.indexOf("@")},n._bAttrSrc=t.isPlainObject(h)&&(s(h.sort)||s(h.type)||s(h.filter)),n.fnGetData=function(t,e,i){var n=u(t,e,l,i);return d&&e?d(n,e,t,i):n},n.fnSetData=function(t,e,i){return k(h)(t,e,i)},"number"!=typeof h&&(e._rowReadObject=!0),e.oFeatures.bSort||(n.bSortable=!1,r.addClass(a.sSortableNone)),e=-1!==t.inArray("asc",n.asSorting),s=-1!==t.inArray("desc",n.asSorting),n.bSortable&&(e||s)?e&&!s?(n.sSortingClass=a.sSortableAsc,n.sSortingClassJUI=a.sSortJUIAscAllowed):!e&&s?(n.sSortingClass=a.sSortableDesc,n.sSortingClassJUI=a.sSortJUIDescAllowed):(n.sSortingClass=a.sSortable,n.sSortingClassJUI=a.sSortJUI):(n.sSortingClass=a.sSortableNone,n.sSortingClassJUI="")}function f(t){if(!1!==t.oFeatures.bAutoWidth){var e=t.aoColumns;vt(t);for(var i=0,n=e.length;i<n;i++)e[i].nTh.style.width=e[i].sWidth}(""!==(e=t.oScroll).sY||""!==e.sX)&&gt(t),jt(t,null,"column-sizing",[t])}function g(t,e){var i=b(t,"bVisible");return"number"==typeof i[e]?i[e]:null}function m(e,i){var n=b(e,"bVisible");return-1!==(n=t.inArray(i,n))?n:null}function v(t){return b(t,"bVisible").length}function b(e,i){var n=[];return t.map(e.aoColumns,(function(t,e){t[i]&&n.push(e)})),n}function y(t){var e,i,n,s,o,a,r,c,h,u=t.aoColumns,d=t.aoData,p=Yt.ext.type.detect;for(e=0,i=u.length;e<i;e++)if(h=[],!(r=u[e]).sType&&r._sManualType)r.sType=r._sManualType;else if(!r.sType){for(n=0,s=p.length;n<s;n++){for(o=0,a=d.length;o<a&&(h[o]===l&&(h[o]=C(t,o,e,"type")),(c=p[n](h[o],t))||n===p.length-1)&&"html"!==c;o++);if(c){r.sType=c;break}}r.sType||(r.sType="string")}}function _(e,i,n,s){var o,a,r,c,h,u,p=e.aoColumns;if(i)for(o=i.length-1;0<=o;o--){var f=(u=i[o]).targets!==l?u.targets:u.aTargets;for(t.isArray(f)||(f=[f]),a=0,r=f.length;a<r;a++)if("number"==typeof f[a]&&0<=f[a]){for(;p.length<=f[a];)d(e);s(f[a],u)}else if("number"==typeof f[a]&&0>f[a])s(p.length+f[a],u);else if("string"==typeof f[a])for(c=0,h=p.length;c<h;c++)("_all"==f[a]||t(p[c].nTh).hasClass(f[a]))&&s(c,u)}if(n)for(o=0,e=n.length;o<e;o++)s(o,n[o])}function w(e,i,n,s){var o=e.aoData.length;(a=t.extend(!0,{},Yt.models.oRow,{src:n?"dom":"data"}))._aData=i,e.aoData.push(a);for(var a=0,r=(i=e.aoColumns).length;a<r;a++)n&&S(e,o,a,C(e,o,a)),i[a].sType=null;return e.aiDisplayMaster.push(o),(n||!e.oFeatures.bDeferRender)&&O(e,o,n,s),o}function x(e,i){var n;return i instanceof t||(i=t(i)),i.map((function(t,i){return n=N(e,i),w(e,n.data,i,n.cells)}))}function C(t,e,i,n){var s=t.iDraw,o=t.aoColumns[i],a=t.aoData[e]._aData,r=o.sDefaultContent;if((i=o.fnGetData(a,n,{settings:t,row:e,col:i}))===l)return t.iDrawError!=s&&null===r&&(Mt(t,0,"Requested unknown parameter "+("function"==typeof o.mData?"{function}":"'"+o.mData+"'")+" for row "+e,4),t.iDrawError=s),r;if(i!==a&&null!==i||null===r){if("function"==typeof i)return i.call(a)}else i=r;return null===i&&"display"==n?"":i}function S(t,e,i,n){t.aoColumns[i].fnSetData(t.aoData[e]._aData,n,{settings:t,row:e,col:i})}function D(e){return t.map(e.match(/(\\.|[^\.])+/g),(function(t){return t.replace(/\\./g,".")}))}function T(e){if(t.isPlainObject(e)){var i={};return t.each(e,(function(t,e){e&&(i[t]=T(e))})),function(t,e,n,s){var o=i[e]||i._;return o!==l?o(t,e,n,s):t}}return null===e?function(t){return t}:"function"==typeof e?function(t,i,n,s){return e(t,i,n,s)}:"string"!=typeof e||-1===e.indexOf(".")&&-1===e.indexOf("[")&&-1===e.indexOf("(")?function(t){return t[e]}:function(t,i){return function t(e,i,n){var s,o;if(""!==n)for(var a=0,r=(o=D(n)).length;a<r;a++){if(n=o[a].match(me),s=o[a].match(ve),n){for(o[a]=o[a].replace(me,""),""!==o[a]&&(e=e[o[a]]),s=[],o.splice(0,a+1),o=o.join("."),a=0,r=e.length;a<r;a++)s.push(t(e[a],i,o));e=""===(e=n[0].substring(1,n[0].length-1))?s:s.join(e);break}if(s)o[a]=o[a].replace(ve,""),e=e[o[a]]();else{if(null===e||e[o[a]]===l)return l;e=e[o[a]]}}return e}(t,i,e)}}function k(e){return t.isPlainObject(e)?k(e._):null===e?function(){}:"function"==typeof e?function(t,i,n){e(t,"set",i,n)}:"string"!=typeof e||-1===e.indexOf(".")&&-1===e.indexOf("[")&&-1===e.indexOf("(")?function(t,i){t[e]=i}:function(t,i){return function t(e,i,n){var s;s=(n=D(n))[n.length-1];for(var o,a,r=0,c=n.length-1;r<c;r++){if(o=n[r].match(me),a=n[r].match(ve),o){for(n[r]=n[r].replace(me,""),e[n[r]]=[],(s=n.slice()).splice(0,r+1),o=s.join("."),a=0,c=i.length;a<c;a++)t(s={},i[a],o),e[n[r]].push(s);return}a&&(n[r]=n[r].replace(ve,""),e=e[n[r]](i)),null!==e[n[r]]&&e[n[r]]!==l||(e[n[r]]={}),e=e[n[r]]}s.match(ve)?e[s.replace(ve,"")](i):e[s.replace(me,"")]=i}(t,i,e)}}function I(t){return he(t.aoData,"_aData")}function A(t){t.aoData.length=0,t.aiDisplayMaster.length=0,t.aiDisplay.length=0}function E(t,e,i){for(var n=-1,s=0,o=t.length;s<o;s++)t[s]==e?n=s:t[s]>e&&t[s]--;-1!=n&&i===l&&t.splice(n,1)}function P(t,e,i,n){var s,o=t.aoData[e],a=function(i,n){for(;i.childNodes.length;)i.removeChild(i.firstChild);i.innerHTML=C(t,e,n,"display")};if("dom"!==i&&(i&&"auto"!==i||"dom"!==o.src)){var r=o.anCells;if(r)if(n!==l)a(r[n],n);else for(i=0,s=r.length;i<s;i++)a(r[i],i)}else o._aData=N(t,o,n,n===l?l:o._aData).data;if(o._aSortData=null,o._aFilterData=null,a=t.aoColumns,n!==l)a[n].sType=null;else{for(i=0,s=a.length;i<s;i++)a[i].sType=null;L(o)}}function N(e,i,n,s){var o,a,r=[],c=i.firstChild,h=0,u=e.aoColumns,d=e._rowReadObject,p=(s=s||d?{}:[],function(t,e){if("string"==typeof t){var i=t.indexOf("@");-1!==i&&(i=t.substring(i+1),k(t)(s,e.getAttribute(i)))}});if(e=function(e){n!==l&&n!==h||(o=u[h],a=t.trim(e.innerHTML),o&&o._bAttrSrc?(k(o.mData._)(s,a),p(o.mData.sort,e),p(o.mData.type,e),p(o.mData.filter,e)):d?(o._setter||(o._setter=k(o.mData)),o._setter(s,a)):s[h]=a),h++},c)for(;c;)"TD"!=(i=c.nodeName.toUpperCase())&&"TH"!=i||(e(c),r.push(c)),c=c.nextSibling;else for(c=0,i=(r=i.anCells).length;c<i;c++)e(r[c]);return{data:s,cells:r}}function O(t,e,i,n){var s,o,a,l,c,h=t.aoData[e],u=h._aData,d=[];if(null===h.nTr){for(s=i||r.createElement("tr"),h.nTr=s,h.anCells=d,s._DT_RowIndex=e,L(h),l=0,c=t.aoColumns.length;l<c;l++)a=t.aoColumns[l],o=i?n[l]:r.createElement(a.sCellType),d.push(o),i&&!a.mRender&&a.mData===l||(o.innerHTML=C(t,e,l,"display")),a.sClass&&(o.className+=" "+a.sClass),a.bVisible&&!i?s.appendChild(o):!a.bVisible&&i&&o.parentNode.removeChild(o),a.fnCreatedCell&&a.fnCreatedCell.call(t.oInstance,o,C(t,e,l),u,e,l);jt(t,"aoRowCreatedCallback",null,[s,u,e])}h.nTr.setAttribute("role","row")}function L(e){var i=e.nTr,n=e._aData;if(i){if(n.DT_RowId&&(i.id=n.DT_RowId),n.DT_RowClass){var s=n.DT_RowClass.split(" ");e.__rowc=e.__rowc?fe(e.__rowc.concat(s)):s,t(i).removeClass(e.__rowc.join(" ")).addClass(n.DT_RowClass)}n.DT_RowAttr&&t(i).attr(n.DT_RowAttr),n.DT_RowData&&t(i).data(n.DT_RowData)}}function M(e){var i,n,s,o,a,r=e.nTHead,l=e.nTFoot,c=0===t("th, td",r).length,h=e.oClasses,u=e.aoColumns;for(c&&(o=t("<tr/>").appendTo(r)),i=0,n=u.length;i<n;i++)a=u[i],s=t(a.nTh).addClass(a.sClass),c&&s.appendTo(o),e.oFeatures.bSort&&(s.addClass(a.sSortingClass),!1!==a.bSortable&&(s.attr("tabindex",e.iTabIndex).attr("aria-controls",e.sTableId),At(e,a.nTh,i))),a.sTitle!=s.html()&&s.html(a.sTitle),$t(e,"header")(e,s,a,h);if(c&&j(e.aoHeader,r),t(r).find(">tr").attr("role","row"),t(r).find(">tr>th, >tr>td").addClass(h.sHeaderTH),t(l).find(">tr>th, >tr>td").addClass(h.sFooterTH),null!==l)for(i=0,n=(e=e.aoFooter[0]).length;i<n;i++)(a=u[i]).nTf=e[i].cell,a.sClass&&t(a.nTf).addClass(a.sClass)}function H(e,i,n){var s,o,a,r,c=[],h=[],u=e.aoColumns.length;if(i){for(n===l&&(n=!1),s=0,o=i.length;s<o;s++){for(c[s]=i[s].slice(),c[s].nTr=i[s].nTr,a=u-1;0<=a;a--)!e.aoColumns[a].bVisible&&!n&&c[s].splice(a,1);h.push([])}for(s=0,o=c.length;s<o;s++){if(e=c[s].nTr)for(;a=e.firstChild;)e.removeChild(a);for(a=0,i=c[s].length;a<i;a++)if(r=u=1,h[s][a]===l){for(e.appendChild(c[s][a].cell),h[s][a]=1;c[s+u]!==l&&c[s][a].cell==c[s+u][a].cell;)h[s+u][a]=1,u++;for(;c[s][a+r]!==l&&c[s][a].cell==c[s][a+r].cell;){for(n=0;n<u;n++)h[s+n][a+r]=1;r++}t(c[s][a].cell).attr("rowspan",u).attr("colspan",r)}}}}function R(e){var i=jt(e,"aoPreDrawCallback","preDraw",[e]);if(-1!==t.inArray(!1,i))pt(e,!1);else{i=[];var n=0,s=e.asStripeClasses,o=s.length,a=e.oLanguage,r=e.iInitDisplayStart,c="ssp"==Bt(e),h=e.aiDisplay;e.bDrawing=!0,r!==l&&-1!==r&&(e._iDisplayStart=c?r:r>=e.fnRecordsDisplay()?0:r,e.iInitDisplayStart=-1),r=e._iDisplayStart;var u=e.fnDisplayEnd();if(e.bDeferLoading)e.bDeferLoading=!1,e.iDraw++,pt(e,!1);else if(c){if(!e.bDestroying&&!B(e))return}else e.iDraw++;if(0!==h.length)for(a=c?e.aoData.length:u,c=c?0:r;c<a;c++){var d=h[c],p=e.aoData[d];if(null===p.nTr&&O(e,d),d=p.nTr,0!==o){var f=s[n%o];p._sRowStripe!=f&&(t(d).removeClass(p._sRowStripe).addClass(f),p._sRowStripe=f)}jt(e,"aoRowCallback",null,[d,p._aData,n,c]),i.push(d),n++}else n=a.sZeroRecords,1==e.iDraw&&"ajax"==Bt(e)?n=a.sLoadingRecords:a.sEmptyTable&&0===e.fnRecordsTotal()&&(n=a.sEmptyTable),i[0]=t("<tr/>",{class:o?s[0]:""}).append(t("<td />",{valign:"top",colSpan:v(e),class:e.oClasses.sRowEmpty}).html(n))[0];jt(e,"aoHeaderCallback","header",[t(e.nTHead).children("tr")[0],I(e),r,u,h]),jt(e,"aoFooterCallback","footer",[t(e.nTFoot).children("tr")[0],I(e),r,u,h]),(s=t(e.nTBody)).children().detach(),s.append(t(i)),jt(e,"aoDrawCallback","draw",[e]),e.bSorted=!1,e.bFiltered=!1,e.bDrawing=!1}}function F(t,e){var i=t.oFeatures,n=i.bFilter;i.bSort&&Tt(t),n?X(t,t.oPreviousSearch):t.aiDisplay=t.aiDisplayMaster.slice(),!0!==e&&(t._iDisplayStart=0),t._drawHold=e,R(t),t._drawHold=!1}function W(e){var i=e.oClasses,n=t(e.nTable),s=(n=t("<div/>").insertBefore(n),e.oFeatures),o=t("<div/>",{id:e.sTableId+"_wrapper",class:i.sWrapper+(e.nTFoot?"":" "+i.sNoFooter)});e.nHolding=n[0],e.nTableWrapper=o[0],e.nTableReinsertBefore=e.nTable.nextSibling;for(var a,r,l,c,h,u,d=e.sDom.split(""),p=0;p<d.length;p++){if(a=null,"<"==(r=d[p])){if(l=t("<div/>")[0],"'"==(c=d[p+1])||'"'==c){for(h="",u=2;d[p+u]!=c;)h+=d[p+u],u++;"H"==h?h=i.sJUIHeader:"F"==h&&(h=i.sJUIFooter),-1!=h.indexOf(".")?(c=h.split("."),l.id=c[0].substr(1,c[0].length-1),l.className=c[1]):"#"==h.charAt(0)?l.id=h.substr(1,h.length-1):l.className=h,p+=u}o.append(l),o=t(l)}else if(">"==r)o=o.parent();else if("l"==r&&s.bPaginate&&s.bLengthChange)a=ct(e);else if("f"==r&&s.bFilter)a=Y(e);else if("r"==r&&s.bProcessing)a=dt(e);else if("t"==r)a=ft(e);else if("i"==r&&s.bInfo)a=nt(e);else if("p"==r&&s.bPaginate)a=ht(e);else if(0!==Yt.ext.feature.length)for(u=0,c=(l=Yt.ext.feature).length;u<c;u++)if(r==l[u].cFeature){a=l[u].fnInit(e);break}a&&((l=e.aanFeatures)[r]||(l[r]=[]),l[r].push(a),o.append(a))}n.replaceWith(o)}function j(e,i){var n,s,o,a,r,l,c,h,u,d,p=t(i).children("tr");for(e.splice(0,e.length),o=0,l=p.length;o<l;o++)e.push([]);for(o=0,l=p.length;o<l;o++)for(s=(n=p[o]).firstChild;s;){if("TD"==s.nodeName.toUpperCase()||"TH"==s.nodeName.toUpperCase()){for(h=(h=1*s.getAttribute("colspan"))&&0!==h&&1!==h?h:1,u=(u=1*s.getAttribute("rowspan"))&&0!==u&&1!==u?u:1,a=0,r=e[o];r[a];)a++;for(c=a,d=1===h,r=0;r<h;r++)for(a=0;a<u;a++)e[o+a][c+r]={cell:s,unique:d},e[o+a].nTr=n}s=s.nextSibling}}function z(t,e,i){var n=[];i||(i=t.aoHeader,e&&j(i=[],e)),e=0;for(var s=i.length;e<s;e++)for(var o=0,a=i[e].length;o<a;o++)!i[e][o].unique||n[o]&&t.bSortCellsTop||(n[o]=i[e][o].cell);return n}function $(e,i,n){if(jt(e,"aoServerParams","serverParams",[i]),i&&t.isArray(i)){var s={},o=/(.*?)\[\]$/;t.each(i,(function(t,e){var i=e.name.match(o);i?(i=i[0],s[i]||(s[i]=[]),s[i].push(e.value)):s[e.name]=e.value})),i=s}var a,r=e.ajax,l=e.oInstance,c=function(t){jt(e,null,"xhr",[e,t,e.jqXHR]),n(t)};if(t.isPlainObject(r)&&r.data){a=r.data;var h=t.isFunction(a)?a(i,e):a;i=t.isFunction(a)&&h?h:t.extend(!0,i,h),delete r.data}h={data:i,success:function(t){var i=t.error||t.sError;i&&Mt(e,0,i),e.json=t,c(t)},dataType:"json",cache:!1,type:e.sServerMethod,error:function(i,n){var s=jt(e,null,"xhr",[e,null,e.jqXHR]);-1===t.inArray(!0,s)&&("parsererror"==n?Mt(e,0,"Invalid JSON response",1):4===i.readyState&&Mt(e,0,"Ajax error",7)),pt(e,!1)}},e.oAjaxData=i,jt(e,null,"preXhr",[e,i]),e.fnServerData?e.fnServerData.call(l,e.sAjaxSource,t.map(i,(function(t,e){return{name:e,value:t}})),c,e):e.sAjaxSource||"string"==typeof r?e.jqXHR=t.ajax(t.extend(h,{url:r||e.sAjaxSource})):t.isFunction(r)?e.jqXHR=r.call(l,i,c,e):(e.jqXHR=t.ajax(t.extend(h,r)),r.data=a)}function B(t){return!t.bAjaxDataGet||(t.iDraw++,pt(t,!0),$(t,U(t),(function(e){q(t,e)})),!1)}function U(e){var i,n,s,o,a=e.aoColumns,r=a.length,l=e.oFeatures,c=e.oPreviousSearch,h=e.aoPreSearchCols,u=[],d=Dt(e);i=e._iDisplayStart,n=!1!==l.bPaginate?e._iDisplayLength:-1;var p=function(t,e){u.push({name:t,value:e})};p("sEcho",e.iDraw),p("iColumns",r),p("sColumns",he(a,"sName").join(",")),p("iDisplayStart",i),p("iDisplayLength",n);var f={draw:e.iDraw,columns:[],order:[],start:i,length:n,search:{value:c.sSearch,regex:c.bRegex}};for(i=0;i<r;i++)s=a[i],o=h[i],n="function"==typeof s.mData?"function":s.mData,f.columns.push({data:n,name:s.sName,searchable:s.bSearchable,orderable:s.bSortable,search:{value:o.sSearch,regex:o.bRegex}}),p("mDataProp_"+i,n),l.bFilter&&(p("sSearch_"+i,o.sSearch),p("bRegex_"+i,o.bRegex),p("bSearchable_"+i,s.bSearchable)),l.bSort&&p("bSortable_"+i,s.bSortable);return l.bFilter&&(p("sSearch",c.sSearch),p("bRegex",c.bRegex)),l.bSort&&(t.each(d,(function(t,e){f.order.push({column:e.col,dir:e.dir}),p("iSortCol_"+t,e.col),p("sSortDir_"+t,e.dir)})),p("iSortingCols",d.length)),null===(a=Yt.ext.legacy.ajax)?e.sAjaxSource?u:f:a?u:f}function q(t,e){var i=V(t,e),n=e.sEcho!==l?e.sEcho:e.draw,s=e.iTotalRecords!==l?e.iTotalRecords:e.recordsTotal,o=e.iTotalDisplayRecords!==l?e.iTotalDisplayRecords:e.recordsFiltered;if(n){if(1*n<t.iDraw)return;t.iDraw=1*n}for(A(t),t._iRecordsTotal=parseInt(s,10),t._iRecordsDisplay=parseInt(o,10),n=0,s=i.length;n<s;n++)w(t,i[n]);t.aiDisplay=t.aiDisplayMaster.slice(),t.bAjaxDataGet=!1,R(t),t._bInitComplete||rt(t,e),t.bAjaxDataGet=!0,pt(t,!1)}function V(e,i){var n=t.isPlainObject(e.ajax)&&e.ajax.dataSrc!==l?e.ajax.dataSrc:e.sAjaxDataProp;return"data"===n?i.aaData||i[n]:""!==n?T(n)(i):i}function Y(e){var i=e.oClasses,n=e.sTableId,s=e.oLanguage,o=e.oPreviousSearch,a=e.aanFeatures,l='<input type="search" class="'+i.sFilterInput+'"/>',c=(c=s.sSearch).match(/_INPUT_/)?c.replace("_INPUT_",l):c+l,h=(i=t("<div/>",{id:a.f?null:n+"_filter",class:i.sFilter}).append(t("<label/>").append(c)),a=function(){var t=this.value?this.value:"";t!=o.sSearch&&(X(e,{sSearch:t,bRegex:o.bRegex,bSmart:o.bSmart,bCaseInsensitive:o.bCaseInsensitive}),e._iDisplayStart=0,R(e))},l=null!==e.searchDelay?e.searchDelay:"ssp"===Bt(e)?400:0,t("input",i).val(o.sSearch).attr("placeholder",s.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT",l?bt(a,l):a).bind("keypress.DT",(function(t){if(13==t.keyCode)return!1})).attr("aria-controls",n));return t(e.nTable).on("search.dt.DT",(function(t,i){if(e===i)try{h[0]!==r.activeElement&&h.val(o.sSearch)}catch(t){}})),i[0]}function X(t,e,i){var n=t.oPreviousSearch,s=t.aoPreSearchCols,o=function(t){n.sSearch=t.sSearch,n.bRegex=t.bRegex,n.bSmart=t.bSmart,n.bCaseInsensitive=t.bCaseInsensitive};if(y(t),"ssp"!=Bt(t)){for(J(t,e.sSearch,i,e.bEscapeRegex!==l?!e.bEscapeRegex:e.bRegex,e.bSmart,e.bCaseInsensitive),o(e),e=0;e<s.length;e++)K(t,s[e].sSearch,e,s[e].bEscapeRegex!==l?!s[e].bEscapeRegex:s[e].bRegex,s[e].bSmart,s[e].bCaseInsensitive);G(t)}else o(e);t.bFiltered=!0,jt(t,null,"search",[t])}function G(t){for(var e,i,n=Yt.ext.search,s=t.aiDisplay,o=0,a=n.length;o<a;o++){for(var r=[],l=0,c=s.length;l<c;l++)i=s[l],e=t.aoData[i],n[o](t,e._aFilterData,i,e._aData,l)&&r.push(i);s.length=0,s.push.apply(s,r)}}function K(t,e,i,n,s,o){if(""!==e){var a=t.aiDisplay;for(n=Q(e,n,s,o),s=a.length-1;0<=s;s--)e=t.aoData[a[s]]._aFilterData[i],n.test(e)||a.splice(s,1)}}function J(t,e,i,n,s,o){var a;if(n=Q(e,n,s,o),s=t.oPreviousSearch.sSearch,o=t.aiDisplayMaster,0!==Yt.ext.search.length&&(i=!0),a=tt(t),0>=e.length)t.aiDisplay=o.slice();else for((a||i||s.length>e.length||0!==e.indexOf(s)||t.bSorted)&&(t.aiDisplay=o.slice()),i=(e=t.aiDisplay).length-1;0<=i;i--)n.test(t.aoData[e[i]]._sFilterRow)||e.splice(i,1)}function Q(e,i,n,s){return e=i?e:Z(e),n&&(e="^(?=.*?"+t.map(e.match(/"[^"]+"|[^ ]+/g)||[""],(function(t){if('"'===t.charAt(0)){var e=t.match(/^"(.*)"$/);t=e?e[1]:t}return t.replace('"',"")})).join(")(?=.*?")+").*$"),RegExp(e,s?"i":"")}function Z(t){return t.replace(ne,"\\$1")}function tt(t){var e,i,n,s,o,a,r,l,c=t.aoColumns,h=Yt.ext.type.search;for(e=!1,i=0,s=t.aoData.length;i<s;i++)if(!(l=t.aoData[i])._aFilterData){for(a=[],n=0,o=c.length;n<o;n++)(e=c[n]).bSearchable?(r=C(t,i,n,"filter"),h[e.sType]&&(r=h[e.sType](r)),null===r&&(r=""),"string"!=typeof r&&r.toString&&(r=r.toString())):r="",r.indexOf&&-1!==r.indexOf("&")&&(be.innerHTML=r,r=ye?be.textContent:be.innerText),r.replace&&(r=r.replace(/[\r\n]/g,"")),a.push(r);l._aFilterData=a,l._sFilterRow=a.join("  "),e=!0}return e}function et(t){return{search:t.sSearch,smart:t.bSmart,regex:t.bRegex,caseInsensitive:t.bCaseInsensitive}}function it(t){return{sSearch:t.search,bSmart:t.smart,bRegex:t.regex,bCaseInsensitive:t.caseInsensitive}}function nt(e){var i=e.sTableId,n=e.aanFeatures.i,s=t("<div/>",{class:e.oClasses.sInfo,id:n?null:i+"_info"});return n||(e.aoDrawCallback.push({fn:st,sName:"information"}),s.attr("role","status").attr("aria-live","polite"),t(e.nTable).attr("aria-describedby",i+"_info")),s[0]}function st(e){var i=e.aanFeatures.i;if(0!==i.length){var n=e.oLanguage,s=e._iDisplayStart+1,o=e.fnDisplayEnd(),a=e.fnRecordsTotal(),r=e.fnRecordsDisplay(),l=r?n.sInfo:n.sInfoEmpty;r!==a&&(l+=" "+n.sInfoFiltered),l=ot(e,l+=n.sInfoPostFix),null!==(n=n.fnInfoCallback)&&(l=n.call(e.oInstance,e,s,o,a,r,l)),t(i).html(l)}}function ot(t,e){var i=t.fnFormatNumber,n=t._iDisplayStart+1,s=t._iDisplayLength,o=t.fnRecordsDisplay(),a=-1===s;return e.replace(/_START_/g,i.call(t,n)).replace(/_END_/g,i.call(t,t.fnDisplayEnd())).replace(/_MAX_/g,i.call(t,t.fnRecordsTotal())).replace(/_TOTAL_/g,i.call(t,o)).replace(/_PAGE_/g,i.call(t,a?1:Math.ceil(n/s))).replace(/_PAGES_/g,i.call(t,a?1:Math.ceil(o/s)))}function at(t){var e,i,n,s=t.iInitDisplayStart,o=t.aoColumns;if(i=t.oFeatures,t.bInitialised){for(W(t),M(t),H(t,t.aoHeader),H(t,t.aoFooter),pt(t,!0),i.bAutoWidth&&vt(t),e=0,i=o.length;e<i;e++)(n=o[e]).sWidth&&(n.nTh.style.width=Ct(n.sWidth));F(t),"ssp"!=(o=Bt(t))&&("ajax"==o?$(t,[],(function(i){var n=V(t,i);for(e=0;e<n.length;e++)w(t,n[e]);t.iInitDisplayStart=s,F(t),pt(t,!1),rt(t,i)})):(pt(t,!1),rt(t)))}else setTimeout((function(){at(t)}),200)}function rt(t,e){t._bInitComplete=!0,e&&f(t),jt(t,"aoInitComplete","init",[t,e])}function lt(t,e){var i=parseInt(e,10);t._iDisplayLength=i,zt(t),jt(t,null,"length",[t,i])}function ct(e){for(var i=e.oClasses,n=e.sTableId,s=e.aLengthMenu,o=(a=t.isArray(s[0]))?s[0]:s,a=(s=a?s[1]:s,t("<select/>",{name:n+"_length","aria-controls":n,class:i.sLengthSelect})),r=0,l=o.length;r<l;r++)a[0][r]=new Option(s[r],o[r]);var c=t("<div><label/></div>").addClass(i.sLength);return e.aanFeatures.l||(c[0].id=n+"_length"),c.children().append(e.oLanguage.sLengthMenu.replace("_MENU_",a[0].outerHTML)),t("select",c).val(e._iDisplayLength).bind("change.DT",(function(){lt(e,t(this).val()),R(e)})),t(e.nTable).bind("length.dt.DT",(function(i,n,s){e===n&&t("select",c).val(s)})),c[0]}function ht(e){var i=e.sPaginationType,n=Yt.ext.pager[i],s="function"==typeof n,o=function(t){R(t)},a=(i=t("<div/>").addClass(e.oClasses.sPaging+i)[0],e.aanFeatures);return s||n.fnInit(e,i,o),a.p||(i.id=e.sTableId+"_paginate",e.aoDrawCallback.push({fn:function(t){if(s){var e,i=t._iDisplayStart,r=t._iDisplayLength,l=t.fnRecordsDisplay(),c=(i=(c=-1===r)?0:Math.ceil(i/r),r=c?1:Math.ceil(l/r),l=n(i,r),0);for(e=a.p.length;c<e;c++)$t(t,"pageButton")(t,a.p[c],c,l,i,r)}else n.fnUpdate(t,o)},sName:"pagination"})),i}function ut(t,e,i){var n=t._iDisplayStart,s=t._iDisplayLength,o=t.fnRecordsDisplay();return 0===o||-1===s?n=0:"number"==typeof e?(n=e*s)>o&&(n=0):"first"==e?n=0:"previous"==e?0>(n=0<=s?n-s:0)&&(n=0):"next"==e?n+s<o&&(n+=s):"last"==e?n=Math.floor((o-1)/s)*s:Mt(t,0,"Unknown paging action: "+e,5),e=t._iDisplayStart!==n,t._iDisplayStart=n,e&&(jt(t,null,"page",[t]),i&&R(t)),e}function dt(e){return t("<div/>",{id:e.aanFeatures.r?null:e.sTableId+"_processing",class:e.oClasses.sProcessing}).html(e.oLanguage.sProcessing).insertBefore(e.nTable)[0]}function pt(e,i){e.oFeatures.bProcessing&&t(e.aanFeatures.r).css("display",i?"block":"none"),jt(e,null,"processing",[e,i])}function ft(e){(u=t(e.nTable)).attr("role","grid");var i=e.oScroll;if(""===i.sX&&""===i.sY)return e.nTable;var n=i.sX,s=i.sY,o=e.oClasses,a=u.children("caption"),r=a.length?a[0]._captionSide:null,l=t(u[0].cloneNode(!1)),c=t(u[0].cloneNode(!1)),h=u.children("tfoot");i.sX&&"100%"===u.attr("width")&&u.removeAttr("width"),h.length||(h=null),i=t("<div/>",{class:o.sScrollWrapper}).append(t("<div/>",{class:o.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:n?n?Ct(n):null:"100%"}).append(t("<div/>",{class:o.sScrollHeadInner}).css({"box-sizing":"content-box",width:i.sXInner||"100%"}).append(l.removeAttr("id").css("margin-left",0).append("top"===r?a:null).append(u.children("thead"))))).append(t("<div/>",{class:o.sScrollBody}).css({overflow:"auto",height:s?Ct(s):null,width:n?Ct(n):null}).append(u)),h&&i.append(t("<div/>",{class:o.sScrollFoot}).css({overflow:"hidden",border:0,width:n?n?Ct(n):null:"100%"}).append(t("<div/>",{class:o.sScrollFootInner}).append(c.removeAttr("id").css("margin-left",0).append("bottom"===r?a:null).append(u.children("tfoot")))));var u,d=(u=i.children())[0],p=(o=u[1],h?u[2]:null);return n&&t(o).on("scroll.DT",(function(){var t=this.scrollLeft;d.scrollLeft=t,h&&(p.scrollLeft=t)})),e.nScrollHead=d,e.nScrollBody=o,e.nScrollFoot=p,e.aoDrawCallback.push({fn:gt,sName:"scrolling"}),i[0]}function gt(e){var i,n,s,o,a,r,l=e.oScroll,c=l.sX,h=l.sXInner,u=l.sY,d=l.iBarWidth,p=t(e.nScrollHead),f=p[0].style,m=(b=p.children("div"))[0].style,v=b.children("table"),b=e.nScrollBody,y=t(b),_=b.style,w=t(e.nScrollFoot).children("div"),x=w.children("table"),C=t(e.nTHead),S=t(e.nTable),D=S[0],T=D.style,k=e.nTFoot?t(e.nTFoot):null,I=e.oBrowser,A=I.bScrollOversize,E=[],P=[],N=[],O=function(t){(t=t.style).paddingTop="0",t.paddingBottom="0",t.borderTopWidth="0",t.borderBottomWidth="0",t.height=0};S.children("thead, tfoot").remove(),a=C.clone().prependTo(S),i=C.find("tr"),s=a.find("tr"),a.find("th, td").removeAttr("tabindex"),k&&(o=k.clone().prependTo(S),n=k.find("tr"),o=o.find("tr")),c||(_.width="100%",p[0].style.width="100%"),t.each(z(e,a),(function(t,i){r=g(e,t),i.style.width=e.aoColumns[r].sWidth})),k&&mt((function(t){t.style.width=""}),o),l.bCollapse&&""!==u&&(_.height=y[0].offsetHeight+C[0].offsetHeight+"px"),p=S.outerWidth(),""===c?(T.width="100%",A&&(S.find("tbody").height()>b.offsetHeight||"scroll"==y.css("overflow-y"))&&(T.width=Ct(S.outerWidth()-d))):""!==h?T.width=Ct(h):p==y.width()&&y.height()<S.height()?(T.width=Ct(p-d),S.outerWidth()>p-d&&(T.width=Ct(p))):T.width=Ct(p),p=S.outerWidth(),mt(O,s),mt((function(e){N.push(e.innerHTML),E.push(Ct(t(e).css("width")))}),s),mt((function(t,e){t.style.width=E[e]}),i),t(s).height(0),k&&(mt(O,o),mt((function(e){P.push(Ct(t(e).css("width")))}),o),mt((function(t,e){t.style.width=P[e]}),n),t(o).height(0)),mt((function(t,e){t.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+N[e]+"</div>",t.style.width=E[e]}),s),k&&mt((function(t,e){t.innerHTML="",t.style.width=P[e]}),o),S.outerWidth()<p?(n=b.scrollHeight>b.offsetHeight||"scroll"==y.css("overflow-y")?p+d:p,A&&(b.scrollHeight>b.offsetHeight||"scroll"==y.css("overflow-y"))&&(T.width=Ct(n-d)),(""===c||""!==h)&&Mt(e,1,"Possible column misalignment",6)):n="100%",_.width=Ct(n),f.width=Ct(n),k&&(e.nScrollFoot.style.width=Ct(n)),!u&&A&&(_.height=Ct(D.offsetHeight+d)),u&&l.bCollapse&&(_.height=Ct(u),l=c&&D.offsetWidth>b.offsetWidth?d:0,D.offsetHeight<b.offsetHeight&&(_.height=Ct(D.offsetHeight+l))),l=S.outerWidth(),v[0].style.width=Ct(l),m.width=Ct(l),v=S.height()>b.clientHeight||"scroll"==y.css("overflow-y"),m[I="padding"+(I.bScrollbarLeft?"Left":"Right")]=v?d+"px":"0px",k&&(x[0].style.width=Ct(l),w[0].style.width=Ct(l),w[0].style[I]=v?d+"px":"0px"),y.scroll(),!e.bSorted&&!e.bFiltered||e._drawHold||(b.scrollTop=0)}function mt(t,e,i){for(var n,s,o=0,a=0,r=e.length;a<r;){for(n=e[a].firstChild,s=i?i[a].firstChild:null;n;)1===n.nodeType&&(i?t(n,s,o):t(n,o),o++),n=n.nextSibling,s=i?s.nextSibling:null;a++}}function vt(e){var i,n,s=e.nTable,o=e.aoColumns,r=(u=e.oScroll).sY,l=u.sX,c=u.sXInner,h=o.length,u=b(e,"bVisible"),d=t("th",e.nTHead),p=s.getAttribute("width"),g=s.parentNode,m=!1;for((i=s.style.width)&&-1!==i.indexOf("%")&&(p=i),i=0;i<u.length;i++)null!==(n=o[u[i]]).sWidth&&(n.sWidth=yt(n.sWidthOrig,g),m=!0);if(m||l||r||h!=v(e)||h!=d.length){(h=t(s).clone().css("visibility","hidden").removeAttr("id")).find("tbody tr").remove();var y=t("<tr/>").appendTo(h.find("tbody"));for(h.find("tfoot th, tfoot td").css("width",""),d=z(e,h.find("thead")[0]),i=0;i<u.length;i++)n=o[u[i]],d[i].style.width=null!==n.sWidthOrig&&""!==n.sWidthOrig?Ct(n.sWidthOrig):"";if(e.aoData.length)for(i=0;i<u.length;i++)n=o[m=u[i]],t(wt(e,m)).clone(!1).append(n.sContentPadding).appendTo(y);if(h.appendTo(g),l&&c?h.width(c):l?(h.css("width","auto"),h.width()<g.offsetWidth&&h.width(g.offsetWidth)):r?h.width(g.offsetWidth):p&&h.width(p),_t(e,h[0]),l){for(i=c=0;i<u.length;i++)n=o[u[i]],r=t(d[i]).outerWidth(),c+=null===n.sWidthOrig?r:parseInt(n.sWidth,10)+r-t(d[i]).width();h.width(Ct(c)),s.style.width=Ct(c)}for(i=0;i<u.length;i++)n=o[u[i]],(r=t(d[i]).width())&&(n.sWidth=Ct(r));s.style.width=Ct(h.css("width")),h.remove()}else for(i=0;i<h;i++)o[i].sWidth=Ct(d.eq(i).width());p&&(s.style.width=Ct(p)),!p&&!l||e._reszEvt||(s=function(){t(a).bind("resize.DT-"+e.sInstance,bt((function(){f(e)})))},e.oBrowser.bScrollOversize?setTimeout(s,1e3):s(),e._reszEvt=!0)}function bt(t,e){var i,n,s=e!==l?e:200;return function(){var e=this,o=+new Date,a=arguments;i&&o<i+s?(clearTimeout(n),n=setTimeout((function(){i=l,t.apply(e,a)}),s)):(i=o,t.apply(e,a))}}function yt(e,i){if(!e)return 0;var n=t("<div/>").css("width",Ct(e)).appendTo(i||r.body),s=n[0].offsetWidth;return n.remove(),s}function _t(e,i){var n=e.oScroll;(n.sX||n.sY)&&(n=n.sX?0:n.iBarWidth,i.style.width=Ct(t(i).outerWidth()-n))}function wt(e,i){var n=xt(e,i);if(0>n)return null;var s=e.aoData[n];return s.nTr?s.anCells[i]:t("<td/>").html(C(e,n,i,"display"))[0]}function xt(t,e){for(var i,n=-1,s=-1,o=0,a=t.aoData.length;o<a;o++)(i=(i=C(t,o,e,"display")+"").replace(_e,"")).length>n&&(n=i.length,s=o);return s}function Ct(t){return null===t?"0px":"number"==typeof t?0>t?"0px":t+"px":t.match(/\d$/)?t+"px":t}function St(){if((i=Yt.__scrollbarWidth)===l){var e=t("<p/>").css({position:"absolute",top:0,left:0,width:"100%",height:150,padding:0,overflow:"scroll",visibility:"hidden"}).appendTo("body"),i=e[0].offsetWidth-e[0].clientWidth;Yt.__scrollbarWidth=i,e.remove()}return i}function Dt(e){var i,n,s,o,a,r,c=[],h=e.aoColumns;i=e.aaSortingFixed,n=t.isPlainObject(i);var u=[];for(s=function(e){e.length&&!t.isArray(e[0])?u.push(e):u.push.apply(u,e)},t.isArray(i)&&s(i),n&&i.pre&&s(i.pre),s(e.aaSorting),n&&i.post&&s(i.post),e=0;e<u.length;e++)for(i=0,n=(s=h[r=u[e][0]].aDataSort).length;i<n;i++)a=h[o=s[i]].sType||"string",u[e]._idx===l&&(u[e]._idx=t.inArray(u[e][1],h[o].asSorting)),c.push({src:r,col:o,dir:u[e][1],index:u[e]._idx,type:a,formatter:Yt.ext.type.order[a+"-pre"]});return c}function Tt(t){var e,i,n,s,o=[],a=Yt.ext.type.order,r=t.aoData,l=0,c=t.aiDisplayMaster;for(y(t),e=0,i=(s=Dt(t)).length;e<i;e++)(n=s[e]).formatter&&l++,Pt(t,n.col);if("ssp"!=Bt(t)&&0!==s.length){for(e=0,i=c.length;e<i;e++)o[c[e]]=e;l===s.length?c.sort((function(t,e){var i,n,a,l,c=s.length,h=r[t]._aSortData,u=r[e]._aSortData;for(a=0;a<c;a++)if(0!=(i=(i=h[(l=s[a]).col])<(n=u[l.col])?-1:i>n?1:0))return"asc"===l.dir?i:-i;return(i=o[t])<(n=o[e])?-1:i>n?1:0})):c.sort((function(t,e){var i,n,l,c,h=s.length,u=r[t]._aSortData,d=r[e]._aSortData;for(l=0;l<h;l++)if(i=u[(c=s[l]).col],n=d[c.col],0!==(i=(c=a[c.type+"-"+c.dir]||a["string-"+c.dir])(i,n)))return i;return(i=o[t])<(n=o[e])?-1:i>n?1:0}))}t.bSorted=!0}function kt(t){for(var e,i,n=t.aoColumns,s=Dt(t),o=(t=t.oLanguage.oAria,0),a=n.length;o<a;o++){var r=(i=n[o]).asSorting;e=i.sTitle.replace(/<.*?>/g,"");var l=i.nTh;l.removeAttribute("aria-sort"),i.bSortable&&(0<s.length&&s[0].col==o?(l.setAttribute("aria-sort","asc"==s[0].dir?"ascending":"descending"),i=r[s[0].index+1]||r[0]):i=r[0],e+="asc"===i?t.sSortAscending:t.sSortDescending),l.setAttribute("aria-label",e)}}function It(e,i,n,s){var o=e.aaSorting,a=e.aoColumns[i].asSorting,r=function(e,i){var n=e._idx;return n===l&&(n=t.inArray(e[1],a)),n+1<a.length?n+1:i?null:0};"number"==typeof o[0]&&(o=e.aaSorting=[o]),n&&e.oFeatures.bSortMulti?-1!==(n=t.inArray(i,he(o,"0")))?(null===(i=r(o[n],!0))&&1===o.length&&(i=0),null===i?o.splice(n,1):(o[n][1]=a[i],o[n]._idx=i)):(o.push([i,a[0],0]),o[o.length-1]._idx=0):o.length&&o[0][0]==i?(i=r(o[0]),o.length=1,o[0][1]=a[i],o[0]._idx=i):(o.length=0,o.push([i,a[0]]),o[0]._idx=0),F(e),"function"==typeof s&&s(e)}function At(t,e,i,n){var s=t.aoColumns[i];Ft(e,{},(function(e){!1!==s.bSortable&&(t.oFeatures.bProcessing?(pt(t,!0),setTimeout((function(){It(t,i,e.shiftKey,n),"ssp"!==Bt(t)&&pt(t,!1)}),0)):It(t,i,e.shiftKey,n))}))}function Et(e){var i,n,s=e.aLastSort,o=e.oClasses.sSortColumn,a=Dt(e),r=e.oFeatures;if(r.bSort&&r.bSortClasses){for(r=0,i=s.length;r<i;r++)n=s[r].src,t(he(e.aoData,"anCells",n)).removeClass(o+(2>r?r+1:3));for(r=0,i=a.length;r<i;r++)n=a[r].src,t(he(e.aoData,"anCells",n)).addClass(o+(2>r?r+1:3))}e.aLastSort=a}function Pt(t,e){var i,n=t.aoColumns[e],s=Yt.ext.order[n.sSortDataType];s&&(i=s.call(t.oInstance,t,e,m(t,e)));for(var o,a=Yt.ext.type.order[n.sType+"-pre"],r=0,l=t.aoData.length;r<l;r++)(n=t.aoData[r])._aSortData||(n._aSortData=[]),(!n._aSortData[e]||s)&&(o=s?i[r]:C(t,r,e,"sort"),n._aSortData[e]=a?a(o):o)}function Nt(e){if(e.oFeatures.bStateSave&&!e.bDestroying){var i={time:+new Date,start:e._iDisplayStart,length:e._iDisplayLength,order:t.extend(!0,[],e.aaSorting),search:et(e.oPreviousSearch),columns:t.map(e.aoColumns,(function(t,i){return{visible:t.bVisible,search:et(e.aoPreSearchCols[i])}}))};jt(e,"aoStateSaveParams","stateSaveParams",[e,i]),e.oSavedState=i,e.fnStateSaveCallback.call(e.oInstance,e,i)}}function Ot(e){var i,n,s=e.aoColumns;if(e.oFeatures.bStateSave){var o=e.fnStateLoadCallback.call(e.oInstance,e);if(o&&o.time&&(i=jt(e,"aoStateLoadParams","stateLoadParams",[e,o]),-1===t.inArray(!1,i)&&!(0<(i=e.iStateDuration)&&o.time<+new Date-1e3*i)&&s.length===o.columns.length)){for(e.oLoadedState=t.extend(!0,{},o),o.start!==l&&(e._iDisplayStart=o.start,e.iInitDisplayStart=o.start),o.length!==l&&(e._iDisplayLength=o.length),o.order!==l&&(e.aaSorting=[],t.each(o.order,(function(t,i){e.aaSorting.push(i[0]>=s.length?[0,i[1]]:i)}))),o.search!==l&&t.extend(e.oPreviousSearch,it(o.search)),i=0,n=o.columns.length;i<n;i++){var a=o.columns[i];a.visible!==l&&(s[i].bVisible=a.visible),a.search!==l&&t.extend(e.aoPreSearchCols[i],it(a.search))}jt(e,"aoStateLoaded","stateLoaded",[e,o])}}}function Lt(e){var i=Yt.settings;return-1!==(e=t.inArray(e,he(i,"nTable")))?i[e]:null}function Mt(t,e,i,n){if(i="DataTables warning: "+(null!==t?"table id="+t.sTableId+" - ":"")+i,n&&(i+=". For more information about this error, please see http://datatables.net/tn/"+n),e)a.console&&console.log&&console.log(i);else if(e=(e=Yt.ext).sErrMode||e.errMode,jt(t,null,"error",[t,n,i]),"alert"==e)alert(i);else{if("throw"==e)throw Error(i);"function"==typeof e&&e(t,n,i)}}function Ht(e,i,n,s){t.isArray(n)?t.each(n,(function(n,s){t.isArray(s)?Ht(e,i,s[0],s[1]):Ht(e,i,s)})):(s===l&&(s=n),i[n]!==l&&(e[s]=i[n]))}function Rt(e,i,n){var s,o;for(o in i)i.hasOwnProperty(o)&&(s=i[o],t.isPlainObject(s)?(t.isPlainObject(e[o])||(e[o]={}),t.extend(!0,e[o],s)):e[o]=n&&"data"!==o&&"aaData"!==o&&t.isArray(s)?s.slice():s);return e}function Ft(e,i,n){t(e).bind("click.DT",i,(function(t){e.blur(),n(t)})).bind("keypress.DT",i,(function(t){13===t.which&&(t.preventDefault(),n(t))})).bind("selectstart.DT",(function(){return!1}))}function Wt(t,e,i,n){i&&t[e].push({fn:i,sName:n})}function jt(e,i,n,s){var o=[];return i&&(o=t.map(e[i].slice().reverse(),(function(t){return t.fn.apply(e.oInstance,s)}))),null!==n&&(i=t.Event(n+".dt"),t(e.nTable).trigger(i,s),o.push(i.result)),o}function zt(t){var e=t._iDisplayStart,i=t.fnDisplayEnd(),n=t._iDisplayLength;e>=i&&(e=i-n),e-=e%n,(-1===n||0>e)&&(e=0),t._iDisplayStart=e}function $t(e,i){var n=e.renderer,s=Yt.ext.renderer[i];return t.isPlainObject(n)&&n[i]?s[n[i]]||s._:"string"==typeof n&&s[n]||s._}function Bt(t){return t.oFeatures.bServerSide?"ssp":t.ajax||t.sAjaxSource?"ajax":"dom"}function Ut(t,e){var i=[],n=(i=Me.numbers_length,Math.floor(i/2));return e<=i?i=de(0,e):t<=n?((i=de(0,i-2)).push("ellipsis"),i.push(e-1)):(t>=e-1-n?i=de(e-(i-2),e):((i=de(t-n+2,t+n-1)).push("ellipsis"),i.push(e-1)),i.splice(0,0,"ellipsis"),i.splice(0,0,0)),i.DT_el="span",i}function qt(e){t.each({num:function(t){return He(t,e)},"num-fmt":function(t){return He(t,e,se)},"html-num":function(t){return He(t,e,te)},"html-num-fmt":function(t){return He(t,e,te,se)}},(function(t,i){Xt.type.order[t+e+"-pre"]=i,t.match(/^html\-/)&&(Xt.type.search[t+e]=Xt.type.search.html)}))}function Vt(t){return function(){var e=[Lt(this[Yt.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return Yt.ext.internal[t].apply(this,e)}}var Yt,Xt,Gt,Kt,Jt,Qt={},Zt=/[\r\n]/g,te=/<.*?>/g,ee=/^[\w\+\-]/,ie=/[\w\+\-]$/,ne=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)","g"),se=/[',$\u00a3\u20ac\u00a5%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,oe=function(t){return!t||!0===t||"-"===t},ae=function(t){var e=parseInt(t,10);return!isNaN(e)&&isFinite(t)?e:null},re=function(t,e){return Qt[e]||(Qt[e]=RegExp(Z(e),"g")),"string"==typeof t&&"."!==e?t.replace(/\./g,"").replace(Qt[e],"."):t},le=function(t,e,i){var n="string"==typeof t;return!!oe(t)||(e&&n&&(t=re(t,e)),i&&n&&(t=t.replace(se,"")),!isNaN(parseFloat(t))&&isFinite(t))},ce=function(t,e,i){return!!oe(t)||(oe(t)||"string"==typeof t)&&!!le(t.replace(te,""),e,i)||null},he=function(t,e,i){var n=[],s=0,o=t.length;if(i!==l)for(;s<o;s++)t[s]&&t[s][e]&&n.push(t[s][e][i]);else for(;s<o;s++)t[s]&&n.push(t[s][e]);return n},ue=function(t,e,i,n){var s=[],o=0,a=e.length;if(n!==l)for(;o<a;o++)t[e[o]][i]&&s.push(t[e[o]][i][n]);else for(;o<a;o++)s.push(t[e[o]][i]);return s},de=function(t,e){var i,n=[];e===l?(e=0,i=t):(i=e,e=t);for(var s=e;s<i;s++)n.push(s);return n},pe=function(t){for(var e=[],i=0,n=t.length;i<n;i++)t[i]&&e.push(t[i]);return e},fe=function(t){var e,i,n,s=[],o=t.length,a=0;i=0;t:for(;i<o;i++){for(e=t[i],n=0;n<a;n++)if(s[n]===e)continue t;s.push(e),a++}return s},ge=function(t,e,i){t[e]!==l&&(t[i]=t[e])},me=/\[.*?\]$/,ve=/\(\)$/,be=t("<div>")[0],ye=be.textContent!==l,_e=/<.*?>/g;Yt=function(e){this.$=function(t,e){return this.api(!0).$(t,e)},this._=function(t,e){return this.api(!0).rows(t,e).data()},this.api=function(t){return new Gt(t?Lt(this[Xt.iApiIndex]):this)},this.fnAddData=function(e,i){var n=this.api(!0),s=t.isArray(e)&&(t.isArray(e[0])||t.isPlainObject(e[0]))?n.rows.add(e):n.row.add(e);return(i===l||i)&&n.draw(),s.flatten().toArray()},this.fnAdjustColumnSizing=function(t){var e=this.api(!0).columns.adjust(),i=e.settings()[0],n=i.oScroll;t===l||t?e.draw(!1):(""!==n.sX||""!==n.sY)&&gt(i)},this.fnClearTable=function(t){var e=this.api(!0).clear();(t===l||t)&&e.draw()},this.fnClose=function(t){this.api(!0).row(t).child.hide()},this.fnDeleteRow=function(t,e,i){var n=this.api(!0),s=(t=n.rows(t)).settings()[0],o=s.aoData[t[0][0]];return t.remove(),e&&e.call(this,s,o),(i===l||i)&&n.draw(),o},this.fnDestroy=function(t){this.api(!0).destroy(t)},this.fnDraw=function(t){this.api(!0).draw(t)},this.fnFilter=function(t,e,i,n,s,o){s=this.api(!0),null===e||e===l?s.search(t,i,n,o):s.column(e).search(t,i,n,o),s.draw()},this.fnGetData=function(t,e){var i=this.api(!0);if(t!==l){var n=t.nodeName?t.nodeName.toLowerCase():"";return e!==l||"td"==n||"th"==n?i.cell(t,e).data():i.row(t).data()||null}return i.data().toArray()},this.fnGetNodes=function(t){var e=this.api(!0);return t!==l?e.row(t).node():e.rows().nodes().flatten().toArray()},this.fnGetPosition=function(t){var e=this.api(!0),i=t.nodeName.toUpperCase();return"TR"==i?e.row(t).index():"TD"==i||"TH"==i?[(t=e.cell(t).index()).row,t.columnVisible,t.column]:null},this.fnIsOpen=function(t){return this.api(!0).row(t).child.isShown()},this.fnOpen=function(t,e,i){return this.api(!0).row(t).child(e,i).show().child()[0]},this.fnPageChange=function(t,e){var i=this.api(!0).page(t);(e===l||e)&&i.draw(!1)},this.fnSetColumnVis=function(t,e,i){t=this.api(!0).column(t).visible(e),(i===l||i)&&t.columns.adjust().draw()},this.fnSettings=function(){return Lt(this[Xt.iApiIndex])},this.fnSort=function(t){this.api(!0).order(t).draw()},this.fnSortListener=function(t,e,i){this.api(!0).order.listener(t,e,i)},this.fnUpdate=function(t,e,i,n,s){var o=this.api(!0);return i===l||null===i?o.row(e).data(t):o.cell(e,i).data(t),(s===l||s)&&o.columns.adjust(),(n===l||n)&&o.draw(),0},this.fnVersionCheck=Xt.fnVersionCheck;var a=this,r=e===l,c=this.length;for(var u in r&&(e={}),this.oApi=this.internal=Xt.internal,Yt.ext.internal)u&&(this[u]=Vt(u));return this.each((function(){var u,f={},g=(f=1<c?Rt(f,e,!0):e,0),m=this.getAttribute("id"),v=!1,b=Yt.defaults,y=t(this);if("table"!=this.nodeName.toLowerCase())Mt(null,0,"Non-table node initialisation ("+this.nodeName+")",2);else{s(b),o(b.column),i(b,b,!0),i(b.column,b.column,!0),i(b,t.extend(f,y.data()));var C=Yt.settings;for(g=0,u=C.length;g<u;g++){var S=C[g];if(S.nTable==this||S.nTHead.parentNode==this||S.nTFoot&&S.nTFoot.parentNode==this){if(g=f.bRetrieve!==l?f.bRetrieve:b.bRetrieve,r||g)return S.oInstance;if(f.bDestroy!==l?f.bDestroy:b.bDestroy){S.oInstance.fnDestroy();break}return void Mt(S,0,"Cannot reinitialise DataTable",3)}if(S.sTableId==this.id){C.splice(g,1);break}}null!==m&&""!==m||(this.id=m="DataTables_Table_"+Yt.ext._unique++);var D=t.extend(!0,{},Yt.models.oSettings,{sDestroyWidth:y[0].style.width,sInstance:m,sTableId:m});D.nTable=this,D.oApi=a.internal,D.oInit=f,C.push(D),D.oInstance=1===a.length?a:y.dataTable(),s(f),f.oLanguage&&n(f.oLanguage),f.aLengthMenu&&!f.iDisplayLength&&(f.iDisplayLength=t.isArray(f.aLengthMenu[0])?f.aLengthMenu[0][0]:f.aLengthMenu[0]),f=Rt(t.extend(!0,{},b),f),Ht(D.oFeatures,f,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" ")),Ht(D,f,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"],["bJQueryUI","bJUI"]]),Ht(D.oScroll,f,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]),Ht(D.oLanguage,f,"fnInfoCallback"),Wt(D,"aoDrawCallback",f.fnDrawCallback,"user"),Wt(D,"aoServerParams",f.fnServerParams,"user"),Wt(D,"aoStateSaveParams",f.fnStateSaveParams,"user"),Wt(D,"aoStateLoadParams",f.fnStateLoadParams,"user"),Wt(D,"aoStateLoaded",f.fnStateLoaded,"user"),Wt(D,"aoRowCallback",f.fnRowCallback,"user"),Wt(D,"aoRowCreatedCallback",f.fnCreatedRow,"user"),Wt(D,"aoHeaderCallback",f.fnHeaderCallback,"user"),Wt(D,"aoFooterCallback",f.fnFooterCallback,"user"),Wt(D,"aoInitComplete",f.fnInitComplete,"user"),Wt(D,"aoPreDrawCallback",f.fnPreDrawCallback,"user"),m=D.oClasses,f.bJQueryUI?(t.extend(m,Yt.ext.oJUIClasses,f.oClasses),f.sDom===b.sDom&&"lfrtip"===b.sDom&&(D.sDom='<"H"lfr>t<"F"ip>'),D.renderer?t.isPlainObject(D.renderer)&&!D.renderer.header&&(D.renderer.header="jqueryui"):D.renderer="jqueryui"):t.extend(m,Yt.ext.classes,f.oClasses),y.addClass(m.sTable),""===D.oScroll.sX&&""===D.oScroll.sY||(D.oScroll.iBarWidth=St()),!0===D.oScroll.sX&&(D.oScroll.sX="100%"),D.iInitDisplayStart===l&&(D.iInitDisplayStart=f.iDisplayStart,D._iDisplayStart=f.iDisplayStart),null!==f.iDeferLoading&&(D.bDeferLoading=!0,g=t.isArray(f.iDeferLoading),D._iRecordsDisplay=g?f.iDeferLoading[0]:f.iDeferLoading,D._iRecordsTotal=g?f.iDeferLoading[1]:f.iDeferLoading);var T=D.oLanguage;t.extend(!0,T,f.oLanguage),""!==T.sUrl&&(t.ajax({dataType:"json",url:T.sUrl,success:function(e){n(e),i(b.oLanguage,e),t.extend(!0,T,e),at(D)},error:function(){at(D)}}),v=!0),null===f.asStripeClasses&&(D.asStripeClasses=[m.sStripeOdd,m.sStripeEven]),g=D.asStripeClasses;var k=y.children("tbody").find("tr").eq(0);if(-1!==t.inArray(!0,t.map(g,(function(t){return k.hasClass(t)})))&&(t("tbody tr",this).removeClass(g.join(" ")),D.asDestroyStripes=g.slice()),C=[],0!==(g=this.getElementsByTagName("thead")).length&&(j(D.aoHeader,g[0]),C=z(D)),null===f.aoColumns)for(S=[],g=0,u=C.length;g<u;g++)S.push(null);else S=f.aoColumns;for(g=0,u=S.length;g<u;g++)d(D,C?C[g]:null);if(_(D,f.aoColumnDefs,S,(function(t,e){p(D,t,e)})),k.length){var I=function(t,e){return null!==t.getAttribute("data-"+e)?e:null};t.each(N(D,k[0]).cells,(function(t,e){var i=D.aoColumns[t];if(i.mData===t){var n=I(e,"sort")||I(e,"order"),s=I(e,"filter")||I(e,"search");null===n&&null===s||(i.mData={_:t+".display",sort:null!==n?t+".@data-"+n:l,type:null!==n?t+".@data-"+n:l,filter:null!==s?t+".@data-"+s:l},p(D,t))}}))}var A=D.oFeatures;if(f.bStateSave&&(A.bStateSave=!0,Ot(D),Wt(D,"aoDrawCallback",Nt,"state_save")),f.aaSorting===l)for(g=0,u=(C=D.aaSorting).length;g<u;g++)C[g][1]=D.aoColumns[g].asSorting[0];if(Et(D),A.bSort&&Wt(D,"aoDrawCallback",(function(){if(D.bSorted){var e=Dt(D),i={};t.each(e,(function(t,e){i[e.src]=e.dir})),jt(D,null,"order",[D,e,i]),kt(D)}})),Wt(D,"aoDrawCallback",(function(){(D.bSorted||"ssp"===Bt(D)||A.bDeferRender)&&Et(D)}),"sc"),h(D),g=y.children("caption").each((function(){this._captionSide=y.css("caption-side")})),0===(u=y.children("thead")).length&&(u=t("<thead/>").appendTo(this)),D.nTHead=u[0],0===(u=y.children("tbody")).length&&(u=t("<tbody/>").appendTo(this)),D.nTBody=u[0],0===(u=y.children("tfoot")).length&&0<g.length&&(""!==D.oScroll.sX||""!==D.oScroll.sY)&&(u=t("<tfoot/>").appendTo(this)),0===u.length||0===u.children().length?y.addClass(m.sNoFooter):0<u.length&&(D.nTFoot=u[0],j(D.aoFooter,D.nTFoot)),f.aaData)for(g=0;g<f.aaData.length;g++)w(D,f.aaData[g]);else(D.bDeferLoading||"dom"==Bt(D))&&x(D,t(D.nTBody).children("tr"));D.aiDisplay=D.aiDisplayMaster.slice(),D.bInitialised=!0,!1===v&&at(D)}})),a=null,this};var we=[],xe=Array.prototype;Gt=function(e,i){if(!(this instanceof Gt))return new Gt(e,i);var n=[],s=function(e){(e=function(e){var i,n,s=Yt.settings,o=t.map(s,(function(t){return t.nTable}));return e?e.nTable&&e.oApi?[e]:e.nodeName&&"table"===e.nodeName.toLowerCase()?-1!==(i=t.inArray(e,o))?[s[i]]:null:e&&"function"==typeof e.settings?e.settings().toArray():("string"==typeof e?n=t(e):e instanceof t&&(n=e),n?n.map((function(){return-1!==(i=t.inArray(this,o))?s[i]:null})).toArray():void 0):[]}(e))&&n.push.apply(n,e)};if(t.isArray(e))for(var o=0,a=e.length;o<a;o++)s(e[o]);else s(e);this.context=fe(n),i&&this.push.apply(this,i.toArray?i.toArray():i),this.selector={rows:null,cols:null,opts:null},Gt.extend(this,this,we)},Yt.Api=Gt,Gt.prototype={any:function(){return 0!==this.flatten().length},concat:xe.concat,context:[],each:function(t){for(var e=0,i=this.length;e<i;e++)t.call(this,this[e],e,this);return this},eq:function(t){var e=this.context;return e.length>t?new Gt(e[t],this[t]):null},filter:function(t){var e=[];if(xe.filter)e=xe.filter.call(this,t,this);else for(var i=0,n=this.length;i<n;i++)t.call(this,this[i],i,this)&&e.push(this[i]);return new Gt(this.context,e)},flatten:function(){var t=[];return new Gt(this.context,t.concat.apply(t,this.toArray()))},join:xe.join,indexOf:xe.indexOf||function(t,e){for(var i=e||0,n=this.length;i<n;i++)if(this[i]===t)return i;return-1},iterator:function(t,e,i,n){var s,o,a,r,c,h,u,d=[],p=this.context,f=this.selector;for("string"==typeof t&&(n=i,i=e,e=t,t=!1),o=0,a=p.length;o<a;o++){var g=new Gt(p[o]);if("table"===e)(s=i.call(g,p[o],o))!==l&&d.push(s);else if("columns"===e||"rows"===e)(s=i.call(g,p[o],this[o],o))!==l&&d.push(s);else if("column"===e||"column-rows"===e||"row"===e||"cell"===e)for(u=this[o],"column-rows"===e&&(h=ke(p[o],f.opts)),r=0,c=u.length;r<c;r++)s=u[r],(s="cell"===e?i.call(g,p[o],s.row,s.column,o,r):i.call(g,p[o],s,o,r,h))!==l&&d.push(s)}return d.length||n?((e=(t=new Gt(p,t?d.concat.apply([],d):d)).selector).rows=f.rows,e.cols=f.cols,e.opts=f.opts,t):this},lastIndexOf:xe.lastIndexOf||function(t,e){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(t){var e=[];if(xe.map)e=xe.map.call(this,t,this);else for(var i=0,n=this.length;i<n;i++)e.push(t.call(this,this[i],i));return new Gt(this.context,e)},pluck:function(t){return this.map((function(e){return e[t]}))},pop:xe.pop,push:xe.push,reduce:xe.reduce||function(t,e){return u(this,t,e,0,this.length,1)},reduceRight:xe.reduceRight||function(t,e){return u(this,t,e,this.length-1,-1,-1)},reverse:xe.reverse,selector:null,shift:xe.shift,sort:xe.sort,splice:xe.splice,toArray:function(){return xe.slice.call(this)},to$:function(){return t(this)},toJQuery:function(){return t(this)},unique:function(){return new Gt(this.context,fe(this))},unshift:xe.unshift},Gt.extend=function(e,i,n){if(n.length&&i&&(i instanceof Gt||i.__dt_wrapper)){var s,o,a,r=function(t,e,i){return function(){var n=e.apply(t,arguments);return Gt.extend(n,n,i.methodExt),n}};for(s=0,o=n.length;s<o;s++)i[(a=n[s]).name]="function"==typeof a.val?r(e,a.val,a):t.isPlainObject(a.val)?{}:a.val,i[a.name].__dt_wrapper=!0,Gt.extend(e,i[a.name],a.propExt)}},Gt.register=Kt=function(e,i){if(t.isArray(e))for(var n=0,s=e.length;n<s;n++)Gt.register(e[n],i);else{var o,a,r=e.split("."),l=we;for(n=0,s=r.length;n<s;n++){var c;o=(a=-1!==r[n].indexOf("()"))?r[n].replace("()",""):r[n];t:{c=0;for(var h=l.length;c<h;c++)if(l[c].name===o){c=l[c];break t}c=null}c||(c={name:o,val:{},methodExt:[],propExt:[]},l.push(c)),n===s-1?c.val=i:l=a?c.methodExt:c.propExt}}},Gt.registerPlural=Jt=function(e,i,n){Gt.register(e,n),Gt.register(i,(function(){var e=n.apply(this,arguments);return e===this?this:e instanceof Gt?e.length?t.isArray(e[0])?new Gt(e.context,e[0]):e[0]:l:e}))},Kt("tables()",(function(e){var i;if(e){i=Gt;var n=this.context;if("number"==typeof e)e=[n[e]];else{var s=t.map(n,(function(t){return t.nTable}));e=t(s).filter(e).map((function(){var e=t.inArray(this,s);return n[e]})).toArray()}i=new i(e)}else i=this;return i})),Kt("table()",(function(t){var e=(t=this.tables(t)).context;return e.length?new Gt(e[0]):t})),Jt("tables().nodes()","table().node()",(function(){return this.iterator("table",(function(t){return t.nTable}),1)})),Jt("tables().body()","table().body()",(function(){return this.iterator("table",(function(t){return t.nTBody}),1)})),Jt("tables().header()","table().header()",(function(){return this.iterator("table",(function(t){return t.nTHead}),1)})),Jt("tables().footer()","table().footer()",(function(){return this.iterator("table",(function(t){return t.nTFoot}),1)})),Jt("tables().containers()","table().container()",(function(){return this.iterator("table",(function(t){return t.nTableWrapper}),1)})),Kt("draw()",(function(t){return this.iterator("table",(function(e){F(e,!1===t)}))})),Kt("page()",(function(t){return t===l?this.page.info().page:this.iterator("table",(function(e){ut(e,t)}))})),Kt("page.info()",(function(){if(0===this.context.length)return l;var t=this.context[0],e=t._iDisplayStart,i=t._iDisplayLength,n=t.fnRecordsDisplay(),s=-1===i;return{page:s?0:Math.floor(e/i),pages:s?1:Math.ceil(n/i),start:e,end:t.fnDisplayEnd(),length:i,recordsTotal:t.fnRecordsTotal(),recordsDisplay:n}})),Kt("page.len()",(function(t){return t===l?0!==this.context.length?this.context[0]._iDisplayLength:l:this.iterator("table",(function(e){lt(e,t)}))}));var Ce=function(t,e,i){if(i){var n=new Gt(t);n.one("draw",(function(){i(n.ajax.json())}))}"ssp"==Bt(t)?F(t,e):(pt(t,!0),$(t,[],(function(i){A(t);for(var n=0,s=(i=V(t,i)).length;n<s;n++)w(t,i[n]);F(t,e),pt(t,!1)})))};Kt("ajax.json()",(function(){var t=this.context;if(0<t.length)return t[0].json})),Kt("ajax.params()",(function(){var t=this.context;if(0<t.length)return t[0].oAjaxData})),Kt("ajax.reload()",(function(t,e){return this.iterator("table",(function(i){Ce(i,!1===e,t)}))})),Kt("ajax.url()",(function(e){var i=this.context;return e===l?0===i.length?l:(i=i[0]).ajax?t.isPlainObject(i.ajax)?i.ajax.url:i.ajax:i.sAjaxSource:this.iterator("table",(function(i){t.isPlainObject(i.ajax)?i.ajax.url=e:i.ajax=e}))})),Kt("ajax.url().load()",(function(t,e){return this.iterator("table",(function(i){Ce(i,!1===e,t)}))}));var Se=function(e,i,n,s,o){var a,r,h,u,d,p,f=[];for(h=c(i),i&&"string"!==h&&"function"!==h&&i.length!==l||(i=[i]),h=0,u=i.length;h<u;h++)for(d=0,p=(r=i[h]&&i[h].split?i[h].split(","):[i[h]]).length;d<p;d++)(a=n("string"==typeof r[d]?t.trim(r[d]):r[d]))&&a.length&&f.push.apply(f,a);if((e=Xt.selector[e]).length)for(h=0,u=e.length;h<u;h++)f=e[h](s,o,f);return f},De=function(e){return e||(e={}),e.filter&&e.search===l&&(e.search=e.filter),t.extend({search:"none",order:"current",page:"all"},e)},Te=function(t){for(var e=0,i=t.length;e<i;e++)if(0<t[e].length)return t[0]=t[e],t[0].length=1,t.length=1,t.context=[t.context[e]],t;return t.length=0,t},ke=function(e,i){var n,s,o,a=[],r=e.aiDisplay;n=e.aiDisplayMaster;var l=i.search;if(s=i.order,o=i.page,"ssp"==Bt(e))return"removed"===l?[]:de(0,n.length);if("current"==o)for(n=e._iDisplayStart,s=e.fnDisplayEnd();n<s;n++)a.push(r[n]);else if("current"==s||"applied"==s)a="none"==l?n.slice():"applied"==l?r.slice():t.map(n,(function(e){return-1===t.inArray(e,r)?e:null}));else if("index"==s||"original"==s)for(n=0,s=e.aoData.length;n<s;n++)("none"==l||-1===(o=t.inArray(n,r))&&"removed"==l||0<=o&&"applied"==l)&&a.push(n);return a};Kt("rows()",(function(e,i){e===l?e="":t.isPlainObject(e)&&(i=e,e=""),i=De(i);var n=this.iterator("table",(function(n){var s=i;return Se("row",e,(function(e){var i=ae(e);if(null!==i&&!s)return[i];var o=ke(n,s);return null!==i&&-1!==t.inArray(i,o)?[i]:e?"function"==typeof e?t.map(o,(function(t){var i=n.aoData[t];return e(t,i._aData,i.nTr)?t:null})):(i=pe(ue(n.aoData,o,"nTr")),e.nodeName&&-1!==t.inArray(e,i)?[e._DT_RowIndex]:t(i).filter(e).map((function(){return this._DT_RowIndex})).toArray()):o}),n,s)}),1);return n.selector.rows=e,n.selector.opts=i,n})),Kt("rows().nodes()",(function(){return this.iterator("row",(function(t,e){return t.aoData[e].nTr||l}),1)})),Kt("rows().data()",(function(){return this.iterator(!0,"rows",(function(t,e){return ue(t.aoData,e,"_aData")}),1)})),Jt("rows().cache()","row().cache()",(function(t){return this.iterator("row",(function(e,i){var n=e.aoData[i];return"search"===t?n._aFilterData:n._aSortData}),1)})),Jt("rows().invalidate()","row().invalidate()",(function(t){return this.iterator("row",(function(e,i){P(e,i,t)}))})),Jt("rows().indexes()","row().index()",(function(){return this.iterator("row",(function(t,e){return e}),1)})),Jt("rows().remove()","row().remove()",(function(){var e=this;return this.iterator("row",(function(i,n,s){var o=i.aoData;o.splice(n,1);for(var a=0,r=o.length;a<r;a++)null!==o[a].nTr&&(o[a].nTr._DT_RowIndex=a);t.inArray(n,i.aiDisplay),E(i.aiDisplayMaster,n),E(i.aiDisplay,n),E(e[s],n,!1),zt(i)}))})),Kt("rows.add()",(function(t){var e=this.iterator("table",(function(e){var i,n,s,o=[];for(n=0,s=t.length;n<s;n++)(i=t[n]).nodeName&&"TR"===i.nodeName.toUpperCase()?o.push(x(e,i)[0]):o.push(w(e,i));return o}),1),i=this.rows(-1);return i.pop(),i.push.apply(i,e.toArray()),i})),Kt("row()",(function(t,e){return Te(this.rows(t,e))})),Kt("row().data()",(function(t){var e=this.context;return t===l?e.length&&this.length?e[0].aoData[this[0]]._aData:l:(e[0].aoData[this[0]]._aData=t,P(e[0],this[0],"data"),this)})),Kt("row().node()",(function(){var t=this.context;return t.length&&this.length&&t[0].aoData[this[0]].nTr||null})),Kt("row.add()",(function(e){e instanceof t&&e.length&&(e=e[0]);var i=this.iterator("table",(function(t){return e.nodeName&&"TR"===e.nodeName.toUpperCase()?x(t,e)[0]:w(t,e)}));return this.row(i[0])}));var Ie=function(t,e){var i=t.context;i.length&&(i=i[0].aoData[e!==l?e:t[0]])._details&&(i._details.remove(),i._detailsShow=l,i._details=l)},Ae=function(t,e){var i=t.context;if(i.length&&t.length){var n=i[0].aoData[t[0]];if(n._details){(n._detailsShow=e)?n._details.insertAfter(n.nTr):n._details.detach();var s=i[0],o=new Gt(s),a=s.aoData;o.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details"),0<he(a,"_details").length&&(o.on("draw.dt.DT_details",(function(t,e){s===e&&o.rows({page:"current"}).eq(0).each((function(t){(t=a[t])._detailsShow&&t._details.insertAfter(t.nTr)}))})),o.on("column-visibility.dt.DT_details",(function(t,e){if(s===e)for(var i,n=v(e),o=0,r=a.length;o<r;o++)(i=a[o])._details&&i._details.children("td[colspan]").attr("colspan",n)})),o.on("destroy.dt.DT_details",(function(t,e){if(s===e)for(var i=0,n=a.length;i<n;i++)a[i]._details&&Ie(o,i)})))}}};Kt("row().child()",(function(e,i){var n=this.context;if(e===l)return n.length&&this.length?n[0].aoData[this[0]]._details:l;if(!0===e)this.child.show();else if(!1===e)Ie(this);else if(n.length&&this.length){var s=n[0],o=(n=n[0].aoData[this[0]],[]);!function e(i,n){if(t.isArray(i)||i instanceof t)for(var a=0,r=i.length;a<r;a++)e(i[a],n);else i.nodeName&&"tr"===i.nodeName.toLowerCase()?o.push(i):(a=t("<tr><td/></tr>").addClass(n),t("td",a).addClass(n).html(i)[0].colSpan=v(s),o.push(a[0]))}(e,i),n._details&&n._details.remove(),n._details=t(o),n._detailsShow&&n._details.insertAfter(n.nTr)}return this})),Kt(["row().child.show()","row().child().show()"],(function(){return Ae(this,!0),this})),Kt(["row().child.hide()","row().child().hide()"],(function(){return Ae(this,!1),this})),Kt(["row().child.remove()","row().child().remove()"],(function(){return Ie(this),this})),Kt("row().child.isShown()",(function(){var t=this.context;return t.length&&this.length&&t[0].aoData[this[0]]._detailsShow||!1}));var Ee=/^(.+):(name|visIdx|visible)$/,Pe=function(t,e,i,n,s){i=[],n=0;for(var o=s.length;n<o;n++)i.push(C(t,s[n],e));return i};Kt("columns()",(function(e,i){e===l?e="":t.isPlainObject(e)&&(i=e,e=""),i=De(i);var n=this.iterator("table",(function(n){var s=e,o=i,a=n.aoColumns,r=he(a,"sName"),l=he(a,"nTh");return Se("column",s,(function(e){var i=ae(e);if(""===e)return de(a.length);if(null!==i)return[i>=0?i:a.length+i];if("function"==typeof e){var s=ke(n,o);return t.map(a,(function(t,i){return e(i,Pe(n,i,0,0,s),l[i])?i:null}))}var c="string"==typeof e?e.match(Ee):"";if(!c)return t(l).filter(e).map((function(){return t.inArray(this,l)})).toArray();switch(c[2]){case"visIdx":case"visible":if((i=parseInt(c[1],10))<0){var h=t.map(a,(function(t,e){return t.bVisible?e:null}));return[h[h.length+i]]}return[g(n,i)];case"name":return t.map(r,(function(t,e){return t===c[1]?e:null}))}}),n,o)}),1);return n.selector.cols=e,n.selector.opts=i,n})),Jt("columns().header()","column().header()",(function(){return this.iterator("column",(function(t,e){return t.aoColumns[e].nTh}),1)})),Jt("columns().footer()","column().footer()",(function(){return this.iterator("column",(function(t,e){return t.aoColumns[e].nTf}),1)})),Jt("columns().data()","column().data()",(function(){return this.iterator("column-rows",Pe,1)})),Jt("columns().dataSrc()","column().dataSrc()",(function(){return this.iterator("column",(function(t,e){return t.aoColumns[e].mData}),1)})),Jt("columns().cache()","column().cache()",(function(t){return this.iterator("column-rows",(function(e,i,n,s,o){return ue(e.aoData,o,"search"===t?"_aFilterData":"_aSortData",i)}),1)})),Jt("columns().nodes()","column().nodes()",(function(){return this.iterator("column-rows",(function(t,e,i,n,s){return ue(t.aoData,s,"anCells",e)}),1)})),Jt("columns().visible()","column().visible()",(function(e,i){return this.iterator("column",(function(n,s){if(e===l)return n.aoColumns[s].bVisible;var o,a,r,c=n.aoColumns,h=c[s],u=n.aoData;if(e!==l&&h.bVisible!==e){if(e){var d=t.inArray(!0,he(c,"bVisible"),s+1);for(o=0,a=u.length;o<a;o++)r=u[o].nTr,c=u[o].anCells,r&&r.insertBefore(c[s],c[d]||null)}else t(he(n.aoData,"anCells",s)).detach();h.bVisible=e,H(n,n.aoHeader),H(n,n.aoFooter),(i===l||i)&&(f(n),(n.oScroll.sX||n.oScroll.sY)&&gt(n)),jt(n,null,"column-visibility",[n,s,e]),Nt(n)}}))})),Jt("columns().indexes()","column().index()",(function(t){return this.iterator("column",(function(e,i){return"visible"===t?m(e,i):i}),1)})),Kt("columns.adjust()",(function(){return this.iterator("table",(function(t){f(t)}),1)})),Kt("column.index()",(function(t,e){if(0!==this.context.length){var i=this.context[0];if("fromVisible"===t||"toData"===t)return g(i,e);if("fromData"===t||"toVisible"===t)return m(i,e)}})),Kt("column()",(function(t,e){return Te(this.columns(t,e))})),Kt("cells()",(function(e,i,n){if(t.isPlainObject(e)&&(e.row===l?(n=e,e=null):(n=i,i=null)),t.isPlainObject(i)&&(n=i,i=null),null===i||i===l)return this.iterator("table",(function(i){var s,o,a,r,c,h,u,d=e,p=De(n),f=i.aoData,g=ke(i,p),m=pe(ue(f,g,"anCells")),v=t([].concat.apply([],m)),b=i.aoColumns.length;return Se("cell",d,(function(e){var n="function"==typeof e;if(null===e||e===l||n){for(o=[],a=0,r=g.length;a<r;a++)for(s=g[a],c=0;c<b;c++)h={row:s,column:c},n?(u=i.aoData[s],e(h,C(i,s,c),u.anCells?u.anCells[c]:null)&&o.push(h)):o.push(h);return o}return t.isPlainObject(e)?[e]:v.filter(e).map((function(e,i){return{row:s=i.parentNode._DT_RowIndex,column:t.inArray(i,f[s].anCells)}})).toArray()}),i,p)}));var s,o,a,r,c,h=this.columns(i,n),u=this.rows(e,n),d=this.iterator("table",(function(t,e){for(s=[],o=0,a=u[e].length;o<a;o++)for(r=0,c=h[e].length;r<c;r++)s.push({row:u[e][o],column:h[e][r]});return s}),1);return t.extend(d.selector,{cols:i,rows:e,opts:n}),d})),Jt("cells().nodes()","cell().node()",(function(){return this.iterator("cell",(function(t,e,i){return(t=t.aoData[e].anCells)?t[i]:l}),1)})),Kt("cells().data()",(function(){return this.iterator("cell",(function(t,e,i){return C(t,e,i)}),1)})),Jt("cells().cache()","cell().cache()",(function(t){return t="search"===t?"_aFilterData":"_aSortData",this.iterator("cell",(function(e,i,n){return e.aoData[i][t][n]}),1)})),Jt("cells().render()","cell().render()",(function(t){return this.iterator("cell",(function(e,i,n){return C(e,i,n,t)}),1)})),Jt("cells().indexes()","cell().index()",(function(){return this.iterator("cell",(function(t,e,i){return{row:e,column:i,columnVisible:m(t,i)}}),1)})),Jt("cells().invalidate()","cell().invalidate()",(function(t){return this.iterator("cell",(function(e,i,n){P(e,i,t,n)}))})),Kt("cell()",(function(t,e,i){return Te(this.cells(t,e,i))})),Kt("cell().data()",(function(t){var e=this.context,i=this[0];return t===l?e.length&&i.length?C(e[0],i[0].row,i[0].column):l:(S(e[0],i[0].row,i[0].column,t),P(e[0],i[0].row,"data",i[0].column),this)})),Kt("order()",(function(e,i){var n=this.context;return e===l?0!==n.length?n[0].aaSorting:l:("number"==typeof e?e=[[e,i]]:t.isArray(e[0])||(e=Array.prototype.slice.call(arguments)),this.iterator("table",(function(t){t.aaSorting=e.slice()})))})),Kt("order.listener()",(function(t,e,i){return this.iterator("table",(function(n){At(n,t,e,i)}))})),Kt(["columns().order()","column().order()"],(function(e){var i=this;return this.iterator("table",(function(n,s){var o=[];t.each(i[s],(function(t,i){o.push([i,e])})),n.aaSorting=o}))})),Kt("search()",(function(e,i,n,s){var o=this.context;return e===l?0!==o.length?o[0].oPreviousSearch.sSearch:l:this.iterator("table",(function(o){o.oFeatures.bFilter&&X(o,t.extend({},o.oPreviousSearch,{sSearch:e+"",bRegex:null!==i&&i,bSmart:null===n||n,bCaseInsensitive:null===s||s}),1)}))})),Jt("columns().search()","column().search()",(function(e,i,n,s){return this.iterator("column",(function(o,a){var r=o.aoPreSearchCols;if(e===l)return r[a].sSearch;o.oFeatures.bFilter&&(t.extend(r[a],{sSearch:e+"",bRegex:null!==i&&i,bSmart:null===n||n,bCaseInsensitive:null===s||s}),X(o,o.oPreviousSearch,1))}))})),Kt("state()",(function(){return this.context.length?this.context[0].oSavedState:null})),Kt("state.clear()",(function(){return this.iterator("table",(function(t){t.fnStateSaveCallback.call(t.oInstance,t,{})}))})),Kt("state.loaded()",(function(){return this.context.length?this.context[0].oLoadedState:null})),Kt("state.save()",(function(){return this.iterator("table",(function(t){Nt(t)}))})),Yt.versionCheck=Yt.fnVersionCheck=function(t){for(var e,i,n=Yt.version.split("."),s=0,o=(t=t.split(".")).length;s<o;s++)if((e=parseInt(n[s],10)||0)!==(i=parseInt(t[s],10)||0))return e>i;return!0},Yt.isDataTable=Yt.fnIsDataTable=function(e){var i=t(e).get(0),n=!1;return t.each(Yt.settings,(function(e,s){var o=s.nScrollHead?t("table",s.nScrollHead)[0]:null,a=s.nScrollFoot?t("table",s.nScrollFoot)[0]:null;s.nTable!==i&&o!==i&&a!==i||(n=!0)})),n},Yt.tables=Yt.fnTables=function(e){return t.map(Yt.settings,(function(i){if(!e||e&&t(i.nTable).is(":visible"))return i.nTable}))},Yt.util={throttle:bt,escapeRegex:Z},Yt.camelToHungarian=i,Kt("$()",(function(e,i){var n=this.rows(i).nodes();return n=t(n),t([].concat(n.filter(e).toArray(),n.find(e).toArray()))})),t.each(["on","one","off"],(function(e,i){Kt(i+"()",(function(){var e=Array.prototype.slice.call(arguments);e[0].match(/\.dt\b/)||(e[0]+=".dt");var n=t(this.tables().nodes());return n[i].apply(n,e),this}))})),Kt("clear()",(function(){return this.iterator("table",(function(t){A(t)}))})),Kt("settings()",(function(){return new Gt(this.context,this.context)})),Kt("init()",(function(){var t=this.context;return t.length?t[0].oInit:null})),Kt("data()",(function(){return this.iterator("table",(function(t){return he(t.aoData,"_aData")})).flatten()})),Kt("destroy()",(function(e){return e=e||!1,this.iterator("table",(function(i){var n,s=i.nTableWrapper.parentNode,o=i.oClasses,r=i.nTable,l=i.nTBody,c=i.nTHead,h=i.nTFoot,u=t(r),d=(l=t(l),t(i.nTableWrapper)),p=t.map(i.aoData,(function(t){return t.nTr}));i.bDestroying=!0,jt(i,"aoDestroyCallback","destroy",[i]),e||new Gt(i).columns().visible(!0),d.unbind(".DT").find(":not(tbody *)").unbind(".DT"),t(a).unbind(".DT-"+i.sInstance),r!=c.parentNode&&(u.children("thead").detach(),u.append(c)),h&&r!=h.parentNode&&(u.children("tfoot").detach(),u.append(h)),u.detach(),d.detach(),i.aaSorting=[],i.aaSortingFixed=[],Et(i),t(p).removeClass(i.asStripeClasses.join(" ")),t("th, td",c).removeClass(o.sSortable+" "+o.sSortableAsc+" "+o.sSortableDesc+" "+o.sSortableNone),i.bJUI&&(t("th span."+o.sSortIcon+", td span."+o.sSortIcon,c).detach(),t("th, td",c).each((function(){var e=t("div."+o.sSortJUIWrapper,this);t(this).append(e.contents()),e.detach()}))),!e&&s&&s.insertBefore(r,i.nTableReinsertBefore),l.children().detach(),l.append(p),u.css("width",i.sDestroyWidth).removeClass(o.sTable),(n=i.asDestroyStripes.length)&&l.children().each((function(e){t(this).addClass(i.asDestroyStripes[e%n])})),-1!==(s=t.inArray(i,Yt.settings))&&Yt.settings.splice(s,1)}))})),t.each(["column","row","cell"],(function(t,e){Kt(e+"s().every()",(function(t){return this.iterator(e,(function(i,n,s){t.call(new Gt(i)[e](n,s))}))}))})),Kt("i18n()",(function(e,i,n){var s=this.context[0];return(e=T(e)(s.oLanguage))===l&&(e=i),n!==l&&t.isPlainObject(e)&&(e=e[n]!==l?e[n]:e._),e.replace("%d",n)})),Yt.version="1.10.7",Yt.settings=[],Yt.models={},Yt.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0},Yt.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null},Yt.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null},Yt.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bJQueryUI:!1,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(t){try{return JSON.parse((-1===t.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+t.sInstance+"_"+location.pathname))}catch(t){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(t,e){try{(-1===t.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+t.sInstance+"_"+location.pathname,JSON.stringify(e))}catch(t){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:t.extend({},Yt.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null},e(Yt.defaults),Yt.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null},e(Yt.defaults.column),Yt.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:l,oAjaxData:l,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,bJUI:null,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==Bt(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==Bt(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var t=this._iDisplayLength,e=this._iDisplayStart,i=e+t,n=this.aiDisplay.length,s=this.oFeatures,o=s.bPaginate;return s.bServerSide?!1===o||-1===t?e+n:Math.min(e+t,this._iRecordsDisplay):!o||i>n||-1===t?n:i},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{}},Yt.ext=Xt={buttons:{},classes:{},errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:Yt.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:Yt.version},t.extend(Xt,{afnFiltering:Xt.search,aTypes:Xt.type.detect,ofnSearch:Xt.type.search,oSort:Xt.type.order,afnSortData:Xt.order,aoFeatures:Xt.feature,oApi:Xt.internal,oStdClasses:Xt.classes,oPagination:Xt.pager}),t.extend(Yt.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""});var Ne="ui-state-default",Oe="css_right ui-icon ui-icon-",Le="fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";t.extend(Yt.ext.oJUIClasses,Yt.ext.classes,{sPageButton:"fg-button ui-button "+Ne,sPageButtonActive:"ui-state-disabled",sPageButtonDisabled:"ui-state-disabled",sPaging:"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",sSortAsc:Ne+" sorting_asc",sSortDesc:Ne+" sorting_desc",sSortable:Ne+" sorting",sSortableAsc:Ne+" sorting_asc_disabled",sSortableDesc:Ne+" sorting_desc_disabled",sSortableNone:Ne+" sorting_disabled",sSortJUIAsc:Oe+"triangle-1-n",sSortJUIDesc:Oe+"triangle-1-s",sSortJUI:Oe+"carat-2-n-s",sSortJUIAscAllowed:Oe+"carat-1-n",sSortJUIDescAllowed:Oe+"carat-1-s",sSortJUIWrapper:"DataTables_sort_wrapper",sSortIcon:"DataTables_sort_icon",sScrollHead:"dataTables_scrollHead "+Ne,sScrollFoot:"dataTables_scrollFoot "+Ne,sHeaderTH:Ne,sFooterTH:Ne,sJUIHeader:Le+" ui-corner-tl ui-corner-tr",sJUIFooter:Le+" ui-corner-bl ui-corner-br"});var Me=Yt.ext.pager;t.extend(Me,{simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]},simple_numbers:function(t,e){return["previous",Ut(t,e),"next"]},full_numbers:function(t,e){return["first","previous",Ut(t,e),"next","last"]},_numbers:Ut,numbers_length:7}),t.extend(!0,Yt.ext.renderer,{pageButton:{_:function(e,i,n,s,o,a){var l,c,h,u=e.oClasses,d=e.oLanguage.oPaginate,p=0;try{h=t(r.activeElement).data("dt-idx")}catch(t){}!function i(s,r){var h,f,g,m=function(t){ut(e,t.data.action,!0)};for(h=0,f=r.length;h<f;h++)if(g=r[h],t.isArray(g))i(t("<"+(g.DT_el||"div")+"/>").appendTo(s),g);else{switch(c=l="",g){case"ellipsis":s.append('<span class="ellipsis">&#x2026;</span>');break;case"first":l=d.sFirst,c=g+(o>0?"":" "+u.sPageButtonDisabled);break;case"previous":l=d.sPrevious,c=g+(o>0?"":" "+u.sPageButtonDisabled);break;case"next":l=d.sNext,c=g+(o<a-1?"":" "+u.sPageButtonDisabled);break;case"last":l=d.sLast,c=g+(o<a-1?"":" "+u.sPageButtonDisabled);break;default:l=g+1,c=o===g?u.sPageButtonActive:""}l&&(Ft(t("<a>",{class:u.sPageButton+" "+c,"aria-controls":e.sTableId,"data-dt-idx":p,tabindex:e.iTabIndex,id:0===n&&"string"==typeof g?e.sTableId+"_"+g:null}).html(l).appendTo(s),{action:g},m),p++)}}(t(i).empty(),s),h&&t(i).find("[data-dt-idx="+h+"]").focus()}}}),t.extend(Yt.ext.type.detect,[function(t,e){var i=e.oLanguage.sDecimal;return le(t,i)?"num"+i:null},function(t){if(t&&!(t instanceof Date)&&(!ee.test(t)||!ie.test(t)))return null;var e=Date.parse(t);return null!==e&&!isNaN(e)||oe(t)?"date":null},function(t,e){var i=e.oLanguage.sDecimal;return le(t,i,!0)?"num-fmt"+i:null},function(t,e){var i=e.oLanguage.sDecimal;return ce(t,i)?"html-num"+i:null},function(t,e){var i=e.oLanguage.sDecimal;return ce(t,i,!0)?"html-num-fmt"+i:null},function(t){return oe(t)||"string"==typeof t&&-1!==t.indexOf("<")?"html":null}]),t.extend(Yt.ext.type.search,{html:function(t){return oe(t)?t:"string"==typeof t?t.replace(Zt," ").replace(te,""):""},string:function(t){return oe(t)?t:"string"==typeof t?t.replace(Zt," "):t}});var He=function(t,e,i,n){return 0===t||t&&"-"!==t?(e&&(t=re(t,e)),t.replace&&(i&&(t=t.replace(i,"")),n&&(t=t.replace(n,""))),1*t):-1/0};return t.extend(Xt.type.order,{"date-pre":function(t){return Date.parse(t)||0},"html-pre":function(t){return oe(t)?"":t.replace?t.replace(/<.*?>/g,"").toLowerCase():t+""},"string-pre":function(t){return oe(t)?"":"string"==typeof t?t.toLowerCase():t.toString?t.toString():""},"string-asc":function(t,e){return t<e?-1:t>e?1:0},"string-desc":function(t,e){return t<e?1:t>e?-1:0}}),qt(""),t.extend(!0,Yt.ext.renderer,{header:{_:function(e,i,n,s){t(e.nTable).on("order.dt.DT",(function(t,o,a,r){e===o&&(t=n.idx,i.removeClass(n.sSortingClass+" "+s.sSortAsc+" "+s.sSortDesc).addClass("asc"==r[t]?s.sSortAsc:"desc"==r[t]?s.sSortDesc:n.sSortingClass))}))},jqueryui:function(e,i,n,s){t("<div/>").addClass(s.sSortJUIWrapper).append(i.contents()).append(t("<span/>").addClass(s.sSortIcon+" "+n.sSortingClassJUI)).appendTo(i),t(e.nTable).on("order.dt.DT",(function(t,o,a,r){e===o&&(t=n.idx,i.removeClass(s.sSortAsc+" "+s.sSortDesc).addClass("asc"==r[t]?s.sSortAsc:"desc"==r[t]?s.sSortDesc:n.sSortingClass),i.find("span."+s.sSortIcon).removeClass(s.sSortJUIAsc+" "+s.sSortJUIDesc+" "+s.sSortJUI+" "+s.sSortJUIAscAllowed+" "+s.sSortJUIDescAllowed).addClass("asc"==r[t]?s.sSortJUIAsc:"desc"==r[t]?s.sSortJUIDesc:n.sSortingClassJUI))}))}}}),Yt.render={number:function(t,e,i,n){return{display:function(s){if("number"!=typeof s&&"string"!=typeof s)return s;var o=0>s?"-":"",a=(s=Math.abs(parseFloat(s)),parseInt(s,10));return s=i?e+(s-a).toFixed(i).substring(2):"",o+(n||"")+a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,t)+s}}}},t.extend(Yt.ext.internal,{_fnExternApiFunc:Vt,_fnBuildAjax:$,_fnAjaxUpdate:B,_fnAjaxParameters:U,_fnAjaxUpdateDraw:q,_fnAjaxDataSrc:V,_fnAddColumn:d,_fnColumnOptions:p,_fnAdjustColumnSizing:f,_fnVisibleToColumnIndex:g,_fnColumnIndexToVisible:m,_fnVisbleColumns:v,_fnGetColumns:b,_fnColumnTypes:y,_fnApplyColumnDefs:_,_fnHungarianMap:e,_fnCamelToHungarian:i,_fnLanguageCompat:n,_fnBrowserDetect:h,_fnAddData:w,_fnAddTr:x,_fnNodeToDataIndex:function(t,e){return e._DT_RowIndex!==l?e._DT_RowIndex:null},_fnNodeToColumnIndex:function(e,i,n){return t.inArray(n,e.aoData[i].anCells)},_fnGetCellData:C,_fnSetCellData:S,_fnSplitObjNotation:D,_fnGetObjectDataFn:T,_fnSetObjectDataFn:k,_fnGetDataMaster:I,_fnClearTable:A,_fnDeleteIndex:E,_fnInvalidate:P,_fnGetRowElements:N,_fnCreateTr:O,_fnBuildHead:M,_fnDrawHead:H,_fnDraw:R,_fnReDraw:F,_fnAddOptionsHtml:W,_fnDetectHeader:j,_fnGetUniqueThs:z,_fnFeatureHtmlFilter:Y,_fnFilterComplete:X,_fnFilterCustom:G,_fnFilterColumn:K,_fnFilter:J,_fnFilterCreateSearch:Q,_fnEscapeRegex:Z,_fnFilterData:tt,_fnFeatureHtmlInfo:nt,_fnUpdateInfo:st,_fnInfoMacros:ot,_fnInitialise:at,_fnInitComplete:rt,_fnLengthChange:lt,_fnFeatureHtmlLength:ct,_fnFeatureHtmlPaginate:ht,_fnPageChange:ut,_fnFeatureHtmlProcessing:dt,_fnProcessingDisplay:pt,_fnFeatureHtmlTable:ft,_fnScrollDraw:gt,_fnApplyToChildren:mt,_fnCalculateColumnWidths:vt,_fnThrottle:bt,_fnConvertToWidth:yt,_fnScrollingWidthAdjust:_t,_fnGetWidestNode:wt,_fnGetMaxLenString:xt,_fnStringToCss:Ct,_fnScrollBarWidth:St,_fnSortFlatten:Dt,_fnSort:Tt,_fnSortAria:kt,_fnSortListener:It,_fnSortAttachListener:At,_fnSortingClasses:Et,_fnSortData:Pt,_fnSaveState:Nt,_fnLoadState:Ot,_fnSettingsFromNode:Lt,_fnLog:Mt,_fnMap:Ht,_fnBindAction:Ft,_fnCallbackReg:Wt,_fnCallbackFire:jt,_fnLengthOverflow:zt,_fnRenderer:$t,_fnDataSource:Bt,_fnRowAttributes:L,_fnCalculateEnd:function(){}}),t.fn.dataTable=Yt,t.fn.dataTableSettings=Yt.settings,t.fn.dataTableExt=Yt.ext,t.fn.DataTable=function(e){return t(this).dataTable(e).api()},t.each(Yt,(function(e,i){t.fn.DataTable[e]=i})),t.fn.dataTable})?n.apply(e,s):n)||(t.exports=o)},"1YaO":function(t,e,i){var n;function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function t(e,i,n){function s(a,r){if(!i[a]){if(!e[a]){if(o)return o(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=i[a]={exports:{}};e[a][0].call(c.exports,(function(t){var i=e[a][1][t];return s(i||t)}),c,c.exports,t,e,i,n)}return i[a].exports}for(var o=!1,a=0;a<n.length;a++)s(n[a]);return s}({1:[function(o,a){!function(){"use strict";function o(t,e){function i(t,e){return function(){return t.apply(e,arguments)}}var n;if(e=e||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=e.touchBoundary||10,this.layer=t,this.tapDelay=e.tapDelay||200,this.tapTimeout=e.tapTimeout||700,!o.notNeeded(t)){for(var s=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],a=this,r=0,c=s.length;c>r;r++)a[s[r]]=i(a[s[r]],a);l&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,i,n){var s=Node.prototype.removeEventListener;"click"===e?s.call(t,e,i.hijacked||i,n):s.call(t,e,i,n)},t.addEventListener=function(e,i,n){var s=Node.prototype.addEventListener;"click"===e?s.call(t,e,i.hijacked||(i.hijacked=function(t){t.propagationStopped||i(t)}),n):s.call(t,e,i,n)}),"function"==typeof t.onclick&&(n=t.onclick,t.addEventListener("click",(function(t){n(t)}),!1),t.onclick=null)}}var r=navigator.userAgent.indexOf("Windows Phone")>=0,l=navigator.userAgent.indexOf("Android")>0&&!r,c=/iP(ad|hone|od)/.test(navigator.userAgent)&&!r,h=c&&/OS 4_\d(_\d)?/.test(navigator.userAgent),u=c&&/OS [6-7]_\d/.test(navigator.userAgent),d=navigator.userAgent.indexOf("BB10")>0;o.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(c&&"file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},o.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!l;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},o.prototype.sendClick=function(t,e){var i,n;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),n=e.changedTouches[0],(i=document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(t),!0,!0,window,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),i.forwardedTouchEvent=!0,t.dispatchEvent(i)},o.prototype.determineEventType=function(t){return l&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},o.prototype.focus=function(t){var e;c&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},o.prototype.updateScrollParent=function(t){var e,i;if(!(e=t.fastClickScrollParent)||!e.contains(t)){i=t;do{if(i.scrollHeight>i.offsetHeight){e=i,t.fastClickScrollParent=i;break}i=i.parentElement}while(i)}e&&(e.fastClickLastScrollTop=e.scrollTop)},o.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},o.prototype.onTouchStart=function(t){var e,i,n;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),i=t.targetTouches[0],c){if((n=window.getSelection()).rangeCount&&!n.isCollapsed)return!0;if(!h){if(i.identifier&&i.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=i.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=i.pageX,this.touchStartY=i.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},o.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],i=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>i||Math.abs(e.pageY-this.touchStartY)>i},o.prototype.onTouchMove=function(t){return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0)},o.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},o.prototype.onTouchEnd=function(t){var e,i,n,s,o,a=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,i=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,u&&(o=t.changedTouches[0],(a=document.elementFromPoint(o.pageX-window.pageXOffset,o.pageY-window.pageYOffset)||a).fastClickScrollParent=this.targetElement.fastClickScrollParent),"label"===(n=a.tagName.toLowerCase())){if(e=this.findControl(a)){if(this.focus(a),l)return!1;a=e}}else if(this.needsFocus(a))return t.timeStamp-i>100||c&&window.top!==window&&"input"===n?(this.targetElement=null,!1):(this.focus(a),this.sendClick(a,t),c&&"select"===n||(this.targetElement=null,t.preventDefault()),!1);return!(!c||h||(s=a.fastClickScrollParent,!s||s.fastClickLastScrollTop===s.scrollTop))||(this.needsClick(a)||(t.preventDefault(),this.sendClick(a,t)),!1)},o.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},o.prototype.onMouse=function(t){return!this.targetElement||(!!t.forwardedTouchEvent||(!(t.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick))||(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1)))},o.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail||((e=this.onMouse(t))||(this.targetElement=null),e)},o.prototype.destroy=function(){var t=this.layer;l&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},o.notNeeded=function(t){var e,i,n;if(void 0===window.ontouchstart)return!0;if(i=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!l)return!0;if(e=document.querySelector("meta[name=viewport]")){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(i>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(d&&((n=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1]>=10&&n[2]>=3&&(e=document.querySelector("meta[name=viewport]")))){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction||(!!(+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]>=27&&(e=document.querySelector("meta[name=viewport]"),e&&(-1!==e.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth)))||("none"===t.style.touchAction||"manipulation"===t.style.touchAction))},o.attach=function(t,e){return new o(t,e)},"object"==s(i("PDX0"))&&i("PDX0")?void 0===(n=function(){return o}.call(e,i,e,t))||(t.exports=n):void 0!==a&&a.exports?(a.exports=o.attach,a.exports.FastClick=o):window.FastClick=o}()},{}],2:[function(t){window.Origami={fastclick:t("./bower_components/fastclick/lib/fastclick.js")}},{"./bower_components/fastclick/lib/fastclick.js":1}]},{},[2]),function(){function t(){document.dispatchEvent(new CustomEvent("o.load"))}document.addEventListener("load",t),"ready"===document.readyState&&t()}(),function(){function t(){document.dispatchEvent(new CustomEvent("o.DOMContentLoaded"))}document.addEventListener("DOMContentLoaded",t),"interactive"===document.readyState&&t()}()},4:function(t,e,i){t.exports=i("ByIP")},AIGv:function(t,e,i){var n,s,o;s=[i("EVdn")],void 0===(o="function"==typeof(n=function(t){var e,i=navigator.userAgent,n=/iphone/i.test(i),s=/chrome/i.test(i),o=/android/i.test(i);t.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},t.fn.extend({caret:function(t,e){var i;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof t?(e="number"==typeof e?e:t,this.each((function(){this.setSelectionRange?this.setSelectionRange(t,e):this.createTextRange&&((i=this.createTextRange()).collapse(!0),i.moveEnd("character",e),i.moveStart("character",t),i.select())}))):(this[0].setSelectionRange?(t=this[0].selectionStart,e=this[0].selectionEnd):document.selection&&document.selection.createRange&&(i=document.selection.createRange(),t=0-i.duplicate().moveStart("character",-1e5),e=t+i.text.length),{begin:t,end:e})},unmask:function(){return this.trigger("unmask")},mask:function(i,a){var r,l,c,h,u,d,p;if(!i&&this.length>0){var f=t(this[0]).data(t.mask.dataName);return f?f():void 0}return a=t.extend({autoclear:t.mask.autoclear,placeholder:t.mask.placeholder,completed:null},a),r=t.mask.definitions,l=[],c=d=i.length,h=null,t.each(i.split(""),(function(t,e){"?"==e?(d--,c=t):r[e]?(l.push(new RegExp(r[e])),null===h&&(h=l.length-1),c>t&&(u=l.length-1)):l.push(null)})),this.trigger("unmask").each((function(){function f(){if(a.completed){for(var t=h;u>=t;t++)if(l[t]&&C[t]===g(t))return;a.completed.call(x)}}function g(t){return a.placeholder.charAt(t<a.placeholder.length?t:0)}function m(t){for(;++t<d&&!l[t];);return t}function v(t,e){var i,n;if(!(0>t)){for(i=t,n=m(e);d>i;i++)if(l[i]){if(!(d>n&&l[i].test(C[n])))break;C[i]=C[n],C[n]=g(n),n=m(n)}_(),x.caret(Math.max(h,t))}}function b(){w(),x.val()!=D&&x.change()}function y(t,e){var i;for(i=t;e>i&&d>i;i++)l[i]&&(C[i]=g(i))}function _(){x.val(C.join(""))}function w(t){var e,i,n,s=x.val(),o=-1;for(e=0,n=0;d>e;e++)if(l[e]){for(C[e]=g(e);n++<s.length;)if(i=s.charAt(n-1),l[e].test(i)){C[e]=i,o=e;break}if(n>s.length){y(e+1,d);break}}else C[e]===s.charAt(n)&&n++,c>e&&(o=e);return t?_():c>o+1?a.autoclear||C.join("")===S?(x.val()&&x.val(""),y(0,d)):_():(_(),x.val(x.val().substring(0,o+1))),c?e:h}var x=t(this),C=t.map(i.split(""),(function(t,e){return"?"!=t?r[t]?g(e):t:void 0})),S=C.join(""),D=x.val();x.data(t.mask.dataName,(function(){return t.map(C,(function(t,e){return l[e]&&t!=g(e)?t:null})).join("")})),x.one("unmask",(function(){x.off(".mask").removeData(t.mask.dataName)})).on("focus.mask",(function(){var t;x.prop("readonly")||(clearTimeout(e),D=x.val(),t=w(),e=setTimeout((function(){x.get(0)===document.activeElement&&(_(),t==i.replace("?","").length?x.caret(0,t):x.caret(t))}),10))})).on("blur.mask",b).on("keydown.mask",(function(t){if(!x.prop("readonly")){var e,i,s,o=t.which||t.keyCode;p=x.val(),8===o||46===o||n&&127===o?(i=(e=x.caret()).begin,(s=e.end)-i==0&&(i=46!==o?function(t){for(;--t>=0&&!l[t];);return t}(i):s=m(i-1),s=46===o?m(s):s),y(i,s),v(i,s-1),t.preventDefault()):13===o?b.call(this,t):27===o&&(x.val(D),x.caret(0,w()),t.preventDefault())}})).on("keypress.mask",(function(e){if(!x.prop("readonly")){var i,n,s,a=e.which||e.keyCode,r=x.caret();e.ctrlKey||e.altKey||e.metaKey||32>a||!a||13===a||(r.end-r.begin!=0&&(y(r.begin,r.end),v(r.begin,r.end-1)),i=m(r.begin-1),d>i&&(n=String.fromCharCode(a),l[i].test(n))&&(function(t){var e,i,n,s;for(e=t,i=g(t);d>e;e++)if(l[e]){if(n=m(e),s=C[e],C[e]=i,!(d>n&&l[n].test(s)))break;i=s}}(i),C[i]=n,_(),s=m(i),o?setTimeout((function(){t.proxy(t.fn.caret,x,s)()}),0):x.caret(s),r.begin<=u&&f()),e.preventDefault())}})).on("input.mask paste.mask",(function(){x.prop("readonly")||setTimeout((function(){var t=w(!0);x.caret(t),f()}),0)})),s&&o&&x.off("input.mask").on("input.mask",(function(){var t=x.val(),e=x.caret();if(p&&p.length&&p.length>t.length){for(w(!0);e.begin>0&&!l[e.begin-1];)e.begin--;if(0===e.begin)for(;e.begin<h&&!l[e.begin];)e.begin++;x.caret(e.begin,e.begin)}else{for(w(!0);e.begin<d&&!l[e.begin];)e.begin++;x.caret(e.begin,e.begin)}f()})),w()}))}})})?n.apply(e,s):n)||(t.exports=o)},ByIP:function(t,e,i){(function(t,e,n,s){e=i("EVdn"),i("vnCl"),n.widget.bridge("uibutton",n.ui.button),i("r2km"),i("1YaO"),i("AIGv"),i("+Hvk"),i("NDSh"),e((function(){n("#dataTableUser").DataTable({order:[],oLanguage:{sLengthMenu:"Mostrando _MENU_ registros",sSearch:"Pesquisa:",sInfo:"Mostrando _START_ a _END_ de _TOTAL_ registros",sEmptyTable:"Sem registros para mostrar",sInfoEmpty:"Sem registros para mostrar",oPaginate:{sPrevious:"Anterior",sNext:"Próximo"}}}),n("#dataTableAdmin").DataTable({order:[],oLanguage:{sLengthMenu:"Mostrando _MENU_ registros",sSearch:"Pesquisa:",sInfo:"Mostrando _START_ a _END_ de _TOTAL_ registros",sEmptyTable:"Sem registros para mostrar",sInfoEmpty:"Sem registros para mostrar",oPaginate:{sPrevious:"Anterior",sNext:"Próximo"}}}),n("#dataTableAdmin2").DataTable({order:[],oLanguage:{sLengthMenu:"Mostrando _MENU_ registros",sSearch:"Pesquisa:",sInfo:"Mostrando _START_ a _END_ de _TOTAL_ registros",sEmptyTable:"Sem registros para mostrar",sInfoEmpty:"Sem registros para mostrar",oPaginate:{sPrevious:"Anterior",sNext:"Próximo"}}})})),i("n1zN"),i("yQUp"),i("RGv/"),n("#myTabs a").click((function(t){t.preventDefault(),n(this).tab("show")})),s((function(t){t("#cpf").mask("999.999.999-99")})),i("YahB"),i("aRwX"),n("select").selectpicker()}).call(this,i("EVdn"),i("EVdn"),i("EVdn"),i("EVdn"))},EVdn:function(t,e,i){var n;!function(e,i){"use strict";"object"==typeof t.exports?t.exports=e.document?i(e,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return i(t)}:i(e)}("undefined"!=typeof window?window:this,(function(i,s){"use strict";var o=[],a=Object.getPrototypeOf,r=o.slice,l=o.flat?function(t){return o.flat.call(t)}:function(t){return o.concat.apply([],t)},c=o.push,h=o.indexOf,u={},d=u.toString,p=u.hasOwnProperty,f=p.toString,g=f.call(Object),m={},v=function(t){return"function"==typeof t&&"number"!=typeof t.nodeType},b=function(t){return null!=t&&t===t.window},y=i.document,_={type:!0,src:!0,nonce:!0,noModule:!0};function w(t,e,i){var n,s,o=(i=i||y).createElement("script");if(o.text=t,e)for(n in _)(s=e[n]||e.getAttribute&&e.getAttribute(n))&&o.setAttribute(n,s);i.head.appendChild(o).parentNode.removeChild(o)}function x(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?u[d.call(t)]||"object":typeof t}var C=function(t,e){return new C.fn.init(t,e)};function S(t){var e=!!t&&"length"in t&&t.length,i=x(t);return!v(t)&&!b(t)&&("array"===i||0===e||"number"==typeof e&&e>0&&e-1 in t)}C.fn=C.prototype={jquery:"3.5.1",constructor:C,length:0,toArray:function(){return r.call(this)},get:function(t){return null==t?r.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){var e=C.merge(this.constructor(),t);return e.prevObject=this,e},each:function(t){return C.each(this,t)},map:function(t){return this.pushStack(C.map(this,(function(e,i){return t.call(e,i,e)})))},slice:function(){return this.pushStack(r.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(C.grep(this,(function(t,e){return(e+1)%2})))},odd:function(){return this.pushStack(C.grep(this,(function(t,e){return e%2})))},eq:function(t){var e=this.length,i=+t+(t<0?e:0);return this.pushStack(i>=0&&i<e?[this[i]]:[])},end:function(){return this.prevObject||this.constructor()},push:c,sort:o.sort,splice:o.splice},C.extend=C.fn.extend=function(){var t,e,i,n,s,o,a=arguments[0]||{},r=1,l=arguments.length,c=!1;for("boolean"==typeof a&&(c=a,a=arguments[r]||{},r++),"object"==typeof a||v(a)||(a={}),r===l&&(a=this,r--);r<l;r++)if(null!=(t=arguments[r]))for(e in t)n=t[e],"__proto__"!==e&&a!==n&&(c&&n&&(C.isPlainObject(n)||(s=Array.isArray(n)))?(i=a[e],o=s&&!Array.isArray(i)?[]:s||C.isPlainObject(i)?i:{},s=!1,a[e]=C.extend(c,o,n)):void 0!==n&&(a[e]=n));return a},C.extend({expando:"jQuery"+("3.5.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isPlainObject:function(t){var e,i;return!(!t||"[object Object]"!==d.call(t))&&(!(e=a(t))||"function"==typeof(i=p.call(e,"constructor")&&e.constructor)&&f.call(i)===g)},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},globalEval:function(t,e,i){w(t,{nonce:e&&e.nonce},i)},each:function(t,e){var i,n=0;if(S(t))for(i=t.length;n<i&&!1!==e.call(t[n],n,t[n]);n++);else for(n in t)if(!1===e.call(t[n],n,t[n]))break;return t},makeArray:function(t,e){var i=e||[];return null!=t&&(S(Object(t))?C.merge(i,"string"==typeof t?[t]:t):c.call(i,t)),i},inArray:function(t,e,i){return null==e?-1:h.call(e,t,i)},merge:function(t,e){for(var i=+e.length,n=0,s=t.length;n<i;n++)t[s++]=e[n];return t.length=s,t},grep:function(t,e,i){for(var n=[],s=0,o=t.length,a=!i;s<o;s++)!e(t[s],s)!==a&&n.push(t[s]);return n},map:function(t,e,i){var n,s,o=0,a=[];if(S(t))for(n=t.length;o<n;o++)null!=(s=e(t[o],o,i))&&a.push(s);else for(o in t)null!=(s=e(t[o],o,i))&&a.push(s);return l(a)},guid:1,support:m}),"function"==typeof Symbol&&(C.fn[Symbol.iterator]=o[Symbol.iterator]),C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(t,e){u["[object "+e+"]"]=e.toLowerCase()}));var D=function(t){var e,i,n,s,o,a,r,l,c,h,u,d,p,f,g,m,v,b,y,_="sizzle"+1*new Date,w=t.document,x=0,C=0,S=lt(),D=lt(),T=lt(),k=lt(),I=function(t,e){return t===e&&(u=!0),0},A={}.hasOwnProperty,E=[],P=E.pop,N=E.push,O=E.push,L=E.slice,M=function(t,e){for(var i=0,n=t.length;i<n;i++)if(t[i]===e)return i;return-1},H="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",R="[\\x20\\t\\r\\n\\f]",F="(?:\\\\[\\da-fA-F]{1,6}"+R+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+R+"*("+F+")(?:"+R+"*([*^$|!~]?=)"+R+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+F+"))|)"+R+"*\\]",j=":("+F+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",z=new RegExp(R+"+","g"),$=new RegExp("^"+R+"+|((?:^|[^\\\\])(?:\\\\.)*)"+R+"+$","g"),B=new RegExp("^"+R+"*,"+R+"*"),U=new RegExp("^"+R+"*([>+~]|"+R+")"+R+"*"),q=new RegExp(R+"|>"),V=new RegExp(j),Y=new RegExp("^"+F+"$"),X={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),TAG:new RegExp("^("+F+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+j),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+R+"*(even|odd|(([+-]|)(\\d*)n|)"+R+"*(?:([+-]|)"+R+"*(\\d+)|))"+R+"*\\)|)","i"),bool:new RegExp("^(?:"+H+")$","i"),needsContext:new RegExp("^"+R+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+R+"*((?:-\\d)?\\d*)"+R+"*\\)|)(?=[^-]|$)","i")},G=/HTML$/i,K=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,tt=/[+~]/,et=new RegExp("\\\\[\\da-fA-F]{1,6}"+R+"?|\\\\([^\\r\\n\\f])","g"),it=function(t,e){var i="0x"+t.slice(1)-65536;return e||(i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320))},nt=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,st=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t},ot=function(){d()},at=_t((function(t){return!0===t.disabled&&"fieldset"===t.nodeName.toLowerCase()}),{dir:"parentNode",next:"legend"});try{O.apply(E=L.call(w.childNodes),w.childNodes),E[w.childNodes.length].nodeType}catch(t){O={apply:E.length?function(t,e){N.apply(t,L.call(e))}:function(t,e){for(var i=t.length,n=0;t[i++]=e[n++];);t.length=i-1}}}function rt(t,e,n,s){var o,r,c,h,u,f,v,b=e&&e.ownerDocument,w=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==w&&9!==w&&11!==w)return n;if(!s&&(d(e),e=e||p,g)){if(11!==w&&(u=Z.exec(t)))if(o=u[1]){if(9===w){if(!(c=e.getElementById(o)))return n;if(c.id===o)return n.push(c),n}else if(b&&(c=b.getElementById(o))&&y(e,c)&&c.id===o)return n.push(c),n}else{if(u[2])return O.apply(n,e.getElementsByTagName(t)),n;if((o=u[3])&&i.getElementsByClassName&&e.getElementsByClassName)return O.apply(n,e.getElementsByClassName(o)),n}if(i.qsa&&!k[t+" "]&&(!m||!m.test(t))&&(1!==w||"object"!==e.nodeName.toLowerCase())){if(v=t,b=e,1===w&&(q.test(t)||U.test(t))){for((b=tt.test(t)&&vt(e.parentNode)||e)===e&&i.scope||((h=e.getAttribute("id"))?h=h.replace(nt,st):e.setAttribute("id",h=_)),r=(f=a(t)).length;r--;)f[r]=(h?"#"+h:":scope")+" "+yt(f[r]);v=f.join(",")}try{return O.apply(n,b.querySelectorAll(v)),n}catch(e){k(t,!0)}finally{h===_&&e.removeAttribute("id")}}}return l(t.replace($,"$1"),e,n,s)}function lt(){var t=[];return function e(i,s){return t.push(i+" ")>n.cacheLength&&delete e[t.shift()],e[i+" "]=s}}function ct(t){return t[_]=!0,t}function ht(t){var e=p.createElement("fieldset");try{return!!t(e)}catch(t){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function ut(t,e){for(var i=t.split("|"),s=i.length;s--;)n.attrHandle[i[s]]=e}function dt(t,e){var i=e&&t,n=i&&1===t.nodeType&&1===e.nodeType&&t.sourceIndex-e.sourceIndex;if(n)return n;if(i)for(;i=i.nextSibling;)if(i===e)return-1;return t?1:-1}function pt(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function ft(t){return function(e){var i=e.nodeName.toLowerCase();return("input"===i||"button"===i)&&e.type===t}}function gt(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&at(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function mt(t){return ct((function(e){return e=+e,ct((function(i,n){for(var s,o=t([],i.length,e),a=o.length;a--;)i[s=o[a]]&&(i[s]=!(n[s]=i[s]))}))}))}function vt(t){return t&&void 0!==t.getElementsByTagName&&t}for(e in i=rt.support={},o=rt.isXML=function(t){var e=t.namespaceURI,i=(t.ownerDocument||t).documentElement;return!G.test(e||i&&i.nodeName||"HTML")},d=rt.setDocument=function(t){var e,s,a=t?t.ownerDocument||t:w;return a!=p&&9===a.nodeType&&a.documentElement?(f=(p=a).documentElement,g=!o(p),w!=p&&(s=p.defaultView)&&s.top!==s&&(s.addEventListener?s.addEventListener("unload",ot,!1):s.attachEvent&&s.attachEvent("onunload",ot)),i.scope=ht((function(t){return f.appendChild(t).appendChild(p.createElement("div")),void 0!==t.querySelectorAll&&!t.querySelectorAll(":scope fieldset div").length})),i.attributes=ht((function(t){return t.className="i",!t.getAttribute("className")})),i.getElementsByTagName=ht((function(t){return t.appendChild(p.createComment("")),!t.getElementsByTagName("*").length})),i.getElementsByClassName=Q.test(p.getElementsByClassName),i.getById=ht((function(t){return f.appendChild(t).id=_,!p.getElementsByName||!p.getElementsByName(_).length})),i.getById?(n.filter.ID=function(t){var e=t.replace(et,it);return function(t){return t.getAttribute("id")===e}},n.find.ID=function(t,e){if(void 0!==e.getElementById&&g){var i=e.getElementById(t);return i?[i]:[]}}):(n.filter.ID=function(t){var e=t.replace(et,it);return function(t){var i=void 0!==t.getAttributeNode&&t.getAttributeNode("id");return i&&i.value===e}},n.find.ID=function(t,e){if(void 0!==e.getElementById&&g){var i,n,s,o=e.getElementById(t);if(o){if((i=o.getAttributeNode("id"))&&i.value===t)return[o];for(s=e.getElementsByName(t),n=0;o=s[n++];)if((i=o.getAttributeNode("id"))&&i.value===t)return[o]}return[]}}),n.find.TAG=i.getElementsByTagName?function(t,e){return void 0!==e.getElementsByTagName?e.getElementsByTagName(t):i.qsa?e.querySelectorAll(t):void 0}:function(t,e){var i,n=[],s=0,o=e.getElementsByTagName(t);if("*"===t){for(;i=o[s++];)1===i.nodeType&&n.push(i);return n}return o},n.find.CLASS=i.getElementsByClassName&&function(t,e){if(void 0!==e.getElementsByClassName&&g)return e.getElementsByClassName(t)},v=[],m=[],(i.qsa=Q.test(p.querySelectorAll))&&(ht((function(t){var e;f.appendChild(t).innerHTML="<a id='"+_+"'></a><select id='"+_+"-\r\\' msallowcapture=''><option selected=''></option></select>",t.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]="+R+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||m.push("\\["+R+"*(?:value|"+H+")"),t.querySelectorAll("[id~="+_+"-]").length||m.push("~="),(e=p.createElement("input")).setAttribute("name",""),t.appendChild(e),t.querySelectorAll("[name='']").length||m.push("\\["+R+"*name"+R+"*="+R+"*(?:''|\"\")"),t.querySelectorAll(":checked").length||m.push(":checked"),t.querySelectorAll("a#"+_+"+*").length||m.push(".#.+[+~]"),t.querySelectorAll("\\\f"),m.push("[\\r\\n\\f]")})),ht((function(t){t.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var e=p.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&m.push("name"+R+"*[*^$|!~]?="),2!==t.querySelectorAll(":enabled").length&&m.push(":enabled",":disabled"),f.appendChild(t).disabled=!0,2!==t.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),m.push(",.*:")}))),(i.matchesSelector=Q.test(b=f.matches||f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ht((function(t){i.disconnectedMatch=b.call(t,"*"),b.call(t,"[s!='']:x"),v.push("!=",j)})),m=m.length&&new RegExp(m.join("|")),v=v.length&&new RegExp(v.join("|")),e=Q.test(f.compareDocumentPosition),y=e||Q.test(f.contains)?function(t,e){var i=9===t.nodeType?t.documentElement:t,n=e&&e.parentNode;return t===n||!(!n||1!==n.nodeType||!(i.contains?i.contains(n):t.compareDocumentPosition&&16&t.compareDocumentPosition(n)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},I=e?function(t,e){if(t===e)return u=!0,0;var n=!t.compareDocumentPosition-!e.compareDocumentPosition;return n||(1&(n=(t.ownerDocument||t)==(e.ownerDocument||e)?t.compareDocumentPosition(e):1)||!i.sortDetached&&e.compareDocumentPosition(t)===n?t==p||t.ownerDocument==w&&y(w,t)?-1:e==p||e.ownerDocument==w&&y(w,e)?1:h?M(h,t)-M(h,e):0:4&n?-1:1)}:function(t,e){if(t===e)return u=!0,0;var i,n=0,s=t.parentNode,o=e.parentNode,a=[t],r=[e];if(!s||!o)return t==p?-1:e==p?1:s?-1:o?1:h?M(h,t)-M(h,e):0;if(s===o)return dt(t,e);for(i=t;i=i.parentNode;)a.unshift(i);for(i=e;i=i.parentNode;)r.unshift(i);for(;a[n]===r[n];)n++;return n?dt(a[n],r[n]):a[n]==w?-1:r[n]==w?1:0},p):p},rt.matches=function(t,e){return rt(t,null,null,e)},rt.matchesSelector=function(t,e){if(d(t),i.matchesSelector&&g&&!k[e+" "]&&(!v||!v.test(e))&&(!m||!m.test(e)))try{var n=b.call(t,e);if(n||i.disconnectedMatch||t.document&&11!==t.document.nodeType)return n}catch(t){k(e,!0)}return rt(e,p,null,[t]).length>0},rt.contains=function(t,e){return(t.ownerDocument||t)!=p&&d(t),y(t,e)},rt.attr=function(t,e){(t.ownerDocument||t)!=p&&d(t);var s=n.attrHandle[e.toLowerCase()],o=s&&A.call(n.attrHandle,e.toLowerCase())?s(t,e,!g):void 0;return void 0!==o?o:i.attributes||!g?t.getAttribute(e):(o=t.getAttributeNode(e))&&o.specified?o.value:null},rt.escape=function(t){return(t+"").replace(nt,st)},rt.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},rt.uniqueSort=function(t){var e,n=[],s=0,o=0;if(u=!i.detectDuplicates,h=!i.sortStable&&t.slice(0),t.sort(I),u){for(;e=t[o++];)e===t[o]&&(s=n.push(o));for(;s--;)t.splice(n[s],1)}return h=null,t},s=rt.getText=function(t){var e,i="",n=0,o=t.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)i+=s(t)}else if(3===o||4===o)return t.nodeValue}else for(;e=t[n++];)i+=s(e);return i},(n=rt.selectors={cacheLength:50,createPseudo:ct,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(et,it),t[3]=(t[3]||t[4]||t[5]||"").replace(et,it),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||rt.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&rt.error(t[0]),t},PSEUDO:function(t){var e,i=!t[6]&&t[2];return X.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":i&&V.test(i)&&(e=a(i,!0))&&(e=i.indexOf(")",i.length-e)-i.length)&&(t[0]=t[0].slice(0,e),t[2]=i.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(et,it).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=S[t+" "];return e||(e=new RegExp("(^|"+R+")"+t+"("+R+"|$)"))&&S(t,(function(t){return e.test("string"==typeof t.className&&t.className||void 0!==t.getAttribute&&t.getAttribute("class")||"")}))},ATTR:function(t,e,i){return function(n){var s=rt.attr(n,t);return null==s?"!="===e:!e||(s+="","="===e?s===i:"!="===e?s!==i:"^="===e?i&&0===s.indexOf(i):"*="===e?i&&s.indexOf(i)>-1:"$="===e?i&&s.slice(-i.length)===i:"~="===e?(" "+s.replace(z," ")+" ").indexOf(i)>-1:"|="===e&&(s===i||s.slice(0,i.length+1)===i+"-"))}},CHILD:function(t,e,i,n,s){var o="nth"!==t.slice(0,3),a="last"!==t.slice(-4),r="of-type"===e;return 1===n&&0===s?function(t){return!!t.parentNode}:function(e,i,l){var c,h,u,d,p,f,g=o!==a?"nextSibling":"previousSibling",m=e.parentNode,v=r&&e.nodeName.toLowerCase(),b=!l&&!r,y=!1;if(m){if(o){for(;g;){for(d=e;d=d[g];)if(r?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;f=g="only"===t&&!f&&"nextSibling"}return!0}if(f=[a?m.firstChild:m.lastChild],a&&b){for(y=(p=(c=(h=(u=(d=m)[_]||(d[_]={}))[d.uniqueID]||(u[d.uniqueID]={}))[t]||[])[0]===x&&c[1])&&c[2],d=p&&m.childNodes[p];d=++p&&d&&d[g]||(y=p=0)||f.pop();)if(1===d.nodeType&&++y&&d===e){h[t]=[x,p,y];break}}else if(b&&(y=p=(c=(h=(u=(d=e)[_]||(d[_]={}))[d.uniqueID]||(u[d.uniqueID]={}))[t]||[])[0]===x&&c[1]),!1===y)for(;(d=++p&&d&&d[g]||(y=p=0)||f.pop())&&((r?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++y||(b&&((h=(u=d[_]||(d[_]={}))[d.uniqueID]||(u[d.uniqueID]={}))[t]=[x,y]),d!==e)););return(y-=s)===n||y%n==0&&y/n>=0}}},PSEUDO:function(t,e){var i,s=n.pseudos[t]||n.setFilters[t.toLowerCase()]||rt.error("unsupported pseudo: "+t);return s[_]?s(e):s.length>1?(i=[t,t,"",e],n.setFilters.hasOwnProperty(t.toLowerCase())?ct((function(t,i){for(var n,o=s(t,e),a=o.length;a--;)t[n=M(t,o[a])]=!(i[n]=o[a])})):function(t){return s(t,0,i)}):s}},pseudos:{not:ct((function(t){var e=[],i=[],n=r(t.replace($,"$1"));return n[_]?ct((function(t,e,i,s){for(var o,a=n(t,null,s,[]),r=t.length;r--;)(o=a[r])&&(t[r]=!(e[r]=o))})):function(t,s,o){return e[0]=t,n(e,null,o,i),e[0]=null,!i.pop()}})),has:ct((function(t){return function(e){return rt(t,e).length>0}})),contains:ct((function(t){return t=t.replace(et,it),function(e){return(e.textContent||s(e)).indexOf(t)>-1}})),lang:ct((function(t){return Y.test(t||"")||rt.error("unsupported lang: "+t),t=t.replace(et,it).toLowerCase(),function(e){var i;do{if(i=g?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(i=i.toLowerCase())===t||0===i.indexOf(t+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}})),target:function(e){var i=t.location&&t.location.hash;return i&&i.slice(1)===e.id},root:function(t){return t===f},focus:function(t){return t===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:gt(!1),disabled:gt(!0),checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,!0===t.selected},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!n.pseudos.empty(t)},header:function(t){return J.test(t.nodeName)},input:function(t){return K.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:mt((function(){return[0]})),last:mt((function(t,e){return[e-1]})),eq:mt((function(t,e,i){return[i<0?i+e:i]})),even:mt((function(t,e){for(var i=0;i<e;i+=2)t.push(i);return t})),odd:mt((function(t,e){for(var i=1;i<e;i+=2)t.push(i);return t})),lt:mt((function(t,e,i){for(var n=i<0?i+e:i>e?e:i;--n>=0;)t.push(n);return t})),gt:mt((function(t,e,i){for(var n=i<0?i+e:i;++n<e;)t.push(n);return t}))}}).pseudos.nth=n.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})n.pseudos[e]=pt(e);for(e in{submit:!0,reset:!0})n.pseudos[e]=ft(e);function bt(){}function yt(t){for(var e=0,i=t.length,n="";e<i;e++)n+=t[e].value;return n}function _t(t,e,i){var n=e.dir,s=e.next,o=s||n,a=i&&"parentNode"===o,r=C++;return e.first?function(e,i,s){for(;e=e[n];)if(1===e.nodeType||a)return t(e,i,s);return!1}:function(e,i,l){var c,h,u,d=[x,r];if(l){for(;e=e[n];)if((1===e.nodeType||a)&&t(e,i,l))return!0}else for(;e=e[n];)if(1===e.nodeType||a)if(h=(u=e[_]||(e[_]={}))[e.uniqueID]||(u[e.uniqueID]={}),s&&s===e.nodeName.toLowerCase())e=e[n]||e;else{if((c=h[o])&&c[0]===x&&c[1]===r)return d[2]=c[2];if(h[o]=d,d[2]=t(e,i,l))return!0}return!1}}function wt(t){return t.length>1?function(e,i,n){for(var s=t.length;s--;)if(!t[s](e,i,n))return!1;return!0}:t[0]}function xt(t,e,i,n,s){for(var o,a=[],r=0,l=t.length,c=null!=e;r<l;r++)(o=t[r])&&(i&&!i(o,n,s)||(a.push(o),c&&e.push(r)));return a}function Ct(t,e,i,n,s,o){return n&&!n[_]&&(n=Ct(n)),s&&!s[_]&&(s=Ct(s,o)),ct((function(o,a,r,l){var c,h,u,d=[],p=[],f=a.length,g=o||function(t,e,i){for(var n=0,s=e.length;n<s;n++)rt(t,e[n],i);return i}(e||"*",r.nodeType?[r]:r,[]),m=!t||!o&&e?g:xt(g,d,t,r,l),v=i?s||(o?t:f||n)?[]:a:m;if(i&&i(m,v,r,l),n)for(c=xt(v,p),n(c,[],r,l),h=c.length;h--;)(u=c[h])&&(v[p[h]]=!(m[p[h]]=u));if(o){if(s||t){if(s){for(c=[],h=v.length;h--;)(u=v[h])&&c.push(m[h]=u);s(null,v=[],c,l)}for(h=v.length;h--;)(u=v[h])&&(c=s?M(o,u):d[h])>-1&&(o[c]=!(a[c]=u))}}else v=xt(v===a?v.splice(f,v.length):v),s?s(null,a,v,l):O.apply(a,v)}))}function St(t){for(var e,i,s,o=t.length,a=n.relative[t[0].type],r=a||n.relative[" "],l=a?1:0,h=_t((function(t){return t===e}),r,!0),u=_t((function(t){return M(e,t)>-1}),r,!0),d=[function(t,i,n){var s=!a&&(n||i!==c)||((e=i).nodeType?h(t,i,n):u(t,i,n));return e=null,s}];l<o;l++)if(i=n.relative[t[l].type])d=[_t(wt(d),i)];else{if((i=n.filter[t[l].type].apply(null,t[l].matches))[_]){for(s=++l;s<o&&!n.relative[t[s].type];s++);return Ct(l>1&&wt(d),l>1&&yt(t.slice(0,l-1).concat({value:" "===t[l-2].type?"*":""})).replace($,"$1"),i,l<s&&St(t.slice(l,s)),s<o&&St(t=t.slice(s)),s<o&&yt(t))}d.push(i)}return wt(d)}return bt.prototype=n.filters=n.pseudos,n.setFilters=new bt,a=rt.tokenize=function(t,e){var i,s,o,a,r,l,c,h=D[t+" "];if(h)return e?0:h.slice(0);for(r=t,l=[],c=n.preFilter;r;){for(a in i&&!(s=B.exec(r))||(s&&(r=r.slice(s[0].length)||r),l.push(o=[])),i=!1,(s=U.exec(r))&&(i=s.shift(),o.push({value:i,type:s[0].replace($," ")}),r=r.slice(i.length)),n.filter)!(s=X[a].exec(r))||c[a]&&!(s=c[a](s))||(i=s.shift(),o.push({value:i,type:a,matches:s}),r=r.slice(i.length));if(!i)break}return e?r.length:r?rt.error(t):D(t,l).slice(0)},r=rt.compile=function(t,e){var i,s=[],o=[],r=T[t+" "];if(!r){for(e||(e=a(t)),i=e.length;i--;)(r=St(e[i]))[_]?s.push(r):o.push(r);(r=T(t,function(t,e){var i=e.length>0,s=t.length>0,o=function(o,a,r,l,h){var u,f,m,v=0,b="0",y=o&&[],_=[],w=c,C=o||s&&n.find.TAG("*",h),S=x+=null==w?1:Math.random()||.1,D=C.length;for(h&&(c=a==p||a||h);b!==D&&null!=(u=C[b]);b++){if(s&&u){for(f=0,a||u.ownerDocument==p||(d(u),r=!g);m=t[f++];)if(m(u,a||p,r)){l.push(u);break}h&&(x=S)}i&&((u=!m&&u)&&v--,o&&y.push(u))}if(v+=b,i&&b!==v){for(f=0;m=e[f++];)m(y,_,a,r);if(o){if(v>0)for(;b--;)y[b]||_[b]||(_[b]=P.call(l));_=xt(_)}O.apply(l,_),h&&!o&&_.length>0&&v+e.length>1&&rt.uniqueSort(l)}return h&&(x=S,c=w),y};return i?ct(o):o}(o,s))).selector=t}return r},l=rt.select=function(t,e,i,s){var o,l,c,h,u,d="function"==typeof t&&t,p=!s&&a(t=d.selector||t);if(i=i||[],1===p.length){if((l=p[0]=p[0].slice(0)).length>2&&"ID"===(c=l[0]).type&&9===e.nodeType&&g&&n.relative[l[1].type]){if(!(e=(n.find.ID(c.matches[0].replace(et,it),e)||[])[0]))return i;d&&(e=e.parentNode),t=t.slice(l.shift().value.length)}for(o=X.needsContext.test(t)?0:l.length;o--&&(c=l[o],!n.relative[h=c.type]);)if((u=n.find[h])&&(s=u(c.matches[0].replace(et,it),tt.test(l[0].type)&&vt(e.parentNode)||e))){if(l.splice(o,1),!(t=s.length&&yt(l)))return O.apply(i,s),i;break}}return(d||r(t,p))(s,e,!g,i,!e||tt.test(t)&&vt(e.parentNode)||e),i},i.sortStable=_.split("").sort(I).join("")===_,i.detectDuplicates=!!u,d(),i.sortDetached=ht((function(t){return 1&t.compareDocumentPosition(p.createElement("fieldset"))})),ht((function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")}))||ut("type|href|height|width",(function(t,e,i){if(!i)return t.getAttribute(e,"type"===e.toLowerCase()?1:2)})),i.attributes&&ht((function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")}))||ut("value",(function(t,e,i){if(!i&&"input"===t.nodeName.toLowerCase())return t.defaultValue})),ht((function(t){return null==t.getAttribute("disabled")}))||ut(H,(function(t,e,i){var n;if(!i)return!0===t[e]?e.toLowerCase():(n=t.getAttributeNode(e))&&n.specified?n.value:null})),rt}(i);C.find=D,C.expr=D.selectors,C.expr[":"]=C.expr.pseudos,C.uniqueSort=C.unique=D.uniqueSort,C.text=D.getText,C.isXMLDoc=D.isXML,C.contains=D.contains,C.escapeSelector=D.escape;var T=function(t,e,i){for(var n=[],s=void 0!==i;(t=t[e])&&9!==t.nodeType;)if(1===t.nodeType){if(s&&C(t).is(i))break;n.push(t)}return n},k=function(t,e){for(var i=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&i.push(t);return i},I=C.expr.match.needsContext;function A(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()}var E=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function P(t,e,i){return v(e)?C.grep(t,(function(t,n){return!!e.call(t,n,t)!==i})):e.nodeType?C.grep(t,(function(t){return t===e!==i})):"string"!=typeof e?C.grep(t,(function(t){return h.call(e,t)>-1!==i})):C.filter(e,t,i)}C.filter=function(t,e,i){var n=e[0];return i&&(t=":not("+t+")"),1===e.length&&1===n.nodeType?C.find.matchesSelector(n,t)?[n]:[]:C.find.matches(t,C.grep(e,(function(t){return 1===t.nodeType})))},C.fn.extend({find:function(t){var e,i,n=this.length,s=this;if("string"!=typeof t)return this.pushStack(C(t).filter((function(){for(e=0;e<n;e++)if(C.contains(s[e],this))return!0})));for(i=this.pushStack([]),e=0;e<n;e++)C.find(t,s[e],i);return n>1?C.uniqueSort(i):i},filter:function(t){return this.pushStack(P(this,t||[],!1))},not:function(t){return this.pushStack(P(this,t||[],!0))},is:function(t){return!!P(this,"string"==typeof t&&I.test(t)?C(t):t||[],!1).length}});var N,O=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(C.fn.init=function(t,e,i){var n,s;if(!t)return this;if(i=i||N,"string"==typeof t){if(!(n="<"===t[0]&&">"===t[t.length-1]&&t.length>=3?[null,t,null]:O.exec(t))||!n[1]&&e)return!e||e.jquery?(e||i).find(t):this.constructor(e).find(t);if(n[1]){if(e=e instanceof C?e[0]:e,C.merge(this,C.parseHTML(n[1],e&&e.nodeType?e.ownerDocument||e:y,!0)),E.test(n[1])&&C.isPlainObject(e))for(n in e)v(this[n])?this[n](e[n]):this.attr(n,e[n]);return this}return(s=y.getElementById(n[2]))&&(this[0]=s,this.length=1),this}return t.nodeType?(this[0]=t,this.length=1,this):v(t)?void 0!==i.ready?i.ready(t):t(C):C.makeArray(t,this)}).prototype=C.fn,N=C(y);var L=/^(?:parents|prev(?:Until|All))/,M={children:!0,contents:!0,next:!0,prev:!0};function H(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}C.fn.extend({has:function(t){var e=C(t,this),i=e.length;return this.filter((function(){for(var t=0;t<i;t++)if(C.contains(this,e[t]))return!0}))},closest:function(t,e){var i,n=0,s=this.length,o=[],a="string"!=typeof t&&C(t);if(!I.test(t))for(;n<s;n++)for(i=this[n];i&&i!==e;i=i.parentNode)if(i.nodeType<11&&(a?a.index(i)>-1:1===i.nodeType&&C.find.matchesSelector(i,t))){o.push(i);break}return this.pushStack(o.length>1?C.uniqueSort(o):o)},index:function(t){return t?"string"==typeof t?h.call(C(t),this[0]):h.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(C.uniqueSort(C.merge(this.get(),C(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),C.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return T(t,"parentNode")},parentsUntil:function(t,e,i){return T(t,"parentNode",i)},next:function(t){return H(t,"nextSibling")},prev:function(t){return H(t,"previousSibling")},nextAll:function(t){return T(t,"nextSibling")},prevAll:function(t){return T(t,"previousSibling")},nextUntil:function(t,e,i){return T(t,"nextSibling",i)},prevUntil:function(t,e,i){return T(t,"previousSibling",i)},siblings:function(t){return k((t.parentNode||{}).firstChild,t)},children:function(t){return k(t.firstChild)},contents:function(t){return null!=t.contentDocument&&a(t.contentDocument)?t.contentDocument:(A(t,"template")&&(t=t.content||t),C.merge([],t.childNodes))}},(function(t,e){C.fn[t]=function(i,n){var s=C.map(this,e,i);return"Until"!==t.slice(-5)&&(n=i),n&&"string"==typeof n&&(s=C.filter(n,s)),this.length>1&&(M[t]||C.uniqueSort(s),L.test(t)&&s.reverse()),this.pushStack(s)}}));var R=/[^\x20\t\r\n\f]+/g;function F(t){return t}function W(t){throw t}function j(t,e,i,n){var s;try{t&&v(s=t.promise)?s.call(t).done(e).fail(i):t&&v(s=t.then)?s.call(t,e,i):e.apply(void 0,[t].slice(n))}catch(t){i.apply(void 0,[t])}}C.Callbacks=function(t){t="string"==typeof t?function(t){var e={};return C.each(t.match(R)||[],(function(t,i){e[i]=!0})),e}(t):C.extend({},t);var e,i,n,s,o=[],a=[],r=-1,l=function(){for(s=s||t.once,n=e=!0;a.length;r=-1)for(i=a.shift();++r<o.length;)!1===o[r].apply(i[0],i[1])&&t.stopOnFalse&&(r=o.length,i=!1);t.memory||(i=!1),e=!1,s&&(o=i?[]:"")},c={add:function(){return o&&(i&&!e&&(r=o.length-1,a.push(i)),function e(i){C.each(i,(function(i,n){v(n)?t.unique&&c.has(n)||o.push(n):n&&n.length&&"string"!==x(n)&&e(n)}))}(arguments),i&&!e&&l()),this},remove:function(){return C.each(arguments,(function(t,e){for(var i;(i=C.inArray(e,o,i))>-1;)o.splice(i,1),i<=r&&r--})),this},has:function(t){return t?C.inArray(t,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return s=a=[],o=i="",this},disabled:function(){return!o},lock:function(){return s=a=[],i||e||(o=i=""),this},locked:function(){return!!s},fireWith:function(t,i){return s||(i=[t,(i=i||[]).slice?i.slice():i],a.push(i),e||l()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},C.extend({Deferred:function(t){var e=[["notify","progress",C.Callbacks("memory"),C.Callbacks("memory"),2],["resolve","done",C.Callbacks("once memory"),C.Callbacks("once memory"),0,"resolved"],["reject","fail",C.Callbacks("once memory"),C.Callbacks("once memory"),1,"rejected"]],n="pending",s={state:function(){return n},always:function(){return o.done(arguments).fail(arguments),this},catch:function(t){return s.then(null,t)},pipe:function(){var t=arguments;return C.Deferred((function(i){C.each(e,(function(e,n){var s=v(t[n[4]])&&t[n[4]];o[n[1]]((function(){var t=s&&s.apply(this,arguments);t&&v(t.promise)?t.promise().progress(i.notify).done(i.resolve).fail(i.reject):i[n[0]+"With"](this,s?[t]:arguments)}))})),t=null})).promise()},then:function(t,n,s){var o=0;function a(t,e,n,s){return function(){var r=this,l=arguments,c=function(){var i,c;if(!(t<o)){if((i=n.apply(r,l))===e.promise())throw new TypeError("Thenable self-resolution");c=i&&("object"==typeof i||"function"==typeof i)&&i.then,v(c)?s?c.call(i,a(o,e,F,s),a(o,e,W,s)):(o++,c.call(i,a(o,e,F,s),a(o,e,W,s),a(o,e,F,e.notifyWith))):(n!==F&&(r=void 0,l=[i]),(s||e.resolveWith)(r,l))}},h=s?c:function(){try{c()}catch(i){C.Deferred.exceptionHook&&C.Deferred.exceptionHook(i,h.stackTrace),t+1>=o&&(n!==W&&(r=void 0,l=[i]),e.rejectWith(r,l))}};t?h():(C.Deferred.getStackHook&&(h.stackTrace=C.Deferred.getStackHook()),i.setTimeout(h))}}return C.Deferred((function(i){e[0][3].add(a(0,i,v(s)?s:F,i.notifyWith)),e[1][3].add(a(0,i,v(t)?t:F)),e[2][3].add(a(0,i,v(n)?n:W))})).promise()},promise:function(t){return null!=t?C.extend(t,s):s}},o={};return C.each(e,(function(t,i){var a=i[2],r=i[5];s[i[1]]=a.add,r&&a.add((function(){n=r}),e[3-t][2].disable,e[3-t][3].disable,e[0][2].lock,e[0][3].lock),a.add(i[3].fire),o[i[0]]=function(){return o[i[0]+"With"](this===o?void 0:this,arguments),this},o[i[0]+"With"]=a.fireWith})),s.promise(o),t&&t.call(o,o),o},when:function(t){var e=arguments.length,i=e,n=Array(i),s=r.call(arguments),o=C.Deferred(),a=function(t){return function(i){n[t]=this,s[t]=arguments.length>1?r.call(arguments):i,--e||o.resolveWith(n,s)}};if(e<=1&&(j(t,o.done(a(i)).resolve,o.reject,!e),"pending"===o.state()||v(s[i]&&s[i].then)))return o.then();for(;i--;)j(s[i],a(i),o.reject);return o.promise()}});var z=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;C.Deferred.exceptionHook=function(t,e){i.console&&i.console.warn&&t&&z.test(t.name)&&i.console.warn("jQuery.Deferred exception: "+t.message,t.stack,e)},C.readyException=function(t){i.setTimeout((function(){throw t}))};var $=C.Deferred();function B(){y.removeEventListener("DOMContentLoaded",B),i.removeEventListener("load",B),C.ready()}C.fn.ready=function(t){return $.then(t).catch((function(t){C.readyException(t)})),this},C.extend({isReady:!1,readyWait:1,ready:function(t){(!0===t?--C.readyWait:C.isReady)||(C.isReady=!0,!0!==t&&--C.readyWait>0||$.resolveWith(y,[C]))}}),C.ready.then=$.then,"complete"===y.readyState||"loading"!==y.readyState&&!y.documentElement.doScroll?i.setTimeout(C.ready):(y.addEventListener("DOMContentLoaded",B),i.addEventListener("load",B));var U=function(t,e,i,n,s,o,a){var r=0,l=t.length,c=null==i;if("object"===x(i))for(r in s=!0,i)U(t,e,r,i[r],!0,o,a);else if(void 0!==n&&(s=!0,v(n)||(a=!0),c&&(a?(e.call(t,n),e=null):(c=e,e=function(t,e,i){return c.call(C(t),i)})),e))for(;r<l;r++)e(t[r],i,a?n:n.call(t[r],r,e(t[r],i)));return s?t:c?e.call(t):l?e(t[0],i):o},q=/^-ms-/,V=/-([a-z])/g;function Y(t,e){return e.toUpperCase()}function X(t){return t.replace(q,"ms-").replace(V,Y)}var G=function(t){return 1===t.nodeType||9===t.nodeType||!+t.nodeType};function K(){this.expando=C.expando+K.uid++}K.uid=1,K.prototype={cache:function(t){var e=t[this.expando];return e||(e={},G(t)&&(t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{value:e,configurable:!0}))),e},set:function(t,e,i){var n,s=this.cache(t);if("string"==typeof e)s[X(e)]=i;else for(n in e)s[X(n)]=e[n];return s},get:function(t,e){return void 0===e?this.cache(t):t[this.expando]&&t[this.expando][X(e)]},access:function(t,e,i){return void 0===e||e&&"string"==typeof e&&void 0===i?this.get(t,e):(this.set(t,e,i),void 0!==i?i:e)},remove:function(t,e){var i,n=t[this.expando];if(void 0!==n){if(void 0!==e){i=(e=Array.isArray(e)?e.map(X):(e=X(e))in n?[e]:e.match(R)||[]).length;for(;i--;)delete n[e[i]]}(void 0===e||C.isEmptyObject(n))&&(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var e=t[this.expando];return void 0!==e&&!C.isEmptyObject(e)}};var J=new K,Q=new K,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,tt=/[A-Z]/g;function et(t,e,i){var n;if(void 0===i&&1===t.nodeType)if(n="data-"+e.replace(tt,"-$&").toLowerCase(),"string"==typeof(i=t.getAttribute(n))){try{i=function(t){return"true"===t||"false"!==t&&("null"===t?null:t===+t+""?+t:Z.test(t)?JSON.parse(t):t)}(i)}catch(t){}Q.set(t,e,i)}else i=void 0;return i}C.extend({hasData:function(t){return Q.hasData(t)||J.hasData(t)},data:function(t,e,i){return Q.access(t,e,i)},removeData:function(t,e){Q.remove(t,e)},_data:function(t,e,i){return J.access(t,e,i)},_removeData:function(t,e){J.remove(t,e)}}),C.fn.extend({data:function(t,e){var i,n,s,o=this[0],a=o&&o.attributes;if(void 0===t){if(this.length&&(s=Q.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){for(i=a.length;i--;)a[i]&&0===(n=a[i].name).indexOf("data-")&&(n=X(n.slice(5)),et(o,n,s[n]));J.set(o,"hasDataAttrs",!0)}return s}return"object"==typeof t?this.each((function(){Q.set(this,t)})):U(this,(function(e){var i;if(o&&void 0===e)return void 0!==(i=Q.get(o,t))||void 0!==(i=et(o,t))?i:void 0;this.each((function(){Q.set(this,t,e)}))}),null,e,arguments.length>1,null,!0)},removeData:function(t){return this.each((function(){Q.remove(this,t)}))}}),C.extend({queue:function(t,e,i){var n;if(t)return e=(e||"fx")+"queue",n=J.get(t,e),i&&(!n||Array.isArray(i)?n=J.access(t,e,C.makeArray(i)):n.push(i)),n||[]},dequeue:function(t,e){e=e||"fx";var i=C.queue(t,e),n=i.length,s=i.shift(),o=C._queueHooks(t,e);"inprogress"===s&&(s=i.shift(),n--),s&&("fx"===e&&i.unshift("inprogress"),delete o.stop,s.call(t,(function(){C.dequeue(t,e)}),o)),!n&&o&&o.empty.fire()},_queueHooks:function(t,e){var i=e+"queueHooks";return J.get(t,i)||J.access(t,i,{empty:C.Callbacks("once memory").add((function(){J.remove(t,[e+"queue",i])}))})}}),C.fn.extend({queue:function(t,e){var i=2;return"string"!=typeof t&&(e=t,t="fx",i--),arguments.length<i?C.queue(this[0],t):void 0===e?this:this.each((function(){var i=C.queue(this,t,e);C._queueHooks(this,t),"fx"===t&&"inprogress"!==i[0]&&C.dequeue(this,t)}))},dequeue:function(t){return this.each((function(){C.dequeue(this,t)}))},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){var i,n=1,s=C.Deferred(),o=this,a=this.length,r=function(){--n||s.resolveWith(o,[o])};for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";a--;)(i=J.get(o[a],t+"queueHooks"))&&i.empty&&(n++,i.empty.add(r));return r(),s.promise(e)}});var it=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,nt=new RegExp("^(?:([+-])=|)("+it+")([a-z%]*)$","i"),st=["Top","Right","Bottom","Left"],ot=y.documentElement,at=function(t){return C.contains(t.ownerDocument,t)},rt={composed:!0};ot.getRootNode&&(at=function(t){return C.contains(t.ownerDocument,t)||t.getRootNode(rt)===t.ownerDocument});var lt=function(t,e){return"none"===(t=e||t).style.display||""===t.style.display&&at(t)&&"none"===C.css(t,"display")};function ct(t,e,i,n){var s,o,a=20,r=n?function(){return n.cur()}:function(){return C.css(t,e,"")},l=r(),c=i&&i[3]||(C.cssNumber[e]?"":"px"),h=t.nodeType&&(C.cssNumber[e]||"px"!==c&&+l)&&nt.exec(C.css(t,e));if(h&&h[3]!==c){for(l/=2,c=c||h[3],h=+l||1;a--;)C.style(t,e,h+c),(1-o)*(1-(o=r()/l||.5))<=0&&(a=0),h/=o;h*=2,C.style(t,e,h+c),i=i||[]}return i&&(h=+h||+l||0,s=i[1]?h+(i[1]+1)*i[2]:+i[2],n&&(n.unit=c,n.start=h,n.end=s)),s}var ht={};function ut(t){var e,i=t.ownerDocument,n=t.nodeName,s=ht[n];return s||(e=i.body.appendChild(i.createElement(n)),s=C.css(e,"display"),e.parentNode.removeChild(e),"none"===s&&(s="block"),ht[n]=s,s)}function dt(t,e){for(var i,n,s=[],o=0,a=t.length;o<a;o++)(n=t[o]).style&&(i=n.style.display,e?("none"===i&&(s[o]=J.get(n,"display")||null,s[o]||(n.style.display="")),""===n.style.display&&lt(n)&&(s[o]=ut(n))):"none"!==i&&(s[o]="none",J.set(n,"display",i)));for(o=0;o<a;o++)null!=s[o]&&(t[o].style.display=s[o]);return t}C.fn.extend({show:function(){return dt(this,!0)},hide:function(){return dt(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each((function(){lt(this)?C(this).show():C(this).hide()}))}});var pt,ft,gt=/^(?:checkbox|radio)$/i,mt=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,vt=/^$|^module$|\/(?:java|ecma)script/i;pt=y.createDocumentFragment().appendChild(y.createElement("div")),(ft=y.createElement("input")).setAttribute("type","radio"),ft.setAttribute("checked","checked"),ft.setAttribute("name","t"),pt.appendChild(ft),m.checkClone=pt.cloneNode(!0).cloneNode(!0).lastChild.checked,pt.innerHTML="<textarea>x</textarea>",m.noCloneChecked=!!pt.cloneNode(!0).lastChild.defaultValue,pt.innerHTML="<option></option>",m.option=!!pt.lastChild;var bt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function yt(t,e){var i;return i=void 0!==t.getElementsByTagName?t.getElementsByTagName(e||"*"):void 0!==t.querySelectorAll?t.querySelectorAll(e||"*"):[],void 0===e||e&&A(t,e)?C.merge([t],i):i}function _t(t,e){for(var i=0,n=t.length;i<n;i++)J.set(t[i],"globalEval",!e||J.get(e[i],"globalEval"))}bt.tbody=bt.tfoot=bt.colgroup=bt.caption=bt.thead,bt.th=bt.td,m.option||(bt.optgroup=bt.option=[1,"<select multiple='multiple'>","</select>"]);var wt=/<|&#?\w+;/;function xt(t,e,i,n,s){for(var o,a,r,l,c,h,u=e.createDocumentFragment(),d=[],p=0,f=t.length;p<f;p++)if((o=t[p])||0===o)if("object"===x(o))C.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){for(a=a||u.appendChild(e.createElement("div")),r=(mt.exec(o)||["",""])[1].toLowerCase(),l=bt[r]||bt._default,a.innerHTML=l[1]+C.htmlPrefilter(o)+l[2],h=l[0];h--;)a=a.lastChild;C.merge(d,a.childNodes),(a=u.firstChild).textContent=""}else d.push(e.createTextNode(o));for(u.textContent="",p=0;o=d[p++];)if(n&&C.inArray(o,n)>-1)s&&s.push(o);else if(c=at(o),a=yt(u.appendChild(o),"script"),c&&_t(a),i)for(h=0;o=a[h++];)vt.test(o.type||"")&&i.push(o);return u}var Ct=/^key/,St=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Dt=/^([^.]*)(?:\.(.+)|)/;function Tt(){return!0}function kt(){return!1}function It(t,e){return t===function(){try{return y.activeElement}catch(t){}}()==("focus"===e)}function At(t,e,i,n,s,o){var a,r;if("object"==typeof e){for(r in"string"!=typeof i&&(n=n||i,i=void 0),e)At(t,r,i,n,e[r],o);return t}if(null==n&&null==s?(s=i,n=i=void 0):null==s&&("string"==typeof i?(s=n,n=void 0):(s=n,n=i,i=void 0)),!1===s)s=kt;else if(!s)return t;return 1===o&&(a=s,(s=function(t){return C().off(t),a.apply(this,arguments)}).guid=a.guid||(a.guid=C.guid++)),t.each((function(){C.event.add(this,e,s,n,i)}))}function Et(t,e,i){i?(J.set(t,e,!1),C.event.add(t,e,{namespace:!1,handler:function(t){var n,s,o=J.get(this,e);if(1&t.isTrigger&&this[e]){if(o.length)(C.event.special[e]||{}).delegateType&&t.stopPropagation();else if(o=r.call(arguments),J.set(this,e,o),n=i(this,e),this[e](),o!==(s=J.get(this,e))||n?J.set(this,e,!1):s={},o!==s)return t.stopImmediatePropagation(),t.preventDefault(),s.value}else o.length&&(J.set(this,e,{value:C.event.trigger(C.extend(o[0],C.Event.prototype),o.slice(1),this)}),t.stopImmediatePropagation())}})):void 0===J.get(t,e)&&C.event.add(t,e,Tt)}C.event={global:{},add:function(t,e,i,n,s){var o,a,r,l,c,h,u,d,p,f,g,m=J.get(t);if(G(t))for(i.handler&&(i=(o=i).handler,s=o.selector),s&&C.find.matchesSelector(ot,s),i.guid||(i.guid=C.guid++),(l=m.events)||(l=m.events=Object.create(null)),(a=m.handle)||(a=m.handle=function(e){return void 0!==C&&C.event.triggered!==e.type?C.event.dispatch.apply(t,arguments):void 0}),c=(e=(e||"").match(R)||[""]).length;c--;)p=g=(r=Dt.exec(e[c])||[])[1],f=(r[2]||"").split(".").sort(),p&&(u=C.event.special[p]||{},p=(s?u.delegateType:u.bindType)||p,u=C.event.special[p]||{},h=C.extend({type:p,origType:g,data:n,handler:i,guid:i.guid,selector:s,needsContext:s&&C.expr.match.needsContext.test(s),namespace:f.join(".")},o),(d=l[p])||((d=l[p]=[]).delegateCount=0,u.setup&&!1!==u.setup.call(t,n,f,a)||t.addEventListener&&t.addEventListener(p,a)),u.add&&(u.add.call(t,h),h.handler.guid||(h.handler.guid=i.guid)),s?d.splice(d.delegateCount++,0,h):d.push(h),C.event.global[p]=!0)},remove:function(t,e,i,n,s){var o,a,r,l,c,h,u,d,p,f,g,m=J.hasData(t)&&J.get(t);if(m&&(l=m.events)){for(c=(e=(e||"").match(R)||[""]).length;c--;)if(p=g=(r=Dt.exec(e[c])||[])[1],f=(r[2]||"").split(".").sort(),p){for(u=C.event.special[p]||{},d=l[p=(n?u.delegateType:u.bindType)||p]||[],r=r[2]&&new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=d.length;o--;)h=d[o],!s&&g!==h.origType||i&&i.guid!==h.guid||r&&!r.test(h.namespace)||n&&n!==h.selector&&("**"!==n||!h.selector)||(d.splice(o,1),h.selector&&d.delegateCount--,u.remove&&u.remove.call(t,h));a&&!d.length&&(u.teardown&&!1!==u.teardown.call(t,f,m.handle)||C.removeEvent(t,p,m.handle),delete l[p])}else for(p in l)C.event.remove(t,p+e[c],i,n,!0);C.isEmptyObject(l)&&J.remove(t,"handle events")}},dispatch:function(t){var e,i,n,s,o,a,r=new Array(arguments.length),l=C.event.fix(t),c=(J.get(this,"events")||Object.create(null))[l.type]||[],h=C.event.special[l.type]||{};for(r[0]=l,e=1;e<arguments.length;e++)r[e]=arguments[e];if(l.delegateTarget=this,!h.preDispatch||!1!==h.preDispatch.call(this,l)){for(a=C.event.handlers.call(this,l,c),e=0;(s=a[e++])&&!l.isPropagationStopped();)for(l.currentTarget=s.elem,i=0;(o=s.handlers[i++])&&!l.isImmediatePropagationStopped();)l.rnamespace&&!1!==o.namespace&&!l.rnamespace.test(o.namespace)||(l.handleObj=o,l.data=o.data,void 0!==(n=((C.event.special[o.origType]||{}).handle||o.handler).apply(s.elem,r))&&!1===(l.result=n)&&(l.preventDefault(),l.stopPropagation()));return h.postDispatch&&h.postDispatch.call(this,l),l.result}},handlers:function(t,e){var i,n,s,o,a,r=[],l=e.delegateCount,c=t.target;if(l&&c.nodeType&&!("click"===t.type&&t.button>=1))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==t.type||!0!==c.disabled)){for(o=[],a={},i=0;i<l;i++)void 0===a[s=(n=e[i]).selector+" "]&&(a[s]=n.needsContext?C(s,this).index(c)>-1:C.find(s,this,null,[c]).length),a[s]&&o.push(n);o.length&&r.push({elem:c,handlers:o})}return c=this,l<e.length&&r.push({elem:c,handlers:e.slice(l)}),r},addProp:function(t,e){Object.defineProperty(C.Event.prototype,t,{enumerable:!0,configurable:!0,get:v(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(t){return t[C.expando]?t:new C.Event(t)},special:{load:{noBubble:!0},click:{setup:function(t){var e=this||t;return gt.test(e.type)&&e.click&&A(e,"input")&&Et(e,"click",Tt),!1},trigger:function(t){var e=this||t;return gt.test(e.type)&&e.click&&A(e,"input")&&Et(e,"click"),!0},_default:function(t){var e=t.target;return gt.test(e.type)&&e.click&&A(e,"input")&&J.get(e,"click")||A(e,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}},C.removeEvent=function(t,e,i){t.removeEventListener&&t.removeEventListener(e,i)},C.Event=function(t,e){if(!(this instanceof C.Event))return new C.Event(t,e);t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&!1===t.returnValue?Tt:kt,this.target=t.target&&3===t.target.nodeType?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,e&&C.extend(this,e),this.timeStamp=t&&t.timeStamp||Date.now(),this[C.expando]=!0},C.Event.prototype={constructor:C.Event,isDefaultPrevented:kt,isPropagationStopped:kt,isImmediatePropagationStopped:kt,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=Tt,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=Tt,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=Tt,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},C.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(t){var e=t.button;return null==t.which&&Ct.test(t.type)?null!=t.charCode?t.charCode:t.keyCode:!t.which&&void 0!==e&&St.test(t.type)?1&e?1:2&e?3:4&e?2:0:t.which}},C.event.addProp),C.each({focus:"focusin",blur:"focusout"},(function(t,e){C.event.special[t]={setup:function(){return Et(this,t,It),!1},trigger:function(){return Et(this,t),!0},delegateType:e}})),C.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(t,e){C.event.special[t]={delegateType:e,bindType:e,handle:function(t){var i,n=this,s=t.relatedTarget,o=t.handleObj;return s&&(s===n||C.contains(n,s))||(t.type=o.origType,i=o.handler.apply(this,arguments),t.type=e),i}}})),C.fn.extend({on:function(t,e,i,n){return At(this,t,e,i,n)},one:function(t,e,i,n){return At(this,t,e,i,n,1)},off:function(t,e,i){var n,s;if(t&&t.preventDefault&&t.handleObj)return n=t.handleObj,C(t.delegateTarget).off(n.namespace?n.origType+"."+n.namespace:n.origType,n.selector,n.handler),this;if("object"==typeof t){for(s in t)this.off(s,e,t[s]);return this}return!1!==e&&"function"!=typeof e||(i=e,e=void 0),!1===i&&(i=kt),this.each((function(){C.event.remove(this,t,i,e)}))}});var Pt=/<script|<style|<link/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,Ot=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Lt(t,e){return A(t,"table")&&A(11!==e.nodeType?e:e.firstChild,"tr")&&C(t).children("tbody")[0]||t}function Mt(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function Ht(t){return"true/"===(t.type||"").slice(0,5)?t.type=t.type.slice(5):t.removeAttribute("type"),t}function Rt(t,e){var i,n,s,o,a,r;if(1===e.nodeType){if(J.hasData(t)&&(r=J.get(t).events))for(s in J.remove(e,"handle events"),r)for(i=0,n=r[s].length;i<n;i++)C.event.add(e,s,r[s][i]);Q.hasData(t)&&(o=Q.access(t),a=C.extend({},o),Q.set(e,a))}}function Ft(t,e){var i=e.nodeName.toLowerCase();"input"===i&&gt.test(t.type)?e.checked=t.checked:"input"!==i&&"textarea"!==i||(e.defaultValue=t.defaultValue)}function Wt(t,e,i,n){e=l(e);var s,o,a,r,c,h,u=0,d=t.length,p=d-1,f=e[0],g=v(f);if(g||d>1&&"string"==typeof f&&!m.checkClone&&Nt.test(f))return t.each((function(s){var o=t.eq(s);g&&(e[0]=f.call(this,s,o.html())),Wt(o,e,i,n)}));if(d&&(o=(s=xt(e,t[0].ownerDocument,!1,t,n)).firstChild,1===s.childNodes.length&&(s=o),o||n)){for(r=(a=C.map(yt(s,"script"),Mt)).length;u<d;u++)c=s,u!==p&&(c=C.clone(c,!0,!0),r&&C.merge(a,yt(c,"script"))),i.call(t[u],c,u);if(r)for(h=a[a.length-1].ownerDocument,C.map(a,Ht),u=0;u<r;u++)c=a[u],vt.test(c.type||"")&&!J.access(c,"globalEval")&&C.contains(h,c)&&(c.src&&"module"!==(c.type||"").toLowerCase()?C._evalUrl&&!c.noModule&&C._evalUrl(c.src,{nonce:c.nonce||c.getAttribute("nonce")},h):w(c.textContent.replace(Ot,""),c,h))}return t}function jt(t,e,i){for(var n,s=e?C.filter(e,t):t,o=0;null!=(n=s[o]);o++)i||1!==n.nodeType||C.cleanData(yt(n)),n.parentNode&&(i&&at(n)&&_t(yt(n,"script")),n.parentNode.removeChild(n));return t}C.extend({htmlPrefilter:function(t){return t},clone:function(t,e,i){var n,s,o,a,r=t.cloneNode(!0),l=at(t);if(!(m.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||C.isXMLDoc(t)))for(a=yt(r),n=0,s=(o=yt(t)).length;n<s;n++)Ft(o[n],a[n]);if(e)if(i)for(o=o||yt(t),a=a||yt(r),n=0,s=o.length;n<s;n++)Rt(o[n],a[n]);else Rt(t,r);return(a=yt(r,"script")).length>0&&_t(a,!l&&yt(t,"script")),r},cleanData:function(t){for(var e,i,n,s=C.event.special,o=0;void 0!==(i=t[o]);o++)if(G(i)){if(e=i[J.expando]){if(e.events)for(n in e.events)s[n]?C.event.remove(i,n):C.removeEvent(i,n,e.handle);i[J.expando]=void 0}i[Q.expando]&&(i[Q.expando]=void 0)}}}),C.fn.extend({detach:function(t){return jt(this,t,!0)},remove:function(t){return jt(this,t)},text:function(t){return U(this,(function(t){return void 0===t?C.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=t)}))}),null,t,arguments.length)},append:function(){return Wt(this,arguments,(function(t){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Lt(this,t).appendChild(t)}))},prepend:function(){return Wt(this,arguments,(function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=Lt(this,t);e.insertBefore(t,e.firstChild)}}))},before:function(){return Wt(this,arguments,(function(t){this.parentNode&&this.parentNode.insertBefore(t,this)}))},after:function(){return Wt(this,arguments,(function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)}))},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(C.cleanData(yt(t,!1)),t.textContent="");return this},clone:function(t,e){return t=null!=t&&t,e=null==e?t:e,this.map((function(){return C.clone(this,t,e)}))},html:function(t){return U(this,(function(t){var e=this[0]||{},i=0,n=this.length;if(void 0===t&&1===e.nodeType)return e.innerHTML;if("string"==typeof t&&!Pt.test(t)&&!bt[(mt.exec(t)||["",""])[1].toLowerCase()]){t=C.htmlPrefilter(t);try{for(;i<n;i++)1===(e=this[i]||{}).nodeType&&(C.cleanData(yt(e,!1)),e.innerHTML=t);e=0}catch(t){}}e&&this.empty().append(t)}),null,t,arguments.length)},replaceWith:function(){var t=[];return Wt(this,arguments,(function(e){var i=this.parentNode;C.inArray(this,t)<0&&(C.cleanData(yt(this)),i&&i.replaceChild(e,this))}),t)}}),C.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(t,e){C.fn[t]=function(t){for(var i,n=[],s=C(t),o=s.length-1,a=0;a<=o;a++)i=a===o?this:this.clone(!0),C(s[a])[e](i),c.apply(n,i.get());return this.pushStack(n)}}));var zt=new RegExp("^("+it+")(?!px)[a-z%]+$","i"),$t=function(t){var e=t.ownerDocument.defaultView;return e&&e.opener||(e=i),e.getComputedStyle(t)},Bt=function(t,e,i){var n,s,o={};for(s in e)o[s]=t.style[s],t.style[s]=e[s];for(s in n=i.call(t),e)t.style[s]=o[s];return n},Ut=new RegExp(st.join("|"),"i");function qt(t,e,i){var n,s,o,a,r=t.style;return(i=i||$t(t))&&(""!==(a=i.getPropertyValue(e)||i[e])||at(t)||(a=C.style(t,e)),!m.pixelBoxStyles()&&zt.test(a)&&Ut.test(e)&&(n=r.width,s=r.minWidth,o=r.maxWidth,r.minWidth=r.maxWidth=r.width=a,a=i.width,r.width=n,r.minWidth=s,r.maxWidth=o)),void 0!==a?a+"":a}function Vt(t,e){return{get:function(){if(!t())return(this.get=e).apply(this,arguments);delete this.get}}}!function(){function t(){if(h){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",h.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ot.appendChild(c).appendChild(h);var t=i.getComputedStyle(h);n="1%"!==t.top,l=12===e(t.marginLeft),h.style.right="60%",a=36===e(t.right),s=36===e(t.width),h.style.position="absolute",o=12===e(h.offsetWidth/3),ot.removeChild(c),h=null}}function e(t){return Math.round(parseFloat(t))}var n,s,o,a,r,l,c=y.createElement("div"),h=y.createElement("div");h.style&&(h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",m.clearCloneStyle="content-box"===h.style.backgroundClip,C.extend(m,{boxSizingReliable:function(){return t(),s},pixelBoxStyles:function(){return t(),a},pixelPosition:function(){return t(),n},reliableMarginLeft:function(){return t(),l},scrollboxSize:function(){return t(),o},reliableTrDimensions:function(){var t,e,n,s;return null==r&&(t=y.createElement("table"),e=y.createElement("tr"),n=y.createElement("div"),t.style.cssText="position:absolute;left:-11111px",e.style.height="1px",n.style.height="9px",ot.appendChild(t).appendChild(e).appendChild(n),s=i.getComputedStyle(e),r=parseInt(s.height)>3,ot.removeChild(t)),r}}))}();var Yt=["Webkit","Moz","ms"],Xt=y.createElement("div").style,Gt={};function Kt(t){var e=C.cssProps[t]||Gt[t];return e||(t in Xt?t:Gt[t]=function(t){for(var e=t[0].toUpperCase()+t.slice(1),i=Yt.length;i--;)if((t=Yt[i]+e)in Xt)return t}(t)||t)}var Jt=/^(none|table(?!-c[ea]).+)/,Qt=/^--/,Zt={position:"absolute",visibility:"hidden",display:"block"},te={letterSpacing:"0",fontWeight:"400"};function ee(t,e,i){var n=nt.exec(e);return n?Math.max(0,n[2]-(i||0))+(n[3]||"px"):e}function ie(t,e,i,n,s,o){var a="width"===e?1:0,r=0,l=0;if(i===(n?"border":"content"))return 0;for(;a<4;a+=2)"margin"===i&&(l+=C.css(t,i+st[a],!0,s)),n?("content"===i&&(l-=C.css(t,"padding"+st[a],!0,s)),"margin"!==i&&(l-=C.css(t,"border"+st[a]+"Width",!0,s))):(l+=C.css(t,"padding"+st[a],!0,s),"padding"!==i?l+=C.css(t,"border"+st[a]+"Width",!0,s):r+=C.css(t,"border"+st[a]+"Width",!0,s));return!n&&o>=0&&(l+=Math.max(0,Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-o-l-r-.5))||0),l}function ne(t,e,i){var n=$t(t),s=(!m.boxSizingReliable()||i)&&"border-box"===C.css(t,"boxSizing",!1,n),o=s,a=qt(t,e,n),r="offset"+e[0].toUpperCase()+e.slice(1);if(zt.test(a)){if(!i)return a;a="auto"}return(!m.boxSizingReliable()&&s||!m.reliableTrDimensions()&&A(t,"tr")||"auto"===a||!parseFloat(a)&&"inline"===C.css(t,"display",!1,n))&&t.getClientRects().length&&(s="border-box"===C.css(t,"boxSizing",!1,n),(o=r in t)&&(a=t[r])),(a=parseFloat(a)||0)+ie(t,e,i||(s?"border":"content"),o,n,a)+"px"}function se(t,e,i,n,s){return new se.prototype.init(t,e,i,n,s)}C.extend({cssHooks:{opacity:{get:function(t,e){if(e){var i=qt(t,"opacity");return""===i?"1":i}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(t,e,i,n){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var s,o,a,r=X(e),l=Qt.test(e),c=t.style;if(l||(e=Kt(r)),a=C.cssHooks[e]||C.cssHooks[r],void 0===i)return a&&"get"in a&&void 0!==(s=a.get(t,!1,n))?s:c[e];"string"===(o=typeof i)&&(s=nt.exec(i))&&s[1]&&(i=ct(t,e,s),o="number"),null!=i&&i==i&&("number"!==o||l||(i+=s&&s[3]||(C.cssNumber[r]?"":"px")),m.clearCloneStyle||""!==i||0!==e.indexOf("background")||(c[e]="inherit"),a&&"set"in a&&void 0===(i=a.set(t,i,n))||(l?c.setProperty(e,i):c[e]=i))}},css:function(t,e,i,n){var s,o,a,r=X(e);return Qt.test(e)||(e=Kt(r)),(a=C.cssHooks[e]||C.cssHooks[r])&&"get"in a&&(s=a.get(t,!0,i)),void 0===s&&(s=qt(t,e,n)),"normal"===s&&e in te&&(s=te[e]),""===i||i?(o=parseFloat(s),!0===i||isFinite(o)?o||0:s):s}}),C.each(["height","width"],(function(t,e){C.cssHooks[e]={get:function(t,i,n){if(i)return!Jt.test(C.css(t,"display"))||t.getClientRects().length&&t.getBoundingClientRect().width?ne(t,e,n):Bt(t,Zt,(function(){return ne(t,e,n)}))},set:function(t,i,n){var s,o=$t(t),a=!m.scrollboxSize()&&"absolute"===o.position,r=(a||n)&&"border-box"===C.css(t,"boxSizing",!1,o),l=n?ie(t,e,n,r,o):0;return r&&a&&(l-=Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-parseFloat(o[e])-ie(t,e,"border",!1,o)-.5)),l&&(s=nt.exec(i))&&"px"!==(s[3]||"px")&&(t.style[e]=i,i=C.css(t,e)),ee(0,i,l)}}})),C.cssHooks.marginLeft=Vt(m.reliableMarginLeft,(function(t,e){if(e)return(parseFloat(qt(t,"marginLeft"))||t.getBoundingClientRect().left-Bt(t,{marginLeft:0},(function(){return t.getBoundingClientRect().left})))+"px"})),C.each({margin:"",padding:"",border:"Width"},(function(t,e){C.cssHooks[t+e]={expand:function(i){for(var n=0,s={},o="string"==typeof i?i.split(" "):[i];n<4;n++)s[t+st[n]+e]=o[n]||o[n-2]||o[0];return s}},"margin"!==t&&(C.cssHooks[t+e].set=ee)})),C.fn.extend({css:function(t,e){return U(this,(function(t,e,i){var n,s,o={},a=0;if(Array.isArray(e)){for(n=$t(t),s=e.length;a<s;a++)o[e[a]]=C.css(t,e[a],!1,n);return o}return void 0!==i?C.style(t,e,i):C.css(t,e)}),t,e,arguments.length>1)}}),C.Tween=se,se.prototype={constructor:se,init:function(t,e,i,n,s,o){this.elem=t,this.prop=i,this.easing=s||C.easing._default,this.options=e,this.start=this.now=this.cur(),this.end=n,this.unit=o||(C.cssNumber[i]?"":"px")},cur:function(){var t=se.propHooks[this.prop];return t&&t.get?t.get(this):se.propHooks._default.get(this)},run:function(t){var e,i=se.propHooks[this.prop];return this.options.duration?this.pos=e=C.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=e=t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),i&&i.set?i.set(this):se.propHooks._default.set(this),this}},se.prototype.init.prototype=se.prototype,se.propHooks={_default:{get:function(t){var e;return 1!==t.elem.nodeType||null!=t.elem[t.prop]&&null==t.elem.style[t.prop]?t.elem[t.prop]:(e=C.css(t.elem,t.prop,""))&&"auto"!==e?e:0},set:function(t){C.fx.step[t.prop]?C.fx.step[t.prop](t):1!==t.elem.nodeType||!C.cssHooks[t.prop]&&null==t.elem.style[Kt(t.prop)]?t.elem[t.prop]=t.now:C.style(t.elem,t.prop,t.now+t.unit)}}},se.propHooks.scrollTop=se.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},C.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},_default:"swing"},C.fx=se.prototype.init,C.fx.step={};var oe,ae,re=/^(?:toggle|show|hide)$/,le=/queueHooks$/;function ce(){ae&&(!1===y.hidden&&i.requestAnimationFrame?i.requestAnimationFrame(ce):i.setTimeout(ce,C.fx.interval),C.fx.tick())}function he(){return i.setTimeout((function(){oe=void 0})),oe=Date.now()}function ue(t,e){var i,n=0,s={height:t};for(e=e?1:0;n<4;n+=2-e)s["margin"+(i=st[n])]=s["padding"+i]=t;return e&&(s.opacity=s.width=t),s}function de(t,e,i){for(var n,s=(pe.tweeners[e]||[]).concat(pe.tweeners["*"]),o=0,a=s.length;o<a;o++)if(n=s[o].call(i,e,t))return n}function pe(t,e,i){var n,s,o=0,a=pe.prefilters.length,r=C.Deferred().always((function(){delete l.elem})),l=function(){if(s)return!1;for(var e=oe||he(),i=Math.max(0,c.startTime+c.duration-e),n=1-(i/c.duration||0),o=0,a=c.tweens.length;o<a;o++)c.tweens[o].run(n);return r.notifyWith(t,[c,n,i]),n<1&&a?i:(a||r.notifyWith(t,[c,1,0]),r.resolveWith(t,[c]),!1)},c=r.promise({elem:t,props:C.extend({},e),opts:C.extend(!0,{specialEasing:{},easing:C.easing._default},i),originalProperties:e,originalOptions:i,startTime:oe||he(),duration:i.duration,tweens:[],createTween:function(e,i){var n=C.Tween(t,c.opts,e,i,c.opts.specialEasing[e]||c.opts.easing);return c.tweens.push(n),n},stop:function(e){var i=0,n=e?c.tweens.length:0;if(s)return this;for(s=!0;i<n;i++)c.tweens[i].run(1);return e?(r.notifyWith(t,[c,1,0]),r.resolveWith(t,[c,e])):r.rejectWith(t,[c,e]),this}}),h=c.props;for(!function(t,e){var i,n,s,o,a;for(i in t)if(s=e[n=X(i)],o=t[i],Array.isArray(o)&&(s=o[1],o=t[i]=o[0]),i!==n&&(t[n]=o,delete t[i]),(a=C.cssHooks[n])&&"expand"in a)for(i in o=a.expand(o),delete t[n],o)i in t||(t[i]=o[i],e[i]=s);else e[n]=s}(h,c.opts.specialEasing);o<a;o++)if(n=pe.prefilters[o].call(c,t,h,c.opts))return v(n.stop)&&(C._queueHooks(c.elem,c.opts.queue).stop=n.stop.bind(n)),n;return C.map(h,de,c),v(c.opts.start)&&c.opts.start.call(t,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),C.fx.timer(C.extend(l,{elem:t,anim:c,queue:c.opts.queue})),c}C.Animation=C.extend(pe,{tweeners:{"*":[function(t,e){var i=this.createTween(t,e);return ct(i.elem,t,nt.exec(e),i),i}]},tweener:function(t,e){v(t)?(e=t,t=["*"]):t=t.match(R);for(var i,n=0,s=t.length;n<s;n++)i=t[n],pe.tweeners[i]=pe.tweeners[i]||[],pe.tweeners[i].unshift(e)},prefilters:[function(t,e,i){var n,s,o,a,r,l,c,h,u="width"in e||"height"in e,d=this,p={},f=t.style,g=t.nodeType&&lt(t),m=J.get(t,"fxshow");for(n in i.queue||(null==(a=C._queueHooks(t,"fx")).unqueued&&(a.unqueued=0,r=a.empty.fire,a.empty.fire=function(){a.unqueued||r()}),a.unqueued++,d.always((function(){d.always((function(){a.unqueued--,C.queue(t,"fx").length||a.empty.fire()}))}))),e)if(s=e[n],re.test(s)){if(delete e[n],o=o||"toggle"===s,s===(g?"hide":"show")){if("show"!==s||!m||void 0===m[n])continue;g=!0}p[n]=m&&m[n]||C.style(t,n)}if((l=!C.isEmptyObject(e))||!C.isEmptyObject(p))for(n in u&&1===t.nodeType&&(i.overflow=[f.overflow,f.overflowX,f.overflowY],null==(c=m&&m.display)&&(c=J.get(t,"display")),"none"===(h=C.css(t,"display"))&&(c?h=c:(dt([t],!0),c=t.style.display||c,h=C.css(t,"display"),dt([t]))),("inline"===h||"inline-block"===h&&null!=c)&&"none"===C.css(t,"float")&&(l||(d.done((function(){f.display=c})),null==c&&(h=f.display,c="none"===h?"":h)),f.display="inline-block")),i.overflow&&(f.overflow="hidden",d.always((function(){f.overflow=i.overflow[0],f.overflowX=i.overflow[1],f.overflowY=i.overflow[2]}))),l=!1,p)l||(m?"hidden"in m&&(g=m.hidden):m=J.access(t,"fxshow",{display:c}),o&&(m.hidden=!g),g&&dt([t],!0),d.done((function(){for(n in g||dt([t]),J.remove(t,"fxshow"),p)C.style(t,n,p[n])}))),l=de(g?m[n]:0,n,d),n in m||(m[n]=l.start,g&&(l.end=l.start,l.start=0))}],prefilter:function(t,e){e?pe.prefilters.unshift(t):pe.prefilters.push(t)}}),C.speed=function(t,e,i){var n=t&&"object"==typeof t?C.extend({},t):{complete:i||!i&&e||v(t)&&t,duration:t,easing:i&&e||e&&!v(e)&&e};return C.fx.off?n.duration=0:"number"!=typeof n.duration&&(n.duration in C.fx.speeds?n.duration=C.fx.speeds[n.duration]:n.duration=C.fx.speeds._default),null!=n.queue&&!0!==n.queue||(n.queue="fx"),n.old=n.complete,n.complete=function(){v(n.old)&&n.old.call(this),n.queue&&C.dequeue(this,n.queue)},n},C.fn.extend({fadeTo:function(t,e,i,n){return this.filter(lt).css("opacity",0).show().end().animate({opacity:e},t,i,n)},animate:function(t,e,i,n){var s=C.isEmptyObject(t),o=C.speed(e,i,n),a=function(){var e=pe(this,C.extend({},t),o);(s||J.get(this,"finish"))&&e.stop(!0)};return a.finish=a,s||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(t,e,i){var n=function(t){var e=t.stop;delete t.stop,e(i)};return"string"!=typeof t&&(i=e,e=t,t=void 0),e&&this.queue(t||"fx",[]),this.each((function(){var e=!0,s=null!=t&&t+"queueHooks",o=C.timers,a=J.get(this);if(s)a[s]&&a[s].stop&&n(a[s]);else for(s in a)a[s]&&a[s].stop&&le.test(s)&&n(a[s]);for(s=o.length;s--;)o[s].elem!==this||null!=t&&o[s].queue!==t||(o[s].anim.stop(i),e=!1,o.splice(s,1));!e&&i||C.dequeue(this,t)}))},finish:function(t){return!1!==t&&(t=t||"fx"),this.each((function(){var e,i=J.get(this),n=i[t+"queue"],s=i[t+"queueHooks"],o=C.timers,a=n?n.length:0;for(i.finish=!0,C.queue(this,t,[]),s&&s.stop&&s.stop.call(this,!0),e=o.length;e--;)o[e].elem===this&&o[e].queue===t&&(o[e].anim.stop(!0),o.splice(e,1));for(e=0;e<a;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete i.finish}))}}),C.each(["toggle","show","hide"],(function(t,e){var i=C.fn[e];C.fn[e]=function(t,n,s){return null==t||"boolean"==typeof t?i.apply(this,arguments):this.animate(ue(e,!0),t,n,s)}})),C.each({slideDown:ue("show"),slideUp:ue("hide"),slideToggle:ue("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(t,e){C.fn[t]=function(t,i,n){return this.animate(e,t,i,n)}})),C.timers=[],C.fx.tick=function(){var t,e=0,i=C.timers;for(oe=Date.now();e<i.length;e++)(t=i[e])()||i[e]!==t||i.splice(e--,1);i.length||C.fx.stop(),oe=void 0},C.fx.timer=function(t){C.timers.push(t),C.fx.start()},C.fx.interval=13,C.fx.start=function(){ae||(ae=!0,ce())},C.fx.stop=function(){ae=null},C.fx.speeds={slow:600,fast:200,_default:400},C.fn.delay=function(t,e){return t=C.fx&&C.fx.speeds[t]||t,e=e||"fx",this.queue(e,(function(e,n){var s=i.setTimeout(e,t);n.stop=function(){i.clearTimeout(s)}}))},function(){var t=y.createElement("input"),e=y.createElement("select").appendChild(y.createElement("option"));t.type="checkbox",m.checkOn=""!==t.value,m.optSelected=e.selected,(t=y.createElement("input")).value="t",t.type="radio",m.radioValue="t"===t.value}();var fe,ge=C.expr.attrHandle;C.fn.extend({attr:function(t,e){return U(this,C.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each((function(){C.removeAttr(this,t)}))}}),C.extend({attr:function(t,e,i){var n,s,o=t.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===t.getAttribute?C.prop(t,e,i):(1===o&&C.isXMLDoc(t)||(s=C.attrHooks[e.toLowerCase()]||(C.expr.match.bool.test(e)?fe:void 0)),void 0!==i?null===i?void C.removeAttr(t,e):s&&"set"in s&&void 0!==(n=s.set(t,i,e))?n:(t.setAttribute(e,i+""),i):s&&"get"in s&&null!==(n=s.get(t,e))?n:null==(n=C.find.attr(t,e))?void 0:n)},attrHooks:{type:{set:function(t,e){if(!m.radioValue&&"radio"===e&&A(t,"input")){var i=t.value;return t.setAttribute("type",e),i&&(t.value=i),e}}}},removeAttr:function(t,e){var i,n=0,s=e&&e.match(R);if(s&&1===t.nodeType)for(;i=s[n++];)t.removeAttribute(i)}}),fe={set:function(t,e,i){return!1===e?C.removeAttr(t,i):t.setAttribute(i,i),i}},C.each(C.expr.match.bool.source.match(/\w+/g),(function(t,e){var i=ge[e]||C.find.attr;ge[e]=function(t,e,n){var s,o,a=e.toLowerCase();return n||(o=ge[a],ge[a]=s,s=null!=i(t,e,n)?a:null,ge[a]=o),s}}));var me=/^(?:input|select|textarea|button)$/i,ve=/^(?:a|area)$/i;function be(t){return(t.match(R)||[]).join(" ")}function ye(t){return t.getAttribute&&t.getAttribute("class")||""}function _e(t){return Array.isArray(t)?t:"string"==typeof t&&t.match(R)||[]}C.fn.extend({prop:function(t,e){return U(this,C.prop,t,e,arguments.length>1)},removeProp:function(t){return this.each((function(){delete this[C.propFix[t]||t]}))}}),C.extend({prop:function(t,e,i){var n,s,o=t.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&C.isXMLDoc(t)||(e=C.propFix[e]||e,s=C.propHooks[e]),void 0!==i?s&&"set"in s&&void 0!==(n=s.set(t,i,e))?n:t[e]=i:s&&"get"in s&&null!==(n=s.get(t,e))?n:t[e]},propHooks:{tabIndex:{get:function(t){var e=C.find.attr(t,"tabindex");return e?parseInt(e,10):me.test(t.nodeName)||ve.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),m.optSelected||(C.propHooks.selected={get:function(t){var e=t.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null},set:function(t){var e=t.parentNode;e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex)}}),C.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){C.propFix[this.toLowerCase()]=this})),C.fn.extend({addClass:function(t){var e,i,n,s,o,a,r,l=0;if(v(t))return this.each((function(e){C(this).addClass(t.call(this,e,ye(this)))}));if((e=_e(t)).length)for(;i=this[l++];)if(s=ye(i),n=1===i.nodeType&&" "+be(s)+" "){for(a=0;o=e[a++];)n.indexOf(" "+o+" ")<0&&(n+=o+" ");s!==(r=be(n))&&i.setAttribute("class",r)}return this},removeClass:function(t){var e,i,n,s,o,a,r,l=0;if(v(t))return this.each((function(e){C(this).removeClass(t.call(this,e,ye(this)))}));if(!arguments.length)return this.attr("class","");if((e=_e(t)).length)for(;i=this[l++];)if(s=ye(i),n=1===i.nodeType&&" "+be(s)+" "){for(a=0;o=e[a++];)for(;n.indexOf(" "+o+" ")>-1;)n=n.replace(" "+o+" "," ");s!==(r=be(n))&&i.setAttribute("class",r)}return this},toggleClass:function(t,e){var i=typeof t,n="string"===i||Array.isArray(t);return"boolean"==typeof e&&n?e?this.addClass(t):this.removeClass(t):v(t)?this.each((function(i){C(this).toggleClass(t.call(this,i,ye(this),e),e)})):this.each((function(){var e,s,o,a;if(n)for(s=0,o=C(this),a=_e(t);e=a[s++];)o.hasClass(e)?o.removeClass(e):o.addClass(e);else void 0!==t&&"boolean"!==i||((e=ye(this))&&J.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===t?"":J.get(this,"__className__")||""))}))},hasClass:function(t){var e,i,n=0;for(e=" "+t+" ";i=this[n++];)if(1===i.nodeType&&(" "+be(ye(i))+" ").indexOf(e)>-1)return!0;return!1}});var we=/\r/g;C.fn.extend({val:function(t){var e,i,n,s=this[0];return arguments.length?(n=v(t),this.each((function(i){var s;1===this.nodeType&&(null==(s=n?t.call(this,i,C(this).val()):t)?s="":"number"==typeof s?s+="":Array.isArray(s)&&(s=C.map(s,(function(t){return null==t?"":t+""}))),(e=C.valHooks[this.type]||C.valHooks[this.nodeName.toLowerCase()])&&"set"in e&&void 0!==e.set(this,s,"value")||(this.value=s))}))):s?(e=C.valHooks[s.type]||C.valHooks[s.nodeName.toLowerCase()])&&"get"in e&&void 0!==(i=e.get(s,"value"))?i:"string"==typeof(i=s.value)?i.replace(we,""):null==i?"":i:void 0}}),C.extend({valHooks:{option:{get:function(t){var e=C.find.attr(t,"value");return null!=e?e:be(C.text(t))}},select:{get:function(t){var e,i,n,s=t.options,o=t.selectedIndex,a="select-one"===t.type,r=a?null:[],l=a?o+1:s.length;for(n=o<0?l:a?o:0;n<l;n++)if(((i=s[n]).selected||n===o)&&!i.disabled&&(!i.parentNode.disabled||!A(i.parentNode,"optgroup"))){if(e=C(i).val(),a)return e;r.push(e)}return r},set:function(t,e){for(var i,n,s=t.options,o=C.makeArray(e),a=s.length;a--;)((n=s[a]).selected=C.inArray(C.valHooks.option.get(n),o)>-1)&&(i=!0);return i||(t.selectedIndex=-1),o}}}}),C.each(["radio","checkbox"],(function(){C.valHooks[this]={set:function(t,e){if(Array.isArray(e))return t.checked=C.inArray(C(t).val(),e)>-1}},m.checkOn||(C.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})})),m.focusin="onfocusin"in i;var xe=/^(?:focusinfocus|focusoutblur)$/,Ce=function(t){t.stopPropagation()};C.extend(C.event,{trigger:function(t,e,n,s){var o,a,r,l,c,h,u,d,f=[n||y],g=p.call(t,"type")?t.type:t,m=p.call(t,"namespace")?t.namespace.split("."):[];if(a=d=r=n=n||y,3!==n.nodeType&&8!==n.nodeType&&!xe.test(g+C.event.triggered)&&(g.indexOf(".")>-1&&(m=g.split("."),g=m.shift(),m.sort()),c=g.indexOf(":")<0&&"on"+g,(t=t[C.expando]?t:new C.Event(g,"object"==typeof t&&t)).isTrigger=s?2:3,t.namespace=m.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=n),e=null==e?[t]:C.makeArray(e,[t]),u=C.event.special[g]||{},s||!u.trigger||!1!==u.trigger.apply(n,e))){if(!s&&!u.noBubble&&!b(n)){for(l=u.delegateType||g,xe.test(l+g)||(a=a.parentNode);a;a=a.parentNode)f.push(a),r=a;r===(n.ownerDocument||y)&&f.push(r.defaultView||r.parentWindow||i)}for(o=0;(a=f[o++])&&!t.isPropagationStopped();)d=a,t.type=o>1?l:u.bindType||g,(h=(J.get(a,"events")||Object.create(null))[t.type]&&J.get(a,"handle"))&&h.apply(a,e),(h=c&&a[c])&&h.apply&&G(a)&&(t.result=h.apply(a,e),!1===t.result&&t.preventDefault());return t.type=g,s||t.isDefaultPrevented()||u._default&&!1!==u._default.apply(f.pop(),e)||!G(n)||c&&v(n[g])&&!b(n)&&((r=n[c])&&(n[c]=null),C.event.triggered=g,t.isPropagationStopped()&&d.addEventListener(g,Ce),n[g](),t.isPropagationStopped()&&d.removeEventListener(g,Ce),C.event.triggered=void 0,r&&(n[c]=r)),t.result}},simulate:function(t,e,i){var n=C.extend(new C.Event,i,{type:t,isSimulated:!0});C.event.trigger(n,null,e)}}),C.fn.extend({trigger:function(t,e){return this.each((function(){C.event.trigger(t,e,this)}))},triggerHandler:function(t,e){var i=this[0];if(i)return C.event.trigger(t,e,i,!0)}}),m.focusin||C.each({focus:"focusin",blur:"focusout"},(function(t,e){var i=function(t){C.event.simulate(e,t.target,C.event.fix(t))};C.event.special[e]={setup:function(){var n=this.ownerDocument||this.document||this,s=J.access(n,e);s||n.addEventListener(t,i,!0),J.access(n,e,(s||0)+1)},teardown:function(){var n=this.ownerDocument||this.document||this,s=J.access(n,e)-1;s?J.access(n,e,s):(n.removeEventListener(t,i,!0),J.remove(n,e))}}}));var Se=i.location,De={guid:Date.now()},Te=/\?/;C.parseXML=function(t){var e;if(!t||"string"!=typeof t)return null;try{e=(new i.DOMParser).parseFromString(t,"text/xml")}catch(t){e=void 0}return e&&!e.getElementsByTagName("parsererror").length||C.error("Invalid XML: "+t),e};var ke=/\[\]$/,Ie=/\r?\n/g,Ae=/^(?:submit|button|image|reset|file)$/i,Ee=/^(?:input|select|textarea|keygen)/i;function Pe(t,e,i,n){var s;if(Array.isArray(e))C.each(e,(function(e,s){i||ke.test(t)?n(t,s):Pe(t+"["+("object"==typeof s&&null!=s?e:"")+"]",s,i,n)}));else if(i||"object"!==x(e))n(t,e);else for(s in e)Pe(t+"["+s+"]",e[s],i,n)}C.param=function(t,e){var i,n=[],s=function(t,e){var i=v(e)?e():e;n[n.length]=encodeURIComponent(t)+"="+encodeURIComponent(null==i?"":i)};if(null==t)return"";if(Array.isArray(t)||t.jquery&&!C.isPlainObject(t))C.each(t,(function(){s(this.name,this.value)}));else for(i in t)Pe(i,t[i],e,s);return n.join("&")},C.fn.extend({serialize:function(){return C.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var t=C.prop(this,"elements");return t?C.makeArray(t):this})).filter((function(){var t=this.type;return this.name&&!C(this).is(":disabled")&&Ee.test(this.nodeName)&&!Ae.test(t)&&(this.checked||!gt.test(t))})).map((function(t,e){var i=C(this).val();return null==i?null:Array.isArray(i)?C.map(i,(function(t){return{name:e.name,value:t.replace(Ie,"\r\n")}})):{name:e.name,value:i.replace(Ie,"\r\n")}})).get()}});var Ne=/%20/g,Oe=/#.*$/,Le=/([?&])_=[^&]*/,Me=/^(.*?):[ \t]*([^\r\n]*)$/gm,He=/^(?:GET|HEAD)$/,Re=/^\/\//,Fe={},We={},je="*/".concat("*"),ze=y.createElement("a");function $e(t){return function(e,i){"string"!=typeof e&&(i=e,e="*");var n,s=0,o=e.toLowerCase().match(R)||[];if(v(i))for(;n=o[s++];)"+"===n[0]?(n=n.slice(1)||"*",(t[n]=t[n]||[]).unshift(i)):(t[n]=t[n]||[]).push(i)}}function Be(t,e,i,n){var s={},o=t===We;function a(r){var l;return s[r]=!0,C.each(t[r]||[],(function(t,r){var c=r(e,i,n);return"string"!=typeof c||o||s[c]?o?!(l=c):void 0:(e.dataTypes.unshift(c),a(c),!1)})),l}return a(e.dataTypes[0])||!s["*"]&&a("*")}function Ue(t,e){var i,n,s=C.ajaxSettings.flatOptions||{};for(i in e)void 0!==e[i]&&((s[i]?t:n||(n={}))[i]=e[i]);return n&&C.extend(!0,t,n),t}ze.href=Se.href,C.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Se.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Se.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":je,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":C.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?Ue(Ue(t,C.ajaxSettings),e):Ue(C.ajaxSettings,t)},ajaxPrefilter:$e(Fe),ajaxTransport:$e(We),ajax:function(t,e){"object"==typeof t&&(e=t,t=void 0),e=e||{};var n,s,o,a,r,l,c,h,u,d,p=C.ajaxSetup({},e),f=p.context||p,g=p.context&&(f.nodeType||f.jquery)?C(f):C.event,m=C.Deferred(),v=C.Callbacks("once memory"),b=p.statusCode||{},_={},w={},x="canceled",S={readyState:0,getResponseHeader:function(t){var e;if(c){if(!a)for(a={};e=Me.exec(o);)a[e[1].toLowerCase()+" "]=(a[e[1].toLowerCase()+" "]||[]).concat(e[2]);e=a[t.toLowerCase()+" "]}return null==e?null:e.join(", ")},getAllResponseHeaders:function(){return c?o:null},setRequestHeader:function(t,e){return null==c&&(t=w[t.toLowerCase()]=w[t.toLowerCase()]||t,_[t]=e),this},overrideMimeType:function(t){return null==c&&(p.mimeType=t),this},statusCode:function(t){var e;if(t)if(c)S.always(t[S.status]);else for(e in t)b[e]=[b[e],t[e]];return this},abort:function(t){var e=t||x;return n&&n.abort(e),D(0,e),this}};if(m.promise(S),p.url=((t||p.url||Se.href)+"").replace(Re,Se.protocol+"//"),p.type=e.method||e.type||p.method||p.type,p.dataTypes=(p.dataType||"*").toLowerCase().match(R)||[""],null==p.crossDomain){l=y.createElement("a");try{l.href=p.url,l.href=l.href,p.crossDomain=ze.protocol+"//"+ze.host!=l.protocol+"//"+l.host}catch(t){p.crossDomain=!0}}if(p.data&&p.processData&&"string"!=typeof p.data&&(p.data=C.param(p.data,p.traditional)),Be(Fe,p,e,S),c)return S;for(u in(h=C.event&&p.global)&&0==C.active++&&C.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!He.test(p.type),s=p.url.replace(Oe,""),p.hasContent?p.data&&p.processData&&0===(p.contentType||"").indexOf("application/x-www-form-urlencoded")&&(p.data=p.data.replace(Ne,"+")):(d=p.url.slice(s.length),p.data&&(p.processData||"string"==typeof p.data)&&(s+=(Te.test(s)?"&":"?")+p.data,delete p.data),!1===p.cache&&(s=s.replace(Le,"$1"),d=(Te.test(s)?"&":"?")+"_="+De.guid+++d),p.url=s+d),p.ifModified&&(C.lastModified[s]&&S.setRequestHeader("If-Modified-Since",C.lastModified[s]),C.etag[s]&&S.setRequestHeader("If-None-Match",C.etag[s])),(p.data&&p.hasContent&&!1!==p.contentType||e.contentType)&&S.setRequestHeader("Content-Type",p.contentType),S.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+je+"; q=0.01":""):p.accepts["*"]),p.headers)S.setRequestHeader(u,p.headers[u]);if(p.beforeSend&&(!1===p.beforeSend.call(f,S,p)||c))return S.abort();if(x="abort",v.add(p.complete),S.done(p.success),S.fail(p.error),n=Be(We,p,e,S)){if(S.readyState=1,h&&g.trigger("ajaxSend",[S,p]),c)return S;p.async&&p.timeout>0&&(r=i.setTimeout((function(){S.abort("timeout")}),p.timeout));try{c=!1,n.send(_,D)}catch(t){if(c)throw t;D(-1,t)}}else D(-1,"No Transport");function D(t,e,a,l){var u,d,y,_,w,x=e;c||(c=!0,r&&i.clearTimeout(r),n=void 0,o=l||"",S.readyState=t>0?4:0,u=t>=200&&t<300||304===t,a&&(_=function(t,e,i){for(var n,s,o,a,r=t.contents,l=t.dataTypes;"*"===l[0];)l.shift(),void 0===n&&(n=t.mimeType||e.getResponseHeader("Content-Type"));if(n)for(s in r)if(r[s]&&r[s].test(n)){l.unshift(s);break}if(l[0]in i)o=l[0];else{for(s in i){if(!l[0]||t.converters[s+" "+l[0]]){o=s;break}a||(a=s)}o=o||a}if(o)return o!==l[0]&&l.unshift(o),i[o]}(p,S,a)),!u&&C.inArray("script",p.dataTypes)>-1&&(p.converters["text script"]=function(){}),_=function(t,e,i,n){var s,o,a,r,l,c={},h=t.dataTypes.slice();if(h[1])for(a in t.converters)c[a.toLowerCase()]=t.converters[a];for(o=h.shift();o;)if(t.responseFields[o]&&(i[t.responseFields[o]]=e),!l&&n&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=o,o=h.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(!(a=c[l+" "+o]||c["* "+o]))for(s in c)if((r=s.split(" "))[1]===o&&(a=c[l+" "+r[0]]||c["* "+r[0]])){!0===a?a=c[s]:!0!==c[s]&&(o=r[0],h.unshift(r[1]));break}if(!0!==a)if(a&&t.throws)e=a(e);else try{e=a(e)}catch(t){return{state:"parsererror",error:a?t:"No conversion from "+l+" to "+o}}}return{state:"success",data:e}}(p,_,S,u),u?(p.ifModified&&((w=S.getResponseHeader("Last-Modified"))&&(C.lastModified[s]=w),(w=S.getResponseHeader("etag"))&&(C.etag[s]=w)),204===t||"HEAD"===p.type?x="nocontent":304===t?x="notmodified":(x=_.state,d=_.data,u=!(y=_.error))):(y=x,!t&&x||(x="error",t<0&&(t=0))),S.status=t,S.statusText=(e||x)+"",u?m.resolveWith(f,[d,x,S]):m.rejectWith(f,[S,x,y]),S.statusCode(b),b=void 0,h&&g.trigger(u?"ajaxSuccess":"ajaxError",[S,p,u?d:y]),v.fireWith(f,[S,x]),h&&(g.trigger("ajaxComplete",[S,p]),--C.active||C.event.trigger("ajaxStop")))}return S},getJSON:function(t,e,i){return C.get(t,e,i,"json")},getScript:function(t,e){return C.get(t,void 0,e,"script")}}),C.each(["get","post"],(function(t,e){C[e]=function(t,i,n,s){return v(i)&&(s=s||n,n=i,i=void 0),C.ajax(C.extend({url:t,type:e,dataType:s,data:i,success:n},C.isPlainObject(t)&&t))}})),C.ajaxPrefilter((function(t){var e;for(e in t.headers)"content-type"===e.toLowerCase()&&(t.contentType=t.headers[e]||"")})),C._evalUrl=function(t,e,i){return C.ajax({url:t,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(t){C.globalEval(t,e,i)}})},C.fn.extend({wrapAll:function(t){var e;return this[0]&&(v(t)&&(t=t.call(this[0])),e=C(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map((function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t})).append(this)),this},wrapInner:function(t){return v(t)?this.each((function(e){C(this).wrapInner(t.call(this,e))})):this.each((function(){var e=C(this),i=e.contents();i.length?i.wrapAll(t):e.append(t)}))},wrap:function(t){var e=v(t);return this.each((function(i){C(this).wrapAll(e?t.call(this,i):t)}))},unwrap:function(t){return this.parent(t).not("body").each((function(){C(this).replaceWith(this.childNodes)})),this}}),C.expr.pseudos.hidden=function(t){return!C.expr.pseudos.visible(t)},C.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},C.ajaxSettings.xhr=function(){try{return new i.XMLHttpRequest}catch(t){}};var qe={0:200,1223:204},Ve=C.ajaxSettings.xhr();m.cors=!!Ve&&"withCredentials"in Ve,m.ajax=Ve=!!Ve,C.ajaxTransport((function(t){var e,n;if(m.cors||Ve&&!t.crossDomain)return{send:function(s,o){var a,r=t.xhr();if(r.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)r[a]=t.xhrFields[a];for(a in t.mimeType&&r.overrideMimeType&&r.overrideMimeType(t.mimeType),t.crossDomain||s["X-Requested-With"]||(s["X-Requested-With"]="XMLHttpRequest"),s)r.setRequestHeader(a,s[a]);e=function(t){return function(){e&&(e=n=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===t?r.abort():"error"===t?"number"!=typeof r.status?o(0,"error"):o(r.status,r.statusText):o(qe[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=e(),n=r.onerror=r.ontimeout=e("error"),void 0!==r.onabort?r.onabort=n:r.onreadystatechange=function(){4===r.readyState&&i.setTimeout((function(){e&&n()}))},e=e("abort");try{r.send(t.hasContent&&t.data||null)}catch(t){if(e)throw t}},abort:function(){e&&e()}}})),C.ajaxPrefilter((function(t){t.crossDomain&&(t.contents.script=!1)})),C.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return C.globalEval(t),t}}}),C.ajaxPrefilter("script",(function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")})),C.ajaxTransport("script",(function(t){var e,i;if(t.crossDomain||t.scriptAttrs)return{send:function(n,s){e=C("<script>").attr(t.scriptAttrs||{}).prop({charset:t.scriptCharset,src:t.url}).on("load error",i=function(t){e.remove(),i=null,t&&s("error"===t.type?404:200,t.type)}),y.head.appendChild(e[0])},abort:function(){i&&i()}}}));var Ye,Xe=[],Ge=/(=)\?(?=&|$)|\?\?/;C.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=Xe.pop()||C.expando+"_"+De.guid++;return this[t]=!0,t}}),C.ajaxPrefilter("json jsonp",(function(t,e,n){var s,o,a,r=!1!==t.jsonp&&(Ge.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ge.test(t.data)&&"data");if(r||"jsonp"===t.dataTypes[0])return s=t.jsonpCallback=v(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,r?t[r]=t[r].replace(Ge,"$1"+s):!1!==t.jsonp&&(t.url+=(Te.test(t.url)?"&":"?")+t.jsonp+"="+s),t.converters["script json"]=function(){return a||C.error(s+" was not called"),a[0]},t.dataTypes[0]="json",o=i[s],i[s]=function(){a=arguments},n.always((function(){void 0===o?C(i).removeProp(s):i[s]=o,t[s]&&(t.jsonpCallback=e.jsonpCallback,Xe.push(s)),a&&v(o)&&o(a[0]),a=o=void 0})),"script"})),m.createHTMLDocument=((Ye=y.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ye.childNodes.length),C.parseHTML=function(t,e,i){return"string"!=typeof t?[]:("boolean"==typeof e&&(i=e,e=!1),e||(m.createHTMLDocument?((n=(e=y.implementation.createHTMLDocument("")).createElement("base")).href=y.location.href,e.head.appendChild(n)):e=y),o=!i&&[],(s=E.exec(t))?[e.createElement(s[1])]:(s=xt([t],e,o),o&&o.length&&C(o).remove(),C.merge([],s.childNodes)));var n,s,o},C.fn.load=function(t,e,i){var n,s,o,a=this,r=t.indexOf(" ");return r>-1&&(n=be(t.slice(r)),t=t.slice(0,r)),v(e)?(i=e,e=void 0):e&&"object"==typeof e&&(s="POST"),a.length>0&&C.ajax({url:t,type:s||"GET",dataType:"html",data:e}).done((function(t){o=arguments,a.html(n?C("<div>").append(C.parseHTML(t)).find(n):t)})).always(i&&function(t,e){a.each((function(){i.apply(this,o||[t.responseText,e,t])}))}),this},C.expr.pseudos.animated=function(t){return C.grep(C.timers,(function(e){return t===e.elem})).length},C.offset={setOffset:function(t,e,i){var n,s,o,a,r,l,c=C.css(t,"position"),h=C(t),u={};"static"===c&&(t.style.position="relative"),r=h.offset(),o=C.css(t,"top"),l=C.css(t,"left"),("absolute"===c||"fixed"===c)&&(o+l).indexOf("auto")>-1?(a=(n=h.position()).top,s=n.left):(a=parseFloat(o)||0,s=parseFloat(l)||0),v(e)&&(e=e.call(t,i,C.extend({},r))),null!=e.top&&(u.top=e.top-r.top+a),null!=e.left&&(u.left=e.left-r.left+s),"using"in e?e.using.call(t,u):("number"==typeof u.top&&(u.top+="px"),"number"==typeof u.left&&(u.left+="px"),h.css(u))}},C.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each((function(e){C.offset.setOffset(this,t,e)}));var e,i,n=this[0];return n?n.getClientRects().length?(e=n.getBoundingClientRect(),i=n.ownerDocument.defaultView,{top:e.top+i.pageYOffset,left:e.left+i.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var t,e,i,n=this[0],s={top:0,left:0};if("fixed"===C.css(n,"position"))e=n.getBoundingClientRect();else{for(e=this.offset(),i=n.ownerDocument,t=n.offsetParent||i.documentElement;t&&(t===i.body||t===i.documentElement)&&"static"===C.css(t,"position");)t=t.parentNode;t&&t!==n&&1===t.nodeType&&((s=C(t).offset()).top+=C.css(t,"borderTopWidth",!0),s.left+=C.css(t,"borderLeftWidth",!0))}return{top:e.top-s.top-C.css(n,"marginTop",!0),left:e.left-s.left-C.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){for(var t=this.offsetParent;t&&"static"===C.css(t,"position");)t=t.offsetParent;return t||ot}))}}),C.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(t,e){var i="pageYOffset"===e;C.fn[t]=function(n){return U(this,(function(t,n,s){var o;if(b(t)?o=t:9===t.nodeType&&(o=t.defaultView),void 0===s)return o?o[e]:t[n];o?o.scrollTo(i?o.pageXOffset:s,i?s:o.pageYOffset):t[n]=s}),t,n,arguments.length)}})),C.each(["top","left"],(function(t,e){C.cssHooks[e]=Vt(m.pixelPosition,(function(t,i){if(i)return i=qt(t,e),zt.test(i)?C(t).position()[e]+"px":i}))})),C.each({Height:"height",Width:"width"},(function(t,e){C.each({padding:"inner"+t,content:e,"":"outer"+t},(function(i,n){C.fn[n]=function(s,o){var a=arguments.length&&(i||"boolean"!=typeof s),r=i||(!0===s||!0===o?"margin":"border");return U(this,(function(e,i,s){var o;return b(e)?0===n.indexOf("outer")?e["inner"+t]:e.document.documentElement["client"+t]:9===e.nodeType?(o=e.documentElement,Math.max(e.body["scroll"+t],o["scroll"+t],e.body["offset"+t],o["offset"+t],o["client"+t])):void 0===s?C.css(e,i,r):C.style(e,i,s,r)}),e,a?s:void 0,a)}}))})),C.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(t,e){C.fn[e]=function(t){return this.on(e,t)}})),C.fn.extend({bind:function(t,e,i){return this.on(t,null,e,i)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,i,n){return this.on(e,t,i,n)},undelegate:function(t,e,i){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",i)},hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)}}),C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(t,e){C.fn[e]=function(t,i){return arguments.length>0?this.on(e,null,t,i):this.trigger(e)}}));var Ke=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;C.proxy=function(t,e){var i,n,s;if("string"==typeof e&&(i=t[e],e=t,t=i),v(t))return n=r.call(arguments,2),(s=function(){return t.apply(e||this,n.concat(r.call(arguments)))}).guid=t.guid=t.guid||C.guid++,s},C.holdReady=function(t){t?C.readyWait++:C.ready(!0)},C.isArray=Array.isArray,C.parseJSON=JSON.parse,C.nodeName=A,C.isFunction=v,C.isWindow=b,C.camelCase=X,C.type=x,C.now=Date.now,C.isNumeric=function(t){var e=C.type(t);return("number"===e||"string"===e)&&!isNaN(t-parseFloat(t))},C.trim=function(t){return null==t?"":(t+"").replace(Ke,"")},void 0===(n=function(){return C}.apply(e,[]))||(t.exports=n);var Je=i.jQuery,Qe=i.$;return C.noConflict=function(t){return i.$===C&&(i.$=Qe),t&&i.jQuery===C&&(i.jQuery=Je),C},void 0===s&&(i.jQuery=i.$=C),C}))},NDSh:function(t,e,i){(function(n){var s,o,a,r;i("+Hvk"),window,r=document,o=[i("EVdn"),i("aBAq")],void 0===(a="function"==typeof(s=function(t,e){t.extend(!0,e.defaults,{dom:"<'row'<'col-sm-6'l><'col-sm-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'i><'col-sm-7'p>>",renderer:"bootstrap"}),t.extend(e.ext.classes,{sWrapper:"dataTables_wrapper form-inline dt-bootstrap",sFilterInput:"form-control input-sm",sLengthSelect:"form-control input-sm"}),e.ext.renderer.pageButton.bootstrap=function(i,n,s,o,a,l){var c,h,u,d=new e.Api(i),p=i.oClasses,f=i.oLanguage.oPaginate,g=0;try{u=t(r.activeElement).data("dt-idx")}catch(t){}!function e(n,o){var r,u,m,v,b=function(e){e.preventDefault(),t(e.currentTarget).hasClass("disabled")||d.page(e.data.action).draw(!1)};for(r=0,u=o.length;r<u;r++)if(v=o[r],t.isArray(v))e(n,v);else{switch(h=c="",v){case"ellipsis":c="&hellip;",h="disabled";break;case"first":c=f.sFirst,h=v+(0<a?"":" disabled");break;case"previous":c=f.sPrevious,h=v+(0<a?"":" disabled");break;case"next":c=f.sNext,h=v+(a<l-1?"":" disabled");break;case"last":c=f.sLast,h=v+(a<l-1?"":" disabled");break;default:c=v+1,h=a===v?"active":""}c&&(m=t("<li>",{class:p.sPageButton+" "+h,id:0===s&&"string"==typeof v?i.sTableId+"_"+v:null}).append(t("<a>",{href:"#","aria-controls":i.sTableId,"data-dt-idx":g,tabindex:i.iTabIndex}).html(c)).appendTo(n),i.oApi._fnBindAction(m,{action:v},b),g++)}}(t(n).empty().html('<ul class="pagination"/>').children("ul"),o),u&&t(n).find("[data-dt-idx="+u+"]").focus()},e.TableTools&&(t.extend(!0,e.TableTools.classes,{container:"DTTT btn-group",buttons:{normal:"btn btn-default",disabled:"disabled"},collection:{container:"DTTT_dropdown dropdown-menu",buttons:{normal:"",disabled:"disabled"}},print:{info:"DTTT_print_info"},select:{row:"active"}}),t.extend(!0,e.TableTools.DEFAULTS.oTags,{collection:{container:"ul",button:"li",liner:"a"}}))})?s.apply(e,o):s)||(t.exports=a)}).call(this,i("EVdn"))},PDX0:function(t,e){(function(e){t.exports=e}).call(this,{})},"RGv/":function(t,e,i){(function(t,e){!function(t,e){"use strict";var i=["skin-blue","skin-black","skin-red","skin-yellow","skin-purple","skin-green","skin-blue-light","skin-black-light","skin-red-light","skin-yellow-light","skin-purple-light","skin-green-light"],n=t("<div />",{id:"control-sidebar-theme-demo-options-tab",class:"tab-pane active"}),s=t("<li />",{class:"active"}).html("<a href='#control-sidebar-theme-demo-options-tab' data-toggle='tab'><i class='fa fa-wrench'></i></a>");t("[href='#control-sidebar-home-tab']").parent().before(s);var o=t("<div />");o.append("<h4 class='control-sidebar-heading'>Layout Options</h4><div class='form-group'><label class='control-sidebar-subheading'><input type='checkbox' data-layout='fixed' class='pull-right'/> Fixed layout</label><p>Activate the fixed layout. You can't use fixed and boxed layouts together</p></div><div class='form-group'><label class='control-sidebar-subheading'><input type='checkbox' data-layout='layout-boxed'class='pull-right'/> Boxed Layout</label><p>Activate the boxed layout</p></div><div class='form-group'><label class='control-sidebar-subheading'><input type='checkbox' data-layout='sidebar-collapse' class='pull-right'/> Toggle Sidebar</label><p>Toggle the left sidebar's state (open or collapse)</p></div><div class='form-group'><label class='control-sidebar-subheading'><input type='checkbox' data-enable='expandOnHover' class='pull-right'/> Sidebar Expand on Hover</label><p>Let the sidebar mini expand on hover</p></div><div class='form-group'><label class='control-sidebar-subheading'><input type='checkbox' data-controlsidebar='control-sidebar-open' class='pull-right'/> Toggle Right Sidebar Slide</label><p>Toggle between slide over content and push content effects</p></div><div class='form-group'><label class='control-sidebar-subheading'><input type='checkbox' data-sidebarskin='toggle' class='pull-right'/> Toggle Right Sidebar Skin</label><p>Toggle between dark and light skins for the right sidebar</p></div>");var a=t("<ul />",{class:"list-unstyled clearfix"}),r=t("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append("<a href='javascript:void(0);' data-skin='skin-blue' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'><div><span style='display:block; width: 20%; float: left; height: 7px; background: #367fa9;'></span><span class='bg-light-blue' style='display:block; width: 80%; float: left; height: 7px;'></span></div><div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div></a><p class='text-center no-margin'>Blue</p>");a.append(r);var l=t("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append("<a href='javascript:void(0);' data-skin='skin-black' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'><div style='box-shadow: 0 0 2px rgba(0,0,0,0.1)' class='clearfix'><span style='display:block; width: 20%; float: left; height: 7px; background: #fefefe;'></span><span style='display:block; width: 80%; float: left; height: 7px; background: #fefefe;'></span></div><div><span style='display:block; width: 20%; float: left; height: 20px; background: #222;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div></a><p class='text-center no-margin'>Black</p>");a.append(l);var c=t("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append("<a href='javascript:void(0);' data-skin='skin-purple' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'><div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-purple-active'></span><span class='bg-purple' style='display:block; width: 80%; float: left; height: 7px;'></span></div><div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div></a><p class='text-center no-margin'>Purple</p>");a.append(c);var h=t("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append("<a href='javascript:void(0);' data-skin='skin-green' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'><div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-green-active'></span><span class='bg-green' style='display:block; width: 80%; float: left; height: 7px;'></span></div><div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div></a><p class='text-center no-margin'>Green</p>");a.append(h);var u=t("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append("<a href='javascript:void(0);' data-skin='skin-red' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'><div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-red-active'></span><span class='bg-red' style='display:block; width: 80%; float: left; height: 7px;'></span></div><div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div></a><p class='text-center no-margin'>Red</p>");a.append(u);var d=t("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append("<a href='javascript:void(0);' data-skin='skin-yellow' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'><div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-yellow-active'></span><span class='bg-yellow' style='display:block; width: 80%; float: left; height: 7px;'></span></div><div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div></a><p class='text-center no-margin'>Yellow</p>");a.append(d);var p=t("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append("<a href='javascript:void(0);' data-skin='skin-blue-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'><div><span style='display:block; width: 20%; float: left; height: 7px; background: #367fa9;'></span><span class='bg-light-blue' style='display:block; width: 80%; float: left; height: 7px;'></span></div><div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div></a><p class='text-center no-margin' style='font-size: 12px'>Blue Light</p>");a.append(p);var f=t("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append("<a href='javascript:void(0);' data-skin='skin-black-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'><div style='box-shadow: 0 0 2px rgba(0,0,0,0.1)' class='clearfix'><span style='display:block; width: 20%; float: left; height: 7px; background: #fefefe;'></span><span style='display:block; width: 80%; float: left; height: 7px; background: #fefefe;'></span></div><div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div></a><p class='text-center no-margin' style='font-size: 12px'>Black Light</p>");a.append(f);var g=t("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append("<a href='javascript:void(0);' data-skin='skin-purple-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'><div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-purple-active'></span><span class='bg-purple' style='display:block; width: 80%; float: left; height: 7px;'></span></div><div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div></a><p class='text-center no-margin' style='font-size: 12px'>Purple Light</p>");a.append(g);var m=t("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append("<a href='javascript:void(0);' data-skin='skin-green-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'><div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-green-active'></span><span class='bg-green' style='display:block; width: 80%; float: left; height: 7px;'></span></div><div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div></a><p class='text-center no-margin' style='font-size: 12px'>Green Light</p>");a.append(m);var v=t("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append("<a href='javascript:void(0);' data-skin='skin-red-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'><div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-red-active'></span><span class='bg-red' style='display:block; width: 80%; float: left; height: 7px;'></span></div><div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div></a><p class='text-center no-margin' style='font-size: 12px'>Red Light</p>");a.append(v);var b=t("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append("<a href='javascript:void(0);' data-skin='skin-yellow-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'><div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-yellow-active'></span><span class='bg-yellow' style='display:block; width: 80%; float: left; height: 7px;'></span></div><div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div></a><p class='text-center no-margin' style='font-size: 12px;'>Yellow Light</p>");function y(i){t("body").toggleClass(i),e.layout.fixSidebar(),"layout-boxed"==i&&e.controlSidebar._fix(t(".control-sidebar-bg")),t("body").hasClass("fixed")&&"fixed"==i&&(e.pushMenu.expandOnHover(),e.layout.activate()),e.controlSidebar._fix(t(".control-sidebar-bg")),e.controlSidebar._fix(t(".control-sidebar"))}function _(e){var n,s;return t.each(i,(function(e){t("body").removeClass(i[e])})),t("body").addClass(e),n="skin",s=e,"undefined"!=typeof Storage?localStorage.setItem(n,s):window.alert("Please use a modern browser to properly view this template!"),!1}a.append(b),o.append("<h4 class='control-sidebar-heading'>Skins</h4>"),o.append(a),n.append(o),t("#control-sidebar-home-tab").after(n),function(){var n=function(t){if("undefined"!=typeof Storage)return localStorage.getItem(t);window.alert("Please use a modern browser to properly view this template!")}("skin");n&&t.inArray(n,i)&&_(n);t("[data-skin]").on("click",(function(e){e.preventDefault(),_(t(this).data("skin"))})),t("[data-layout]").on("click",(function(){y(t(this).data("layout"))})),t("[data-controlsidebar]").on("click",(function(){y(t(this).data("controlsidebar"));var i=!e.options.controlSidebarOptions.slide;e.options.controlSidebarOptions.slide=i,i||t(".control-sidebar").removeClass("control-sidebar-open")})),t("[data-sidebarskin='toggle']").on("click",(function(){var e=t(".control-sidebar");e.hasClass("control-sidebar-dark")?(e.removeClass("control-sidebar-dark"),e.addClass("control-sidebar-light")):(e.removeClass("control-sidebar-light"),e.addClass("control-sidebar-dark"))})),t("[data-enable='expandOnHover']").on("click",(function(){t(this).attr("disabled",!0),e.pushMenu.expandOnHover(),t("body").hasClass("sidebar-collapse")||t("[data-layout='sidebar-collapse']").click()})),t("body").hasClass("fixed")&&t("[data-layout='fixed']").attr("checked","checked");t("body").hasClass("layout-boxed")&&t("[data-layout='layout-boxed']").attr("checked","checked");t("body").hasClass("sidebar-collapse")&&t("[data-layout='sidebar-collapse']").attr("checked","checked")}()}(t,e.AdminLTE)}).call(this,i("EVdn"),i("EVdn"))},YahB:function(t,e,i){var n,s;void 0===this&&void 0!==window&&window,n=[i("EVdn")],void 0===(s=function(t){return function(t){!function(t){"use strict";var e=["sanitize","whiteList","sanitizeFn"],i=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],n=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,s=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function o(e,o){var a=e.nodeName.toLowerCase();if(-1!==t.inArray(a,o))return-1===t.inArray(a,i)||Boolean(e.nodeValue.match(n)||e.nodeValue.match(s));for(var r=t(o).filter((function(t,e){return e instanceof RegExp})),l=0,c=r.length;l<c;l++)if(a.match(r[l]))return!0;return!1}function a(t,e,i){if(i&&"function"==typeof i)return i(t);for(var n=Object.keys(e),s=0,a=t.length;s<a;s++)for(var r=t[s].querySelectorAll("*"),l=0,c=r.length;l<c;l++){var h=r[l],u=h.nodeName.toLowerCase();if(-1!==n.indexOf(u))for(var d=[].slice.call(h.attributes),p=[].concat(e["*"]||[],e[u]||[]),f=0,g=d.length;f<g;f++){var m=d[f];o(m,p)||h.removeAttribute(m.nodeName)}else h.parentNode.removeChild(h)}}"classList"in document.createElement("_")||function(e){if("Element"in e){var i="classList",n="prototype",s=e.Element[n],o=Object,a=function(){var e=t(this);return{add:function(t){return t=Array.prototype.slice.call(arguments).join(" "),e.addClass(t)},remove:function(t){return t=Array.prototype.slice.call(arguments).join(" "),e.removeClass(t)},toggle:function(t,i){return e.toggleClass(t,i)},contains:function(t){return e.hasClass(t)}}};if(o.defineProperty){var r={get:a,enumerable:!0,configurable:!0};try{o.defineProperty(s,i,r)}catch(e){void 0!==e.number&&-2146823252!==e.number||(r.enumerable=!1,o.defineProperty(s,i,r))}}else o[n].__defineGetter__&&s.__defineGetter__(i,a)}}(window);var r,l,c=document.createElement("_");if(c.classList.add("c1","c2"),!c.classList.contains("c2")){var h=DOMTokenList.prototype.add,u=DOMTokenList.prototype.remove;DOMTokenList.prototype.add=function(){Array.prototype.forEach.call(arguments,h.bind(this))},DOMTokenList.prototype.remove=function(){Array.prototype.forEach.call(arguments,u.bind(this))}}if(c.classList.toggle("c3",!1),c.classList.contains("c3")){var d=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:d.call(this,t)}}function p(t){if(null==this)throw new TypeError;var e=String(this);if(t&&"[object RegExp]"==l.call(t))throw new TypeError;var i=e.length,n=String(t),s=n.length,o=1<arguments.length?arguments[1]:void 0,a=o?Number(o):0;a!=a&&(a=0);var r=Math.min(Math.max(a,0),i);if(i<s+r)return!1;for(var c=-1;++c<s;)if(e.charCodeAt(r+c)!=n.charCodeAt(c))return!1;return!0}function f(t,e){var i,n=t.selectedOptions,s=[];if(e){for(var o=0,a=n.length;o<a;o++)(i=n[o]).disabled||"OPTGROUP"===i.parentNode.tagName&&i.parentNode.disabled||s.push(i);return s}return n}function g(t,e){for(var i,n=[],s=e||t.selectedOptions,o=0,a=s.length;o<a;o++)(i=s[o]).disabled||"OPTGROUP"===i.parentNode.tagName&&i.parentNode.disabled||n.push(i.value);return t.multiple?n:n.length?n[0]:null}c=null,String.prototype.startsWith||(r=function(){try{var t={},e=Object.defineProperty,i=e(t,t,t)&&e}catch(t){}return i}(),l={}.toString,r?r(String.prototype,"startsWith",{value:p,configurable:!0,writable:!0}):String.prototype.startsWith=p),Object.keys||(Object.keys=function(t,e,i){for(e in i=[],t)i.hasOwnProperty.call(t,e)&&i.push(e);return i}),HTMLSelectElement&&!HTMLSelectElement.prototype.hasOwnProperty("selectedOptions")&&Object.defineProperty(HTMLSelectElement.prototype,"selectedOptions",{get:function(){return this.querySelectorAll(":checked")}});var m={useDefault:!1,_set:t.valHooks.select.set};t.valHooks.select.set=function(e,i){return i&&!m.useDefault&&t(e).data("selected",!0),m._set.apply(this,arguments)};var v=null,b=function(){try{return new Event("change"),!0}catch(t){return!1}}();function y(t,e,i,n){for(var s=["display","subtext","tokens"],o=!1,a=0;a<s.length;a++){var r=s[a],l=t[r];if(l&&(l=l.toString(),"display"===r&&(l=l.replace(/<[^>]+>/g,"")),n&&(l=D(l)),l=l.toUpperCase(),o="contains"===i?0<=l.indexOf(e):l.startsWith(e)))break}return o}function _(t){return parseInt(t,10)||0}t.fn.triggerNative=function(t){var e,i=this[0];i.dispatchEvent?(b?e=new Event(t,{bubbles:!0}):(e=document.createEvent("Event")).initEvent(t,!0,!1),i.dispatchEvent(e)):i.fireEvent?((e=document.createEventObject()).eventType=t,i.fireEvent("on"+t,e)):this.trigger(t)};var w={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},x=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,C=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]","g");function S(t){return w[t]}function D(t){return(t=t.toString())&&t.replace(x,S).replace(C,"")}var T,k,I,A,E=(T={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},k="(?:"+Object.keys(T).join("|")+")",I=RegExp(k),A=RegExp(k,"g"),function(t){return t=null==t?"":""+t,I.test(t)?t.replace(A,P):t});function P(t){return T[t]}var N={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"},O={success:!1,major:"3"};try{O.full=(t.fn.dropdown.Constructor.VERSION||"").split(" ")[0].split("."),O.major=O.full[0],O.success=!0}catch(t){}var L=0,M=".bs.select",H={DISABLED:"disabled",DIVIDER:"divider",SHOW:"open",DROPUP:"dropup",MENU:"dropdown-menu",MENURIGHT:"dropdown-menu-right",MENULEFT:"dropdown-menu-left",BUTTONCLASS:"btn-default",POPOVERHEADER:"popover-title",ICONBASE:"glyphicon",TICKICON:"glyphicon-ok"},R={MENU:"."+H.MENU},F={div:document.createElement("div"),span:document.createElement("span"),i:document.createElement("i"),subtext:document.createElement("small"),a:document.createElement("a"),li:document.createElement("li"),whitespace:document.createTextNode(" "),fragment:document.createDocumentFragment()};F.noResults=F.li.cloneNode(!1),F.noResults.className="no-results",F.a.setAttribute("role","option"),F.a.className="dropdown-item",F.subtext.className="text-muted",F.text=F.span.cloneNode(!1),F.text.className="text",F.checkMark=F.span.cloneNode(!1);var W=new RegExp("38|40"),j=new RegExp("^9$|27"),z={li:function(t,e,i){var n=F.li.cloneNode(!1);return t&&(1===t.nodeType||11===t.nodeType?n.appendChild(t):n.innerHTML=t),void 0!==e&&""!==e&&(n.className=e),null!=i&&n.classList.add("optgroup-"+i),n},a:function(t,e,i){var n=F.a.cloneNode(!0);return t&&(11===t.nodeType?n.appendChild(t):n.insertAdjacentHTML("beforeend",t)),void 0!==e&&""!==e&&n.classList.add.apply(n.classList,e.split(/\s+/)),i&&n.setAttribute("style",i),n},text:function(t,e){var i,n,s=F.text.cloneNode(!1);if(t.content)s.innerHTML=t.content;else{if(s.textContent=t.text,t.icon){var o=F.whitespace.cloneNode(!1);(n=(!0===e?F.i:F.span).cloneNode(!1)).className=this.options.iconBase+" "+t.icon,F.fragment.appendChild(n),F.fragment.appendChild(o)}t.subtext&&((i=F.subtext.cloneNode(!1)).textContent=t.subtext,s.appendChild(i))}if(!0===e)for(;0<s.childNodes.length;)F.fragment.appendChild(s.childNodes[0]);else F.fragment.appendChild(s);return F.fragment},label:function(t){var e,i,n=F.text.cloneNode(!1);if(n.innerHTML=t.display,t.icon){var s=F.whitespace.cloneNode(!1);(i=F.span.cloneNode(!1)).className=this.options.iconBase+" "+t.icon,F.fragment.appendChild(i),F.fragment.appendChild(s)}return t.subtext&&((e=F.subtext.cloneNode(!1)).textContent=t.subtext,n.appendChild(e)),F.fragment.appendChild(n),F.fragment}},$=function(e,i){var n=this;m.useDefault||(t.valHooks.select.set=m._set,m.useDefault=!0),this.$element=t(e),this.$newElement=null,this.$button=null,this.$menu=null,this.options=i,this.selectpicker={main:{},search:{},current:{},view:{},isSearching:!1,keydown:{keyHistory:"",resetKeyHistory:{start:function(){return setTimeout((function(){n.selectpicker.keydown.keyHistory=""}),800)}}}},this.sizeInfo={},null===this.options.title&&(this.options.title=this.$element.attr("title"));var s=this.options.windowPadding;"number"==typeof s&&(this.options.windowPadding=[s,s,s,s]),this.val=$.prototype.val,this.render=$.prototype.render,this.refresh=$.prototype.refresh,this.setStyle=$.prototype.setStyle,this.selectAll=$.prototype.selectAll,this.deselectAll=$.prototype.deselectAll,this.destroy=$.prototype.destroy,this.remove=$.prototype.remove,this.show=$.prototype.show,this.hide=$.prototype.hide,this.init()};function B(i){var n,s=arguments,o=i;if([].shift.apply(s),!O.success){try{O.full=(t.fn.dropdown.Constructor.VERSION||"").split(" ")[0].split(".")}catch(i){$.BootstrapVersion?O.full=$.BootstrapVersion.split(" ")[0].split("."):(O.full=[O.major,"0","0"],console.warn("There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.",i))}O.major=O.full[0],O.success=!0}if("4"===O.major){var a=[];$.DEFAULTS.style===H.BUTTONCLASS&&a.push({name:"style",className:"BUTTONCLASS"}),$.DEFAULTS.iconBase===H.ICONBASE&&a.push({name:"iconBase",className:"ICONBASE"}),$.DEFAULTS.tickIcon===H.TICKICON&&a.push({name:"tickIcon",className:"TICKICON"}),H.DIVIDER="dropdown-divider",H.SHOW="show",H.BUTTONCLASS="btn-light",H.POPOVERHEADER="popover-header",H.ICONBASE="",H.TICKICON="bs-ok-default";for(var r=0;r<a.length;r++)i=a[r],$.DEFAULTS[i.name]=H[i.className]}var l=this.each((function(){var i=t(this);if(i.is("select")){var a=i.data("selectpicker"),r="object"==typeof o&&o;if(a){if(r)for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(a.options[l]=r[l])}else{var c=i.data();for(var h in c)Object.prototype.hasOwnProperty.call(c,h)&&-1!==t.inArray(h,e)&&delete c[h];var u=t.extend({},$.DEFAULTS,t.fn.selectpicker.defaults||{},c,r);u.template=t.extend({},$.DEFAULTS.template,t.fn.selectpicker.defaults?t.fn.selectpicker.defaults.template:{},c.template,r.template),i.data("selectpicker",a=new $(this,u))}"string"==typeof o&&(n=a[o]instanceof Function?a[o].apply(a,s):a.options[o])}}));return void 0!==n?n:l}$.VERSION="1.13.18",$.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results matched {0}",countSelectedText:function(t,e){return 1==t?"{0} item selected":"{0} items selected"},maxOptionsText:function(t,e){return[1==t?"Limit reached ({n} item max)":"Limit reached ({n} items max)",1==e?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)"]},selectAllText:"Select All",deselectAllText:"Deselect All",doneButton:!1,doneButtonText:"Close",multipleSeparator:", ",styleBase:"btn",style:H.BUTTONCLASS,size:"auto",title:null,selectedTextFormat:"values",width:!1,container:!1,hideDisabled:!1,showSubtext:!1,showIcon:!0,showContent:!0,dropupAuto:!0,header:!1,liveSearch:!1,liveSearchPlaceholder:null,liveSearchNormalize:!1,liveSearchStyle:"contains",actionsBox:!1,iconBase:H.ICONBASE,tickIcon:H.TICKICON,showTick:!1,template:{caret:'<span class="caret"></span>'},maxOptions:!1,mobile:!1,selectOnTab:!1,dropdownAlignRight:!1,windowPadding:0,virtualScroll:600,display:!1,sanitize:!0,sanitizeFn:null,whiteList:{"*":["class","dir","id","lang","role","tabindex","style",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]}},$.prototype={constructor:$,init:function(){var t=this,e=this.$element.attr("id"),i=this.$element[0],n=i.form;L++,this.selectId="bs-select-"+L,i.classList.add("bs-select-hidden"),this.multiple=this.$element.prop("multiple"),this.autofocus=this.$element.prop("autofocus"),i.classList.contains("show-tick")&&(this.options.showTick=!0),this.$newElement=this.createDropdown(),this.buildData(),this.$element.after(this.$newElement).prependTo(this.$newElement),n&&null===i.form&&(n.id||(n.id="form-"+this.selectId),i.setAttribute("form",n.id)),this.$button=this.$newElement.children("button"),this.$menu=this.$newElement.children(R.MENU),this.$menuInner=this.$menu.children(".inner"),this.$searchbox=this.$menu.find("input"),i.classList.remove("bs-select-hidden"),!0===this.options.dropdownAlignRight&&this.$menu[0].classList.add(H.MENURIGHT),void 0!==e&&this.$button.attr("data-id",e),this.checkDisabled(),this.clickListener(),this.options.liveSearch?(this.liveSearchListener(),this.focusedParent=this.$searchbox[0]):this.focusedParent=this.$menuInner[0],this.setStyle(),this.render(),this.setWidth(),this.options.container?this.selectPosition():this.$element.on("hide"+M,(function(){if(t.isVirtual()){var e=t.$menuInner[0],i=e.firstChild.cloneNode(!1);e.replaceChild(i,e.firstChild),e.scrollTop=0}})),this.$menu.data("this",this),this.$newElement.data("this",this),this.options.mobile&&this.mobile(),this.$newElement.on({"hide.bs.dropdown":function(e){t.$element.trigger("hide"+M,e)},"hidden.bs.dropdown":function(e){t.$element.trigger("hidden"+M,e)},"show.bs.dropdown":function(e){t.$element.trigger("show"+M,e)},"shown.bs.dropdown":function(e){t.$element.trigger("shown"+M,e)}}),i.hasAttribute("required")&&this.$element.on("invalid"+M,(function(){t.$button[0].classList.add("bs-invalid"),t.$element.on("shown"+M+".invalid",(function(){t.$element.val(t.$element.val()).off("shown"+M+".invalid")})).on("rendered"+M,(function(){this.validity.valid&&t.$button[0].classList.remove("bs-invalid"),t.$element.off("rendered"+M)})),t.$button.on("blur"+M,(function(){t.$element.trigger("focus").trigger("blur"),t.$button.off("blur"+M)}))})),setTimeout((function(){t.buildList(),t.$element.trigger("loaded"+M)}))},createDropdown:function(){var e=this.multiple||this.options.showTick?" show-tick":"",i=this.multiple?' aria-multiselectable="true"':"",n="",s=this.autofocus?" autofocus":"";O.major<4&&this.$element.parent().hasClass("input-group")&&(n=" input-group-btn");var o,a="",r="",l="",c="";return this.options.header&&(a='<div class="'+H.POPOVERHEADER+'"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>"),this.options.liveSearch&&(r='<div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off"'+(null===this.options.liveSearchPlaceholder?"":' placeholder="'+E(this.options.liveSearchPlaceholder)+'"')+' role="combobox" aria-label="Search" aria-controls="'+this.selectId+'" aria-autocomplete="list"></div>'),this.multiple&&this.options.actionsBox&&(l='<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn '+H.BUTTONCLASS+'">'+this.options.selectAllText+'</button><button type="button" class="actions-btn bs-deselect-all btn '+H.BUTTONCLASS+'">'+this.options.deselectAllText+"</button></div></div>"),this.multiple&&this.options.doneButton&&(c='<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm '+H.BUTTONCLASS+'">'+this.options.doneButtonText+"</button></div></div>"),o='<div class="dropdown bootstrap-select'+e+n+'"><button type="button" tabindex="-1" class="'+this.options.styleBase+' dropdown-toggle" '+("static"===this.options.display?'data-display="static"':"")+'data-toggle="dropdown"'+s+' role="combobox" aria-owns="'+this.selectId+'" aria-haspopup="listbox" aria-expanded="false"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner"></div></div> </div>'+("4"===O.major?"":'<span class="bs-caret">'+this.options.template.caret+"</span>")+'</button><div class="'+H.MENU+" "+("4"===O.major?"":H.SHOW)+'">'+a+r+l+'<div class="inner '+H.SHOW+'" role="listbox" id="'+this.selectId+'" tabindex="-1" '+i+'><ul class="'+H.MENU+" inner "+("4"===O.major?H.SHOW:"")+'" role="presentation"></ul></div>'+c+"</div></div>",t(o)},setPositionData:function(){this.selectpicker.view.canHighlight=[],this.selectpicker.view.size=0,this.selectpicker.view.firstHighlightIndex=!1;for(var t=0;t<this.selectpicker.current.data.length;t++){var e=this.selectpicker.current.data[t],i=!0;"divider"===e.type?(i=!1,e.height=this.sizeInfo.dividerHeight):"optgroup-label"===e.type?(i=!1,e.height=this.sizeInfo.dropdownHeaderHeight):e.height=this.sizeInfo.liHeight,e.disabled&&(i=!1),this.selectpicker.view.canHighlight.push(i),i&&(this.selectpicker.view.size++,e.posinset=this.selectpicker.view.size,!1===this.selectpicker.view.firstHighlightIndex&&(this.selectpicker.view.firstHighlightIndex=t)),e.position=(0===t?0:this.selectpicker.current.data[t-1].position)+e.height}},isVirtual:function(){return!1!==this.options.virtualScroll&&this.selectpicker.main.elements.length>=this.options.virtualScroll||!0===this.options.virtualScroll},createView:function(e,i,n){var s,o,r=this,l=0,c=[];if(this.selectpicker.isSearching=e,this.selectpicker.current=e?this.selectpicker.search:this.selectpicker.main,this.setPositionData(),i)if(n)l=this.$menuInner[0].scrollTop;else if(!r.multiple){var h=r.$element[0],u=(h.options[h.selectedIndex]||{}).liIndex;if("number"==typeof u&&!1!==r.options.size){var d=r.selectpicker.main.data[u],p=d&&d.position;p&&(l=p-(r.sizeInfo.menuInnerHeight+r.sizeInfo.liHeight)/2)}}function f(t,i){var n,l,h,u,d,p,f,g,m=r.selectpicker.current.elements.length,v=[],b=!0,y=r.isVirtual();r.selectpicker.view.scrollTop=t,n=Math.ceil(r.sizeInfo.menuInnerHeight/r.sizeInfo.liHeight*1.5),l=Math.round(m/n)||1;for(var _=0;_<l;_++){var w=(_+1)*n;if(_===l-1&&(w=m),v[_]=[_*n+(_?1:0),w],!m)break;void 0===d&&t-1<=r.selectpicker.current.data[w-1].position-r.sizeInfo.menuInnerHeight&&(d=_)}if(void 0===d&&(d=0),p=[r.selectpicker.view.position0,r.selectpicker.view.position1],h=Math.max(0,d-1),u=Math.min(l-1,d+1),r.selectpicker.view.position0=!1===y?0:Math.max(0,v[h][0])||0,r.selectpicker.view.position1=!1===y?m:Math.min(m,v[u][1])||0,f=p[0]!==r.selectpicker.view.position0||p[1]!==r.selectpicker.view.position1,void 0!==r.activeIndex&&(o=r.selectpicker.main.elements[r.prevActiveIndex],c=r.selectpicker.main.elements[r.activeIndex],s=r.selectpicker.main.elements[r.selectedIndex],i&&(r.activeIndex!==r.selectedIndex&&r.defocusItem(c),r.activeIndex=void 0),r.activeIndex&&r.activeIndex!==r.selectedIndex&&r.defocusItem(s)),void 0!==r.prevActiveIndex&&r.prevActiveIndex!==r.activeIndex&&r.prevActiveIndex!==r.selectedIndex&&r.defocusItem(o),(i||f)&&(g=r.selectpicker.view.visibleElements?r.selectpicker.view.visibleElements.slice():[],r.selectpicker.view.visibleElements=!1===y?r.selectpicker.current.elements:r.selectpicker.current.elements.slice(r.selectpicker.view.position0,r.selectpicker.view.position1),r.setOptionStatus(),(e||!1===y&&i)&&(b=!function(t,e){return t.length===e.length&&t.every((function(t,i){return t===e[i]}))}(g,r.selectpicker.view.visibleElements)),(i||!0===y)&&b)){var x,C,S=r.$menuInner[0],D=document.createDocumentFragment(),T=S.firstChild.cloneNode(!1),k=r.selectpicker.view.visibleElements,I=[];S.replaceChild(T,S.firstChild),_=0;for(var A=k.length;_<A;_++){var E,P,N=k[_];r.options.sanitize&&(E=N.lastChild)&&(P=r.selectpicker.current.data[_+r.selectpicker.view.position0])&&P.content&&!P.sanitized&&(I.push(E),P.sanitized=!0),D.appendChild(N)}if(r.options.sanitize&&I.length&&a(I,r.options.whiteList,r.options.sanitizeFn),!0===y?(x=0===r.selectpicker.view.position0?0:r.selectpicker.current.data[r.selectpicker.view.position0-1].position,C=r.selectpicker.view.position1>m-1?0:r.selectpicker.current.data[m-1].position-r.selectpicker.current.data[r.selectpicker.view.position1-1].position,S.firstChild.style.marginTop=x+"px",S.firstChild.style.marginBottom=C+"px"):(S.firstChild.style.marginTop=0,S.firstChild.style.marginBottom=0),S.firstChild.appendChild(D),!0===y&&r.sizeInfo.hasScrollBar){var O=S.firstChild.offsetWidth;if(i&&O<r.sizeInfo.menuInnerInnerWidth&&r.sizeInfo.totalMenuWidth>r.sizeInfo.selectWidth)S.firstChild.style.minWidth=r.sizeInfo.menuInnerInnerWidth+"px";else if(O>r.sizeInfo.menuInnerInnerWidth){r.$menu[0].style.minWidth=0;var L=S.firstChild.offsetWidth;L>r.sizeInfo.menuInnerInnerWidth&&(r.sizeInfo.menuInnerInnerWidth=L,S.firstChild.style.minWidth=r.sizeInfo.menuInnerInnerWidth+"px"),r.$menu[0].style.minWidth=""}}}if(r.prevActiveIndex=r.activeIndex,r.options.liveSearch){if(e&&i){var M,H=0;r.selectpicker.view.canHighlight[H]||(H=1+r.selectpicker.view.canHighlight.slice(1).indexOf(!0)),M=r.selectpicker.view.visibleElements[H],r.defocusItem(r.selectpicker.view.currentActive),r.activeIndex=(r.selectpicker.current.data[H]||{}).index,r.focusItem(M)}}else r.$menuInner.trigger("focus")}f(l,!0),this.$menuInner.off("scroll.createView").on("scroll.createView",(function(t,e){r.noScroll||f(this.scrollTop,e),r.noScroll=!1})),t(window).off("resize"+M+"."+this.selectId+".createView").on("resize"+M+"."+this.selectId+".createView",(function(){r.$newElement.hasClass(H.SHOW)&&f(r.$menuInner[0].scrollTop)}))},focusItem:function(t,e,i){if(t){e=e||this.selectpicker.main.data[this.activeIndex];var n=t.firstChild;n&&(n.setAttribute("aria-setsize",this.selectpicker.view.size),n.setAttribute("aria-posinset",e.posinset),!0!==i&&(this.focusedParent.setAttribute("aria-activedescendant",n.id),t.classList.add("active"),n.classList.add("active")))}},defocusItem:function(t){t&&(t.classList.remove("active"),t.firstChild&&t.firstChild.classList.remove("active"))},setPlaceholder:function(){var t=this,e=!1;if(this.options.title&&!this.multiple){this.selectpicker.view.titleOption||(this.selectpicker.view.titleOption=document.createElement("option")),e=!0;var i=this.$element[0],n=!1,s=!this.selectpicker.view.titleOption.parentNode,o=i.selectedIndex,a=i.options[o],r=window.performance&&window.performance.getEntriesByType("navigation"),l=r&&r.length?"back_forward"!==r[0].type:2!==window.performance.navigation.type;s&&(this.selectpicker.view.titleOption.className="bs-title-option",this.selectpicker.view.titleOption.value="",n=!a||0===o&&!1===a.defaultSelected&&void 0===this.$element.data("selected")),!s&&0===this.selectpicker.view.titleOption.index||i.insertBefore(this.selectpicker.view.titleOption,i.firstChild),n&&l?i.selectedIndex=0:"complete"!==document.readyState&&window.addEventListener("pageshow",(function(){t.selectpicker.view.displayedValue!==i.value&&t.render()}))}return e},buildData:function(){var t=':not([hidden]):not([data-hidden="true"])',e=[],i=0,n=this.setPlaceholder()?1:0;this.options.hideDisabled&&(t+=":not(:disabled)");var s=this.$element[0].querySelectorAll("select > *"+t);function o(t){var i=e[e.length-1];i&&"divider"===i.type&&(i.optID||t.optID)||((t=t||{}).type="divider",e.push(t))}function a(t,i){if((i=i||{}).divider="true"===t.getAttribute("data-divider"),i.divider)o({optID:i.optID});else{var n=e.length,s=t.style.cssText,a=s?E(s):"",r=(t.className||"")+(i.optgroupClass||"");i.optID&&(r="opt "+r),i.optionClass=r.trim(),i.inlineStyle=a,i.text=t.textContent,i.content=t.getAttribute("data-content"),i.tokens=t.getAttribute("data-tokens"),i.subtext=t.getAttribute("data-subtext"),i.icon=t.getAttribute("data-icon"),t.liIndex=n,i.display=i.content||i.text,i.type="option",i.index=n,i.option=t,i.selected=!!t.selected,i.disabled=i.disabled||!!t.disabled,e.push(i)}}function r(s,r){var l=r[s],c=!(s-1<n)&&r[s-1],h=r[s+1],u=l.querySelectorAll("option"+t);if(u.length){var d,p,f={display:E(l.label),subtext:l.getAttribute("data-subtext"),icon:l.getAttribute("data-icon"),type:"optgroup-label",optgroupClass:" "+(l.className||"")};i++,c&&o({optID:i}),f.optID=i,e.push(f);for(var g=0,m=u.length;g<m;g++){var v=u[g];0===g&&(p=(d=e.length-1)+m),a(v,{headerIndex:d,lastIndex:p,optID:f.optID,optgroupClass:f.optgroupClass,disabled:l.disabled})}h&&o({optID:i})}}for(var l=s.length,c=n;c<l;c++){var h=s[c];"OPTGROUP"!==h.tagName?a(h,{}):r(c,s)}this.selectpicker.main.data=this.selectpicker.current.data=e},buildList:function(){var t=this,e=this.selectpicker.main.data,i=[],n=0;function s(e){var s,o=0;switch(e.type){case"divider":s=z.li(!1,H.DIVIDER,e.optID?e.optID+"div":void 0);break;case"option":(s=z.li(z.a(z.text.call(t,e),e.optionClass,e.inlineStyle),"",e.optID)).firstChild&&(s.firstChild.id=t.selectId+"-"+e.index);break;case"optgroup-label":s=z.li(z.label.call(t,e),"dropdown-header"+e.optgroupClass,e.optID)}e.element=s,i.push(s),e.display&&(o+=e.display.length),e.subtext&&(o+=e.subtext.length),e.icon&&(o+=1),n<o&&(n=o,t.selectpicker.view.widestOption=i[i.length-1])}!t.options.showTick&&!t.multiple||F.checkMark.parentNode||(F.checkMark.className=this.options.iconBase+" "+t.options.tickIcon+" check-mark",F.a.appendChild(F.checkMark));for(var o=e.length,a=0;a<o;a++)s(e[a]);this.selectpicker.main.elements=this.selectpicker.current.elements=i},findLis:function(){return this.$menuInner.find(".inner > li")},render:function(){var t,e=this,i=this.$element[0],n=this.setPlaceholder()&&0===i.selectedIndex,s=f(i,this.options.hideDisabled),o=s.length,r=this.$button[0],l=r.querySelector(".filter-option-inner-inner"),c=document.createTextNode(this.options.multipleSeparator),h=F.fragment.cloneNode(!1),u=!1;if(r.classList.toggle("bs-placeholder",e.multiple?!o:!g(i,s)),e.multiple||1!==s.length||(e.selectpicker.view.displayedValue=g(i,s)),"static"===this.options.selectedTextFormat)h=z.text.call(this,{text:this.options.title},!0);else if(!1===(this.multiple&&-1!==this.options.selectedTextFormat.indexOf("count")&&1<o&&(1<(t=this.options.selectedTextFormat.split(">")).length&&o>t[1]||1===t.length&&2<=o))){if(!n){for(var d=0;d<o&&d<50;d++){var p=s[d],m=this.selectpicker.main.data[p.liIndex],v={};this.multiple&&0<d&&h.appendChild(c.cloneNode(!1)),p.title?v.text=p.title:m&&(m.content&&e.options.showContent?(v.content=m.content.toString(),u=!0):(e.options.showIcon&&(v.icon=m.icon),e.options.showSubtext&&!e.multiple&&m.subtext&&(v.subtext=" "+m.subtext),v.text=p.textContent.trim())),h.appendChild(z.text.call(this,v,!0))}49<o&&h.appendChild(document.createTextNode("..."))}}else{var b=':not([hidden]):not([data-hidden="true"]):not([data-divider="true"])';this.options.hideDisabled&&(b+=":not(:disabled)");var y=this.$element[0].querySelectorAll("select > option"+b+", optgroup"+b+" option"+b).length,_="function"==typeof this.options.countSelectedText?this.options.countSelectedText(o,y):this.options.countSelectedText;h=z.text.call(this,{text:_.replace("{0}",o.toString()).replace("{1}",y.toString())},!0)}if(null==this.options.title&&(this.options.title=this.$element.attr("title")),h.childNodes.length||(h=z.text.call(this,{text:void 0!==this.options.title?this.options.title:this.options.noneSelectedText},!0)),r.title=h.textContent.replace(/<[^>]*>?/g,"").trim(),this.options.sanitize&&u&&a([h],e.options.whiteList,e.options.sanitizeFn),l.innerHTML="",l.appendChild(h),O.major<4&&this.$newElement[0].classList.contains("bs3-has-addon")){var w=r.querySelector(".filter-expand"),x=l.cloneNode(!0);x.className="filter-expand",w?r.replaceChild(x,w):r.appendChild(x)}this.$element.trigger("rendered"+M)},setStyle:function(t,e){var i,n=this.$button[0],s=this.$newElement[0],o=this.options.style.trim();this.$element.attr("class")&&this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,"")),O.major<4&&(s.classList.add("bs3"),s.parentNode.classList&&s.parentNode.classList.contains("input-group")&&(s.previousElementSibling||s.nextElementSibling)&&(s.previousElementSibling||s.nextElementSibling).classList.contains("input-group-addon")&&s.classList.add("bs3-has-addon")),i=t?t.trim():o,"add"==e?i&&n.classList.add.apply(n.classList,i.split(" ")):"remove"==e?i&&n.classList.remove.apply(n.classList,i.split(" ")):(o&&n.classList.remove.apply(n.classList,o.split(" ")),i&&n.classList.add.apply(n.classList,i.split(" ")))},liHeight:function(e){if(e||!1!==this.options.size&&!Object.keys(this.sizeInfo).length){var i,n=F.div.cloneNode(!1),s=F.div.cloneNode(!1),o=F.div.cloneNode(!1),a=document.createElement("ul"),r=F.li.cloneNode(!1),l=F.li.cloneNode(!1),c=F.a.cloneNode(!1),h=F.span.cloneNode(!1),u=this.options.header&&0<this.$menu.find("."+H.POPOVERHEADER).length?this.$menu.find("."+H.POPOVERHEADER)[0].cloneNode(!0):null,d=this.options.liveSearch?F.div.cloneNode(!1):null,p=this.options.actionsBox&&this.multiple&&0<this.$menu.find(".bs-actionsbox").length?this.$menu.find(".bs-actionsbox")[0].cloneNode(!0):null,f=this.options.doneButton&&this.multiple&&0<this.$menu.find(".bs-donebutton").length?this.$menu.find(".bs-donebutton")[0].cloneNode(!0):null,g=this.$element.find("option")[0];if(this.sizeInfo.selectWidth=this.$newElement[0].offsetWidth,h.className="text",c.className="dropdown-item "+(g?g.className:""),n.className=this.$menu[0].parentNode.className+" "+H.SHOW,n.style.width=0,"auto"===this.options.width&&(s.style.minWidth=0),s.className=H.MENU+" "+H.SHOW,o.className="inner "+H.SHOW,a.className=H.MENU+" inner "+("4"===O.major?H.SHOW:""),r.className=H.DIVIDER,l.className="dropdown-header",h.appendChild(document.createTextNode("​")),this.selectpicker.current.data.length)for(var m=0;m<this.selectpicker.current.data.length;m++){var v=this.selectpicker.current.data[m];if("option"===v.type){i=v.element;break}}else i=F.li.cloneNode(!1),c.appendChild(h),i.appendChild(c);if(l.appendChild(h.cloneNode(!0)),this.selectpicker.view.widestOption&&a.appendChild(this.selectpicker.view.widestOption.cloneNode(!0)),a.appendChild(i),a.appendChild(r),a.appendChild(l),u&&s.appendChild(u),d){var b=document.createElement("input");d.className="bs-searchbox",b.className="form-control",d.appendChild(b),s.appendChild(d)}p&&s.appendChild(p),o.appendChild(a),s.appendChild(o),f&&s.appendChild(f),n.appendChild(s),document.body.appendChild(n);var y,w=i.offsetHeight,x=l?l.offsetHeight:0,C=u?u.offsetHeight:0,S=d?d.offsetHeight:0,D=p?p.offsetHeight:0,T=f?f.offsetHeight:0,k=t(r).outerHeight(!0),I=!!window.getComputedStyle&&window.getComputedStyle(s),A=s.offsetWidth,E=I?null:t(s),P={vert:_(I?I.paddingTop:E.css("paddingTop"))+_(I?I.paddingBottom:E.css("paddingBottom"))+_(I?I.borderTopWidth:E.css("borderTopWidth"))+_(I?I.borderBottomWidth:E.css("borderBottomWidth")),horiz:_(I?I.paddingLeft:E.css("paddingLeft"))+_(I?I.paddingRight:E.css("paddingRight"))+_(I?I.borderLeftWidth:E.css("borderLeftWidth"))+_(I?I.borderRightWidth:E.css("borderRightWidth"))},N={vert:P.vert+_(I?I.marginTop:E.css("marginTop"))+_(I?I.marginBottom:E.css("marginBottom"))+2,horiz:P.horiz+_(I?I.marginLeft:E.css("marginLeft"))+_(I?I.marginRight:E.css("marginRight"))+2};o.style.overflowY="scroll",y=s.offsetWidth-A,document.body.removeChild(n),this.sizeInfo.liHeight=w,this.sizeInfo.dropdownHeaderHeight=x,this.sizeInfo.headerHeight=C,this.sizeInfo.searchHeight=S,this.sizeInfo.actionsHeight=D,this.sizeInfo.doneButtonHeight=T,this.sizeInfo.dividerHeight=k,this.sizeInfo.menuPadding=P,this.sizeInfo.menuExtras=N,this.sizeInfo.menuWidth=A,this.sizeInfo.menuInnerInnerWidth=A-P.horiz,this.sizeInfo.totalMenuWidth=this.sizeInfo.menuWidth,this.sizeInfo.scrollBarWidth=y,this.sizeInfo.selectHeight=this.$newElement[0].offsetHeight,this.setPositionData()}},getSelectPosition:function(){var e,i=t(window),n=this.$newElement.offset(),s=t(this.options.container);this.options.container&&s.length&&!s.is("body")?((e=s.offset()).top+=parseInt(s.css("borderTopWidth")),e.left+=parseInt(s.css("borderLeftWidth"))):e={top:0,left:0};var o=this.options.windowPadding;this.sizeInfo.selectOffsetTop=n.top-e.top-i.scrollTop(),this.sizeInfo.selectOffsetBot=i.height()-this.sizeInfo.selectOffsetTop-this.sizeInfo.selectHeight-e.top-o[2],this.sizeInfo.selectOffsetLeft=n.left-e.left-i.scrollLeft(),this.sizeInfo.selectOffsetRight=i.width()-this.sizeInfo.selectOffsetLeft-this.sizeInfo.selectWidth-e.left-o[1],this.sizeInfo.selectOffsetTop-=o[0],this.sizeInfo.selectOffsetLeft-=o[3]},setMenuSize:function(t){this.getSelectPosition();var e,i,n,s,o,a,r,l,c=this.sizeInfo.selectWidth,h=this.sizeInfo.liHeight,u=this.sizeInfo.headerHeight,d=this.sizeInfo.searchHeight,p=this.sizeInfo.actionsHeight,f=this.sizeInfo.doneButtonHeight,g=this.sizeInfo.dividerHeight,m=this.sizeInfo.menuPadding,v=0;if(this.options.dropupAuto&&(r=h*this.selectpicker.current.elements.length+m.vert,l=this.sizeInfo.selectOffsetTop-this.sizeInfo.selectOffsetBot>this.sizeInfo.menuExtras.vert&&r+this.sizeInfo.menuExtras.vert+50>this.sizeInfo.selectOffsetBot,!0===this.selectpicker.isSearching&&(l=this.selectpicker.dropup),this.$newElement.toggleClass(H.DROPUP,l),this.selectpicker.dropup=l),"auto"===this.options.size)s=3<this.selectpicker.current.elements.length?3*this.sizeInfo.liHeight+this.sizeInfo.menuExtras.vert-2:0,i=this.sizeInfo.selectOffsetBot-this.sizeInfo.menuExtras.vert,n=s+u+d+p+f,a=Math.max(s-m.vert,0),this.$newElement.hasClass(H.DROPUP)&&(i=this.sizeInfo.selectOffsetTop-this.sizeInfo.menuExtras.vert),e=(o=i)-u-d-p-f-m.vert;else if(this.options.size&&"auto"!=this.options.size&&this.selectpicker.current.elements.length>this.options.size){for(var b=0;b<this.options.size;b++)"divider"===this.selectpicker.current.data[b].type&&v++;e=(i=h*this.options.size+v*g+m.vert)-m.vert,o=i+u+d+p+f,n=a=""}this.$menu.css({"max-height":o+"px",overflow:"hidden","min-height":n+"px"}),this.$menuInner.css({"max-height":e+"px","overflow-y":"auto","min-height":a+"px"}),this.sizeInfo.menuInnerHeight=Math.max(e,1),this.selectpicker.current.data.length&&this.selectpicker.current.data[this.selectpicker.current.data.length-1].position>this.sizeInfo.menuInnerHeight&&(this.sizeInfo.hasScrollBar=!0,this.sizeInfo.totalMenuWidth=this.sizeInfo.menuWidth+this.sizeInfo.scrollBarWidth),"auto"===this.options.dropdownAlignRight&&this.$menu.toggleClass(H.MENURIGHT,this.sizeInfo.selectOffsetLeft>this.sizeInfo.selectOffsetRight&&this.sizeInfo.selectOffsetRight<this.sizeInfo.totalMenuWidth-c),this.dropdown&&this.dropdown._popper&&this.dropdown._popper.update()},setSize:function(e){if(this.liHeight(e),this.options.header&&this.$menu.css("padding-top",0),!1!==this.options.size){var i=this,n=t(window);this.setMenuSize(),this.options.liveSearch&&this.$searchbox.off("input.setMenuSize propertychange.setMenuSize").on("input.setMenuSize propertychange.setMenuSize",(function(){return i.setMenuSize()})),"auto"===this.options.size?n.off("resize"+M+"."+this.selectId+".setMenuSize scroll"+M+"."+this.selectId+".setMenuSize").on("resize"+M+"."+this.selectId+".setMenuSize scroll"+M+"."+this.selectId+".setMenuSize",(function(){return i.setMenuSize()})):this.options.size&&"auto"!=this.options.size&&this.selectpicker.current.elements.length>this.options.size&&n.off("resize"+M+"."+this.selectId+".setMenuSize scroll"+M+"."+this.selectId+".setMenuSize")}this.createView(!1,!0,e)},setWidth:function(){var t=this;"auto"===this.options.width?requestAnimationFrame((function(){t.$menu.css("min-width","0"),t.$element.on("loaded"+M,(function(){t.liHeight(),t.setMenuSize();var e=t.$newElement.clone().appendTo("body"),i=e.css("width","auto").children("button").outerWidth();e.remove(),t.sizeInfo.selectWidth=Math.max(t.sizeInfo.totalMenuWidth,i),t.$newElement.css("width",t.sizeInfo.selectWidth+"px")}))})):"fit"===this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width","").addClass("fit-width")):this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width",this.options.width)):(this.$menu.css("min-width",""),this.$newElement.css("width","")),this.$newElement.hasClass("fit-width")&&"fit"!==this.options.width&&this.$newElement[0].classList.remove("fit-width")},selectPosition:function(){function e(e){var r={},l=o.options.display||!!t.fn.dropdown.Constructor.Default&&t.fn.dropdown.Constructor.Default.display;o.$bsContainer.addClass(e.attr("class").replace(/form-control|fit-width/gi,"")).toggleClass(H.DROPUP,e.hasClass(H.DROPUP)),i=e.offset(),a.is("body")?n={top:0,left:0}:((n=a.offset()).top+=parseInt(a.css("borderTopWidth"))-a.scrollTop(),n.left+=parseInt(a.css("borderLeftWidth"))-a.scrollLeft()),s=e.hasClass(H.DROPUP)?0:e[0].offsetHeight,(O.major<4||"static"===l)&&(r.top=i.top-n.top+s,r.left=i.left-n.left),r.width=e[0].offsetWidth,o.$bsContainer.css(r)}this.$bsContainer=t('<div class="bs-container" />');var i,n,s,o=this,a=t(this.options.container);this.$button.on("click.bs.dropdown.data-api",(function(){o.isDisabled()||(e(o.$newElement),o.$bsContainer.appendTo(o.options.container).toggleClass(H.SHOW,!o.$button.hasClass(H.SHOW)).append(o.$menu))})),t(window).off("resize"+M+"."+this.selectId+" scroll"+M+"."+this.selectId).on("resize"+M+"."+this.selectId+" scroll"+M+"."+this.selectId,(function(){o.$newElement.hasClass(H.SHOW)&&e(o.$newElement)})),this.$element.on("hide"+M,(function(){o.$menu.data("height",o.$menu.height()),o.$bsContainer.detach()}))},setOptionStatus:function(t){var e=this;if(e.noScroll=!1,e.selectpicker.view.visibleElements&&e.selectpicker.view.visibleElements.length)for(var i=0;i<e.selectpicker.view.visibleElements.length;i++){var n=e.selectpicker.current.data[i+e.selectpicker.view.position0],s=n.option;s&&(!0!==t&&e.setDisabled(n.index,n.disabled),e.setSelected(n.index,s.selected))}},setSelected:function(t,e){var i,n,s=this.selectpicker.main.elements[t],o=this.selectpicker.main.data[t],a=void 0!==this.activeIndex,r=this.activeIndex===t||e&&!this.multiple&&!a;o.selected=e,n=s.firstChild,e&&(this.selectedIndex=t),s.classList.toggle("selected",e),r?(this.focusItem(s,o),this.selectpicker.view.currentActive=s,this.activeIndex=t):this.defocusItem(s),n&&(n.classList.toggle("selected",e),e?n.setAttribute("aria-selected",!0):this.multiple?n.setAttribute("aria-selected",!1):n.removeAttribute("aria-selected")),r||a||!e||void 0===this.prevActiveIndex||(i=this.selectpicker.main.elements[this.prevActiveIndex],this.defocusItem(i))},setDisabled:function(t,e){var i,n=this.selectpicker.main.elements[t];this.selectpicker.main.data[t].disabled=e,i=n.firstChild,n.classList.toggle(H.DISABLED,e),i&&("4"===O.major&&i.classList.toggle(H.DISABLED,e),e?(i.setAttribute("aria-disabled",e),i.setAttribute("tabindex",-1)):(i.removeAttribute("aria-disabled"),i.setAttribute("tabindex",0)))},isDisabled:function(){return this.$element[0].disabled},checkDisabled:function(){this.isDisabled()?(this.$newElement[0].classList.add(H.DISABLED),this.$button.addClass(H.DISABLED).attr("aria-disabled",!0)):this.$button[0].classList.contains(H.DISABLED)&&(this.$newElement[0].classList.remove(H.DISABLED),this.$button.removeClass(H.DISABLED).attr("aria-disabled",!1))},clickListener:function(){var e=this,i=t(document);function n(){e.options.liveSearch?e.$searchbox.trigger("focus"):e.$menuInner.trigger("focus")}function s(){e.dropdown&&e.dropdown._popper&&e.dropdown._popper.state.isCreated?n():requestAnimationFrame(s)}i.data("spaceSelect",!1),this.$button.on("keyup",(function(t){/(32)/.test(t.keyCode.toString(10))&&i.data("spaceSelect")&&(t.preventDefault(),i.data("spaceSelect",!1))})),this.$newElement.on("show.bs.dropdown",(function(){3<O.major&&!e.dropdown&&(e.dropdown=e.$button.data("bs.dropdown"),e.dropdown._menu=e.$menu[0])})),this.$button.on("click.bs.dropdown.data-api",(function(){e.$newElement.hasClass(H.SHOW)||e.setSize()})),this.$element.on("shown"+M,(function(){e.$menuInner[0].scrollTop!==e.selectpicker.view.scrollTop&&(e.$menuInner[0].scrollTop=e.selectpicker.view.scrollTop),3<O.major?requestAnimationFrame(s):n()})),this.$menuInner.on("mouseenter","li a",(function(t){var i=this.parentElement,n=e.isVirtual()?e.selectpicker.view.position0:0,s=Array.prototype.indexOf.call(i.parentElement.children,i),o=e.selectpicker.current.data[s+n];e.focusItem(i,o,!0)})),this.$menuInner.on("click","li a",(function(i,n){var s=t(this),o=e.$element[0],a=e.isVirtual()?e.selectpicker.view.position0:0,r=e.selectpicker.current.data[s.parent().index()+a],l=r.index,c=g(o),h=o.selectedIndex,u=o.options[h],d=!0;if(e.multiple&&1!==e.options.maxOptions&&i.stopPropagation(),i.preventDefault(),!e.isDisabled()&&!s.parent().hasClass(H.DISABLED)){var p=r.option,m=t(p),b=p.selected,y=m.parent("optgroup"),_=y.find("option"),w=e.options.maxOptions,x=y.data("maxOptions")||!1;if(l===e.activeIndex&&(n=!0),n||(e.prevActiveIndex=e.activeIndex,e.activeIndex=void 0),e.multiple){if(p.selected=!b,e.setSelected(l,!b),e.focusedParent.focus(),!1!==w||!1!==x){var C=w<f(o).length,S=x<y.find("option:selected").length;if(w&&C||x&&S)if(w&&1==w)o.selectedIndex=-1,p.selected=!0,e.setOptionStatus(!0);else if(x&&1==x){for(var D=0;D<_.length;D++){var T=_[D];T.selected=!1,e.setSelected(T.liIndex,!1)}p.selected=!0,e.setSelected(l,!0)}else{var k="string"==typeof e.options.maxOptionsText?[e.options.maxOptionsText,e.options.maxOptionsText]:e.options.maxOptionsText,I="function"==typeof k?k(w,x):k,A=I[0].replace("{n}",w),E=I[1].replace("{n}",x),P=t('<div class="notify"></div>');I[2]&&(A=A.replace("{var}",I[2][1<w?0:1]),E=E.replace("{var}",I[2][1<x?0:1])),p.selected=!1,e.$menu.append(P),w&&C&&(P.append(t("<div>"+A+"</div>")),d=!1,e.$element.trigger("maxReached"+M)),x&&S&&(P.append(t("<div>"+E+"</div>")),d=!1,e.$element.trigger("maxReachedGrp"+M)),setTimeout((function(){e.setSelected(l,!1)}),10),P[0].classList.add("fadeOut"),setTimeout((function(){P.remove()}),1050)}}}else u&&(u.selected=!1),p.selected=!0,e.setSelected(l,!0);!e.multiple||e.multiple&&1===e.options.maxOptions?e.$button.trigger("focus"):e.options.liveSearch&&e.$searchbox.trigger("focus"),d&&(!e.multiple&&h===o.selectedIndex||(v=[p.index,m.prop("selected"),c],e.$element.triggerNative("change")))}})),this.$menu.on("click","li."+H.DISABLED+" a, ."+H.POPOVERHEADER+", ."+H.POPOVERHEADER+" :not(.close)",(function(i){i.currentTarget==this&&(i.preventDefault(),i.stopPropagation(),e.options.liveSearch&&!t(i.target).hasClass("close")?e.$searchbox.trigger("focus"):e.$button.trigger("focus"))})),this.$menuInner.on("click",".divider, .dropdown-header",(function(t){t.preventDefault(),t.stopPropagation(),e.options.liveSearch?e.$searchbox.trigger("focus"):e.$button.trigger("focus")})),this.$menu.on("click","."+H.POPOVERHEADER+" .close",(function(){e.$button.trigger("click")})),this.$searchbox.on("click",(function(t){t.stopPropagation()})),this.$menu.on("click",".actions-btn",(function(i){e.options.liveSearch?e.$searchbox.trigger("focus"):e.$button.trigger("focus"),i.preventDefault(),i.stopPropagation(),t(this).hasClass("bs-select-all")?e.selectAll():e.deselectAll()})),this.$button.on("focus"+M,(function(t){var i=e.$element[0].getAttribute("tabindex");void 0!==i&&t.originalEvent&&t.originalEvent.isTrusted&&(this.setAttribute("tabindex",i),e.$element[0].setAttribute("tabindex",-1),e.selectpicker.view.tabindex=i)})).on("blur"+M,(function(t){void 0!==e.selectpicker.view.tabindex&&t.originalEvent&&t.originalEvent.isTrusted&&(e.$element[0].setAttribute("tabindex",e.selectpicker.view.tabindex),this.setAttribute("tabindex",-1),e.selectpicker.view.tabindex=void 0)})),this.$element.on("change"+M,(function(){e.render(),e.$element.trigger("changed"+M,v),v=null})).on("focus"+M,(function(){e.options.mobile||e.$button[0].focus()}))},liveSearchListener:function(){var t=this;this.$button.on("click.bs.dropdown.data-api",(function(){t.$searchbox.val()&&(t.$searchbox.val(""),t.selectpicker.search.previousValue=void 0)})),this.$searchbox.on("click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api",(function(t){t.stopPropagation()})),this.$searchbox.on("input propertychange",(function(){var e=t.$searchbox[0].value;if(t.selectpicker.search.elements=[],t.selectpicker.search.data=[],e){var i=[],n=e.toUpperCase(),s={},o=[],a=t._searchStyle(),r=t.options.liveSearchNormalize;r&&(n=D(n));for(var l=0;l<t.selectpicker.main.data.length;l++){var c=t.selectpicker.main.data[l];s[l]||(s[l]=y(c,n,a,r)),s[l]&&void 0!==c.headerIndex&&-1===o.indexOf(c.headerIndex)&&(0<c.headerIndex&&(s[c.headerIndex-1]=!0,o.push(c.headerIndex-1)),s[c.headerIndex]=!0,o.push(c.headerIndex),s[c.lastIndex+1]=!0),s[l]&&"optgroup-label"!==c.type&&o.push(l)}l=0;for(var h=o.length;l<h;l++){var u=o[l],d=o[l-1],p=(c=t.selectpicker.main.data[u],t.selectpicker.main.data[d]);("divider"!==c.type||"divider"===c.type&&p&&"divider"!==p.type&&h-1!==l)&&(t.selectpicker.search.data.push(c),i.push(t.selectpicker.main.elements[u]))}t.activeIndex=void 0,t.noScroll=!0,t.$menuInner.scrollTop(0),t.selectpicker.search.elements=i,t.createView(!0),function(t,e){t.length||(F.noResults.innerHTML=this.options.noneResultsText.replace("{0}",'"'+E(e)+'"'),this.$menuInner[0].firstChild.appendChild(F.noResults))}.call(t,i,e)}else t.selectpicker.search.previousValue&&(t.$menuInner.scrollTop(0),t.createView(!1));t.selectpicker.search.previousValue=e}))},_searchStyle:function(){return this.options.liveSearchStyle||"contains"},val:function(t){var e=this.$element[0];if(void 0===t)return this.$element.val();var i=g(e);if(v=[null,null,i],this.$element.val(t).trigger("changed"+M,v),this.$newElement.hasClass(H.SHOW))if(this.multiple)this.setOptionStatus(!0);else{var n=(e.options[e.selectedIndex]||{}).liIndex;"number"==typeof n&&(this.setSelected(this.selectedIndex,!1),this.setSelected(n,!0))}return this.render(),v=null,this.$element},changeAll:function(t){if(this.multiple){void 0===t&&(t=!0);var e=this.$element[0],i=0,n=0,s=g(e);e.classList.add("bs-select-hidden");for(var o=0,a=this.selectpicker.current.data,r=a.length;o<r;o++){var l=a[o],c=l.option;c&&!l.disabled&&"divider"!==l.type&&(l.selected&&i++,!0===(c.selected=t)&&n++)}e.classList.remove("bs-select-hidden"),i!==n&&(this.setOptionStatus(),v=[null,null,s],this.$element.triggerNative("change"))}},selectAll:function(){return this.changeAll(!0)},deselectAll:function(){return this.changeAll(!1)},toggle:function(t){(t=t||window.event)&&t.stopPropagation(),this.$button.trigger("click.bs.dropdown.data-api")},keydown:function(e){var i,n,s,o,a,r=t(this),l=r.hasClass("dropdown-toggle"),c=(l?r.closest(".dropdown"):r.closest(R.MENU)).data("this"),h=c.findLis(),u=!1,d=9===e.which&&!l&&!c.options.selectOnTab,p=W.test(e.which)||d,f=c.$menuInner[0].scrollTop,g=!0===c.isVirtual()?c.selectpicker.view.position0:0;if(!(112<=e.which&&e.which<=123))if(!(n=c.$newElement.hasClass(H.SHOW))&&(p||48<=e.which&&e.which<=57||96<=e.which&&e.which<=105||65<=e.which&&e.which<=90)&&(c.$button.trigger("click.bs.dropdown.data-api"),c.options.liveSearch))c.$searchbox.trigger("focus");else{if(27===e.which&&n&&(e.preventDefault(),c.$button.trigger("click.bs.dropdown.data-api").trigger("focus")),p){if(!h.length)return;-1!==(i=(s=c.selectpicker.main.elements[c.activeIndex])?Array.prototype.indexOf.call(s.parentElement.children,s):-1)&&c.defocusItem(s),38===e.which?(-1!==i&&i--,i+g<0&&(i+=h.length),c.selectpicker.view.canHighlight[i+g]||-1==(i=c.selectpicker.view.canHighlight.slice(0,i+g).lastIndexOf(!0)-g)&&(i=h.length-1)):40!==e.which&&!d||(++i+g>=c.selectpicker.view.canHighlight.length&&(i=c.selectpicker.view.firstHighlightIndex),c.selectpicker.view.canHighlight[i+g]||(i=i+1+c.selectpicker.view.canHighlight.slice(i+g+1).indexOf(!0))),e.preventDefault();var m=g+i;38===e.which?0===g&&i===h.length-1?(c.$menuInner[0].scrollTop=c.$menuInner[0].scrollHeight,m=c.selectpicker.current.elements.length-1):u=(a=(o=c.selectpicker.current.data[m]).position-o.height)<f:40!==e.which&&!d||(i===c.selectpicker.view.firstHighlightIndex?(c.$menuInner[0].scrollTop=0,m=c.selectpicker.view.firstHighlightIndex):u=f<(a=(o=c.selectpicker.current.data[m]).position-c.sizeInfo.menuInnerHeight)),s=c.selectpicker.current.elements[m],c.activeIndex=c.selectpicker.current.data[m].index,c.focusItem(s),c.selectpicker.view.currentActive=s,u&&(c.$menuInner[0].scrollTop=a),c.options.liveSearch?c.$searchbox.trigger("focus"):r.trigger("focus")}else if(!r.is("input")&&!j.test(e.which)||32===e.which&&c.selectpicker.keydown.keyHistory){var v,b,_=[];e.preventDefault(),c.selectpicker.keydown.keyHistory+=N[e.which],c.selectpicker.keydown.resetKeyHistory.cancel&&clearTimeout(c.selectpicker.keydown.resetKeyHistory.cancel),c.selectpicker.keydown.resetKeyHistory.cancel=c.selectpicker.keydown.resetKeyHistory.start(),b=c.selectpicker.keydown.keyHistory,/^(.)\1+$/.test(b)&&(b=b.charAt(0));for(var w=0;w<c.selectpicker.current.data.length;w++){var x=c.selectpicker.current.data[w];y(x,b,"startsWith",!0)&&c.selectpicker.view.canHighlight[w]&&_.push(x.index)}if(_.length){var C=0;h.removeClass("active").find("a").removeClass("active"),1===b.length&&(-1===(C=_.indexOf(c.activeIndex))||C===_.length-1?C=0:C++),v=_[C],u=0<f-(o=c.selectpicker.main.data[v]).position?(a=o.position-o.height,!0):(a=o.position-c.sizeInfo.menuInnerHeight,o.position>f+c.sizeInfo.menuInnerHeight),s=c.selectpicker.main.elements[v],c.activeIndex=_[C],c.focusItem(s),s&&s.firstChild.focus(),u&&(c.$menuInner[0].scrollTop=a),r.trigger("focus")}}n&&(32===e.which&&!c.selectpicker.keydown.keyHistory||13===e.which||9===e.which&&c.options.selectOnTab)&&(32!==e.which&&e.preventDefault(),c.options.liveSearch&&32===e.which||(c.$menuInner.find(".active a").trigger("click",!0),r.trigger("focus"),c.options.liveSearch||(e.preventDefault(),t(document).data("spaceSelect",!0))))}},mobile:function(){this.options.mobile=!0,this.$element[0].classList.add("mobile-device")},refresh:function(){var e=t.extend({},this.options,this.$element.data());this.options=e,this.checkDisabled(),this.buildData(),this.setStyle(),this.render(),this.buildList(),this.setWidth(),this.setSize(!0),this.$element.trigger("refreshed"+M)},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},remove:function(){this.$newElement.remove(),this.$element.remove()},destroy:function(){this.$newElement.before(this.$element).remove(),this.$bsContainer?this.$bsContainer.remove():this.$menu.remove(),this.selectpicker.view.titleOption&&this.selectpicker.view.titleOption.parentNode&&this.selectpicker.view.titleOption.parentNode.removeChild(this.selectpicker.view.titleOption),this.$element.off(M).removeData("selectpicker").removeClass("bs-select-hidden selectpicker"),t(window).off(M+"."+this.selectId)}};var U=t.fn.selectpicker;function q(){if(t.fn.dropdown)return(t.fn.dropdown.Constructor._dataApiKeydownHandler||t.fn.dropdown.Constructor.prototype.keydown).apply(this,arguments)}t.fn.selectpicker=B,t.fn.selectpicker.Constructor=$,t.fn.selectpicker.noConflict=function(){return t.fn.selectpicker=U,this},t(document).off("keydown.bs.dropdown.data-api").on("keydown.bs.dropdown.data-api",':not(.bootstrap-select) > [data-toggle="dropdown"]',q).on("keydown.bs.dropdown.data-api",":not(.bootstrap-select) > .dropdown-menu",q).on("keydown"+M,'.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input',$.prototype.keydown).on("focusin.modal",'.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input',(function(t){t.stopPropagation()})),t(window).on("load"+M+".data-api",(function(){t(".selectpicker").each((function(){var e=t(this);B.call(e,e.data())}))}))}(t)}(t)}.apply(e,n))||(t.exports=s)},aBAq:function(t,e,i){var n,s;!function(o){"use strict";n=[i("EVdn")],void 0===(s=function(t){return function(t,e,i,n){var s,o,a,r,l=function(e){this.$=function(t,e){return this.api(!0).$(t,e)},this._=function(t,e){return this.api(!0).rows(t,e).data()},this.api=function(t){return new o(t?ae(this[s.iApiIndex]):this)},this.fnAddData=function(e,i){var s=this.api(!0),o=t.isArray(e)&&(t.isArray(e[0])||t.isPlainObject(e[0]))?s.rows.add(e):s.row.add(e);return(i===n||i)&&s.draw(),o.flatten().toArray()},this.fnAdjustColumnSizing=function(t){var e=this.api(!0).columns.adjust(),i=e.settings()[0],s=i.oScroll;t===n||t?e.draw(!1):""===s.sX&&""===s.sY||$t(i)},this.fnClearTable=function(t){var e=this.api(!0).clear();(t===n||t)&&e.draw()},this.fnClose=function(t){this.api(!0).row(t).child.hide()},this.fnDeleteRow=function(t,e,i){var s=this.api(!0),o=s.rows(t),a=o.settings()[0],r=a.aoData[o[0][0]];return o.remove(),e&&e.call(this,a,r),(i===n||i)&&s.draw(),r},this.fnDestroy=function(t){this.api(!0).destroy(t)},this.fnDraw=function(t){this.api(!0).draw(t)},this.fnFilter=function(t,e,i,s,o,a){var r=this.api(!0);null===e||e===n?r.search(t,i,s,a):r.column(e).search(t,i,s,a),r.draw()},this.fnGetData=function(t,e){var i=this.api(!0);if(t!==n){var s=t.nodeName?t.nodeName.toLowerCase():"";return e!==n||"td"==s||"th"==s?i.cell(t,e).data():i.row(t).data()||null}return i.data().toArray()},this.fnGetNodes=function(t){var e=this.api(!0);return t!==n?e.row(t).node():e.rows().nodes().flatten().toArray()},this.fnGetPosition=function(t){var e=this.api(!0),i=t.nodeName.toUpperCase();if("TR"==i)return e.row(t).index();if("TD"==i||"TH"==i){var n=e.cell(t).index();return[n.row,n.columnVisible,n.column]}return null},this.fnIsOpen=function(t){return this.api(!0).row(t).child.isShown()},this.fnOpen=function(t,e,i){return this.api(!0).row(t).child(e,i).show().child()[0]},this.fnPageChange=function(t,e){var i=this.api(!0).page(t);(e===n||e)&&i.draw(!1)},this.fnSetColumnVis=function(t,e,i){var s=this.api(!0).column(t).visible(e);(i===n||i)&&s.columns.adjust().draw()},this.fnSettings=function(){return ae(this[s.iApiIndex])},this.fnSort=function(t){this.api(!0).order(t).draw()},this.fnSortListener=function(t,e,i){this.api(!0).order.listener(t,e,i)},this.fnUpdate=function(t,e,i,s,o){var a=this.api(!0);return i===n||null===i?a.row(e).data(t):a.cell(e,i).data(t),(o===n||o)&&a.columns.adjust(),(s===n||s)&&a.draw(),0},this.fnVersionCheck=s.fnVersionCheck;var i=this,a=e===n,r=this.length;for(var c in a&&(e={}),this.oApi=this.internal=s.internal,l.ext.internal)c&&(this[c]=Oe(c));return this.each((function(){var s,o=r>1?ce({},e,!0):e,c=0,h=this.getAttribute("id"),u=!1,d=l.defaults,p=t(this);if("table"==this.nodeName.toLowerCase()){E(d),P(d.column),k(d,d,!0),k(d.column,d.column,!0),k(d,t.extend(o,p.data()));var f=l.settings;for(c=0,s=f.length;c<s;c++){var g=f[c];if(g.nTable==this||g.nTHead&&g.nTHead.parentNode==this||g.nTFoot&&g.nTFoot.parentNode==this){var m=o.bRetrieve!==n?o.bRetrieve:d.bRetrieve,v=o.bDestroy!==n?o.bDestroy:d.bDestroy;if(a||m)return g.oInstance;if(v){g.oInstance.fnDestroy();break}return void re(g,0,"Cannot reinitialise DataTable",3)}if(g.sTableId==this.id){f.splice(c,1);break}}null!==h&&""!==h||(h="DataTables_Table_"+l.ext._unique++,this.id=h);var b=t.extend(!0,{},l.models.oSettings,{sDestroyWidth:p[0].style.width,sInstance:h,sTableId:h});b.nTable=this,b.oApi=i.internal,b.oInit=o,f.push(b),b.oInstance=1===i.length?i:p.dataTable(),E(o),I(o.oLanguage),o.aLengthMenu&&!o.iDisplayLength&&(o.iDisplayLength=t.isArray(o.aLengthMenu[0])?o.aLengthMenu[0][0]:o.aLengthMenu[0]),o=ce(t.extend(!0,{},d),o),le(b.oFeatures,o,["bPaginate","bLengthChange","bFilter","bSort","bSortMulti","bInfo","bProcessing","bAutoWidth","bSortClasses","bServerSide","bDeferRender"]),le(b,o,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"]]),le(b.oScroll,o,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]),le(b.oLanguage,o,"fnInfoCallback"),ue(b,"aoDrawCallback",o.fnDrawCallback,"user"),ue(b,"aoServerParams",o.fnServerParams,"user"),ue(b,"aoStateSaveParams",o.fnStateSaveParams,"user"),ue(b,"aoStateLoadParams",o.fnStateLoadParams,"user"),ue(b,"aoStateLoaded",o.fnStateLoaded,"user"),ue(b,"aoRowCallback",o.fnRowCallback,"user"),ue(b,"aoRowCreatedCallback",o.fnCreatedRow,"user"),ue(b,"aoHeaderCallback",o.fnHeaderCallback,"user"),ue(b,"aoFooterCallback",o.fnFooterCallback,"user"),ue(b,"aoInitComplete",o.fnInitComplete,"user"),ue(b,"aoPreDrawCallback",o.fnPreDrawCallback,"user"),b.rowIdFn=J(o.rowId),N(b);var y=b.oClasses;if(t.extend(y,l.ext.classes,o.oClasses),p.addClass(y.sTable),b.iInitDisplayStart===n&&(b.iInitDisplayStart=o.iDisplayStart,b._iDisplayStart=o.iDisplayStart),null!==o.iDeferLoading){b.bDeferLoading=!0;var _=t.isArray(o.iDeferLoading);b._iRecordsDisplay=_?o.iDeferLoading[0]:o.iDeferLoading,b._iRecordsTotal=_?o.iDeferLoading[1]:o.iDeferLoading}var w=b.oLanguage;t.extend(!0,w,o.oLanguage),w.sUrl&&(t.ajax({dataType:"json",url:w.sUrl,success:function(e){I(e),k(d.oLanguage,e),t.extend(!0,w,e),Ot(b)},error:function(){Ot(b)}}),u=!0),null===o.asStripeClasses&&(b.asStripeClasses=[y.sStripeOdd,y.sStripeEven]);var x=b.asStripeClasses,C=p.children("tbody").find("tr").eq(0);-1!==t.inArray(!0,t.map(x,(function(t,e){return C.hasClass(t)})))&&(t("tbody tr",this).removeClass(x.join(" ")),b.asDestroyStripes=x.slice());var S,D=[],T=this.getElementsByTagName("thead");if(0!==T.length&&(ut(b.aoHeader,T[0]),D=dt(b)),null===o.aoColumns)for(S=[],c=0,s=D.length;c<s;c++)S.push(null);else S=o.aoColumns;for(c=0,s=S.length;c<s;c++)L(b,D?D[c]:null);if($(b,o.aoColumnDefs,S,(function(t,e){M(b,t,e)})),C.length){var A=function(t,e){return null!==t.getAttribute("data-"+e)?e:null};t(C[0]).children("th, td").each((function(t,e){var i=b.aoColumns[t];if(i.mData===t){var s=A(e,"sort")||A(e,"order"),o=A(e,"filter")||A(e,"search");null===s&&null===o||(i.mData={_:t+".display",sort:null!==s?t+".@data-"+s:n,type:null!==s?t+".@data-"+s:n,filter:null!==o?t+".@data-"+o:n},M(b,t))}}))}var O=b.oFeatures,H=function(){if(o.aaSorting===n){var e=b.aaSorting;for(c=0,s=e.length;c<s;c++)e[c][1]=b.aoColumns[c].asSorting[0]}ie(b),O.bSort&&ue(b,"aoDrawCallback",(function(){if(b.bSorted){var e=Jt(b),i={};t.each(e,(function(t,e){i[e.src]=e.dir})),de(b,null,"order",[b,e,i]),Zt(b)}})),ue(b,"aoDrawCallback",(function(){(b.bSorted||"ssp"===ge(b)||O.bDeferRender)&&ie(b)}),"sc");var i=p.children("caption").each((function(){this._captionSide=t(this).css("caption-side")})),a=p.children("thead");0===a.length&&(a=t("<thead/>").appendTo(p)),b.nTHead=a[0];var r=p.children("tbody");0===r.length&&(r=t("<tbody/>").appendTo(p)),b.nTBody=r[0];var l=p.children("tfoot");if(0===l.length&&i.length>0&&(""!==b.oScroll.sX||""!==b.oScroll.sY)&&(l=t("<tfoot/>").appendTo(p)),0===l.length||0===l.children().length?p.addClass(y.sNoFooter):l.length>0&&(b.nTFoot=l[0],ut(b.aoFooter,b.nTFoot)),o.aaData)for(c=0;c<o.aaData.length;c++)B(b,o.aaData[c]);else(b.bDeferLoading||"dom"==ge(b))&&U(b,t(b.nTBody).children("tr"));b.aiDisplay=b.aiDisplayMaster.slice(),b.bInitialised=!0,!1===u&&Ot(b)};o.bStateSave?(O.bStateSave=!0,ue(b,"aoDrawCallback",se,"state_save"),oe(b,o,H)):H()}else re(null,0,"Non-table node initialisation ("+this.nodeName+")",2)})),i=null,this},c={},h=/[\r\n]/g,u=/<.*?>/g,d=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,p=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^","-"].join("|\\")+")","g"),f=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,g=function(t){return!t||!0===t||"-"===t},m=function(t){var e=parseInt(t,10);return!isNaN(e)&&isFinite(t)?e:null},v=function(t,e){return c[e]||(c[e]=new RegExp(St(e),"g")),"string"==typeof t&&"."!==e?t.replace(/\./g,"").replace(c[e],"."):t},b=function(t,e,i){var n="string"==typeof t;return!!g(t)||(e&&n&&(t=v(t,e)),i&&n&&(t=t.replace(f,"")),!isNaN(parseFloat(t))&&isFinite(t))},y=function(t,e,i){return!!g(t)||(function(t){return g(t)||"string"==typeof t}(t)&&!!b(S(t),e,i)||null)},_=function(t,e,i){var s=[],o=0,a=t.length;if(i!==n)for(;o<a;o++)t[o]&&t[o][e]&&s.push(t[o][e][i]);else for(;o<a;o++)t[o]&&s.push(t[o][e]);return s},w=function(t,e,i,s){var o=[],a=0,r=e.length;if(s!==n)for(;a<r;a++)t[e[a]][i]&&o.push(t[e[a]][i][s]);else for(;a<r;a++)o.push(t[e[a]][i]);return o},x=function(t,e){var i,s=[];e===n?(e=0,i=t):(i=e,e=t);for(var o=e;o<i;o++)s.push(o);return s},C=function(t){for(var e=[],i=0,n=t.length;i<n;i++)t[i]&&e.push(t[i]);return e},S=function(t){return t.replace(u,"")},D=function(t){if(function(t){if(t.length<2)return!0;for(var e=t.slice().sort(),i=e[0],n=1,s=e.length;n<s;n++){if(e[n]===i)return!1;i=e[n]}return!0}(t))return t.slice();var e,i,n,s=[],o=t.length,a=0;t:for(i=0;i<o;i++){for(e=t[i],n=0;n<a;n++)if(s[n]===e)continue t;s.push(e),a++}return s};function T(e){var i,n,s={};t.each(e,(function(t,o){(i=t.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(i[1]+" ")&&(n=t.replace(i[0],i[2].toLowerCase()),s[n]=t,"o"===i[1]&&T(e[t]))})),e._hungarianMap=s}function k(e,i,s){var o;e._hungarianMap||T(e),t.each(i,(function(a,r){(o=e._hungarianMap[a])===n||!s&&i[o]!==n||("o"===o.charAt(0)?(i[o]||(i[o]={}),t.extend(!0,i[o],i[a]),k(e[o],i[o],s)):i[o]=i[a])}))}function I(t){var e=l.defaults.oLanguage,i=e.sDecimal;if(i&&Pe(i),t){var n=t.sZeroRecords;!t.sEmptyTable&&n&&"No data available in table"===e.sEmptyTable&&le(t,t,"sZeroRecords","sEmptyTable"),!t.sLoadingRecords&&n&&"Loading..."===e.sLoadingRecords&&le(t,t,"sZeroRecords","sLoadingRecords"),t.sInfoThousands&&(t.sThousands=t.sInfoThousands);var s=t.sDecimal;s&&i!==s&&Pe(s)}}l.util={throttle:function(t,e){var i,s,o=e!==n?e:200;return function(){var e=this,a=+new Date,r=arguments;i&&a<i+o?(clearTimeout(s),s=setTimeout((function(){i=n,t.apply(e,r)}),o)):(i=a,t.apply(e,r))}},escapeRegex:function(t){return t.replace(p,"\\$1")}};var A=function(t,e,i){t[e]!==n&&(t[i]=t[e])};function E(t){A(t,"ordering","bSort"),A(t,"orderMulti","bSortMulti"),A(t,"orderClasses","bSortClasses"),A(t,"orderCellsTop","bSortCellsTop"),A(t,"order","aaSorting"),A(t,"orderFixed","aaSortingFixed"),A(t,"paging","bPaginate"),A(t,"pagingType","sPaginationType"),A(t,"pageLength","iDisplayLength"),A(t,"searching","bFilter"),"boolean"==typeof t.sScrollX&&(t.sScrollX=t.sScrollX?"100%":""),"boolean"==typeof t.scrollX&&(t.scrollX=t.scrollX?"100%":"");var e=t.aoSearchCols;if(e)for(var i=0,n=e.length;i<n;i++)e[i]&&k(l.models.oSearch,e[i])}function P(e){A(e,"orderable","bSortable"),A(e,"orderData","aDataSort"),A(e,"orderSequence","asSorting"),A(e,"orderDataType","sortDataType");var i=e.aDataSort;"number"!=typeof i||t.isArray(i)||(e.aDataSort=[i])}function N(i){if(!l.__browser){var n={};l.__browser=n;var s=t("<div/>").css({position:"fixed",top:0,left:-1*t(e).scrollLeft(),height:1,width:1,overflow:"hidden"}).append(t("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(t("<div/>").css({width:"100%",height:10}))).appendTo("body"),o=s.children(),a=o.children();n.barWidth=o[0].offsetWidth-o[0].clientWidth,n.bScrollOversize=100===a[0].offsetWidth&&100!==o[0].clientWidth,n.bScrollbarLeft=1!==Math.round(a.offset().left),n.bBounding=!!s[0].getBoundingClientRect().width,s.remove()}t.extend(i.oBrowser,l.__browser),i.oScroll.iBarWidth=l.__browser.barWidth}function O(t,e,i,s,o,a){var r,l=s,c=!1;for(i!==n&&(r=i,c=!0);l!==o;)t.hasOwnProperty(l)&&(r=c?e(r,t[l],l,t):t[l],c=!0,l+=a);return r}function L(e,n){var s=l.defaults.column,o=e.aoColumns.length,a=t.extend({},l.models.oColumn,s,{nTh:n||i.createElement("th"),sTitle:s.sTitle?s.sTitle:n?n.innerHTML:"",aDataSort:s.aDataSort?s.aDataSort:[o],mData:s.mData?s.mData:o,idx:o});e.aoColumns.push(a);var r=e.aoPreSearchCols;r[o]=t.extend({},l.models.oSearch,r[o]),M(e,o,t(n).data())}function M(e,i,s){var o=e.aoColumns[i],a=e.oClasses,r=t(o.nTh);if(!o.sWidthOrig){o.sWidthOrig=r.attr("width")||null;var c=(r.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);c&&(o.sWidthOrig=c[1])}s!==n&&null!==s&&(P(s),k(l.defaults.column,s),s.mDataProp===n||s.mData||(s.mData=s.mDataProp),s.sType&&(o._sManualType=s.sType),s.className&&!s.sClass&&(s.sClass=s.className),s.sClass&&r.addClass(s.sClass),t.extend(o,s),le(o,s,"sWidth","sWidthOrig"),s.iDataSort!==n&&(o.aDataSort=[s.iDataSort]),le(o,s,"aDataSort"));var h=o.mData,u=J(h),d=o.mRender?J(o.mRender):null,p=function(t){return"string"==typeof t&&-1!==t.indexOf("@")};o._bAttrSrc=t.isPlainObject(h)&&(p(h.sort)||p(h.type)||p(h.filter)),o._setter=null,o.fnGetData=function(t,e,i){var s=u(t,e,n,i);return d&&e?d(s,e,t,i):s},o.fnSetData=function(t,e,i){return Q(h)(t,e,i)},"number"!=typeof h&&(e._rowReadObject=!0),e.oFeatures.bSort||(o.bSortable=!1,r.addClass(a.sSortableNone));var f=-1!==t.inArray("asc",o.asSorting),g=-1!==t.inArray("desc",o.asSorting);o.bSortable&&(f||g)?f&&!g?(o.sSortingClass=a.sSortableAsc,o.sSortingClassJUI=a.sSortJUIAscAllowed):!f&&g?(o.sSortingClass=a.sSortableDesc,o.sSortingClassJUI=a.sSortJUIDescAllowed):(o.sSortingClass=a.sSortable,o.sSortingClassJUI=a.sSortJUI):(o.sSortingClass=a.sSortableNone,o.sSortingClassJUI="")}function H(t){if(!1!==t.oFeatures.bAutoWidth){var e=t.aoColumns;qt(t);for(var i=0,n=e.length;i<n;i++)e[i].nTh.style.width=e[i].sWidth}var s=t.oScroll;""===s.sY&&""===s.sX||$t(t),de(t,null,"column-sizing",[t])}function R(t,e){var i=j(t,"bVisible");return"number"==typeof i[e]?i[e]:null}function F(e,i){var n=j(e,"bVisible"),s=t.inArray(i,n);return-1!==s?s:null}function W(e){var i=0;return t.each(e.aoColumns,(function(e,n){n.bVisible&&"none"!==t(n.nTh).css("display")&&i++})),i}function j(e,i){var n=[];return t.map(e.aoColumns,(function(t,e){t[i]&&n.push(e)})),n}function z(t){var e,i,s,o,a,r,c,h,u,d=t.aoColumns,p=t.aoData,f=l.ext.type.detect;for(e=0,i=d.length;e<i;e++)if(u=[],!(c=d[e]).sType&&c._sManualType)c.sType=c._sManualType;else if(!c.sType){for(s=0,o=f.length;s<o;s++){for(a=0,r=p.length;a<r&&(u[a]===n&&(u[a]=V(t,a,e,"type")),(h=f[s](u[a],t))||s===f.length-1)&&"html"!==h;a++);if(h){c.sType=h;break}}c.sType||(c.sType="string")}}function $(e,i,s,o){var a,r,l,c,h,u,d,p=e.aoColumns;if(i)for(a=i.length-1;a>=0;a--){var f=(d=i[a]).targets!==n?d.targets:d.aTargets;for(t.isArray(f)||(f=[f]),l=0,c=f.length;l<c;l++)if("number"==typeof f[l]&&f[l]>=0){for(;p.length<=f[l];)L(e);o(f[l],d)}else if("number"==typeof f[l]&&f[l]<0)o(p.length+f[l],d);else if("string"==typeof f[l])for(h=0,u=p.length;h<u;h++)("_all"==f[l]||t(p[h].nTh).hasClass(f[l]))&&o(h,d)}if(s)for(a=0,r=s.length;a<r;a++)o(a,s[a])}function B(e,i,s,o){var a=e.aoData.length,r=t.extend(!0,{},l.models.oRow,{src:s?"dom":"data",idx:a});r._aData=i,e.aoData.push(r);for(var c=e.aoColumns,h=0,u=c.length;h<u;h++)c[h].sType=null;e.aiDisplayMaster.push(a);var d=e.rowIdFn(i);return d!==n&&(e.aIds[d]=r),!s&&e.oFeatures.bDeferRender||st(e,a,s,o),a}function U(e,i){var n;return i instanceof t||(i=t(i)),i.map((function(t,i){return n=nt(e,i),B(e,n.data,i,n.cells)}))}function q(e,i,n){return t.inArray(n,e.aoData[i].anCells)}function V(t,e,i,s){var o=t.iDraw,a=t.aoColumns[i],r=t.aoData[e]._aData,l=a.sDefaultContent,c=a.fnGetData(r,s,{settings:t,row:e,col:i});if(c===n)return t.iDrawError!=o&&null===l&&(re(t,0,"Requested unknown parameter "+("function"==typeof a.mData?"{function}":"'"+a.mData+"'")+" for row "+e+", column "+i,4),t.iDrawError=o),l;if(c!==r&&null!==c||null===l||s===n){if("function"==typeof c)return c.call(r)}else c=l;return null===c&&"display"==s?"":c}function Y(t,e,i,n){var s=t.aoColumns[i],o=t.aoData[e]._aData;s.fnSetData(o,n,{settings:t,row:e,col:i})}var X=/\[.*?\]$/,G=/\(\)$/;function K(e){return t.map(e.match(/(\\.|[^\.])+/g)||[""],(function(t){return t.replace(/\\\./g,".")}))}function J(e){if(t.isPlainObject(e)){var i={};return t.each(e,(function(t,e){e&&(i[t]=J(e))})),function(t,e,s,o){var a=i[e]||i._;return a!==n?a(t,e,s,o):t}}if(null===e)return function(t){return t};if("function"==typeof e)return function(t,i,n,s){return e(t,i,n,s)};if("string"!=typeof e||-1===e.indexOf(".")&&-1===e.indexOf("[")&&-1===e.indexOf("("))return function(t,i){return t[e]};var s=function(e,i,o){var a,r,l,c;if(""!==o)for(var h=K(o),u=0,d=h.length;u<d;u++){if(a=h[u].match(X),r=h[u].match(G),a){if(h[u]=h[u].replace(X,""),""!==h[u]&&(e=e[h[u]]),l=[],h.splice(0,u+1),c=h.join("."),t.isArray(e))for(var p=0,f=e.length;p<f;p++)l.push(s(e[p],i,c));var g=a[0].substring(1,a[0].length-1);e=""===g?l:l.join(g);break}if(r)h[u]=h[u].replace(G,""),e=e[h[u]]();else{if(null===e||e[h[u]]===n)return n;e=e[h[u]]}}return e};return function(t,i){return s(t,i,e)}}function Q(e){if(t.isPlainObject(e))return Q(e._);if(null===e)return function(){};if("function"==typeof e)return function(t,i,n){e(t,"set",i,n)};if("string"!=typeof e||-1===e.indexOf(".")&&-1===e.indexOf("[")&&-1===e.indexOf("("))return function(t,i){t[e]=i};var i=function(e,s,o){for(var a,r,l,c,h,u=K(o),d=u[u.length-1],p=0,f=u.length-1;p<f;p++){if(r=u[p].match(X),l=u[p].match(G),r){if(u[p]=u[p].replace(X,""),e[u[p]]=[],(a=u.slice()).splice(0,p+1),h=a.join("."),t.isArray(s))for(var g=0,m=s.length;g<m;g++)i(c={},s[g],h),e[u[p]].push(c);else e[u[p]]=s;return}l&&(u[p]=u[p].replace(G,""),e=e[u[p]](s)),null!==e[u[p]]&&e[u[p]]!==n||(e[u[p]]={}),e=e[u[p]]}d.match(G)?e=e[d.replace(G,"")](s):e[d.replace(X,"")]=s};return function(t,n){return i(t,n,e)}}function Z(t){return _(t.aoData,"_aData")}function tt(t){t.aoData.length=0,t.aiDisplayMaster.length=0,t.aiDisplay.length=0,t.aIds={}}function et(t,e,i){for(var s=-1,o=0,a=t.length;o<a;o++)t[o]==e?s=o:t[o]>e&&t[o]--;-1!=s&&i===n&&t.splice(s,1)}function it(t,e,i,s){var o,a,r=t.aoData[e],l=function(i,n){for(;i.childNodes.length;)i.removeChild(i.firstChild);i.innerHTML=V(t,e,n,"display")};if("dom"!==i&&(i&&"auto"!==i||"dom"!==r.src)){var c=r.anCells;if(c)if(s!==n)l(c[s],s);else for(o=0,a=c.length;o<a;o++)l(c[o],o)}else r._aData=nt(t,r,s,s===n?n:r._aData).data;r._aSortData=null,r._aFilterData=null;var h=t.aoColumns;if(s!==n)h[s].sType=null;else{for(o=0,a=h.length;o<a;o++)h[o].sType=null;ot(t,r)}}function nt(e,i,s,o){var a,r,l,c=[],h=i.firstChild,u=0,d=e.aoColumns,p=e._rowReadObject;o=o!==n?o:p?{}:[];var f=function(t,e){if("string"==typeof t){var i=t.indexOf("@");if(-1!==i){var n=t.substring(i+1);Q(t)(o,e.getAttribute(n))}}},g=function(e){s!==n&&s!==u||(r=d[u],l=t.trim(e.innerHTML),r&&r._bAttrSrc?(Q(r.mData._)(o,l),f(r.mData.sort,e),f(r.mData.type,e),f(r.mData.filter,e)):p?(r._setter||(r._setter=Q(r.mData)),r._setter(o,l)):o[u]=l);u++};if(h)for(;h;)"TD"!=(a=h.nodeName.toUpperCase())&&"TH"!=a||(g(h),c.push(h)),h=h.nextSibling;else for(var m=0,v=(c=i.anCells).length;m<v;m++)g(c[m]);var b=i.firstChild?i:i.nTr;if(b){var y=b.getAttribute("id");y&&Q(e.rowId)(o,y)}return{data:o,cells:c}}function st(e,n,s,o){var a,r,l,c,h,u=e.aoData[n],d=u._aData,p=[];if(null===u.nTr){for(a=s||i.createElement("tr"),u.nTr=a,u.anCells=p,a._DT_RowIndex=n,ot(e,u),c=0,h=e.aoColumns.length;c<h;c++)l=e.aoColumns[c],(r=s?o[c]:i.createElement(l.sCellType))._DT_CellIndex={row:n,column:c},p.push(r),s&&!l.mRender&&l.mData===c||t.isPlainObject(l.mData)&&l.mData._===c+".display"||(r.innerHTML=V(e,n,c,"display")),l.sClass&&(r.className+=" "+l.sClass),l.bVisible&&!s?a.appendChild(r):!l.bVisible&&s&&r.parentNode.removeChild(r),l.fnCreatedCell&&l.fnCreatedCell.call(e.oInstance,r,V(e,n,c),d,n,c);de(e,"aoRowCreatedCallback",null,[a,d,n,p])}u.nTr.setAttribute("role","row")}function ot(e,i){var n=i.nTr,s=i._aData;if(n){var o=e.rowIdFn(s);if(o&&(n.id=o),s.DT_RowClass){var a=s.DT_RowClass.split(" ");i.__rowc=i.__rowc?D(i.__rowc.concat(a)):a,t(n).removeClass(i.__rowc.join(" ")).addClass(s.DT_RowClass)}s.DT_RowAttr&&t(n).attr(s.DT_RowAttr),s.DT_RowData&&t(n).data(s.DT_RowData)}}function at(e){var i,n,s,o,a,r=e.nTHead,l=e.nTFoot,c=0===t("th, td",r).length,h=e.oClasses,u=e.aoColumns;for(c&&(o=t("<tr/>").appendTo(r)),i=0,n=u.length;i<n;i++)a=u[i],s=t(a.nTh).addClass(a.sClass),c&&s.appendTo(o),e.oFeatures.bSort&&(s.addClass(a.sSortingClass),!1!==a.bSortable&&(s.attr("tabindex",e.iTabIndex).attr("aria-controls",e.sTableId),ee(e,a.nTh,i))),a.sTitle!=s[0].innerHTML&&s.html(a.sTitle),fe(e,"header")(e,s,a,h);if(c&&ut(e.aoHeader,r),t(r).find(">tr").attr("role","row"),t(r).find(">tr>th, >tr>td").addClass(h.sHeaderTH),t(l).find(">tr>th, >tr>td").addClass(h.sFooterTH),null!==l){var d=e.aoFooter[0];for(i=0,n=d.length;i<n;i++)(a=u[i]).nTf=d[i].cell,a.sClass&&t(a.nTf).addClass(a.sClass)}}function rt(e,i,s){var o,a,r,l,c,h,u,d,p,f=[],g=[],m=e.aoColumns.length;if(i){for(s===n&&(s=!1),o=0,a=i.length;o<a;o++){for(f[o]=i[o].slice(),f[o].nTr=i[o].nTr,r=m-1;r>=0;r--)e.aoColumns[r].bVisible||s||f[o].splice(r,1);g.push([])}for(o=0,a=f.length;o<a;o++){if(u=f[o].nTr)for(;h=u.firstChild;)u.removeChild(h);for(r=0,l=f[o].length;r<l;r++)if(d=1,p=1,g[o][r]===n){for(u.appendChild(f[o][r].cell),g[o][r]=1;f[o+d]!==n&&f[o][r].cell==f[o+d][r].cell;)g[o+d][r]=1,d++;for(;f[o][r+p]!==n&&f[o][r].cell==f[o][r+p].cell;){for(c=0;c<d;c++)g[o+c][r+p]=1;p++}t(f[o][r].cell).attr("rowspan",d).attr("colspan",p)}}}}function lt(e){var i=de(e,"aoPreDrawCallback","preDraw",[e]);if(-1===t.inArray(!1,i)){var s=[],o=0,a=e.asStripeClasses,r=a.length,l=(e.aoOpenRows.length,e.oLanguage),c=e.iInitDisplayStart,h="ssp"==ge(e),u=e.aiDisplay;e.bDrawing=!0,c!==n&&-1!==c&&(e._iDisplayStart=h?c:c>=e.fnRecordsDisplay()?0:c,e.iInitDisplayStart=-1);var d=e._iDisplayStart,p=e.fnDisplayEnd();if(e.bDeferLoading)e.bDeferLoading=!1,e.iDraw++,jt(e,!1);else if(h){if(!e.bDestroying&&!ft(e))return}else e.iDraw++;if(0!==u.length)for(var f=h?0:d,g=h?e.aoData.length:p,m=f;m<g;m++){var v=u[m],b=e.aoData[v];null===b.nTr&&st(e,v);var y=b.nTr;if(0!==r){var _=a[o%r];b._sRowStripe!=_&&(t(y).removeClass(b._sRowStripe).addClass(_),b._sRowStripe=_)}de(e,"aoRowCallback",null,[y,b._aData,o,m,v]),s.push(y),o++}else{var w=l.sZeroRecords;1==e.iDraw&&"ajax"==ge(e)?w=l.sLoadingRecords:l.sEmptyTable&&0===e.fnRecordsTotal()&&(w=l.sEmptyTable),s[0]=t("<tr/>",{class:r?a[0]:""}).append(t("<td />",{valign:"top",colSpan:W(e),class:e.oClasses.sRowEmpty}).html(w))[0]}de(e,"aoHeaderCallback","header",[t(e.nTHead).children("tr")[0],Z(e),d,p,u]),de(e,"aoFooterCallback","footer",[t(e.nTFoot).children("tr")[0],Z(e),d,p,u]);var x=t(e.nTBody);x.children().detach(),x.append(t(s)),de(e,"aoDrawCallback","draw",[e]),e.bSorted=!1,e.bFiltered=!1,e.bDrawing=!1}else jt(e,!1)}function ct(t,e){var i=t.oFeatures,n=i.bSort,s=i.bFilter;n&&Qt(t),s?yt(t,t.oPreviousSearch):t.aiDisplay=t.aiDisplayMaster.slice(),!0!==e&&(t._iDisplayStart=0),t._drawHold=e,lt(t),t._drawHold=!1}function ht(e){var i=e.oClasses,n=t(e.nTable),s=t("<div/>").insertBefore(n),o=e.oFeatures,a=t("<div/>",{id:e.sTableId+"_wrapper",class:i.sWrapper+(e.nTFoot?"":" "+i.sNoFooter)});e.nHolding=s[0],e.nTableWrapper=a[0],e.nTableReinsertBefore=e.nTable.nextSibling;for(var r,c,h,u,d,p,f=e.sDom.split(""),g=0;g<f.length;g++){if(r=null,"<"==(c=f[g])){if(h=t("<div/>")[0],"'"==(u=f[g+1])||'"'==u){for(d="",p=2;f[g+p]!=u;)d+=f[g+p],p++;if("H"==d?d=i.sJUIHeader:"F"==d&&(d=i.sJUIFooter),-1!=d.indexOf(".")){var m=d.split(".");h.id=m[0].substr(1,m[0].length-1),h.className=m[1]}else"#"==d.charAt(0)?h.id=d.substr(1,d.length-1):h.className=d;g+=p}a.append(h),a=t(h)}else if(">"==c)a=a.parent();else if("l"==c&&o.bPaginate&&o.bLengthChange)r=Ht(e);else if("f"==c&&o.bFilter)r=bt(e);else if("r"==c&&o.bProcessing)r=Wt(e);else if("t"==c)r=zt(e);else if("i"==c&&o.bInfo)r=Et(e);else if("p"==c&&o.bPaginate)r=Rt(e);else if(0!==l.ext.feature.length)for(var v=l.ext.feature,b=0,y=v.length;b<y;b++)if(c==v[b].cFeature){r=v[b].fnInit(e);break}if(r){var _=e.aanFeatures;_[c]||(_[c]=[]),_[c].push(r),a.append(r)}}s.replaceWith(a),e.nHolding=null}function ut(e,i){var n,s,o,a,r,l,c,h,u,d,p=t(i).children("tr"),f=function(t,e,i){for(var n=t[e];n[i];)i++;return i};for(e.splice(0,e.length),o=0,l=p.length;o<l;o++)e.push([]);for(o=0,l=p.length;o<l;o++)for(0,s=(n=p[o]).firstChild;s;){if("TD"==s.nodeName.toUpperCase()||"TH"==s.nodeName.toUpperCase())for(h=(h=1*s.getAttribute("colspan"))&&0!==h&&1!==h?h:1,u=(u=1*s.getAttribute("rowspan"))&&0!==u&&1!==u?u:1,c=f(e,o,0),d=1===h,r=0;r<h;r++)for(a=0;a<u;a++)e[o+a][c+r]={cell:s,unique:d},e[o+a].nTr=n;s=s.nextSibling}}function dt(t,e,i){var n=[];i||(i=t.aoHeader,e&&ut(i=[],e));for(var s=0,o=i.length;s<o;s++)for(var a=0,r=i[s].length;a<r;a++)!i[s][a].unique||n[a]&&t.bSortCellsTop||(n[a]=i[s][a].cell);return n}function pt(e,i,n){if(de(e,"aoServerParams","serverParams",[i]),i&&t.isArray(i)){var s={},o=/(.*?)\[\]$/;t.each(i,(function(t,e){var i=e.name.match(o);if(i){var n=i[0];s[n]||(s[n]=[]),s[n].push(e.value)}else s[e.name]=e.value})),i=s}var a,r=e.ajax,l=e.oInstance,c=function(t){de(e,null,"xhr",[e,t,e.jqXHR]),n(t)};if(t.isPlainObject(r)&&r.data){var h="function"==typeof(a=r.data)?a(i,e):a;i="function"==typeof a&&h?h:t.extend(!0,i,h),delete r.data}var u={data:i,success:function(t){var i=t.error||t.sError;i&&re(e,0,i),e.json=t,c(t)},dataType:"json",cache:!1,type:e.sServerMethod,error:function(i,n,s){var o=de(e,null,"xhr",[e,null,e.jqXHR]);-1===t.inArray(!0,o)&&("parsererror"==n?re(e,0,"Invalid JSON response",1):4===i.readyState&&re(e,0,"Ajax error",7)),jt(e,!1)}};e.oAjaxData=i,de(e,null,"preXhr",[e,i]),e.fnServerData?e.fnServerData.call(l,e.sAjaxSource,t.map(i,(function(t,e){return{name:e,value:t}})),c,e):e.sAjaxSource||"string"==typeof r?e.jqXHR=t.ajax(t.extend(u,{url:r||e.sAjaxSource})):"function"==typeof r?e.jqXHR=r.call(l,i,c,e):(e.jqXHR=t.ajax(t.extend(u,r)),r.data=a)}function ft(t){return!t.bAjaxDataGet||(t.iDraw++,jt(t,!0),pt(t,gt(t),(function(e){mt(t,e)})),!1)}function gt(e){var i,n,s,o,a=e.aoColumns,r=a.length,c=e.oFeatures,h=e.oPreviousSearch,u=e.aoPreSearchCols,d=[],p=Jt(e),f=e._iDisplayStart,g=!1!==c.bPaginate?e._iDisplayLength:-1,m=function(t,e){d.push({name:t,value:e})};m("sEcho",e.iDraw),m("iColumns",r),m("sColumns",_(a,"sName").join(",")),m("iDisplayStart",f),m("iDisplayLength",g);var v={draw:e.iDraw,columns:[],order:[],start:f,length:g,search:{value:h.sSearch,regex:h.bRegex}};for(i=0;i<r;i++)s=a[i],o=u[i],n="function"==typeof s.mData?"function":s.mData,v.columns.push({data:n,name:s.sName,searchable:s.bSearchable,orderable:s.bSortable,search:{value:o.sSearch,regex:o.bRegex}}),m("mDataProp_"+i,n),c.bFilter&&(m("sSearch_"+i,o.sSearch),m("bRegex_"+i,o.bRegex),m("bSearchable_"+i,s.bSearchable)),c.bSort&&m("bSortable_"+i,s.bSortable);c.bFilter&&(m("sSearch",h.sSearch),m("bRegex",h.bRegex)),c.bSort&&(t.each(p,(function(t,e){v.order.push({column:e.col,dir:e.dir}),m("iSortCol_"+t,e.col),m("sSortDir_"+t,e.dir)})),m("iSortingCols",p.length));var b=l.ext.legacy.ajax;return null===b?e.sAjaxSource?d:v:b?d:v}function mt(t,e){var i=function(t,i){return e[t]!==n?e[t]:e[i]},s=vt(t,e),o=i("sEcho","draw"),a=i("iTotalRecords","recordsTotal"),r=i("iTotalDisplayRecords","recordsFiltered");if(o){if(1*o<t.iDraw)return;t.iDraw=1*o}tt(t),t._iRecordsTotal=parseInt(a,10),t._iRecordsDisplay=parseInt(r,10);for(var l=0,c=s.length;l<c;l++)B(t,s[l]);t.aiDisplay=t.aiDisplayMaster.slice(),t.bAjaxDataGet=!1,lt(t),t._bInitComplete||Lt(t,e),t.bAjaxDataGet=!0,jt(t,!1)}function vt(e,i){var s=t.isPlainObject(e.ajax)&&e.ajax.dataSrc!==n?e.ajax.dataSrc:e.sAjaxDataProp;return"data"===s?i.aaData||i[s]:""!==s?J(s)(i):i}function bt(e){var n=e.oClasses,s=e.sTableId,o=e.oLanguage,a=e.oPreviousSearch,r=e.aanFeatures,l='<input type="search" class="'+n.sFilterInput+'"/>',c=o.sSearch;c=c.match(/_INPUT_/)?c.replace("_INPUT_",l):c+l;var h=t("<div/>",{id:r.f?null:s+"_filter",class:n.sFilter}).append(t("<label/>").append(c)),u=function(){r.f;var t=this.value?this.value:"";t!=a.sSearch&&(yt(e,{sSearch:t,bRegex:a.bRegex,bSmart:a.bSmart,bCaseInsensitive:a.bCaseInsensitive}),e._iDisplayStart=0,lt(e))},d=null!==e.searchDelay?e.searchDelay:"ssp"===ge(e)?400:0,p=t("input",h).val(a.sSearch).attr("placeholder",o.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",d?Vt(u,d):u).on("keypress.DT",(function(t){if(13==t.keyCode)return!1})).attr("aria-controls",s);return t(e.nTable).on("search.dt.DT",(function(t,n){if(e===n)try{p[0]!==i.activeElement&&p.val(a.sSearch)}catch(t){}})),h[0]}function yt(t,e,i){var s=t.oPreviousSearch,o=t.aoPreSearchCols,a=function(t){s.sSearch=t.sSearch,s.bRegex=t.bRegex,s.bSmart=t.bSmart,s.bCaseInsensitive=t.bCaseInsensitive},r=function(t){return t.bEscapeRegex!==n?!t.bEscapeRegex:t.bRegex};if(z(t),"ssp"!=ge(t)){xt(t,e.sSearch,i,r(e),e.bSmart,e.bCaseInsensitive),a(e);for(var l=0;l<o.length;l++)wt(t,o[l].sSearch,l,r(o[l]),o[l].bSmart,o[l].bCaseInsensitive);_t(t)}else a(e);t.bFiltered=!0,de(t,null,"search",[t])}function _t(e){for(var i,n,s=l.ext.search,o=e.aiDisplay,a=0,r=s.length;a<r;a++){for(var c=[],h=0,u=o.length;h<u;h++)n=o[h],i=e.aoData[n],s[a](e,i._aFilterData,n,i._aData,h)&&c.push(n);o.length=0,t.merge(o,c)}}function wt(t,e,i,n,s,o){if(""!==e){for(var a,r=[],l=t.aiDisplay,c=Ct(e,n,s,o),h=0;h<l.length;h++)a=t.aoData[l[h]]._aFilterData[i],c.test(a)&&r.push(l[h]);t.aiDisplay=r}}function xt(t,e,i,n,s,o){var a,r,c,h=Ct(e,n,s,o),u=t.oPreviousSearch.sSearch,d=t.aiDisplayMaster,p=[];if(0!==l.ext.search.length&&(i=!0),r=kt(t),e.length<=0)t.aiDisplay=d.slice();else{for((r||i||u.length>e.length||0!==e.indexOf(u)||t.bSorted)&&(t.aiDisplay=d.slice()),a=t.aiDisplay,c=0;c<a.length;c++)h.test(t.aoData[a[c]]._sFilterRow)&&p.push(a[c]);t.aiDisplay=p}}function Ct(e,i,n,s){if(e=i?e:St(e),n){var o=t.map(e.match(/"[^"]+"|[^ ]+/g)||[""],(function(t){if('"'===t.charAt(0)){var e=t.match(/^"(.*)"$/);t=e?e[1]:t}return t.replace('"',"")}));e="^(?=.*?"+o.join(")(?=.*?")+").*$"}return new RegExp(e,s?"i":"")}var St=l.util.escapeRegex,Dt=t("<div>")[0],Tt=Dt.textContent!==n;function kt(t){var e,i,n,s,o,a,r,c,h=t.aoColumns,u=l.ext.type.search,d=!1;for(i=0,s=t.aoData.length;i<s;i++)if(!(c=t.aoData[i])._aFilterData){for(a=[],n=0,o=h.length;n<o;n++)(e=h[n]).bSearchable?(r=V(t,i,n,"filter"),u[e.sType]&&(r=u[e.sType](r)),null===r&&(r=""),"string"!=typeof r&&r.toString&&(r=r.toString())):r="",r.indexOf&&-1!==r.indexOf("&")&&(Dt.innerHTML=r,r=Tt?Dt.textContent:Dt.innerText),r.replace&&(r=r.replace(/[\r\n]/g,"")),a.push(r);c._aFilterData=a,c._sFilterRow=a.join("  "),d=!0}return d}function It(t){return{search:t.sSearch,smart:t.bSmart,regex:t.bRegex,caseInsensitive:t.bCaseInsensitive}}function At(t){return{sSearch:t.search,bSmart:t.smart,bRegex:t.regex,bCaseInsensitive:t.caseInsensitive}}function Et(e){var i=e.sTableId,n=e.aanFeatures.i,s=t("<div/>",{class:e.oClasses.sInfo,id:n?null:i+"_info"});return n||(e.aoDrawCallback.push({fn:Pt,sName:"information"}),s.attr("role","status").attr("aria-live","polite"),t(e.nTable).attr("aria-describedby",i+"_info")),s[0]}function Pt(e){var i=e.aanFeatures.i;if(0!==i.length){var n=e.oLanguage,s=e._iDisplayStart+1,o=e.fnDisplayEnd(),a=e.fnRecordsTotal(),r=e.fnRecordsDisplay(),l=r?n.sInfo:n.sInfoEmpty;r!==a&&(l+=" "+n.sInfoFiltered),l=Nt(e,l+=n.sInfoPostFix);var c=n.fnInfoCallback;null!==c&&(l=c.call(e.oInstance,e,s,o,a,r,l)),t(i).html(l)}}function Nt(t,e){var i=t.fnFormatNumber,n=t._iDisplayStart+1,s=t._iDisplayLength,o=t.fnRecordsDisplay(),a=-1===s;return e.replace(/_START_/g,i.call(t,n)).replace(/_END_/g,i.call(t,t.fnDisplayEnd())).replace(/_MAX_/g,i.call(t,t.fnRecordsTotal())).replace(/_TOTAL_/g,i.call(t,o)).replace(/_PAGE_/g,i.call(t,a?1:Math.ceil(n/s))).replace(/_PAGES_/g,i.call(t,a?1:Math.ceil(o/s)))}function Ot(t){var e,i,n,s=t.iInitDisplayStart,o=t.aoColumns,a=t.oFeatures,r=t.bDeferLoading;if(t.bInitialised){for(ht(t),at(t),rt(t,t.aoHeader),rt(t,t.aoFooter),jt(t,!0),a.bAutoWidth&&qt(t),e=0,i=o.length;e<i;e++)(n=o[e]).sWidth&&(n.nTh.style.width=Kt(n.sWidth));de(t,null,"preInit",[t]),ct(t);var l=ge(t);("ssp"!=l||r)&&("ajax"==l?pt(t,[],(function(i){var n=vt(t,i);for(e=0;e<n.length;e++)B(t,n[e]);t.iInitDisplayStart=s,ct(t),jt(t,!1),Lt(t,i)})):(jt(t,!1),Lt(t)))}else setTimeout((function(){Ot(t)}),200)}function Lt(t,e){t._bInitComplete=!0,(e||t.oInit.aaData)&&H(t),de(t,null,"plugin-init",[t,e]),de(t,"aoInitComplete","init",[t,e])}function Mt(t,e){var i=parseInt(e,10);t._iDisplayLength=i,pe(t),de(t,null,"length",[t,i])}function Ht(e){for(var i=e.oClasses,n=e.sTableId,s=e.aLengthMenu,o=t.isArray(s[0]),a=o?s[0]:s,r=o?s[1]:s,l=t("<select/>",{name:n+"_length","aria-controls":n,class:i.sLengthSelect}),c=0,h=a.length;c<h;c++)l[0][c]=new Option("number"==typeof r[c]?e.fnFormatNumber(r[c]):r[c],a[c]);var u=t("<div><label/></div>").addClass(i.sLength);return e.aanFeatures.l||(u[0].id=n+"_length"),u.children().append(e.oLanguage.sLengthMenu.replace("_MENU_",l[0].outerHTML)),t("select",u).val(e._iDisplayLength).on("change.DT",(function(i){Mt(e,t(this).val()),lt(e)})),t(e.nTable).on("length.dt.DT",(function(i,n,s){e===n&&t("select",u).val(s)})),u[0]}function Rt(e){var i=e.sPaginationType,n=l.ext.pager[i],s="function"==typeof n,o=function(t){lt(t)},a=t("<div/>").addClass(e.oClasses.sPaging+i)[0],r=e.aanFeatures;return s||n.fnInit(e,a,o),r.p||(a.id=e.sTableId+"_paginate",e.aoDrawCallback.push({fn:function(t){if(s){var e,i,a=t._iDisplayStart,l=t._iDisplayLength,c=t.fnRecordsDisplay(),h=-1===l,u=h?0:Math.ceil(a/l),d=h?1:Math.ceil(c/l),p=n(u,d);for(e=0,i=r.p.length;e<i;e++)fe(t,"pageButton")(t,r.p[e],e,p,u,d)}else n.fnUpdate(t,o)},sName:"pagination"})),a}function Ft(t,e,i){var n=t._iDisplayStart,s=t._iDisplayLength,o=t.fnRecordsDisplay();0===o||-1===s?n=0:"number"==typeof e?(n=e*s)>o&&(n=0):"first"==e?n=0:"previous"==e?(n=s>=0?n-s:0)<0&&(n=0):"next"==e?n+s<o&&(n+=s):"last"==e?n=Math.floor((o-1)/s)*s:re(t,0,"Unknown paging action: "+e,5);var a=t._iDisplayStart!==n;return t._iDisplayStart=n,a&&(de(t,null,"page",[t]),i&&lt(t)),a}function Wt(e){return t("<div/>",{id:e.aanFeatures.r?null:e.sTableId+"_processing",class:e.oClasses.sProcessing}).html(e.oLanguage.sProcessing).insertBefore(e.nTable)[0]}function jt(e,i){e.oFeatures.bProcessing&&t(e.aanFeatures.r).css("display",i?"block":"none"),de(e,null,"processing",[e,i])}function zt(e){var i=t(e.nTable);i.attr("role","grid");var n=e.oScroll;if(""===n.sX&&""===n.sY)return e.nTable;var s=n.sX,o=n.sY,a=e.oClasses,r=i.children("caption"),l=r.length?r[0]._captionSide:null,c=t(i[0].cloneNode(!1)),h=t(i[0].cloneNode(!1)),u=i.children("tfoot"),d="<div/>",p=function(t){return t?Kt(t):null};u.length||(u=null);var f=t(d,{class:a.sScrollWrapper}).append(t(d,{class:a.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:s?p(s):"100%"}).append(t(d,{class:a.sScrollHeadInner}).css({"box-sizing":"content-box",width:n.sXInner||"100%"}).append(c.removeAttr("id").css("margin-left",0).append("top"===l?r:null).append(i.children("thead"))))).append(t(d,{class:a.sScrollBody}).css({position:"relative",overflow:"auto",width:p(s)}).append(i));u&&f.append(t(d,{class:a.sScrollFoot}).css({overflow:"hidden",border:0,width:s?p(s):"100%"}).append(t(d,{class:a.sScrollFootInner}).append(h.removeAttr("id").css("margin-left",0).append("bottom"===l?r:null).append(i.children("tfoot")))));var g=f.children(),m=g[0],v=g[1],b=u?g[2]:null;return s&&t(v).on("scroll.DT",(function(t){var e=this.scrollLeft;m.scrollLeft=e,u&&(b.scrollLeft=e)})),t(v).css(o&&n.bCollapse?"max-height":"height",o),e.nScrollHead=m,e.nScrollBody=v,e.nScrollFoot=b,e.aoDrawCallback.push({fn:$t,sName:"scrolling"}),f[0]}function $t(e){var i,s,o,a,r,l,c,h,u,d=e.oScroll,p=d.sX,f=d.sXInner,g=d.sY,m=d.iBarWidth,v=t(e.nScrollHead),b=v[0].style,y=v.children("div"),w=y[0].style,x=y.children("table"),C=e.nScrollBody,S=t(C),D=C.style,T=t(e.nScrollFoot).children("div"),k=T.children("table"),I=t(e.nTHead),A=t(e.nTable),E=A[0],P=E.style,N=e.nTFoot?t(e.nTFoot):null,O=e.oBrowser,L=O.bScrollOversize,M=_(e.aoColumns,"nTh"),F=[],W=[],j=[],z=[],$=function(t){var e=t.style;e.paddingTop="0",e.paddingBottom="0",e.borderTopWidth="0",e.borderBottomWidth="0",e.height=0},B=C.scrollHeight>C.clientHeight;if(e.scrollBarVis!==B&&e.scrollBarVis!==n)return e.scrollBarVis=B,void H(e);e.scrollBarVis=B,A.children("thead, tfoot").remove(),N&&(l=N.clone().prependTo(A),s=N.find("tr"),a=l.find("tr")),r=I.clone().prependTo(A),i=I.find("tr"),o=r.find("tr"),r.find("th, td").removeAttr("tabindex"),p||(D.width="100%",v[0].style.width="100%"),t.each(dt(e,r),(function(t,i){c=R(e,t),i.style.width=e.aoColumns[c].sWidth})),N&&Bt((function(t){t.style.width=""}),a),u=A.outerWidth(),""===p?(P.width="100%",L&&(A.find("tbody").height()>C.offsetHeight||"scroll"==S.css("overflow-y"))&&(P.width=Kt(A.outerWidth()-m)),u=A.outerWidth()):""!==f&&(P.width=Kt(f),u=A.outerWidth()),Bt($,o),Bt((function(e){j.push(e.innerHTML),F.push(Kt(t(e).css("width")))}),o),Bt((function(e,i){-1!==t.inArray(e,M)&&(e.style.width=F[i])}),i),t(o).height(0),N&&(Bt($,a),Bt((function(e){z.push(e.innerHTML),W.push(Kt(t(e).css("width")))}),a),Bt((function(t,e){t.style.width=W[e]}),s),t(a).height(0)),Bt((function(t,e){t.innerHTML='<div class="dataTables_sizing">'+j[e]+"</div>",t.childNodes[0].style.height="0",t.childNodes[0].style.overflow="hidden",t.style.width=F[e]}),o),N&&Bt((function(t,e){t.innerHTML='<div class="dataTables_sizing">'+z[e]+"</div>",t.childNodes[0].style.height="0",t.childNodes[0].style.overflow="hidden",t.style.width=W[e]}),a),A.outerWidth()<u?(h=C.scrollHeight>C.offsetHeight||"scroll"==S.css("overflow-y")?u+m:u,L&&(C.scrollHeight>C.offsetHeight||"scroll"==S.css("overflow-y"))&&(P.width=Kt(h-m)),""!==p&&""===f||re(e,1,"Possible column misalignment",6)):h="100%",D.width=Kt(h),b.width=Kt(h),N&&(e.nScrollFoot.style.width=Kt(h)),g||L&&(D.height=Kt(E.offsetHeight+m));var U=A.outerWidth();x[0].style.width=Kt(U),w.width=Kt(U);var q=A.height()>C.clientHeight||"scroll"==S.css("overflow-y"),V="padding"+(O.bScrollbarLeft?"Left":"Right");w[V]=q?m+"px":"0px",N&&(k[0].style.width=Kt(U),T[0].style.width=Kt(U),T[0].style[V]=q?m+"px":"0px"),A.children("colgroup").insertBefore(A.children("thead")),S.scroll(),!e.bSorted&&!e.bFiltered||e._drawHold||(C.scrollTop=0)}function Bt(t,e,i){for(var n,s,o=0,a=0,r=e.length;a<r;){for(n=e[a].firstChild,s=i?i[a].firstChild:null;n;)1===n.nodeType&&(i?t(n,s,o):t(n,o),o++),n=n.nextSibling,s=i?s.nextSibling:null;a++}}var Ut=/<.*?>/g;function qt(i){var n,s,o,a=i.nTable,r=i.aoColumns,l=i.oScroll,c=l.sY,h=l.sX,u=l.sXInner,d=r.length,p=j(i,"bVisible"),f=t("th",i.nTHead),g=a.getAttribute("width"),m=a.parentNode,v=!1,b=i.oBrowser,y=b.bScrollOversize,_=a.style.width;for(_&&-1!==_.indexOf("%")&&(g=_),n=0;n<p.length;n++)null!==(s=r[p[n]]).sWidth&&(s.sWidth=Yt(s.sWidthOrig,m),v=!0);if(y||!v&&!h&&!c&&d==W(i)&&d==f.length)for(n=0;n<d;n++){var w=R(i,n);null!==w&&(r[w].sWidth=Kt(f.eq(n).width()))}else{var x=t(a).clone().css("visibility","hidden").removeAttr("id");x.find("tbody tr").remove();var C=t("<tr/>").appendTo(x.find("tbody"));for(x.find("thead, tfoot").remove(),x.append(t(i.nTHead).clone()).append(t(i.nTFoot).clone()),x.find("tfoot th, tfoot td").css("width",""),f=dt(i,x.find("thead")[0]),n=0;n<p.length;n++)s=r[p[n]],f[n].style.width=null!==s.sWidthOrig&&""!==s.sWidthOrig?Kt(s.sWidthOrig):"",s.sWidthOrig&&h&&t(f[n]).append(t("<div/>").css({width:s.sWidthOrig,margin:0,padding:0,border:0,height:1}));if(i.aoData.length)for(n=0;n<p.length;n++)s=r[o=p[n]],t(Xt(i,o)).clone(!1).append(s.sContentPadding).appendTo(C);t("[name]",x).removeAttr("name");var S=t("<div/>").css(h||c?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(x).appendTo(m);h&&u?x.width(u):h?(x.css("width","auto"),x.removeAttr("width"),x.width()<m.clientWidth&&g&&x.width(m.clientWidth)):c?x.width(m.clientWidth):g&&x.width(g);var D=0;for(n=0;n<p.length;n++){var T=t(f[n]),k=T.outerWidth()-T.width(),I=b.bBounding?Math.ceil(f[n].getBoundingClientRect().width):T.outerWidth();D+=I,r[p[n]].sWidth=Kt(I-k)}a.style.width=Kt(D),S.remove()}if(g&&(a.style.width=Kt(g)),(g||h)&&!i._reszEvt){var A=function(){t(e).on("resize.DT-"+i.sInstance,Vt((function(){H(i)})))};y?setTimeout(A,1e3):A(),i._reszEvt=!0}}var Vt=l.util.throttle;function Yt(e,n){if(!e)return 0;var s=t("<div/>").css("width",Kt(e)).appendTo(n||i.body),o=s[0].offsetWidth;return s.remove(),o}function Xt(e,i){var n=Gt(e,i);if(n<0)return null;var s=e.aoData[n];return s.nTr?s.anCells[i]:t("<td/>").html(V(e,n,i,"display"))[0]}function Gt(t,e){for(var i,n=-1,s=-1,o=0,a=t.aoData.length;o<a;o++)(i=(i=(i=V(t,o,e,"display")+"").replace(Ut,"")).replace(/&nbsp;/g," ")).length>n&&(n=i.length,s=o);return s}function Kt(t){return null===t?"0px":"number"==typeof t?t<0?"0px":t+"px":t.match(/\d$/)?t+"px":t}function Jt(e){var i,s,o,a,r,c,h,u=[],d=e.aoColumns,p=e.aaSortingFixed,f=t.isPlainObject(p),g=[],m=function(e){e.length&&!t.isArray(e[0])?g.push(e):t.merge(g,e)};for(t.isArray(p)&&m(p),f&&p.pre&&m(p.pre),m(e.aaSorting),f&&p.post&&m(p.post),i=0;i<g.length;i++)for(s=0,o=(a=d[h=g[i][0]].aDataSort).length;s<o;s++)c=d[r=a[s]].sType||"string",g[i]._idx===n&&(g[i]._idx=t.inArray(g[i][1],d[r].asSorting)),u.push({src:h,col:r,dir:g[i][1],index:g[i]._idx,type:c,formatter:l.ext.type.order[c+"-pre"]});return u}function Qt(t){var e,i,n,s,o,a=[],r=l.ext.type.order,c=t.aoData,h=(t.aoColumns,0),u=t.aiDisplayMaster;for(z(t),e=0,i=(o=Jt(t)).length;e<i;e++)(s=o[e]).formatter&&h++,ne(t,s.col);if("ssp"!=ge(t)&&0!==o.length){for(e=0,n=u.length;e<n;e++)a[u[e]]=e;h===o.length?u.sort((function(t,e){var i,n,s,r,l,h=o.length,u=c[t]._aSortData,d=c[e]._aSortData;for(s=0;s<h;s++)if(0!==(r=(i=u[(l=o[s]).col])<(n=d[l.col])?-1:i>n?1:0))return"asc"===l.dir?r:-r;return(i=a[t])<(n=a[e])?-1:i>n?1:0})):u.sort((function(t,e){var i,n,s,l,h,u=o.length,d=c[t]._aSortData,p=c[e]._aSortData;for(s=0;s<u;s++)if(i=d[(h=o[s]).col],n=p[h.col],0!==(l=(r[h.type+"-"+h.dir]||r["string-"+h.dir])(i,n)))return l;return(i=a[t])<(n=a[e])?-1:i>n?1:0}))}t.bSorted=!0}function Zt(t){for(var e,i,n=t.aoColumns,s=Jt(t),o=t.oLanguage.oAria,a=0,r=n.length;a<r;a++){var l=n[a],c=l.asSorting,h=l.sTitle.replace(/<.*?>/g,""),u=l.nTh;u.removeAttribute("aria-sort"),l.bSortable?(s.length>0&&s[0].col==a?(u.setAttribute("aria-sort","asc"==s[0].dir?"ascending":"descending"),i=c[s[0].index+1]||c[0]):i=c[0],e=h+("asc"===i?o.sSortAscending:o.sSortDescending)):e=h,u.setAttribute("aria-label",e)}}function te(e,i,s,o){var a,r=e.aoColumns[i],l=e.aaSorting,c=r.asSorting,h=function(e,i){var s=e._idx;return s===n&&(s=t.inArray(e[1],c)),s+1<c.length?s+1:i?null:0};if("number"==typeof l[0]&&(l=e.aaSorting=[l]),s&&e.oFeatures.bSortMulti){var u=t.inArray(i,_(l,"0"));-1!==u?(null===(a=h(l[u],!0))&&1===l.length&&(a=0),null===a?l.splice(u,1):(l[u][1]=c[a],l[u]._idx=a)):(l.push([i,c[0],0]),l[l.length-1]._idx=0)}else l.length&&l[0][0]==i?(a=h(l[0]),l.length=1,l[0][1]=c[a],l[0]._idx=a):(l.length=0,l.push([i,c[0]]),l[0]._idx=0);ct(e),"function"==typeof o&&o(e)}function ee(t,e,i,n){var s=t.aoColumns[i];he(e,{},(function(e){!1!==s.bSortable&&(t.oFeatures.bProcessing?(jt(t,!0),setTimeout((function(){te(t,i,e.shiftKey,n),"ssp"!==ge(t)&&jt(t,!1)}),0)):te(t,i,e.shiftKey,n))}))}function ie(e){var i,n,s,o=e.aLastSort,a=e.oClasses.sSortColumn,r=Jt(e),l=e.oFeatures;if(l.bSort&&l.bSortClasses){for(i=0,n=o.length;i<n;i++)s=o[i].src,t(_(e.aoData,"anCells",s)).removeClass(a+(i<2?i+1:3));for(i=0,n=r.length;i<n;i++)s=r[i].src,t(_(e.aoData,"anCells",s)).addClass(a+(i<2?i+1:3))}e.aLastSort=r}function ne(t,e){var i,n,s,o=t.aoColumns[e],a=l.ext.order[o.sSortDataType];a&&(i=a.call(t.oInstance,t,e,F(t,e)));for(var r=l.ext.type.order[o.sType+"-pre"],c=0,h=t.aoData.length;c<h;c++)(n=t.aoData[c])._aSortData||(n._aSortData=[]),n._aSortData[e]&&!a||(s=a?i[c]:V(t,c,e,"sort"),n._aSortData[e]=r?r(s):s)}function se(e){if(e.oFeatures.bStateSave&&!e.bDestroying){var i={time:+new Date,start:e._iDisplayStart,length:e._iDisplayLength,order:t.extend(!0,[],e.aaSorting),search:It(e.oPreviousSearch),columns:t.map(e.aoColumns,(function(t,i){return{visible:t.bVisible,search:It(e.aoPreSearchCols[i])}}))};de(e,"aoStateSaveParams","stateSaveParams",[e,i]),e.oSavedState=i,e.fnStateSaveCallback.call(e.oInstance,e,i)}}function oe(e,i,s){var o,a,r=e.aoColumns,l=function(i){if(i&&i.time){var l=de(e,"aoStateLoadParams","stateLoadParams",[e,i]);if(-1===t.inArray(!1,l)){var c=e.iStateDuration;if(c>0&&i.time<+new Date-1e3*c)s();else if(i.columns&&r.length!==i.columns.length)s();else{if(e.oLoadedState=t.extend(!0,{},i),i.start!==n&&(e._iDisplayStart=i.start,e.iInitDisplayStart=i.start),i.length!==n&&(e._iDisplayLength=i.length),i.order!==n&&(e.aaSorting=[],t.each(i.order,(function(t,i){e.aaSorting.push(i[0]>=r.length?[0,i[1]]:i)}))),i.search!==n&&t.extend(e.oPreviousSearch,At(i.search)),i.columns)for(o=0,a=i.columns.length;o<a;o++){var h=i.columns[o];h.visible!==n&&(r[o].bVisible=h.visible),h.search!==n&&t.extend(e.aoPreSearchCols[o],At(h.search))}de(e,"aoStateLoaded","stateLoaded",[e,i]),s()}}else s()}else s()};if(e.oFeatures.bStateSave){var c=e.fnStateLoadCallback.call(e.oInstance,e,l);c!==n&&l(c)}else s()}function ae(e){var i=l.settings,n=t.inArray(e,_(i,"nTable"));return-1!==n?i[n]:null}function re(t,i,n,s){if(n="DataTables warning: "+(t?"table id="+t.sTableId+" - ":"")+n,s&&(n+=". For more information about this error, please see http://datatables.net/tn/"+s),i)e.console&&console.log&&console.log(n);else{var o=l.ext,a=o.sErrMode||o.errMode;if(t&&de(t,null,"error",[t,s,n]),"alert"==a)alert(n);else{if("throw"==a)throw new Error(n);"function"==typeof a&&a(t,s,n)}}}function le(e,i,s,o){t.isArray(s)?t.each(s,(function(n,s){t.isArray(s)?le(e,i,s[0],s[1]):le(e,i,s)})):(o===n&&(o=s),i[s]!==n&&(e[o]=i[s]))}function ce(e,i,n){var s;for(var o in i)i.hasOwnProperty(o)&&(s=i[o],t.isPlainObject(s)?(t.isPlainObject(e[o])||(e[o]={}),t.extend(!0,e[o],s)):n&&"data"!==o&&"aaData"!==o&&t.isArray(s)?e[o]=s.slice():e[o]=s);return e}function he(e,i,n){t(e).on("click.DT",i,(function(i){t(e).blur(),n(i)})).on("keypress.DT",i,(function(t){13===t.which&&(t.preventDefault(),n(t))})).on("selectstart.DT",(function(){return!1}))}function ue(t,e,i,n){i&&t[e].push({fn:i,sName:n})}function de(e,i,n,s){var o=[];if(i&&(o=t.map(e[i].slice().reverse(),(function(t,i){return t.fn.apply(e.oInstance,s)}))),null!==n){var a=t.Event(n+".dt");t(e.nTable).trigger(a,s),o.push(a.result)}return o}function pe(t){var e=t._iDisplayStart,i=t.fnDisplayEnd(),n=t._iDisplayLength;e>=i&&(e=i-n),e-=e%n,(-1===n||e<0)&&(e=0),t._iDisplayStart=e}function fe(e,i){var n=e.renderer,s=l.ext.renderer[i];return t.isPlainObject(n)&&n[i]?s[n[i]]||s._:"string"==typeof n&&s[n]||s._}function ge(t){return t.oFeatures.bServerSide?"ssp":t.ajax||t.sAjaxSource?"ajax":"dom"}var me=[],ve=Array.prototype;o=function(e,i){if(!(this instanceof o))return new o(e,i);var n=[],s=function(e){var i=function(e){var i,n,s=l.settings,o=t.map(s,(function(t,e){return t.nTable}));return e?e.nTable&&e.oApi?[e]:e.nodeName&&"table"===e.nodeName.toLowerCase()?-1!==(i=t.inArray(e,o))?[s[i]]:null:e&&"function"==typeof e.settings?e.settings().toArray():("string"==typeof e?n=t(e):e instanceof t&&(n=e),n?n.map((function(e){return-1!==(i=t.inArray(this,o))?s[i]:null})).toArray():void 0):[]}(e);i&&(n=n.concat(i))};if(t.isArray(e))for(var a=0,r=e.length;a<r;a++)s(e[a]);else s(e);this.context=D(n),i&&t.merge(this,i),this.selector={rows:null,cols:null,opts:null},o.extend(this,this,me)},l.Api=o,t.extend(o.prototype,{any:function(){return 0!==this.count()},concat:ve.concat,context:[],count:function(){return this.flatten().length},each:function(t){for(var e=0,i=this.length;e<i;e++)t.call(this,this[e],e,this);return this},eq:function(t){var e=this.context;return e.length>t?new o(e[t],this[t]):null},filter:function(t){var e=[];if(ve.filter)e=ve.filter.call(this,t,this);else for(var i=0,n=this.length;i<n;i++)t.call(this,this[i],i,this)&&e.push(this[i]);return new o(this.context,e)},flatten:function(){var t=[];return new o(this.context,t.concat.apply(t,this.toArray()))},join:ve.join,indexOf:ve.indexOf||function(t,e){for(var i=e||0,n=this.length;i<n;i++)if(this[i]===t)return i;return-1},iterator:function(t,e,i,s){var a,r,l,c,h,u,d,p,f=[],g=this.context,m=this.selector;for("string"==typeof t&&(s=i,i=e,e=t,t=!1),r=0,l=g.length;r<l;r++){var v=new o(g[r]);if("table"===e)(a=i.call(v,g[r],r))!==n&&f.push(a);else if("columns"===e||"rows"===e)(a=i.call(v,g[r],this[r],r))!==n&&f.push(a);else if("column"===e||"column-rows"===e||"row"===e||"cell"===e)for(d=this[r],"column-rows"===e&&(u=xe(g[r],m.opts)),c=0,h=d.length;c<h;c++)p=d[c],(a="cell"===e?i.call(v,g[r],p.row,p.column,r,c):i.call(v,g[r],p,r,c,u))!==n&&f.push(a)}if(f.length||s){var b=new o(g,t?f.concat.apply([],f):f),y=b.selector;return y.rows=m.rows,y.cols=m.cols,y.opts=m.opts,b}return this},lastIndexOf:ve.lastIndexOf||function(t,e){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(t){var e=[];if(ve.map)e=ve.map.call(this,t,this);else for(var i=0,n=this.length;i<n;i++)e.push(t.call(this,this[i],i));return new o(this.context,e)},pluck:function(t){return this.map((function(e){return e[t]}))},pop:ve.pop,push:ve.push,reduce:ve.reduce||function(t,e){return O(this,t,e,0,this.length,1)},reduceRight:ve.reduceRight||function(t,e){return O(this,t,e,this.length-1,-1,-1)},reverse:ve.reverse,selector:null,shift:ve.shift,slice:function(){return new o(this.context,this)},sort:ve.sort,splice:ve.splice,toArray:function(){return ve.slice.call(this)},to$:function(){return t(this)},toJQuery:function(){return t(this)},unique:function(){return new o(this.context,D(this))},unshift:ve.unshift}),o.extend=function(e,i,n){if(n.length&&i&&(i instanceof o||i.__dt_wrapper)){var s,a,r,l=function(t,e,i){return function(){var n=e.apply(t,arguments);return o.extend(n,n,i.methodExt),n}};for(s=0,a=n.length;s<a;s++)i[(r=n[s]).name]="function"==typeof r.val?l(e,r.val,r):t.isPlainObject(r.val)?{}:r.val,i[r.name].__dt_wrapper=!0,o.extend(e,i[r.name],r.propExt)}},o.register=a=function(e,i){if(t.isArray(e))for(var n=0,s=e.length;n<s;n++)o.register(e[n],i);else{var a,r,l,c,h=e.split("."),u=me,d=function(t,e){for(var i=0,n=t.length;i<n;i++)if(t[i].name===e)return t[i];return null};for(a=0,r=h.length;a<r;a++){var p=d(u,l=(c=-1!==h[a].indexOf("()"))?h[a].replace("()",""):h[a]);p||(p={name:l,val:{},methodExt:[],propExt:[]},u.push(p)),a===r-1?p.val=i:u=c?p.methodExt:p.propExt}}},o.registerPlural=r=function(e,i,s){o.register(e,s),o.register(i,(function(){var e=s.apply(this,arguments);return e===this?this:e instanceof o?e.length?t.isArray(e[0])?new o(e.context,e[0]):e[0]:n:e}))};a("tables()",(function(e){return e?new o(function(e,i){if("number"==typeof e)return[i[e]];var n=t.map(i,(function(t,e){return t.nTable}));return t(n).filter(e).map((function(e){var s=t.inArray(this,n);return i[s]})).toArray()}(e,this.context)):this})),a("table()",(function(t){var e=this.tables(t),i=e.context;return i.length?new o(i[0]):e})),r("tables().nodes()","table().node()",(function(){return this.iterator("table",(function(t){return t.nTable}),1)})),r("tables().body()","table().body()",(function(){return this.iterator("table",(function(t){return t.nTBody}),1)})),r("tables().header()","table().header()",(function(){return this.iterator("table",(function(t){return t.nTHead}),1)})),r("tables().footer()","table().footer()",(function(){return this.iterator("table",(function(t){return t.nTFoot}),1)})),r("tables().containers()","table().container()",(function(){return this.iterator("table",(function(t){return t.nTableWrapper}),1)})),a("draw()",(function(t){return this.iterator("table",(function(e){"page"===t?lt(e):("string"==typeof t&&(t="full-hold"!==t),ct(e,!1===t))}))})),a("page()",(function(t){return t===n?this.page.info().page:this.iterator("table",(function(e){Ft(e,t)}))})),a("page.info()",(function(t){if(0===this.context.length)return n;var e=this.context[0],i=e._iDisplayStart,s=e.oFeatures.bPaginate?e._iDisplayLength:-1,o=e.fnRecordsDisplay(),a=-1===s;return{page:a?0:Math.floor(i/s),pages:a?1:Math.ceil(o/s),start:i,end:e.fnDisplayEnd(),length:s,recordsTotal:e.fnRecordsTotal(),recordsDisplay:o,serverSide:"ssp"===ge(e)}})),a("page.len()",(function(t){return t===n?0!==this.context.length?this.context[0]._iDisplayLength:n:this.iterator("table",(function(e){Mt(e,t)}))}));var be=function(t,e,i){if(i){var n=new o(t);n.one("draw",(function(){i(n.ajax.json())}))}if("ssp"==ge(t))ct(t,e);else{jt(t,!0);var s=t.jqXHR;s&&4!==s.readyState&&s.abort(),pt(t,[],(function(i){tt(t);for(var n=vt(t,i),s=0,o=n.length;s<o;s++)B(t,n[s]);ct(t,e),jt(t,!1)}))}};a("ajax.json()",(function(){var t=this.context;if(t.length>0)return t[0].json})),a("ajax.params()",(function(){var t=this.context;if(t.length>0)return t[0].oAjaxData})),a("ajax.reload()",(function(t,e){return this.iterator("table",(function(i){be(i,!1===e,t)}))})),a("ajax.url()",(function(e){var i=this.context;return e===n?0===i.length?n:(i=i[0]).ajax?t.isPlainObject(i.ajax)?i.ajax.url:i.ajax:i.sAjaxSource:this.iterator("table",(function(i){t.isPlainObject(i.ajax)?i.ajax.url=e:i.ajax=e}))})),a("ajax.url().load()",(function(t,e){return this.iterator("table",(function(i){be(i,!1===e,t)}))}));var ye=function(e,i,o,a,r){var l,c,h,u,d,p,f=[],g=typeof i;for(i&&"string"!==g&&"function"!==g&&i.length!==n||(i=[i]),h=0,u=i.length;h<u;h++)for(d=0,p=(c=i[h]&&i[h].split&&!i[h].match(/[\[\(:]/)?i[h].split(","):[i[h]]).length;d<p;d++)(l=o("string"==typeof c[d]?t.trim(c[d]):c[d]))&&l.length&&(f=f.concat(l));var m=s.selector[e];if(m.length)for(h=0,u=m.length;h<u;h++)f=m[h](a,r,f);return D(f)},_e=function(e){return e||(e={}),e.filter&&e.search===n&&(e.search=e.filter),t.extend({search:"none",order:"current",page:"all"},e)},we=function(t){for(var e=0,i=t.length;e<i;e++)if(t[e].length>0)return t[0]=t[e],t[0].length=1,t.length=1,t.context=[t.context[e]],t;return t.length=0,t},xe=function(e,i){var n,s=[],o=e.aiDisplay,a=e.aiDisplayMaster,r=i.search,l=i.order,c=i.page;if("ssp"==ge(e))return"removed"===r?[]:x(0,a.length);if("current"==c)for(u=e._iDisplayStart,d=e.fnDisplayEnd();u<d;u++)s.push(o[u]);else if("current"==l||"applied"==l){if("none"==r)s=a.slice();else if("applied"==r)s=o.slice();else if("removed"==r){for(var h={},u=0,d=o.length;u<d;u++)h[o[u]]=null;s=t.map(a,(function(t){return h.hasOwnProperty(t)?null:t}))}}else if("index"==l||"original"==l)for(u=0,d=e.aoData.length;u<d;u++)("none"==r||-1===(n=t.inArray(u,o))&&"removed"==r||n>=0&&"applied"==r)&&s.push(u);return s};a("rows()",(function(e,i){e===n?e="":t.isPlainObject(e)&&(i=e,e=""),i=_e(i);var s=this.iterator("table",(function(s){return function(e,i,s){var o;return ye("row",i,(function(i){var a=m(i),r=e.aoData;if(null!==a&&!s)return[a];if(o||(o=xe(e,s)),null!==a&&-1!==t.inArray(a,o))return[a];if(null===i||i===n||""===i)return o;if("function"==typeof i)return t.map(o,(function(t){var e=r[t];return i(t,e._aData,e.nTr)?t:null}));if(i.nodeName){var l=i._DT_RowIndex,c=i._DT_CellIndex;if(l!==n)return r[l]&&r[l].nTr===i?[l]:[];if(c)return r[c.row]&&r[c.row].nTr===i?[c.row]:[];var h=t(i).closest("*[data-dt-row]");return h.length?[h.data("dt-row")]:[]}if("string"==typeof i&&"#"===i.charAt(0)){var u=e.aIds[i.replace(/^#/,"")];if(u!==n)return[u.idx]}var d=C(w(e.aoData,o,"nTr"));return t(d).filter(i).map((function(){return this._DT_RowIndex})).toArray()}),e,s)}(s,e,i)}),1);return s.selector.rows=e,s.selector.opts=i,s})),a("rows().nodes()",(function(){return this.iterator("row",(function(t,e){return t.aoData[e].nTr||n}),1)})),a("rows().data()",(function(){return this.iterator(!0,"rows",(function(t,e){return w(t.aoData,e,"_aData")}),1)})),r("rows().cache()","row().cache()",(function(t){return this.iterator("row",(function(e,i){var n=e.aoData[i];return"search"===t?n._aFilterData:n._aSortData}),1)})),r("rows().invalidate()","row().invalidate()",(function(t){return this.iterator("row",(function(e,i){it(e,i,t)}))})),r("rows().indexes()","row().index()",(function(){return this.iterator("row",(function(t,e){return e}),1)})),r("rows().ids()","row().id()",(function(t){for(var e=[],i=this.context,n=0,s=i.length;n<s;n++)for(var a=0,r=this[n].length;a<r;a++){var l=i[n].rowIdFn(i[n].aoData[this[n][a]]._aData);e.push((!0===t?"#":"")+l)}return new o(i,e)})),r("rows().remove()","row().remove()",(function(){var t=this;return this.iterator("row",(function(e,i,s){var o,a,r,l,c,h,u=e.aoData,d=u[i];for(u.splice(i,1),o=0,a=u.length;o<a;o++)if(h=(c=u[o]).anCells,null!==c.nTr&&(c.nTr._DT_RowIndex=o),null!==h)for(r=0,l=h.length;r<l;r++)h[r]._DT_CellIndex.row=o;et(e.aiDisplayMaster,i),et(e.aiDisplay,i),et(t[s],i,!1),e._iRecordsDisplay>0&&e._iRecordsDisplay--,pe(e);var p=e.rowIdFn(d._aData);p!==n&&delete e.aIds[p]})),this.iterator("table",(function(t){for(var e=0,i=t.aoData.length;e<i;e++)t.aoData[e].idx=e})),this})),a("rows.add()",(function(e){var i=this.iterator("table",(function(t){var i,n,s,o=[];for(n=0,s=e.length;n<s;n++)(i=e[n]).nodeName&&"TR"===i.nodeName.toUpperCase()?o.push(U(t,i)[0]):o.push(B(t,i));return o}),1),n=this.rows(-1);return n.pop(),t.merge(n,i),n})),a("row()",(function(t,e){return we(this.rows(t,e))})),a("row().data()",(function(e){var i=this.context;if(e===n)return i.length&&this.length?i[0].aoData[this[0]]._aData:n;var s=i[0].aoData[this[0]];return s._aData=e,t.isArray(e)&&s.nTr.id&&Q(i[0].rowId)(e,s.nTr.id),it(i[0],this[0],"data"),this})),a("row().node()",(function(){var t=this.context;return t.length&&this.length&&t[0].aoData[this[0]].nTr||null})),a("row.add()",(function(e){e instanceof t&&e.length&&(e=e[0]);var i=this.iterator("table",(function(t){return e.nodeName&&"TR"===e.nodeName.toUpperCase()?U(t,e)[0]:B(t,e)}));return this.row(i[0])}));var Ce=function(t,e){var i=t.context;if(i.length){var s=i[0].aoData[e!==n?e:t[0]];s&&s._details&&(s._details.remove(),s._detailsShow=n,s._details=n)}},Se=function(t,e){var i=t.context;if(i.length&&t.length){var n=i[0].aoData[t[0]];n._details&&(n._detailsShow=e,e?n._details.insertAfter(n.nTr):n._details.detach(),De(i[0]))}},De=function(t){var e=new o(t),i=t.aoData;e.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details"),_(i,"_details").length>0&&(e.on("draw.dt.DT_details",(function(n,s){t===s&&e.rows({page:"current"}).eq(0).each((function(t){var e=i[t];e._detailsShow&&e._details.insertAfter(e.nTr)}))})),e.on("column-visibility.dt.DT_details",(function(e,n,s,o){if(t===n)for(var a,r=W(n),l=0,c=i.length;l<c;l++)(a=i[l])._details&&a._details.children("td[colspan]").attr("colspan",r)})),e.on("destroy.dt.DT_details",(function(n,s){if(t===s)for(var o=0,a=i.length;o<a;o++)i[o]._details&&Ce(e,o)})))};a("row().child()",(function(e,i){var s=this.context;return e===n?s.length&&this.length?s[0].aoData[this[0]]._details:n:(!0===e?this.child.show():!1===e?Ce(this):s.length&&this.length&&function(e,i,n,s){var o=[],a=function(i,n){if(t.isArray(i)||i instanceof t)for(var s=0,r=i.length;s<r;s++)a(i[s],n);else if(i.nodeName&&"tr"===i.nodeName.toLowerCase())o.push(i);else{var l=t("<tr><td/></tr>").addClass(n);t("td",l).addClass(n).html(i)[0].colSpan=W(e),o.push(l[0])}};a(n,s),i._details&&i._details.detach(),i._details=t(o),i._detailsShow&&i._details.insertAfter(i.nTr)}(s[0],s[0].aoData[this[0]],e,i),this)})),a(["row().child.show()","row().child().show()"],(function(t){return Se(this,!0),this})),a(["row().child.hide()","row().child().hide()"],(function(){return Se(this,!1),this})),a(["row().child.remove()","row().child().remove()"],(function(){return Ce(this),this})),a("row().child.isShown()",(function(){var t=this.context;return t.length&&this.length&&t[0].aoData[this[0]]._detailsShow||!1}));var Te=/^([^:]+):(name|visIdx|visible)$/,ke=function(t,e,i,n,s){for(var o=[],a=0,r=s.length;a<r;a++)o.push(V(t,s[a],e));return o};a("columns()",(function(e,i){e===n?e="":t.isPlainObject(e)&&(i=e,e=""),i=_e(i);var s=this.iterator("table",(function(n){return function(e,i,n){var s=e.aoColumns,o=_(s,"sName"),a=_(s,"nTh");return ye("column",i,(function(i){var r=m(i);if(""===i)return x(s.length);if(null!==r)return[r>=0?r:s.length+r];if("function"==typeof i){var l=xe(e,n);return t.map(s,(function(t,n){return i(n,ke(e,n,0,0,l),a[n])?n:null}))}var c="string"==typeof i?i.match(Te):"";if(c)switch(c[2]){case"visIdx":case"visible":var h=parseInt(c[1],10);if(h<0){var u=t.map(s,(function(t,e){return t.bVisible?e:null}));return[u[u.length+h]]}return[R(e,h)];case"name":return t.map(o,(function(t,e){return t===c[1]?e:null}));default:return[]}if(i.nodeName&&i._DT_CellIndex)return[i._DT_CellIndex.column];var d=t(a).filter(i).map((function(){return t.inArray(this,a)})).toArray();if(d.length||!i.nodeName)return d;var p=t(i).closest("*[data-dt-column]");return p.length?[p.data("dt-column")]:[]}),e,n)}(n,e,i)}),1);return s.selector.cols=e,s.selector.opts=i,s})),r("columns().header()","column().header()",(function(t,e){return this.iterator("column",(function(t,e){return t.aoColumns[e].nTh}),1)})),r("columns().footer()","column().footer()",(function(t,e){return this.iterator("column",(function(t,e){return t.aoColumns[e].nTf}),1)})),r("columns().data()","column().data()",(function(){return this.iterator("column-rows",ke,1)})),r("columns().dataSrc()","column().dataSrc()",(function(){return this.iterator("column",(function(t,e){return t.aoColumns[e].mData}),1)})),r("columns().cache()","column().cache()",(function(t){return this.iterator("column-rows",(function(e,i,n,s,o){return w(e.aoData,o,"search"===t?"_aFilterData":"_aSortData",i)}),1)})),r("columns().nodes()","column().nodes()",(function(){return this.iterator("column-rows",(function(t,e,i,n,s){return w(t.aoData,s,"anCells",e)}),1)})),r("columns().visible()","column().visible()",(function(e,i){var s=this.iterator("column",(function(i,s){if(e===n)return i.aoColumns[s].bVisible;!function(e,i,s){var o,a,r,l,c=e.aoColumns,h=c[i],u=e.aoData;if(s===n)return h.bVisible;if(h.bVisible!==s){if(s){var d=t.inArray(!0,_(c,"bVisible"),i+1);for(a=0,r=u.length;a<r;a++)l=u[a].nTr,o=u[a].anCells,l&&l.insertBefore(o[i],o[d]||null)}else t(_(e.aoData,"anCells",i)).detach();h.bVisible=s,rt(e,e.aoHeader),rt(e,e.aoFooter),e.aiDisplay.length||t(e.nTBody).find("td[colspan]").attr("colspan",W(e)),se(e)}}(i,s,e)}));return e!==n&&(this.iterator("column",(function(t,n){de(t,null,"column-visibility",[t,n,e,i])})),(i===n||i)&&this.columns.adjust()),s})),r("columns().indexes()","column().index()",(function(t){return this.iterator("column",(function(e,i){return"visible"===t?F(e,i):i}),1)})),a("columns.adjust()",(function(){return this.iterator("table",(function(t){H(t)}),1)})),a("column.index()",(function(t,e){if(0!==this.context.length){var i=this.context[0];if("fromVisible"===t||"toData"===t)return R(i,e);if("fromData"===t||"toVisible"===t)return F(i,e)}})),a("column()",(function(t,e){return we(this.columns(t,e))}));a("cells()",(function(e,i,s){if(t.isPlainObject(e)&&(e.row===n?(s=e,e=null):(s=i,i=null)),t.isPlainObject(i)&&(s=i,i=null),null===i||i===n)return this.iterator("table",(function(i){return function(e,i,s){var o,a,r,l,c,h,u,d=e.aoData,p=xe(e,s),f=C(w(d,p,"anCells")),g=t([].concat.apply([],f)),m=e.aoColumns.length;return ye("cell",i,(function(i){var s="function"==typeof i;if(null===i||i===n||s){for(a=[],r=0,l=p.length;r<l;r++)for(o=p[r],c=0;c<m;c++)h={row:o,column:c},s?(u=d[o],i(h,V(e,o,c),u.anCells?u.anCells[c]:null)&&a.push(h)):a.push(h);return a}if(t.isPlainObject(i))return i.column!==n&&i.row!==n&&-1!==t.inArray(i.row,p)?[i]:[];var f=g.filter(i).map((function(t,e){return{row:e._DT_CellIndex.row,column:e._DT_CellIndex.column}})).toArray();return f.length||!i.nodeName?f:(u=t(i).closest("*[data-dt-row]")).length?[{row:u.data("dt-row"),column:u.data("dt-column")}]:[]}),e,s)}(i,e,_e(s))}));var o,a,r,l,c,h=this.columns(i),u=this.rows(e);this.iterator("table",(function(t,e){for(o=[],a=0,r=u[e].length;a<r;a++)for(l=0,c=h[e].length;l<c;l++)o.push({row:u[e][a],column:h[e][l]})}),1);var d=this.cells(o,s);return t.extend(d.selector,{cols:i,rows:e,opts:s}),d})),r("cells().nodes()","cell().node()",(function(){return this.iterator("cell",(function(t,e,i){var s=t.aoData[e];return s&&s.anCells?s.anCells[i]:n}),1)})),a("cells().data()",(function(){return this.iterator("cell",(function(t,e,i){return V(t,e,i)}),1)})),r("cells().cache()","cell().cache()",(function(t){return t="search"===t?"_aFilterData":"_aSortData",this.iterator("cell",(function(e,i,n){return e.aoData[i][t][n]}),1)})),r("cells().render()","cell().render()",(function(t){return this.iterator("cell",(function(e,i,n){return V(e,i,n,t)}),1)})),r("cells().indexes()","cell().index()",(function(){return this.iterator("cell",(function(t,e,i){return{row:e,column:i,columnVisible:F(t,i)}}),1)})),r("cells().invalidate()","cell().invalidate()",(function(t){return this.iterator("cell",(function(e,i,n){it(e,i,t,n)}))})),a("cell()",(function(t,e,i){return we(this.cells(t,e,i))})),a("cell().data()",(function(t){var e=this.context,i=this[0];return t===n?e.length&&i.length?V(e[0],i[0].row,i[0].column):n:(Y(e[0],i[0].row,i[0].column,t),it(e[0],i[0].row,"data",i[0].column),this)})),a("order()",(function(e,i){var s=this.context;return e===n?0!==s.length?s[0].aaSorting:n:("number"==typeof e?e=[[e,i]]:e.length&&!t.isArray(e[0])&&(e=Array.prototype.slice.call(arguments)),this.iterator("table",(function(t){t.aaSorting=e.slice()})))})),a("order.listener()",(function(t,e,i){return this.iterator("table",(function(n){ee(n,t,e,i)}))})),a("order.fixed()",(function(e){if(!e){var i=this.context,s=i.length?i[0].aaSortingFixed:n;return t.isArray(s)?{pre:s}:s}return this.iterator("table",(function(i){i.aaSortingFixed=t.extend(!0,{},e)}))})),a(["columns().order()","column().order()"],(function(e){var i=this;return this.iterator("table",(function(n,s){var o=[];t.each(i[s],(function(t,i){o.push([i,e])})),n.aaSorting=o}))})),a("search()",(function(e,i,s,o){var a=this.context;return e===n?0!==a.length?a[0].oPreviousSearch.sSearch:n:this.iterator("table",(function(n){n.oFeatures.bFilter&&yt(n,t.extend({},n.oPreviousSearch,{sSearch:e+"",bRegex:null!==i&&i,bSmart:null===s||s,bCaseInsensitive:null===o||o}),1)}))})),r("columns().search()","column().search()",(function(e,i,s,o){return this.iterator("column",(function(a,r){var l=a.aoPreSearchCols;if(e===n)return l[r].sSearch;a.oFeatures.bFilter&&(t.extend(l[r],{sSearch:e+"",bRegex:null!==i&&i,bSmart:null===s||s,bCaseInsensitive:null===o||o}),yt(a,a.oPreviousSearch,1))}))})),a("state()",(function(){return this.context.length?this.context[0].oSavedState:null})),a("state.clear()",(function(){return this.iterator("table",(function(t){t.fnStateSaveCallback.call(t.oInstance,t,{})}))})),a("state.loaded()",(function(){return this.context.length?this.context[0].oLoadedState:null})),a("state.save()",(function(){return this.iterator("table",(function(t){se(t)}))})),l.versionCheck=l.fnVersionCheck=function(t){for(var e,i,n=l.version.split("."),s=t.split("."),o=0,a=s.length;o<a;o++)if((e=parseInt(n[o],10)||0)!==(i=parseInt(s[o],10)||0))return e>i;return!0},l.isDataTable=l.fnIsDataTable=function(e){var i=t(e).get(0),n=!1;return e instanceof l.Api||(t.each(l.settings,(function(e,s){var o=s.nScrollHead?t("table",s.nScrollHead)[0]:null,a=s.nScrollFoot?t("table",s.nScrollFoot)[0]:null;s.nTable!==i&&o!==i&&a!==i||(n=!0)})),n)},l.tables=l.fnTables=function(e){var i=!1;t.isPlainObject(e)&&(i=e.api,e=e.visible);var n=t.map(l.settings,(function(i){if(!e||e&&t(i.nTable).is(":visible"))return i.nTable}));return i?new o(n):n},l.camelToHungarian=k,a("$()",(function(e,i){var n=this.rows(i).nodes(),s=t(n);return t([].concat(s.filter(e).toArray(),s.find(e).toArray()))})),t.each(["on","one","off"],(function(e,i){a(i+"()",(function(){var e=Array.prototype.slice.call(arguments);e[0]=t.map(e[0].split(/\s/),(function(t){return t.match(/\.dt\b/)?t:t+".dt"})).join(" ");var n=t(this.tables().nodes());return n[i].apply(n,e),this}))})),a("clear()",(function(){return this.iterator("table",(function(t){tt(t)}))})),a("settings()",(function(){return new o(this.context,this.context)})),a("init()",(function(){var t=this.context;return t.length?t[0].oInit:null})),a("data()",(function(){return this.iterator("table",(function(t){return _(t.aoData,"_aData")})).flatten()})),a("destroy()",(function(i){return i=i||!1,this.iterator("table",(function(n){var s,a=n.nTableWrapper.parentNode,r=n.oClasses,c=n.nTable,h=n.nTBody,u=n.nTHead,d=n.nTFoot,p=t(c),f=t(h),g=t(n.nTableWrapper),m=t.map(n.aoData,(function(t){return t.nTr}));n.bDestroying=!0,de(n,"aoDestroyCallback","destroy",[n]),i||new o(n).columns().visible(!0),g.off(".DT").find(":not(tbody *)").off(".DT"),t(e).off(".DT-"+n.sInstance),c!=u.parentNode&&(p.children("thead").detach(),p.append(u)),d&&c!=d.parentNode&&(p.children("tfoot").detach(),p.append(d)),n.aaSorting=[],n.aaSortingFixed=[],ie(n),t(m).removeClass(n.asStripeClasses.join(" ")),t("th, td",u).removeClass(r.sSortable+" "+r.sSortableAsc+" "+r.sSortableDesc+" "+r.sSortableNone),f.children().detach(),f.append(m);var v=i?"remove":"detach";p[v](),g[v](),!i&&a&&(a.insertBefore(c,n.nTableReinsertBefore),p.css("width",n.sDestroyWidth).removeClass(r.sTable),(s=n.asDestroyStripes.length)&&f.children().each((function(e){t(this).addClass(n.asDestroyStripes[e%s])})));var b=t.inArray(n,l.settings);-1!==b&&l.settings.splice(b,1)}))})),t.each(["column","row","cell"],(function(t,e){a(e+"s().every()",(function(t){var i=this.selector.opts,s=this;return this.iterator(e,(function(o,a,r,l,c){t.call(s[e](a,"cell"===e?r:i,"cell"===e?i:n),a,r,l,c)}))}))})),a("i18n()",(function(e,i,s){var o=this.context[0],a=J(e)(o.oLanguage);return a===n&&(a=i),s!==n&&t.isPlainObject(a)&&(a=a[s]!==n?a[s]:a._),a.replace("%d",s)})),l.version="1.10.18",l.settings=[],l.models={},l.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0},l.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1},l.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null},l.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(t){try{return JSON.parse((-1===t.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+t.sInstance+"_"+location.pathname))}catch(t){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(t,e){try{(-1===t.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+t.sInstance+"_"+location.pathname,JSON.stringify(e))}catch(t){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:t.extend({},l.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"},T(l.defaults),l.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null},T(l.defaults.column),l.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:n,oAjaxData:n,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==ge(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==ge(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var t=this._iDisplayLength,e=this._iDisplayStart,i=e+t,n=this.aiDisplay.length,s=this.oFeatures,o=s.bPaginate;return s.bServerSide?!1===o||-1===t?e+n:Math.min(e+t,this._iRecordsDisplay):!o||i>n||-1===t?n:i},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null},l.ext=s={buttons:{},classes:{},builder:"-source-",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:l.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:l.version},t.extend(s,{afnFiltering:s.search,aTypes:s.type.detect,ofnSearch:s.type.search,oSort:s.type.order,afnSortData:s.order,aoFeatures:s.feature,oApi:s.internal,oStdClasses:s.classes,oPagination:s.pager}),t.extend(l.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""});var Ie=l.ext.pager;function Ae(t,e){var i=[],n=Ie.numbers_length,s=Math.floor(n/2);return e<=n?i=x(0,e):t<=s?((i=x(0,n-2)).push("ellipsis"),i.push(e-1)):t>=e-1-s?((i=x(e-(n-2),e)).splice(0,0,"ellipsis"),i.splice(0,0,0)):((i=x(t-s+2,t+s-1)).push("ellipsis"),i.push(e-1),i.splice(0,0,"ellipsis"),i.splice(0,0,0)),i.DT_el="span",i}t.extend(Ie,{simple:function(t,e){return["previous","next"]},full:function(t,e){return["first","previous","next","last"]},numbers:function(t,e){return[Ae(t,e)]},simple_numbers:function(t,e){return["previous",Ae(t,e),"next"]},full_numbers:function(t,e){return["first","previous",Ae(t,e),"next","last"]},first_last_numbers:function(t,e){return["first",Ae(t,e),"last"]},_numbers:Ae,numbers_length:7}),t.extend(!0,l.ext.renderer,{pageButton:{_:function(e,s,o,a,r,l){var c,h,u,d=e.oClasses,p=e.oLanguage.oPaginate,f=e.oLanguage.oAria.paginate||{},g=0,m=function(i,n){var s,a,u,v=function(t){Ft(e,t.data.action,!0)};for(s=0,a=n.length;s<a;s++)if(u=n[s],t.isArray(u)){var b=t("<"+(u.DT_el||"div")+"/>").appendTo(i);m(b,u)}else{switch(c=null,h="",u){case"ellipsis":i.append('<span class="ellipsis">&#x2026;</span>');break;case"first":c=p.sFirst,h=u+(r>0?"":" "+d.sPageButtonDisabled);break;case"previous":c=p.sPrevious,h=u+(r>0?"":" "+d.sPageButtonDisabled);break;case"next":c=p.sNext,h=u+(r<l-1?"":" "+d.sPageButtonDisabled);break;case"last":c=p.sLast,h=u+(r<l-1?"":" "+d.sPageButtonDisabled);break;default:c=u+1,h=r===u?d.sPageButtonActive:""}null!==c&&(he(t("<a>",{class:d.sPageButton+" "+h,"aria-controls":e.sTableId,"aria-label":f[u],"data-dt-idx":g,tabindex:e.iTabIndex,id:0===o&&"string"==typeof u?e.sTableId+"_"+u:null}).html(c).appendTo(i),{action:u},v),g++)}};try{u=t(s).find(i.activeElement).data("dt-idx")}catch(t){}m(t(s).empty(),a),u!==n&&t(s).find("[data-dt-idx="+u+"]").focus()}}}),t.extend(l.ext.type.detect,[function(t,e){var i=e.oLanguage.sDecimal;return b(t,i)?"num"+i:null},function(t,e){if(t&&!(t instanceof Date)&&!d.test(t))return null;var i=Date.parse(t);return null!==i&&!isNaN(i)||g(t)?"date":null},function(t,e){var i=e.oLanguage.sDecimal;return b(t,i,!0)?"num-fmt"+i:null},function(t,e){var i=e.oLanguage.sDecimal;return y(t,i)?"html-num"+i:null},function(t,e){var i=e.oLanguage.sDecimal;return y(t,i,!0)?"html-num-fmt"+i:null},function(t,e){return g(t)||"string"==typeof t&&-1!==t.indexOf("<")?"html":null}]),t.extend(l.ext.type.search,{html:function(t){return g(t)?t:"string"==typeof t?t.replace(h," ").replace(u,""):""},string:function(t){return g(t)?t:"string"==typeof t?t.replace(h," "):t}});var Ee=function(t,e,i,n){return 0===t||t&&"-"!==t?(e&&(t=v(t,e)),t.replace&&(i&&(t=t.replace(i,"")),n&&(t=t.replace(n,""))),1*t):-1/0};function Pe(e){t.each({num:function(t){return Ee(t,e)},"num-fmt":function(t){return Ee(t,e,f)},"html-num":function(t){return Ee(t,e,u)},"html-num-fmt":function(t){return Ee(t,e,u,f)}},(function(t,i){s.type.order[t+e+"-pre"]=i,t.match(/^html\-/)&&(s.type.search[t+e]=s.type.search.html)}))}t.extend(s.type.order,{"date-pre":function(t){var e=Date.parse(t);return isNaN(e)?-1/0:e},"html-pre":function(t){return g(t)?"":t.replace?t.replace(/<.*?>/g,"").toLowerCase():t+""},"string-pre":function(t){return g(t)?"":"string"==typeof t?t.toLowerCase():t.toString?t.toString():""},"string-asc":function(t,e){return t<e?-1:t>e?1:0},"string-desc":function(t,e){return t<e?1:t>e?-1:0}}),Pe(""),t.extend(!0,l.ext.renderer,{header:{_:function(e,i,n,s){t(e.nTable).on("order.dt.DT",(function(t,o,a,r){if(e===o){var l=n.idx;i.removeClass(n.sSortingClass+" "+s.sSortAsc+" "+s.sSortDesc).addClass("asc"==r[l]?s.sSortAsc:"desc"==r[l]?s.sSortDesc:n.sSortingClass)}}))},jqueryui:function(e,i,n,s){t("<div/>").addClass(s.sSortJUIWrapper).append(i.contents()).append(t("<span/>").addClass(s.sSortIcon+" "+n.sSortingClassJUI)).appendTo(i),t(e.nTable).on("order.dt.DT",(function(t,o,a,r){if(e===o){var l=n.idx;i.removeClass(s.sSortAsc+" "+s.sSortDesc).addClass("asc"==r[l]?s.sSortAsc:"desc"==r[l]?s.sSortDesc:n.sSortingClass),i.find("span."+s.sSortIcon).removeClass(s.sSortJUIAsc+" "+s.sSortJUIDesc+" "+s.sSortJUI+" "+s.sSortJUIAscAllowed+" "+s.sSortJUIDescAllowed).addClass("asc"==r[l]?s.sSortJUIAsc:"desc"==r[l]?s.sSortJUIDesc:n.sSortingClassJUI)}}))}}});var Ne=function(t){return"string"==typeof t?t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):t};function Oe(t){return function(){var e=[ae(this[l.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return l.ext.internal[t].apply(this,e)}}return l.render={number:function(t,e,i,n,s){return{display:function(o){if("number"!=typeof o&&"string"!=typeof o)return o;var a=o<0?"-":"",r=parseFloat(o);if(isNaN(r))return Ne(o);r=r.toFixed(i),o=Math.abs(r);var l=parseInt(o,10),c=i?e+(o-l).toFixed(i).substring(2):"";return a+(n||"")+l.toString().replace(/\B(?=(\d{3})+(?!\d))/g,t)+c+(s||"")}}},text:function(){return{display:Ne}}},t.extend(l.ext.internal,{_fnExternApiFunc:Oe,_fnBuildAjax:pt,_fnAjaxUpdate:ft,_fnAjaxParameters:gt,_fnAjaxUpdateDraw:mt,_fnAjaxDataSrc:vt,_fnAddColumn:L,_fnColumnOptions:M,_fnAdjustColumnSizing:H,_fnVisibleToColumnIndex:R,_fnColumnIndexToVisible:F,_fnVisbleColumns:W,_fnGetColumns:j,_fnColumnTypes:z,_fnApplyColumnDefs:$,_fnHungarianMap:T,_fnCamelToHungarian:k,_fnLanguageCompat:I,_fnBrowserDetect:N,_fnAddData:B,_fnAddTr:U,_fnNodeToDataIndex:function(t,e){return e._DT_RowIndex!==n?e._DT_RowIndex:null},_fnNodeToColumnIndex:q,_fnGetCellData:V,_fnSetCellData:Y,_fnSplitObjNotation:K,_fnGetObjectDataFn:J,_fnSetObjectDataFn:Q,_fnGetDataMaster:Z,_fnClearTable:tt,_fnDeleteIndex:et,_fnInvalidate:it,_fnGetRowElements:nt,_fnCreateTr:st,_fnBuildHead:at,_fnDrawHead:rt,_fnDraw:lt,_fnReDraw:ct,_fnAddOptionsHtml:ht,_fnDetectHeader:ut,_fnGetUniqueThs:dt,_fnFeatureHtmlFilter:bt,_fnFilterComplete:yt,_fnFilterCustom:_t,_fnFilterColumn:wt,_fnFilter:xt,_fnFilterCreateSearch:Ct,_fnEscapeRegex:St,_fnFilterData:kt,_fnFeatureHtmlInfo:Et,_fnUpdateInfo:Pt,_fnInfoMacros:Nt,_fnInitialise:Ot,_fnInitComplete:Lt,_fnLengthChange:Mt,_fnFeatureHtmlLength:Ht,_fnFeatureHtmlPaginate:Rt,_fnPageChange:Ft,_fnFeatureHtmlProcessing:Wt,_fnProcessingDisplay:jt,_fnFeatureHtmlTable:zt,_fnScrollDraw:$t,_fnApplyToChildren:Bt,_fnCalculateColumnWidths:qt,_fnThrottle:Vt,_fnConvertToWidth:Yt,_fnGetWidestNode:Xt,_fnGetMaxLenString:Gt,_fnStringToCss:Kt,_fnSortFlatten:Jt,_fnSort:Qt,_fnSortAria:Zt,_fnSortListener:te,_fnSortAttachListener:ee,_fnSortingClasses:ie,_fnSortData:ne,_fnSaveState:se,_fnLoadState:oe,_fnSettingsFromNode:ae,_fnLog:re,_fnMap:le,_fnBindAction:he,_fnCallbackReg:ue,_fnCallbackFire:de,_fnLengthOverflow:pe,_fnRenderer:fe,_fnDataSource:ge,_fnRowAttributes:ot,_fnExtend:ce,_fnCalculateEnd:function(){}}),t.fn.dataTable=l,l.$=t,t.fn.dataTableSettings=l.settings,t.fn.dataTableExt=l.ext,t.fn.DataTable=function(e){return t(this).dataTable(e).api()},t.each(l,(function(e,i){t.fn.DataTable[e]=i})),t.fn.dataTable}(t,window,document)}.apply(e,n))||(t.exports=s)}()},aRwX:function(t,e,i){var n,s;void 0===this&&void 0!==window&&window,n=[i("EVdn")],void 0===(s=function(t){t.fn.selectpicker.defaults={noneSelectedText:"Nada selecionado",noneResultsText:"Nada encontrado contendo {0}",countSelectedText:"Selecionado {0} de {1}",maxOptionsText:["Limite excedido (máx. {n} {var})","Limite do grupo excedido (máx. {n} {var})",["itens","item"]],multipleSeparator:", ",selectAllText:"Selecionar Todos",deselectAllText:"Desmarcar Todos"}}.apply(e,n))||(t.exports=s)},n1zN:function(t,e,i){(function(t,e){if(void 0===e)throw new Error("AdminLTE requires jQuery");t.AdminLTE={},t.AdminLTE.options={navbarMenuSlimscroll:!0,navbarMenuSlimscrollWidth:"3px",navbarMenuHeight:"200px",animationSpeed:500,sidebarToggleSelector:"[data-toggle='offcanvas']",sidebarPushMenu:!0,sidebarSlimScroll:!0,sidebarExpandOnHover:!1,enableBoxRefresh:!0,enableBSToppltip:!0,BSTooltipSelector:"[data-toggle='tooltip']",enableFastclick:!0,enableControlSidebar:!0,controlSidebarOptions:{toggleBtnSelector:"[data-toggle='control-sidebar']",selector:".control-sidebar",slide:!0},enableBoxWidget:!0,boxWidgetOptions:{boxWidgetIcons:{collapse:"fa-minus",open:"fa-plus",remove:"fa-times"},boxWidgetSelectors:{remove:'[data-widget="remove"]',collapse:'[data-widget="collapse"]'}},directChat:{enable:!0,contactToggleSelector:'[data-widget="chat-pane-toggle"]'},colors:{lightBlue:"#3c8dbc",red:"#f56954",green:"#00a65a",aqua:"#00c0ef",yellow:"#f39c12",blue:"#0073b7",navy:"#001F3F",teal:"#39CCCC",olive:"#3D9970",lime:"#01FF70",orange:"#FF851B",fuchsia:"#F012BE",purple:"#8E24AA",maroon:"#D81B60",black:"#222222",gray:"#d2d6de"},screenSizes:{xs:480,sm:768,md:992,lg:1200}},t((function(){"use strict";t("body").removeClass("hold-transition"),"undefined"!=typeof AdminLTEOptions&&t.extend(!0,t.AdminLTE.options,AdminLTEOptions);var e=t.AdminLTE.options;(function(){"use strict";t.AdminLTE.layout={activate:function(){var e=this;e.fix(),e.fixSidebar(),t(window,".wrapper").resize((function(){e.fix(),e.fixSidebar()}))},fix:function(){var e=t(".main-header").outerHeight()+t(".main-footer").outerHeight(),i=t(window).height(),n=t(".sidebar").height();if(t("body").hasClass("fixed"))t(".content-wrapper, .right-side").css("min-height",i-t(".main-footer").outerHeight());else{var s;i>=n?(t(".content-wrapper, .right-side").css("min-height",i-e),s=i-e):(t(".content-wrapper, .right-side").css("min-height",n),s=n);var o=t(t.AdminLTE.options.controlSidebarOptions.selector);void 0!==o&&o.height()>s&&t(".content-wrapper, .right-side").css("min-height",o.height())}},fixSidebar:function(){return t("body").hasClass("fixed")?(void 0===t.fn.slimScroll&&window.console&&window.console.error("Error: the fixed layout requires the slimscroll plugin!"),void(t.AdminLTE.options.sidebarSlimScroll&&void 0!==t.fn.slimScroll&&(t(".sidebar").slimScroll({destroy:!0}).height("auto"),t(".sidebar").slimscroll({height:t(window).height()-t(".main-header").height()+"px",color:"rgba(0,0,0,0.2)",size:"3px"})))):void(void 0!==t.fn.slimScroll&&t(".sidebar").slimScroll({destroy:!0}).height("auto"))}},t.AdminLTE.pushMenu={activate:function(e){var i=t.AdminLTE.options.screenSizes;t(e).on("click",(function(e){e.preventDefault(),t(window).width()>i.sm-1?t("body").hasClass("sidebar-collapse")?t("body").removeClass("sidebar-collapse").trigger("expanded.pushMenu"):t("body").addClass("sidebar-collapse").trigger("collapsed.pushMenu"):t("body").hasClass("sidebar-open")?t("body").removeClass("sidebar-open").removeClass("sidebar-collapse").trigger("collapsed.pushMenu"):t("body").addClass("sidebar-open").trigger("expanded.pushMenu")})),t(".content-wrapper").click((function(){t(window).width()<=i.sm-1&&t("body").hasClass("sidebar-open")&&t("body").removeClass("sidebar-open")})),(t.AdminLTE.options.sidebarExpandOnHover||t("body").hasClass("fixed")&&t("body").hasClass("sidebar-mini"))&&this.expandOnHover()},expandOnHover:function(){var e=this,i=t.AdminLTE.options.screenSizes.sm-1;t(".main-sidebar").hover((function(){t("body").hasClass("sidebar-mini")&&t("body").hasClass("sidebar-collapse")&&t(window).width()>i&&e.expand()}),(function(){t("body").hasClass("sidebar-mini")&&t("body").hasClass("sidebar-expanded-on-hover")&&t(window).width()>i&&e.collapse()}))},expand:function(){t("body").removeClass("sidebar-collapse").addClass("sidebar-expanded-on-hover")},collapse:function(){t("body").hasClass("sidebar-expanded-on-hover")&&t("body").removeClass("sidebar-expanded-on-hover").addClass("sidebar-collapse")}},t.AdminLTE.tree=function(e){var i=this,n=t.AdminLTE.options.animationSpeed;t(document).on("click",e+" li a",(function(e){var s=t(this),o=s.next();if(o.is(".treeview-menu")&&o.is(":visible"))o.slideUp(n,(function(){o.removeClass("menu-open")})),o.parent("li").removeClass("active");else if(o.is(".treeview-menu")&&!o.is(":visible")){var a=s.parents("ul").first();a.find("ul:visible").slideUp(n).removeClass("menu-open");var r=s.parent("li");o.slideDown(n,(function(){o.addClass("menu-open"),a.find("li.active").removeClass("active"),r.addClass("active"),i.layout.fix()}))}o.is(".treeview-menu")&&e.preventDefault()}))},t.AdminLTE.controlSidebar={activate:function(){var e=this,i=t.AdminLTE.options.controlSidebarOptions,n=t(i.selector);t(i.toggleBtnSelector).on("click",(function(s){s.preventDefault(),n.hasClass("control-sidebar-open")||t("body").hasClass("control-sidebar-open")?e.close(n,i.slide):e.open(n,i.slide)}));var s=t(".control-sidebar-bg");e._fix(s),t("body").hasClass("fixed")?e._fixForFixed(n):t(".content-wrapper, .right-side").height()<n.height()&&e._fixForContent(n)},open:function(e,i){i?e.addClass("control-sidebar-open"):t("body").addClass("control-sidebar-open")},close:function(e,i){i?e.removeClass("control-sidebar-open"):t("body").removeClass("control-sidebar-open")},_fix:function(e){var i=this;t("body").hasClass("layout-boxed")?(e.css("position","absolute"),e.height(t(".wrapper").height()),t(window).resize((function(){i._fix(e)}))):e.css({position:"fixed",height:"auto"})},_fixForFixed:function(t){t.css({position:"fixed","max-height":"100%",overflow:"auto","padding-bottom":"50px"})},_fixForContent:function(e){t(".content-wrapper, .right-side").css("min-height",e.height())}},t.AdminLTE.boxWidget={selectors:t.AdminLTE.options.boxWidgetOptions.boxWidgetSelectors,icons:t.AdminLTE.options.boxWidgetOptions.boxWidgetIcons,animationSpeed:t.AdminLTE.options.animationSpeed,activate:function(e){var i=this;e||(e=document),t(e).on("click",i.selectors.collapse,(function(e){e.preventDefault(),i.collapse(t(this))})),t(e).on("click",i.selectors.remove,(function(e){e.preventDefault(),i.remove(t(this))}))},collapse:function(t){var e=this,i=t.parents(".box").first(),n=i.find("> .box-body, > .box-footer, > form  >.box-body, > form > .box-footer");i.hasClass("collapsed-box")?(t.children(":first").removeClass(e.icons.open).addClass(e.icons.collapse),n.slideDown(e.animationSpeed,(function(){i.removeClass("collapsed-box")}))):(t.children(":first").removeClass(e.icons.collapse).addClass(e.icons.open),n.slideUp(e.animationSpeed,(function(){i.addClass("collapsed-box")})))},remove:function(t){t.parents(".box").first().slideUp(this.animationSpeed)}}})(),t.AdminLTE.layout.activate(),t.AdminLTE.tree(".sidebar"),e.enableControlSidebar&&t.AdminLTE.controlSidebar.activate(),e.navbarMenuSlimscroll&&void 0!==t.fn.slimscroll&&t(".navbar .menu").slimscroll({height:e.navbarMenuHeight,alwaysVisible:!1,size:e.navbarMenuSlimscrollWidth}).css("width","100%"),e.sidebarPushMenu&&t.AdminLTE.pushMenu.activate(e.sidebarToggleSelector),e.enableBSToppltip&&t("body").tooltip({selector:e.BSTooltipSelector}),e.enableBoxWidget&&t.AdminLTE.boxWidget.activate(),e.enableFastclick&&"undefined"!=typeof FastClick&&FastClick.attach(document.body),e.directChat.enable&&t(document).on("click",e.directChat.contactToggleSelector,(function(){t(this).parents(".direct-chat").first().toggleClass("direct-chat-contacts-open")})),t('.btn-group[data-toggle="btn-toggle"]').each((function(){var e=t(this);t(this).find(".btn").on("click",(function(i){e.find(".btn.active").removeClass("active"),t(this).addClass("active"),i.preventDefault()}))}))})),function(t){"use strict";t.fn.boxRefresh=function(e){function i(t){t.append(o),s.onLoadStart.call(t)}function n(t){t.find(o).remove(),s.onLoadDone.call(t)}var s=t.extend({trigger:".refresh-btn",source:"",onLoadStart:function(t){return t},onLoadDone:function(t){return t}},e),o=t('<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>');return this.each((function(){if(""!==s.source){var e=t(this);e.find(s.trigger).first().on("click",(function(t){t.preventDefault(),i(e),e.find(".box-body").load(s.source,(function(){n(e)}))}))}else window.console&&window.console.log("Please specify a source first - boxRefresh()")}))}}(e),function(t){"use strict";t.fn.activateBox=function(){t.AdminLTE.boxWidget.activate(this)}}(e),function(t){"use strict";t.fn.todolist=function(e){var i=t.extend({onCheck:function(t){return t},onUncheck:function(t){return t}},e);return this.each((function(){void 0!==t.fn.iCheck?(t("input",this).on("ifChecked",(function(){var e=t(this).parents("li").first();e.toggleClass("done"),i.onCheck.call(e)})),t("input",this).on("ifUnchecked",(function(){var e=t(this).parents("li").first();e.toggleClass("done"),i.onUncheck.call(e)}))):t("input",this).on("change",(function(){var e=t(this).parents("li").first();e.toggleClass("done"),t("input",e).is(":checked")?i.onCheck.call(e):i.onUncheck.call(e)}))}))}}(e)}).call(this,i("EVdn"),i("EVdn"))},r2km:function(t,e,i){(function(t){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}if(void 0===t)throw new Error("Bootstrap's JavaScript requires jQuery");!function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(t),function(t){"use strict";t.fn.emulateTransitionEnd=function(e){var i=!1,n=this;t(this).one("bsTransitionEnd",(function(){i=!0}));return setTimeout((function(){i||t(n).trigger(t.support.transition.end)}),e),this},t((function(){t.support.transition=function(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})}))}(t),function(t){"use strict";var e='[data-dismiss="alert"]',i=function(i){t(i).on("click",e,this.close)};i.VERSION="3.3.4",i.TRANSITION_DURATION=150,i.prototype.close=function(e){function n(){a.detach().trigger("closed.bs.alert").remove()}var s=t(this),o=s.attr("data-target");o||(o=(o=s.attr("href"))&&o.replace(/.*(?=#[^\s]*$)/,""));var a=t(o);e&&e.preventDefault(),a.length||(a=s.closest(".alert")),a.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(a.removeClass("in"),t.support.transition&&a.hasClass("fade")?a.one("bsTransitionEnd",n).emulateTransitionEnd(i.TRANSITION_DURATION):n())};var n=t.fn.alert;t.fn.alert=function(e){return this.each((function(){var n=t(this),s=n.data("bs.alert");s||n.data("bs.alert",s=new i(this)),"string"==typeof e&&s[e].call(n)}))},t.fn.alert.Constructor=i,t.fn.alert.noConflict=function(){return t.fn.alert=n,this},t(document).on("click.bs.alert.data-api",e,i.prototype.close)}(t),function(t){"use strict";function i(i){return this.each((function(){var s=t(this),o=s.data("bs.button"),a="object"==e(i)&&i;o||s.data("bs.button",o=new n(this,a)),"toggle"==i?o.toggle():i&&o.setState(i)}))}var n=function e(i,n){this.$element=t(i),this.options=t.extend({},e.DEFAULTS,n),this.isLoading=!1};n.VERSION="3.3.4",n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(e){var i="disabled",n=this.$element,s=n.is("input")?"val":"html",o=n.data();e+="Text",null==o.resetText&&n.data("resetText",n[s]()),setTimeout(t.proxy((function(){n[s](null==o[e]?this.options[e]:o[e]),"loadingText"==e?(this.isLoading=!0,n.addClass(i).attr(i,i)):this.isLoading&&(this.isLoading=!1,n.removeClass(i).removeAttr(i))}),this),0)},n.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")&&(i.prop("checked")&&this.$element.hasClass("active")?t=!1:e.find(".active").removeClass("active")),t&&i.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));t&&this.$element.toggleClass("active")};var s=t.fn.button;t.fn.button=i,t.fn.button.Constructor=n,t.fn.button.noConflict=function(){return t.fn.button=s,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',(function(e){var n=t(e.target);n.hasClass("btn")||(n=n.closest(".btn")),i.call(n,"toggle"),e.preventDefault()})).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',(function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))}))}(t),function(t){"use strict";function i(i){return this.each((function(){var s=t(this),o=s.data("bs.carousel"),a=t.extend({},n.DEFAULTS,s.data(),"object"==e(i)&&i),r="string"==typeof i?i:a.slide;o||s.data("bs.carousel",o=new n(this,a)),"number"==typeof i?o.to(i):r?o[r]():a.interval&&o.pause().cycle()}))}var n=function(e,i){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};n.VERSION="3.3.4",n.TRANSITION_DURATION=600,n.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},n.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},n.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},n.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},n.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e);if(("prev"==t&&0===i||"next"==t&&i==this.$items.length-1)&&!this.options.wrap)return e;var n=(i+("prev"==t?-1:1))%this.$items.length;return this.$items.eq(n)},n.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));return t>this.$items.length-1||0>t?void 0:this.sliding?this.$element.one("slid.bs.carousel",(function(){e.to(t)})):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",this.$items.eq(t))},n.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},n.prototype.next=function(){return this.sliding?void 0:this.slide("next")},n.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},n.prototype.slide=function(e,i){var s=this.$element.find(".item.active"),o=i||this.getItemForDirection(e,s),a=this.interval,r="next"==e?"left":"right",l=this;if(o.hasClass("active"))return this.sliding=!1;var c=o[0],h=t.Event("slide.bs.carousel",{relatedTarget:c,direction:r});if(this.$element.trigger(h),!h.isDefaultPrevented()){if(this.sliding=!0,a&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var u=t(this.$indicators.children()[this.getItemIndex(o)]);u&&u.addClass("active")}var d=t.Event("slid.bs.carousel",{relatedTarget:c,direction:r});return t.support.transition&&this.$element.hasClass("slide")?(o.addClass(e),o[0].offsetWidth,s.addClass(r),o.addClass(r),s.one("bsTransitionEnd",(function(){o.removeClass([e,r].join(" ")).addClass("active"),s.removeClass(["active",r].join(" ")),l.sliding=!1,setTimeout((function(){l.$element.trigger(d)}),0)})).emulateTransitionEnd(n.TRANSITION_DURATION)):(s.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger(d)),a&&this.cycle(),this}};var s=t.fn.carousel;t.fn.carousel=i,t.fn.carousel.Constructor=n,t.fn.carousel.noConflict=function(){return t.fn.carousel=s,this};var o=function(e){var n,s=t(this),o=t(s.attr("data-target")||(n=s.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""));if(o.hasClass("carousel")){var a=t.extend({},o.data(),s.data()),r=s.attr("data-slide-to");r&&(a.interval=!1),i.call(o,a),r&&o.data("bs.carousel").to(r),e.preventDefault()}};t(document).on("click.bs.carousel.data-api","[data-slide]",o).on("click.bs.carousel.data-api","[data-slide-to]",o),t(window).on("load",(function(){t('[data-ride="carousel"]').each((function(){var e=t(this);i.call(e,e.data())}))}))}(t),function(t){"use strict";function i(e){var i,n=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return t(n)}function n(i){return this.each((function(){var n=t(this),o=n.data("bs.collapse"),a=t.extend({},s.DEFAULTS,n.data(),"object"==e(i)&&i);!o&&a.toggle&&/show|hide/.test(i)&&(a.toggle=!1),o||n.data("bs.collapse",o=new s(this,a)),"string"==typeof i&&o[i]()}))}var s=function e(i,n){this.$element=t(i),this.options=t.extend({},e.DEFAULTS,n),this.$trigger=t('[data-toggle="collapse"][href="#'+i.id+'"],[data-toggle="collapse"][data-target="#'+i.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};s.VERSION="3.3.4",s.TRANSITION_DURATION=350,s.DEFAULTS={toggle:!0},s.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},s.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,i=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(i&&i.length&&(e=i.data("bs.collapse"),e&&e.transitioning))){var o=t.Event("show.bs.collapse");if(this.$element.trigger(o),!o.isDefaultPrevented()){i&&i.length&&(n.call(i,"hide"),e||i.data("bs.collapse",null));var a=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[a](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return r.call(this);var l=t.camelCase(["scroll",a].join("-"));this.$element.one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(s.TRANSITION_DURATION)[a](this.$element[0][l])}}}},s.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var n=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[i](0).one("bsTransitionEnd",t.proxy(n,this)).emulateTransitionEnd(s.TRANSITION_DURATION):n.call(this)}}},s.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},s.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy((function(e,n){var s=t(n);this.addAriaAndCollapsedClass(i(s),s)}),this)).end()},s.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var o=t.fn.collapse;t.fn.collapse=n,t.fn.collapse.Constructor=s,t.fn.collapse.noConflict=function(){return t.fn.collapse=o,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',(function(e){var s=t(this);s.attr("data-target")||e.preventDefault();var o=i(s),a=o.data("bs.collapse")?"toggle":s.data();n.call(o,a)}))}(t),function(t){"use strict";function e(e){e&&3===e.which||(t(n).remove(),t(s).each((function(){var n=t(this),s=i(n),o={relatedTarget:this};s.hasClass("open")&&(s.trigger(e=t.Event("hide.bs.dropdown",o)),e.isDefaultPrevented()||(n.attr("aria-expanded","false"),s.removeClass("open").trigger("hidden.bs.dropdown",o)))})))}function i(e){var i=e.attr("data-target");i||(i=(i=e.attr("href"))&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var n=i&&t(i);return n&&n.length?n:e.parent()}var n=".dropdown-backdrop",s='[data-toggle="dropdown"]',o=function(e){t(e).on("click.bs.dropdown",this.toggle)};o.VERSION="3.3.4",o.prototype.toggle=function(n){var s=t(this);if(!s.is(".disabled, :disabled")){var o=i(s),a=o.hasClass("open");if(e(),!a){"ontouchstart"in document.documentElement&&!o.closest(".navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",e);var r={relatedTarget:this};if(o.trigger(n=t.Event("show.bs.dropdown",r)),n.isDefaultPrevented())return;s.trigger("focus").attr("aria-expanded","true"),o.toggleClass("open").trigger("shown.bs.dropdown",r)}return!1}},o.prototype.keydown=function(e){if(/(38|40|27|32)/.test(e.which)&&!/input|textarea/i.test(e.target.tagName)){var n=t(this);if(e.preventDefault(),e.stopPropagation(),!n.is(".disabled, :disabled")){var o=i(n),a=o.hasClass("open");if(!a&&27!=e.which||a&&27==e.which)return 27==e.which&&o.find(s).trigger("focus"),n.trigger("click");var r=" li:not(.disabled):visible a",l=o.find('[role="menu"]'+r+', [role="listbox"]'+r);if(l.length){var c=l.index(e.target);38==e.which&&c>0&&c--,40==e.which&&c<l.length-1&&c++,~c||(c=0),l.eq(c).trigger("focus")}}}};var a=t.fn.dropdown;t.fn.dropdown=function(e){return this.each((function(){var i=t(this),n=i.data("bs.dropdown");n||i.data("bs.dropdown",n=new o(this)),"string"==typeof e&&n[e].call(i)}))},t.fn.dropdown.Constructor=o,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=a,this},t(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",(function(t){t.stopPropagation()})).on("click.bs.dropdown.data-api",s,o.prototype.toggle).on("keydown.bs.dropdown.data-api",s,o.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',o.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',o.prototype.keydown)}(t),function(t){"use strict";function i(i,s){return this.each((function(){var o=t(this),a=o.data("bs.modal"),r=t.extend({},n.DEFAULTS,o.data(),"object"==e(i)&&i);a||o.data("bs.modal",a=new n(this,r)),"string"==typeof i?a[i](s):r.show&&a.show(s)}))}var n=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy((function(){this.$element.trigger("loaded.bs.modal")}),this))};n.VERSION="3.3.4",n.TRANSITION_DURATION=300,n.BACKDROP_TRANSITION_DURATION=150,n.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},n.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},n.prototype.show=function(e){var i=this,s=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(s),this.isShown||s.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",(function(){i.$element.one("mouseup.dismiss.bs.modal",(function(e){t(e.target).is(i.$element)&&(i.ignoreBackdropClick=!0)}))})),this.backdrop((function(){var s=t.support.transition&&i.$element.hasClass("fade");i.$element.parent().length||i.$element.appendTo(i.$body),i.$element.show().scrollTop(0),i.adjustDialog(),s&&i.$element[0].offsetWidth,i.$element.addClass("in").attr("aria-hidden",!1),i.enforceFocus();var o=t.Event("shown.bs.modal",{relatedTarget:e});s?i.$dialog.one("bsTransitionEnd",(function(){i.$element.trigger("focus").trigger(o)})).emulateTransitionEnd(n.TRANSITION_DURATION):i.$element.trigger("focus").trigger(o)})))},n.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(n.TRANSITION_DURATION):this.hideModal())},n.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy((function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")}),this))},n.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy((function(t){27==t.which&&this.hide()}),this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},n.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},n.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop((function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")}))},n.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},n.prototype.backdrop=function(e){var i=this,s=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var o=t.support.transition&&s;if(this.$backdrop=t('<div class="modal-backdrop '+s+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy((function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))}),this)),o&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;o?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){i.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION):a()}else e&&e()},n.prototype.handleUpdate=function(){this.adjustDialog()},n.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},n.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},n.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},n.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},n.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},n.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var s=t.fn.modal;t.fn.modal=i,t.fn.modal.Constructor=n,t.fn.modal.noConflict=function(){return t.fn.modal=s,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',(function(e){var n=t(this),s=n.attr("href"),o=t(n.attr("data-target")||s&&s.replace(/.*(?=#[^\s]+$)/,"")),a=o.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(s)&&s},o.data(),n.data());n.is("a")&&e.preventDefault(),o.one("show.bs.modal",(function(t){t.isDefaultPrevented()||o.one("hidden.bs.modal",(function(){n.is(":visible")&&n.trigger("focus")}))})),i.call(o,a,this)}))}(t),function(t){"use strict";var i=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.init("tooltip",t,e)};i.VERSION="3.3.4",i.TRANSITION_DURATION=150,i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(e,i,n){if(this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(n),this.$viewport=this.options.viewport&&t(this.options.viewport.selector||this.options.viewport),this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var s=this.options.trigger.split(" "),o=s.length;o--;){var a=s[o];if("click"==a)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=a){var r="hover"==a?"mouseenter":"focusin",l="hover"==a?"mouseleave":"focusout";this.$element.on(r+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(e){return(e=t.extend({},this.getDefaults(),this.$element.data(),e)).delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},i.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,(function(t,n){i[t]!=n&&(e[t]=n)})),e},i.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i&&i.$tip&&i.$tip.is(":visible")?void(i.hoverState="in"):(i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout((function(){"in"==i.hoverState&&i.show()}),i.options.delay.show)):i.show())},i.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout((function(){"out"==i.hoverState&&i.hide()}),i.options.delay.hide)):i.hide()},i.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var n=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!n)return;var s=this,o=this.tip(),a=this.getUID(this.type);this.setContent(),o.attr("id",a),this.$element.attr("aria-describedby",a),this.options.animation&&o.addClass("fade");var r="function"==typeof this.options.placement?this.options.placement.call(this,o[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,c=l.test(r);c&&(r=r.replace(l,"")||"top"),o.detach().css({top:0,left:0,display:"block"}).addClass(r).data("bs."+this.type,this),this.options.container?o.appendTo(this.options.container):o.insertAfter(this.$element);var h=this.getPosition(),u=o[0].offsetWidth,d=o[0].offsetHeight;if(c){var p=r,f=this.options.container?t(this.options.container):this.$element.parent(),g=this.getPosition(f);r="bottom"==r&&h.bottom+d>g.bottom?"top":"top"==r&&h.top-d<g.top?"bottom":"right"==r&&h.right+u>g.width?"left":"left"==r&&h.left-u<g.left?"right":r,o.removeClass(p).addClass(r)}var m=this.getCalculatedOffset(r,h,u,d);this.applyPlacement(m,r);var v=function(){var t=s.hoverState;s.$element.trigger("shown.bs."+s.type),s.hoverState=null,"out"==t&&s.leave(s)};t.support.transition&&this.$tip.hasClass("fade")?o.one("bsTransitionEnd",v).emulateTransitionEnd(i.TRANSITION_DURATION):v()}},i.prototype.applyPlacement=function(e,i){var n=this.tip(),s=n[0].offsetWidth,o=n[0].offsetHeight,a=parseInt(n.css("margin-top"),10),r=parseInt(n.css("margin-left"),10);isNaN(a)&&(a=0),isNaN(r)&&(r=0),e.top=e.top+a,e.left=e.left+r,t.offset.setOffset(n[0],t.extend({using:function(t){n.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),n.addClass("in");var l=n[0].offsetWidth,c=n[0].offsetHeight;"top"==i&&c!=o&&(e.top=e.top+o-c);var h=this.getViewportAdjustedDelta(i,e,l,c);h.left?e.left+=h.left:e.top+=h.top;var u=/top|bottom/.test(i),d=u?2*h.left-s+l:2*h.top-o+c,p=u?"offsetWidth":"offsetHeight";n.offset(e),this.replaceArrow(d,n[0][p],u)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(e){function n(){"in"!=s.hoverState&&o.detach(),s.$element.removeAttr("aria-describedby").trigger("hidden.bs."+s.type),e&&e()}var s=this,o=t(this.$tip),a=t.Event("hide.bs."+this.type);return this.$element.trigger(a),a.isDefaultPrevented()?void 0:(o.removeClass("in"),t.support.transition&&o.hasClass("fade")?o.one("bsTransitionEnd",n).emulateTransitionEnd(i.TRANSITION_DURATION):n(),this.hoverState=null,this)},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(e){var i=(e=e||this.$element)[0],n="BODY"==i.tagName,s=i.getBoundingClientRect();null==s.width&&(s=t.extend({},s,{width:s.right-s.left,height:s.bottom-s.top}));var o=n?{top:0,left:0}:e.offset(),a={scroll:n?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},r=n?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},s,a,r,o)},i.prototype.getCalculatedOffset=function(t,e,i,n){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-n,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-n/2,left:e.left-i}:{top:e.top+e.height/2-n/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,n){var s={top:0,left:0};if(!this.$viewport)return s;var o=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-o-a.scroll,l=e.top+o-a.scroll+n;r<a.top?s.top=a.top-r:l>a.top+a.height&&(s.top=a.top+a.height-l)}else{var c=e.left-o,h=e.left+o+i;c<a.left?s.left=a.left-c:h>a.width&&(s.left=a.left+a.width-h)}return s},i.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},i.prototype.getUID=function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},i.prototype.tip=function(){return this.$tip=this.$tip||t(this.options.template)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(e){var i=this;e&&((i=t(e.currentTarget).data("bs."+this.type))||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide((function(){t.$element.off("."+t.type).removeData("bs."+t.type)}))};var n=t.fn.tooltip;t.fn.tooltip=function(n){return this.each((function(){var s=t(this),o=s.data("bs.tooltip"),a="object"==e(n)&&n;(o||!/destroy|hide/.test(n))&&(o||s.data("bs.tooltip",o=new i(this,a)),"string"==typeof n&&o[n]())}))},t.fn.tooltip.Constructor=i,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=n,this}}(t),function(t){"use strict";var i=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");i.VERSION="3.3.4",i.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),i.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),i.prototype.constructor=i,i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},i.prototype.hasContent=function(){return this.getTitle()||this.getContent()},i.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var n=t.fn.popover;t.fn.popover=function(n){return this.each((function(){var s=t(this),o=s.data("bs.popover"),a="object"==e(n)&&n;(o||!/destroy|hide/.test(n))&&(o||s.data("bs.popover",o=new i(this,a)),"string"==typeof n&&o[n]())}))},t.fn.popover.Constructor=i,t.fn.popover.noConflict=function(){return t.fn.popover=n,this}}(t),function(t){"use strict";function i(e,n){this.$body=t(document.body),this.$scrollElement=t(t(e).is(document.body)?window:e),this.options=t.extend({},i.DEFAULTS,n),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function n(n){return this.each((function(){var s=t(this),o=s.data("bs.scrollspy"),a="object"==e(n)&&n;o||s.data("bs.scrollspy",o=new i(this,a)),"string"==typeof n&&o[n]()}))}i.VERSION="3.3.4",i.DEFAULTS={offset:10},i.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},i.prototype.refresh=function(){var e=this,i="offset",n=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(i="position",n=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map((function(){var e=t(this),s=e.data("target")||e.attr("href"),o=/^#./.test(s)&&t(s);return o&&o.length&&o.is(":visible")&&[[o[i]().top+n,s]]||null})).sort((function(t,e){return t[0]-e[0]})).each((function(){e.offsets.push(this[0]),e.targets.push(this[1])}))},i.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),n=this.options.offset+i-this.$scrollElement.height(),s=this.offsets,o=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),e>=n)return a!=(t=o[o.length-1])&&this.activate(t);if(a&&e<s[0])return this.activeTarget=null,this.clear();for(t=s.length;t--;)a!=o[t]&&e>=s[t]&&(void 0===s[t+1]||e<s[t+1])&&this.activate(o[t])},i.prototype.activate=function(e){this.activeTarget=e,this.clear();var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',n=t(i).parents("li").addClass("active");n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate.bs.scrollspy")},i.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var s=t.fn.scrollspy;t.fn.scrollspy=n,t.fn.scrollspy.Constructor=i,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=s,this},t(window).on("load.bs.scrollspy.data-api",(function(){t('[data-spy="scroll"]').each((function(){var e=t(this);n.call(e,e.data())}))}))}(t),function(t){"use strict";function e(e){return this.each((function(){var n=t(this),s=n.data("bs.tab");s||n.data("bs.tab",s=new i(this)),"string"==typeof e&&s[e]()}))}var i=function(e){this.element=t(e)};i.VERSION="3.3.4",i.TRANSITION_DURATION=150,i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),n=e.data("target");if(n||(n=(n=e.attr("href"))&&n.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var s=i.find(".active:last a"),o=t.Event("hide.bs.tab",{relatedTarget:e[0]}),a=t.Event("show.bs.tab",{relatedTarget:s[0]});if(s.trigger(o),e.trigger(a),!a.isDefaultPrevented()&&!o.isDefaultPrevented()){var r=t(n);this.activate(e.closest("li"),i),this.activate(r,r.parent(),(function(){s.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:s[0]})}))}}},i.prototype.activate=function(e,n,s){function o(){a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),s&&s()}var a=n.find("> .active"),r=s&&t.support.transition&&(a.length&&a.hasClass("fade")||!!n.find("> .fade").length);a.length&&r?a.one("bsTransitionEnd",o).emulateTransitionEnd(i.TRANSITION_DURATION):o(),a.removeClass("in")};var n=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=i,t.fn.tab.noConflict=function(){return t.fn.tab=n,this};var s=function(i){i.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',s).on("click.bs.tab.data-api",'[data-toggle="pill"]',s)}(t),function(t){"use strict";function i(i){return this.each((function(){var s=t(this),o=s.data("bs.affix"),a="object"==e(i)&&i;o||s.data("bs.affix",o=new n(this,a)),"string"==typeof i&&o[i]()}))}var n=function e(i,n){this.options=t.extend({},e.DEFAULTS,n),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(i),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};n.VERSION="3.3.4",n.RESET="affix affix-top affix-bottom",n.DEFAULTS={offset:0,target:window},n.prototype.getState=function(t,e,i,n){var s=this.$target.scrollTop(),o=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return i>s&&"top";if("bottom"==this.affixed)return null!=i?!(s+this.unpin<=o.top)&&"bottom":!(t-n>=s+a)&&"bottom";var r=null==this.affixed,l=r?s:o.top;return null!=i&&i>=s?"top":null!=n&&l+(r?a:e)>=t-n&&"bottom"},n.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(n.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},n.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},n.prototype.checkPosition=function(){if(this.$element.is(":visible")){var i=this.$element.height(),s=this.options.offset,o=s.top,a=s.bottom,r=t(document.body).height();"object"!=e(s)&&(a=o=s),"function"==typeof o&&(o=s.top(this.$element)),"function"==typeof a&&(a=s.bottom(this.$element));var l=this.getState(r,i,o,a);if(this.affixed!=l){null!=this.unpin&&this.$element.css("top","");var c="affix"+(l?"-"+l:""),h=t.Event(c+".bs.affix");if(this.$element.trigger(h),h.isDefaultPrevented())return;this.affixed=l,this.unpin="bottom"==l?this.getPinnedOffset():null,this.$element.removeClass(n.RESET).addClass(c).trigger(c.replace("affix","affixed")+".bs.affix")}"bottom"==l&&this.$element.offset({top:r-i-a})}};var s=t.fn.affix;t.fn.affix=i,t.fn.affix.Constructor=n,t.fn.affix.noConflict=function(){return t.fn.affix=s,this},t(window).on("load",(function(){t('[data-spy="affix"]').each((function(){var e=t(this),n=e.data();n.offset=n.offset||{},null!=n.offsetBottom&&(n.offset.bottom=n.offsetBottom),null!=n.offsetTop&&(n.offset.top=n.offsetTop),i.call(e,n)}))}))}(t)}).call(this,i("EVdn"))},vnCl:function(t,e,i){var n,s,o;function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s=[i("EVdn")],void 0===(o="function"==typeof(n=function(t){function e(e,n){var s,o,a,r=e.nodeName.toLowerCase();return"area"===r?(o=(s=e.parentNode).name,!(!e.href||!o||"map"!==s.nodeName.toLowerCase())&&!!(a=t("img[usemap='#"+o+"']")[0])&&i(a)):(/input|select|textarea|button|object/.test(r)?!e.disabled:"a"===r&&e.href||n)&&i(e)}function i(e){return t.expr.filters.visible(e)&&!t(e).parents().addBack().filter((function(){return"hidden"===t.css(this,"visibility")})).length}function n(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.regional.en=t.extend(!0,{},this.regional[""]),this.regional["en-US"]=t.extend(!0,{},this.regional.en),this.dpDiv=s(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function s(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.delegate(i,"mouseout",(function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")})).delegate(i,"mouseover",o)}function o(){t.datepicker._isDisabledDatepicker(p.inline?p.dpDiv.parent()[0]:p.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))}function r(e,i){for(var n in t.extend(e,i),i)null==i[n]&&(e[n]=i[n]);return e}function l(t){return function(){var e=this.element.val();t.apply(this,arguments),this._refresh(),e!==this.element.val()&&this._trigger("change")}}t.ui=t.ui||{},t.extend(t.ui,{version:"1.11.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),t.fn.extend({scrollParent:function(e){var i=this.css("position"),n="absolute"===i,s=e?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter((function(){var e=t(this);return(!n||"static"!==e.css("position"))&&s.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))})).eq(0);return"fixed"!==i&&o.length?o:t(this[0].ownerDocument||document)},uniqueId:function(){var t=0;return function(){return this.each((function(){this.id||(this.id="ui-id-"+ ++t)}))}}(),removeUniqueId:function(){return this.each((function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")}))}}),t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo((function(e){return function(i){return!!t.data(i,e)}})):function(e,i,n){return!!t.data(e,n[3])},focusable:function(i){return e(i,!isNaN(t.attr(i,"tabindex")))},tabbable:function(i){var n=t.attr(i,"tabindex"),s=isNaN(n);return(s||n>=0)&&e(i,!s)}}),t("<a>").outerWidth(1).jquery||t.each(["Width","Height"],(function(e,i){function n(e,i,n,o){return t.each(s,(function(){i-=parseFloat(t.css(e,"padding"+this))||0,n&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),o&&(i-=parseFloat(t.css(e,"margin"+this))||0)})),i}var s="Width"===i?["Left","Right"]:["Top","Bottom"],o=i.toLowerCase(),a={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+i]=function(e){return void 0===e?a["inner"+i].call(this):this.each((function(){t(this).css(o,n(this,e)+"px")}))},t.fn["outer"+i]=function(e,s){return"number"!=typeof e?a["outer"+i].call(this,e):this.each((function(){t(this).css(o,n(this,e,!0,s)+"px")}))}})),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(t.fn.removeData=function(e){return function(i){return arguments.length?e.call(this,t.camelCase(i)):e.call(this)}}(t.fn.removeData)),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),t.fn.extend({focus:function(e){return function(i,n){return"number"==typeof i?this.each((function(){var e=this;setTimeout((function(){t(e).focus(),n&&n.call(e)}),i)})):e.apply(this,arguments)}}(t.fn.focus),disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(t+".ui-disableSelection",(function(t){t.preventDefault()}))}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(e){if(void 0!==e)return this.css("zIndex",e);if(this.length)for(var i,n,s=t(this[0]);s.length&&s[0]!==document;){if(("absolute"===(i=s.css("position"))||"relative"===i||"fixed"===i)&&(n=parseInt(s.css("zIndex"),10),!isNaN(n)&&0!==n))return n;s=s.parent()}return 0}}),t.ui.plugin={add:function(e,i,n){var s,o=t.ui[e].prototype;for(s in n)o.plugins[s]=o.plugins[s]||[],o.plugins[s].push([i,n[s]])},call:function(t,e,i,n){var s,o=t.plugins[e];if(o&&(n||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(s=0;o.length>s;s++)t.options[o[s][0]]&&o[s][1].apply(t.element,i)}};var c=0,h=Array.prototype.slice;t.cleanData=function(e){return function(i){var n,s,o;for(o=0;null!=(s=i[o]);o++)try{(n=t._data(s,"events"))&&n.remove&&t(s).triggerHandler("remove")}catch(t){}e(i)}}(t.cleanData),t.widget=function(e,i,n){var s,o,a,r,l={},c=e.split(".")[0];return e=e.split(".")[1],s=c+"-"+e,n||(n=i,i=t.Widget),t.expr[":"][s.toLowerCase()]=function(e){return!!t.data(e,s)},t[c]=t[c]||{},o=t[c][e],a=t[c][e]=function(t,e){return this._createWidget?void(arguments.length&&this._createWidget(t,e)):new a(t,e)},t.extend(a,o,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),(r=new i).options=t.widget.extend({},r.options),t.each(n,(function(e,n){return t.isFunction(n)?void(l[e]=function(){var t=function(){return i.prototype[e].apply(this,arguments)},s=function(t){return i.prototype[e].apply(this,t)};return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=s,e=n.apply(this,arguments),this._super=i,this._superApply=o,e}}()):void(l[e]=n)})),a.prototype=t.widget.extend(r,{widgetEventPrefix:o&&r.widgetEventPrefix||e},l,{constructor:a,namespace:c,widgetName:e,widgetFullName:s}),o?(t.each(o._childConstructors,(function(e,i){var n=i.prototype;t.widget(n.namespace+"."+n.widgetName,a,i._proto)})),delete o._childConstructors):i._childConstructors.push(a),t.widget.bridge(e,a),a},t.widget.extend=function(e){for(var i,n,s=h.call(arguments,1),o=0,a=s.length;a>o;o++)for(i in s[o])n=s[o][i],s[o].hasOwnProperty(i)&&void 0!==n&&(e[i]=t.isPlainObject(n)?t.isPlainObject(e[i])?t.widget.extend({},e[i],n):t.widget.extend({},n):n);return e},t.widget.bridge=function(e,i){var n=i.prototype.widgetFullName||e;t.fn[e]=function(s){var o="string"==typeof s,a=h.call(arguments,1),r=this;return s=!o&&a.length?t.widget.extend.apply(null,[s].concat(a)):s,o?this.each((function(){var i,o=t.data(this,n);return"instance"===s?(r=o,!1):o?t.isFunction(o[s])&&"_"!==s.charAt(0)?(i=o[s].apply(o,a))!==o&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0:t.error("no such method '"+s+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+s+"'")})):this.each((function(){var e=t.data(this,n);e?(e.option(s||{}),e._init&&e._init()):t.data(this,n,new i(s,this))})),r}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,i){i=t(i||this.defaultElement||this)[0],this.element=t(i),this.uuid=c++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),i!==this&&(t.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy()}}),this.document=t(i.style?i.ownerDocument:i.document||i),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var n,s,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},n=e.split("."),e=n.shift(),n.length){for(s=a[e]=t.widget.extend({},this.options[e]),o=0;n.length-1>o;o++)s[n[o]]=s[n[o]]||{},s=s[n[o]];if(e=n.pop(),1===arguments.length)return void 0===s[e]?null:s[e];s[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!e),e&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(e,i,n){var s,o=this;"boolean"!=typeof e&&(n=i,i=e,e=!1),n?(i=s=t(i),this.bindings=this.bindings.add(i)):(n=i,i=this.element,s=this.widget()),t.each(n,(function(n,a){function r(){return e||!0!==o.options.disabled&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=n.match(/^([\w:-]*)\s*(.*)$/),c=l[1]+o.eventNamespace,h=l[2];h?s.delegate(h,c,r):i.bind(c,r)}))},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(i).undelegate(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){var i=this;return setTimeout((function(){return("string"==typeof t?i[t]:t).apply(i,arguments)}),e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,n){var s,o,a=this.options[e];if(n=n||{},(i=t.Event(i)).type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(s in o)s in i||(i[s]=o[s]);return this.element.trigger(i,n),!(t.isFunction(a)&&!1===a.apply(this.element[0],[i].concat(n))||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},(function(e,i){t.Widget.prototype["_"+e]=function(n,s,o){"string"==typeof s&&(s={effect:s});var a,r=s?!0===s||"number"==typeof s?i:s.effect||i:e;"number"==typeof(s=s||{})&&(s={duration:s}),a=!t.isEmptyObject(s),s.complete=o,s.delay&&n.delay(s.delay),a&&t.effects&&t.effects.effect[r]?n[e](s):r!==e&&n[r]?n[r](s.duration,s.easing,o):n.queue((function(i){t(this)[e](),o&&o.call(n[0]),i()}))}})),t.widget;var u=!1;t(document).mouseup((function(){u=!1})),t.widget("ui.mouse",{version:"1.11.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,(function(t){return e._mouseDown(t)})).bind("click."+this.widgetName,(function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0})),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!u){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,n=1===e.which,s=!("string"!=typeof this.options.cancel||!e.target.nodeName)&&t(e.target).closest(this.options.cancel).length;return!(n&&!s&&this._mouseCapture(e)&&(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout((function(){i.mouseDelayMet=!0}),this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=!1!==this._mouseStart(e),!this._mouseStarted)?(e.preventDefault(),0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),u=!0,0)))}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button)return this._mouseUp(e);if(!e.which)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,e),this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),u=!1,!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),function(){function e(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var s,o,a=Math.max,r=Math.abs,l=Math.round,c=/left|center|right/,h=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==s)return s;var e,i,n=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];return t("body").append(n),e=o.offsetWidth,n.css("overflow","scroll"),e===(i=o.offsetWidth)&&(i=n[0].clientWidth),n.remove(),s=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),n=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),s="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth;return{width:"scroll"===n||"auto"===n&&e.height<e.element[0].scrollHeight?t.position.scrollbarWidth():0,height:s?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),n=t.isWindow(i[0]),s=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:n,isDocument:s,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:n||s?i.width():i.outerWidth(),height:n||s?i.height():i.outerHeight()}}},t.fn.position=function(s){if(!s||!s.of)return f.apply(this,arguments);s=t.extend({},s);var p,g,m,v,b,y,_=t(s.of),w=t.position.getWithinInfo(s.within),x=t.position.getScrollInfo(w),C=(s.collision||"flip").split(" "),S={};return y=n(_),_[0].preventDefault&&(s.at="left top"),g=y.width,m=y.height,v=y.offset,b=t.extend({},v),t.each(["my","at"],(function(){var t,e,i=(s[this]||"").split(" ");1===i.length&&(i=c.test(i[0])?i.concat(["center"]):h.test(i[0])?["center"].concat(i):["center","center"]),i[0]=c.test(i[0])?i[0]:"center",i[1]=h.test(i[1])?i[1]:"center",t=u.exec(i[0]),e=u.exec(i[1]),S[this]=[t?t[0]:0,e?e[0]:0],s[this]=[d.exec(i[0])[0],d.exec(i[1])[0]]})),1===C.length&&(C[1]=C[0]),"right"===s.at[0]?b.left+=g:"center"===s.at[0]&&(b.left+=g/2),"bottom"===s.at[1]?b.top+=m:"center"===s.at[1]&&(b.top+=m/2),p=e(S.at,g,m),b.left+=p[0],b.top+=p[1],this.each((function(){var n,c,h=t(this),u=h.outerWidth(),d=h.outerHeight(),f=i(this,"marginLeft"),y=i(this,"marginTop"),D=u+f+i(this,"marginRight")+x.width,T=d+y+i(this,"marginBottom")+x.height,k=t.extend({},b),I=e(S.my,h.outerWidth(),h.outerHeight());"right"===s.my[0]?k.left-=u:"center"===s.my[0]&&(k.left-=u/2),"bottom"===s.my[1]?k.top-=d:"center"===s.my[1]&&(k.top-=d/2),k.left+=I[0],k.top+=I[1],o||(k.left=l(k.left),k.top=l(k.top)),n={marginLeft:f,marginTop:y},t.each(["left","top"],(function(e,i){t.ui.position[C[e]]&&t.ui.position[C[e]][i](k,{targetWidth:g,targetHeight:m,elemWidth:u,elemHeight:d,collisionPosition:n,collisionWidth:D,collisionHeight:T,offset:[p[0]+I[0],p[1]+I[1]],my:s.my,at:s.at,within:w,elem:h})})),s.using&&(c=function(t){var e=v.left-k.left,i=e+g-u,n=v.top-k.top,o=n+m-d,l={target:{element:_,left:v.left,top:v.top,width:g,height:m},element:{element:h,left:k.left,top:k.top,width:u,height:d},horizontal:0>i?"left":e>0?"right":"center",vertical:0>o?"top":n>0?"bottom":"middle"};u>g&&g>r(e+i)&&(l.horizontal="center"),d>m&&m>r(n+o)&&(l.vertical="middle"),l.important=a(r(e),r(i))>a(r(n),r(o))?"horizontal":"vertical",s.using.call(this,t,l)}),h.offset(t.extend(k,{using:c}))}))},t.ui.position={fit:{left:function(t,e){var i,n=e.within,s=n.isWindow?n.scrollLeft:n.offset.left,o=n.width,r=t.left-e.collisionPosition.marginLeft,l=s-r,c=r+e.collisionWidth-o-s;e.collisionWidth>o?l>0&&0>=c?(i=t.left+l+e.collisionWidth-o-s,t.left+=l-i):t.left=c>0&&0>=l?s:l>c?s+o-e.collisionWidth:s:l>0?t.left+=l:c>0?t.left-=c:t.left=a(t.left-r,t.left)},top:function(t,e){var i,n=e.within,s=n.isWindow?n.scrollTop:n.offset.top,o=e.within.height,r=t.top-e.collisionPosition.marginTop,l=s-r,c=r+e.collisionHeight-o-s;e.collisionHeight>o?l>0&&0>=c?(i=t.top+l+e.collisionHeight-o-s,t.top+=l-i):t.top=c>0&&0>=l?s:l>c?s+o-e.collisionHeight:s:l>0?t.top+=l:c>0?t.top-=c:t.top=a(t.top-r,t.top)}},flip:{left:function(t,e){var i,n,s=e.within,o=s.offset.left+s.scrollLeft,a=s.width,l=s.isWindow?s.scrollLeft:s.offset.left,c=t.left-e.collisionPosition.marginLeft,h=c-l,u=c+e.collisionWidth-a-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>h?(0>(i=t.left+d+p+f+e.collisionWidth-a-o)||r(h)>i)&&(t.left+=d+p+f):u>0&&((n=t.left-e.collisionPosition.marginLeft+d+p+f-l)>0||u>r(n))&&(t.left+=d+p+f)},top:function(t,e){var i,n,s=e.within,o=s.offset.top+s.scrollTop,a=s.height,l=s.isWindow?s.scrollTop:s.offset.top,c=t.top-e.collisionPosition.marginTop,h=c-l,u=c+e.collisionHeight-a-l,d="top"===e.my[1]?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,p="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,f=-2*e.offset[1];0>h?(n=t.top+d+p+f+e.collisionHeight-a-o,t.top+d+p+f>h&&(0>n||r(h)>n)&&(t.top+=d+p+f)):u>0&&(i=t.top-e.collisionPosition.marginTop+d+p+f-l,t.top+d+p+f>u&&(i>0||u>r(i))&&(t.top+=d+p+f))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,n,s,a,r=document.getElementsByTagName("body")[0],l=document.createElement("div");for(a in e=document.createElement(r?"div":"body"),n={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&t.extend(n,{position:"absolute",left:"-1000px",top:"-1000px"}),n)e.style[a]=n[a];e.appendChild(l),(i=r||document.documentElement).insertBefore(e,i.firstChild),l.style.cssText="position: absolute; left: 10.7432222px;",s=t(l).offset().left,o=s>10&&11>s,e.innerHTML="",i.removeChild(e)}()}(),t.ui.position,t.widget("ui.accordion",{version:"1.11.2",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),e.collapsible||!1!==e.active&&null!=e.active||(e.active=0),this._processPanels(),0>e.active&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t()}},_createIcons:function(){var e=this.options.icons;e&&(t("<span>").addClass("ui-accordion-header-icon ui-icon "+e.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(),this._destroyIcons(),t=this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){return"active"===t?void this._activate(e):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||!1!==this.options.active||this._activate(0),"icons"===t&&(this._destroyIcons(),e&&this._createIcons()),void("disabled"===t&&(this.element.toggleClass("ui-state-disabled",!!e).attr("aria-disabled",e),this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!e))))},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,n=this.headers.length,s=this.headers.index(e.target),o=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:o=this.headers[(s+1)%n];break;case i.LEFT:case i.UP:o=this.headers[(s-1+n)%n];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:o=this.headers[0];break;case i.END:o=this.headers[n-1]}o&&(t(e.target).attr("tabIndex",-1),t(o).attr("tabIndex",0),o.focus(),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().focus()},refresh:function(){var e=this.options;this._processPanels(),!1===e.active&&!0===e.collapsible||!this.headers.length?(e.active=!1,this.active=t()):!1===e.active?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var t=this.headers,e=this.panels;this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"),this.panels=this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(),e&&(this._off(t.not(this.headers)),this._off(e.not(this.panels)))},_refresh:function(){var e,i=this.options,n=i.heightStyle,s=this.element.parent();this.active=this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each((function(){var e=t(this),i=e.uniqueId().attr("id"),n=e.next(),s=n.uniqueId().attr("id");e.attr("aria-controls",s),n.attr("aria-labelledby",i)})).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===n?(e=s.height(),this.element.siblings(":visible").each((function(){var i=t(this),n=i.css("position");"absolute"!==n&&"fixed"!==n&&(e-=i.outerHeight(!0))})),this.headers.each((function(){e-=t(this).outerHeight(!0)})),this.headers.next().each((function(){t(this).height(Math.max(0,e-t(this).innerHeight()+t(this).height()))})).css("overflow","auto")):"auto"===n&&(e=0,this.headers.next().each((function(){e=Math.max(e,t(this).css("height","").height())})).height(e))},_activate:function(e){var i=this._findActive(e)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),(function(t,e){i[e]="_eventHandler"})),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i=this.options,n=this.active,s=t(e.currentTarget),o=s[0]===n[0],a=o&&i.collapsible,r=a?t():s.next(),l=n.next(),c={oldHeader:n,oldPanel:l,newHeader:a?t():s,newPanel:r};e.preventDefault(),o&&!i.collapsible||!1===this._trigger("beforeActivate",e,c)||(i.active=!a&&this.headers.index(s),this.active=o?t():s,this._toggle(c),n.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&n.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),o||(s.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&s.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),s.next().addClass("ui-accordion-content-active")))},_toggle:function(e){var i=e.newPanel,n=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=n,this.options.animate?this._animate(i,n,e):(n.hide(),i.show(),this._toggleComplete(e)),n.attr({"aria-hidden":"true"}),n.prev().attr("aria-selected","false"),i.length&&n.length?n.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter((function(){return 0===t(this).attr("tabIndex")})).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true",tabIndex:0,"aria-expanded":"true"})},_animate:function(t,e,i){var n,s,o,a=this,r=0,l=t.length&&(!e.length||t.index()<e.index()),c=this.options.animate||{},h=l&&c.down||c,u=function(){a._toggleComplete(i)};return"number"==typeof h&&(o=h),"string"==typeof h&&(s=h),s=s||h.easing||c.easing,o=o||h.duration||c.duration,e.length?t.length?(n=t.show().outerHeight(),e.animate(this.hideProps,{duration:o,easing:s,step:function(t,e){e.now=Math.round(t)}}),void t.hide().animate(this.showProps,{duration:o,easing:s,complete:u,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?r+=i.now:"content"!==a.options.heightStyle&&(i.now=Math.round(n-e.outerHeight()-r),r=0)}})):e.animate(this.hideProps,o,s,u):t.animate(this.showProps,o,s,u)},_toggleComplete:function(t){var e=t.oldPanel;e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}}),t.widget("ui.menu",{version:"1.11.2",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault()},"click .ui-menu-item":function(e){var i=t(e.target);!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&t(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){if(!this.previousFilter){var i=t(e.currentTarget);i.siblings(".ui-state-active").removeClass("ui-state-active"),this.focus(e,i)}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.find(this.options.items).eq(0);e||this.focus(t,i)},blur:function(e){this._delay((function(){t.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(e)}))},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each((function(){var e=t(this);e.data("ui-menu-submenu-carat")&&e.remove()})),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(e){var i,n,s,o,a=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:a=!1,n=this.previousFilter||"",s=String.fromCharCode(e.keyCode),o=!1,clearTimeout(this.filterTimer),s===n?o=!0:s=n+s,i=this._filterMenuItems(s),(i=o&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i).length||(s=String.fromCharCode(e.keyCode),i=this._filterMenuItems(s)),i.length?(this.focus(e,i),this.previousFilter=s,this.filterTimer=this._delay((function(){delete this.previousFilter}),1e3)):delete this.previousFilter}a&&e.preventDefault()},_activate:function(t){this.active.is(".ui-state-disabled")||(this.active.is("[aria-haspopup='true']")?this.expand(t):this.select(t))},refresh:function(){var e,i=this,n=this.options.icons.submenu,s=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each((function(){var e=t(this),i=e.parent(),s=t("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",!0);i.attr("aria-haspopup","true").prepend(s),e.attr("aria-labelledby",i.attr("id"))})),(e=s.add(this.element).find(this.options.items)).not(".ui-menu-item").each((function(){var e=t(this);i._isDivider(e)&&e.addClass("ui-widget-content ui-menu-divider")})),e.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),e.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){"icons"===t&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu),"disabled"===t&&this.element.toggleClass("ui-state-disabled",!!e).attr("aria-disabled",e),this._super(t,e)},focus:function(t,e){var i,n;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),n=this.active.addClass("ui-state-focus").removeClass("ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",n.attr("id")),this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay((function(){this._close()}),this.delay),(i=e.children(".ui-menu")).length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,n,s,o,a,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,n=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,s=e.offset().top-this.activeMenu.offset().top-i-n,o=this.activeMenu.scrollTop(),a=this.activeMenu.height(),r=e.outerHeight(),0>s?this.activeMenu.scrollTop(o+s):s+r>a&&this.activeMenu.scrollTop(o+s-a+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this.active.removeClass("ui-state-focus"),this.active=null,this._trigger("blur",t,{item:this.active}))},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay((function(){this._close(),this._open(t)}),this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay((function(){var n=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));n.length||(n=this.element),this._close(n),this.blur(e),this.activeMenu=n}),this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(e){return!t(e.target).closest(".ui-menu").length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();e&&e.length&&(this._open(e.parent()),this._delay((function(){this.focus(t,e)})))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var n;this.active&&(n="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),n&&n.length&&this.active||(n=this.activeMenu.find(this.options.items)[e]()),this.focus(i,n)},nextPage:function(e){var i,n,s;return this.active?void(this.isLastItem()||(this._hasScroll()?(n=this.active.offset().top,s=this.element.height(),this.active.nextAll(".ui-menu-item").each((function(){return 0>(i=t(this)).offset().top-n-s})),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items)[this.active?"last":"first"]()))):void this.next(e)},previousPage:function(e){var i,n,s;return this.active?void(this.isFirstItem()||(this._hasScroll()?(n=this.active.offset().top,s=this.element.height(),this.active.prevAll(".ui-menu-item").each((function(){return(i=t(this)).offset().top-n+s>0})),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items).first()))):void this.next(e)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)},_filterMenuItems:function(e){var i=e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),n=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter((function(){return n.test(t.trim(t(this).text()))}))}}),t.widget("ui.autocomplete",{version:"1.11.2",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,i,n,s=this.element[0].nodeName.toLowerCase(),o="textarea"===s,a="input"===s;this.isMultiLine=!!o||!a&&this.element.prop("isContentEditable"),this.valueMethod=this.element[o||a?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(s){if(this.element.prop("readOnly"))return e=!0,n=!0,void(i=!0);e=!1,n=!1,i=!1;var o=t.ui.keyCode;switch(s.keyCode){case o.PAGE_UP:e=!0,this._move("previousPage",s);break;case o.PAGE_DOWN:e=!0,this._move("nextPage",s);break;case o.UP:e=!0,this._keyEvent("previous",s);break;case o.DOWN:e=!0,this._keyEvent("next",s);break;case o.ENTER:this.menu.active&&(e=!0,s.preventDefault(),this.menu.select(s));break;case o.TAB:this.menu.active&&this.menu.select(s);break;case o.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(s),s.preventDefault());break;default:i=!0,this._searchTimeout(s)}},keypress:function(n){if(e)return e=!1,void((!this.isMultiLine||this.menu.element.is(":visible"))&&n.preventDefault());if(!i){var s=t.ui.keyCode;switch(n.keyCode){case s.PAGE_UP:this._move("previousPage",n);break;case s.PAGE_DOWN:this._move("nextPage",n);break;case s.UP:this._keyEvent("previous",n);break;case s.DOWN:this._keyEvent("next",n)}}},input:function(t){return n?(n=!1,void t.preventDefault()):void this._searchTimeout(t)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?void delete this.cancelBlur:(clearTimeout(this.searching),this.close(t),void this._change(t))}}),this._initSource(),this.menu=t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay((function(){delete this.cancelBlur}));var i=this.menu.element[0];t(e.target).closest(".ui-menu-item").length||this._delay((function(){var e=this;this.document.one("mousedown",(function(n){n.target===e.element[0]||n.target===i||t.contains(i,n.target)||e.close()}))}))},menufocus:function(e,i){var n,s;return this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type))?(this.menu.blur(),void this.document.one("mousemove",(function(){t(e.target).trigger(e.originalEvent)}))):(s=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",e,{item:s})&&e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(s.value),void((n=i.item.attr("aria-label")||s.value)&&t.trim(n).length&&(this.liveRegion.children().hide(),t("<div>").text(n).appendTo(this.liveRegion))))},menuselect:function(t,e){var i=e.item.data("ui-autocomplete-item"),n=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=n,this._delay((function(){this.previous=n,this.selectedItem=i}))),!1!==this._trigger("select",t,{item:i})&&this._value(i.value),this.term=this._value(),this.close(t),this.selectedItem=i}}),this.liveRegion=t("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,n=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,n){n(t.ui.autocomplete.filter(e,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,s){n.xhr&&n.xhr.abort(),n.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){s(t)},error:function(){s([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay((function(){var e=this.term===this._value(),i=this.menu.element.is(":visible"),n=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;(!e||e&&!i&&!n)&&(this.selectedItem=null,this.search(null,t))}),this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):!1!==this._trigger("search",e)?this._search(t):void 0},_search:function(t){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return t.proxy((function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")}),this)},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,(function(e){return"string"==typeof e?{label:e,value:e}:t.extend({},e,{label:e.label||e.value,value:e.value||e.label})}))},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var n=this;t.each(i,(function(t,i){n._renderItemData(e,i)}))},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,i){return t("<li>").text(i.label).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this.isMultiLine||this._value(this.term),void this.menu.blur()):void this.menu[t](e):void this.search(null,e)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(t,e),e.preventDefault())}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,i){var n=RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,(function(t){return n.test(t.label||t.value||t)}))}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.children().hide(),t("<div>").text(i).appendTo(this.liveRegion))}}),t.ui.autocomplete;var d,p,f="ui-button ui-widget ui-state-default ui-corner-all",g="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",m=function(){var e=t(this);setTimeout((function(){e.find(":ui-button").button("refresh")}),1)},v=function(e){var i=e.name,n=e.form,s=t([]);return i&&(i=i.replace(/'/g,"\\'"),s=n?t(n).find("[name='"+i+"'][type=radio]"):t("[name='"+i+"'][type=radio]",e.ownerDocument).filter((function(){return!this.form}))),s};t.widget("ui.button",{version:"1.11.2",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,m),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var e=this,i=this.options,n="checkbox"===this.type||"radio"===this.type,s=n?"":"ui-state-active";null===i.label&&(i.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(f).attr("role","button").bind("mouseenter"+this.eventNamespace,(function(){i.disabled||this===d&&t(this).addClass("ui-state-active")})).bind("mouseleave"+this.eventNamespace,(function(){i.disabled||t(this).removeClass(s)})).bind("click"+this.eventNamespace,(function(t){i.disabled&&(t.preventDefault(),t.stopImmediatePropagation())})),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),n&&this.element.bind("change"+this.eventNamespace,(function(){e.refresh()})),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,(function(){return!i.disabled&&void 0})):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,(function(){if(i.disabled)return!1;t(this).addClass("ui-state-active"),e.buttonElement.attr("aria-pressed","true");var n=e.element[0];v(n).not(n).map((function(){return t(this).button("widget")[0]})).removeClass("ui-state-active").attr("aria-pressed","false")})):(this.buttonElement.bind("mousedown"+this.eventNamespace,(function(){return!i.disabled&&(t(this).addClass("ui-state-active"),d=this,void e.document.one("mouseup",(function(){d=null})))})).bind("mouseup"+this.eventNamespace,(function(){return!i.disabled&&void t(this).removeClass("ui-state-active")})).bind("keydown"+this.eventNamespace,(function(e){return!i.disabled&&void((e.keyCode===t.ui.keyCode.SPACE||e.keyCode===t.ui.keyCode.ENTER)&&t(this).addClass("ui-state-active"))})).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,(function(){t(this).removeClass("ui-state-active")})),this.buttonElement.is("a")&&this.buttonElement.keyup((function(e){e.keyCode===t.ui.keyCode.SPACE&&t(this).click()}))),this._setOption("disabled",i.disabled),this._resetButton()},_determineButtonType:function(){var t,e,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(t=this.element.parents().last(),e="label[for='"+this.element.attr("id")+"']",this.buttonElement=t.find(e),this.buttonElement.length||(t=t.length?t.siblings():this.element.siblings(),this.buttonElement=t.filter(e),this.buttonElement.length||(this.buttonElement=t.find(e))),this.element.addClass("ui-helper-hidden-accessible"),(i=this.element.is(":checked"))&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(f+" ui-state-active "+g).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(t,e){return this._super(t,e),"disabled"===t?(this.widget().toggleClass("ui-state-disabled",!!e),this.element.prop("disabled",!!e),void(e&&("checkbox"===this.type||"radio"===this.type?this.buttonElement.removeClass("ui-state-focus"):this.buttonElement.removeClass("ui-state-focus ui-state-active")))):void this._resetButton()},refresh:function(){var e=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");e!==this.options.disabled&&this._setOption("disabled",e),"radio"===this.type?v(this.element[0]).each((function(){t(this).is(":checked")?t(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")})):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"!==this.type){var e=this.buttonElement.removeClass(g),i=t("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),n=this.options.icons,s=n.primary&&n.secondary,o=[];n.primary||n.secondary?(this.options.text&&o.push("ui-button-text-icon"+(s?"s":n.primary?"-primary":"-secondary")),n.primary&&e.prepend("<span class='ui-button-icon-primary ui-icon "+n.primary+"'></span>"),n.secondary&&e.append("<span class='ui-button-icon-secondary ui-icon "+n.secondary+"'></span>"),this.options.text||(o.push(s?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||e.attr("title",t.trim(i)))):o.push("ui-button-text-only"),e.addClass(o.join(" "))}else this.options.label&&this.element.val(this.options.label)}}),t.widget("ui.buttonset",{version:"1.11.2",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(t,e){"disabled"===t&&this.buttons.button("option",t,e),this._super(t,e)},refresh:function(){var e="rtl"===this.element.css("direction"),i=this.element.find(this.options.items),n=i.filter(":ui-button");i.not(":ui-button").button(),n.button("refresh"),this.buttons=i.map((function(){return t(this).button("widget")[0]})).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(e?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map((function(){return t(this).button("widget")[0]})).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}}),t.ui.button,t.extend(t.ui,{datepicker:{version:"1.11.2"}}),t.extend(n.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return r(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var n,s,o;s="div"===(n=e.nodeName.toLowerCase())||"span"===n,e.id||(this.uuid+=1,e.id="dp"+this.uuid),(o=this._newInst(t(e),s)).settings=t.extend({},i||{}),"input"===n?this._connectDatepicker(e,o):s&&this._inlineDatepicker(e,o)},_newInst:function(e,i){return{id:e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1"),input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?s(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var n=t(e);i.append=t([]),i.trigger=t([]),n.hasClass(this.markerClassName)||(this._attachments(n,i),n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),t.data(e,"datepicker",i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var n,s,o,a=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),a&&(i.append=t("<span class='"+this._appendClass+"'>"+a+"</span>"),e[r?"before":"after"](i.append)),e.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),("focus"===(n=this._get(i,"showOn"))||"both"===n)&&e.focus(this._showDatepicker),("button"===n||"both"===n)&&(s=this._get(i,"buttonText"),o=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:o,alt:s,title:s}):t("<button type='button'></button>").addClass(this._triggerClass).html(o?t("<img/>").attr({src:o,alt:s,title:s}):s)),e[r?"before":"after"](i.trigger),i.trigger.click((function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1})))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,n,s,o=new Date(2009,11,20),a=this._get(t,"dateFormat");a.match(/[DM]/)&&(e=function(t){for(i=0,n=0,s=0;t.length>s;s++)t[s].length>i&&(i=t[s].length,n=s);return n},o.setMonth(e(this._get(t,a.match(/MM/)?"monthNames":"monthNamesShort"))),o.setDate(e(this._get(t,a.match(/DD/)?"dayNames":"dayNamesShort"))+20-o.getDay())),t.input.attr("size",this._formatDate(t,o).length)}},_inlineDatepicker:function(e,i){var n=t(e);n.hasClass(this.markerClassName)||(n.addClass(this.markerClassName).append(i.dpDiv),t.data(e,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,n,s,o){var a,l,c,h,u,d=this._dialogInst;return d||(this.uuid+=1,a="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+a+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),t("body").append(this._dialogInput),(d=this._dialogInst=this._newInst(this._dialogInput,!1)).settings={},t.data(this._dialogInput[0],"datepicker",d)),r(d.settings,s||{}),i=i&&i.constructor===Date?this._formatDate(d,i):i,this._dialogInput.val(i),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(l=document.documentElement.clientWidth,c=document.documentElement.clientHeight,h=document.documentElement.scrollLeft||document.body.scrollLeft,u=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[l/2-100+h,c/2-150+u]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),d.settings.onSelect=n,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],"datepicker",d),this},_destroyDatepicker:function(e){var i,n=t(e),s=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,"datepicker"),"input"===i?(s.append.remove(),s.trigger.remove(),n.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&n.removeClass(this.markerClassName).empty())},_enableDatepicker:function(e){var i,n,s=t(e),o=t.data(e,"datepicker");s.hasClass(this.markerClassName)&&("input"===(i=e.nodeName.toLowerCase())?(e.disabled=!1,o.trigger.filter("button").each((function(){this.disabled=!1})).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&((n=s.children("."+this._inlineClass)).children().removeClass("ui-state-disabled"),n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,(function(t){return t===e?null:t})))},_disableDatepicker:function(e){var i,n,s=t(e),o=t.data(e,"datepicker");s.hasClass(this.markerClassName)&&("input"===(i=e.nodeName.toLowerCase())?(e.disabled=!0,o.trigger.filter("button").each((function(){this.disabled=!0})).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&((n=s.children("."+this._inlineClass)).children().addClass("ui-state-disabled"),n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,(function(t){return t===e?null:t})),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,"datepicker")}catch(t){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,i,n){var s,o,a,l,c=this._getInst(e);return 2===arguments.length&&"string"==typeof i?"defaults"===i?t.extend({},t.datepicker._defaults):c?"all"===i?t.extend({},c.settings):this._get(c,i):null:(s=i||{},"string"==typeof i&&((s={})[i]=n),void(c&&(this._curInst===c&&this._hideDatepicker(),o=this._getDateDatepicker(e,!0),a=this._getMinMaxDate(c,"min"),l=this._getMinMaxDate(c,"max"),r(c.settings,s),null!==a&&void 0!==s.dateFormat&&void 0===s.minDate&&(c.settings.minDate=this._formatDate(c,a)),null!==l&&void 0!==s.dateFormat&&void 0===s.maxDate&&(c.settings.maxDate=this._formatDate(c,l)),"disabled"in s&&(s.disabled?this._disableDatepicker(e):this._enableDatepicker(e)),this._attachments(t(e),c),this._autoSize(c),this._setDate(c,o),this._updateAlternate(c),this._updateDatepicker(c))))},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,n,s,o=t.datepicker._getInst(e.target),a=!0,r=o.dpDiv.is(".ui-datepicker-rtl");if(o._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),a=!1;break;case 13:return(s=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",o.dpDiv))[0]&&t.datepicker._selectDay(e.target,o.selectedMonth,o.selectedYear,s[0]),(i=t.datepicker._get(o,"onSelect"))?(n=t.datepicker._formatDate(o),i.apply(o.input?o.input[0]:null,[n,o])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),a=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),a=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?1:-1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),a=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?-1:1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),a=e.ctrlKey||e.metaKey;break;default:a=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):a=!1;a&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var i,n,s=t.datepicker._getInst(e.target);return t.datepicker._get(s,"constrainInput")?(i=t.datepicker._possibleChars(t.datepicker._get(s,"dateFormat")),n=String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),e.ctrlKey||e.metaKey||" ">n||!i||i.indexOf(n)>-1):void 0},_doKeyUp:function(e){var i=t.datepicker._getInst(e.target);if(i.input.val()!==i.lastVal)try{t.datepicker.parseDate(t.datepicker._get(i,"dateFormat"),i.input?i.input.val():null,t.datepicker._getFormatConfig(i))&&(t.datepicker._setDateFromField(i),t.datepicker._updateAlternate(i),t.datepicker._updateDatepicker(i))}catch(t){}return!0},_showDatepicker:function(e){var i,n,s,o,a,l,c;"input"!==(e=e.target||e).nodeName.toLowerCase()&&(e=t("input",e.parentNode)[0]),t.datepicker._isDisabledDatepicker(e)||t.datepicker._lastInput===e||(i=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==i&&(t.datepicker._curInst.dpDiv.stop(!0,!0),i&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),!1!==(s=(n=t.datepicker._get(i,"beforeShow"))?n.apply(e,[e,i]):{})&&(r(i.settings,s),i.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(i),t.datepicker._inDialog&&(e.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),o=!1,t(e).parents().each((function(){return!(o|="fixed"===t(this).css("position"))})),a={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(i),a=t.datepicker._checkOffset(i,a,o),i.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":o?"fixed":"absolute",display:"none",left:a.left+"px",top:a.top+"px"}),i.inline||(l=t.datepicker._get(i,"showAnim"),c=t.datepicker._get(i,"duration"),i.dpDiv.css("z-index",function(t){for(var e,i;t.length&&t[0]!==document;){if(("absolute"===(e=t.css("position"))||"relative"===e||"fixed"===e)&&(i=parseInt(t.css("zIndex"),10),!isNaN(i)&&0!==i))return i;t=t.parent()}return 0}(t(e))+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[l]?i.dpDiv.show(l,t.datepicker._get(i,"showOptions"),c):i.dpDiv[l||"show"](l?c:null),t.datepicker._shouldFocusInput(i)&&i.input.focus(),t.datepicker._curInst=i)))},_updateDatepicker:function(e){this.maxRows=4,p=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var i,n=this._getNumberOfMonths(e),s=n[1],a=e.dpDiv.find("."+this._dayOverClass+" a");a.length>0&&o.apply(a.get(0)),e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),s>1&&e.dpDiv.addClass("ui-datepicker-multi-"+s).css("width",17*s+"em"),e.dpDiv[(1!==n[0]||1!==n[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.focus(),e.yearshtml&&(i=e.yearshtml,setTimeout((function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null}),0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(e,i,n){var s=e.dpDiv.outerWidth(),o=e.dpDiv.outerHeight(),a=e.input?e.input.outerWidth():0,r=e.input?e.input.outerHeight():0,l=document.documentElement.clientWidth+(n?0:t(document).scrollLeft()),c=document.documentElement.clientHeight+(n?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?s-a:0,i.left-=n&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=n&&i.top===e.input.offset().top+r?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+s>l&&l>s?Math.abs(i.left+s-l):0),i.top-=Math.min(i.top,i.top+o>c&&c>o?Math.abs(o+r):0),i},_findPos:function(e){for(var i,n=this._getInst(e),s=this._get(n,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[s?"previousSibling":"nextSibling"];return[(i=t(e).offset()).left,i.top]},_hideDatepicker:function(e){var i,n,s,o,a=this._curInst;!a||e&&a!==t.data(e,"datepicker")||this._datepickerShowing&&(i=this._get(a,"showAnim"),n=this._get(a,"duration"),s=function(){t.datepicker._tidyDialog(a)},t.effects&&(t.effects.effect[i]||t.effects[i])?a.dpDiv.hide(i,t.datepicker._get(a,"showOptions"),n,s):a.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?n:null,s),i||s(),this._datepickerShowing=!1,(o=this._get(a,"onClose"))&&o.apply(a.input?a.input[0]:null,[a.input?a.input.val():"",a]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),n=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==n)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,n){var s=t(e),o=this._getInst(s[0]);this._isDisabledDatepicker(s[0])||(this._adjustInstDate(o,i+("M"===n?this._get(o,"showCurrentAtPos"):0),n),this._updateDatepicker(o))},_gotoToday:function(e){var i,n=t(e),s=this._getInst(n[0]);this._get(s,"gotoCurrent")&&s.currentDay?(s.selectedDay=s.currentDay,s.drawMonth=s.selectedMonth=s.currentMonth,s.drawYear=s.selectedYear=s.currentYear):(i=new Date,s.selectedDay=i.getDate(),s.drawMonth=s.selectedMonth=i.getMonth(),s.drawYear=s.selectedYear=i.getFullYear()),this._notifyChange(s),this._adjustDate(n)},_selectMonthYear:function(e,i,n){var s=t(e),o=this._getInst(s[0]);o["selected"+("M"===n?"Month":"Year")]=o["draw"+("M"===n?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(o),this._adjustDate(s)},_selectDay:function(e,i,n,s){var o,a=t(e);t(s).hasClass(this._unselectableClass)||this._isDisabledDatepicker(a[0])||((o=this._getInst(a[0])).selectedDay=o.currentDay=t("a",s).html(),o.selectedMonth=o.currentMonth=i,o.selectedYear=o.currentYear=n,this._selectDate(e,this._formatDate(o,o.currentDay,o.currentMonth,o.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var n,s=t(e),o=this._getInst(s[0]);i=null!=i?i:this._formatDate(o),o.input&&o.input.val(i),this._updateAlternate(o),(n=this._get(o,"onSelect"))?n.apply(o.input?o.input[0]:null,[i,o]):o.input&&o.input.trigger("change"),o.inline?this._updateDatepicker(o):(this._hideDatepicker(),this._lastInput=o.input[0],"object"!=a(o.input[0])&&o.input.focus(),this._lastInput=null)},_updateAlternate:function(e){var i,n,s,o=this._get(e,"altField");o&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),n=this._getDate(e),s=this.formatDate(i,n,this._getFormatConfig(e)),t(o).each((function(){t(this).val(s)})))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(e,i,n){if(null==e||null==i)throw"Invalid arguments";if(""==(i="object"==a(i)?""+i:i+""))return null;var s,o,r,l,c=0,h=(n?n.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof h?h:(new Date).getFullYear()%100+parseInt(h,10),d=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,p=(n?n.dayNames:null)||this._defaults.dayNames,f=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,g=(n?n.monthNames:null)||this._defaults.monthNames,m=-1,v=-1,b=-1,y=-1,_=!1,w=function(t){var i=e.length>s+1&&e.charAt(s+1)===t;return i&&s++,i},x=function(t){var e=w(t),n="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,s=RegExp("^\\d{"+("y"===t?n:1)+","+n+"}"),o=i.substring(c).match(s);if(!o)throw"Missing number at position "+c;return c+=o[0].length,parseInt(o[0],10)},C=function(e,n,s){var o=-1,a=t.map(w(e)?s:n,(function(t,e){return[[e,t]]})).sort((function(t,e){return-(t[1].length-e[1].length)}));if(t.each(a,(function(t,e){var n=e[1];return i.substr(c,n.length).toLowerCase()===n.toLowerCase()?(o=e[0],c+=n.length,!1):void 0})),-1!==o)return o+1;throw"Unknown name at position "+c},S=function(){if(i.charAt(c)!==e.charAt(s))throw"Unexpected literal at position "+c;c++};for(s=0;e.length>s;s++)if(_)"'"!==e.charAt(s)||w("'")?S():_=!1;else switch(e.charAt(s)){case"d":b=x("d");break;case"D":C("D",d,p);break;case"o":y=x("o");break;case"m":v=x("m");break;case"M":v=C("M",f,g);break;case"y":m=x("y");break;case"@":m=(l=new Date(x("@"))).getFullYear(),v=l.getMonth()+1,b=l.getDate();break;case"!":m=(l=new Date((x("!")-this._ticksTo1970)/1e4)).getFullYear(),v=l.getMonth()+1,b=l.getDate();break;case"'":w("'")?S():_=!0;break;default:S()}if(i.length>c&&(r=i.substr(c),!/^\s+/.test(r)))throw"Extra/unparsed characters found in date: "+r;if(-1===m?m=(new Date).getFullYear():100>m&&(m+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=m?0:-100)),y>-1)for(v=1,b=y;!((o=this._getDaysInMonth(m,v-1))>=b);)v++,b-=o;if((l=this._daylightSavingAdjust(new Date(m,v-1,b))).getFullYear()!==m||l.getMonth()+1!==v||l.getDate()!==b)throw"Invalid date";return l},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:864e9*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var n,s=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,o=(i?i.dayNames:null)||this._defaults.dayNames,a=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,l=function(e){var i=t.length>n+1&&t.charAt(n+1)===e;return i&&n++,i},c=function(t,e,i){var n=""+e;if(l(t))for(;i>n.length;)n="0"+n;return n},h=function(t,e,i,n){return l(t)?n[e]:i[e]},u="",d=!1;if(e)for(n=0;t.length>n;n++)if(d)"'"!==t.charAt(n)||l("'")?u+=t.charAt(n):d=!1;else switch(t.charAt(n)){case"d":u+=c("d",e.getDate(),2);break;case"D":u+=h("D",e.getDay(),s,o);break;case"o":u+=c("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=c("m",e.getMonth()+1,2);break;case"M":u+=h("M",e.getMonth(),a,r);break;case"y":u+=l("y")?e.getFullYear():(10>e.getYear()%100?"0":"")+e.getYear()%100;break;case"@":u+=e.getTime();break;case"!":u+=1e4*e.getTime()+this._ticksTo1970;break;case"'":l("'")?u+="'":d=!0;break;default:u+=t.charAt(n)}return u},_possibleChars:function(t){var e,i="",n=!1,s=function(i){var n=t.length>e+1&&t.charAt(e+1)===i;return n&&e++,n};for(e=0;t.length>e;e++)if(n)"'"!==t.charAt(e)||s("'")?i+=t.charAt(e):n=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":s("'")?i+="'":n=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,e){return void 0!==t.settings[e]?t.settings[e]:this._defaults[e]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),n=t.lastVal=t.input?t.input.val():null,s=this._getDefaultDate(t),o=s,a=this._getFormatConfig(t);try{o=this.parseDate(i,n,a)||s}catch(t){n=e?"":n}t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),t.currentDay=n?o.getDate():0,t.currentMonth=n?o.getMonth():0,t.currentYear=n?o.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,n){var s=null==i||""===i?n:"string"==typeof i?function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(t){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,s=n.getFullYear(),o=n.getMonth(),a=n.getDate(),r=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=r.exec(i);l;){switch(l[2]||"d"){case"d":case"D":a+=parseInt(l[1],10);break;case"w":case"W":a+=7*parseInt(l[1],10);break;case"m":case"M":o+=parseInt(l[1],10),a=Math.min(a,t.datepicker._getDaysInMonth(s,o));break;case"y":case"Y":s+=parseInt(l[1],10),a=Math.min(a,t.datepicker._getDaysInMonth(s,o))}l=r.exec(i)}return new Date(s,o,a)}(i):"number"==typeof i?isNaN(i)?n:function(t){var e=new Date;return e.setDate(e.getDate()+t),e}(i):new Date(i.getTime());return(s=s&&"Invalid Date"==""+s?n:s)&&(s.setHours(0),s.setMinutes(0),s.setSeconds(0),s.setMilliseconds(0)),this._daylightSavingAdjust(s)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var n=!e,s=t.selectedMonth,o=t.selectedYear,a=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=a.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=a.getMonth(),t.drawYear=t.selectedYear=t.currentYear=a.getFullYear(),s===t.selectedMonth&&o===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(n?"":this._formatDate(t))},_getDate:function(t){return!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay))},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),n="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map((function(){var e={prev:function(){t.datepicker._adjustDate(n,-i,"M")},next:function(){t.datepicker._adjustDate(n,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(n)},selectDay:function(){return t.datepicker._selectDay(n,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(n,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(n,this,"Y"),!1}};t(this).bind(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])}))},_generateHTML:function(t){var e,i,n,s,o,a,r,l,c,h,u,d,p,f,g,m,v,b,y,_,w,x,C,S,D,T,k,I,A,E,P,N,O,L,M,H,R,F,W,j=new Date,z=this._daylightSavingAdjust(new Date(j.getFullYear(),j.getMonth(),j.getDate())),$=this._get(t,"isRTL"),B=this._get(t,"showButtonPanel"),U=this._get(t,"hideIfNoPrevNext"),q=this._get(t,"navigationAsDateFormat"),V=this._getNumberOfMonths(t),Y=this._get(t,"showCurrentAtPos"),X=this._get(t,"stepMonths"),G=1!==V[0]||1!==V[1],K=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),J=this._getMinMaxDate(t,"min"),Q=this._getMinMaxDate(t,"max"),Z=t.drawMonth-Y,tt=t.drawYear;if(0>Z&&(Z+=12,tt--),Q)for(e=this._daylightSavingAdjust(new Date(Q.getFullYear(),Q.getMonth()-V[0]*V[1]+1,Q.getDate())),e=J&&J>e?J:e;this._daylightSavingAdjust(new Date(tt,Z,1))>e;)0>--Z&&(Z=11,tt--);for(t.drawMonth=Z,t.drawYear=tt,i=this._get(t,"prevText"),i=q?this.formatDate(i,this._daylightSavingAdjust(new Date(tt,Z-X,1)),this._getFormatConfig(t)):i,n=this._canAdjustMonth(t,-1,tt,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+($?"e":"w")+"'>"+i+"</span></a>":U?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+($?"e":"w")+"'>"+i+"</span></a>",s=this._get(t,"nextText"),s=q?this.formatDate(s,this._daylightSavingAdjust(new Date(tt,Z+X,1)),this._getFormatConfig(t)):s,o=this._canAdjustMonth(t,1,tt,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+($?"w":"e")+"'>"+s+"</span></a>":U?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+($?"w":"e")+"'>"+s+"</span></a>",a=this._get(t,"currentText"),r=this._get(t,"gotoCurrent")&&t.currentDay?K:z,a=q?this.formatDate(a,r,this._getFormatConfig(t)):a,l=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",c=B?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+($?l:"")+(this._isInRange(t,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+a+"</button>":"")+($?"":l)+"</div>":"",h=parseInt(this._get(t,"firstDay"),10),h=isNaN(h)?0:h,u=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),g=this._get(t,"monthNamesShort"),m=this._get(t,"beforeShowDay"),v=this._get(t,"showOtherMonths"),b=this._get(t,"selectOtherMonths"),y=this._getDefaultDate(t),_="",x=0;V[0]>x;x++){for(C="",this.maxRows=4,S=0;V[1]>S;S++){if(D=this._daylightSavingAdjust(new Date(tt,Z,t.selectedDay)),T=" ui-corner-all",k="",G){if(k+="<div class='ui-datepicker-group",V[1]>1)switch(S){case 0:k+=" ui-datepicker-group-first",T=" ui-corner-"+($?"right":"left");break;case V[1]-1:k+=" ui-datepicker-group-last",T=" ui-corner-"+($?"left":"right");break;default:k+=" ui-datepicker-group-middle",T=""}k+="'>"}for(k+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+T+"'>"+(/all|left/.test(T)&&0===x?$?o:n:"")+(/all|right/.test(T)&&0===x?$?n:o:"")+this._generateMonthYearHeader(t,Z,tt,J,Q,x>0||S>0,f,g)+"</div><table class='ui-datepicker-calendar'><thead><tr>",I=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",w=0;7>w;w++)I+="<th scope='col'"+((w+h+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+d[A=(w+h)%7]+"'>"+p[A]+"</span></th>";for(k+=I+"</tr></thead><tbody>",E=this._getDaysInMonth(tt,Z),tt===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,E)),P=(this._getFirstDayOfMonth(tt,Z)-h+7)%7,N=Math.ceil((P+E)/7),O=G&&this.maxRows>N?this.maxRows:N,this.maxRows=O,L=this._daylightSavingAdjust(new Date(tt,Z,1-P)),M=0;O>M;M++){for(k+="<tr>",H=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(L)+"</td>":"",w=0;7>w;w++)R=m?m.apply(t.input?t.input[0]:null,[L]):[!0,""],W=(F=L.getMonth()!==Z)&&!b||!R[0]||J&&J>L||Q&&L>Q,H+="<td class='"+((w+h+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(L.getTime()===D.getTime()&&Z===t.selectedMonth&&t._keyEvent||y.getTime()===L.getTime()&&y.getTime()===D.getTime()?" "+this._dayOverClass:"")+(W?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!v?"":" "+R[1]+(L.getTime()===K.getTime()?" "+this._currentClass:"")+(L.getTime()===z.getTime()?" ui-datepicker-today":""))+"'"+(F&&!v||!R[2]?"":" title='"+R[2].replace(/'/g,"&#39;")+"'")+(W?"":" data-handler='selectDay' data-event='click' data-month='"+L.getMonth()+"' data-year='"+L.getFullYear()+"'")+">"+(F&&!v?"&#xa0;":W?"<span class='ui-state-default'>"+L.getDate()+"</span>":"<a class='ui-state-default"+(L.getTime()===z.getTime()?" ui-state-highlight":"")+(L.getTime()===K.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+"' href='#'>"+L.getDate()+"</a>")+"</td>",L.setDate(L.getDate()+1),L=this._daylightSavingAdjust(L);k+=H+"</tr>"}++Z>11&&(Z=0,tt++),C+=k+="</tbody></table>"+(G?"</div>"+(V[0]>0&&S===V[1]-1?"<div class='ui-datepicker-row-break'></div>":""):"")}_+=C}return _+=c,t._keyEvent=!1,_},_generateMonthYearHeader:function(t,e,i,n,s,o,a,r){var l,c,h,u,d,p,f,g,m=this._get(t,"changeMonth"),v=this._get(t,"changeYear"),b=this._get(t,"showMonthAfterYear"),y="<div class='ui-datepicker-title'>",_="";if(o||!m)_+="<span class='ui-datepicker-month'>"+a[e]+"</span>";else{for(l=n&&n.getFullYear()===i,c=s&&s.getFullYear()===i,_+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",h=0;12>h;h++)(!l||h>=n.getMonth())&&(!c||s.getMonth()>=h)&&(_+="<option value='"+h+"'"+(h===e?" selected='selected'":"")+">"+r[h]+"</option>");_+="</select>"}if(b||(y+=_+(!o&&m&&v?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",o||!v)y+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(u=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),f=(p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e})(u[0]),g=Math.max(f,p(u[1]||"")),f=n?Math.max(f,n.getFullYear()):f,g=s?Math.min(g,s.getFullYear()):g,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";g>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",y+=t.yearshtml,t.yearshtml=null}return y+=this._get(t,"yearSuffix"),b&&(y+=(!o&&m&&v?"":"&#xa0;")+_),y+"</div>"},_adjustInstDate:function(t,e,i){var n=t.drawYear+("Y"===i?e:0),s=t.drawMonth+("M"===i?e:0),o=Math.min(t.selectedDay,this._getDaysInMonth(n,s))+("D"===i?e:0),a=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(n,s,o)));t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),n=this._getMinMaxDate(t,"max"),s=i&&i>e?i:e;return n&&s>n?n:s},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,n){var s=this._getNumberOfMonths(t),o=this._daylightSavingAdjust(new Date(i,n+(0>e?e:s[0]*s[1]),1));return 0>e&&o.setDate(this._getDaysInMonth(o.getFullYear(),o.getMonth())),this._isInRange(t,o)},_isInRange:function(t,e){var i,n,s=this._getMinMaxDate(t,"min"),o=this._getMinMaxDate(t,"max"),a=null,r=null,l=this._get(t,"yearRange");return l&&(i=l.split(":"),n=(new Date).getFullYear(),a=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(a+=n),i[1].match(/[+\-].*/)&&(r+=n)),(!s||e.getTime()>=s.getTime())&&(!o||e.getTime()<=o.getTime())&&(!a||e.getFullYear()>=a)&&(!r||r>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return{shortYearCutoff:e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,n){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var s=e?"object"==a(e)?e:this._daylightSavingAdjust(new Date(n,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),s,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).mousedown(t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each((function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)})):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new n,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.11.2",t.datepicker,t.widget("ui.draggable",t.ui.mouse,{version:"1.11.2",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?void(this.destroyOnClear=!0):(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),void this._mouseDestroy())},_mouseCapture:function(e){var i=this.options;return this._blurActiveElement(e),!(this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0||(this.handle=this._getHandle(e),!this.handle||(this._blockFrames(!0===i.iframeFix?"iframe":i.iframeFix),0)))},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map((function(){var e=t(this);return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]}))},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(e){var i=this.document[0];if(this.handleElement.is(e.target))try{i.activeElement&&"body"!==i.activeElement.nodeName.toLowerCase()&&t(i.activeElement).blur()}catch(t){}},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter((function(){return"fixed"===t(this).css("position")})).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(e),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),!1===this._trigger("start",e)?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._normalizeRightBottom(),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(e,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var n=this._uiHash();if(!1===this._trigger("drag",e,n))return this._mouseUp({}),!1;this.position=n.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,n=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(n=t.ui.ddmanager.drop(this,e)),this.dropped&&(n=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!n||"valid"===this.options.revert&&n||!0===this.options.revert||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,n)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),(function(){!1!==i._trigger("stop",e)&&i._clear()})):!1!==this._trigger("stop",e)&&this._clear(),!1},_mouseUp:function(e){return this._unblockFrames(),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.handleElement.is(e.target)&&this.element.focus(),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(e){return!this.options.handle||!!t(e.target).closest(this.element.find(this.options.handle)).length},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(e){var i=this.options,n=t.isFunction(i.helper),s=n?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),n&&s[0]===this.element[0]&&this._setPositionRelative(),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var e=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,n,s=this.options,o=this.document[0];return this.relativeContainer=null,s.containment?"window"===s.containment?void(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):"document"===s.containment?void(this.containment=[0,0,t(o).width()-this.helperProportions.width-this.margins.left,(t(o).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):s.containment.constructor===Array?void(this.containment=s.containment):("parent"===s.containment&&(s.containment=this.helper[0].parentNode),void((n=(i=t(s.containment))[0])&&(e=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(n.scrollWidth,n.offsetWidth):n.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(n.scrollHeight,n.offsetHeight):n.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i))):void(this.containment=null)},_convertPositionTo:function(t,e){e||(e=this.position);var i="absolute"===t?1:-1,n=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:n?0:this.offset.scroll.top)*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:n?0:this.offset.scroll.left)*i}},_generatePosition:function(t,e){var i,n,s,o,a=this.options,r=this._isRootNode(this.scrollParent[0]),l=t.pageX,c=t.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(n=this.relativeContainer.offset(),i=[this.containment[0]+n.left,this.containment[1]+n.top,this.containment[2]+n.left,this.containment[3]+n.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(c=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(c=i[3]+this.offset.click.top)),a.grid&&(s=a.grid[1]?this.originalPageY+Math.round((c-this.originalPageY)/a.grid[1])*a.grid[1]:this.originalPageY,c=i?s-this.offset.click.top>=i[1]||s-this.offset.click.top>i[3]?s:s-this.offset.click.top>=i[1]?s-a.grid[1]:s+a.grid[1]:s,o=a.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/a.grid[0])*a.grid[0]:this.originalPageX,l=i?o-this.offset.click.left>=i[0]||o-this.offset.click.left>i[2]?o:o-this.offset.click.left>=i[0]?o-a.grid[0]:o+a.grid[0]:o),"y"===a.axis&&(l=this.originalPageX),"x"===a.axis&&(c=this.originalPageY)),{top:c-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(e,i,n){return n=n||this._uiHash(),t.ui.plugin.call(this,e,[i,n,this],!0),/^(drag|start|stop)/.test(e)&&(this.positionAbs=this._convertPositionTo("absolute"),n.offset=this.positionAbs),t.Widget.prototype._trigger.call(this,e,i,n)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i,n){var s=t.extend({},i,{item:n.element});n.sortables=[],t(n.options.connectToSortable).each((function(){var i=t(this).sortable("instance");i&&!i.options.disabled&&(n.sortables.push(i),i.refreshPositions(),i._trigger("activate",e,s))}))},stop:function(e,i,n){var s=t.extend({},i,{item:n.element});n.cancelHelperRemoval=!1,t.each(n.sortables,(function(){var t=this;t.isOver?(t.isOver=0,n.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,s))}))},drag:function(e,i,n){t.each(n.sortables,(function(){var s=!1,o=this;o.positionAbs=n.positionAbs,o.helperProportions=n.helperProportions,o.offset.click=n.offset.click,o._intersectsWith(o.containerCache)&&(s=!0,t.each(n.sortables,(function(){return this.positionAbs=n.positionAbs,this.helperProportions=n.helperProportions,this.offset.click=n.offset.click,this!==o&&this._intersectsWith(this.containerCache)&&t.contains(o.element[0],this.element[0])&&(s=!1),s}))),s?(o.isOver||(o.isOver=1,o.currentItem=i.helper.appendTo(o.element).data("ui-sortable-item",!0),o.options._helper=o.options.helper,o.options.helper=function(){return i.helper[0]},e.target=o.currentItem[0],o._mouseCapture(e,!0),o._mouseStart(e,!0,!0),o.offset.click.top=n.offset.click.top,o.offset.click.left=n.offset.click.left,o.offset.parent.left-=n.offset.parent.left-o.offset.parent.left,o.offset.parent.top-=n.offset.parent.top-o.offset.parent.top,n._trigger("toSortable",e),n.dropped=o.element,t.each(n.sortables,(function(){this.refreshPositions()})),n.currentItem=n.element,o.fromOutside=n),o.currentItem&&(o._mouseDrag(e),i.position=o.position)):o.isOver&&(o.isOver=0,o.cancelHelperRemoval=!0,o.options._revert=o.options.revert,o.options.revert=!1,o._trigger("out",e,o._uiHash(o)),o._mouseStop(e,!0),o.options.revert=o.options._revert,o.options.helper=o.options._helper,o.placeholder&&o.placeholder.remove(),n._refreshOffsets(e),i.position=n._generatePosition(e,!0),n._trigger("fromSortable",e),n.dropped=!1,t.each(n.sortables,(function(){this.refreshPositions()})))}))}}),t.ui.plugin.add("draggable","cursor",{start:function(e,i,n){var s=t("body"),o=n.options;s.css("cursor")&&(o._cursor=s.css("cursor")),s.css("cursor",o.cursor)},stop:function(e,i,n){var s=n.options;s._cursor&&t("body").css("cursor",s._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i,n){var s=t(i.helper),o=n.options;s.css("opacity")&&(o._opacity=s.css("opacity")),s.css("opacity",o.opacity)},stop:function(e,i,n){var s=n.options;s._opacity&&t(i.helper).css("opacity",s._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(e,i,n){var s=n.options,o=!1,a=n.scrollParentNotHidden[0],r=n.document[0];a!==r&&"HTML"!==a.tagName?(s.axis&&"x"===s.axis||(n.overflowOffset.top+a.offsetHeight-e.pageY<s.scrollSensitivity?a.scrollTop=o=a.scrollTop+s.scrollSpeed:e.pageY-n.overflowOffset.top<s.scrollSensitivity&&(a.scrollTop=o=a.scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(n.overflowOffset.left+a.offsetWidth-e.pageX<s.scrollSensitivity?a.scrollLeft=o=a.scrollLeft+s.scrollSpeed:e.pageX-n.overflowOffset.left<s.scrollSensitivity&&(a.scrollLeft=o=a.scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(e.pageY-t(r).scrollTop()<s.scrollSensitivity?o=t(r).scrollTop(t(r).scrollTop()-s.scrollSpeed):t(window).height()-(e.pageY-t(r).scrollTop())<s.scrollSensitivity&&(o=t(r).scrollTop(t(r).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(e.pageX-t(r).scrollLeft()<s.scrollSensitivity?o=t(r).scrollLeft(t(r).scrollLeft()-s.scrollSpeed):t(window).width()-(e.pageX-t(r).scrollLeft())<s.scrollSensitivity&&(o=t(r).scrollLeft(t(r).scrollLeft()+s.scrollSpeed)))),!1!==o&&t.ui.ddmanager&&!s.dropBehaviour&&t.ui.ddmanager.prepareOffsets(n,e)}}),t.ui.plugin.add("draggable","snap",{start:function(e,i,n){var s=n.options;n.snapElements=[],t(s.snap.constructor!==String?s.snap.items||":data(ui-draggable)":s.snap).each((function(){var e=t(this),i=e.offset();this!==n.element[0]&&n.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:i.top,left:i.left})}))},drag:function(e,i,n){var s,o,a,r,l,c,h,u,d,p,f=n.options,g=f.snapTolerance,m=i.offset.left,v=m+n.helperProportions.width,b=i.offset.top,y=b+n.helperProportions.height;for(d=n.snapElements.length-1;d>=0;d--)c=(l=n.snapElements[d].left-n.margins.left)+n.snapElements[d].width,u=(h=n.snapElements[d].top-n.margins.top)+n.snapElements[d].height,l-g>v||m>c+g||h-g>y||b>u+g||!t.contains(n.snapElements[d].item.ownerDocument,n.snapElements[d].item)?(n.snapElements[d].snapping&&n.options.snap.release&&n.options.snap.release.call(n.element,e,t.extend(n._uiHash(),{snapItem:n.snapElements[d].item})),n.snapElements[d].snapping=!1):("inner"!==f.snapMode&&(s=g>=Math.abs(h-y),o=g>=Math.abs(u-b),a=g>=Math.abs(l-v),r=g>=Math.abs(c-m),s&&(i.position.top=n._convertPositionTo("relative",{top:h-n.helperProportions.height,left:0}).top),o&&(i.position.top=n._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.left=n._convertPositionTo("relative",{top:0,left:l-n.helperProportions.width}).left),r&&(i.position.left=n._convertPositionTo("relative",{top:0,left:c}).left)),p=s||o||a||r,"outer"!==f.snapMode&&(s=g>=Math.abs(h-b),o=g>=Math.abs(u-y),a=g>=Math.abs(l-m),r=g>=Math.abs(c-v),s&&(i.position.top=n._convertPositionTo("relative",{top:h,left:0}).top),o&&(i.position.top=n._convertPositionTo("relative",{top:u-n.helperProportions.height,left:0}).top),a&&(i.position.left=n._convertPositionTo("relative",{top:0,left:l}).left),r&&(i.position.left=n._convertPositionTo("relative",{top:0,left:c-n.helperProportions.width}).left)),!n.snapElements[d].snapping&&(s||o||a||r||p)&&n.options.snap.snap&&n.options.snap.snap.call(n.element,e,t.extend(n._uiHash(),{snapItem:n.snapElements[d].item})),n.snapElements[d].snapping=s||o||a||r||p)}}),t.ui.plugin.add("draggable","stack",{start:function(e,i,n){var s,o=n.options,a=t.makeArray(t(o.stack)).sort((function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)}));a.length&&(s=parseInt(t(a[0]).css("zIndex"),10)||0,t(a).each((function(e){t(this).css("zIndex",s+e)})),this.css("zIndex",s+a.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i,n){var s=t(i.helper),o=n.options;s.css("zIndex")&&(o._zIndex=s.css("zIndex")),s.css("zIndex",o.zIndex)},stop:function(e,i,n){var s=n.options;s._zIndex&&t(i.helper).css("zIndex",s._zIndex)}}),t.ui.draggable,t.widget("ui.resizable",t.ui.mouse,{version:"1.11.2",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseInt(t,10)||0},_isNumber:function(t){return!isNaN(parseInt(t,10))},_hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1;var n=i&&"left"===i?"scrollLeft":"scrollTop",s=!1;return e[n]>0||(e[n]=1,s=e[n]>0,e[n]=0,s)},_create:function(){var e,i,n,s,o=this,a=this.options;if(this.element.addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!a.aspectRatio,aspectRatio:a.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:a.helper||a.ghost||a.animate?a.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=a.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),e=this.handles.split(","),this.handles={},i=0;e.length>i;i++)n=t.trim(e[i]),(s=t("<div class='ui-resizable-handle ui-resizable-"+n+"'></div>")).css({zIndex:a.zIndex}),"se"===n&&s.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[n]=".ui-resizable-"+n,this.element.append(s);this._renderAxis=function(e){var i,n,s,o;for(i in e=e||this.element,this.handles)this.handles[i].constructor===String&&(this.handles[i]=this.element.children(this.handles[i]).first().show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(n=t(this.handles[i],this.element),o=/sw|ne|nw|se|n|s/.test(i)?n.outerHeight():n.outerWidth(),s=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(s,o),this._proportionallyResize()),t(this.handles[i]).length},this._renderAxis(this.element),this._handles=t(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover((function(){o.resizing||(this.className&&(s=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=s&&s[1]?s[1]:"se")})),a.autoHide&&(this._handles.hide(),t(this.element).addClass("ui-resizable-autohide").mouseenter((function(){a.disabled||(t(this).removeClass("ui-resizable-autohide"),o._handles.show())})).mouseleave((function(){a.disabled||o.resizing||(t(this).addClass("ui-resizable-autohide"),o._handles.hide())}))),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e,i=function(e){t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(e){var i,n,s=!1;for(i in this.handles)((n=t(this.handles[i])[0])===e.target||t.contains(n,e.target))&&(s=!0);return!this.options.disabled&&s},_mouseStart:function(e){var i,n,s,o=this.options,a=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),n=this._num(this.helper.css("top")),o.containment&&(i+=t(o.containment).scrollLeft()||0,n+=t(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:n},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:a.width(),height:a.height()},this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()},this.originalPosition={left:i,top:n},this.originalMousePosition={left:e.pageX,top:e.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,s=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===s?this.axis+"-resize":s),a.addClass("ui-resizable-resizing"),this._propagate("start",e),!0},_mouseDrag:function(e){var i,n,s=this.originalMousePosition,o=this.axis,a=e.pageX-s.left||0,r=e.pageY-s.top||0,l=this._change[o];return this._updatePrevProperties(),!!l&&(i=l.apply(this,[e,a,r]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),n=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(n)||(this._updatePrevProperties(),this._trigger("resize",e,this.ui()),this._applyChanges()),!1)},_mouseStop:function(e){this.resizing=!1;var i,n,s,o,a,r,l,c=this.options,h=this;return this._helper&&(s=(n=(i=this._proportionallyResizeElements).length&&/textarea/i.test(i[0].nodeName))&&this._hasScroll(i[0],"left")?0:h.sizeDiff.height,o=n?0:h.sizeDiff.width,a={width:h.helper.width()-o,height:h.helper.height()-s},r=parseInt(h.element.css("left"),10)+(h.position.left-h.originalPosition.left)||null,l=parseInt(h.element.css("top"),10)+(h.position.top-h.originalPosition.top)||null,c.animate||this.element.css(t.extend(a,{top:l,left:r})),h.helper.height(h.size.height),h.helper.width(h.size.width),this._helper&&!c.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var e,i,n,s,o,a=this.options;o={minWidth:this._isNumber(a.minWidth)?a.minWidth:0,maxWidth:this._isNumber(a.maxWidth)?a.maxWidth:1/0,minHeight:this._isNumber(a.minHeight)?a.minHeight:0,maxHeight:this._isNumber(a.maxHeight)?a.maxHeight:1/0},(this._aspectRatio||t)&&(e=o.minHeight*this.aspectRatio,n=o.minWidth/this.aspectRatio,i=o.maxHeight*this.aspectRatio,s=o.maxWidth/this.aspectRatio,e>o.minWidth&&(o.minWidth=e),n>o.minHeight&&(o.minHeight=n),o.maxWidth>i&&(o.maxWidth=i),o.maxHeight>s&&(o.maxHeight=s)),this._vBoundaries=o},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,i=this.size,n=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===n&&(t.left=e.left+(i.width-t.width),t.top=null),"nw"===n&&(t.top=e.top+(i.height-t.height),t.left=e.left+(i.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,i=this.axis,n=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,s=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,o=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,a=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,r=this.originalPosition.left+this.originalSize.width,l=this.position.top+this.size.height,c=/sw|nw|w/.test(i),h=/nw|ne|n/.test(i);return o&&(t.width=e.minWidth),a&&(t.height=e.minHeight),n&&(t.width=e.maxWidth),s&&(t.height=e.maxHeight),o&&c&&(t.left=r-e.minWidth),n&&c&&(t.left=r-e.maxWidth),a&&h&&(t.top=l-e.minHeight),s&&h&&(t.top=l-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var e=0,i=[],n=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],s=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];4>e;e++)i[e]=parseInt(n[e],10)||0,i[e]+=parseInt(s[e],10)||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,i=this.helper||this.element;this._proportionallyResizeElements.length>e;e++)t=this._proportionallyResizeElements[e],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize;return{left:this.originalPosition.left+e,width:i.width-e}},n:function(t,e,i){var n=this.originalSize,s=this.originalPosition;return{top:s.top+i,height:n.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,n){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,n]))},sw:function(e,i,n){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,n]))},ne:function(e,i,n){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,n]))},nw:function(e,i,n){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,n]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).resizable("instance"),n=i.options,s=i._proportionallyResizeElements,o=s.length&&/textarea/i.test(s[0].nodeName),a=o&&i._hasScroll(s[0],"left")?0:i.sizeDiff.height,r=o?0:i.sizeDiff.width,l={width:i.size.width-r,height:i.size.height-a},c=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,h=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(l,h&&c?{top:h,left:c}:{}),{duration:n.animateDuration,easing:n.animateEasing,step:function(){var n={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};s&&s.length&&t(s[0]).css({width:n.width,height:n.height}),i._updateCache(n),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var e,i,n,s,o,a,r,l=t(this).resizable("instance"),c=l.options,h=l.element,u=c.containment,d=u instanceof t?u.get(0):/parent/.test(u)?h.parent().get(0):u;d&&(l.containerElement=t(d),/document/.test(u)||u===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(e=t(d),i=[],t(["Top","Right","Left","Bottom"]).each((function(t,n){i[t]=l._num(e.css("padding"+n))})),l.containerOffset=e.offset(),l.containerPosition=e.position(),l.containerSize={height:e.innerHeight()-i[3],width:e.innerWidth()-i[1]},n=l.containerOffset,s=l.containerSize.height,o=l.containerSize.width,a=l._hasScroll(d,"left")?d.scrollWidth:o,r=l._hasScroll(d)?d.scrollHeight:s,l.parentData={element:d,left:n.left,top:n.top,width:a,height:r}))},resize:function(e){var i,n,s,o,a=t(this).resizable("instance"),r=a.options,l=a.containerOffset,c=a.position,h=a._aspectRatio||e.shiftKey,u={top:0,left:0},d=a.containerElement,p=!0;d[0]!==document&&/static/.test(d.css("position"))&&(u=l),c.left<(a._helper?l.left:0)&&(a.size.width=a.size.width+(a._helper?a.position.left-l.left:a.position.left-u.left),h&&(a.size.height=a.size.width/a.aspectRatio,p=!1),a.position.left=r.helper?l.left:0),c.top<(a._helper?l.top:0)&&(a.size.height=a.size.height+(a._helper?a.position.top-l.top:a.position.top),h&&(a.size.width=a.size.height*a.aspectRatio,p=!1),a.position.top=a._helper?l.top:0),s=a.containerElement.get(0)===a.element.parent().get(0),o=/relative|absolute/.test(a.containerElement.css("position")),s&&o?(a.offset.left=a.parentData.left+a.position.left,a.offset.top=a.parentData.top+a.position.top):(a.offset.left=a.element.offset().left,a.offset.top=a.element.offset().top),i=Math.abs(a.sizeDiff.width+(a._helper?a.offset.left-u.left:a.offset.left-l.left)),n=Math.abs(a.sizeDiff.height+(a._helper?a.offset.top-u.top:a.offset.top-l.top)),i+a.size.width>=a.parentData.width&&(a.size.width=a.parentData.width-i,h&&(a.size.height=a.size.width/a.aspectRatio,p=!1)),n+a.size.height>=a.parentData.height&&(a.size.height=a.parentData.height-n,h&&(a.size.width=a.size.height*a.aspectRatio,p=!1)),p||(a.position.left=a.prevPosition.left,a.position.top=a.prevPosition.top,a.size.width=a.prevSize.width,a.size.height=a.prevSize.height)},stop:function(){var e=t(this).resizable("instance"),i=e.options,n=e.containerOffset,s=e.containerPosition,o=e.containerElement,a=t(e.helper),r=a.offset(),l=a.outerWidth()-e.sizeDiff.width,c=a.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(o.css("position"))&&t(this).css({left:r.left-s.left-n.left,width:l,height:c}),e._helper&&!i.animate&&/static/.test(o.css("position"))&&t(this).css({left:r.left-s.left-n.left,width:l,height:c})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).resizable("instance").options,i=function(e){t(e).each((function(){var e=t(this);e.data("ui-resizable-alsoresize",{width:parseInt(e.width(),10),height:parseInt(e.height(),10),left:parseInt(e.css("left"),10),top:parseInt(e.css("top"),10)})}))};"object"!=a(e.alsoResize)||e.alsoResize.parentNode?i(e.alsoResize):e.alsoResize.length?(e.alsoResize=e.alsoResize[0],i(e.alsoResize)):t.each(e.alsoResize,(function(t){i(t)}))},resize:function(e,i){var n=t(this).resizable("instance"),s=n.options,o=n.originalSize,r=n.originalPosition,l={height:n.size.height-o.height||0,width:n.size.width-o.width||0,top:n.position.top-r.top||0,left:n.position.left-r.left||0},c=function(e,n){t(e).each((function(){var e=t(this),s=t(this).data("ui-resizable-alsoresize"),o={},a=n&&n.length?n:e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(a,(function(t,e){var i=(s[e]||0)+(l[e]||0);i&&i>=0&&(o[e]=i||null)})),e.css(o)}))};"object"!=a(s.alsoResize)||s.alsoResize.nodeType?c(s.alsoResize):t.each(s.alsoResize,(function(t,e){c(t,e)}))},stop:function(){t(this).removeData("resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).resizable("instance"),i=e.options,n=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:n.height,width:n.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).resizable("instance");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).resizable("instance");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e,i=t(this).resizable("instance"),n=i.options,s=i.size,o=i.originalSize,a=i.originalPosition,r=i.axis,l="number"==typeof n.grid?[n.grid,n.grid]:n.grid,c=l[0]||1,h=l[1]||1,u=Math.round((s.width-o.width)/c)*c,d=Math.round((s.height-o.height)/h)*h,p=o.width+u,f=o.height+d,g=n.maxWidth&&p>n.maxWidth,m=n.maxHeight&&f>n.maxHeight,v=n.minWidth&&n.minWidth>p,b=n.minHeight&&n.minHeight>f;n.grid=l,v&&(p+=c),b&&(f+=h),g&&(p-=c),m&&(f-=h),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=a.top-d):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=a.left-u):((0>=f-h||0>=p-c)&&(e=i._getPaddingPlusBorderDimensions(this)),f-h>0?(i.size.height=f,i.position.top=a.top-d):(f=h-e.height,i.size.height=f,i.position.top=a.top+o.height-f),p-c>0?(i.size.width=p,i.position.left=a.left-u):(p=h-e.height,i.size.width=p,i.position.left=a.left+o.width-p))}}),t.ui.resizable,t.widget("ui.dialog",{version:"1.11.2",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"Close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top;0>i&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),(t=e.parent.children().eq(e.index)).length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:t.noop,enable:t.noop,close:function(e){var i,n=this;if(this._isOpen&&!1!==this._trigger("beforeClose",e)){if(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),!this.opener.filter(":focusable").focus().length)try{(i=this.document[0].activeElement)&&"body"!==i.nodeName.toLowerCase()&&t(i).blur()}catch(t){}this._hide(this.uiDialog,this.options.hide,(function(){n._trigger("close",e)}))}},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,i){var n=!1,s=this.uiDialog.siblings(".ui-front:visible").map((function(){return+t(this).css("z-index")})).get(),o=Math.max.apply(null,s);return o>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",o+1),n=!0),n&&!i&&this._trigger("focus",e),n},open:function(){var e=this;return this._isOpen?void(this._moveToTop()&&this._focusTabbable()):(this._isOpen=!0,this.opener=t(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,(function(){e._focusTabbable(),e._trigger("focus")})),this._makeFocusTarget(),void this._trigger("open"))},_focusTabbable:function(){var t=this._focusedElement;t||(t=this.element.find("[autofocus]")),t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).focus()},_keepFocus:function(e){function i(){var e=this.document[0].activeElement;this.uiDialog[0]===e||t.contains(this.uiDialog[0],e)||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),void this.close(e);if(e.keyCode===t.ui.keyCode.TAB&&!e.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),n=i.filter(":first"),s=i.filter(":last");e.target!==s[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==n[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(this._delay((function(){s.focus()})),e.preventDefault()):(this._delay((function(){n.focus()})),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=t("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(e),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title||t.html("&#160;"),t.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?void this.uiDialog.removeClass("ui-dialog-buttons"):(t.each(i,(function(i,n){var s,o;n=t.isFunction(n)?{click:n,text:i}:n,n=t.extend({type:"button"},n),s=n.click,n.click=function(){s.apply(e.element[0],arguments)},o={icons:n.icons,text:n.showText},delete n.icons,delete n.showText,t("<button></button>",n).button(o).appendTo(e.uiButtonSet)})),this.uiDialog.addClass("ui-dialog-buttons"),void this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var i=this,n=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(n,s){t(this).addClass("ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",n,e(s))},drag:function(t,n){i._trigger("drag",t,e(n))},stop:function(s,o){var a=o.offset.left-i.document.scrollLeft(),r=o.offset.top-i.document.scrollTop();n.position={my:"left top",at:"left"+(a>=0?"+":"")+a+" top"+(r>=0?"+":"")+r,of:i.window},t(this).removeClass("ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",s,e(o))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var i=this,n=this.options,s=n.resizable,o=this.uiDialog.css("position"),a="string"==typeof s?s:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:n.maxWidth,maxHeight:n.maxHeight,minWidth:n.minWidth,minHeight:this._minHeight(),handles:a,start:function(n,s){t(this).addClass("ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",n,e(s))},resize:function(t,n){i._trigger("resize",t,e(n))},stop:function(s,o){var a=i.uiDialog.offset(),r=a.left-i.document.scrollLeft(),l=a.top-i.document.scrollTop();n.height=i.uiDialog.height(),n.width=i.uiDialog.width(),n.position={my:"left top",at:"left"+(r>=0?"+":"")+r+" top"+(l>=0?"+":"")+l,of:i.window},t(this).removeClass("ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",s,e(o))}}).css("position",o)},_trackFocus:function(){this._on(this.widget(),{focusin:function(e){this._makeFocusTarget(),this._focusedElement=t(e.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var e=this._trackingInstances(),i=t.inArray(this,e);-1!==i&&e.splice(i,1)},_trackingInstances:function(){var t=this.document.data("ui-dialog-instances");return t||(t=[],this.document.data("ui-dialog-instances",t)),t},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(e){var i=this,n=!1,s={};t.each(e,(function(t,e){i._setOption(t,e),t in i.sizeRelatedOptions&&(n=!0),t in i.resizableRelatedOptions&&(s[t]=e)})),n&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",s)},_setOption:function(t,e){var i,n,s=this.uiDialog;"dialogClass"===t&&s.removeClass(this.options.dialogClass).addClass(e),"disabled"!==t&&(this._super(t,e),"appendTo"===t&&this.uiDialog.appendTo(this._appendTo()),"buttons"===t&&this._createButtons(),"closeText"===t&&this.uiDialogTitlebarClose.button({label:""+e}),"draggable"===t&&((i=s.is(":data(ui-draggable)"))&&!e&&s.draggable("destroy"),!i&&e&&this._makeDraggable()),"position"===t&&this._position(),"resizable"===t&&((n=s.is(":data(ui-resizable)"))&&!e&&s.resizable("destroy"),n&&"string"==typeof e&&s.resizable("option","handles",e),n||!1===e||this._makeResizable()),"title"===t&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,n=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),n.minWidth>n.width&&(n.width=n.minWidth),t=this.uiDialog.css({height:"auto",width:n.width}).outerHeight(),e=Math.max(0,n.minHeight-t),i="number"==typeof n.maxHeight?Math.max(0,n.maxHeight-t):"none","auto"===n.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,n.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map((function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]}))},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return!!t(e.target).closest(".ui-dialog").length||!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=!0;this._delay((function(){e=!1})),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(t){e||this._allowInteraction(t)||(t.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var t=this.document.data("ui-dialog-overlays")-1;t?this.document.data("ui-dialog-overlays",t):this.document.unbind("focusin").removeData("ui-dialog-overlays"),this.overlay.remove(),this.overlay=null}}}),t.widget("ui.droppable",{version:"1.11.2",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,i=this.options,n=i.accept;this.isover=!1,this.isout=!0,this.accept=t.isFunction(n)?n:function(t){return t.is(n)},this.proportions=function(){return arguments.length?void(e=arguments[0]):e||(e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight})},this._addToManager(i.scope),i.addClasses&&this.element.addClass("ui-droppable")},_addToManager:function(e){t.ui.ddmanager.droppables[e]=t.ui.ddmanager.droppables[e]||[],t.ui.ddmanager.droppables[e].push(this)},_splice:function(t){for(var e=0;t.length>e;e++)t[e]===this&&t.splice(e,1)},_destroy:function(){var e=t.ui.ddmanager.droppables[this.options.scope];this._splice(e),this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(e,i){if("accept"===e)this.accept=t.isFunction(i)?i:function(t){return t.is(i)};else if("scope"===e){var n=t.ui.ddmanager.droppables[this.options.scope];this._splice(n),this._addToManager(i)}this._super(e,i)},_activate:function(e){var i=t.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",e,this.ui(i))},_deactivate:function(e){var i=t.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",e,this.ui(i))},_over:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",e,this.ui(i)))},_out:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",e,this.ui(i)))},_drop:function(e,i){var n=i||t.ui.ddmanager.current,s=!1;return!(!n||(n.currentItem||n.element)[0]===this.element[0])&&(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each((function(){var i=t(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===n.options.scope&&i.accept.call(i.element[0],n.currentItem||n.element)&&t.ui.intersect(n,t.extend(i,{offset:i.element.offset()}),i.options.tolerance,e)?(s=!0,!1):void 0})),!s&&!!this.accept.call(this.element[0],n.currentItem||n.element)&&(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",e,this.ui(n)),this.element))},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}}}),t.ui.intersect=function(){function t(t,e,i){return t>=e&&e+i>t}return function(e,i,n,s){if(!i.offset)return!1;var o=(e.positionAbs||e.position.absolute).left+e.margins.left,a=(e.positionAbs||e.position.absolute).top+e.margins.top,r=o+e.helperProportions.width,l=a+e.helperProportions.height,c=i.offset.left,h=i.offset.top,u=c+i.proportions().width,d=h+i.proportions().height;switch(n){case"fit":return o>=c&&u>=r&&a>=h&&d>=l;case"intersect":return o+e.helperProportions.width/2>c&&u>r-e.helperProportions.width/2&&a+e.helperProportions.height/2>h&&d>l-e.helperProportions.height/2;case"pointer":return t(s.pageY,h,i.proportions().height)&&t(s.pageX,c,i.proportions().width);case"touch":return(a>=h&&d>=a||l>=h&&d>=l||h>a&&l>d)&&(o>=c&&u>=o||r>=c&&u>=r||c>o&&r>u);default:return!1}}}(),t.ui.ddmanager={current:null,droppables:{default:[]},prepareOffsets:function(e,i){var n,s,o=t.ui.ddmanager.droppables[e.options.scope]||[],a=i?i.type:null,r=(e.currentItem||e.element).find(":data(ui-droppable)").addBack();t:for(n=0;o.length>n;n++)if(!(o[n].options.disabled||e&&!o[n].accept.call(o[n].element[0],e.currentItem||e.element))){for(s=0;r.length>s;s++)if(r[s]===o[n].element[0]){o[n].proportions().height=0;continue t}o[n].visible="none"!==o[n].element.css("display"),o[n].visible&&("mousedown"===a&&o[n]._activate.call(o[n],i),o[n].offset=o[n].element.offset(),o[n].proportions({width:o[n].element[0].offsetWidth,height:o[n].element[0].offsetHeight}))}},drop:function(e,i){var n=!1;return t.each((t.ui.ddmanager.droppables[e.options.scope]||[]).slice(),(function(){this.options&&(!this.options.disabled&&this.visible&&t.ui.intersect(e,this,this.options.tolerance,i)&&(n=this._drop.call(this,i)||n),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))})),n},dragStart:function(e,i){e.element.parentsUntil("body").bind("scroll.droppable",(function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)}))},drag:function(e,i){e.options.refreshPositions&&t.ui.ddmanager.prepareOffsets(e,i),t.each(t.ui.ddmanager.droppables[e.options.scope]||[],(function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var n,s,o,a=t.ui.intersect(e,this,this.options.tolerance,i),r=!a&&this.isover?"isout":a&&!this.isover?"isover":null;r&&(this.options.greedy&&(s=this.options.scope,(o=this.element.parents(":data(ui-droppable)").filter((function(){return t(this).droppable("instance").options.scope===s}))).length&&((n=t(o[0]).droppable("instance")).greedyChild="isover"===r)),n&&"isover"===r&&(n.isover=!1,n.isout=!0,n._out.call(n,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),n&&"isout"===r&&(n.isout=!1,n.isover=!0,n._over.call(n,i)))}}))},dragStop:function(e,i){e.element.parentsUntil("body").unbind("scroll.droppable"),e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)}},t.ui.droppable;var b="ui-effects-",y=t;t.effects={effect:{}},function(t,e){function i(t,e,i){var n=h[e.type]||{};return null==t?i||!e.def?null:e.def:(t=n.floor?~~t:parseFloat(t),isNaN(t)?e.def:n.mod?(t+n.mod)%n.mod:0>t?0:t>n.max?n.max:t)}function n(i){var n=l(),s=n._rgba=[];return i=i.toLowerCase(),p(r,(function(t,o){var a,r=o.re.exec(i),l=r&&o.parse(r),h=o.space||"rgba";return l?(a=n[h](l),n[c[h].cache]=a[c[h].cache],s=n._rgba=a._rgba,!1):e})),s.length?("0,0,0,0"===s.join()&&t.extend(s,o.transparent),n):o[i]}function s(t,e,i){return 1>6*(i=(i+1)%1)?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var o,a=/^([\-+])=\s*(\d+\.?\d*)/,r=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],l=t.Color=function(e,i,n,s){return new t.Color.fn.parse(e,i,n,s)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},h={byte:{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},u=l.support={},d=t("<p>")[0],p=t.each;d.style.cssText="background-color:rgba(1,1,1,.5)",u.rgba=d.style.backgroundColor.indexOf("rgba")>-1,p(c,(function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}})),l.fn=t.extend(l.prototype,{parse:function(s,a,r,h){if(s===e)return this._rgba=[null,null,null,null],this;(s.jquery||s.nodeType)&&(s=t(s).css(a),a=e);var u=this,d=t.type(s),f=this._rgba=[];return a!==e&&(s=[s,a,r,h],d="array"),"string"===d?this.parse(n(s)||o._default):"array"===d?(p(c.rgba.props,(function(t,e){f[e.idx]=i(s[e.idx],e)})),this):"object"===d?(p(c,s instanceof l?function(t,e){s[e.cache]&&(u[e.cache]=s[e.cache].slice())}:function(e,n){var o=n.cache;p(n.props,(function(t,e){if(!u[o]&&n.to){if("alpha"===t||null==s[t])return;u[o]=n.to(u._rgba)}u[o][e.idx]=i(s[t],e,!0)})),u[o]&&0>t.inArray(null,u[o].slice(0,3))&&(u[o][3]=1,n.from&&(u._rgba=n.from(u[o])))}),this):e},is:function(t){var i=l(t),n=!0,s=this;return p(c,(function(t,o){var a,r=i[o.cache];return r&&(a=s[o.cache]||o.to&&o.to(s._rgba)||[],p(o.props,(function(t,i){return null!=r[i.idx]?n=r[i.idx]===a[i.idx]:e}))),n})),n},_space:function(){var t=[],e=this;return p(c,(function(i,n){e[n.cache]&&t.push(i)})),t.pop()},transition:function(t,e){var n=l(t),s=n._space(),o=c[s],a=0===this.alpha()?l("transparent"):this,r=a[o.cache]||o.to(a._rgba),u=r.slice();return n=n[o.cache],p(o.props,(function(t,s){var o=s.idx,a=r[o],l=n[o],c=h[s.type]||{};null!==l&&(null===a?u[o]=l:(c.mod&&(l-a>c.mod/2?a+=c.mod:a-l>c.mod/2&&(a-=c.mod)),u[o]=i((l-a)*e+a,s)))})),this[s](u)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),n=i.pop(),s=l(e)._rgba;return l(t.map(i,(function(t,e){return(1-n)*s[e]+n*t})))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,(function(t,e){return null==t?e>2?1:0:t}));return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),(function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t}));return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),n=i.pop();return e&&i.push(~~(255*n)),"#"+t.map(i,(function(t){return 1===(t=(t||0).toString(16)).length?"0"+t:t})).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,n=t[0]/255,s=t[1]/255,o=t[2]/255,a=t[3],r=Math.max(n,s,o),l=Math.min(n,s,o),c=r-l,h=r+l,u=.5*h;return e=l===r?0:n===r?60*(s-o)/c+360:s===r?60*(o-n)/c+120:60*(n-s)/c+240,i=0===c?0:.5>=u?c/h:c/(2-h),[Math.round(e)%360,i,u,null==a?1:a]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],n=t[2],o=t[3],a=.5>=n?n*(1+i):n+i-n*i,r=2*n-a;return[Math.round(255*s(r,a,e+1/3)),Math.round(255*s(r,a,e)),Math.round(255*s(r,a,e-1/3)),o]},p(c,(function(n,s){var o=s.props,r=s.cache,c=s.to,h=s.from;l.fn[n]=function(n){if(c&&!this[r]&&(this[r]=c(this._rgba)),n===e)return this[r].slice();var s,a=t.type(n),u="array"===a||"object"===a?n:arguments,d=this[r].slice();return p(o,(function(t,e){var n=u["object"===a?t:e.idx];null==n&&(n=d[e.idx]),d[e.idx]=i(n,e)})),h?((s=l(h(d)))[r]=d,s):l(d)},p(o,(function(e,i){l.fn[e]||(l.fn[e]=function(s){var o,r=t.type(s),l="alpha"===e?this._hsla?"hsla":"rgba":n,c=this[l](),h=c[i.idx];return"undefined"===r?h:("function"===r&&(s=s.call(this,h),r=t.type(s)),null==s&&i.empty?this:("string"===r&&(o=a.exec(s))&&(s=h+parseFloat(o[2])*("+"===o[1]?1:-1)),c[i.idx]=s,this[l](c)))})}))})),l.hook=function(e){var i=e.split(" ");p(i,(function(e,i){t.cssHooks[i]={set:function(e,s){var o,a,r="";if("transparent"!==s&&("string"!==t.type(s)||(o=n(s)))){if(s=l(o||s),!u.rgba&&1!==s._rgba[3]){for(a="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&a&&a.style;)try{r=t.css(a,"backgroundColor"),a=a.parentNode}catch(t){}s=s.blend(r&&"transparent"!==r?r:"_default")}s=s.toRgbaString()}try{e.style[i]=s}catch(t){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=l(e.elem,i),e.end=l(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}}))},l.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),t.cssHooks.borderColor={expand:function(t){var e={};return p(["Top","Right","Bottom","Left"],(function(i,n){e["border"+n+"Color"]=t})),e}},o=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(y),function(){function e(e){var i,n,s=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,o={};if(s&&s.length&&s[0]&&s[s[0]])for(n=s.length;n--;)"string"==typeof s[i=s[n]]&&(o[t.camelCase(i)]=s[i]);else for(i in s)"string"==typeof s[i]&&(o[i]=s[i]);return o}function i(e,i){var n,o,a={};for(n in i)o=i[n],e[n]!==o&&(s[n]||(t.fx.step[n]||!isNaN(parseFloat(o)))&&(a[n]=o));return a}var n=["add","remove","toggle"],s={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],(function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(y.style(t.elem,i,t.end),t.setAttr=!0)}})),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(s,o,a,r){var l=t.speed(o,a,r);return this.queue((function(){var o,a=t(this),r=a.attr("class")||"",c=l.children?a.find("*").addBack():a;c=c.map((function(){return{el:t(this),start:e(this)}})),(o=function(){t.each(n,(function(t,e){s[e]&&a[e+"Class"](s[e])}))})(),c=c.map((function(){return this.end=e(this.el[0]),this.diff=i(this.start,this.end),this})),a.attr("class",r),c=c.map((function(){var e=this,i=t.Deferred(),n=t.extend({},l,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,n),i.promise()})),t.when.apply(t,c.get()).done((function(){o(),t.each(arguments,(function(){var e=this.el;t.each(this.diff,(function(t){e.css(t,"")}))})),l.complete.call(a[0])}))}))},t.fn.extend({addClass:function(e){return function(i,n,s,o){return n?t.effects.animateClass.call(this,{add:i},n,s,o):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,n,s,o){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},n,s,o):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(e){return function(i,n,s,o,a){return"boolean"==typeof n||void 0===n?s?t.effects.animateClass.call(this,n?{add:i}:{remove:i},s,o,a):e.apply(this,arguments):t.effects.animateClass.call(this,{toggle:i},n,s,o)}}(t.fn.toggleClass),switchClass:function(e,i,n,s,o){return t.effects.animateClass.call(this,{add:i,remove:e},n,s,o)}})}(),function(){function e(e,i,n,s){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(s=i,n=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(s=n,n=i,i={}),t.isFunction(n)&&(s=n,n=null),i&&t.extend(e,i),n=n||i.duration,e.duration=t.fx.off?0:"number"==typeof n?n:n in t.fx.speeds?t.fx.speeds[n]:t.fx.speeds._default,e.complete=s||i.complete,e}function i(e){return!(e&&"number"!=typeof e&&!t.fx.speeds[e])||"string"==typeof e&&!t.effects.effect[e]||!!t.isFunction(e)||"object"==a(e)&&!e.effect}t.extend(t.effects,{version:"1.11.2",save:function(t,e){for(var i=0;e.length>i;i++)null!==e[i]&&t.data(b+e[i],t[0].style[e[i]])},restore:function(t,e){var i,n;for(n=0;e.length>n;n++)null!==e[n]&&(void 0===(i=t.data(b+e[n]))&&(i=""),t.css(e[n],i))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var i,n;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":n=0;break;case"center":n=.5;break;case"right":n=1;break;default:n=t[1]/e.width}return{x:n,y:i}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),float:e.css("float")},n=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),s={width:e.width(),height:e.height()},o=document.activeElement;try{o.id}catch(t){o=document.body}return e.wrap(n),(e[0]===o||t.contains(e[0],o))&&t(o).focus(),n=e.parent(),"static"===e.css("position")?(n.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],(function(t,n){i[n]=e.css(n),isNaN(parseInt(i[n],10))&&(i[n]="auto")})),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(s),n.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).focus()),e},setTransition:function(e,i,n,s){return s=s||{},t.each(i,(function(t,i){var o=e.cssUnit(i);o[0]>0&&(s[i]=o[0]*n+o[1])})),s}}),t.fn.extend({effect:function(){function i(e){function i(){t.isFunction(o)&&o.call(s[0]),t.isFunction(e)&&e()}var s=t(this),o=n.complete,r=n.mode;(s.is(":hidden")?"hide"===r:"show"===r)?(s[r](),i()):a.call(s[0],n,i)}var n=e.apply(this,arguments),s=n.mode,o=n.queue,a=t.effects.effect[n.effect];return t.fx.off||!a?s?this[s](n.duration,n.complete):this.each((function(){n.complete&&n.complete.call(this)})):!1===o?this.each(i):this.queue(o||"fx",i)},show:function(t){return function(n){if(i(n))return t.apply(this,arguments);var s=e.apply(this,arguments);return s.mode="show",this.effect.call(this,s)}}(t.fn.show),hide:function(t){return function(n){if(i(n))return t.apply(this,arguments);var s=e.apply(this,arguments);return s.mode="hide",this.effect.call(this,s)}}(t.fn.hide),toggle:function(t){return function(n){if(i(n)||"boolean"==typeof n)return t.apply(this,arguments);var s=e.apply(this,arguments);return s.mode="toggle",this.effect.call(this,s)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),n=[];return t.each(["em","px","%","pt"],(function(t,e){i.indexOf(e)>0&&(n=[parseFloat(i),e])})),n}})}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],(function(t,i){e[i]=function(e){return Math.pow(e,t+2)}})),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,(function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}}))}(),t.effects,t.effects.effect.blind=function(e,i){var n,s,o,a=t(this),r=["position","top","bottom","left","right","height","width"],l=t.effects.setMode(a,e.mode||"hide"),c=e.direction||"up",h=/up|down|vertical/.test(c),u=h?"height":"width",d=h?"top":"left",p=/up|left|vertical|horizontal/.test(c),f={},g="show"===l;a.parent().is(".ui-effects-wrapper")?t.effects.save(a.parent(),r):t.effects.save(a,r),a.show(),s=(n=t.effects.createWrapper(a).css({overflow:"hidden"}))[u](),o=parseFloat(n.css(d))||0,f[u]=g?s:0,p||(a.css(h?"bottom":"right",0).css(h?"top":"left","auto").css({position:"absolute"}),f[d]=g?o:s+o),g&&(n.css(u,0),p||n.css(d,o+s)),n.animate(f,{duration:e.duration,easing:e.easing,queue:!1,complete:function(){"hide"===l&&a.hide(),t.effects.restore(a,r),t.effects.removeWrapper(a),i()}})},t.effects.effect.bounce=function(e,i){var n,s,o,a=t(this),r=["position","top","bottom","left","right","height","width"],l=t.effects.setMode(a,e.mode||"effect"),c="hide"===l,h="show"===l,u=e.direction||"up",d=e.distance,p=e.times||5,f=2*p+(h||c?1:0),g=e.duration/f,m=e.easing,v="up"===u||"down"===u?"top":"left",b="up"===u||"left"===u,y=a.queue(),_=y.length;for((h||c)&&r.push("opacity"),t.effects.save(a,r),a.show(),t.effects.createWrapper(a),d||(d=a["top"===v?"outerHeight":"outerWidth"]()/3),h&&((o={opacity:1})[v]=0,a.css("opacity",0).css(v,b?2*-d:2*d).animate(o,g,m)),c&&(d/=Math.pow(2,p-1)),(o={})[v]=0,n=0;p>n;n++)(s={})[v]=(b?"-=":"+=")+d,a.animate(s,g,m).animate(o,g,m),d=c?2*d:d/2;c&&((s={opacity:0})[v]=(b?"-=":"+=")+d,a.animate(s,g,m)),a.queue((function(){c&&a.hide(),t.effects.restore(a,r),t.effects.removeWrapper(a),i()})),_>1&&y.splice.apply(y,[1,0].concat(y.splice(_,f+1))),a.dequeue()},t.effects.effect.clip=function(e,i){var n,s,o,a=t(this),r=["position","top","bottom","left","right","height","width"],l="show"===t.effects.setMode(a,e.mode||"hide"),c="vertical"===(e.direction||"vertical"),h=c?"height":"width",u=c?"top":"left",d={};t.effects.save(a,r),a.show(),n=t.effects.createWrapper(a).css({overflow:"hidden"}),o=(s="IMG"===a[0].tagName?n:a)[h](),l&&(s.css(h,0),s.css(u,o/2)),d[h]=l?o:0,d[u]=l?0:o/2,s.animate(d,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){l||a.hide(),t.effects.restore(a,r),t.effects.removeWrapper(a),i()}})},t.effects.effect.drop=function(e,i){var n,s=t(this),o=["position","top","bottom","left","right","opacity","height","width"],a=t.effects.setMode(s,e.mode||"hide"),r="show"===a,l=e.direction||"left",c="up"===l||"down"===l?"top":"left",h="up"===l||"left"===l?"pos":"neg",u={opacity:r?1:0};t.effects.save(s,o),s.show(),t.effects.createWrapper(s),n=e.distance||s["top"===c?"outerHeight":"outerWidth"](!0)/2,r&&s.css("opacity",0).css(c,"pos"===h?-n:n),u[c]=(r?"pos"===h?"+=":"-=":"pos"===h?"-=":"+=")+n,s.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===a&&s.hide(),t.effects.restore(s,o),t.effects.removeWrapper(s),i()}})},t.effects.effect.explode=function(e,i){function n(){v.push(this),v.length===h*u&&(d.css({visibility:"visible"}),t(v).remove(),p||d.hide(),i())}var s,o,a,r,l,c,h=e.pieces?Math.round(Math.sqrt(e.pieces)):3,u=h,d=t(this),p="show"===t.effects.setMode(d,e.mode||"hide"),f=d.show().css("visibility","hidden").offset(),g=Math.ceil(d.outerWidth()/u),m=Math.ceil(d.outerHeight()/h),v=[];for(s=0;h>s;s++)for(r=f.top+s*m,c=s-(h-1)/2,o=0;u>o;o++)a=f.left+o*g,l=o-(u-1)/2,d.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-o*g,top:-s*m}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:g,height:m,left:a+(p?l*g:0),top:r+(p?c*m:0),opacity:p?0:1}).animate({left:a+(p?0:l*g),top:r+(p?0:c*m),opacity:p?1:0},e.duration||500,e.easing,n)},t.effects.effect.fade=function(e,i){var n=t(this),s=t.effects.setMode(n,e.mode||"toggle");n.animate({opacity:s},{queue:!1,duration:e.duration,easing:e.easing,complete:i})},t.effects.effect.fold=function(e,i){var n,s,o=t(this),a=["position","top","bottom","left","right","height","width"],r=t.effects.setMode(o,e.mode||"hide"),l="show"===r,c="hide"===r,h=e.size||15,u=/([0-9]+)%/.exec(h),d=!!e.horizFirst,p=l!==d,f=p?["width","height"]:["height","width"],g=e.duration/2,m={},v={};t.effects.save(o,a),o.show(),n=t.effects.createWrapper(o).css({overflow:"hidden"}),s=p?[n.width(),n.height()]:[n.height(),n.width()],u&&(h=parseInt(u[1],10)/100*s[c?0:1]),l&&n.css(d?{height:0,width:h}:{height:h,width:0}),m[f[0]]=l?s[0]:h,v[f[1]]=l?s[1]:0,n.animate(m,g,e.easing).animate(v,g,e.easing,(function(){c&&o.hide(),t.effects.restore(o,a),t.effects.removeWrapper(o),i()}))},t.effects.effect.highlight=function(e,i){var n=t(this),s=["backgroundImage","backgroundColor","opacity"],o=t.effects.setMode(n,e.mode||"show"),a={backgroundColor:n.css("backgroundColor")};"hide"===o&&(a.opacity=0),t.effects.save(n,s),n.show().css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(a,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===o&&n.hide(),t.effects.restore(n,s),i()}})},t.effects.effect.size=function(e,i){var n,s,o,a=t(this),r=["position","top","bottom","left","right","width","height","overflow","opacity"],l=["width","height","overflow"],c=["fontSize"],h=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],u=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],d=t.effects.setMode(a,e.mode||"effect"),p=e.restore||"effect"!==d,f=e.scale||"both",g=e.origin||["middle","center"],m=a.css("position"),v=p?r:["position","top","bottom","left","right","overflow","opacity"],b={height:0,width:0,outerHeight:0,outerWidth:0};"show"===d&&a.show(),n={height:a.height(),width:a.width(),outerHeight:a.outerHeight(),outerWidth:a.outerWidth()},"toggle"===e.mode&&"show"===d?(a.from=e.to||b,a.to=e.from||n):(a.from=e.from||("show"===d?b:n),a.to=e.to||("hide"===d?b:n)),o={from:{y:a.from.height/n.height,x:a.from.width/n.width},to:{y:a.to.height/n.height,x:a.to.width/n.width}},("box"===f||"both"===f)&&(o.from.y!==o.to.y&&(v=v.concat(h),a.from=t.effects.setTransition(a,h,o.from.y,a.from),a.to=t.effects.setTransition(a,h,o.to.y,a.to)),o.from.x!==o.to.x&&(v=v.concat(u),a.from=t.effects.setTransition(a,u,o.from.x,a.from),a.to=t.effects.setTransition(a,u,o.to.x,a.to))),("content"===f||"both"===f)&&o.from.y!==o.to.y&&(v=v.concat(c).concat(l),a.from=t.effects.setTransition(a,c,o.from.y,a.from),a.to=t.effects.setTransition(a,c,o.to.y,a.to)),t.effects.save(a,v),a.show(),t.effects.createWrapper(a),a.css("overflow","hidden").css(a.from),g&&(s=t.effects.getBaseline(g,n),a.from.top=(n.outerHeight-a.outerHeight())*s.y,a.from.left=(n.outerWidth-a.outerWidth())*s.x,a.to.top=(n.outerHeight-a.to.outerHeight)*s.y,a.to.left=(n.outerWidth-a.to.outerWidth)*s.x),a.css(a.from),("content"===f||"both"===f)&&(h=h.concat(["marginTop","marginBottom"]).concat(c),u=u.concat(["marginLeft","marginRight"]),l=r.concat(h).concat(u),a.find("*[width]").each((function(){var i=t(this),n=i.height(),s=i.width(),a=i.outerHeight(),r=i.outerWidth();p&&t.effects.save(i,l),i.from={height:n*o.from.y,width:s*o.from.x,outerHeight:a*o.from.y,outerWidth:r*o.from.x},i.to={height:n*o.to.y,width:s*o.to.x,outerHeight:n*o.to.y,outerWidth:s*o.to.x},o.from.y!==o.to.y&&(i.from=t.effects.setTransition(i,h,o.from.y,i.from),i.to=t.effects.setTransition(i,h,o.to.y,i.to)),o.from.x!==o.to.x&&(i.from=t.effects.setTransition(i,u,o.from.x,i.from),i.to=t.effects.setTransition(i,u,o.to.x,i.to)),i.css(i.from),i.animate(i.to,e.duration,e.easing,(function(){p&&t.effects.restore(i,l)}))}))),a.animate(a.to,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){0===a.to.opacity&&a.css("opacity",a.from.opacity),"hide"===d&&a.hide(),t.effects.restore(a,v),p||("static"===m?a.css({position:"relative",top:a.to.top,left:a.to.left}):t.each(["top","left"],(function(t,e){a.css(e,(function(e,i){var n=parseInt(i,10),s=t?a.to.left:a.to.top;return"auto"===i?s+"px":n+s+"px"}))}))),t.effects.removeWrapper(a),i()}})},t.effects.effect.scale=function(e,i){var n=t(this),s=t.extend(!0,{},e),o=t.effects.setMode(n,e.mode||"effect"),a=parseInt(e.percent,10)||(0===parseInt(e.percent,10)||"hide"===o?0:100),r=e.direction||"both",l=e.origin,c={height:n.height(),width:n.width(),outerHeight:n.outerHeight(),outerWidth:n.outerWidth()},h="horizontal"!==r?a/100:1,u="vertical"!==r?a/100:1;s.effect="size",s.queue=!1,s.complete=i,"effect"!==o&&(s.origin=l||["middle","center"],s.restore=!0),s.from=e.from||("show"===o?{height:0,width:0,outerHeight:0,outerWidth:0}:c),s.to={height:c.height*h,width:c.width*u,outerHeight:c.outerHeight*h,outerWidth:c.outerWidth*u},s.fade&&("show"===o&&(s.from.opacity=0,s.to.opacity=1),"hide"===o&&(s.from.opacity=1,s.to.opacity=0)),n.effect(s)},t.effects.effect.puff=function(e,i){var n=t(this),s=t.effects.setMode(n,e.mode||"hide"),o="hide"===s,a=parseInt(e.percent,10)||150,r=a/100,l={height:n.height(),width:n.width(),outerHeight:n.outerHeight(),outerWidth:n.outerWidth()};t.extend(e,{effect:"scale",queue:!1,fade:!0,mode:s,complete:i,percent:o?a:100,from:o?l:{height:l.height*r,width:l.width*r,outerHeight:l.outerHeight*r,outerWidth:l.outerWidth*r}}),n.effect(e)},t.effects.effect.pulsate=function(e,i){var n,s=t(this),o=t.effects.setMode(s,e.mode||"show"),a="show"===o,r="hide"===o,l=a||"hide"===o,c=2*(e.times||5)+(l?1:0),h=e.duration/c,u=0,d=s.queue(),p=d.length;for((a||!s.is(":visible"))&&(s.css("opacity",0).show(),u=1),n=1;c>n;n++)s.animate({opacity:u},h,e.easing),u=1-u;s.animate({opacity:u},h,e.easing),s.queue((function(){r&&s.hide(),i()})),p>1&&d.splice.apply(d,[1,0].concat(d.splice(p,c+1))),s.dequeue()},t.effects.effect.shake=function(e,i){var n,s=t(this),o=["position","top","bottom","left","right","height","width"],a=t.effects.setMode(s,e.mode||"effect"),r=e.direction||"left",l=e.distance||20,c=e.times||3,h=2*c+1,u=Math.round(e.duration/h),d="up"===r||"down"===r?"top":"left",p="up"===r||"left"===r,f={},g={},m={},v=s.queue(),b=v.length;for(t.effects.save(s,o),s.show(),t.effects.createWrapper(s),f[d]=(p?"-=":"+=")+l,g[d]=(p?"+=":"-=")+2*l,m[d]=(p?"-=":"+=")+2*l,s.animate(f,u,e.easing),n=1;c>n;n++)s.animate(g,u,e.easing).animate(m,u,e.easing);s.animate(g,u,e.easing).animate(f,u/2,e.easing).queue((function(){"hide"===a&&s.hide(),t.effects.restore(s,o),t.effects.removeWrapper(s),i()})),b>1&&v.splice.apply(v,[1,0].concat(v.splice(b,h+1))),s.dequeue()},t.effects.effect.slide=function(e,i){var n,s=t(this),o=["position","top","bottom","left","right","width","height"],a=t.effects.setMode(s,e.mode||"show"),r="show"===a,l=e.direction||"left",c="up"===l||"down"===l?"top":"left",h="up"===l||"left"===l,u={};t.effects.save(s,o),s.show(),n=e.distance||s["top"===c?"outerHeight":"outerWidth"](!0),t.effects.createWrapper(s).css({overflow:"hidden"}),r&&s.css(c,h?isNaN(n)?"-"+n:-n:n),u[c]=(r?h?"+=":"-=":h?"-=":"+=")+n,s.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===a&&s.hide(),t.effects.restore(s,o),t.effects.removeWrapper(s),i()}})},t.effects.effect.transfer=function(e,i){var n=t(this),s=t(e.to),o="fixed"===s.css("position"),a=t("body"),r=o?a.scrollTop():0,l=o?a.scrollLeft():0,c=s.offset(),h={top:c.top-r,left:c.left-l,height:s.innerHeight(),width:s.innerWidth()},u=n.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({top:u.top-r,left:u.left-l,height:n.innerHeight(),width:n.innerWidth(),position:o?"fixed":"absolute"}).animate(h,e.duration,e.easing,(function(){d.remove(),i()}))},t.widget("ui.progressbar",{version:"1.11.2",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(t){return void 0===t?this.options.value:(this.options.value=this._constrainedValue(t),void this._refreshValue())},_constrainedValue:function(t){return void 0===t&&(t=this.options.value),this.indeterminate=!1===t,"number"!=typeof t&&(t=0),!this.indeterminate&&Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){"max"===t&&(e=Math.max(this.min,e)),"disabled"===t&&this.element.toggleClass("ui-state-disabled",!!e).attr("aria-disabled",e),this._super(t,e)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var e=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||e>this.min).toggleClass("ui-corner-right",e===this.options.max).width(i.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":e}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),e===this.options.max&&this._trigger("complete")}}),t.widget("ui.selectable",t.ui.mouse,{version:"1.11.2",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var e,i=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){(e=t(i.options.filter,i.element[0])).addClass("ui-selectee"),e.each((function(){var e=t(this),i=e.offset();t.data(this,"selectable-item",{element:this,$element:e,left:i.left,top:i.top,right:i.left+e.outerWidth(),bottom:i.top+e.outerHeight(),startselected:!1,selected:e.hasClass("ui-selected"),selecting:e.hasClass("ui-selecting"),unselecting:e.hasClass("ui-unselecting")})}))},this.refresh(),this.selectees=e.addClass("ui-selectee"),this._mouseInit(),this.helper=t("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(e){var i=this,n=this.options;this.opos=[e.pageX,e.pageY],this.options.disabled||(this.selectees=t(n.filter,this.element[0]),this._trigger("start",e),t(n.appendTo).append(this.helper),this.helper.css({left:e.pageX,top:e.pageY,width:0,height:0}),n.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each((function(){var n=t.data(this,"selectable-item");n.startselected=!0,e.metaKey||e.ctrlKey||(n.$element.removeClass("ui-selected"),n.selected=!1,n.$element.addClass("ui-unselecting"),n.unselecting=!0,i._trigger("unselecting",e,{unselecting:n.element}))})),t(e.target).parents().addBack().each((function(){var n,s=t.data(this,"selectable-item");return s?(n=!e.metaKey&&!e.ctrlKey||!s.$element.hasClass("ui-selected"),s.$element.removeClass(n?"ui-unselecting":"ui-selected").addClass(n?"ui-selecting":"ui-unselecting"),s.unselecting=!n,s.selecting=n,s.selected=n,n?i._trigger("selecting",e,{selecting:s.element}):i._trigger("unselecting",e,{unselecting:s.element}),!1):void 0})))},_mouseDrag:function(e){if(this.dragged=!0,!this.options.disabled){var i,n=this,s=this.options,o=this.opos[0],a=this.opos[1],r=e.pageX,l=e.pageY;return o>r&&(i=r,r=o,o=i),a>l&&(i=l,l=a,a=i),this.helper.css({left:o,top:a,width:r-o,height:l-a}),this.selectees.each((function(){var i=t.data(this,"selectable-item"),c=!1;i&&i.element!==n.element[0]&&("touch"===s.tolerance?c=!(i.left>r||o>i.right||i.top>l||a>i.bottom):"fit"===s.tolerance&&(c=i.left>o&&r>i.right&&i.top>a&&l>i.bottom),c?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,n._trigger("selecting",e,{selecting:i.element}))):(i.selecting&&((e.metaKey||e.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),n._trigger("unselecting",e,{unselecting:i.element}))),i.selected&&(e.metaKey||e.ctrlKey||i.startselected||(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,n._trigger("unselecting",e,{unselecting:i.element})))))})),!1}},_mouseStop:function(e){var i=this;return this.dragged=!1,t(".ui-unselecting",this.element[0]).each((function(){var n=t.data(this,"selectable-item");n.$element.removeClass("ui-unselecting"),n.unselecting=!1,n.startselected=!1,i._trigger("unselected",e,{unselected:n.element})})),t(".ui-selecting",this.element[0]).each((function(){var n=t.data(this,"selectable-item");n.$element.removeClass("ui-selecting").addClass("ui-selected"),n.selecting=!1,n.selected=!0,n.startselected=!0,i._trigger("selected",e,{selected:n.element})})),this._trigger("stop",e),this.helper.remove(),!1}}),t.widget("ui.selectmenu",{version:"1.11.2",defaultElement:"<select>",options:{appendTo:null,disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:null,change:null,close:null,focus:null,open:null,select:null},_create:function(){var t=this.element.uniqueId().attr("id");this.ids={element:t,button:t+"-button",menu:t+"-menu"},this._drawButton(),this._drawMenu(),this.options.disabled&&this.disable()},_drawButton:function(){var e=this,i=this.element.attr("tabindex");this.label=t("label[for='"+this.ids.element+"']").attr("for",this.ids.button),this._on(this.label,{click:function(t){this.button.focus(),t.preventDefault()}}),this.element.hide(),this.button=t("<span>",{class:"ui-selectmenu-button ui-widget ui-state-default ui-corner-all",tabindex:i||this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true"}).insertAfter(this.element),t("<span>",{class:"ui-icon "+this.options.icons.button}).prependTo(this.button),this.buttonText=t("<span>",{class:"ui-selectmenu-text"}).appendTo(this.button),this._setText(this.buttonText,this.element.find("option:selected").text()),this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",(function(){e.menuItems||e._refreshMenu()})),this._hoverable(this.button),this._focusable(this.button)},_drawMenu:function(){var e=this;this.menu=t("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=t("<div>",{class:"ui-selectmenu-menu ui-front"}).append(this.menu).appendTo(this._appendTo()),this.menuInstance=this.menu.menu({role:"listbox",select:function(t,i){t.preventDefault(),e._setSelection(),e._select(i.item.data("ui-selectmenu-item"),t)},focus:function(t,i){var n=i.item.data("ui-selectmenu-item");null!=e.focusIndex&&n.index!==e.focusIndex&&(e._trigger("focus",t,{item:n}),e.isOpen||e._select(n,t)),e.focusIndex=n.index,e.button.attr("aria-activedescendant",e.menuItems.eq(n.index).attr("id"))}}).menu("instance"),this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this._setText(this.buttonText,this._getSelectedItem().text()),this.options.width||this._resizeButton()},_refreshMenu:function(){this.menu.empty();var t,e=this.element.find("option");e.length&&(this._parseOptions(e),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup"),t=this._getSelectedItem(),this.menuInstance.focus(null,t),this._setAria(t.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(t){this.options.disabled||(this.menuItems?(this.menu.find(".ui-state-focus").removeClass("ui-state-focus"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",t))},_position:function(){this.menuWrap.position(t.extend({of:this.button},this.options.position))},close:function(t){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",t))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderMenu:function(e,i){var n=this,s="";t.each(i,(function(i,o){o.optgroup!==s&&(t("<li>",{class:"ui-selectmenu-optgroup ui-menu-divider"+(o.element.parent("optgroup").prop("disabled")?" ui-state-disabled":""),text:o.optgroup}).appendTo(e),s=o.optgroup),n._renderItemData(e,o)}))},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-selectmenu-item",e)},_renderItem:function(e,i){var n=t("<li>");return i.disabled&&n.addClass("ui-state-disabled"),this._setText(n,i.label),n.appendTo(e)},_setText:function(t,e){e?t.text(e):t.html("&#160;")},_move:function(t,e){var i,n,s=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex):(i=this.menuItems.eq(this.element[0].selectedIndex),s+=":not(.ui-state-disabled)"),(n="first"===t||"last"===t?i["first"===t?"prevAll":"nextAll"](s).eq(-1):i[t+"All"](s).eq(0)).length&&this.menuInstance.focus(e,n)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex)},_toggle:function(t){this[this.isOpen?"close":"open"](t)},_setSelection:function(){var t;this.range&&(window.getSelection?((t=window.getSelection()).removeAllRanges(),t.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(e){this.isOpen&&(t(e.target).closest(".ui-selectmenu-menu, #"+this.ids.button).length||this.close(e))}},_buttonEvents:{mousedown:function(){var t;window.getSelection?(t=window.getSelection()).rangeCount&&(this.range=t.getRangeAt(0)):this.range=document.selection.createRange()},click:function(t){this._setSelection(),this._toggle(t)},keydown:function(e){var i=!0;switch(e.keyCode){case t.ui.keyCode.TAB:case t.ui.keyCode.ESCAPE:this.close(e),i=!1;break;case t.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(e);break;case t.ui.keyCode.UP:e.altKey?this._toggle(e):this._move("prev",e);break;case t.ui.keyCode.DOWN:e.altKey?this._toggle(e):this._move("next",e);break;case t.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(e):this._toggle(e);break;case t.ui.keyCode.LEFT:this._move("prev",e);break;case t.ui.keyCode.RIGHT:this._move("next",e);break;case t.ui.keyCode.HOME:case t.ui.keyCode.PAGE_UP:this._move("first",e);break;case t.ui.keyCode.END:case t.ui.keyCode.PAGE_DOWN:this._move("last",e);break;default:this.menu.trigger(e),i=!1}i&&e.preventDefault()}},_selectFocusedItem:function(t){var e=this.menuItems.eq(this.focusIndex);e.hasClass("ui-state-disabled")||this._select(e.data("ui-selectmenu-item"),t)},_select:function(t,e){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=t.index,this._setText(this.buttonText,t.label),this._setAria(t),this._trigger("select",e,{item:t}),t.index!==i&&this._trigger("change",e,{item:t}),this.close(e)},_setAria:function(t){var e=this.menuItems.eq(t.index).attr("id");this.button.attr({"aria-labelledby":e,"aria-activedescendant":e}),this.menu.attr("aria-activedescendant",e)},_setOption:function(t,e){"icons"===t&&this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(e.button),this._super(t,e),"appendTo"===t&&this.menuWrap.appendTo(this._appendTo()),"disabled"===t&&(this.menuInstance.option("disabled",e),this.button.toggleClass("ui-state-disabled",e).attr("aria-disabled",e),this.element.prop("disabled",e),e?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)),"width"===t&&this._resizeButton()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front")),e.length||(e=this.document[0].body),e},_toggleAttr:function(){this.button.toggleClass("ui-corner-top",this.isOpen).toggleClass("ui-corner-all",!this.isOpen).attr("aria-expanded",this.isOpen),this.menuWrap.toggleClass("ui-selectmenu-open",this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var t=this.options.width;t||(t=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(t)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){return{disabled:this.element.prop("disabled")}},_parseOptions:function(e){var i=[];e.each((function(e,n){var s=t(n),o=s.parent("optgroup");i.push({element:s,index:e,value:s.attr("value"),label:s.text(),optgroup:o.attr("label")||"",disabled:o.prop("disabled")||s.prop("disabled")})})),this.items=i},_destroy:function(){this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.label.attr("for",this.ids.element)}}),t.widget("ui.slider",t.ui.mouse,{version:"1.11.2",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,n=this.options,s=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),o=[];for(i=n.values&&n.values.length||1,s.length>i&&(s.slice(i).remove(),s=s.slice(0,i)),e=s.length;i>e;e++)o.push("<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>");this.handles=s.add(t(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each((function(e){t(this).data("ui-slider-handle-index",e)}))},_createRange:function(){var e=this.options,i="";e.range?(!0===e.range&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=t("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(e){var i,n,s,o,a,r,l,c=this,h=this.options;return!h.disabled&&(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},n=this._normValueFromMouse(i),s=this._valueMax()-this._valueMin()+1,this.handles.each((function(e){var i=Math.abs(n-c.values(e));(s>i||s===i&&(e===c._lastChangedValue||c.values(e)===h.min))&&(s=i,o=t(this),a=e)})),!1!==this._start(e,a)&&(this._mouseSliding=!0,this._handleIndex=a,o.addClass("ui-state-active").focus(),r=o.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-r.left-o.width()/2,top:e.pageY-r.top-o.height()/2-(parseInt(o.css("borderTopWidth"),10)||0)-(parseInt(o.css("borderBottomWidth"),10)||0)+(parseInt(o.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,a,n),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,n,s,o;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),(n=i/e)>1&&(n=1),0>n&&(n=0),"vertical"===this.orientation&&(n=1-n),s=this._valueMax()-this._valueMin(),o=this._valueMin()+n*s,this._trimAlignValue(o)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var n,s,o;this.options.values&&this.options.values.length?(n=this.values(e?0:1),2===this.options.values.length&&!0===this.options.range&&(0===e&&i>n||1===e&&n>i)&&(i=n),i!==this.values(e)&&((s=this.values())[e]=i,o=this._trigger("slide",t,{handle:this.handles[e],value:i,values:s}),n=this.values(e?0:1),!1!==o&&this.values(e,i))):i!==this.value()&&!1!==(o=this._trigger("slide",t,{handle:this.handles[e],value:i}))&&this.value(i)},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),void this._change(null,0)):this._value()},values:function(e,i){var n,s,o;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),void this._change(null,e);if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value();for(n=this.options.values,s=arguments[0],o=0;n.length>o;o+=1)n[o]=this._trimAlignValue(s[o]),this._change(null,o);this._refreshValue()},_setOption:function(e,i){var n,s=0;switch("range"===e&&!0===this.options.range&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(s=this.options.values.length),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!i),this._super(e,i),e){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue(),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),n=0;s>n;n+=1)this._change(null,n);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return this._trimAlignValue(t)},_values:function(t){var e,i,n;if(arguments.length)return e=this.options.values[t],this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),n=0;i.length>n;n+=1)i[n]=this._trimAlignValue(i[n]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,n=t-i;return 2*Math.abs(i)>=e&&(n+=i>0?e:-e),parseFloat(n.toFixed(5))},_calculateNewMax:function(){var t=(this.options.max-this._valueMin())%this.options.step;this.max=this.options.max-t},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshValue:function(){var e,i,n,s,o,a=this.options.range,r=this.options,l=this,c=!this._animateOff&&r.animate,h={};this.options.values&&this.options.values.length?this.handles.each((function(n){i=(l.values(n)-l._valueMin())/(l._valueMax()-l._valueMin())*100,h["horizontal"===l.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[c?"animate":"css"](h,r.animate),!0===l.options.range&&("horizontal"===l.orientation?(0===n&&l.range.stop(1,1)[c?"animate":"css"]({left:i+"%"},r.animate),1===n&&l.range[c?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===n&&l.range.stop(1,1)[c?"animate":"css"]({bottom:i+"%"},r.animate),1===n&&l.range[c?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i})):(n=this.value(),s=this._valueMin(),o=this._valueMax(),i=o!==s?(n-s)/(o-s)*100:0,h["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[c?"animate":"css"](h,r.animate),"min"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[c?"animate":"css"]({width:i+"%"},r.animate),"max"===a&&"horizontal"===this.orientation&&this.range[c?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[c?"animate":"css"]({height:i+"%"},r.animate),"max"===a&&"vertical"===this.orientation&&this.range[c?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(e){var i,n,s,o=t(e.target).data("ui-slider-handle-index");switch(e.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(e.target).addClass("ui-state-active"),!1===this._start(e,o)))return}switch(s=this.options.step,i=n=this.options.values&&this.options.values.length?this.values(o):this.value(),e.keyCode){case t.ui.keyCode.HOME:n=this._valueMin();break;case t.ui.keyCode.END:n=this._valueMax();break;case t.ui.keyCode.PAGE_UP:n=this._trimAlignValue(i+(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(i-(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(i===this._valueMax())return;n=this._trimAlignValue(i+s);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i===this._valueMin())return;n=this._trimAlignValue(i-s)}this._slide(e,o,n)},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),t(e.target).removeClass("ui-state-active"))}}}),t.widget("ui.sortable",t.ui.mouse,{version:"1.11.2",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(t,e,i){return t>=e&&e+i>t},_isFloating:function(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))},_create:function(){var t=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=!!this.items.length&&("x"===t.axis||this._isFloating(this.items[0].item)),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(t,e){this._super(t,e),"handle"===t&&this._setHandleClassName()},_setHandleClassName:function(){this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"),t.each(this.items,(function(){(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass("ui-sortable-handle")}))},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"),this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(e,i){var n=null,s=!1,o=this;return!(this.reverting||this.options.disabled||"static"===this.options.type||(this._refreshItems(e),t(e.target).parents().each((function(){return t.data(this,o.widgetName+"-item")===o?(n=t(this),!1):void 0})),t.data(e.target,o.widgetName+"-item")===o&&(n=t(e.target)),!n||this.options.handle&&!i&&(t(this.options.handle,n).find("*").addBack().each((function(){this===e.target&&(s=!0)})),!s)||(this.currentItem=n,this._removeCurrentsFromItems(),0)))},_mouseStart:function(e,i,n){var s,o,a=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),a.containment&&this._setContainment(),a.cursor&&"auto"!==a.cursor&&(o=this.document.find("body"),this.storedCursor=o.css("cursor"),o.css("cursor",a.cursor),this.storedStylesheet=t("<style>*{ cursor: "+a.cursor+" !important; }</style>").appendTo(o)),a.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",a.opacity)),a.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",a.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!n)for(s=this.containers.length-1;s>=0;s--)this.containers[s]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,n,s,o,a=this.options,r=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<a.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+a.scrollSpeed:e.pageY-this.overflowOffset.top<a.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-a.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<a.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+a.scrollSpeed:e.pageX-this.overflowOffset.left<a.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-a.scrollSpeed)):(e.pageY-t(document).scrollTop()<a.scrollSensitivity?r=t(document).scrollTop(t(document).scrollTop()-a.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<a.scrollSensitivity&&(r=t(document).scrollTop(t(document).scrollTop()+a.scrollSpeed)),e.pageX-t(document).scrollLeft()<a.scrollSensitivity?r=t(document).scrollLeft(t(document).scrollLeft()-a.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<a.scrollSensitivity&&(r=t(document).scrollLeft(t(document).scrollLeft()+a.scrollSpeed))),!1!==r&&t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=(n=this.items[i]).item[0],(o=this._intersectsWithPointer(n))&&n.instance===this.currentContainer&&s!==this.currentItem[0]&&this.placeholder[1===o?"next":"prev"]()[0]!==s&&!t.contains(this.placeholder[0],s)&&("semi-dynamic"!==this.options.type||!t.contains(this.element[0],s))){if(this.direction=1===o?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(n))break;this._rearrange(e,n),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var n=this,s=this.placeholder.offset(),o=this.options.axis,a={};o&&"x"!==o||(a.left=s.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),o&&"y"!==o||(a.top=s.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(a,parseInt(this.options.revert,10)||500,(function(){n._clear(e)}))}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),n=[];return e=e||{},t(i).each((function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&n.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))})),!n.length&&e.key&&n.push(e.key+"="),n.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),n=[];return e=e||{},i.each((function(){n.push(t(e.item||this).attr(e.attribute||"id")||"")})),n},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,n=this.positionAbs.top,s=n+this.helperProportions.height,o=t.left,a=o+t.width,r=t.top,l=r+t.height,c=this.offset.click.top,h=this.offset.click.left,u="x"===this.options.axis||n+c>r&&l>n+c,d="y"===this.options.axis||e+h>o&&a>e+h,p=u&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:e+this.helperProportions.width/2>o&&a>i-this.helperProportions.width/2&&n+this.helperProportions.height/2>r&&l>s-this.helperProportions.height/2},_intersectsWithPointer:function(t){var e="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),i="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width),n=e&&i,s=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();return!!n&&(this.floating?o&&"right"===o||"down"===s?2:1:s&&("down"===s?2:1))},_intersectsWithSides:function(t){var e=this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),n=this._getDragVerticalDirection(),s=this._getDragHorizontalDirection();return this.floating&&s?"right"===s&&i||"left"===s&&!i:n&&("down"===n&&e||"up"===n&&!e)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){function i(){r.push(this)}var n,s,o,a,r=[],l=[],c=this._connectWith();if(c&&e)for(n=c.length-1;n>=0;n--)for(s=(o=t(c[n])).length-1;s>=0;s--)(a=t.data(o[s],this.widgetFullName))&&a!==this&&!a.options.disabled&&l.push([t.isFunction(a.options.items)?a.options.items.call(a.element):t(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a]);for(l.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),n=l.length-1;n>=0;n--)l[n][0].each(i);return t(r)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,(function(t){for(var i=0;e.length>i;i++)if(e[i]===t.item[0])return!1;return!0}))},_refreshItems:function(e){this.items=[],this.containers=[this];var i,n,s,o,a,r,l,c,h=this.items,u=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(n=(s=t(d[i])).length-1;n>=0;n--)(o=t.data(s[n],this.widgetFullName))&&o!==this&&!o.options.disabled&&(u.push([t.isFunction(o.options.items)?o.options.items.call(o.element[0],e,{item:this.currentItem}):t(o.options.items,o.element),o]),this.containers.push(o));for(i=u.length-1;i>=0;i--)for(a=u[i][1],n=0,c=(r=u[i][0]).length;c>n;n++)(l=t(r[n])).data(this.widgetName+"-item",a),h.push({item:l,instance:a,width:0,height:0,left:0,top:0})},refreshPositions:function(e){var i,n,s,o;for(this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset()),i=this.items.length-1;i>=0;i--)(n=this.items[i]).instance!==this.currentContainer&&this.currentContainer&&n.item[0]!==this.currentItem[0]||(s=this.options.toleranceElement?t(this.options.toleranceElement,n.item):n.item,e||(n.width=s.outerWidth(),n.height=s.outerHeight()),o=s.offset(),n.left=o.left,n.top=o.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)o=this.containers[i].element.offset(),this.containers[i].containerCache.left=o.left,this.containers[i].containerCache.top=o.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){var i,n=(e=e||this).options;n.placeholder&&n.placeholder.constructor!==String||(i=n.placeholder,n.placeholder={element:function(){var n=e.currentItem[0].nodeName.toLowerCase(),s=t("<"+n+">",e.document[0]).addClass(i||e.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===n?e.currentItem.children().each((function(){t("<td>&#160;</td>",e.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(s)})):"img"===n&&s.attr("src",e.currentItem.attr("src")),i||s.css("visibility","hidden"),s},update:function(t,s){(!i||n.forcePlaceholderSize)&&(s.height()||s.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),s.width()||s.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(n.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),n.placeholder.update(e,e.placeholder)},_contactContainers:function(e){var i,n,s,o,a,r,l,c,h,u,d=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!t.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(d&&t.contains(this.containers[i].element[0],d.element[0]))continue;d=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",e,this._uiHash(this)),this.containers[i].containerCache.over=0);if(d)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(s=1e4,o=null,a=(h=d.floating||this._isFloating(this.currentItem))?"left":"top",r=h?"width":"height",u=h?"clientX":"clientY",n=this.items.length-1;n>=0;n--)t.contains(this.containers[p].element[0],this.items[n].item[0])&&this.items[n].item[0]!==this.currentItem[0]&&(l=this.items[n].item.offset()[a],c=!1,e[u]-l>this.items[n][r]/2&&(c=!0),s>Math.abs(e[u]-l)&&(s=Math.abs(e[u]-l),o=this.items[n],this.direction=c?"up":"down"));if(!o&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return void(this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash()),this.currentContainer.containerCache.over=1));o?this._rearrange(e,o,null,!0):this._rearrange(e,null,this.containers[p].element,!0),this._trigger("change",e,this._uiHash()),this.containers[p]._trigger("change",e,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(e){var i=this.options,n=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return n.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(n[0]),n[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!n[0].style.width||i.forceHelperSize)&&n.width(this.currentItem.width()),(!n[0].style.height||i.forceHelperSize)&&n.height(this.currentItem.height()),n},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,n,s=this.options;"parent"===s.containment&&(s.containment=this.helper[0].parentNode),("document"===s.containment||"window"===s.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,t("document"===s.containment?document:window).width()-this.helperProportions.width-this.margins.left,(t("document"===s.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(s.containment)||(e=t(s.containment)[0],i=t(s.containment).offset(),n="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(n?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(n?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var n="absolute"===e?1:-1,s="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(s[0].tagName);return{top:i.top+this.offset.relative.top*n+this.offset.parent.top*n-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():o?0:s.scrollTop())*n,left:i.left+this.offset.relative.left*n+this.offset.parent.left*n-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():o?0:s.scrollLeft())*n}},_generatePosition:function(e){var i,n,s=this.options,o=e.pageX,a=e.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,l=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(o=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(a=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(o=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(a=this.containment[3]+this.offset.click.top)),s.grid&&(i=this.originalPageY+Math.round((a-this.originalPageY)/s.grid[1])*s.grid[1],a=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-s.grid[1]:i+s.grid[1]:i,n=this.originalPageX+Math.round((o-this.originalPageX)/s.grid[0])*s.grid[0],o=this.containment?n-this.offset.click.left>=this.containment[0]&&n-this.offset.click.left<=this.containment[2]?n:n-this.offset.click.left>=this.containment[0]?n-s.grid[0]:n+s.grid[0]:n)),{top:a-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():l?0:r.scrollTop()),left:o-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():l?0:r.scrollLeft())}},_rearrange:function(t,e,i,n){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var s=this.counter;this._delay((function(){s===this.counter&&this.refreshPositions(!n)}))},_clear:function(t,e){function i(t,e,i){return function(n){i._trigger(t,n,e._uiHash(e))}}this.reverting=!1;var n,s=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(n in this._storedCSS)("auto"===this._storedCSS[n]||"static"===this._storedCSS[n])&&(this._storedCSS[n]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&s.push((function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))})),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||s.push((function(t){this._trigger("update",t,this._uiHash())})),this!==this.currentContainer&&(e||(s.push((function(t){this._trigger("remove",t,this._uiHash())})),s.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),s.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),n=this.containers.length-1;n>=0;n--)e||s.push(i("deactivate",this,this.containers[n])),this.containers[n].containerCache.over&&(s.push(i("out",this,this.containers[n])),this.containers[n].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!e){for(n=0;s.length>n;n++)s[n].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){!1===t.Widget.prototype._trigger.apply(this,arguments)&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}}),t.widget("ui.spinner",{version:"1.11.2",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var e={},i=this.element;return t.each(["min","max","step"],(function(t,n){var s=i.attr(n);void 0!==s&&s.length&&(e[n]=s)})),e},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(t){return this.cancelBlur?void delete this.cancelBlur:(this._stop(),this._refresh(),void(this.previous!==this.element.val()&&this._trigger("change",t)))},mousewheel:function(t,e){if(e){if(!this.spinning&&!this._start(t))return!1;this._spin((e>0?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay((function(){this.spinning&&this._stop(t)}),100),t.preventDefault()}},"mousedown .ui-spinner-button":function(e){function i(){this.element[0]===this.document[0].activeElement||(this.element.focus(),this.previous=n,this._delay((function(){this.previous=n})))}var n;n=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),e.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay((function(){delete this.cancelBlur,i.call(this)})),!1!==this._start(e)&&this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(e){return t(e.currentTarget).hasClass("ui-state-active")?!1!==this._start(e)&&void this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e):void 0},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var t=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=t.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(.5*t.height())&&t.height()>0&&t.height(t.height()),this.options.disabled&&this.disable()},_keydown:function(e){var i=this.options,n=t.ui.keyCode;switch(e.keyCode){case n.UP:return this._repeat(null,1,e),!0;case n.DOWN:return this._repeat(null,-1,e),!0;case n.PAGE_UP:return this._repeat(null,i.page,e),!0;case n.PAGE_DOWN:return this._repeat(null,-i.page,e),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon "+this.options.icons.down+"'>&#9660;</span></a>"},_start:function(t){return!(!this.spinning&&!1===this._trigger("start",t)||(this.counter||(this.counter=1),this.spinning=!0,0))},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay((function(){this._repeat(40,e,i)}),t),this._spin(e*this.options.step,i)},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&!1===this._trigger("spin",e,{value:i})||(this._value(i),this.counter++)},_increment:function(e){var i=this.options.incremental;return i?t.isFunction(i)?i(e):Math.floor(e*e*e/5e4-e*e/500+17*e/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_adjustValue:function(t){var e,i,n=this.options;return i=t-(e=null!==n.min?n.min:0),t=e+(i=Math.round(i/n.step)*n.step),t=parseFloat(t.toFixed(this._precision())),null!==n.max&&t>n.max?n.max:null!==n.min&&n.min>t?n.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t))},_setOption:function(t,e){if("culture"===t||"numberFormat"===t){var i=this._parse(this.element.val());return this.options[t]=e,void this.element.val(this._format(i))}("max"===t||"min"===t||"step"===t)&&"string"==typeof e&&(e=this._parse(e)),"icons"===t&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)),this._super(t,e),"disabled"===t&&(this.widget().toggleClass("ui-state-disabled",!!e),this.element.prop("disabled",!!e),this.buttons.button(e?"disable":"enable"))},_setOptions:l((function(t){this._super(t)})),_parse:function(t){return"string"==typeof t&&""!==t&&(t=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t),""===t||isNaN(t)?null:t},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var t=this.value();return null!==t&&t===this._adjustValue(t)},_value:function(t,e){var i;""!==t&&null!==(i=this._parse(t))&&(e||(i=this._adjustValue(i)),t=this._format(i)),this.element.val(t),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:l((function(t){this._stepUp(t)})),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:l((function(t){this._stepDown(t)})),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:l((function(t){this._stepUp((t||1)*this.options.page)})),pageDown:l((function(t){this._stepDown((t||1)*this.options.page)})),value:function(t){return arguments.length?void l(this._value).call(this,t):this._parse(this.element.val())},widget:function(){return this.uiSpinner}}),t.widget("ui.tabs",{version:"1.11.2",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var t=/#.*$/;return function(e){var i,n;i=(e=e.cloneNode(!1)).href.replace(t,""),n=location.href.replace(t,"");try{i=decodeURIComponent(i)}catch(t){}try{n=decodeURIComponent(n)}catch(t){}return e.hash.length>1&&i===n}}(),_create:function(){var e=this,i=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",i.collapsible),this._processTabs(),i.active=this._initialActive(),t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),(function(t){return e.tabs.index(t)})))).sort()),this.active=!1!==this.options.active&&this.anchors.length?this._findActive(i.active):t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var e=this.options.active,i=this.options.collapsible,n=location.hash.substring(1);return null===e&&(n&&this.tabs.each((function(i,s){return t(s).attr("aria-controls")===n?(e=i,!1):void 0})),null===e&&(e=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===e||-1===e)&&(e=!!this.tabs.length&&0)),!1!==e&&-1===(e=this.tabs.index(this.tabs.eq(e)))&&(e=!i&&0),!i&&!1===e&&this.anchors.length&&(e=0),e},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(e){var i=t(this.document[0].activeElement).closest("li"),n=this.tabs.index(i),s=!0;if(!this._handlePageNav(e)){switch(e.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:n++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:s=!1,n--;break;case t.ui.keyCode.END:n=this.anchors.length-1;break;case t.ui.keyCode.HOME:n=0;break;case t.ui.keyCode.SPACE:return e.preventDefault(),clearTimeout(this.activating),void this._activate(n);case t.ui.keyCode.ENTER:return e.preventDefault(),clearTimeout(this.activating),void this._activate(n!==this.options.active&&n);default:return}e.preventDefault(),clearTimeout(this.activating),n=this._focusNextTab(n,s),e.ctrlKey||(i.attr("aria-selected","false"),this.tabs.eq(n).attr("aria-selected","true"),this.activating=this._delay((function(){this.option("active",n)}),this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.focus())},_handlePageNav:function(e){return e.altKey&&e.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):e.altKey&&e.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(e,i){for(var n=this.tabs.length-1;-1!==t.inArray((e>n&&(e=0),0>e&&(e=n),e),this.options.disabled);)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).focus(),t},_setOption:function(t,e){return"active"===t?void this._activate(e):"disabled"===t?void this._setupDisabled(e):(this._super(t,e),"collapsible"===t&&(this.element.toggleClass("ui-tabs-collapsible",e),e||!1!==this.options.active||this._activate(0)),"event"===t&&this._setupEvents(e),void("heightStyle"===t&&this._setupHeightStyle(e)))},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");e.disabled=t.map(i.filter(".ui-state-disabled"),(function(t){return i.index(t)})),this._processTabs(),!1!==e.active&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this,i=this.tabs,n=this.anchors,s=this.panels;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist").delegate("> li","mousedown"+this.eventNamespace,(function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()})).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,(function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()})),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map((function(){return t("a",this)[0]})).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=t(),this.anchors.each((function(i,n){var s,o,a,r=t(n).uniqueId().attr("id"),l=t(n).closest("li"),c=l.attr("aria-controls");e._isLocal(n)?(a=(s=n.hash).substring(1),o=e.element.find(e._sanitizeSelector(s))):(s="#"+(a=l.attr("aria-controls")||t({}).uniqueId()[0].id),(o=e.element.find(s)).length||(o=e._createPanel(a)).insertAfter(e.panels[i-1]||e.tablist),o.attr("aria-live","polite")),o.length&&(e.panels=e.panels.add(o)),c&&l.data("ui-tabs-aria-controls",c),l.attr({"aria-controls":a,"aria-labelledby":r}),o.attr("aria-labelledby",r)})),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel"),i&&(this._off(i.not(this.tabs)),this._off(n.not(this.anchors)),this._off(s.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(e){t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1);for(var i,n=0;i=this.tabs[n];n++)!0===e||-1!==t.inArray(n,e)?t(i).addClass("ui-state-disabled").attr("aria-disabled","true"):t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=e},_setupEvents:function(e){var i={};e&&t.each(e.split(" "),(function(t,e){i[e]="_eventHandler"})),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(t){t.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,n=this.element.parent();"fill"===e?(i=n.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each((function(){var e=t(this),n=e.css("position");"absolute"!==n&&"fixed"!==n&&(i-=e.outerHeight(!0))})),this.element.children().not(this.panels).each((function(){i-=t(this).outerHeight(!0)})),this.panels.each((function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))})).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each((function(){i=Math.max(i,t(this).height("").height())})).height(i))},_eventHandler:function(e){var i=this.options,n=this.active,s=t(e.currentTarget).closest("li"),o=s[0]===n[0],a=o&&i.collapsible,r=a?t():this._getPanelForTab(s),l=n.length?this._getPanelForTab(n):t(),c={oldTab:n,oldPanel:l,newTab:a?t():s,newPanel:r};e.preventDefault(),s.hasClass("ui-state-disabled")||s.hasClass("ui-tabs-loading")||this.running||o&&!i.collapsible||!1===this._trigger("beforeActivate",e,c)||(i.active=!a&&this.tabs.index(s),this.active=o?t():s,this.xhr&&this.xhr.abort(),l.length||r.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),r.length&&this.load(this.tabs.index(s),e),this._toggle(e,c))},_toggle:function(e,i){function n(){o.running=!1,o._trigger("activate",e,i)}function s(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),a.length&&o.options.show?o._show(a,o.options.show,n):(a.show(),n())}var o=this,a=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,(function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),s()})):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),r.hide(),s()),r.attr("aria-hidden","true"),i.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),a.length&&r.length?i.oldTab.attr("tabIndex",-1):a.length&&this.tabs.filter((function(){return 0===t(this).attr("tabIndex")})).attr("tabIndex",-1),a.attr("aria-hidden","false"),i.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(e){var i,n=this._findActive(e);n[0]!==this.active[0]&&(n.length||(n=this.active),i=n.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return!1===e?t():this.tabs.eq(e)},_getIndex:function(t){return"string"==typeof t&&(t=this.anchors.index(this.anchors.filter("[href$='"+t+"']"))),t},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tablist.unbind(this.eventNamespace),this.tabs.add(this.panels).each((function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")})),this.tabs.each((function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")})),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(e){var i=this.options.disabled;!1!==i&&(void 0===e?i=!1:(e=this._getIndex(e),i=t.isArray(i)?t.map(i,(function(t){return t!==e?t:null})):t.map(this.tabs,(function(t,i){return i!==e?i:null}))),this._setupDisabled(i))},disable:function(e){var i=this.options.disabled;if(!0!==i){if(void 0===e)i=!0;else{if(e=this._getIndex(e),-1!==t.inArray(e,i))return;i=t.isArray(i)?t.merge([e],i).sort():[e]}this._setupDisabled(i)}},load:function(e,i){e=this._getIndex(e);var n=this,s=this.tabs.eq(e),o=s.find(".ui-tabs-anchor"),a=this._getPanelForTab(s),r={tab:s,panel:a};this._isLocal(o[0])||(this.xhr=t.ajax(this._ajaxSettings(o,i,r)),this.xhr&&"canceled"!==this.xhr.statusText&&(s.addClass("ui-tabs-loading"),a.attr("aria-busy","true"),this.xhr.success((function(t){setTimeout((function(){a.html(t),n._trigger("load",i,r)}),1)})).complete((function(t,e){setTimeout((function(){"abort"===e&&n.panels.stop(!1,!0),s.removeClass("ui-tabs-loading"),a.removeAttr("aria-busy"),t===n.xhr&&delete n.xhr}),1)}))))},_ajaxSettings:function(e,i,n){var s=this;return{url:e.attr("href"),beforeSend:function(e,o){return s._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:o},n))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}}),t.widget("ui.tooltip",{version:"1.11.2",options:{content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_addDescribedBy:function(e,i){var n=(e.attr("aria-describedby")||"").split(/\s+/);n.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(n.join(" ")))},_removeDescribedBy:function(e){var i=e.data("ui-tooltip-id"),n=(e.attr("aria-describedby")||"").split(/\s+/),s=t.inArray(i,n);-1!==s&&n.splice(s,1),e.removeData("ui-tooltip-id"),(n=t.trim(n.join(" ")))?e.attr("aria-describedby",n):e.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable(),this.liveRegion=t("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)},_setOption:function(e,i){var n=this;return"disabled"===e?(this[i?"_disable":"_enable"](),void(this.options[e]=i)):(this._super(e,i),void("content"===e&&t.each(this.tooltips,(function(t,e){n._updateContent(e.element)}))))},_disable:function(){var e=this;t.each(this.tooltips,(function(i,n){var s=t.Event("blur");s.target=s.currentTarget=n.element[0],e.close(s,!0)})),this.element.find(this.options.items).addBack().each((function(){var e=t(this);e.is("[title]")&&e.data("ui-tooltip-title",e.attr("title")).removeAttr("title")}))},_enable:function(){this.element.find(this.options.items).addBack().each((function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))}))},open:function(e){var i=this,n=t(e?e.target:this.element).closest(this.options.items);n.length&&!n.data("ui-tooltip-id")&&(n.attr("title")&&n.data("ui-tooltip-title",n.attr("title")),n.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&n.parents().each((function(){var e,n=t(this);n.data("ui-tooltip-open")&&((e=t.Event("blur")).target=e.currentTarget=this,i.close(e,!0)),n.attr("title")&&(n.uniqueId(),i.parents[this.id]={element:this,title:n.attr("title")},n.attr("title",""))})),this._updateContent(n,e))},_updateContent:function(t,e){var i,n=this.options.content,s=this,o=e?e.type:null;return"string"==typeof n?this._open(e,t,n):void((i=n.call(t[0],(function(i){t.data("ui-tooltip-open")&&s._delay((function(){e&&(e.type=o),this._open(e,t,i)}))})))&&this._open(e,t,i))},_open:function(e,i,n){function s(t){h.of=t,a.is(":hidden")||a.position(h)}var o,a,r,l,c,h=t.extend({},this.options.position);if(n){if(o=this._find(i))return void o.tooltip.find(".ui-tooltip-content").html(n);i.is("[title]")&&(e&&"mouseover"===e.type?i.attr("title",""):i.removeAttr("title")),o=this._tooltip(i),a=o.tooltip,this._addDescribedBy(i,a.attr("id")),a.find(".ui-tooltip-content").html(n),this.liveRegion.children().hide(),n.clone?(c=n.clone()).removeAttr("id").find("[id]").removeAttr("id"):c=n,t("<div>").html(c).appendTo(this.liveRegion),this.options.track&&e&&/^mouse/.test(e.type)?(this._on(this.document,{mousemove:s}),s(e)):a.position(t.extend({of:i},this.options.position)),a.hide(),this._show(a,this.options.show),this.options.show&&this.options.show.delay&&(l=this.delayedShow=setInterval((function(){a.is(":visible")&&(s(h.of),clearInterval(l))}),t.fx.interval)),this._trigger("open",e,{tooltip:a}),r={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var n=t.Event(e);n.currentTarget=i[0],this.close(n,!0)}}},i[0]!==this.element[0]&&(r.remove=function(){this._removeTooltip(a)}),e&&"mouseover"!==e.type||(r.mouseleave="close"),e&&"focusin"!==e.type||(r.focusout="close"),this._on(!0,i,r)}},close:function(e){var i,n=this,s=t(e?e.currentTarget:this.element),o=this._find(s);o&&(i=o.tooltip,o.closing||(clearInterval(this.delayedShow),s.data("ui-tooltip-title")&&!s.attr("title")&&s.attr("title",s.data("ui-tooltip-title")),this._removeDescribedBy(s),o.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,(function(){n._removeTooltip(t(this))})),s.removeData("ui-tooltip-open"),this._off(s,"mouseleave focusout keyup"),s[0]!==this.element[0]&&this._off(s,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,(function(e,i){t(i.element).attr("title",i.title),delete n.parents[e]})),o.closing=!0,this._trigger("close",e,{tooltip:i}),o.hiding||(o.closing=!1)))},_tooltip:function(e){var i=t("<div>").attr("role","tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||"")),n=i.uniqueId().attr("id");return t("<div>").addClass("ui-tooltip-content").appendTo(i),i.appendTo(this.document[0].body),this.tooltips[n]={element:e,tooltip:i}},_find:function(t){var e=t.data("ui-tooltip-id");return e?this.tooltips[e]:null},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_destroy:function(){var e=this;t.each(this.tooltips,(function(i,n){var s=t.Event("blur"),o=n.element;s.target=s.currentTarget=o[0],e.close(s,!0),t("#"+i).remove(),o.data("ui-tooltip-title")&&(o.attr("title")||o.attr("title",o.data("ui-tooltip-title")),o.removeData("ui-tooltip-title"))})),this.liveRegion.remove()}})})?n.apply(e,s):n)||(t.exports=o)},yQUp:function(t,e,i){(function(t){t((function(){"use strict";t(".connectedSortable").sortable({placeholder:"sort-highlight",connectWith:".connectedSortable",handle:".box-header, .nav-tabs",forcePlaceholderSize:!0,zIndex:999999}),t(".connectedSortable .box-header, .connectedSortable .nav-tabs-custom").css("cursor","move"),t(".todo-list").sortable({placeholder:"sort-highlight",handle:".handle",forcePlaceholderSize:!0,zIndex:999999}),t(".textarea").wysihtml5(),t(".daterange").daterangepicker({ranges:{Today:[moment(),moment()],Yesterday:[moment().subtract(1,"days"),moment().subtract(1,"days")],"Last 7 Days":[moment().subtract(6,"days"),moment()],"Last 30 Days":[moment().subtract(29,"days"),moment()],"This Month":[moment().startOf("month"),moment().endOf("month")],"Last Month":[moment().subtract(1,"month").startOf("month"),moment().subtract(1,"month").endOf("month")]},startDate:moment().subtract(29,"days"),endDate:moment()},(function(t,e){window.alert("You chose: "+t.format("MMMM D, YYYY")+" - "+e.format("MMMM D, YYYY"))})),t(".knob").knob();var e={US:398,SA:400,CA:1e3,DE:500,FR:760,CN:300,AU:700,BR:600,IN:800,GB:320,RU:3e3};t("#world-map").vectorMap({map:"world_mill_en",backgroundColor:"transparent",regionStyle:{initial:{fill:"#e4e4e4","fill-opacity":1,stroke:"none","stroke-width":0,"stroke-opacity":1}},series:{regions:[{values:e,scale:["#92c1dc","#ebf4f9"],normalizeFunction:"polynomial"}]},onRegionLabelShow:function(t,i,n){void 0!==e[n]&&i.html(i.html()+": "+e[n]+" new visitors")}});var i=[1e3,1200,920,927,931,1027,819,930,1021];t("#sparkline-1").sparkline(i,{type:"line",lineColor:"#92c1dc",fillColor:"#ebf4f9",height:"50",width:"80"}),i=[515,519,520,522,652,810,370,627,319,630,921],t("#sparkline-2").sparkline(i,{type:"line",lineColor:"#92c1dc",fillColor:"#ebf4f9",height:"50",width:"80"}),i=[15,19,20,22,33,27,31,27,19,30,21],t("#sparkline-3").sparkline(i,{type:"line",lineColor:"#92c1dc",fillColor:"#ebf4f9",height:"50",width:"80"}),t("#calendar").datepicker(),t("#chat-box").slimScroll({height:"250px"});var n=new Morris.Area({element:"revenue-chart",resize:!0,data:[{y:"2011 Q1",item1:2666,item2:2666},{y:"2011 Q2",item1:2778,item2:2294},{y:"2011 Q3",item1:4912,item2:1969},{y:"2011 Q4",item1:3767,item2:3597},{y:"2012 Q1",item1:6810,item2:1914},{y:"2012 Q2",item1:5670,item2:4293},{y:"2012 Q3",item1:4820,item2:3795},{y:"2012 Q4",item1:15073,item2:5967},{y:"2013 Q1",item1:10687,item2:4460},{y:"2013 Q2",item1:8432,item2:5713}],xkey:"y",ykeys:["item1","item2"],labels:["Item 1","Item 2"],lineColors:["#a0d0e0","#3c8dbc"],hideHover:"auto"}),s=new Morris.Line({element:"line-chart",resize:!0,data:[{y:"2011 Q1",item1:2666},{y:"2011 Q2",item1:2778},{y:"2011 Q3",item1:4912},{y:"2011 Q4",item1:3767},{y:"2012 Q1",item1:6810},{y:"2012 Q2",item1:5670},{y:"2012 Q3",item1:4820},{y:"2012 Q4",item1:15073},{y:"2013 Q1",item1:10687},{y:"2013 Q2",item1:8432}],xkey:"y",ykeys:["item1"],labels:["Item 1"],lineColors:["#efefef"],lineWidth:2,hideHover:"auto",gridTextColor:"#fff",gridStrokeWidth:.4,pointSize:4,pointStrokeColors:["#efefef"],gridLineColor:"#efefef",gridTextFamily:"Open Sans",gridTextSize:10}),o=new Morris.Donut({element:"sales-chart",resize:!0,colors:["#3c8dbc","#f56954","#00a65a"],data:[{label:"Download Sales",value:12},{label:"In-Store Sales",value:30},{label:"Mail-Order Sales",value:20}],hideHover:"auto"});t(".box ul.nav a").on("shown.bs.tab",(function(){n.redraw(),o.redraw(),s.redraw()})),t(".todo-list").todolist({onCheck:function(t){return window.console.log("The element has been checked"),t},onUncheck:function(t){return window.console.log("The element has been unchecked"),t}})}))}).call(this,i("EVdn"))}});
=======
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap-select/dist/js/bootstrap-select.min.js":
/*!***********************************************************************!*\
  !*** ./node_modules/bootstrap-select/dist/js/bootstrap-select.min.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Bootstrap-select v1.13.18 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2020 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */

!function(e,t){void 0===e&&void 0!==window&&(e=window), true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e){return t(e)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(e){!function(P){"use strict";var d=["sanitize","whiteList","sanitizeFn"],r=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],e={"*":["class","dir","id","lang","role","tabindex","style",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},l=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,a=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function v(e,t){var i=e.nodeName.toLowerCase();if(-1!==P.inArray(i,t))return-1===P.inArray(i,r)||Boolean(e.nodeValue.match(l)||e.nodeValue.match(a));for(var s=P(t).filter(function(e,t){return t instanceof RegExp}),n=0,o=s.length;n<o;n++)if(i.match(s[n]))return!0;return!1}function W(e,t,i){if(i&&"function"==typeof i)return i(e);for(var s=Object.keys(t),n=0,o=e.length;n<o;n++)for(var r=e[n].querySelectorAll("*"),l=0,a=r.length;l<a;l++){var c=r[l],d=c.nodeName.toLowerCase();if(-1!==s.indexOf(d))for(var h=[].slice.call(c.attributes),p=[].concat(t["*"]||[],t[d]||[]),u=0,f=h.length;u<f;u++){var m=h[u];v(m,p)||c.removeAttribute(m.nodeName)}else c.parentNode.removeChild(c)}}"classList"in document.createElement("_")||function(e){if("Element"in e){var t="classList",i="prototype",s=e.Element[i],n=Object,o=function(){var i=P(this);return{add:function(e){return e=Array.prototype.slice.call(arguments).join(" "),i.addClass(e)},remove:function(e){return e=Array.prototype.slice.call(arguments).join(" "),i.removeClass(e)},toggle:function(e,t){return i.toggleClass(e,t)},contains:function(e){return i.hasClass(e)}}};if(n.defineProperty){var r={get:o,enumerable:!0,configurable:!0};try{n.defineProperty(s,t,r)}catch(e){void 0!==e.number&&-2146823252!==e.number||(r.enumerable=!1,n.defineProperty(s,t,r))}}else n[i].__defineGetter__&&s.__defineGetter__(t,o)}}(window);var t,c,i=document.createElement("_");if(i.classList.add("c1","c2"),!i.classList.contains("c2")){var s=DOMTokenList.prototype.add,n=DOMTokenList.prototype.remove;DOMTokenList.prototype.add=function(){Array.prototype.forEach.call(arguments,s.bind(this))},DOMTokenList.prototype.remove=function(){Array.prototype.forEach.call(arguments,n.bind(this))}}if(i.classList.toggle("c3",!1),i.classList.contains("c3")){var o=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(e,t){return 1 in arguments&&!this.contains(e)==!t?t:o.call(this,e)}}function h(e){if(null==this)throw new TypeError;var t=String(this);if(e&&"[object RegExp]"==c.call(e))throw new TypeError;var i=t.length,s=String(e),n=s.length,o=1<arguments.length?arguments[1]:void 0,r=o?Number(o):0;r!=r&&(r=0);var l=Math.min(Math.max(r,0),i);if(i<n+l)return!1;for(var a=-1;++a<n;)if(t.charCodeAt(l+a)!=s.charCodeAt(a))return!1;return!0}function O(e,t){var i,s=e.selectedOptions,n=[];if(t){for(var o=0,r=s.length;o<r;o++)(i=s[o]).disabled||"OPTGROUP"===i.parentNode.tagName&&i.parentNode.disabled||n.push(i);return n}return s}function z(e,t){for(var i,s=[],n=t||e.selectedOptions,o=0,r=n.length;o<r;o++)(i=n[o]).disabled||"OPTGROUP"===i.parentNode.tagName&&i.parentNode.disabled||s.push(i.value);return e.multiple?s:s.length?s[0]:null}i=null,String.prototype.startsWith||(t=function(){try{var e={},t=Object.defineProperty,i=t(e,e,e)&&t}catch(e){}return i}(),c={}.toString,t?t(String.prototype,"startsWith",{value:h,configurable:!0,writable:!0}):String.prototype.startsWith=h),Object.keys||(Object.keys=function(e,t,i){for(t in i=[],e)i.hasOwnProperty.call(e,t)&&i.push(t);return i}),HTMLSelectElement&&!HTMLSelectElement.prototype.hasOwnProperty("selectedOptions")&&Object.defineProperty(HTMLSelectElement.prototype,"selectedOptions",{get:function(){return this.querySelectorAll(":checked")}});var p={useDefault:!1,_set:P.valHooks.select.set};P.valHooks.select.set=function(e,t){return t&&!p.useDefault&&P(e).data("selected",!0),p._set.apply(this,arguments)};var T=null,u=function(){try{return new Event("change"),!0}catch(e){return!1}}();function k(e,t,i,s){for(var n=["display","subtext","tokens"],o=!1,r=0;r<n.length;r++){var l=n[r],a=e[l];if(a&&(a=a.toString(),"display"===l&&(a=a.replace(/<[^>]+>/g,"")),s&&(a=w(a)),a=a.toUpperCase(),o="contains"===i?0<=a.indexOf(t):a.startsWith(t)))break}return o}function N(e){return parseInt(e,10)||0}P.fn.triggerNative=function(e){var t,i=this[0];i.dispatchEvent?(u?t=new Event(e,{bubbles:!0}):(t=document.createEvent("Event")).initEvent(e,!0,!1),i.dispatchEvent(t)):i.fireEvent?((t=document.createEventObject()).eventType=e,i.fireEvent("on"+e,t)):this.trigger(e)};var f={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i","\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S","\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe","\u0149":"'n","\u017f":"s"},m=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,g=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]","g");function b(e){return f[e]}function w(e){return(e=e.toString())&&e.replace(m,b).replace(g,"")}var I,x,y,$,S=(I={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},x="(?:"+Object.keys(I).join("|")+")",y=RegExp(x),$=RegExp(x,"g"),function(e){return e=null==e?"":""+e,y.test(e)?e.replace($,E):e});function E(e){return I[e]}var C={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"},A=27,L=13,D=32,H=9,B=38,R=40,M={success:!1,major:"3"};try{M.full=(P.fn.dropdown.Constructor.VERSION||"").split(" ")[0].split("."),M.major=M.full[0],M.success=!0}catch(e){}var U=0,j=".bs.select",V={DISABLED:"disabled",DIVIDER:"divider",SHOW:"open",DROPUP:"dropup",MENU:"dropdown-menu",MENURIGHT:"dropdown-menu-right",MENULEFT:"dropdown-menu-left",BUTTONCLASS:"btn-default",POPOVERHEADER:"popover-title",ICONBASE:"glyphicon",TICKICON:"glyphicon-ok"},F={MENU:"."+V.MENU},_={div:document.createElement("div"),span:document.createElement("span"),i:document.createElement("i"),subtext:document.createElement("small"),a:document.createElement("a"),li:document.createElement("li"),whitespace:document.createTextNode("\xa0"),fragment:document.createDocumentFragment()};_.noResults=_.li.cloneNode(!1),_.noResults.className="no-results",_.a.setAttribute("role","option"),_.a.className="dropdown-item",_.subtext.className="text-muted",_.text=_.span.cloneNode(!1),_.text.className="text",_.checkMark=_.span.cloneNode(!1);var G=new RegExp(B+"|"+R),q=new RegExp("^"+H+"$|"+A),K={li:function(e,t,i){var s=_.li.cloneNode(!1);return e&&(1===e.nodeType||11===e.nodeType?s.appendChild(e):s.innerHTML=e),void 0!==t&&""!==t&&(s.className=t),null!=i&&s.classList.add("optgroup-"+i),s},a:function(e,t,i){var s=_.a.cloneNode(!0);return e&&(11===e.nodeType?s.appendChild(e):s.insertAdjacentHTML("beforeend",e)),void 0!==t&&""!==t&&s.classList.add.apply(s.classList,t.split(/\s+/)),i&&s.setAttribute("style",i),s},text:function(e,t){var i,s,n=_.text.cloneNode(!1);if(e.content)n.innerHTML=e.content;else{if(n.textContent=e.text,e.icon){var o=_.whitespace.cloneNode(!1);(s=(!0===t?_.i:_.span).cloneNode(!1)).className=this.options.iconBase+" "+e.icon,_.fragment.appendChild(s),_.fragment.appendChild(o)}e.subtext&&((i=_.subtext.cloneNode(!1)).textContent=e.subtext,n.appendChild(i))}if(!0===t)for(;0<n.childNodes.length;)_.fragment.appendChild(n.childNodes[0]);else _.fragment.appendChild(n);return _.fragment},label:function(e){var t,i,s=_.text.cloneNode(!1);if(s.innerHTML=e.display,e.icon){var n=_.whitespace.cloneNode(!1);(i=_.span.cloneNode(!1)).className=this.options.iconBase+" "+e.icon,_.fragment.appendChild(i),_.fragment.appendChild(n)}return e.subtext&&((t=_.subtext.cloneNode(!1)).textContent=e.subtext,s.appendChild(t)),_.fragment.appendChild(s),_.fragment}};var Y=function(e,t){var i=this;p.useDefault||(P.valHooks.select.set=p._set,p.useDefault=!0),this.$element=P(e),this.$newElement=null,this.$button=null,this.$menu=null,this.options=t,this.selectpicker={main:{},search:{},current:{},view:{},isSearching:!1,keydown:{keyHistory:"",resetKeyHistory:{start:function(){return setTimeout(function(){i.selectpicker.keydown.keyHistory=""},800)}}}},this.sizeInfo={},null===this.options.title&&(this.options.title=this.$element.attr("title"));var s=this.options.windowPadding;"number"==typeof s&&(this.options.windowPadding=[s,s,s,s]),this.val=Y.prototype.val,this.render=Y.prototype.render,this.refresh=Y.prototype.refresh,this.setStyle=Y.prototype.setStyle,this.selectAll=Y.prototype.selectAll,this.deselectAll=Y.prototype.deselectAll,this.destroy=Y.prototype.destroy,this.remove=Y.prototype.remove,this.show=Y.prototype.show,this.hide=Y.prototype.hide,this.init()};function Z(e){var l,a=arguments,c=e;if([].shift.apply(a),!M.success){try{M.full=(P.fn.dropdown.Constructor.VERSION||"").split(" ")[0].split(".")}catch(e){Y.BootstrapVersion?M.full=Y.BootstrapVersion.split(" ")[0].split("."):(M.full=[M.major,"0","0"],console.warn("There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.",e))}M.major=M.full[0],M.success=!0}if("4"===M.major){var t=[];Y.DEFAULTS.style===V.BUTTONCLASS&&t.push({name:"style",className:"BUTTONCLASS"}),Y.DEFAULTS.iconBase===V.ICONBASE&&t.push({name:"iconBase",className:"ICONBASE"}),Y.DEFAULTS.tickIcon===V.TICKICON&&t.push({name:"tickIcon",className:"TICKICON"}),V.DIVIDER="dropdown-divider",V.SHOW="show",V.BUTTONCLASS="btn-light",V.POPOVERHEADER="popover-header",V.ICONBASE="",V.TICKICON="bs-ok-default";for(var i=0;i<t.length;i++){e=t[i];Y.DEFAULTS[e.name]=V[e.className]}}var s=this.each(function(){var e=P(this);if(e.is("select")){var t=e.data("selectpicker"),i="object"==typeof c&&c;if(t){if(i)for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t.options[s]=i[s])}else{var n=e.data();for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&-1!==P.inArray(o,d)&&delete n[o];var r=P.extend({},Y.DEFAULTS,P.fn.selectpicker.defaults||{},n,i);r.template=P.extend({},Y.DEFAULTS.template,P.fn.selectpicker.defaults?P.fn.selectpicker.defaults.template:{},n.template,i.template),e.data("selectpicker",t=new Y(this,r))}"string"==typeof c&&(l=t[c]instanceof Function?t[c].apply(t,a):t.options[c])}});return void 0!==l?l:s}Y.VERSION="1.13.18",Y.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results matched {0}",countSelectedText:function(e,t){return 1==e?"{0} item selected":"{0} items selected"},maxOptionsText:function(e,t){return[1==e?"Limit reached ({n} item max)":"Limit reached ({n} items max)",1==t?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)"]},selectAllText:"Select All",deselectAllText:"Deselect All",doneButton:!1,doneButtonText:"Close",multipleSeparator:", ",styleBase:"btn",style:V.BUTTONCLASS,size:"auto",title:null,selectedTextFormat:"values",width:!1,container:!1,hideDisabled:!1,showSubtext:!1,showIcon:!0,showContent:!0,dropupAuto:!0,header:!1,liveSearch:!1,liveSearchPlaceholder:null,liveSearchNormalize:!1,liveSearchStyle:"contains",actionsBox:!1,iconBase:V.ICONBASE,tickIcon:V.TICKICON,showTick:!1,template:{caret:'<span class="caret"></span>'},maxOptions:!1,mobile:!1,selectOnTab:!1,dropdownAlignRight:!1,windowPadding:0,virtualScroll:600,display:!1,sanitize:!0,sanitizeFn:null,whiteList:e},Y.prototype={constructor:Y,init:function(){var i=this,e=this.$element.attr("id"),t=this.$element[0],s=t.form;U++,this.selectId="bs-select-"+U,t.classList.add("bs-select-hidden"),this.multiple=this.$element.prop("multiple"),this.autofocus=this.$element.prop("autofocus"),t.classList.contains("show-tick")&&(this.options.showTick=!0),this.$newElement=this.createDropdown(),this.buildData(),this.$element.after(this.$newElement).prependTo(this.$newElement),s&&null===t.form&&(s.id||(s.id="form-"+this.selectId),t.setAttribute("form",s.id)),this.$button=this.$newElement.children("button"),this.$menu=this.$newElement.children(F.MENU),this.$menuInner=this.$menu.children(".inner"),this.$searchbox=this.$menu.find("input"),t.classList.remove("bs-select-hidden"),!0===this.options.dropdownAlignRight&&this.$menu[0].classList.add(V.MENURIGHT),void 0!==e&&this.$button.attr("data-id",e),this.checkDisabled(),this.clickListener(),this.options.liveSearch?(this.liveSearchListener(),this.focusedParent=this.$searchbox[0]):this.focusedParent=this.$menuInner[0],this.setStyle(),this.render(),this.setWidth(),this.options.container?this.selectPosition():this.$element.on("hide"+j,function(){if(i.isVirtual()){var e=i.$menuInner[0],t=e.firstChild.cloneNode(!1);e.replaceChild(t,e.firstChild),e.scrollTop=0}}),this.$menu.data("this",this),this.$newElement.data("this",this),this.options.mobile&&this.mobile(),this.$newElement.on({"hide.bs.dropdown":function(e){i.$element.trigger("hide"+j,e)},"hidden.bs.dropdown":function(e){i.$element.trigger("hidden"+j,e)},"show.bs.dropdown":function(e){i.$element.trigger("show"+j,e)},"shown.bs.dropdown":function(e){i.$element.trigger("shown"+j,e)}}),t.hasAttribute("required")&&this.$element.on("invalid"+j,function(){i.$button[0].classList.add("bs-invalid"),i.$element.on("shown"+j+".invalid",function(){i.$element.val(i.$element.val()).off("shown"+j+".invalid")}).on("rendered"+j,function(){this.validity.valid&&i.$button[0].classList.remove("bs-invalid"),i.$element.off("rendered"+j)}),i.$button.on("blur"+j,function(){i.$element.trigger("focus").trigger("blur"),i.$button.off("blur"+j)})}),setTimeout(function(){i.buildList(),i.$element.trigger("loaded"+j)})},createDropdown:function(){var e=this.multiple||this.options.showTick?" show-tick":"",t=this.multiple?' aria-multiselectable="true"':"",i="",s=this.autofocus?" autofocus":"";M.major<4&&this.$element.parent().hasClass("input-group")&&(i=" input-group-btn");var n,o="",r="",l="",a="";return this.options.header&&(o='<div class="'+V.POPOVERHEADER+'"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>"),this.options.liveSearch&&(r='<div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off"'+(null===this.options.liveSearchPlaceholder?"":' placeholder="'+S(this.options.liveSearchPlaceholder)+'"')+' role="combobox" aria-label="Search" aria-controls="'+this.selectId+'" aria-autocomplete="list"></div>'),this.multiple&&this.options.actionsBox&&(l='<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn '+V.BUTTONCLASS+'">'+this.options.selectAllText+'</button><button type="button" class="actions-btn bs-deselect-all btn '+V.BUTTONCLASS+'">'+this.options.deselectAllText+"</button></div></div>"),this.multiple&&this.options.doneButton&&(a='<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm '+V.BUTTONCLASS+'">'+this.options.doneButtonText+"</button></div></div>"),n='<div class="dropdown bootstrap-select'+e+i+'"><button type="button" tabindex="-1" class="'+this.options.styleBase+' dropdown-toggle" '+("static"===this.options.display?'data-display="static"':"")+'data-toggle="dropdown"'+s+' role="combobox" aria-owns="'+this.selectId+'" aria-haspopup="listbox" aria-expanded="false"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner"></div></div> </div>'+("4"===M.major?"":'<span class="bs-caret">'+this.options.template.caret+"</span>")+'</button><div class="'+V.MENU+" "+("4"===M.major?"":V.SHOW)+'">'+o+r+l+'<div class="inner '+V.SHOW+'" role="listbox" id="'+this.selectId+'" tabindex="-1" '+t+'><ul class="'+V.MENU+" inner "+("4"===M.major?V.SHOW:"")+'" role="presentation"></ul></div>'+a+"</div></div>",P(n)},setPositionData:function(){this.selectpicker.view.canHighlight=[],this.selectpicker.view.size=0,this.selectpicker.view.firstHighlightIndex=!1;for(var e=0;e<this.selectpicker.current.data.length;e++){var t=this.selectpicker.current.data[e],i=!0;"divider"===t.type?(i=!1,t.height=this.sizeInfo.dividerHeight):"optgroup-label"===t.type?(i=!1,t.height=this.sizeInfo.dropdownHeaderHeight):t.height=this.sizeInfo.liHeight,t.disabled&&(i=!1),this.selectpicker.view.canHighlight.push(i),i&&(this.selectpicker.view.size++,t.posinset=this.selectpicker.view.size,!1===this.selectpicker.view.firstHighlightIndex&&(this.selectpicker.view.firstHighlightIndex=e)),t.position=(0===e?0:this.selectpicker.current.data[e-1].position)+t.height}},isVirtual:function(){return!1!==this.options.virtualScroll&&this.selectpicker.main.elements.length>=this.options.virtualScroll||!0===this.options.virtualScroll},createView:function(N,e,t){var A,L,D=this,i=0,H=[];if(this.selectpicker.isSearching=N,this.selectpicker.current=N?this.selectpicker.search:this.selectpicker.main,this.setPositionData(),e)if(t)i=this.$menuInner[0].scrollTop;else if(!D.multiple){var s=D.$element[0],n=(s.options[s.selectedIndex]||{}).liIndex;if("number"==typeof n&&!1!==D.options.size){var o=D.selectpicker.main.data[n],r=o&&o.position;r&&(i=r-(D.sizeInfo.menuInnerHeight+D.sizeInfo.liHeight)/2)}}function l(e,t){var i,s,n,o,r,l,a,c,d=D.selectpicker.current.elements.length,h=[],p=!0,u=D.isVirtual();D.selectpicker.view.scrollTop=e,i=Math.ceil(D.sizeInfo.menuInnerHeight/D.sizeInfo.liHeight*1.5),s=Math.round(d/i)||1;for(var f=0;f<s;f++){var m=(f+1)*i;if(f===s-1&&(m=d),h[f]=[f*i+(f?1:0),m],!d)break;void 0===r&&e-1<=D.selectpicker.current.data[m-1].position-D.sizeInfo.menuInnerHeight&&(r=f)}if(void 0===r&&(r=0),l=[D.selectpicker.view.position0,D.selectpicker.view.position1],n=Math.max(0,r-1),o=Math.min(s-1,r+1),D.selectpicker.view.position0=!1===u?0:Math.max(0,h[n][0])||0,D.selectpicker.view.position1=!1===u?d:Math.min(d,h[o][1])||0,a=l[0]!==D.selectpicker.view.position0||l[1]!==D.selectpicker.view.position1,void 0!==D.activeIndex&&(L=D.selectpicker.main.elements[D.prevActiveIndex],H=D.selectpicker.main.elements[D.activeIndex],A=D.selectpicker.main.elements[D.selectedIndex],t&&(D.activeIndex!==D.selectedIndex&&D.defocusItem(H),D.activeIndex=void 0),D.activeIndex&&D.activeIndex!==D.selectedIndex&&D.defocusItem(A)),void 0!==D.prevActiveIndex&&D.prevActiveIndex!==D.activeIndex&&D.prevActiveIndex!==D.selectedIndex&&D.defocusItem(L),(t||a)&&(c=D.selectpicker.view.visibleElements?D.selectpicker.view.visibleElements.slice():[],D.selectpicker.view.visibleElements=!1===u?D.selectpicker.current.elements:D.selectpicker.current.elements.slice(D.selectpicker.view.position0,D.selectpicker.view.position1),D.setOptionStatus(),(N||!1===u&&t)&&(p=!function(e,i){return e.length===i.length&&e.every(function(e,t){return e===i[t]})}(c,D.selectpicker.view.visibleElements)),(t||!0===u)&&p)){var v,g,b=D.$menuInner[0],w=document.createDocumentFragment(),I=b.firstChild.cloneNode(!1),x=D.selectpicker.view.visibleElements,k=[];b.replaceChild(I,b.firstChild);f=0;for(var y=x.length;f<y;f++){var $,S,E=x[f];D.options.sanitize&&($=E.lastChild)&&(S=D.selectpicker.current.data[f+D.selectpicker.view.position0])&&S.content&&!S.sanitized&&(k.push($),S.sanitized=!0),w.appendChild(E)}if(D.options.sanitize&&k.length&&W(k,D.options.whiteList,D.options.sanitizeFn),!0===u?(v=0===D.selectpicker.view.position0?0:D.selectpicker.current.data[D.selectpicker.view.position0-1].position,g=D.selectpicker.view.position1>d-1?0:D.selectpicker.current.data[d-1].position-D.selectpicker.current.data[D.selectpicker.view.position1-1].position,b.firstChild.style.marginTop=v+"px",b.firstChild.style.marginBottom=g+"px"):(b.firstChild.style.marginTop=0,b.firstChild.style.marginBottom=0),b.firstChild.appendChild(w),!0===u&&D.sizeInfo.hasScrollBar){var C=b.firstChild.offsetWidth;if(t&&C<D.sizeInfo.menuInnerInnerWidth&&D.sizeInfo.totalMenuWidth>D.sizeInfo.selectWidth)b.firstChild.style.minWidth=D.sizeInfo.menuInnerInnerWidth+"px";else if(C>D.sizeInfo.menuInnerInnerWidth){D.$menu[0].style.minWidth=0;var O=b.firstChild.offsetWidth;O>D.sizeInfo.menuInnerInnerWidth&&(D.sizeInfo.menuInnerInnerWidth=O,b.firstChild.style.minWidth=D.sizeInfo.menuInnerInnerWidth+"px"),D.$menu[0].style.minWidth=""}}}if(D.prevActiveIndex=D.activeIndex,D.options.liveSearch){if(N&&t){var z,T=0;D.selectpicker.view.canHighlight[T]||(T=1+D.selectpicker.view.canHighlight.slice(1).indexOf(!0)),z=D.selectpicker.view.visibleElements[T],D.defocusItem(D.selectpicker.view.currentActive),D.activeIndex=(D.selectpicker.current.data[T]||{}).index,D.focusItem(z)}}else D.$menuInner.trigger("focus")}l(i,!0),this.$menuInner.off("scroll.createView").on("scroll.createView",function(e,t){D.noScroll||l(this.scrollTop,t),D.noScroll=!1}),P(window).off("resize"+j+"."+this.selectId+".createView").on("resize"+j+"."+this.selectId+".createView",function(){D.$newElement.hasClass(V.SHOW)&&l(D.$menuInner[0].scrollTop)})},focusItem:function(e,t,i){if(e){t=t||this.selectpicker.main.data[this.activeIndex];var s=e.firstChild;s&&(s.setAttribute("aria-setsize",this.selectpicker.view.size),s.setAttribute("aria-posinset",t.posinset),!0!==i&&(this.focusedParent.setAttribute("aria-activedescendant",s.id),e.classList.add("active"),s.classList.add("active")))}},defocusItem:function(e){e&&(e.classList.remove("active"),e.firstChild&&e.firstChild.classList.remove("active"))},setPlaceholder:function(){var e=this,t=!1;if(this.options.title&&!this.multiple){this.selectpicker.view.titleOption||(this.selectpicker.view.titleOption=document.createElement("option")),t=!0;var i=this.$element[0],s=!1,n=!this.selectpicker.view.titleOption.parentNode,o=i.selectedIndex,r=i.options[o],l=window.performance&&window.performance.getEntriesByType("navigation"),a=l&&l.length?"back_forward"!==l[0].type:2!==window.performance.navigation.type;n&&(this.selectpicker.view.titleOption.className="bs-title-option",this.selectpicker.view.titleOption.value="",s=!r||0===o&&!1===r.defaultSelected&&void 0===this.$element.data("selected")),!n&&0===this.selectpicker.view.titleOption.index||i.insertBefore(this.selectpicker.view.titleOption,i.firstChild),s&&a?i.selectedIndex=0:"complete"!==document.readyState&&window.addEventListener("pageshow",function(){e.selectpicker.view.displayedValue!==i.value&&e.render()})}return t},buildData:function(){var p=':not([hidden]):not([data-hidden="true"])',u=[],f=0,m=this.setPlaceholder()?1:0;this.options.hideDisabled&&(p+=":not(:disabled)");var e=this.$element[0].querySelectorAll("select > *"+p);function v(e){var t=u[u.length-1];t&&"divider"===t.type&&(t.optID||e.optID)||((e=e||{}).type="divider",u.push(e))}function g(e,t){if((t=t||{}).divider="true"===e.getAttribute("data-divider"),t.divider)v({optID:t.optID});else{var i=u.length,s=e.style.cssText,n=s?S(s):"",o=(e.className||"")+(t.optgroupClass||"");t.optID&&(o="opt "+o),t.optionClass=o.trim(),t.inlineStyle=n,t.text=e.textContent,t.content=e.getAttribute("data-content"),t.tokens=e.getAttribute("data-tokens"),t.subtext=e.getAttribute("data-subtext"),t.icon=e.getAttribute("data-icon"),e.liIndex=i,t.display=t.content||t.text,t.type="option",t.index=i,t.option=e,t.selected=!!e.selected,t.disabled=t.disabled||!!e.disabled,u.push(t)}}function t(e,t){var i=t[e],s=!(e-1<m)&&t[e-1],n=t[e+1],o=i.querySelectorAll("option"+p);if(o.length){var r,l,a={display:S(i.label),subtext:i.getAttribute("data-subtext"),icon:i.getAttribute("data-icon"),type:"optgroup-label",optgroupClass:" "+(i.className||"")};f++,s&&v({optID:f}),a.optID=f,u.push(a);for(var c=0,d=o.length;c<d;c++){var h=o[c];0===c&&(l=(r=u.length-1)+d),g(h,{headerIndex:r,lastIndex:l,optID:a.optID,optgroupClass:a.optgroupClass,disabled:i.disabled})}n&&v({optID:f})}}for(var i=e.length,s=m;s<i;s++){var n=e[s];"OPTGROUP"!==n.tagName?g(n,{}):t(s,e)}this.selectpicker.main.data=this.selectpicker.current.data=u},buildList:function(){var s=this,e=this.selectpicker.main.data,n=[],o=0;function t(e){var t,i=0;switch(e.type){case"divider":t=K.li(!1,V.DIVIDER,e.optID?e.optID+"div":void 0);break;case"option":(t=K.li(K.a(K.text.call(s,e),e.optionClass,e.inlineStyle),"",e.optID)).firstChild&&(t.firstChild.id=s.selectId+"-"+e.index);break;case"optgroup-label":t=K.li(K.label.call(s,e),"dropdown-header"+e.optgroupClass,e.optID)}e.element=t,n.push(t),e.display&&(i+=e.display.length),e.subtext&&(i+=e.subtext.length),e.icon&&(i+=1),o<i&&(o=i,s.selectpicker.view.widestOption=n[n.length-1])}!s.options.showTick&&!s.multiple||_.checkMark.parentNode||(_.checkMark.className=this.options.iconBase+" "+s.options.tickIcon+" check-mark",_.a.appendChild(_.checkMark));for(var i=e.length,r=0;r<i;r++){t(e[r])}this.selectpicker.main.elements=this.selectpicker.current.elements=n},findLis:function(){return this.$menuInner.find(".inner > li")},render:function(){var e,t=this,i=this.$element[0],s=this.setPlaceholder()&&0===i.selectedIndex,n=O(i,this.options.hideDisabled),o=n.length,r=this.$button[0],l=r.querySelector(".filter-option-inner-inner"),a=document.createTextNode(this.options.multipleSeparator),c=_.fragment.cloneNode(!1),d=!1;if(r.classList.toggle("bs-placeholder",t.multiple?!o:!z(i,n)),t.multiple||1!==n.length||(t.selectpicker.view.displayedValue=z(i,n)),"static"===this.options.selectedTextFormat)c=K.text.call(this,{text:this.options.title},!0);else if(!1===(this.multiple&&-1!==this.options.selectedTextFormat.indexOf("count")&&1<o&&(1<(e=this.options.selectedTextFormat.split(">")).length&&o>e[1]||1===e.length&&2<=o))){if(!s){for(var h=0;h<o&&h<50;h++){var p=n[h],u=this.selectpicker.main.data[p.liIndex],f={};this.multiple&&0<h&&c.appendChild(a.cloneNode(!1)),p.title?f.text=p.title:u&&(u.content&&t.options.showContent?(f.content=u.content.toString(),d=!0):(t.options.showIcon&&(f.icon=u.icon),t.options.showSubtext&&!t.multiple&&u.subtext&&(f.subtext=" "+u.subtext),f.text=p.textContent.trim())),c.appendChild(K.text.call(this,f,!0))}49<o&&c.appendChild(document.createTextNode("..."))}}else{var m=':not([hidden]):not([data-hidden="true"]):not([data-divider="true"])';this.options.hideDisabled&&(m+=":not(:disabled)");var v=this.$element[0].querySelectorAll("select > option"+m+", optgroup"+m+" option"+m).length,g="function"==typeof this.options.countSelectedText?this.options.countSelectedText(o,v):this.options.countSelectedText;c=K.text.call(this,{text:g.replace("{0}",o.toString()).replace("{1}",v.toString())},!0)}if(null==this.options.title&&(this.options.title=this.$element.attr("title")),c.childNodes.length||(c=K.text.call(this,{text:void 0!==this.options.title?this.options.title:this.options.noneSelectedText},!0)),r.title=c.textContent.replace(/<[^>]*>?/g,"").trim(),this.options.sanitize&&d&&W([c],t.options.whiteList,t.options.sanitizeFn),l.innerHTML="",l.appendChild(c),M.major<4&&this.$newElement[0].classList.contains("bs3-has-addon")){var b=r.querySelector(".filter-expand"),w=l.cloneNode(!0);w.className="filter-expand",b?r.replaceChild(w,b):r.appendChild(w)}this.$element.trigger("rendered"+j)},setStyle:function(e,t){var i,s=this.$button[0],n=this.$newElement[0],o=this.options.style.trim();this.$element.attr("class")&&this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,"")),M.major<4&&(n.classList.add("bs3"),n.parentNode.classList&&n.parentNode.classList.contains("input-group")&&(n.previousElementSibling||n.nextElementSibling)&&(n.previousElementSibling||n.nextElementSibling).classList.contains("input-group-addon")&&n.classList.add("bs3-has-addon")),i=e?e.trim():o,"add"==t?i&&s.classList.add.apply(s.classList,i.split(" ")):"remove"==t?i&&s.classList.remove.apply(s.classList,i.split(" ")):(o&&s.classList.remove.apply(s.classList,o.split(" ")),i&&s.classList.add.apply(s.classList,i.split(" ")))},liHeight:function(e){if(e||!1!==this.options.size&&!Object.keys(this.sizeInfo).length){var t,i=_.div.cloneNode(!1),s=_.div.cloneNode(!1),n=_.div.cloneNode(!1),o=document.createElement("ul"),r=_.li.cloneNode(!1),l=_.li.cloneNode(!1),a=_.a.cloneNode(!1),c=_.span.cloneNode(!1),d=this.options.header&&0<this.$menu.find("."+V.POPOVERHEADER).length?this.$menu.find("."+V.POPOVERHEADER)[0].cloneNode(!0):null,h=this.options.liveSearch?_.div.cloneNode(!1):null,p=this.options.actionsBox&&this.multiple&&0<this.$menu.find(".bs-actionsbox").length?this.$menu.find(".bs-actionsbox")[0].cloneNode(!0):null,u=this.options.doneButton&&this.multiple&&0<this.$menu.find(".bs-donebutton").length?this.$menu.find(".bs-donebutton")[0].cloneNode(!0):null,f=this.$element.find("option")[0];if(this.sizeInfo.selectWidth=this.$newElement[0].offsetWidth,c.className="text",a.className="dropdown-item "+(f?f.className:""),i.className=this.$menu[0].parentNode.className+" "+V.SHOW,i.style.width=0,"auto"===this.options.width&&(s.style.minWidth=0),s.className=V.MENU+" "+V.SHOW,n.className="inner "+V.SHOW,o.className=V.MENU+" inner "+("4"===M.major?V.SHOW:""),r.className=V.DIVIDER,l.className="dropdown-header",c.appendChild(document.createTextNode("\u200b")),this.selectpicker.current.data.length)for(var m=0;m<this.selectpicker.current.data.length;m++){var v=this.selectpicker.current.data[m];if("option"===v.type){t=v.element;break}}else t=_.li.cloneNode(!1),a.appendChild(c),t.appendChild(a);if(l.appendChild(c.cloneNode(!0)),this.selectpicker.view.widestOption&&o.appendChild(this.selectpicker.view.widestOption.cloneNode(!0)),o.appendChild(t),o.appendChild(r),o.appendChild(l),d&&s.appendChild(d),h){var g=document.createElement("input");h.className="bs-searchbox",g.className="form-control",h.appendChild(g),s.appendChild(h)}p&&s.appendChild(p),n.appendChild(o),s.appendChild(n),u&&s.appendChild(u),i.appendChild(s),document.body.appendChild(i);var b,w=t.offsetHeight,I=l?l.offsetHeight:0,x=d?d.offsetHeight:0,k=h?h.offsetHeight:0,y=p?p.offsetHeight:0,$=u?u.offsetHeight:0,S=P(r).outerHeight(!0),E=!!window.getComputedStyle&&window.getComputedStyle(s),C=s.offsetWidth,O=E?null:P(s),z={vert:N(E?E.paddingTop:O.css("paddingTop"))+N(E?E.paddingBottom:O.css("paddingBottom"))+N(E?E.borderTopWidth:O.css("borderTopWidth"))+N(E?E.borderBottomWidth:O.css("borderBottomWidth")),horiz:N(E?E.paddingLeft:O.css("paddingLeft"))+N(E?E.paddingRight:O.css("paddingRight"))+N(E?E.borderLeftWidth:O.css("borderLeftWidth"))+N(E?E.borderRightWidth:O.css("borderRightWidth"))},T={vert:z.vert+N(E?E.marginTop:O.css("marginTop"))+N(E?E.marginBottom:O.css("marginBottom"))+2,horiz:z.horiz+N(E?E.marginLeft:O.css("marginLeft"))+N(E?E.marginRight:O.css("marginRight"))+2};n.style.overflowY="scroll",b=s.offsetWidth-C,document.body.removeChild(i),this.sizeInfo.liHeight=w,this.sizeInfo.dropdownHeaderHeight=I,this.sizeInfo.headerHeight=x,this.sizeInfo.searchHeight=k,this.sizeInfo.actionsHeight=y,this.sizeInfo.doneButtonHeight=$,this.sizeInfo.dividerHeight=S,this.sizeInfo.menuPadding=z,this.sizeInfo.menuExtras=T,this.sizeInfo.menuWidth=C,this.sizeInfo.menuInnerInnerWidth=C-z.horiz,this.sizeInfo.totalMenuWidth=this.sizeInfo.menuWidth,this.sizeInfo.scrollBarWidth=b,this.sizeInfo.selectHeight=this.$newElement[0].offsetHeight,this.setPositionData()}},getSelectPosition:function(){var e,t=P(window),i=this.$newElement.offset(),s=P(this.options.container);this.options.container&&s.length&&!s.is("body")?((e=s.offset()).top+=parseInt(s.css("borderTopWidth")),e.left+=parseInt(s.css("borderLeftWidth"))):e={top:0,left:0};var n=this.options.windowPadding;this.sizeInfo.selectOffsetTop=i.top-e.top-t.scrollTop(),this.sizeInfo.selectOffsetBot=t.height()-this.sizeInfo.selectOffsetTop-this.sizeInfo.selectHeight-e.top-n[2],this.sizeInfo.selectOffsetLeft=i.left-e.left-t.scrollLeft(),this.sizeInfo.selectOffsetRight=t.width()-this.sizeInfo.selectOffsetLeft-this.sizeInfo.selectWidth-e.left-n[1],this.sizeInfo.selectOffsetTop-=n[0],this.sizeInfo.selectOffsetLeft-=n[3]},setMenuSize:function(e){this.getSelectPosition();var t,i,s,n,o,r,l,a,c=this.sizeInfo.selectWidth,d=this.sizeInfo.liHeight,h=this.sizeInfo.headerHeight,p=this.sizeInfo.searchHeight,u=this.sizeInfo.actionsHeight,f=this.sizeInfo.doneButtonHeight,m=this.sizeInfo.dividerHeight,v=this.sizeInfo.menuPadding,g=0;if(this.options.dropupAuto&&(l=d*this.selectpicker.current.elements.length+v.vert,a=this.sizeInfo.selectOffsetTop-this.sizeInfo.selectOffsetBot>this.sizeInfo.menuExtras.vert&&l+this.sizeInfo.menuExtras.vert+50>this.sizeInfo.selectOffsetBot,!0===this.selectpicker.isSearching&&(a=this.selectpicker.dropup),this.$newElement.toggleClass(V.DROPUP,a),this.selectpicker.dropup=a),"auto"===this.options.size)n=3<this.selectpicker.current.elements.length?3*this.sizeInfo.liHeight+this.sizeInfo.menuExtras.vert-2:0,i=this.sizeInfo.selectOffsetBot-this.sizeInfo.menuExtras.vert,s=n+h+p+u+f,r=Math.max(n-v.vert,0),this.$newElement.hasClass(V.DROPUP)&&(i=this.sizeInfo.selectOffsetTop-this.sizeInfo.menuExtras.vert),t=(o=i)-h-p-u-f-v.vert;else if(this.options.size&&"auto"!=this.options.size&&this.selectpicker.current.elements.length>this.options.size){for(var b=0;b<this.options.size;b++)"divider"===this.selectpicker.current.data[b].type&&g++;t=(i=d*this.options.size+g*m+v.vert)-v.vert,o=i+h+p+u+f,s=r=""}this.$menu.css({"max-height":o+"px",overflow:"hidden","min-height":s+"px"}),this.$menuInner.css({"max-height":t+"px","overflow-y":"auto","min-height":r+"px"}),this.sizeInfo.menuInnerHeight=Math.max(t,1),this.selectpicker.current.data.length&&this.selectpicker.current.data[this.selectpicker.current.data.length-1].position>this.sizeInfo.menuInnerHeight&&(this.sizeInfo.hasScrollBar=!0,this.sizeInfo.totalMenuWidth=this.sizeInfo.menuWidth+this.sizeInfo.scrollBarWidth),"auto"===this.options.dropdownAlignRight&&this.$menu.toggleClass(V.MENURIGHT,this.sizeInfo.selectOffsetLeft>this.sizeInfo.selectOffsetRight&&this.sizeInfo.selectOffsetRight<this.sizeInfo.totalMenuWidth-c),this.dropdown&&this.dropdown._popper&&this.dropdown._popper.update()},setSize:function(e){if(this.liHeight(e),this.options.header&&this.$menu.css("padding-top",0),!1!==this.options.size){var t=this,i=P(window);this.setMenuSize(),this.options.liveSearch&&this.$searchbox.off("input.setMenuSize propertychange.setMenuSize").on("input.setMenuSize propertychange.setMenuSize",function(){return t.setMenuSize()}),"auto"===this.options.size?i.off("resize"+j+"."+this.selectId+".setMenuSize scroll"+j+"."+this.selectId+".setMenuSize").on("resize"+j+"."+this.selectId+".setMenuSize scroll"+j+"."+this.selectId+".setMenuSize",function(){return t.setMenuSize()}):this.options.size&&"auto"!=this.options.size&&this.selectpicker.current.elements.length>this.options.size&&i.off("resize"+j+"."+this.selectId+".setMenuSize scroll"+j+"."+this.selectId+".setMenuSize")}this.createView(!1,!0,e)},setWidth:function(){var i=this;"auto"===this.options.width?requestAnimationFrame(function(){i.$menu.css("min-width","0"),i.$element.on("loaded"+j,function(){i.liHeight(),i.setMenuSize();var e=i.$newElement.clone().appendTo("body"),t=e.css("width","auto").children("button").outerWidth();e.remove(),i.sizeInfo.selectWidth=Math.max(i.sizeInfo.totalMenuWidth,t),i.$newElement.css("width",i.sizeInfo.selectWidth+"px")})}):"fit"===this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width","").addClass("fit-width")):this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width",this.options.width)):(this.$menu.css("min-width",""),this.$newElement.css("width","")),this.$newElement.hasClass("fit-width")&&"fit"!==this.options.width&&this.$newElement[0].classList.remove("fit-width")},selectPosition:function(){this.$bsContainer=P('<div class="bs-container" />');function e(e){var t={},i=r.options.display||!!P.fn.dropdown.Constructor.Default&&P.fn.dropdown.Constructor.Default.display;r.$bsContainer.addClass(e.attr("class").replace(/form-control|fit-width/gi,"")).toggleClass(V.DROPUP,e.hasClass(V.DROPUP)),s=e.offset(),l.is("body")?n={top:0,left:0}:((n=l.offset()).top+=parseInt(l.css("borderTopWidth"))-l.scrollTop(),n.left+=parseInt(l.css("borderLeftWidth"))-l.scrollLeft()),o=e.hasClass(V.DROPUP)?0:e[0].offsetHeight,(M.major<4||"static"===i)&&(t.top=s.top-n.top+o,t.left=s.left-n.left),t.width=e[0].offsetWidth,r.$bsContainer.css(t)}var s,n,o,r=this,l=P(this.options.container);this.$button.on("click.bs.dropdown.data-api",function(){r.isDisabled()||(e(r.$newElement),r.$bsContainer.appendTo(r.options.container).toggleClass(V.SHOW,!r.$button.hasClass(V.SHOW)).append(r.$menu))}),P(window).off("resize"+j+"."+this.selectId+" scroll"+j+"."+this.selectId).on("resize"+j+"."+this.selectId+" scroll"+j+"."+this.selectId,function(){r.$newElement.hasClass(V.SHOW)&&e(r.$newElement)}),this.$element.on("hide"+j,function(){r.$menu.data("height",r.$menu.height()),r.$bsContainer.detach()})},setOptionStatus:function(e){var t=this;if(t.noScroll=!1,t.selectpicker.view.visibleElements&&t.selectpicker.view.visibleElements.length)for(var i=0;i<t.selectpicker.view.visibleElements.length;i++){var s=t.selectpicker.current.data[i+t.selectpicker.view.position0],n=s.option;n&&(!0!==e&&t.setDisabled(s.index,s.disabled),t.setSelected(s.index,n.selected))}},setSelected:function(e,t){var i,s,n=this.selectpicker.main.elements[e],o=this.selectpicker.main.data[e],r=void 0!==this.activeIndex,l=this.activeIndex===e||t&&!this.multiple&&!r;o.selected=t,s=n.firstChild,t&&(this.selectedIndex=e),n.classList.toggle("selected",t),l?(this.focusItem(n,o),this.selectpicker.view.currentActive=n,this.activeIndex=e):this.defocusItem(n),s&&(s.classList.toggle("selected",t),t?s.setAttribute("aria-selected",!0):this.multiple?s.setAttribute("aria-selected",!1):s.removeAttribute("aria-selected")),l||r||!t||void 0===this.prevActiveIndex||(i=this.selectpicker.main.elements[this.prevActiveIndex],this.defocusItem(i))},setDisabled:function(e,t){var i,s=this.selectpicker.main.elements[e];this.selectpicker.main.data[e].disabled=t,i=s.firstChild,s.classList.toggle(V.DISABLED,t),i&&("4"===M.major&&i.classList.toggle(V.DISABLED,t),t?(i.setAttribute("aria-disabled",t),i.setAttribute("tabindex",-1)):(i.removeAttribute("aria-disabled"),i.setAttribute("tabindex",0)))},isDisabled:function(){return this.$element[0].disabled},checkDisabled:function(){this.isDisabled()?(this.$newElement[0].classList.add(V.DISABLED),this.$button.addClass(V.DISABLED).attr("aria-disabled",!0)):this.$button[0].classList.contains(V.DISABLED)&&(this.$newElement[0].classList.remove(V.DISABLED),this.$button.removeClass(V.DISABLED).attr("aria-disabled",!1))},clickListener:function(){var C=this,t=P(document);function e(){C.options.liveSearch?C.$searchbox.trigger("focus"):C.$menuInner.trigger("focus")}function i(){C.dropdown&&C.dropdown._popper&&C.dropdown._popper.state.isCreated?e():requestAnimationFrame(i)}t.data("spaceSelect",!1),this.$button.on("keyup",function(e){/(32)/.test(e.keyCode.toString(10))&&t.data("spaceSelect")&&(e.preventDefault(),t.data("spaceSelect",!1))}),this.$newElement.on("show.bs.dropdown",function(){3<M.major&&!C.dropdown&&(C.dropdown=C.$button.data("bs.dropdown"),C.dropdown._menu=C.$menu[0])}),this.$button.on("click.bs.dropdown.data-api",function(){C.$newElement.hasClass(V.SHOW)||C.setSize()}),this.$element.on("shown"+j,function(){C.$menuInner[0].scrollTop!==C.selectpicker.view.scrollTop&&(C.$menuInner[0].scrollTop=C.selectpicker.view.scrollTop),3<M.major?requestAnimationFrame(i):e()}),this.$menuInner.on("mouseenter","li a",function(e){var t=this.parentElement,i=C.isVirtual()?C.selectpicker.view.position0:0,s=Array.prototype.indexOf.call(t.parentElement.children,t),n=C.selectpicker.current.data[s+i];C.focusItem(t,n,!0)}),this.$menuInner.on("click","li a",function(e,t){var i=P(this),s=C.$element[0],n=C.isVirtual()?C.selectpicker.view.position0:0,o=C.selectpicker.current.data[i.parent().index()+n],r=o.index,l=z(s),a=s.selectedIndex,c=s.options[a],d=!0;if(C.multiple&&1!==C.options.maxOptions&&e.stopPropagation(),e.preventDefault(),!C.isDisabled()&&!i.parent().hasClass(V.DISABLED)){var h=o.option,p=P(h),u=h.selected,f=p.parent("optgroup"),m=f.find("option"),v=C.options.maxOptions,g=f.data("maxOptions")||!1;if(r===C.activeIndex&&(t=!0),t||(C.prevActiveIndex=C.activeIndex,C.activeIndex=void 0),C.multiple){if(h.selected=!u,C.setSelected(r,!u),C.focusedParent.focus(),!1!==v||!1!==g){var b=v<O(s).length,w=g<f.find("option:selected").length;if(v&&b||g&&w)if(v&&1==v)s.selectedIndex=-1,h.selected=!0,C.setOptionStatus(!0);else if(g&&1==g){for(var I=0;I<m.length;I++){var x=m[I];x.selected=!1,C.setSelected(x.liIndex,!1)}h.selected=!0,C.setSelected(r,!0)}else{var k="string"==typeof C.options.maxOptionsText?[C.options.maxOptionsText,C.options.maxOptionsText]:C.options.maxOptionsText,y="function"==typeof k?k(v,g):k,$=y[0].replace("{n}",v),S=y[1].replace("{n}",g),E=P('<div class="notify"></div>');y[2]&&($=$.replace("{var}",y[2][1<v?0:1]),S=S.replace("{var}",y[2][1<g?0:1])),h.selected=!1,C.$menu.append(E),v&&b&&(E.append(P("<div>"+$+"</div>")),d=!1,C.$element.trigger("maxReached"+j)),g&&w&&(E.append(P("<div>"+S+"</div>")),d=!1,C.$element.trigger("maxReachedGrp"+j)),setTimeout(function(){C.setSelected(r,!1)},10),E[0].classList.add("fadeOut"),setTimeout(function(){E.remove()},1050)}}}else c&&(c.selected=!1),h.selected=!0,C.setSelected(r,!0);!C.multiple||C.multiple&&1===C.options.maxOptions?C.$button.trigger("focus"):C.options.liveSearch&&C.$searchbox.trigger("focus"),d&&(!C.multiple&&a===s.selectedIndex||(T=[h.index,p.prop("selected"),l],C.$element.triggerNative("change")))}}),this.$menu.on("click","li."+V.DISABLED+" a, ."+V.POPOVERHEADER+", ."+V.POPOVERHEADER+" :not(.close)",function(e){e.currentTarget==this&&(e.preventDefault(),e.stopPropagation(),C.options.liveSearch&&!P(e.target).hasClass("close")?C.$searchbox.trigger("focus"):C.$button.trigger("focus"))}),this.$menuInner.on("click",".divider, .dropdown-header",function(e){e.preventDefault(),e.stopPropagation(),C.options.liveSearch?C.$searchbox.trigger("focus"):C.$button.trigger("focus")}),this.$menu.on("click","."+V.POPOVERHEADER+" .close",function(){C.$button.trigger("click")}),this.$searchbox.on("click",function(e){e.stopPropagation()}),this.$menu.on("click",".actions-btn",function(e){C.options.liveSearch?C.$searchbox.trigger("focus"):C.$button.trigger("focus"),e.preventDefault(),e.stopPropagation(),P(this).hasClass("bs-select-all")?C.selectAll():C.deselectAll()}),this.$button.on("focus"+j,function(e){var t=C.$element[0].getAttribute("tabindex");void 0!==t&&e.originalEvent&&e.originalEvent.isTrusted&&(this.setAttribute("tabindex",t),C.$element[0].setAttribute("tabindex",-1),C.selectpicker.view.tabindex=t)}).on("blur"+j,function(e){void 0!==C.selectpicker.view.tabindex&&e.originalEvent&&e.originalEvent.isTrusted&&(C.$element[0].setAttribute("tabindex",C.selectpicker.view.tabindex),this.setAttribute("tabindex",-1),C.selectpicker.view.tabindex=void 0)}),this.$element.on("change"+j,function(){C.render(),C.$element.trigger("changed"+j,T),T=null}).on("focus"+j,function(){C.options.mobile||C.$button[0].focus()})},liveSearchListener:function(){var u=this;this.$button.on("click.bs.dropdown.data-api",function(){u.$searchbox.val()&&(u.$searchbox.val(""),u.selectpicker.search.previousValue=void 0)}),this.$searchbox.on("click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api",function(e){e.stopPropagation()}),this.$searchbox.on("input propertychange",function(){var e=u.$searchbox[0].value;if(u.selectpicker.search.elements=[],u.selectpicker.search.data=[],e){var t=[],i=e.toUpperCase(),s={},n=[],o=u._searchStyle(),r=u.options.liveSearchNormalize;r&&(i=w(i));for(var l=0;l<u.selectpicker.main.data.length;l++){var a=u.selectpicker.main.data[l];s[l]||(s[l]=k(a,i,o,r)),s[l]&&void 0!==a.headerIndex&&-1===n.indexOf(a.headerIndex)&&(0<a.headerIndex&&(s[a.headerIndex-1]=!0,n.push(a.headerIndex-1)),s[a.headerIndex]=!0,n.push(a.headerIndex),s[a.lastIndex+1]=!0),s[l]&&"optgroup-label"!==a.type&&n.push(l)}l=0;for(var c=n.length;l<c;l++){var d=n[l],h=n[l-1],p=(a=u.selectpicker.main.data[d],u.selectpicker.main.data[h]);("divider"!==a.type||"divider"===a.type&&p&&"divider"!==p.type&&c-1!==l)&&(u.selectpicker.search.data.push(a),t.push(u.selectpicker.main.elements[d]))}u.activeIndex=void 0,u.noScroll=!0,u.$menuInner.scrollTop(0),u.selectpicker.search.elements=t,u.createView(!0),function(e,t){e.length||(_.noResults.innerHTML=this.options.noneResultsText.replace("{0}",'"'+S(t)+'"'),this.$menuInner[0].firstChild.appendChild(_.noResults))}.call(u,t,e)}else u.selectpicker.search.previousValue&&(u.$menuInner.scrollTop(0),u.createView(!1));u.selectpicker.search.previousValue=e})},_searchStyle:function(){return this.options.liveSearchStyle||"contains"},val:function(e){var t=this.$element[0];if(void 0===e)return this.$element.val();var i=z(t);if(T=[null,null,i],this.$element.val(e).trigger("changed"+j,T),this.$newElement.hasClass(V.SHOW))if(this.multiple)this.setOptionStatus(!0);else{var s=(t.options[t.selectedIndex]||{}).liIndex;"number"==typeof s&&(this.setSelected(this.selectedIndex,!1),this.setSelected(s,!0))}return this.render(),T=null,this.$element},changeAll:function(e){if(this.multiple){void 0===e&&(e=!0);var t=this.$element[0],i=0,s=0,n=z(t);t.classList.add("bs-select-hidden");for(var o=0,r=this.selectpicker.current.data,l=r.length;o<l;o++){var a=r[o],c=a.option;c&&!a.disabled&&"divider"!==a.type&&(a.selected&&i++,!0===(c.selected=e)&&s++)}t.classList.remove("bs-select-hidden"),i!==s&&(this.setOptionStatus(),T=[null,null,n],this.$element.triggerNative("change"))}},selectAll:function(){return this.changeAll(!0)},deselectAll:function(){return this.changeAll(!1)},toggle:function(e){(e=e||window.event)&&e.stopPropagation(),this.$button.trigger("click.bs.dropdown.data-api")},keydown:function(e){var t,i,s,n,o,r=P(this),l=r.hasClass("dropdown-toggle"),a=(l?r.closest(".dropdown"):r.closest(F.MENU)).data("this"),c=a.findLis(),d=!1,h=e.which===H&&!l&&!a.options.selectOnTab,p=G.test(e.which)||h,u=a.$menuInner[0].scrollTop,f=!0===a.isVirtual()?a.selectpicker.view.position0:0;if(!(112<=e.which&&e.which<=123))if(!(i=a.$newElement.hasClass(V.SHOW))&&(p||48<=e.which&&e.which<=57||96<=e.which&&e.which<=105||65<=e.which&&e.which<=90)&&(a.$button.trigger("click.bs.dropdown.data-api"),a.options.liveSearch))a.$searchbox.trigger("focus");else{if(e.which===A&&i&&(e.preventDefault(),a.$button.trigger("click.bs.dropdown.data-api").trigger("focus")),p){if(!c.length)return;-1!==(t=(s=a.selectpicker.main.elements[a.activeIndex])?Array.prototype.indexOf.call(s.parentElement.children,s):-1)&&a.defocusItem(s),e.which===B?(-1!==t&&t--,t+f<0&&(t+=c.length),a.selectpicker.view.canHighlight[t+f]||-1===(t=a.selectpicker.view.canHighlight.slice(0,t+f).lastIndexOf(!0)-f)&&(t=c.length-1)):e.which!==R&&!h||(++t+f>=a.selectpicker.view.canHighlight.length&&(t=a.selectpicker.view.firstHighlightIndex),a.selectpicker.view.canHighlight[t+f]||(t=t+1+a.selectpicker.view.canHighlight.slice(t+f+1).indexOf(!0))),e.preventDefault();var m=f+t;e.which===B?0===f&&t===c.length-1?(a.$menuInner[0].scrollTop=a.$menuInner[0].scrollHeight,m=a.selectpicker.current.elements.length-1):d=(o=(n=a.selectpicker.current.data[m]).position-n.height)<u:e.which!==R&&!h||(t===a.selectpicker.view.firstHighlightIndex?(a.$menuInner[0].scrollTop=0,m=a.selectpicker.view.firstHighlightIndex):d=u<(o=(n=a.selectpicker.current.data[m]).position-a.sizeInfo.menuInnerHeight)),s=a.selectpicker.current.elements[m],a.activeIndex=a.selectpicker.current.data[m].index,a.focusItem(s),a.selectpicker.view.currentActive=s,d&&(a.$menuInner[0].scrollTop=o),a.options.liveSearch?a.$searchbox.trigger("focus"):r.trigger("focus")}else if(!r.is("input")&&!q.test(e.which)||e.which===D&&a.selectpicker.keydown.keyHistory){var v,g,b=[];e.preventDefault(),a.selectpicker.keydown.keyHistory+=C[e.which],a.selectpicker.keydown.resetKeyHistory.cancel&&clearTimeout(a.selectpicker.keydown.resetKeyHistory.cancel),a.selectpicker.keydown.resetKeyHistory.cancel=a.selectpicker.keydown.resetKeyHistory.start(),g=a.selectpicker.keydown.keyHistory,/^(.)\1+$/.test(g)&&(g=g.charAt(0));for(var w=0;w<a.selectpicker.current.data.length;w++){var I=a.selectpicker.current.data[w];k(I,g,"startsWith",!0)&&a.selectpicker.view.canHighlight[w]&&b.push(I.index)}if(b.length){var x=0;c.removeClass("active").find("a").removeClass("active"),1===g.length&&(-1===(x=b.indexOf(a.activeIndex))||x===b.length-1?x=0:x++),v=b[x],d=0<u-(n=a.selectpicker.main.data[v]).position?(o=n.position-n.height,!0):(o=n.position-a.sizeInfo.menuInnerHeight,n.position>u+a.sizeInfo.menuInnerHeight),s=a.selectpicker.main.elements[v],a.activeIndex=b[x],a.focusItem(s),s&&s.firstChild.focus(),d&&(a.$menuInner[0].scrollTop=o),r.trigger("focus")}}i&&(e.which===D&&!a.selectpicker.keydown.keyHistory||e.which===L||e.which===H&&a.options.selectOnTab)&&(e.which!==D&&e.preventDefault(),a.options.liveSearch&&e.which===D||(a.$menuInner.find(".active a").trigger("click",!0),r.trigger("focus"),a.options.liveSearch||(e.preventDefault(),P(document).data("spaceSelect",!0))))}},mobile:function(){this.options.mobile=!0,this.$element[0].classList.add("mobile-device")},refresh:function(){var e=P.extend({},this.options,this.$element.data());this.options=e,this.checkDisabled(),this.buildData(),this.setStyle(),this.render(),this.buildList(),this.setWidth(),this.setSize(!0),this.$element.trigger("refreshed"+j)},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},remove:function(){this.$newElement.remove(),this.$element.remove()},destroy:function(){this.$newElement.before(this.$element).remove(),this.$bsContainer?this.$bsContainer.remove():this.$menu.remove(),this.selectpicker.view.titleOption&&this.selectpicker.view.titleOption.parentNode&&this.selectpicker.view.titleOption.parentNode.removeChild(this.selectpicker.view.titleOption),this.$element.off(j).removeData("selectpicker").removeClass("bs-select-hidden selectpicker"),P(window).off(j+"."+this.selectId)}};var J=P.fn.selectpicker;function Q(){if(P.fn.dropdown)return(P.fn.dropdown.Constructor._dataApiKeydownHandler||P.fn.dropdown.Constructor.prototype.keydown).apply(this,arguments)}P.fn.selectpicker=Z,P.fn.selectpicker.Constructor=Y,P.fn.selectpicker.noConflict=function(){return P.fn.selectpicker=J,this},P(document).off("keydown.bs.dropdown.data-api").on("keydown.bs.dropdown.data-api",':not(.bootstrap-select) > [data-toggle="dropdown"]',Q).on("keydown.bs.dropdown.data-api",":not(.bootstrap-select) > .dropdown-menu",Q).on("keydown"+j,'.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input',Y.prototype.keydown).on("focusin.modal",'.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input',function(e){e.stopPropagation()}),P(window).on("load"+j+".data-api",function(){P(".selectpicker").each(function(){var e=P(this);Z.call(e,e.data())})})}(e)});
//# sourceMappingURL=bootstrap-select.min.js.map

/***/ }),

/***/ "./node_modules/bootstrap-select/dist/js/i18n/defaults-pt_BR.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bootstrap-select/dist/js/i18n/defaults-pt_BR.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Bootstrap-select v1.13.18 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2020 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */

(function (root, factory) {
  if (root === undefined && window !== undefined) root = window;
  if (true) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (a0) {
      return (factory(a0));
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function (jQuery) {

(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'Nada selecionado',
    noneResultsText: 'Nada encontrado contendo {0}',
    countSelectedText: 'Selecionado {0} de {1}',
    maxOptionsText: ['Limite excedido (máx. {n} {var})', 'Limite do grupo excedido (máx. {n} {var})', ['itens', 'item']],
    multipleSeparator: ', ',
    selectAllText: 'Selecionar Todos',
    deselectAllText: 'Desmarcar Todos'
  };
})(jQuery);


}));
//# sourceMappingURL=defaults-pt_BR.js.map

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./resources/js/admin.js":
/*!*******************************!*\
  !*** ./resources/js/admin.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(/*! bootstrap-select/dist/js/bootstrap-select.min */ "./node_modules/bootstrap-select/dist/js/bootstrap-select.min.js");

__webpack_require__(/*! bootstrap-select/dist/js/i18n/defaults-pt_BR.js */ "./node_modules/bootstrap-select/dist/js/i18n/defaults-pt_BR.js");

$('select').selectpicker();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ 4:
/*!*************************************!*\
  !*** multi ./resources/js/admin.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/breno/Projetos/legislaqui/resources/js/admin.js */"./resources/js/admin.js");


/***/ })

/******/ });
>>>>>>> banner home
