(window.webpackJsonpVKStickers=window.webpackJsonpVKStickers||[]).push([[0],{150:function(e,t,a){e.exports=a(237)},228:function(e,t,a){},237:function(e,t,a){"use strict";a.r(t);a(151),a(177),a(179),a(180),a(182),a(183),a(184),a(185),a(186),a(187),a(188),a(189),a(191),a(192),a(193),a(194),a(195),a(196),a(197),a(198),a(199),a(200),a(202),a(203),a(204),a(205),a(206),a(207),a(208),a(209),a(210),a(211),a(212),a(213),a(214),a(215),a(216),a(217),a(218),a(219);var r=a(0),n=a.n(r),i=a(42),s=a.n(i),c=a(17),o=a.n(c),l=a(35),p=a.n(l),h=a(46),u=a(47),d=a(26),m=a(27),k=a(29),b=a(28),f=a(31),_=a(30),v=(a(43),a(228),a(3)),g=a(66),y=a.n(g),E=a(98),O=a.n(E),C=a(99),S=a.n(C),x=a(100),w=a.n(x),j=a(101),P=a.n(j),T=a(102),A=a.n(T),I=a(103),z=a.n(I),W=function(e){function t(){return Object(d.a)(this,t),Object(k.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return"small"===this.props.mode?n.a.createElement("img",{width:64,height:64,src:this.props.src,id:this.props.id,onClick:this.props.onClick}):"medium"===this.props.mode?n.a.createElement(v.a,{mode:"app",size:78,src:this.props.src}):"big"===this.props.mode&&n.a.createElement(v.a,{size:96},this.props.hasOwnProperty("children")?n.a.createElement("div",{className:"centered",style:{borderRadius:48,width:"100%",height:"100%",color:"#7f8285",fontSize:76},onClick:this.props.onClick},this.props.children):n.a.createElement("img",{width:96,height:96,src:this.props.src,id:this.props.id,onClick:this.props.onClick}))}}]),t}(r.PureComponent),V=function(e){function t(){return Object(d.a)(this,t),Object(k.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return"cell"===this.props.mode?n.a.createElement(v.c,{id:this.props.id,onClick:this.props.onClick,before:n.a.createElement(W,{mode:"medium",src:this.props.src}),description:this.props.author,size:"l",bottomContent:n.a.createElement(v.b,{mode:this.props.hasOwnProperty("mode2")?this.props.mode2:"commerce"},this.props.hasOwnProperty("price")?this.props.price+" \u0440\u0443\u0431.":this.props.button)},this.props.title):"img"===this.props.mode&&n.a.createElement(W,{mode:"big",src:this.props.src,id:this.props.id,onClick:this.props.onClick})}}]),t}(r.PureComponent),K=function(e){function t(){return Object(d.a)(this,t),Object(k.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{style:{color:"#7f8285"},dangerouslySetInnerHTML:{__html:this.props.children.replace("\n","<br/>")}})}}]),t}(r.PureComponent),D=function(e){function t(){return Object(d.a)(this,t),Object(k.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return"small"===this.props.mode?n.a.createElement("div",{style:{minWidth:"64px",maxWidth:"296px",display:"grid",gridTemplateColumns:"repeat(auto-fill, 64px)",gridGap:"10px"}},this.props.children):"big"===this.props.mode&&n.a.createElement("div",{style:{minWidth:"96px",maxWidth:"320px",display:"grid",gridTemplateColumns:"repeat(auto-fill, 96px)",gridGap:"10px"}},this.props.children)}}]),t}(r.PureComponent),N=function(e){function t(){return Object(d.a)(this,t),Object(k.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("input",{type:"file",ref:function(t){e.props.hasOwnProperty("src")?e.upload_preview=t:e.upload_stickers=t},style:{display:"none"},onChange:this.props.onChange}),n.a.createElement(v.c,{onClick:function(){e.props.hasOwnProperty("src")?e.upload_preview.click():e.upload_stickers.click()},before:this.props.hasOwnProperty("src")&&n.a.createElement(W,{mode:"medium",src:this.props.src}),multiline:!0,description:this.props.description},this.props.title))}}]),t}(r.PureComponent);function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var R="",U="",G=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(k.a)(this,Object(b.a)(t).call(this,e))).back=function(){var e=a.state.activeStory,t="tab_main"===e?a.state.activePanelShop:"tab_other"===e?a.state.activePanelOther:"",r="tab_main"===e?"activePanelShop":"tab_other"===e?"activePanelOther":"";if("tab_main"===e&&"main"===t||"tab_other"===e&&"profile"===t)o.a.send("VKWebAppClose",{status:"success"});else{var n="tab_main"===e?a.state.historyShop:"tab_other"===e?a.state.historyOther:"";if(1===n.length)o.a.send("VKWebAppClose",{status:"success"});else if(n.length>1){n.pop();var i=n[n.length-1];a.setState(Object(u.a)({},r,i))}}},a.state={popout:n.a.createElement(v.r,null),activeStory:"tab_main",slideTabIndex:0,activePanelShop:"main",historyShop:["main"],activePanelOther:"profile",historyOther:["profile"],createStickerContextOpened:!1,balance_manipulation:!1,stickers:[{title:"\u0411\u0438\u0441\u043a\u0432\u0438\u0442",author:"\u0418\u0440\u0438\u043d\u0430 \u0411\u0440\u044d\u0434\u043a\u044d\u0442",preview:"https://vk.com/sticker/2-533-cover-140b-0",price:1,description:"\u0425\u0432\u043e\u0441\u0442 \u0442\u043e\u0440\u0447\u043a\u043e\u043c, \u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u0443\u0448\u043a\u0438 \u2014\n\u0411\u0435\u0440\u0435\u0433\u0438\u0442\u0435\u0441\u044c, \u043f\u0435\u0447\u0435\u043d\u044e\u0448\u043a\u0438!",stickers:["https://vk.com/sticker/1-18945-64","https://vk.com/sticker/1-18946-64","https://vk.com/sticker/1-18947-64","https://vk.com/sticker/1-18948-64","https://vk.com/sticker/1-18949-64","https://vk.com/sticker/1-18950-64","https://vk.com/sticker/1-18951-64","https://vk.com/sticker/1-18952-64"]},{title:"\u0418\u043b\u0430\u0439",author:"\u0418\u0440\u0438\u043d\u0430 \u0411\u0440\u044d\u0434\u043a\u044d\u0442",preview:"https://vk.com/sticker/1-18781-128",price:1,description:"\u0412\u044b\u0448\u0435\u043b \u043c\u0438\u0448\u043a\u0430 \u0438\u0437 \u0431\u0435\u0440\u043b\u043e\u0433\u0438 \u2014 \u043f\u043e\u0441\u0435\u043b\u0438\u043b\u0441\u044f \u0432 \u0434\u0438\u0430\u043b\u043e\u0433\u0435.",stickers:["https://vk.com/sticker/1-18781-128","https://vk.com/sticker/1-18782-128","https://vk.com/sticker/1-18783-128","https://vk.com/sticker/1-18784-128","https://vk.com/sticker/1-18785-128","https://vk.com/sticker/1-18786-128","https://vk.com/sticker/1-18787-128","https://vk.com/sticker/1-18788-128"]}],stickers_panel:null,sticker_info:{title:"",author:"",preview:"",price:0,description:"",stickers:[]},user:{first_name:"",last_name:"",photo_100:"",stickers:[],balance:0,stickers_history:[]},create_panel:{title:"",preview:"",price:1,description:"",stickers:[]}},a.onStoryChange=a.onStoryChange.bind(Object(f.a)(a)),a.onChange=a.onChange.bind(Object(f.a)(a)),a.uploadFile=a.uploadFile.bind(Object(f.a)(a)),a.toggleCreateStickerContext=a.toggleCreateStickerContext.bind(Object(f.a)(a)),a.install=a.install.bind(Object(f.a)(a)),a.componentDidMount=a.componentDidMount.bind(Object(f.a)(a)),a.initializeApp=a.initializeApp.bind(Object(f.a)(a)),a.back=a.back.bind(Object(f.a)(a)),a.go=a.go.bind(Object(f.a)(a)),a}return Object(_.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("popstate",(function(t){t.preventDefault(),e.back(t)})),o.a.subscribe(function(){var t=Object(h.a)(p.a.mark((function t(a){var r,n,i,s,c,o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=a.detail,n=r.type,i=r.data,console.log(n,i),"VKWebAppUpdateConfig"!==n){t.next=8;break}(s=document.createAttribute("scheme")).value=i.scheme?i.scheme:"client_light",document.body.attributes.setNamedItem(s),t.next=22;break;case 8:if("VKWebAppGetUserInfoResult"!==n){t.next=22;break}return t.next=11,e.get("users.auth");case 11:if(!t.sent.access){t.next=22;break}return t.next=15,e.get("users.get");case 15:return c=t.sent,i=M({},i,{},c.user),t.next=19,e.get("stickers.get");case 19:o=t.sent,e.setState({popout:null,user:i,stickers:o.stickers}),e.initializeApp();case 22:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),o.a.send("VKWebAppGetUserInfo")}},{key:"initializeApp",value:function(){for(var e=this,t=[],a=this.state.stickers,r=0;r<a.length;r++){for(var i=[],s=0;s<a[r].stickers.length;s++)i.push(n.a.createElement(W,{mode:"small",src:a[r].stickers[s]}));a[r].stickers=i,a[r].id=r,t.push(n.a.createElement(V,{title:a[r].title,author:a[r].author,src:a[r].preview,price:a[r].price,id:"sticker_"+r,mode:"cell",onClick:function(t){var r=parseInt(t.currentTarget.id.split("_")[1]);e.setState({sticker_info:a[r]}),e.go("sticker_info")}}))}this.setState({stickers_panel:t});var c=[];for(r=0;r<this.state.user.stickers.length;r++){var o=this.state.stickers[r];c.push(n.a.createElement(V,{src:o.preview,id:"user_sticker_"+r,mode:"img",onClick:function(t){var a=parseInt(t.currentTarget.id.split("_")[2]);e.setState({activeStory:"tab_main",sticker_info:e.state.stickers[a]}),setTimeout((function(){e.go("sticker_info")}),50)}}))}this.setState({user_stickers:c});var l=[];for(r=0;r<this.state.user.stickers_history.length;r++){o=this.state.user.stickers_history[r];l.push(n.a.createElement(V,{title:o.title,src:o.preview,mode2:o.hasOwnProperty("added")?o.added?"commerce":"destructive":"primary",button:o.hasOwnProperty("added")?o.added?"\u041e\u0434\u043e\u0431\u0440\u0435\u043d\u043e":"\u041e\u0442\u043a\u043b\u043e\u043d\u0435\u043d\u043e":"\u041d\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0435",mode:"cell"}))}this.setState({user_stickers_history:l})}},{key:"go",value:function(e){var t,a=this.state.activeStory,r="tab_main"===a?"activePanelShop":"tab_other"===a?"activePanelOther":"",n="tab_main"===a?this.state.historyShop:"tab_other"===a?this.state.historyOther:"";n.push(e);var i="tab_main"===a?"historyShop":"tab_other"===a?"historyOther":"";window.history.pushState({panel:e},"Title"),this.setState((t={},Object(u.a)(t,r,e),Object(u.a)(t,i,n),t))}},{key:"onStoryChange",value:function(e){var t=e.currentTarget.dataset.story;this.state.activeStory===t&&("tab_main"===t&&"main"!==this.state.activePanelShop?this.back():"tab_other"===t&&"profile"!==this.state.activePanelOther&&this.back()),this.setState({activeStory:t})}},{key:"onChange",value:function(e){var t=e.currentTarget,a=t.name,r=t.value,n=this.state.create_panel;n[a]=r,this.setState({create_panel:n})}},{key:"uploadFile",value:function(e,t){var a=(t.target||window.event.srcElement).files,r=this;if(FileReader&&a&&a.length){var i=new FileReader;i.onload=function(){var t=i.result,s=r.state.create_panel;if(a[a.length-1].type.includes("image"))if("upload_sticker_img"===e){var c=s.hasOwnProperty("uploaded_stickers_img")?s.uploaded_stickers_img:[];c.push(n.a.createElement(W,{mode:"small",id:"uploaded_sticker_"+c.length,src:t,onClick:function(e){var t=parseInt(e.currentTarget.id.split("_")[2]),a=r.state.create_panel;delete a.uploaded_stickers_img[t],r.setState({create_panel:a})}})),c.filter((function(e){return void 0!==e})).length<100&&(s.uploaded_stickers_img=c,r.setState({create_panel:s}))}else s[e]=t,r.setState({create_panel:s});else s[e]=null,r.setState({create_panel:s})},i.readAsDataURL(a[0])}}},{key:"toggleCreateStickerContext",value:function(){this.setState({createStickerContextOpened:!this.state.createStickerContextOpened})}},{key:"urlToBase64",value:function(e,t){var a=new Image;a.crossOrigin="Anonymous",a.onload=function(){var e,r=document.createElement("CANVAS"),n=r.getContext("2d");r.height=a.height,r.width=a.width,n.drawImage(a,0,0),e=r.toDataURL("image/png"),t(e),r=null},a.src=e}},{key:"base64ToMultipart",value:function(e,t){fetch(e).then((function(e){return e.blob()})).then((function(e){var a=new FormData,r=new File([e],"sticker.png");a.append("file",r),t(a)}))}},{key:"install",value:function(){var e=Object(h.a)(p.a.mark((function e(t){var a,r,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.sendPromise("VKWebAppGetAuthToken",{app_id:7363654,scope:"docs"});case 3:return R=(R=e.sent).access_token,e.next=7,o.a.sendPromise("VKWebAppCallAPIMethod",{method:"docs.getUploadServer",request_id:"upload_server",params:{group_id:"193538803",v:"5.103",access_token:R}});case 7:for(r in U=(U=e.sent).response.upload_url,a=this.state.stickers[t].stickers)n=a[r].props.src,this.urlToBase64(n,function(e){this.base64ToMultipart(e,function(e){try{fetch("https://cors-anywhere.herokuapp.com/"+U,{method:"POST",body:e}).then((function(e){return e.json()})).then(function(){var e=Object(h.a)(p.a.mark((function e(t){var a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.file,e.next=3,o.a.sendPromise("VKWebAppCallAPIMethod",{method:"docs.save",request_id:"save_doc",params:{file:a,v:"5.103",access_token:R}});case 3:return r=e.sent,e.next=6,o.a.sendPromise("VKWebAppCallAPIMethod",{method:"docs.add",request_id:"add_doc",params:{owner_id:r.response.graffiti.owner_id,doc_id:r.response.graffiti.id,access_key:r.response.graffiti.access_key,v:"5.103",access_token:R}});case 6:e.sent;case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}catch(t){console.log(t)}}.bind(this))}.bind(this));e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("error",e.t0);case 16:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(t){return e.apply(this,arguments)}}()},{key:"get",value:function(){var e=Object(h.a)(p.a.mark((function e(t,a){var r,n,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n in void 0!==a&&null!==a||(a={}),a.url=window.location.search.replace("?",""),r=[],a)a.hasOwnProperty(n)&&r.push(encodeURIComponent(n)+"="+encodeURIComponent(a[n]));return a=r.join("&"),e.next=7,fetch("https://ih1705413.vds.myihor.ru:4040/"+t+"?"+a,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return e}));case 7:return i=e.sent,console.log(i),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return n.a.createElement(v.e,{activeStory:this.state.activeStory,tabbar:n.a.createElement(v.t,null,n.a.createElement(v.u,{onClick:this.onStoryChange,selected:"tab_main"===this.state.activeStory,"data-story":"tab_main"},n.a.createElement(P.a,null)),n.a.createElement(v.u,{onClick:this.onStoryChange,selected:"tab_other"===this.state.activeStory,"data-story":"tab_other"},n.a.createElement(A.a,null)))},n.a.createElement(v.v,{id:"tab_main",activePanel:this.state.activePanelShop,popout:this.state.popout,history:this.state.historyShop,onSwipeBack:this.back},n.a.createElement(v.l,{id:"main",separator:!1},n.a.createElement(v.m,null,"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"),n.a.createElement(v.s,null),n.a.createElement(v.g,{slideWidth:"100%",style:{height:"100%",margin:"8px"},slideIndex:this.state.slideTabIndex,onChange:function(t){e.setState({slideTabIndex:t})}},n.a.createElement("div",null,n.a.createElement("div",{className:"centered",style:{fontSize:"medium"}},n.a.createElement("b",null,"\u041d\u043e\u0432\u0438\u043d\u043a\u0438")),n.a.createElement(v.k,{style:{marginTop:"15px"}},this.state.stickers_panel)),n.a.createElement("div",null,n.a.createElement("div",{className:"centered",style:{fontSize:"medium"}},n.a.createElement("b",null,"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435")),n.a.createElement(v.k,{style:{marginTop:"15px"}},this.state.stickers_panel)))),n.a.createElement(v.l,{id:"sticker_info"},n.a.createElement(v.m,null,"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"),n.a.createElement(v.d,null,n.a.createElement(v.c,{before:n.a.createElement(W,{mode:"medium",src:this.state.sticker_info.preview}),description:this.state.sticker_info.author},this.state.sticker_info.title),n.a.createElement("br",null),n.a.createElement(K,null,this.state.sticker_info.description),n.a.createElement("div",{style:{marginTop:"10px"}},this.state.user.stickers.indexOf(this.state.sticker_info.id)>=0?n.a.createElement("div",{style:{display:"flex"}},n.a.createElement(v.b,{onClick:function(){},size:"xl",stretched:!0},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c")," ",n.a.createElement(v.b,{style:{marginLeft:"8px"},mode:"secondary",size:"xl",stretched:!0},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c")):n.a.createElement("div",{style:{display:"flex"}},n.a.createElement(v.b,{size:"xl",stretched:!0,mode:"commerce"},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0437\u0430 "+this.state.sticker_info.price+" \u0440\u0443\u0431."))),n.a.createElement("div",{className:"centered",style:{marginTop:"18px"}},n.a.createElement(D,{mode:"small"},this.state.sticker_info.stickers))))),n.a.createElement(v.v,{id:"tab_other",activePanel:this.state.activePanelOther,popout:this.state.popout,history:this.state.historyOther,onSwipeBack:this.back,header:!1},n.a.createElement(v.l,{id:"profile"},n.a.createElement(v.p,null,n.a.createElement(v.n,null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c")),n.a.createElement(v.d,null,n.a.createElement("div",{className:"centered"},n.a.createElement(v.a,{src:this.state.user.photo_100,size:100})),n.a.createElement("br",null),n.a.createElement("div",{className:"centered",style:{fontSize:"large"}},this.state.user.first_name+" "+this.state.user.last_name),n.a.createElement("br",null),n.a.createElement(v.h,{separator:"hide"},n.a.createElement(v.c,{asideContent:n.a.createElement(y.a,{style:{transform:"rotate(".concat(this.state.balance_manipulation?"180deg":"0",")")}}),onClick:function(){e.setState({balance_manipulation:!e.state.balance_manipulation})},indicator:this.state.user.balance+" \u20bd"},"\u0412\u0430\u0448 \u0431\u0430\u043b\u0430\u043d\u0441"),this.state.balance_manipulation&&n.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"8px"}},n.a.createElement(v.b,{size:"l",before:n.a.createElement(O.a,null)},"\u041f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c"),n.a.createElement(v.b,{size:"l",before:n.a.createElement(S.a,null),mode:"secondary",style:{marginLeft:8}},"\u0412\u044b\u0432\u0435\u0441\u0442\u0438"))),n.a.createElement(v.h,{separator:"hide",header:n.a.createElement(v.i,{mode:"primary"},"\u0412\u0430\u0448\u0438 \u0441\u0442\u0438\u043a\u0435\u0440\u044b")},n.a.createElement("div",{className:"centered",style:{marginTop:"18px"}},n.a.createElement(D,{mode:"big"},this.state.user_stickers,n.a.createElement(W,{mode:"big",onClick:function(){e.go("create")}},"+")))))),n.a.createElement(v.l,{id:"create"},n.a.createElement(v.p,null,n.a.createElement(v.n,{aside:n.a.createElement(y.a,{style:{transform:"rotate(".concat(this.state.createStickerContextOpened?"180deg":"0",")")}}),onClick:function(){e.toggleCreateStickerContext()}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0438\u043a\u0435\u0440\u044b")),n.a.createElement(v.o,{opened:this.state.createStickerContextOpened,onClose:function(){e.toggleCreateStickerContext()}},n.a.createElement(v.k,null,n.a.createElement(v.c,{before:n.a.createElement(w.a,null),onClick:function(){e.toggleCreateStickerContext(),e.go("stickers_history")}},"\u0418\u0441\u0442\u043e\u0440\u0438\u044f"))),n.a.createElement(v.f,null,n.a.createElement(v.j,{type:"text",top:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0442\u0438\u043a\u0435\u0440-\u043f\u0430\u043a\u0430",name:"title",value:this.state.create_panel.title,onChange:this.onChange,status:this.state.create_panel.title&&this.state.create_panel.title.length<=20?"valid":"error",bottom:this.state.create_panel.title?this.state.create_panel.title.length<=20?"":"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 - 20":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),n.a.createElement(v.j,{type:"text",top:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",name:"description",value:this.state.create_panel.description,onChange:this.onChange,status:this.state.create_panel.description&&this.state.create_panel.description.length<=100?"valid":"error",bottom:this.state.create_panel.description?this.state.create_panel.description.length<=100?"":"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 - 100":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),n.a.createElement(v.j,{type:"number",top:"\u0426\u0435\u043d\u0430",name:"price",value:this.state.create_panel.price,onChange:this.onChange,status:this.state.create_panel.price>0&&this.state.create_panel.price<=1e3?this.state.create_panel.price.toString().includes(".")?"error":"valid":"error",bottom:this.state.create_panel.price>0?this.state.create_panel.price<=1e3?this.state.create_panel.price.toString().includes(".")?"\u0427\u0438\u0441\u043b\u043e \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0446\u0435\u043b\u044b\u043c":"":"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0446\u0435\u043d\u0430- 1 000 \u0440\u0443\u0431.":"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0446\u0435\u043d\u0430 - 1 \u0440\u0443\u0431."}),n.a.createElement(N,{src:this.state.create_panel.upload_preview_img&&this.state.create_panel.upload_preview_img,title:"\u041f\u0440\u0435\u0432\u044c\u044e",description:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e \u0441\u0442\u0438\u043a\u0435\u0440-\u043f\u0430\u043a\u0430 (128\xd7128px)",onChange:function(t){e.uploadFile("upload_preview_img",t)}}),n.a.createElement(N,{title:"\u0421\u0442\u0438\u043a\u0435\u0440\u044b",description:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0432\u0441\u0435 \u0441\u0442\u0438\u043a\u0435\u0440\u044b (\u043c\u0438\u043d\u0438\u043c\u0443\u043c - 4), \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c\u0441\u044f \u0432 \u043f\u0430\u043a\u0435 (128\xd7128px)",onChange:function(t){e.uploadFile("upload_sticker_img",t)}}),n.a.createElement("div",{className:"centered",style:{paddingBottom:"16px"}},n.a.createElement("div",{style:{minWidth:"64px",maxWidth:"296px",display:"grid",gridTemplateColumns:"repeat(auto-fill, 64px)",gridGap:"10px"}},this.state.create_panel.uploaded_stickers_img)),n.a.createElement(v.b,{size:"xl",disabled:!this.state.create_panel.title||(!this.state.create_panel.description||(!(this.state.create_panel.price>0)||(!(this.state.create_panel.title.length<=20)||(!(this.state.create_panel.description.length<=100)||(!(this.state.create_panel.price<=1e3)||(!!this.state.create_panel.price.toString().includes(".")||(!this.state.create_panel.upload_preview_img||(!this.state.create_panel.uploaded_stickers_img||!(this.state.create_panel.uploaded_stickers_img.filter((function(e){return void 0!==e})).length>=4)))))))))},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"))),n.a.createElement(v.l,{id:"stickers_history"},n.a.createElement(v.p,null,n.a.createElement(v.n,null,"\u0418\u0441\u0442\u043e\u0440\u0438\u044f")),this.state.user_stickers_history&&this.state.user_stickers_history.length>0?n.a.createElement(v.d,null,n.a.createElement(v.k,null,this.state.user_stickers_history)):n.a.createElement(v.q,{icon:n.a.createElement(z.a,null),header:"\u041f\u0443\u0441\u0442\u043e",stretched:!0},"\u0412\u044b \u043f\u043e\u043a\u0430 \u0435\u0449\u0435 \u043d\u0435 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u043b\u0438 \u0441\u0442\u0438\u043a\u0435\u0440\u044b"))))}}]),t}(n.a.Component);o.a.send("VKWebAppInit"),s.a.render(n.a.createElement(G,null),document.getElementById("root"))}},[[150,1,2]]]);
//# sourceMappingURL=main.dfea0ed7.chunk.js.map