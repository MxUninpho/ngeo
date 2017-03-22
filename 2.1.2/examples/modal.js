(function(){'use strict';var h=this;function l(a,b){a=a.split(".");var c=h;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]?c=c[d]:c=c[d]={}:c[d]=b};function m(a){this.type=a;this.target=null}m.prototype.preventDefault=m.prototype.stopPropagation=function(){};var n=function(){var a;"cosh"in Math?a=Math.cosh:a=function(a){a=Math.exp(a);return(a+1/a)/2};return a}();/*

 Latitude/longitude spherical geodesy formulae taken from
 http://www.movable-type.co.uk/scripts/latlong.html
 Licensed under CC-BY-3.0.
*/
function p(a){this.radius=a}function q(a,b){var c=a[1]*Math.PI/180,d=b[1]*Math.PI/180,e=(d-c)/2;a=(b[0]-a[0])*Math.PI/180/2;c=Math.sin(e)*Math.sin(e)+Math.sin(a)*Math.sin(a)*Math.cos(c)*Math.cos(d);return 2*r.radius*Math.atan2(Math.sqrt(c),Math.sqrt(1-c))}
p.prototype.offset=function(a,b,c){var d=a[1]*Math.PI/180;b/=this.radius;var e=Math.asin(Math.sin(d)*Math.cos(b)+Math.cos(d)*Math.sin(b)*Math.cos(c));return[180*(a[0]*Math.PI/180+Math.atan2(Math.sin(c)*Math.sin(b)*Math.cos(d),Math.cos(b)-Math.sin(d)*Math.sin(e)))/Math.PI,180*e/Math.PI]};var r=new p(6370997);var t={};t.degrees=2*Math.PI*r.radius/360;t.ft=.3048;t.m=1;t["us-ft"]=1200/3937;function u(a){this.a=a.code;this.c=a.units;this.h=void 0!==a.b?a.b:this.i;this.f=a.g;var b=v,c=a.code,d=w||window.proj4;if("function"==typeof d&&void 0===b[c]){var e=d.defs(c);if(void 0!==e){void 0===a.g&&(this.f=e.to_meter);void 0===a.units&&(this.c=e.units);var f,g;for(f in b)if(a=d.defs(f),void 0!==a)if(b=y(f),a===e)z([b,this]);else{g=d(f,c);a=g.forward;g=g.inverse;var b=y(b),k=y(this);A(b,k,B(a));A(k,b,B(g))}}}}
u.prototype.i=function(a,b){if("degrees"==this.c)return a;var c=y("EPSG:4326"),d=this.a,c=c.a,e;d in C&&c in C[d]&&(e=C[d][c]);void 0===e&&(e=D);a=[b[0]-a/2,b[1],b[0]+a/2,b[1],b[0],b[1]-a/2,b[0],b[1]+a/2];a=e(a,a,2);e=(q(a.slice(0,2),a.slice(2,4))+q(a.slice(4,6),a.slice(6,8)))/2;a=this.f||t[this.c];void 0!==a&&(e/=a);return e};u.prototype.b=function(a,b){return this.h(a,b)};var v={},C={},w=null;function z(a){E(a);a.forEach(function(b){a.forEach(function(a){b!==a&&A(b,a,F)})})}
function G(a){v[a.a]=a;A(a,a,F)}function E(a){var b=[];a.forEach(function(a){b.push(G(a))})}function A(a,b,c){a=a.a;b=b.a;a in C||(C[a]={});C[a][b]=c}function B(a){return function(b,c,d){var e=b.length;d=void 0!==d?d:2;c=void 0!==c?c:Array(e);var f,g;for(g=0;g<e;g+=d)for(f=a([b[g],b[g+1]]),c[g]=f[0],c[g+1]=f[1],f=d-1;2<=f;--f)c[g+f]=b[g+f];return c}}
function y(a){var b;if(a instanceof u)b=a;else if("string"===typeof a){b=v[a];var c=w||window.proj4;void 0===b&&"function"==typeof c&&void 0!==c.defs(a)&&(b=new u({code:a}),G(b))}return b||null}function D(a,b){if(void 0!==b&&a!==b){for(var c=0,d=a.length;c<d;++c)b[c]=a[c];a=b}return a}function F(a,b){if(void 0!==b){for(var c=0,d=a.length;c<d;++c)b[c]=a[c];a=b}else a=a.slice();return a};(function(){if(!("HTMLCanvasElement"in window))return!1;try{return document.createElement("CANVAS").getContext("2d")?!0:!1}catch(a){return!1}})();navigator.userAgent.match("CriOS");try{new MouseEvent("click",{buttons:1})}catch(a){};function H(a){u.call(this,{code:a,units:"m",extent:I,global:!0,j:J})}H.prototype=Object.create(u.prototype);H.prototype.constructor=H;H.prototype.b=function(a,b){return a/n(b[1]/6378137)};var K=6378137*Math.PI,I=[-K,-K,K,K],J=[-180,-85,180,85],L="EPSG:3857 EPSG:102100 EPSG:102113 EPSG:900913 urn:ogc:def:crs:EPSG:6.18:3:3857 urn:ogc:def:crs:EPSG::3857 http://www.opengis.net/gml/srs/epsg.xml#3857".split(" ").map(function(a){return new H(a)});
function M(a,b,c){var d=a.length;c=1<c?c:2;void 0===b&&(2<c?b=a.slice():b=Array(d));for(var e=0;e<d;e+=c){b[e]=K*a[e]/180;var f=6378137*Math.log(Math.tan(Math.PI*(a[e+1]+90)/360));f>K?f=K:f<-K&&(f=-K);b[e+1]=f}return b}function N(a,b,c){var d=a.length;c=1<c?c:2;void 0===b&&(2<c?b=a.slice():b=Array(d));for(var e=0;e<d;e+=c)b[e]=180*a[e]/K,b[e+1]=360*Math.atan(Math.exp(a[e+1]/6378137))/Math.PI-90;return b};var O=new p(6378137);function P(a,b){u.call(this,{code:a,units:"degrees",extent:Q,l:b,global:!0,g:R,j:Q})}P.prototype=Object.create(u.prototype);P.prototype.constructor=P;P.prototype.b=function(a){return a};
var Q=[-180,-90,180,90],R=Math.PI*O.radius/180,S=[new P("CRS:84"),new P("EPSG:4326","neu"),new P("urn:ogc:def:crs:EPSG::4326","neu"),new P("urn:ogc:def:crs:EPSG:6.6:4326","neu"),new P("urn:ogc:def:crs:OGC:1.3:CRS84"),new P("urn:ogc:def:crs:OGC:2:84"),new P("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new P("urn:x-ogc:def:crs:EPSG:4326","neu")];z(L);z(S);S.forEach(function(a){L.forEach(function(b){A(a,b,M);A(b,a,N)})});var T=angular.module("ngeo",["gettext","ui.date","floatThead"]);l("ngeo.FeatureProperties",{ANGLE:"a",COLOR:"c",IS_CIRCLE:"l",IS_RECTANGLE:"r",IS_TEXT:"t",NAME:"n",OPACITY:"o",AZIMUT:"z",SHOW_MEASURE:"m",SIZE:"s",STROKE:"k"});l("ngeo.GeometryType",{CIRCLE:"Circle",LINE_STRING:"LineString",MULTI_LINE_STRING:"MultiLineString",MULTI_POINT:"MultiPoint",MULTI_POLYGON:"MultiPolygon",POINT:"Point",POLYGON:"Polygon",RECTANGLE:"Rectangle",TEXT:"Text"});function U(){return{template:'<div class="modal fade" tabindex="-1" role="dialog"><div class="modal-dialog"><div class="modal-content"></div></div></div>',restrict:"E",require:"ngModel",transclude:!0,link:function(a,b,c,d,e){function f(){x=a.$new();e(x,function(a){k.find(".modal-content").append(a)})}function g(){x.$destroy();k.find(".modal-content").empty()}var k=b.children();b="true"===c.ngeoModalDestroyContentOnHide;var x=a.$new();angular.element(document.body).append(k);d.$render=function(){k.modal(d.$viewValue?
"show":"hide")};k.on("shown.bs.modal hidden.bs.modal",function(b){var c=b.type;a.$apply(function(){d.$setViewValue("shown"==c)})});b?(k.on("hide.bs.modal",g),k.on("show.bs.modal",f)):k.find(".modal-content").append(e())}}}U.$inject=["$parse"];T.directive("ngeoModal",U);angular.module("app",["ngeo"]).controller("MainController",function(){this.modalShown=!1});(function(){function a(a){a.put("ngeo/attributes.html",'<fieldset ng-disabled=attrCtrl.disabled> <div class=form-group ng-repeat="attribute in ::attrCtrl.attributes"> <div ng-if="attribute.type !== \'geometry\'"> <label class=control-label>{{ ::attribute.name | translate }} <span class=text-muted>{{::attribute.required ? "*" : ""}}</span></label> <div ng-switch=attribute.type> <select name={{::attribute.name}} ng-required=attribute.required ng-switch-when=select ng-model=attrCtrl.properties[attribute.name] ng-change=attrCtrl.handleInputChange(attribute.name); class=form-control type=text> <option ng-repeat="attribute in ::attribute.choices" value="{{ ::attribute }}"> {{ ::attribute }} </option> </select> <input name={{::attribute.name}} ng-required=attribute.required ng-switch-when=date ui-date=attrCtrl.dateOptions ng-model=attrCtrl.properties[attribute.name] ng-change=attrCtrl.handleInputChange(attribute.name); class=form-control type=text> <input name={{::attribute.name}} ng-required=attribute.required ng-switch-when=datetime ui-date=attrCtrl.dateOptions ng-model=attrCtrl.properties[attribute.name] ng-change=attrCtrl.handleInputChange(attribute.name); class=form-control type=text> <input name={{::attribute.name}} ng-required=attribute.required ng-switch-default ng-model=attrCtrl.properties[attribute.name] ng-change=attrCtrl.handleInputChange(attribute.name); class=form-control type=text> <div ng-show="form.$submitted || form[attribute.name].$touched"> <p class=text-danger ng-show=form[attribute.name].$error.required> {{\'This field is required\' | translate}} </p> </div> </div> </div> </div> </fieldset> ');
a.put("ngeo/popup.html",'<h4 class="popover-title ngeo-popup-title"> <span ng-bind-html=title></span> <button type=button class=close ng-click="open = false"> &times;</button> </h4> <div class=popover-content ng-bind-html=content></div> ');a.put("ngeo/grid.html",'<div class=ngeo-grid-table-container> <table float-thead=ctrl.floatTheadConfig ng-model=ctrl.configuration.data class="table table-bordered table-striped table-hover"> <thead class=table-header> <tr> <th ng-repeat="columnDefs in ctrl.configuration.columnDefs" ng-click=ctrl.sort(columnDefs.name)>{{columnDefs.name | translate}} <i ng-show="ctrl.sortedBy !== columnDefs.name" class="fa fa-fw"></i> <i ng-show="ctrl.sortedBy === columnDefs.name && ctrl.sortAscending === true" class="fa fa-caret-up"></i> <i ng-show="ctrl.sortedBy === columnDefs.name && ctrl.sortAscending === false" class="fa fa-caret-down"></i> </th> </tr> </thead> <tbody> <tr ng-repeat="attributes in ctrl.configuration.data" ng-class="[\'row-\' + ctrl.configuration.getRowUid(attributes), ctrl.configuration.isRowSelected(attributes) ? \'ngeo-grid-active\': \'\']" ng-click="ctrl.clickRow(attributes, $event)" ng-mousedown=ctrl.preventTextSelection($event)> <td ng-repeat="columnDefs in ctrl.configuration.columnDefs" ng-bind-html="attributes[columnDefs.name] | ngeoTrustHtml"></td> </tr> </tbody> </table> </div> ');
a.put("ngeo/scaleselector.html",'<div class="btn-group btn-block" ng-class="::{\'dropup\': scaleselectorCtrl.options.dropup}"> <button type=button class="btn btn-default dropdown-toggle" data-toggle=dropdown aria-expanded=false> <span ng-bind-html=scaleselectorCtrl.currentScale|ngeoScalify></span>&nbsp;<i class=caret></i> </button> <ul class="dropdown-menu btn-block" role=menu> <li ng-repeat="zoomLevel in ::scaleselectorCtrl.zoomLevels"> <a href ng-click=scaleselectorCtrl.changeZoom(zoomLevel) ng-bind-html=::scaleselectorCtrl.getScale(zoomLevel)|ngeoScalify> </a> </li> </ul> </div> ');
a.put("ngeo/datepicker.html","<div class=ngeo-datepicker> <form name=dateForm class=ngeo-datepicker-form novalidate> <div ng-if=\"::datepickerCtrl.time.widget === 'datepicker'\"> <div class=ngeo-datepicker-start-date> <span ng-if=\"::datepickerCtrl.time.mode === 'range'\" translate>From:</span> <span ng-if=\"::datepickerCtrl.time.mode !== 'range'\" translate>Date:</span> <input name=sdate ui-date=datepickerCtrl.sdateOptions ng-model=datepickerCtrl.sdate required> </div> <div class=ngeo-datepicker-end-date ng-if=\"::datepickerCtrl.time.mode === 'range'\"> <span translate>To:</span> <input name=edate ui-date=datepickerCtrl.edateOptions ng-model=datepickerCtrl.edate required> </div> </div> </form> </div> ");
a.put("ngeo/layertree.html",'<span ng-if=::!layertreeCtrl.isRoot>{{::layertreeCtrl.node.name}}</span> <input type=checkbox ng-if="::layertreeCtrl.node && !layertreeCtrl.node.children" ng-model=layertreeCtrl.getSetActive ng-model-options="{getterSetter: true}"> <ul ng-if=::layertreeCtrl.node.children> <li ng-repeat="node in ::layertreeCtrl.node.children" ngeo-layertree=::node ngeo-layertree-notroot ngeo-layertree-map=layertreeCtrl.map ngeo-layertree-nodelayerexpr=layertreeCtrl.nodelayerExpr ngeo-layertree-listenersexpr=layertreeCtrl.listenersExpr> </li> </ul> ');
a.put("ngeo/colorpicker.html",'<table class=ngeo-colorpicker-palette> <tr ng-repeat="colors in ::ctrl.colors"> <td ng-repeat="color in ::colors" ng-click=ctrl.setColor(color) ng-class="{\'ngeo-colorpicker-selected\': color == ctrl.color}"> <div ng-style="::{\'background-color\': color}"></div> </td> </tr> </table> ')}a.$inject=["$templateCache"];T.run(a)})();}).call(window);
//# sourceMappingURL=modal.js.map
