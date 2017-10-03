// COPYRIGHT © 2017 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/accessorSupport/decorators","../../../../layers/support/fieldUtils","./SceneLayerAdapter"],function(e,t,r,o,s,i,n){var p=function(e){function t(t){return e.call(this,t)||this}return r(t,e),t.prototype.getField=function(e){return void 0===e&&(e=""),i.getField(e,this._layer.fields)},t.prototype.getFieldUsageInfo=function(e){var t=this.getField(e);if(!t)return null;var r=this._hasCachedStatistics(t.name);return{supportsLabelingInfo:r,supportsPopupTemplate:r,supportsRenderer:r,supportsLayerQuery:!1,supportsStatistics:r}},t.prototype.getFieldDomain=function(e,t){return null},t.prototype.load=function(){var e=this,t=this._layer,r=t.load().then(function(){e.geometryType="point",e.objectIdField=null,e.supportsSQLExpression=!1});return this.addResolvingPromise(r),this},t=o([s.subclass()],t)}(s.declared(n));return p});