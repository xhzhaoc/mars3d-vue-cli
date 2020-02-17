/*!
 * Mars3D (MarsGIS for Cesium)三维地球平台  
 * 版本信息：v2.0.2, hash值: 44ff2ccce636ca980181
 * 编译日期：2020-2-17 17:16:52     
 * 版权所有：Copyright by 火星科技 http://cesium.marsgis.cn
 * 
 */
 
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory(require("cesium/Cesium"), require("jquery"), require("@turf/turf"), require("echarts"), require("mapv"));
    else if (typeof define === 'function' && define.amd)
        define(["cesium/Cesium", "jquery", "@turf/turf", "echarts", "mapv"], factory);
    else if (typeof exports === 'object')
        exports["mars3d"] = factory(require("cesium/Cesium"), require("jquery"), require("@turf/turf"), require("echarts"), require("mapv"));
    else
        root["mars3d"] = factory(root["Cesium"], root["jQuery"], root["turf"], root["echarts"], root["mapv"]);
})(window, mars3dFactory);