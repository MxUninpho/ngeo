(function(){'use strict';var f=this;function k(a,b){a=a.split(".");var c=f;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]?c=c[d]:c=c[d]={}:c[d]=b}function l(a,b){function c(){}c.prototype=b.prototype;a.L=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.K=function(a,c,g){for(var h=Array(arguments.length-2),p=2;p<arguments.length;p++)h[p-2]=arguments[p];return b.prototype[c].apply(a,h)}};function m(a){this.type=a;this.target=null}m.prototype.preventDefault=m.prototype.stopPropagation=function(){};var n=function(){var a;"cosh"in Math?a=Math.cosh:a=function(a){a=Math.exp(a);return(a+1/a)/2};return a}();/*

 Latitude/longitude spherical geodesy formulae taken from
 http://www.movable-type.co.uk/scripts/latlong.html
 Licensed under CC-BY-3.0.
*/
function q(a){this.radius=a}function r(a,b){var c=a[1]*Math.PI/180,d=b[1]*Math.PI/180,e=(d-c)/2;a=(b[0]-a[0])*Math.PI/180/2;c=Math.sin(e)*Math.sin(e)+Math.sin(a)*Math.sin(a)*Math.cos(c)*Math.cos(d);return 2*t.radius*Math.atan2(Math.sqrt(c),Math.sqrt(1-c))}
q.prototype.offset=function(a,b,c){var d=a[1]*Math.PI/180;b/=this.radius;var e=Math.asin(Math.sin(d)*Math.cos(b)+Math.cos(d)*Math.sin(b)*Math.cos(c));return[180*(a[0]*Math.PI/180+Math.atan2(Math.sin(c)*Math.sin(b)*Math.cos(d),Math.cos(b)-Math.sin(d)*Math.sin(e)))/Math.PI,180*e/Math.PI]};var t=new q(6370997);var u={};u.degrees=2*Math.PI*t.radius/360;u.ft=.3048;u.m=1;u["us-ft"]=1200/3937;function v(a){this.a=a.code;this.b=a.units;this.s=void 0!==a.j?a.j:this.A;this.c=a.v;var b=w,c=a.code,d=x||window.proj4;if("function"==typeof d&&void 0===b[c]){var e=d.defs(c);if(void 0!==e){void 0===a.v&&(this.c=e.to_meter);void 0===a.units&&(this.b=e.units);var g,h;for(g in b)if(a=d.defs(g),void 0!==a)if(b=y(g),a===e)z([b,this]);else{h=d(g,c);a=h.forward;h=h.inverse;var b=y(b),p=y(this);A(b,p,B(a));A(p,b,B(h))}}}}
v.prototype.A=function(a,b){if("degrees"==this.b)return a;var c=y("EPSG:4326"),d=this.a,c=c.a,e;d in C&&c in C[d]&&(e=C[d][c]);void 0===e&&(e=D);a=[b[0]-a/2,b[1],b[0]+a/2,b[1],b[0],b[1]-a/2,b[0],b[1]+a/2];a=e(a,a,2);e=(r(a.slice(0,2),a.slice(2,4))+r(a.slice(4,6),a.slice(6,8)))/2;a=this.c||u[this.b];void 0!==a&&(e/=a);return e};v.prototype.j=function(a,b){return this.s(a,b)};var w={},C={},x=null;function z(a){E(a);a.forEach(function(b){a.forEach(function(a){b!==a&&A(b,a,F)})})}
function G(a){w[a.a]=a;A(a,a,F)}function E(a){var b=[];a.forEach(function(a){b.push(G(a))})}function A(a,b,c){a=a.a;b=b.a;a in C||(C[a]={});C[a][b]=c}function B(a){return function(b,c,d){var e=b.length;d=void 0!==d?d:2;c=void 0!==c?c:Array(e);var g,h;for(h=0;h<e;h+=d)for(g=a([b[h],b[h+1]]),c[h]=g[0],c[h+1]=g[1],g=d-1;2<=g;--g)c[h+g]=b[h+g];return c}}
function y(a){var b;if(a instanceof v)b=a;else if("string"===typeof a){b=w[a];var c=x||window.proj4;void 0===b&&"function"==typeof c&&void 0!==c.defs(a)&&(b=new v({code:a}),G(b))}return b||null}function D(a,b){if(void 0!==b&&a!==b){for(var c=0,d=a.length;c<d;++c)b[c]=a[c];a=b}return a}function F(a,b){if(void 0!==b){for(var c=0,d=a.length;c<d;++c)b[c]=a[c];a=b}else a=a.slice();return a};(function(){if(!("HTMLCanvasElement"in window))return!1;try{return document.createElement("CANVAS").getContext("2d")?!0:!1}catch(a){return!1}})();navigator.userAgent.match("CriOS");try{new MouseEvent("click",{buttons:1})}catch(a){};function H(a){v.call(this,{code:a,units:"m",extent:I,global:!0,I:J})}H.prototype=Object.create(v.prototype);H.prototype.constructor=H;H.prototype.j=function(a,b){return a/n(b[1]/6378137)};var K=6378137*Math.PI,I=[-K,-K,K,K],J=[-180,-85,180,85],L="EPSG:3857 EPSG:102100 EPSG:102113 EPSG:900913 urn:ogc:def:crs:EPSG:6.18:3:3857 urn:ogc:def:crs:EPSG::3857 http://www.opengis.net/gml/srs/epsg.xml#3857".split(" ").map(function(a){return new H(a)});
function M(a,b,c){var d=a.length;c=1<c?c:2;void 0===b&&(2<c?b=a.slice():b=Array(d));for(var e=0;e<d;e+=c){b[e]=K*a[e]/180;var g=6378137*Math.log(Math.tan(Math.PI*(a[e+1]+90)/360));g>K?g=K:g<-K&&(g=-K);b[e+1]=g}return b}function N(a,b,c){var d=a.length;c=1<c?c:2;void 0===b&&(2<c?b=a.slice():b=Array(d));for(var e=0;e<d;e+=c)b[e]=180*a[e]/K,b[e+1]=360*Math.atan(Math.exp(a[e+1]/6378137))/Math.PI-90;return b};var O=new q(6378137);function P(a,b){v.call(this,{code:a,units:"degrees",extent:Q,J:b,global:!0,v:R,I:Q})}P.prototype=Object.create(v.prototype);P.prototype.constructor=P;P.prototype.j=function(a){return a};
var Q=[-180,-90,180,90],R=Math.PI*O.radius/180,S=[new P("CRS:84"),new P("EPSG:4326","neu"),new P("urn:ogc:def:crs:EPSG::4326","neu"),new P("urn:ogc:def:crs:EPSG:6.6:4326","neu"),new P("urn:ogc:def:crs:OGC:1.3:CRS84"),new P("urn:ogc:def:crs:OGC:2:84"),new P("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new P("urn:x-ogc:def:crs:EPSG:4326","neu")];z(L);z(S);S.forEach(function(a){L.forEach(function(b){A(a,b,M);A(b,a,N)})});var T=angular.module("ngeo",["gettext","ui.date","floatThead"]);k("ngeo.FeatureProperties",{ANGLE:"a",COLOR:"c",IS_CIRCLE:"l",IS_RECTANGLE:"r",IS_TEXT:"t",NAME:"n",OPACITY:"o",AZIMUT:"z",SHOW_MEASURE:"m",SIZE:"s",STROKE:"k"});k("ngeo.GeometryType",{CIRCLE:"Circle",LINE_STRING:"LineString",MULTI_LINE_STRING:"MultiLineString",MULTI_POINT:"MultiPoint",MULTI_POLYGON:"MultiPolygon",POINT:"Point",POLYGON:"Polygon",RECTANGLE:"Rectangle",TEXT:"Text"});function U(a){if(Error.captureStackTrace)Error.captureStackTrace(this,U);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}l(U,Error);U.prototype.name="CustomError";function aa(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")};function V(a,b){b.unshift(a);U.call(this,aa.apply(null,b));b.shift()}l(V,U);V.prototype.name="AssertionError";function ba(a,b){throw new V("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};T.value("ngeoPopupTemplateUrl",function(a,b){a=b.ngeoPopupTemplateurl;return void 0!==a?a:"ngeo/popup.html"});function W(a){return{restrict:"A",templateUrl:a,link:function(a,c){c.addClass("popover");a.close=function(a){a&&(a.stopPropagation(),a.preventDefault());c.addClass("hidden")};a.$watch("open",function(a){c.css("display",a?"block":"none")})}}}W.$inject=["ngeoPopupTemplateUrl"];T.directive("ngeoPopup",W);function X(a,b,c,d){this.scope=b.$new(!0);this.scope.$watch(function(){return this.scope.open}.bind(this),function(a){!a&&this.c&&this.s(function(){this.destroy()}.bind(this))}.bind(this));this.b=c;this.s=d;this.a=angular.element("<div ngeo-popup></div>");this.c=!1;a(this.a)(this.scope);angular.element(document.body).append(this.a)}X.prototype.B=function(){return this.scope.open};X.prototype.getOpen=X.prototype.B;X.prototype.h=function(a){this.scope.open=a};X.prototype.setOpen=X.prototype.h;
X.prototype.destroy=function(){this.scope.$destroy();this.a.remove()};X.prototype.destroy=X.prototype.destroy;X.prototype.i=function(a){a=this.b.trustAsHtml(a);this.scope.title=a};X.prototype.setTitle=X.prototype.i;X.prototype.g=function(a,b){this.scope.content=b?this.b.trustAsHtml(a):a};X.prototype.setContent=X.prototype.g;X.prototype.u=function(a){a=this.b.trustAsHtml('<iframe src="'+a+'" width="100%" height="100%"></iframe>');this.g(a)};X.prototype.setUrl=X.prototype.u;X.prototype.o=function(a){this.a.width(a)};
X.prototype.setWidth=X.prototype.o;X.prototype.l=function(a){this.a.height(a)};X.prototype.setHeight=X.prototype.l;X.prototype.w=function(a,b){this.o(a);this.l(b)};X.prototype.setSize=X.prototype.w;X.prototype.f=function(a){this.c=a};X.prototype.setAutoDestroy=X.prototype.f;X.prototype.addClass=function(a){this.a.addClass(a)};X.prototype.addClass=X.prototype.addClass;
X.prototype.open=function(a){a.url?this.u(a.url):a.content?this.g(a.content):ba('ngeo.Popup options requirest "url" or "content".');void 0!==a.autoDestroy&&this.f(a.autoDestroy);void 0!==a.cls&&this.addClass(a.cls);void 0!==a.height&&this.l(a.height);void 0!==a.title&&this.i(a.title);void 0!==a.width&&this.o(a.width);this.h(!0)};X.prototype.open=X.prototype.open;function Y(a,b,c,d){return function(){return new X(a,b,c,d)}}Y.$inject=["$compile","$rootScope","$sce","$timeout"];
T.factory("ngeoCreatePopup",Y);var ca=angular.module("app",["ngeo"]);function Z(a,b){this.b=a;this.a=b;$('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})}Z.$inject=["$sce","ngeoCreatePopup"];Z.prototype.H=function(){var a=this.a();a.f(!0);a.i("Simple popup");var b=this.b.trustAsHtml("This is a simple 400x300 px popup.");a.g(b);a.o("400px");a.l("300px");a.h(!0)};Z.prototype.simplePopup=Z.prototype.H;
Z.prototype.D=function(){var a=this.a();a.f(!0);a.addClass("popup-with-iframe");a.i("Iframe popup");a.u("http://geomapfish.org/");a.w("400px","300px");a.h(!0)};Z.prototype.iframePopup=Z.prototype.D;
Z.prototype.C=function(){var a=this.a();a.f(!0);a.i("This is a popup with lots and lots of content and a very long title");var b=this.b.trustAsHtml("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egetquam at ex euismod bibendum et eget enim. Nulla sodales tortor acsagittis aliquet. Ut malesuada quam vitae pulvinar porta. Nunc idmagna id risus malesuada elementum eget id purus. Curabitur vel augueblandit, faucibus nulla quis, consequat tellus. Phasellus commodo,tellus et vulputate ultricies, nulla libero ornare arcu, quisfermentum sem diam quis tellus. Aliquam ut sapien tristique, laciniaante et, lacinia arcu. Quisque sagittis eros at quam blanditgravida. Nulla sit amet enim semper, efficitur eros sit amet,porttitor libero. Fusce quis tellus est. Quisque ornare, ex egetluctus pharetra, nisl leo lobortis purus, sed tristique neque leo egetodio. Maecenas lobortis nisl ac magna mollis, ac pulvinar risusconvallis. Donec ullamcorper sollicitudin maximus. Quisque bibendumelit sit amet ultrices ornare. Donec aliquam felis id urna ultricesscelerisque.");a.g(b);
a.h(!0)};Z.prototype.heavyPopup=Z.prototype.C;Z.prototype.F=function(){var a=this.a(),b=this.b.trustAsHtml("This popup was opened using the <code>open</code> method.");a.open({autoDestroy:!0,content:b,height:"200px",title:'Opened with "open"',width:"300px"})};Z.prototype.openPopupWithContent=Z.prototype.F;Z.prototype.G=function(){this.a().open({autoDestroy:!0,cls:"popup-with-iframe",height:"300px",title:'Opened with "open" and "iframe"',url:"http://geomapfish.org/",width:"400px"})};
Z.prototype.openPopupWithUrl=Z.prototype.G;ca.controller("MainController",Z);(function(){function a(a){a.put("ngeo/attributes.html",'<fieldset ng-disabled=attrCtrl.disabled> <div class=form-group ng-repeat="attribute in ::attrCtrl.attributes"> <div ng-if="attribute.type !== \'geometry\'"> <label class=control-label>{{ ::attribute.name | translate }} <span class=text-muted>{{::attribute.required ? "*" : ""}}</span></label> <div ng-switch=attribute.type> <select name={{::attribute.name}} ng-required=attribute.required ng-switch-when=select ng-model=attrCtrl.properties[attribute.name] ng-change=attrCtrl.handleInputChange(attribute.name); class=form-control type=text> <option ng-repeat="attribute in ::attribute.choices" value="{{ ::attribute }}"> {{ ::attribute }} </option> </select> <input name={{::attribute.name}} ng-required=attribute.required ng-switch-when=date ui-date=attrCtrl.dateOptions ng-model=attrCtrl.properties[attribute.name] ng-change=attrCtrl.handleInputChange(attribute.name); class=form-control type=text> <input name={{::attribute.name}} ng-required=attribute.required ng-switch-when=datetime ui-date=attrCtrl.dateOptions ng-model=attrCtrl.properties[attribute.name] ng-change=attrCtrl.handleInputChange(attribute.name); class=form-control type=text> <input name={{::attribute.name}} ng-required=attribute.required ng-switch-default ng-model=attrCtrl.properties[attribute.name] ng-change=attrCtrl.handleInputChange(attribute.name); class=form-control type=text> <div ng-show="form.$submitted || form[attribute.name].$touched"> <p class=text-danger ng-show=form[attribute.name].$error.required> {{\'This field is required\' | translate}} </p> </div> </div> </div> </div> </fieldset> ');
a.put("ngeo/popup.html",'<h4 class="popover-title ngeo-popup-title"> <span ng-bind-html=title></span> <button type=button class=close ng-click="open = false"> &times;</button> </h4> <div class=popover-content ng-bind-html=content></div> ');a.put("ngeo/grid.html",'<div class=ngeo-grid-table-container> <table float-thead=ctrl.floatTheadConfig ng-model=ctrl.configuration.data class="table table-bordered table-striped table-hover"> <thead class=table-header> <tr> <th ng-repeat="columnDefs in ctrl.configuration.columnDefs" ng-click=ctrl.sort(columnDefs.name)>{{columnDefs.name | translate}} <i ng-show="ctrl.sortedBy !== columnDefs.name" class="fa fa-fw"></i> <i ng-show="ctrl.sortedBy === columnDefs.name && ctrl.sortAscending === true" class="fa fa-caret-up"></i> <i ng-show="ctrl.sortedBy === columnDefs.name && ctrl.sortAscending === false" class="fa fa-caret-down"></i> </th> </tr> </thead> <tbody> <tr ng-repeat="attributes in ctrl.configuration.data" ng-class="[\'row-\' + ctrl.configuration.getRowUid(attributes), ctrl.configuration.isRowSelected(attributes) ? \'ngeo-grid-active\': \'\']" ng-click="ctrl.clickRow(attributes, $event)" ng-mousedown=ctrl.preventTextSelection($event)> <td ng-repeat="columnDefs in ctrl.configuration.columnDefs" ng-bind-html="attributes[columnDefs.name] | ngeoTrustHtml"></td> </tr> </tbody> </table> </div> ');
a.put("ngeo/scaleselector.html",'<div class="btn-group btn-block" ng-class="::{\'dropup\': scaleselectorCtrl.options.dropup}"> <button type=button class="btn btn-default dropdown-toggle" data-toggle=dropdown aria-expanded=false> <span ng-bind-html=scaleselectorCtrl.currentScale|ngeoScalify></span>&nbsp;<i class=caret></i> </button> <ul class="dropdown-menu btn-block" role=menu> <li ng-repeat="zoomLevel in ::scaleselectorCtrl.zoomLevels"> <a href ng-click=scaleselectorCtrl.changeZoom(zoomLevel) ng-bind-html=::scaleselectorCtrl.getScale(zoomLevel)|ngeoScalify> </a> </li> </ul> </div> ');
a.put("ngeo/datepicker.html","<div class=ngeo-datepicker> <form name=dateForm class=ngeo-datepicker-form novalidate> <div ng-if=\"::datepickerCtrl.time.widget === 'datepicker'\"> <div class=ngeo-datepicker-start-date> <span ng-if=\"::datepickerCtrl.time.mode === 'range'\" translate>From:</span> <span ng-if=\"::datepickerCtrl.time.mode !== 'range'\" translate>Date:</span> <input name=sdate ui-date=datepickerCtrl.sdateOptions ng-model=datepickerCtrl.sdate required> </div> <div class=ngeo-datepicker-end-date ng-if=\"::datepickerCtrl.time.mode === 'range'\"> <span translate>To:</span> <input name=edate ui-date=datepickerCtrl.edateOptions ng-model=datepickerCtrl.edate required> </div> </div> </form> </div> ");
a.put("ngeo/layertree.html",'<span ng-if=::!layertreeCtrl.isRoot>{{::layertreeCtrl.node.name}}</span> <input type=checkbox ng-if="::layertreeCtrl.node && !layertreeCtrl.node.children" ng-model=layertreeCtrl.getSetActive ng-model-options="{getterSetter: true}"> <ul ng-if=::layertreeCtrl.node.children> <li ng-repeat="node in ::layertreeCtrl.node.children" ngeo-layertree=::node ngeo-layertree-notroot ngeo-layertree-map=layertreeCtrl.map ngeo-layertree-nodelayerexpr=layertreeCtrl.nodelayerExpr ngeo-layertree-listenersexpr=layertreeCtrl.listenersExpr> </li> </ul> ');
a.put("ngeo/colorpicker.html",'<table class=ngeo-colorpicker-palette> <tr ng-repeat="colors in ::ctrl.colors"> <td ng-repeat="color in ::colors" ng-click=ctrl.setColor(color) ng-class="{\'ngeo-colorpicker-selected\': color == ctrl.color}"> <div ng-style="::{\'background-color\': color}"></div> </td> </tr> </table> ')}a.$inject=["$templateCache"];T.run(a)})();}).call(window);
//# sourceMappingURL=popupservice.js.map
