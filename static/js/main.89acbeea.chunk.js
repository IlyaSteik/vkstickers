(window.webpackJsonpVKStickers=window.webpackJsonpVKStickers||[]).push([[0],{150:function(e,t,a){e.exports=a(237)},228:function(e,t,a){},237:function(e,t,a){"use strict";a.r(t);a(151),a(177),a(179),a(180),a(182),a(183),a(184),a(185),a(186),a(187),a(188),a(189),a(191),a(192),a(193),a(194),a(195),a(196),a(197),a(198),a(199),a(200),a(202),a(203),a(204),a(205),a(206),a(207),a(208),a(209),a(210),a(211),a(212),a(213),a(214),a(215),a(216),a(217),a(218),a(219);var i=a(0),r=a.n(i),s=a(41),n=a.n(s),c=a(22),l=a.n(c),o=a(63),p=a.n(o),h=a(87),d=a(49),m=a(26),u=a(27),k=a(29),b=a(28),_=a(31),v=a(30),g=(a(42),a(228),a(3)),f=a(97),y=a.n(f),E=a(98),C=a.n(E),O=a(99),S=a.n(O),x=a(100),w=a.n(x),j=a(101),P=a.n(j),T=a(102),A=a.n(T),z=a(103),I=a.n(z),W=function(e){function t(){return Object(m.a)(this,t),Object(k.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return"small"===this.props.mode?r.a.createElement("img",{width:64,height:64,src:this.props.src,id:this.props.id,onClick:this.props.onClick}):"medium"===this.props.mode?r.a.createElement(g.a,{mode:"app",size:78,src:this.props.src}):"big"===this.props.mode&&r.a.createElement(g.a,{size:96},this.props.hasOwnProperty("children")?r.a.createElement("div",{className:"centered",style:{borderRadius:48,width:"100%",height:"100%",color:"#7f8285",fontSize:76},onClick:this.props.onClick},this.props.children):r.a.createElement("img",{width:96,height:96,src:this.props.src,id:this.props.id,onClick:this.props.onClick}))}}]),t}(i.PureComponent),V=function(e){function t(){return Object(m.a)(this,t),Object(k.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return"cell"===this.props.mode?r.a.createElement(g.c,{id:this.props.id,onClick:this.props.onClick,before:r.a.createElement(W,{mode:"medium",src:this.props.src}),description:this.props.author,size:"l",bottomContent:r.a.createElement(g.b,{mode:this.props.hasOwnProperty("mode2")?this.props.mode2:"commerce"},this.props.hasOwnProperty("price")?this.props.price+" \u0440\u0443\u0431.":this.props.button)},this.props.title):"img"===this.props.mode&&r.a.createElement(W,{mode:"big",src:this.props.src,id:this.props.id,onClick:this.props.onClick})}}]),t}(i.PureComponent),K=function(e){function t(){return Object(m.a)(this,t),Object(k.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{color:"#7f8285"},dangerouslySetInnerHTML:{__html:this.props.children.replace("\n","<br/>")}})}}]),t}(i.PureComponent),N=function(e){function t(){return Object(m.a)(this,t),Object(k.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return"small"===this.props.mode?r.a.createElement("div",{style:{minWidth:"64px",maxWidth:"296px",display:"grid",gridTemplateColumns:"repeat(auto-fill, 64px)",gridGap:"10px"}},this.props.children):"big"===this.props.mode&&r.a.createElement("div",{style:{minWidth:"96px",maxWidth:"320px",display:"grid",gridTemplateColumns:"repeat(auto-fill, 96px)",gridGap:"10px"}},this.props.children)}}]),t}(i.PureComponent),F=function(e){function t(){return Object(m.a)(this,t),Object(k.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("input",{type:"file",ref:function(t){e.props.hasOwnProperty("src")?e.upload_preview=t:e.upload_stickers=t},style:{display:"none"},onChange:this.props.onChange}),r.a.createElement(g.c,{onClick:function(){e.props.hasOwnProperty("src")?e.upload_preview.click():e.upload_stickers.click()},before:this.props.hasOwnProperty("src")&&r.a.createElement(W,{mode:"medium",src:this.props.src}),multiline:!0,description:this.props.description},this.props.title))}}]),t}(i.PureComponent),D="",M="",B=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(k.a)(this,Object(b.a)(t).call(this,e))).back=function(){var e=a.state.activeStory,t="tab_main"===e?a.state.activePanelShop:"tab_other"===e?a.state.activePanelOther:"",i="tab_main"===e?"activePanelShop":"tab_other"===e?"activePanelOther":"";if("tab_main"===e&&"main"===t||"tab_other"===e&&"profile"===t)l.a.send("VKWebAppClose",{status:"success"});else{var r="tab_main"===e?a.state.historyShop:"tab_other"===e?a.state.historyOther:"";if(1===r.length)l.a.send("VKWebAppClose",{status:"success"});else if(r.length>1){r.pop();var s=r[r.length-1];a.setState(Object(d.a)({},i,s))}}},a.state={popout:r.a.createElement(g.r,null),activeStory:"tab_main",slideTabIndex:0,activePanelShop:"main",historyShop:["main"],activePanelOther:"profile",historyOther:["profile"],createStickerContextOpened:!1,balance_manipulation:!1,stickers:[{title:"\u0411\u0438\u0441\u043a\u0432\u0438\u0442",author:"\u0418\u0440\u0438\u043d\u0430 \u0411\u0440\u044d\u0434\u043a\u044d\u0442",preview:"https://vk.com/sticker/2-533-cover-140b-0",price:1,description:"\u0425\u0432\u043e\u0441\u0442 \u0442\u043e\u0440\u0447\u043a\u043e\u043c, \u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u0443\u0448\u043a\u0438 \u2014\n\u0411\u0435\u0440\u0435\u0433\u0438\u0442\u0435\u0441\u044c, \u043f\u0435\u0447\u0435\u043d\u044e\u0448\u043a\u0438!",stickers:["https://vk.com/sticker/1-18945-64","https://vk.com/sticker/1-18946-64","https://vk.com/sticker/1-18947-64","https://vk.com/sticker/1-18948-64","https://vk.com/sticker/1-18949-64","https://vk.com/sticker/1-18950-64","https://vk.com/sticker/1-18951-64","https://vk.com/sticker/1-18952-64"]},{title:"\u0418\u043b\u0430\u0439",author:"\u0418\u0440\u0438\u043d\u0430 \u0411\u0440\u044d\u0434\u043a\u044d\u0442",preview:"https://vk.com/sticker/1-18781-128",price:1,description:"\u0412\u044b\u0448\u0435\u043b \u043c\u0438\u0448\u043a\u0430 \u0438\u0437 \u0431\u0435\u0440\u043b\u043e\u0433\u0438 \u2014 \u043f\u043e\u0441\u0435\u043b\u0438\u043b\u0441\u044f \u0432 \u0434\u0438\u0430\u043b\u043e\u0433\u0435.",stickers:["https://vk.com/sticker/1-18781-128","https://vk.com/sticker/1-18782-128","https://vk.com/sticker/1-18783-128","https://vk.com/sticker/1-18784-128","https://vk.com/sticker/1-18785-128","https://vk.com/sticker/1-18786-128","https://vk.com/sticker/1-18787-128","https://vk.com/sticker/1-18788-128"]}],stickers_panel:null,sticker_info:{title:"",author:"",preview:"",price:0,description:"",stickers:[]},user:{first_name:"",last_name:"",photo_100:"",stickers:[],balance:0,stickers_history:[]},create_panel:{title:"",preview:"",price:1,description:"",stickers:[]}},a.onStoryChange=a.onStoryChange.bind(Object(_.a)(a)),a.onChange=a.onChange.bind(Object(_.a)(a)),a.uploadFile=a.uploadFile.bind(Object(_.a)(a)),a.toggleCreateStickerContext=a.toggleCreateStickerContext.bind(Object(_.a)(a)),a.install=a.install.bind(Object(_.a)(a)),a.componentDidMount=a.componentDidMount.bind(Object(_.a)(a)),a.initializeApp=a.initializeApp.bind(Object(_.a)(a)),a.back=a.back.bind(Object(_.a)(a)),a.go=a.go.bind(Object(_.a)(a)),a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("popstate",(function(t){t.preventDefault(),e.back(t)})),l.a.subscribe((function(t){var a=t.detail,i=a.type,r=a.data;if(console.log(i,r),"VKWebAppUpdateConfig"===i){var s=document.createAttribute("scheme");s.value=r.scheme?r.scheme:"client_light",document.body.attributes.setNamedItem(s)}else"VKWebAppGetUserInfoResult"===i&&(r.stickers=[0],r.history=[],r.balance=0,r.stickers_history=[{title:"\u0418\u043b\u0430\u0439",preview:"https://vk.com/sticker/1-18781-128",added:!1},{title:"\u0411\u0438\u0441\u043a\u0432\u0438\u0442",author:"\u0418\u043b\u044c\u044f \u0423\u043b\u044c\u044f\u043d\u043e\u0432",preview:"https://vk.com/sticker/2-533-cover-140b-0"}],e.setState({popout:null,user:r}),e.initializeApp())})),l.a.send("VKWebAppGetUserInfo")}},{key:"initializeApp",value:function(){for(var e=this,t=[],a=this.state.stickers,i=0;i<a.length;i++){for(var s=[],n=0;n<a[i].stickers.length;n++)s.push(r.a.createElement(W,{mode:"small",src:a[i].stickers[n]}));a[i].stickers=s,a[i].id=i,t.push(r.a.createElement(V,{title:a[i].title,author:a[i].author,src:a[i].preview,price:a[i].price,id:"sticker_"+i,mode:"cell",onClick:function(t){var i=parseInt(t.currentTarget.id.split("_")[1]);e.setState({sticker_info:a[i]}),e.go("sticker_info")}}))}this.setState({stickers_panel:t});var c=[];for(i=0;i<this.state.user.stickers.length;i++){var l=this.state.stickers[i];c.push(r.a.createElement(V,{src:l.preview,id:"user_sticker_"+i,mode:"img",onClick:function(t){var a=parseInt(t.currentTarget.id.split("_")[2]);e.setState({activeStory:"tab_main",sticker_info:e.state.stickers[a]}),setTimeout((function(){e.go("sticker_info")}),50)}}))}this.setState({user_stickers:c});var o=[];for(i=0;i<this.state.user.stickers_history.length;i++){l=this.state.user.stickers_history[i];o.push(r.a.createElement(V,{title:l.title,src:l.preview,mode2:l.hasOwnProperty("added")?l.added?"commerce":"destructive":"primary",button:l.hasOwnProperty("added")?l.added?"\u041e\u0434\u043e\u0431\u0440\u0435\u043d\u043e":"\u041e\u0442\u043a\u043b\u043e\u043d\u0435\u043d\u043e":"\u041d\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0435",mode:"cell"}))}this.setState({user_stickers_history:o})}},{key:"go",value:function(e){var t,a=this.state.activeStory,i="tab_main"===a?"activePanelShop":"tab_other"===a?"activePanelOther":"",r="tab_main"===a?this.state.historyShop:"tab_other"===a?this.state.historyOther:"";r.push(e);var s="tab_main"===a?"historyShop":"tab_other"===a?"historyOther":"";window.history.pushState({panel:e},"Title"),this.setState((t={},Object(d.a)(t,i,e),Object(d.a)(t,s,r),t))}},{key:"onStoryChange",value:function(e){var t=e.currentTarget.dataset.story;this.state.activeStory===t&&("tab_main"===t&&"main"!==this.state.activePanelShop?this.back():"tab_other"===t&&"profile"!==this.state.activePanelOther&&this.back()),this.setState({activeStory:t})}},{key:"onChange",value:function(e){var t=e.currentTarget,a=t.name,i=t.value,r=this.state.create_panel;r[a]=i,this.setState({create_panel:r})}},{key:"uploadFile",value:function(e,t){var a=(t.target||window.event.srcElement).files,i=this;if(FileReader&&a&&a.length){var s=new FileReader;s.onload=function(){var t=s.result,n=i.state.create_panel;if(a[a.length-1].type.includes("image"))if("upload_sticker_img"===e){var c=n.hasOwnProperty("uploaded_stickers_img")?n.uploaded_stickers_img:[];c.push(r.a.createElement(W,{mode:"small",id:"uploaded_sticker_"+c.length,src:t,onClick:function(e){var t=parseInt(e.currentTarget.id.split("_")[2]),a=i.state.create_panel;delete a.uploaded_stickers_img[t],i.setState({create_panel:a})}})),c.filter((function(e){return void 0!==e})).length<100&&(n.uploaded_stickers_img=c,i.setState({create_panel:n}))}else n[e]=t,i.setState({create_panel:n});else n[e]=null,i.setState({create_panel:n})},s.readAsDataURL(a[0])}}},{key:"toggleCreateStickerContext",value:function(){this.setState({createStickerContextOpened:!this.state.createStickerContextOpened})}},{key:"urlToBase64",value:function(e,t){var a=new Image;a.crossOrigin="Anonymous",a.onload=function(){var e,i=document.createElement("CANVAS"),r=i.getContext("2d");i.height=a.height,i.width=a.width,r.drawImage(a,0,0),e=i.toDataURL("image/png"),t(e),i=null},a.src=e}},{key:"base64ToMultipart",value:function(e,t){fetch(e).then((function(e){return e.blob()})).then((function(e){var a=new FormData,i=new File([e],"sticker.png");a.append("file",i),t(a)}))}},{key:"install",value:function(){var e=Object(h.a)(p.a.mark((function e(t){var a,i,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.sendPromise("VKWebAppGetAuthToken",{app_id:7363654,scope:"docs"});case 3:return D=(D=e.sent).access_token,e.next=7,l.a.sendPromise("VKWebAppCallAPIMethod",{method:"docs.getUploadServer",request_id:"upload_server",params:{v:"5.103",access_token:D}});case 7:for(i in M=(M=e.sent).upload_url,console.log(M),a=this.state.stickers[t].stickers)r=a[i].props.src,this.urlToBase64(r,function(e){this.base64ToMultipart(e,function(t){console.log("base64",e),console.log("multipart",t)}.bind(this))}.bind(this));e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log("error",e.t0);case 17:case"end":return e.stop()}}),e,this,[[0,14]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(g.e,{activeStory:this.state.activeStory,tabbar:r.a.createElement(g.t,null,r.a.createElement(g.u,{onClick:this.onStoryChange,selected:"tab_main"===this.state.activeStory,"data-story":"tab_main"},r.a.createElement(P.a,null)),r.a.createElement(g.u,{onClick:this.onStoryChange,selected:"tab_other"===this.state.activeStory,"data-story":"tab_other"},r.a.createElement(A.a,null)))},r.a.createElement(g.v,{id:"tab_main",activePanel:this.state.activePanelShop,popout:this.state.popout,history:this.state.historyShop,onSwipeBack:this.back},r.a.createElement(g.l,{id:"main",separator:!1},r.a.createElement(g.m,null,"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"),r.a.createElement(g.s,null),r.a.createElement(g.g,{slideWidth:"100%",style:{height:"100%",margin:"8px"},slideIndex:this.state.slideTabIndex,onChange:function(t){e.setState({slideTabIndex:t})}},r.a.createElement("div",null,r.a.createElement("div",{className:"centered",style:{fontSize:"medium"}},r.a.createElement("b",null,"\u041d\u043e\u0432\u0438\u043d\u043a\u0438")),r.a.createElement(g.k,{style:{marginTop:"15px"}},this.state.stickers_panel)),r.a.createElement("div",null,r.a.createElement("div",{className:"centered",style:{fontSize:"medium"}},r.a.createElement("b",null,"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435")),r.a.createElement(g.k,{style:{marginTop:"15px"}},this.state.stickers_panel)))),r.a.createElement(g.l,{id:"sticker_info"},r.a.createElement(g.m,null,"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"),r.a.createElement(g.d,null,r.a.createElement(g.c,{before:r.a.createElement(W,{mode:"medium",src:this.state.sticker_info.preview}),description:this.state.sticker_info.author},this.state.sticker_info.title),r.a.createElement("br",null),r.a.createElement(K,null,this.state.sticker_info.description),r.a.createElement("div",{style:{marginTop:"10px"}},this.state.user.stickers.indexOf(this.state.sticker_info.id)>=0?r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(g.b,{onClick:function(){e.install(e.state.sticker_info.id)},size:"xl",stretched:!0},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c")," ",r.a.createElement(g.b,{style:{marginLeft:"8px"},mode:"secondary",size:"xl",stretched:!0},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c")):r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(g.b,{size:"xl",stretched:!0,mode:"commerce"},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0437\u0430 "+this.state.sticker_info.price+" \u0440\u0443\u0431."))),r.a.createElement("div",{className:"centered",style:{marginTop:"18px"}},r.a.createElement(N,{mode:"small"},this.state.sticker_info.stickers))))),r.a.createElement(g.v,{id:"tab_other",activePanel:this.state.activePanelOther,popout:this.state.popout,history:this.state.historyOther,onSwipeBack:this.back,header:!1},r.a.createElement(g.l,{id:"profile"},r.a.createElement(g.p,null,r.a.createElement(g.n,null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c")),r.a.createElement(g.d,null,r.a.createElement("div",{className:"centered"},r.a.createElement(g.a,{src:this.state.user.photo_100,size:100})),r.a.createElement("br",null),r.a.createElement("div",{className:"centered",style:{fontSize:"large"}},this.state.user.first_name+" "+this.state.user.last_name),r.a.createElement("br",null),r.a.createElement(g.h,{separator:"hide"},r.a.createElement(g.c,{expandable:!0,onClick:function(){e.setState({balance_manipulation:!e.state.balance_manipulation})},indicator:this.state.user.balance+" \u20bd"},"\u0412\u0430\u0448 \u0431\u0430\u043b\u0430\u043d\u0441"),this.state.balance_manipulation&&r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"8px"}},r.a.createElement(g.b,{size:"l",before:r.a.createElement(C.a,null)},"\u041f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c"),r.a.createElement(g.b,{size:"l",before:r.a.createElement(S.a,null),mode:"secondary",style:{marginLeft:8}},"\u0412\u044b\u0432\u0435\u0441\u0442\u0438"))),r.a.createElement(g.h,{separator:"hide",header:r.a.createElement(g.i,{mode:"primary"},"\u0412\u0430\u0448\u0438 \u0441\u0442\u0438\u043a\u0435\u0440\u044b")},r.a.createElement("div",{className:"centered",style:{marginTop:"18px"}},r.a.createElement(N,{mode:"big"},this.state.user_stickers,r.a.createElement(W,{mode:"big",onClick:function(){e.go("create")}},"+")))))),r.a.createElement(g.l,{id:"create"},r.a.createElement(g.p,null,r.a.createElement(g.n,{aside:r.a.createElement(y.a,{style:{transform:"rotate(".concat(this.state.createStickerContextOpened?"180deg":"0",")")}}),onClick:function(){e.toggleCreateStickerContext()}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0438\u043a\u0435\u0440\u044b")),r.a.createElement(g.o,{opened:this.state.createStickerContextOpened,onClose:function(){e.toggleCreateStickerContext()}},r.a.createElement(g.k,null,r.a.createElement(g.c,{before:r.a.createElement(w.a,null),onClick:function(){e.toggleCreateStickerContext(),e.go("stickers_history")}},"\u0418\u0441\u0442\u043e\u0440\u0438\u044f"))),r.a.createElement(g.f,null,r.a.createElement(g.j,{type:"text",top:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0442\u0438\u043a\u0435\u0440-\u043f\u0430\u043a\u0430",name:"title",value:this.state.create_panel.title,onChange:this.onChange,status:this.state.create_panel.title&&this.state.create_panel.title.length<=20?"valid":"error",bottom:this.state.create_panel.title?this.state.create_panel.title.length<=20?"":"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 - 20":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),r.a.createElement(g.j,{type:"text",top:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",name:"description",value:this.state.create_panel.description,onChange:this.onChange,status:this.state.create_panel.description&&this.state.create_panel.description.length<=100?"valid":"error",bottom:this.state.create_panel.description?this.state.create_panel.description.length<=100?"":"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 - 100":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),r.a.createElement(g.j,{type:"number",top:"\u0426\u0435\u043d\u0430",name:"price",value:this.state.create_panel.price,onChange:this.onChange,status:this.state.create_panel.price>0&&this.state.create_panel.price<=1e3?this.state.create_panel.price.toString().includes(".")?"error":"valid":"error",bottom:this.state.create_panel.price>0?this.state.create_panel.price<=1e3?this.state.create_panel.price.toString().includes(".")?"\u0427\u0438\u0441\u043b\u043e \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0446\u0435\u043b\u044b\u043c":"":"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0446\u0435\u043d\u0430- 1 000 \u0440\u0443\u0431.":"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0446\u0435\u043d\u0430 - 1 \u0440\u0443\u0431."}),r.a.createElement(F,{src:this.state.create_panel.upload_preview_img&&this.state.create_panel.upload_preview_img,title:"\u041f\u0440\u0435\u0432\u044c\u044e",description:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e \u0441\u0442\u0438\u043a\u0435\u0440-\u043f\u0430\u043a\u0430 (128\xd7128px)",onChange:function(t){e.uploadFile("upload_preview_img",t)}}),r.a.createElement(F,{title:"\u0421\u0442\u0438\u043a\u0435\u0440\u044b",description:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0432\u0441\u0435 \u0441\u0442\u0438\u043a\u0435\u0440\u044b (\u043c\u0438\u043d\u0438\u043c\u0443\u043c - 4), \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c\u0441\u044f \u0432 \u043f\u0430\u043a\u0435 (128\xd7128px)",onChange:function(t){e.uploadFile("upload_sticker_img",t)}}),r.a.createElement("div",{className:"centered",style:{paddingBottom:"16px"}},r.a.createElement("div",{style:{minWidth:"64px",maxWidth:"296px",display:"grid",gridTemplateColumns:"repeat(auto-fill, 64px)",gridGap:"10px"}},this.state.create_panel.uploaded_stickers_img)),r.a.createElement(g.b,{size:"xl",disabled:!this.state.create_panel.title||(!this.state.create_panel.description||(!(this.state.create_panel.price>0)||(!(this.state.create_panel.title.length<=20)||(!(this.state.create_panel.description.length<=100)||(!(this.state.create_panel.price<=1e3)||(!!this.state.create_panel.price.toString().includes(".")||(!this.state.create_panel.upload_preview_img||(!this.state.create_panel.uploaded_stickers_img||!(this.state.create_panel.uploaded_stickers_img.filter((function(e){return void 0!==e})).length>=4)))))))))},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"))),r.a.createElement(g.l,{id:"stickers_history"},r.a.createElement(g.p,null,r.a.createElement(g.n,null,"\u0418\u0441\u0442\u043e\u0440\u0438\u044f")),this.state.user_stickers_history&&this.state.user_stickers_history.length>0?r.a.createElement(g.d,null,r.a.createElement(g.k,null,this.state.user_stickers_history)):r.a.createElement(g.q,{icon:r.a.createElement(I.a,null),header:"\u041f\u0443\u0441\u0442\u043e",stretched:!0},"\u0412\u044b \u043f\u043e\u043a\u0430 \u0435\u0449\u0435 \u043d\u0435 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u043b\u0438 \u0441\u0442\u0438\u043a\u0435\u0440\u044b"))))}}]),t}(r.a.Component);l.a.send("VKWebAppInit"),n.a.render(r.a.createElement(B,null),document.getElementById("root"))}},[[150,1,2]]]);
//# sourceMappingURL=main.89acbeea.chunk.js.map