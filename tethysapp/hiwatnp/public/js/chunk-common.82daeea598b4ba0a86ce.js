(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"3ab9":function(e,t,a){e.exports=a.p+"static/hiwatnp/images/favpng_storm-ico-icon.svg"},"4ff5":function(e,t,a){e.exports=a.p+"static/hiwatnp/images/hail.svg"},"53e0":function(e,t,a){e.exports=a.p+"static/hiwatnp/images/markers_default.png"},"5d0f":function(e,t,a){"use strict";a("ec2f")},"90f1":function(e,t,a){"use strict";a("fee8")},"9b2a":function(e,t,a){},a271:function(e,t,a){},b3d0:function(e,t,a){"use strict";a("9b2a")},bce3:function(e,t,a){"use strict";a("e80e")},c8a3:function(e,t,a){},c8fa:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),r={class:"all-conts"};function i(e,t,a,i,c,o){var s=Object(n["U"])("NavBar"),l=Object(n["U"])("el-header"),u=Object(n["U"])("Tabs"),d=Object(n["U"])("el-container");return Object(n["L"])(),Object(n["m"])("div",r,[Object(n["q"])(d,{class:"cont-outer"},{default:Object(n["jb"])((function(){return[Object(n["q"])(l,null,{default:Object(n["jb"])((function(){return[Object(n["q"])(s)]})),_:1}),Object(n["q"])(d,{class:"sidebar-main"},{default:Object(n["jb"])((function(){return[Object(n["q"])(u,{activeTab:o.currentTab},null,8,["activeTab"])]})),_:1})]})),_:1})])}Object(n["O"])("data-v-7c3133a8");var c={class:"navbar navbar-light template-nabar full-height"},o=Object(n["n"])("a",{class:"navbar-brand",href:""},"High-Impact Weather Assessment Toolkit - Nepal",-1),s=Object(n["n"])("div",{class:"nav-logo-image"},null,-1),l=[o,s];function u(e,t,a,r,i,o){return Object(n["L"])(),Object(n["m"])("nav",c,l)}Object(n["M"])();var d={name:"NavBar"};a("f733");d.render=u,d.__scopeId="data-v-7c3133a8";var p=d;function h(e,t,a,r,i,c){var o=Object(n["U"])("currentTabBody");return Object(n["L"])(),Object(n["k"])(o)}a("b0c0");var b="regionaldrought",f="http://threddsdataserver.icimod.org/thredds";function g(e,t,a,r,i,c){var o=Object(n["U"])("mapControlsCurrent"),s=Object(n["U"])("el-col"),l=Object(n["U"])("el-row"),u=Object(n["U"])("mapComponentCurrent");return Object(n["L"])(),Object(n["k"])(l,{class:"full-height full-width"},{default:Object(n["jb"])((function(){return[Object(n["q"])(s,{span:5,class:"full-height"},{default:Object(n["jb"])((function(){return[Object(n["q"])(l,{class:"first-row"},{default:Object(n["jb"])((function(){return[Object(n["q"])(s,{span:24,class:"full-height full-width padding-left-10 padding-bottom-10 padding-top-10 padding-right-5"},{default:Object(n["jb"])((function(){return[Object(n["q"])(o)]})),_:1})]})),_:1})]})),_:1}),Object(n["q"])(s,{span:19,class:"full-height"},{default:Object(n["jb"])((function(){return[Object(n["q"])(l,{class:"first-row"},{default:Object(n["jb"])((function(){return[Object(n["q"])(s,{span:24,class:"full-height full-width padding-left-5 padding-bottom-10 padding-top-10 padding-right-10"},{default:Object(n["jb"])((function(){return[Object(n["q"])(u)]})),_:1})]})),_:1})]})),_:1})]})),_:1})}var m={class:"card-box full-height full-width about-div"},v={class:"pannel-title"},y={class:"heading1"},O=Object(n["n"])("div",{class:"body-container"},[Object(n["n"])("div",{class:"layerCollection"}),Object(n["n"])("h6",{class:"heading1"},"Hourly prediction"),Object(n["n"])("div",{class:"layerCollection layerCollection1"})],-1);function j(e,t,a,r,i,c){var o=Object(n["U"])("el-option"),s=Object(n["U"])("el-select");return Object(n["L"])(),Object(n["m"])("div",m,[Object(n["n"])("div",v,[Object(n["n"])("h6",y,[Object(n["q"])(s,{modelValue:e.hiwatObject.ModelDayPartation,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.hiwatObject.ModelDayPartation=t}),class:"m-2 ModelDayParation",placeholder:"Select Day",size:"small",onChange:c.changedModelDay},{default:Object(n["jb"])((function(){return[(Object(n["L"])(!0),Object(n["m"])(n["b"],null,Object(n["S"])(i.ModelDayOptions,(function(e){return Object(n["L"])(),Object(n["k"])(o,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","onChange"]),Object(n["p"])(" Outlook ("+Object(n["Y"])(e.hiwatObject.HIWATDateLevel)+") ",1)])]),O])}var w=a("5530"),T=(a("4d90"),a("99af"),a("159b"),a("ac1f"),a("5319"),a("5502")),x={name:"mapControlsCurrent",data:function(){return{ModelDayOptions:[{value:"_day1",label:"Day 1"},{value:"_day2",label:"Day 2"}]}},methods:{changedModelDay:function(){var e=this,t=new Date(this.hiwatObject.HIWATDate.getTime());"Day 1"==this.hiwatObject.ModelDayPartation?t.setDate(t.getDate()+1):t.setDate(t.getDate()+2);var a=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0"),i="".concat(a,"-").concat(n,"-").concat(r);this.hiwatObject.HIWATDateLevel=i,this.hiwatObject.LayerListPredictionAccumulated.forEach((function(t){var a=t.layerObj,n=a.getSource(),r=n.getParams().STYLES;r="_day1"==e.hiwatObject.ModelDayPartation?r.replace("_day2","_day1"):r.replace("_day1","_day2"),n.updateParams({STYLES:r})}))}},computed:Object(w["a"])({},Object(T["d"])(["hiwatObject"])),created:function(){}};a("5d0f");x.render=j;var L=x,S={class:"card-box full-height full-width about-div"},_=Object(n["n"])("div",{id:"map-container2"},null,-1),I={id:"LayerInfoDiv"},C={class:"card-header"},D={class:"infograph-card body"},P={class:"infographics-item long-row"},A=["src"],V={class:"value-wrapper"},B=Object(n["n"])("div",{class:"value-title"},"Total accumulated Rainfall (mm)",-1),H={class:"value"},E={class:"infographics-item long-row"},k=["src"],M={class:"value-wrapper"},R=Object(n["n"])("div",{class:"value-title"},"Maximum Prob. of Hail Threat (%)",-1),N={class:"value"},W={class:"infographics-item long-row"},G=["src"],U={class:"value-wrapper"},z=Object(n["n"])("div",{class:"value-title"},"Maximum Prob. of Lightning (%)",-1),F={class:"value"},Y={class:"infographics-item long-row"},q=["src"],J={class:"value-wrapper"},Q=Object(n["n"])("div",{class:"value-title"},"Maximum Prob. of Supercell Threat (%)",-1),X={class:"value"};function Z(e,t,a,r,i,c){var o=Object(n["U"])("el-card");return Object(n["L"])(),Object(n["m"])("div",S,[_,Object(n["n"])("div",I,[1==i.cardBox.showCardBox?(Object(n["L"])(),Object(n["k"])(o,{key:0,class:Object(n["A"])({"box-card":i.cardBox.animationClass.cardBoxCSS,"animate__animated animate__fadeInDown":i.cardBox.animationClass.animate__fadeInDown,"animate__animated animate__fadeOutUp":i.cardBox.animationClass.animate__fadeOutUp})},{header:Object(n["jb"])((function(){return[Object(n["n"])("div",C,[Object(n["n"])("span",null,Object(n["Y"])(i.cardBox.header),1)])]})),default:Object(n["jb"])((function(){return[Object(n["n"])("div",D,[Object(n["n"])("div",P,[Object(n["n"])("span",null,[Object(n["n"])("img",{class:"infographicsIcon",src:i.rainySVG,alt:"my-logo"},null,8,A)]),Object(n["n"])("div",V,[B,Object(n["n"])("div",H,Object(n["Y"])(i.cardBox.rainy),1)])]),Object(n["n"])("div",E,[Object(n["n"])("span",null,[Object(n["n"])("img",{class:"infographicsIcon",src:i.hailSVG,alt:"my-logo"},null,8,k)]),Object(n["n"])("div",M,[R,Object(n["n"])("div",N,Object(n["Y"])(i.cardBox.hail),1)])]),Object(n["n"])("div",W,[Object(n["n"])("span",null,[Object(n["n"])("img",{class:"infographicsIcon",src:i.flashSVG,alt:"my-logo"},null,8,G)]),Object(n["n"])("div",U,[z,Object(n["n"])("div",F,Object(n["Y"])(i.cardBox.Lightning),1)])]),Object(n["n"])("div",Y,[Object(n["n"])("span",null,[Object(n["n"])("img",{class:"infographicsIcon",src:i.hailSVG,alt:"my-logo"},null,8,q)]),Object(n["n"])("div",J,[Q,Object(n["n"])("div",X,Object(n["Y"])(i.cardBox.Supercell),1)])])])]})),_:1},8,["class"])):Object(n["l"])("",!0)])])}var K,$=a("b85c"),ee=a("1da1"),te=(a("96cf"),a("841c"),a("fb6a"),a("1276"),a("d3b7"),a("77ed"),a("e174")),ae=a.n(te),ne=a("4ff5"),re=a.n(ne),ie=a("c9b8"),ce=a.n(ie),oe=a("3ab9"),se=a.n(oe),le=(a("5bc0"),a("5eee")),ue=a("3900"),de=a("480c"),pe=a("6792"),he=a("c810"),be=a("a2c7"),fe=(a("4de4"),[]);for(K=2e3;K<=(new Date).getFullYear();K++)fe.unshift({value:K,label:K});var ge=[{id:"gapaNapa_1hrppt",visible:!1,title:"Total accumulated Rainfall (mm)",zIndex:100,layerCollectionDivClass:".layerCollection",styles:"HIWAT_Extreme:gapaNapa_1hrppt_day1",group:!0,day:1},{id:"gapaNapa_labels",visible:!1,title:"Municipality Labels",zIndex:100,layerCollectionDivClass:".layerCollection1",styles:"HIWAT_Extreme:gapaNapa_labels"},{id:"gapaNapa_lightning",visible:!1,title:"Maximum Prob. of Lightning (%)",zIndex:100,layerCollectionDivClass:".layerCollection",styles:"HIWAT_Extreme:gapaNapa_lightning_day1",group:!0},{id:"gapaNapa_mHail",visible:!1,title:"Maximum Prob. of Hail Threat (%)",zIndex:100,layerCollectionDivClass:".layerCollection",styles:"HIWAT_Extreme:gapaNapa_mHail_day1",group:!0},{id:"gapaNapa_suHail",visible:!1,title:"Maximum Prob. of Supercell Threat (%)",zIndex:100,layerCollectionDivClass:".layerCollection",styles:"HIWAT_Extreme:gapaNapa_suHail_day1",group:!0},{id:"gapaNapa_transparent",visible:!1,title:"Municipality Boundary",zIndex:100,layerCollectionDivClass:".layerCollection1",styles:"HIWAT_Extreme:gapaNapa_transparent"}],me=[];ge.forEach((function(e){e.group&&me.push(e.id)})),ge.forEach((function(e){e.GroupLayersId=me}));var ve=ge;function ye(e){var t=ve.filter((function(t){return t.id==e})).length;return!!t}var Oe=[{id:"enspmm-prec1h",visible:!0,title:"1-hour accumulated Rainfall (mm)",layerName:"enspmm-prec1h"},{id:"ensprob-lfa-thresh0p07",visible:!1,title:"Prob. of Lightning (%)",layerName:"ensprob-lfa-thresh0p07"},{id:"ensprob-tcolg-thresh30",visible:!1,title:"Prob. of Hail Threat (%)",layerName:"ensprob-tcolg-thresh30"},{id:"ensprob-uphlcy25-thresh100",visible:!1,title:"Prob. of Supercell Threat (%)",layerName:"ensprob-uphlcy25-thresh100"}],je=[];Oe.forEach((function(e){e.group=!0,je.push(e.id)})),Oe.forEach((function(e){e.GroupLayersId=je}));var we=Oe;function Te(e){var t='<?xml version="1.0" encoding="ISO-8859-1"?>\n<StyledLayerDescriptor version="1.1.0" xsi:schemaLocation="http://www.opengis.net/sldStyledLayerDescriptor.xsd"\n                       xmlns="http://www.opengis.net/sld"\n                       xmlns:ogc="http://www.opengis.net/ogc"\n                       xmlns:se="http://www.opengis.net/se"\n                       xmlns:xlink="http://www.w3.org/1999/xlink"\n                       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n                       xmlns:resc="http://www.resc.reading.ac.uk">\n    <NamedLayer>\n        <se:Name>'.concat(e,'</se:Name>\n        <UserStyle>\n            <se:Name>Thesholded colour scheme</se:Name>\n            <se:CoverageStyle>\n                <se:Rule>\n                    <se:RasterSymbolizer>\n                        <se:Opacity>1.0</se:Opacity>\n                        <se:ColorMap>\n                            <se:Categorize fallbackValue="#00000000">\n                                <se:LookupValue>Rasterdata</se:LookupValue>\n                                <se:Value>#0c2c8400</se:Value>\n                                <se:Threshold>0</se:Threshold>\n                                <se:Value>#ffffd4</se:Value>\n                                <se:Threshold>10</se:Threshold>\n                                <se:Value>#ffefb5</se:Value>\n                                <se:Threshold>20</se:Threshold>\n                                <se:Value>#ffde96</se:Value>\n                                <se:Threshold>30</se:Threshold>\n                                <se:Value>#fec46c</se:Value>\n                                <se:Threshold>40</se:Threshold>\n                                <se:Value>#fea73f</se:Value>\n                                <se:Threshold>50</se:Threshold>\n                                <se:Value>#f68c23</se:Value>\n                                <se:Threshold>60</se:Threshold>\n                                <se:Value>#e67217</se:Value>\n                                <se:Threshold>70</se:Threshold>\n                                <se:Value>#d25a0c</se:Value>\n                                <se:Threshold>80</se:Threshold>\n                                <se:Value>#b64708</se:Value>\n                                <se:Threshold>90</se:Threshold>\n                                <se:Value>#993404</se:Value>\n                                <se:Threshold>100</se:Threshold>\n                                <se:Value>#993404</se:Value>\n                            </se:Categorize>\n                        </se:ColorMap>\n                    </se:RasterSymbolizer>\n                </se:Rule>\n            </se:CoverageStyle>\n        </UserStyle>\n    </NamedLayer>\n</StyledLayerDescriptor>\n').replace(/(\r\n|\n|\r)/gm,"");return t}var xe=a("2f63"),Le=a("b16e"),Se=(a("1a87"),a("32d0")),_e=a("3e6b"),Ie=a("5831"),Ce=a("6c77"),De=a("8682"),Pe=a("83a6"),Ae=a("6cbf"),Ve=a("345d"),Be=a("53e0"),He=a.n(Be),Ee=a("0af5"),ke=a("a2e1"),Me=(a("38fd"),a("b634"),a("5ed1"),a("ce2c")),Re=a("d0e9"),Ne=a("a226"),We=a("6e75"),Ge=(a("8910"),{name:"mapComponentCurrent",data:function(){return{mapObj:"",HighLightedLayer:"",view:"",mapObject:"",MajorBasin:"",AllLayers:"",TimeSeriesLayerCollection:[],selectedFilesOnAYear:[],cardBox:{header:"",rainy:"",hail:"",Lightning:"",Supercell:"",showCardBox:!1,animationClass:{animate__backInDown:!1,animate__fadeOutUp:!1,cardBoxCSS:!0}},LayerListHourlyPrediction:[],LayerListPredictionAccumulated:[],rainySVG:ae.a,hailSVG:re.a,flashSVG:ce.a,stormSVG:se.a}},methods:Object(w["a"])(Object(w["a"])(Object(w["a"])({},Object(T["b"])(["SlicingThreddsCatalog","getLatestHIWATInfo"])),Object(T["c"])(["HIWATDate"])),{},{mapInitilization:function(){var e=new be["a"]({center:[9388155.512006583,3291367.8109067543],zoom:4}),t=new le["a"]({layers:[],target:"map-container2",view:e});this.mapObject=t,this.view=e,this.mapObject.addControl(new ue["a"]({element:document.getElementById("LayerInfoDiv")})),this.addTimeDimensionLayer(),window.mapObject=t,t.getView().fit([8862116.944159785,2988219.518100075,9874386.744353136,3669682.1940472336],t.getView())},addGeoCodingAndInteractionBar:function(){var e=this.mapObject,t=new Se["a"]({polygon:!0,reverse:!1,position:!0,className:"OSMBasedGeocodingHIWATExtreme"}),a=new _e["a"]({source:new Ie["a"],displayInLayerSwitcher:!1,baseLayer:!1,zIndex:999});function n(){var e=a.getSource().getFeatures();e.forEach((function(e){e.getProperties().osm_id&&a.getSource().removeFeature(e)}))}e.addLayer(a),e.addControl(t),t.on("select",(function(t){if(n(),t.search.geojson){var r=new ke["a"],i=r.readFeature(t.search.geojson,{dataProjection:"EPSG:4326",featureProjection:e.getView().getProjection()});delete t.search.geojson,i.setProperties(t.search),a.getSource().addFeature(i);var c=e.getView(),o=c.getResolutionForExtent(i.getGeometry().getExtent(),e.getSize()),s=c.getZoomForResolution(o),l=Object(Ee["w"])(i.getGeometry().getExtent());setTimeout((function(){c.animate({center:l,zoom:Math.min(s,16)})}),100)}else e.getView().animate({center:t.coordinate,zoom:Math.max(e.getView().getZoom(),16)});function u(){a.getSource().forEachFeature((function(e){var t=null;t=e.getProperties().osm_id?[new Ce["b"]({stroke:new De["a"]({color:[0,0,0,0],opacity:1,width:3}),fill:new Pe["a"]({color:"#e5e5ff00"})}),new Ce["b"]({image:new Ae["a"]({anchor:[.5,46],anchorXUnits:"fraction",anchorYUnits:"pixels",src:He.a,size:Object(Ve["d"])([40,45])}),stroke:new De["a"]({color:[0,0,255,1],opacity:1,width:3,lineDash:[4,8,4,8]}),fill:new Pe["a"]({color:"#e5e5ff40"})})]:new Ce["b"]({image:new Me["a"]({radius:5,stroke:new De["a"]({color:[255,0,0,1],opacity:1,width:2}),fill:new Pe["a"]({color:"#e5e5ff50"})}),stroke:new De["a"]({color:[255,0,0,1],opacity:1,width:2}),fill:new Pe["a"]({color:"#e5e5ff50"})}),e.setStyle(t)}))}u()}))},addTimeDimensionLayer:function(){var e=this;return Object(ee["a"])(regeneratorRuntime.mark((function t(){var a,n,r,i,c,o,s,l,u,d,p,h,b,f,g,m,v,y,O,j,w;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.mapObject,t.next=3,e.getLatestHIWATInfo();case 3:n=t.sent,r=Object($["a"])(ve);try{for(r.s();!(i=r.n()).done;)c=i.value,console.log(c),o=new he["a"]({id:c.id,title:c.title,visible:c.visible,zIndex:c.zIndex,baseLayer:!1,displayInLayerSwitcher:!1,legendPath:"http://tethys.icimod.org:8080/geoserver/HIWAT_Extreme/wms?service=WMS&version=1.1.0&request=GetLegendGraphic&layer=HIWAT_Extreme%3AgapaNapa&FORMAT=image/png&style="+c.styles,source:new pe["a"]({url:"http://tethys.icimod.org:8080/geoserver/HIWAT_Extreme/wms",params:{LAYERS:"HIWAT_Extreme:gapaNapa",STYLES:c.styles},serverType:"geoserver"})}),e.mapObject.addLayer(o),s=new xe["a"](c.layerCollectionDivClass,o,!0,!0,"withOpacSlider"),c.group&&(e.hiwatObject.LayerListPredictionAccumulated.push(s),o.on("change:visible",(function(t){var a=t.target.getProperties().id;1==t.target.getProperties().visible&&e.hiwatObject.LayerListPredictionAccumulated.forEach((function(e){a==e.getProperties().id?e.setVisible(!0):e.setVisible(!1)}))})))}catch(T){r.e(T)}finally{r.f()}l=n.thredds_urls.hourly,u=l.split("hkhEnsemble_")[1].slice(0,8),d=new Date(u.slice(0,4),u.slice(4,6)-1,u.slice(6,8)),e.hiwatObject.HIWATDate=d,e.hiwatObject.ModelDayPartation="_day1",p=new Date(e.hiwatObject.HIWATDate.getTime()),p.setDate(p.getDate()+1),h=p.getFullYear(),b=String(p.getMonth()+1).padStart(2,"0"),f=String(p.getDate()).padStart(2,"0"),g="".concat(h,"-").concat(b,"-").concat(f),e.hiwatObject.HIWATDateLevel=g,m=Object($["a"])(we),t.prev=19,m.s();case 21:if((v=m.n()).done){t.next=31;break}return y=v.value,O=Te(y.layerName),j=l+"?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetLegendGraphic&WIDTH=10&HEIGHT=230&LAYERS=".concat(y.layerName,"&SLD_BODY=").concat(encodeURIComponent(O)),w=new Le["a"]({id:y.id,title:y.title,visible:y.visible,opacity:1,legendPath:j,showlegend:!0,showControlPanel:!0,ThreddsDataServerVersion:"5",timeSliderSize:"small",alignTimeSlider:"left",baseLayer:!1,displayInLayerSwitcher:!1,GroupLayersId:y.GroupLayersId,source:{url:l,params:{VERSION:"1.1.1",LAYERS:y.layerName,SLD_BODY:O}}}),t.next=28,w.init().then((function(){a.addThreddsLayer(w);var t=new xe["a"](".layerCollection1",w,!0,!0,"withOpacSlider");e.LayerListHourlyPrediction.push(t)}),(function(e){console.error(e)}));case 28:w.on("change:visible",(function(t){var a=t.target.getProperties().id;1==t.target.getProperties().visible&&e.LayerListHourlyPrediction.forEach((function(e){a==e.getProperties().id?e.setVisible(!0):e.setVisible(!1)}))}));case 29:t.next=21;break;case 31:t.next=36;break;case 33:t.prev=33,t.t0=t["catch"](19),m.e(t.t0);case 36:return t.prev=36,m.f(),t.finish(36);case 39:console.log(n.thredds_urls.hourly);case 40:case"end":return t.stop()}}),t,null,[[19,33,36,39]])})))()},addBaseMap:function(){var e=this.mapObject,t=new de["a"]({title:"OSM",baseLayer:!0,displayInLayerSwitcher:!0,source:new Re["a"]({attributions:[]}),visible:!0}),a=new de["a"]({visible:!1,baseLayer:!0,title:"Bing Maps",displayInLayerSwitcher:!0,source:new Ne["a"]({key:"ApTJzdkyN1DdFKkRAE6QIDtzihNaf6IWJsT-nQ_2eMoO4PN__0Tzhl2-WgJtXFSp",imagerySet:"AerialWithLabels"})});e.addLayer(t),e.addLayer(a)},MapInformationofMaximumLabeledLayers:function(){var e=this,t=this.mapObject;t.on("singleclick",(function(a){var n=0,r=t.getEventPixel(a.originalEvent),i=null;if(t.forEachLayerAtPixel(r,(function(e){var t=e.getProperties();ye(t.id)&&(i=e,n+=1)})),n){var c=t.getView().getResolution(),o=i.getSource().getFeatureInfoUrl(a.coordinate,c,"EPSG:3857",{INFO_FORMAT:"application/json"});o&&fetch(o).then((function(e){return e.text()})).then((function(t){var a=JSON.parse(t);if(a.features.length){var n=e.hiwatObject.ModelDayPartation,r=a.features[0].properties;e.cardBox.showCardBox=!0,e.cardBox.header=r.GaPa_NaPa+" "+r.Type_GN,e.cardBox.rainy=r["hraccumulated_preciptation"+n],e.cardBox.hail=r["moderate_hail"+n],e.cardBox.Lightning=r["lightning"+n],e.cardBox.Supercell=r["moderate_supercell"+n],console.log(a),e.cardBox.animationClass.animate__fadeOutUp=!1,e.cardBox.animationClass.animate__fadeInDown=!0}else e.cardBox.animationClass.animate__fadeInDown=!1,e.cardBox.animationClass.animate__fadeOutUp=!0,setTimeout((function(){e.cardBox.showCardBox=!1}),1e3),e.$notify({title:"Warning",message:"Please select a feature with in a country boundary",type:"warning"})}))}}))}}),created:function(){},computed:Object(w["a"])({},Object(T["d"])(["hiwatObject"])),mounted:function(){this.mapInitilization(),this.addGeoCodingAndInteractionBar(),this.addBaseMap(),this.mapObject.addControl(new We["a"]),this.MapInformationofMaximumLabeledLayers()}});a("bce3");Ge.render=Z;var Ue=Ge,ze={name:"currentTabBody",components:{mapControlsCurrent:L,mapComponentCurrent:Ue}};a("b3d0");ze.render=g,ze.__scopeId="data-v-de0a4bac";var Fe=ze,Ye={name:"Tabs",props:{activeTab:{type:String,required:!0}},components:{currentTabBody:Fe},data:function(){return{selectedTab:"current"}},methods:{changePage:function(e){var t=document.createElement("a");"current"===e.props.name?t.href="/apps/"+b+"/current/":t.href="/apps/"+b+"/outlook/",t.click()},getCurrentTab:function(){return this.activeTab}},computed:{currentTab:function(){return this.getCurrentTab()}}};a("90f1");Ye.render=h;var qe=Ye,Je=(a("c8a3"),{name:"current",components:{NavBar:p,Tabs:qe},data:function(){return{selectedTab:"current"}},computed:{currentTab:function(){return this.getCurrentTab()}},methods:{getCurrentTab:function(){return this.selectedTab}}});Je.render=i;var Qe=Je,Xe=(a("25f0"),a("bc3a")),Ze=a.n(Xe),Ke=null;Ke="http://tethys.icimod.org";var $e={Base:Ke,SliceCatalog:"apps/regionaldrought/slicedfromcatalog",ForecastChartAPI:"apps/regionaldrought/ajax/getspatialaverage/",CurrentChartAPI:"apps/regionaldrought/ajax/getspatialaveragecurrent/",getCSRFToken:"regionaldrought/getCSRFToken",LatestHIWATInfo:"apps/hiwatnp/getLatestHIWATInfo/"},et=Ze.a.create({baseURL:$e.Base});function tt(e,t){return at.apply(this,arguments)}function at(){return at=Object(ee["a"])(regeneratorRuntime.mark((function e(t,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,n){et.post("/"+t,a).then((function(t){e(t.data)}),(function(e){console.log("error on postapi"),console.log(e),n(e)}))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),at.apply(this,arguments)}function nt(e){return rt.apply(this,arguments)}function rt(){return rt=Object(ee["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,a){et.get("/"+t).then((function(t){e(t.data)}),(function(e){console.log("hello error getApiWithoutToken"),console.log(e),a(e)}))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),rt.apply(this,arguments)}function it(e){return ct.apply(this,arguments)}function ct(){return ct=Object(ee["a"])(regeneratorRuntime.mark((function e(t){var a,n,r,i,c,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=f+"/catalog/sldas/".concat(t.periodicity,"/catalog.xml"),n=".nc",r=parseInt(t.year),i=r+1,c=$e.SliceCatalog+"?url=".concat(a,"&data_ext=").concat(n,"&startDate=").concat(r.toString(),"-01-01&endDate=").concat(i.toString(),"-01-01&periodicity=").concat(t.periodicity),e.next=7,nt(c);case 7:return o=e.sent,s=[],o.data.forEach((function(e){var t=a.replace("/catalog/","/wms/").replace("catalog.xml",e);s.push(t)})),e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)}))),ct.apply(this,arguments)}function ot(e){return st.apply(this,arguments)}function st(){return st=Object(ee["a"])(regeneratorRuntime.mark((function e(t){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=$e.CurrentChartAPI,e.next=3,tt(a,t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)}))),st.apply(this,arguments)}function lt(){return ut.apply(this,arguments)}function ut(){return ut=Object(ee["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=$e.LatestHIWATInfo,e.next=3,nt(t);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))),ut.apply(this,arguments)}var dt=Object(T["a"])({state:function(){return{basin:"",indices:"Tair_f_tavg",periodicity:"monthly",year:(new Date).getFullYear()-1,hiwatObject:{HIWATDate:"",HIWATDateLevel:"",ModelDayPartation:"",LayerListPredictionAccumulated:[]}}},mutations:{setBasin:function(e,t){e.basin=t},setIndices:function(e,t){e.indices=t},setPeriodicity:function(e,t){e.periodicity=t},setYear:function(e,t){e.year=t},setHIWATDateLevel:function(e,t){e.HIWATDateLevel=t},setHIWATDate:function(e,t){var a=new Date(t.getTime());a.setDate(a.getDate()+1);var n=a.getFullYear(),r=String(a.getMonth()+1).padStart(2,"0"),i=String(a.getDate()).padStart(2,"0"),c="".concat(n,"-").concat(r,"-").concat(i);e.HIWATDateLevel=c,e.HIWATDate=t}},actions:{SlicingThreddsCatalog:function(e,t){return Object(ee["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,it(t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))()},ChartDataCurrent:function(e,t){return Object(ee["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ot(t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))()},getLatestHIWATInfo:function(){return Object(ee["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,lt();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))()}},modules:{}}),pt=a("1250"),ht=(a("d9b6"),Object(n["j"])(Qe));ht.use(dt),ht.use(pt["a"]),ht.mount("#app")},c9b8:function(e,t,a){e.exports=a.p+"static/hiwatnp/images/flash.svg"},e174:function(e,t,a){e.exports=a.p+"static/hiwatnp/images/rainy.svg"},e80e:function(e,t,a){},ec2f:function(e,t,a){},f733:function(e,t,a){"use strict";a("a271")},fee8:function(e,t,a){}}]);
//# sourceMappingURL=chunk-common.82daeea598b4ba0a86ce.js.map