(window.webpackJsonpVKStickers=window.webpackJsonpVKStickers||[]).push([[0],{149:function(e,t,a){e.exports=a(235)},226:function(e,t,a){},235:function(e,t,a){"use strict";a.r(t);a(150),a(176),a(178),a(179),a(181),a(182),a(183),a(184),a(185),a(186),a(187),a(188),a(190),a(191),a(192),a(193),a(194),a(195),a(196),a(197),a(198),a(199),a(201),a(202),a(203),a(204),a(205),a(206),a(207),a(208),a(209),a(210),a(211),a(212),a(213),a(214),a(215),a(216),a(217),a(218);var i=a(0),r=a.n(i),s=a(41),n=a.n(s),c=a(25),l=a.n(c),o=a(49),p=a(27),h=a(28),m=a(30),d=a(29),u=a(32),_=a(31),v=(a(44),a(226),a(4)),k=a(95),b=a.n(k),g=a(96),f=a.n(g),E=a(97),y=a.n(E),S=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("img",{width:64,height:64,src:this.props.src})}}]),t}(i.PureComponent),O=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return"cell"===this.props.mode?r.a.createElement(v.c,{id:"sticker_"+this.props.i,onClick:function(t){var a=parseInt(t.currentTarget.id.split("_")[1]);e.props.onClick(),e.setState({sticker_info:e.props.stickers[a]})},before:r.a.createElement(v.a,{mode:"app",size:78},r.a.createElement(S,{src:this.props.src})),description:this.props.author,size:"l",bottomContent:r.a.createElement(v.b,{mode:"commerce"},this.props.price+" \u0440\u0443\u0431.")},this.props.title):"img"===this.props.mode&&r.a.createElement(v.a,{size:96},r.a.createElement("img",{width:96,height:96,src:this.props.src,id:"user_sticker_"+this.props.i,onClick:function(t){var a=parseInt(t.currentTarget.id.split("_")[2]);e.setState({activeStory:"tab_main",sticker_info:e.state.stickers[a]}),setTimeout((function(){return e.props.onClick}),50)}}))}}]),t}(i.PureComponent),C=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{color:"#7f8285"},dangerouslySetInnerHTML:{__html:this.props.children.replace("\n","<br/>")}})}}]),t}(i.PureComponent),j=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return"small"===this.props.mode?r.a.createElement("div",{style:{minWidth:"64px",maxWidth:"296px",display:"grid",gridTemplateColumns:"repeat(auto-fill, 64px)",gridGap:"10px"}},this.props.children):"big"===this.props.mode&&r.a.createElement("div",{style:{minWidth:"96px",maxWidth:"320px",display:"grid",gridTemplateColumns:"repeat(auto-fill, 96px)",gridGap:"10px"}},this.props.children)}}]),t}(i.PureComponent),w=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).back=function(){var e=a.state.activeStory,t="tab_main"===e?a.state.activePanelShop:"tab_other"===e?a.state.activePanelOther:"",i="tab_main"===e?"activePanelShop":"tab_other"===e?"activePanelOther":"";if("tab_main"===e&&"main"===t||"tab_other"===e&&"profile"===t)l.a.send("VKWebAppClose",{status:"success"});else{var r="tab_main"===e?a.state.historyShop:"tab_other"===e?a.state.historyOther:"";if(1===r.length)l.a.send("VKWebAppClose",{status:"success"});else if(r.length>1){r.pop();var s=r[r.length-1];a.setState(Object(o.a)({},i,s))}}},a.state={popout:r.a.createElement(v.o,null),activeStory:"tab_main",slideTabIndex:0,activePanelShop:"main",historyShop:["main"],activePanelOther:"profile",historyOther:["profile"],stickers:[{title:"\u0411\u0438\u0441\u043a\u0432\u0438\u0442",author:"\u0418\u0440\u0438\u043d\u0430 \u0411\u0440\u044d\u0434\u043a\u044d\u0442",preview:"https://vk.com/sticker/2-533-cover-140b-0",price:1,description:"\u0425\u0432\u043e\u0441\u0442 \u0442\u043e\u0440\u0447\u043a\u043e\u043c, \u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u0443\u0448\u043a\u0438 \u2014\n\u0411\u0435\u0440\u0435\u0433\u0438\u0442\u0435\u0441\u044c, \u043f\u0435\u0447\u0435\u043d\u044e\u0448\u043a\u0438!",stickers:["https://vk.com/sticker/1-18945-64","https://vk.com/sticker/1-18946-64","https://vk.com/sticker/1-18947-64","https://vk.com/sticker/1-18948-64","https://vk.com/sticker/1-18949-64","https://vk.com/sticker/1-18950-64","https://vk.com/sticker/1-18951-64","https://vk.com/sticker/1-18952-64"]},{title:"\u0418\u043b\u0430\u0439",author:"\u0418\u0440\u0438\u043d\u0430 \u0411\u0440\u044d\u0434\u043a\u044d\u0442",preview:"https://vk.com/sticker/1-18781-128",price:1,description:"\u0412\u044b\u0448\u0435\u043b \u043c\u0438\u0448\u043a\u0430 \u0438\u0437 \u0431\u0435\u0440\u043b\u043e\u0433\u0438 \u2014 \u043f\u043e\u0441\u0435\u043b\u0438\u043b\u0441\u044f \u0432 \u0434\u0438\u0430\u043b\u043e\u0433\u0435.",stickers:["https://vk.com/sticker/1-18781-128","https://vk.com/sticker/1-18782-128","https://vk.com/sticker/1-18783-128","https://vk.com/sticker/1-18784-128","https://vk.com/sticker/1-18785-128","https://vk.com/sticker/1-18786-128","https://vk.com/sticker/1-18787-128","https://vk.com/sticker/1-18788-128"]}],stickers_panel:null,sticker_info:{title:"",author:"",preview:"",price:0,description:"",stickers:[]},user:{first_name:"",last_name:"",photo_100:"",stickers:[0],balance:0},create_panel:{title:"",preview:"",price:1,description:"",stickers:[]}},a.onStoryChange=a.onStoryChange.bind(Object(u.a)(a)),a.onChange=a.onChange.bind(Object(u.a)(a)),a.uploadFile=a.uploadFile.bind(Object(u.a)(a)),a.componentDidMount=a.componentDidMount.bind(Object(u.a)(a)),a.initializeApp=a.initializeApp.bind(Object(u.a)(a)),a.back=a.back.bind(Object(u.a)(a)),a.go=a.go.bind(Object(u.a)(a)),a}return Object(_.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("popstate",(function(t){t.preventDefault(),e.back(t)})),l.a.subscribe((function(t){var a=t.detail,i=a.type,r=a.data;if(console.log(i,r),"VKWebAppUpdateConfig"===i){var s=document.createAttribute("scheme");s.value=r.scheme?r.scheme:"client_light",document.body.attributes.setNamedItem(s)}else"VKWebAppGetUserInfoResult"===i&&(r.stickers=[0],r.balance=0,e.setState({popout:null,user:r}),e.initializeApp())})),l.a.send("VKWebAppGetUserInfo")}},{key:"initializeApp",value:function(){for(var e=[],t=this.state.stickers,a=0;a<t.length;a++){for(var i=[],s=0;s<t[a].stickers.length;s++)i.push(r.a.createElement(S,{src:t[a].stickers[s]}));t[a].stickers=i,t[a].id=a,e.push(r.a.createElement(O,{onClick:this.go("sticker_info"),mode:"cell",title:t[a].title,author:t[a].author,src:t[a].preview,price:t[a].price,stickers:t,i:a}))}this.setState({stickers_panel:e});var n=[];for(a=0;a<this.state.user.stickers.length;a++){var c=this.state.stickers[a];n.push(r.a.createElement(O,{onClick:this.go("sticker_info"),mode:"img",src:c.preview,i:a}))}this.setState({user_stickers:n})}},{key:"go",value:function(e){var t,a=this.state.activeStory,i="tab_main"===a?"activePanelShop":"tab_other"===a?"activePanelOther":"",r="tab_main"===a?this.state.historyShop:"tab_other"===a?this.state.historyOther:"";r.push(e);var s="tab_main"===a?"historyShop":"tab_other"===a?"historyOther":"";window.history.pushState({panel:e},"Title"),this.setState((t={},Object(o.a)(t,i,e),Object(o.a)(t,s,r),t))}},{key:"onStoryChange",value:function(e){var t=e.currentTarget.dataset.story;this.state.activeStory===t&&("tab_main"===t&&"main"!==this.state.activePanelShop?this.back():"tab_other"===t&&"profile"!==this.state.activePanelOther&&this.back()),this.setState({activeStory:t})}},{key:"onChange",value:function(e){var t=e.currentTarget,a=t.name,i=t.value,r=this.state.create_panel;r[a]=i,this.setState({create_panel:r})}},{key:"uploadFile",value:function(e,t){var a=(t.target||window.event.srcElement).files;console.log(a);var i=this;if(FileReader&&a&&a.length){var s=new FileReader;s.onload=function(){var t=s.result,n=i.state.create_panel;if(a[a.length-1].type.includes("image"))if("upload_sticker_img"===e){var c=n.hasOwnProperty("uploaded_stickers_img")?n.uploaded_stickers_img:[];c.push(r.a.createElement("img",{id:"uploaded_sticker_"+c.length,onClick:function(e){var t=parseInt(e.currentTarget.id.split("_")[2]),a=i.state.create_panel;delete a.uploaded_stickers_img[t],i.setState({create_panel:a})},width:64,height:64,src:t})),c.filter((function(e){return void 0!==e})).length<100&&(n.uploaded_stickers_img=c,i.setState({create_panel:n}))}else n[e]=t,i.setState({create_panel:n});else n[e]=null,i.setState({create_panel:n})},s.readAsDataURL(a[0])}}},{key:"render",value:function(){var e=this;return r.a.createElement(v.e,{activeStory:this.state.activeStory,tabbar:r.a.createElement(v.q,null,r.a.createElement(v.r,{onClick:this.onStoryChange,selected:"tab_main"===this.state.activeStory,"data-story":"tab_main"},r.a.createElement(b.a,null)),r.a.createElement(v.r,{onClick:this.onStoryChange,selected:"tab_other"===this.state.activeStory,"data-story":"tab_other"},r.a.createElement(f.a,null)))},r.a.createElement(v.s,{id:"tab_main",activePanel:this.state.activePanelShop,popout:this.state.popout,history:this.state.historyShop,onSwipeBack:this.back},r.a.createElement(v.l,{id:"main",separator:!1},r.a.createElement(v.m,null,"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"),r.a.createElement(v.p,null),r.a.createElement(v.g,{slideWidth:"100%",style:{height:"100%",margin:"8px"},slideIndex:this.state.slideTabIndex,onChange:function(t){e.setState({slideTabIndex:t})}},r.a.createElement("div",null,r.a.createElement("div",{className:"div-center",style:{fontSize:"medium"}},r.a.createElement("b",null,"\u041d\u043e\u0432\u0438\u043d\u043a\u0438")),r.a.createElement(v.k,{style:{marginTop:"15px"}},this.state.stickers_panel)),r.a.createElement("div",null,r.a.createElement("div",{className:"div-center",style:{fontSize:"medium"}},r.a.createElement("b",null,"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435")),r.a.createElement(v.k,{style:{marginTop:"15px"}},this.state.stickers_panel)))),r.a.createElement(v.l,{id:"sticker_info"},r.a.createElement(v.m,null,"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"),r.a.createElement(v.d,null,r.a.createElement(v.c,{before:r.a.createElement(v.a,{mode:"app",size:78},r.a.createElement(S,{src:this.state.sticker_info.preview})),description:this.state.sticker_info.author},this.state.sticker_info.title),r.a.createElement("br",null),r.a.createElement(C,null,this.state.sticker_info.description),r.a.createElement("div",{style:{display:"flex",marginTop:"10px"}},this.state.user.stickers.indexOf(this.state.sticker_info.id)>=0?r.a.createElement(v.b,{size:"xl",stretched:!0},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c"):r.a.createElement(v.b,{size:"xl",stretched:!0,mode:"commerce"},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0437\u0430 "+this.state.sticker_info.price+" \u0440\u0443\u0431.")),r.a.createElement("div",{className:"div-center",style:{marginTop:"18px"}},r.a.createElement(j,{mode:"small"},this.state.sticker_info.stickers))))),r.a.createElement(v.s,{id:"tab_other",activePanel:this.state.activePanelOther,popout:this.state.popout,history:this.state.historyShop,onSwipeBack:this.back},r.a.createElement(v.l,{id:"profile"},r.a.createElement(v.m,null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),r.a.createElement(v.d,null,r.a.createElement("div",{className:"div-center"},r.a.createElement(v.a,{src:this.state.user.photo_100,size:100})),r.a.createElement("br",null),r.a.createElement("div",{className:"div-center",style:{fontSize:"large"}},this.state.user.first_name+" "+this.state.user.last_name),r.a.createElement("br",null),r.a.createElement(v.h,{separator:"hide"},r.a.createElement(v.c,{expandable:!0,onClick:function(){},indicator:this.state.user.balance+" \u20bd"},"\u0412\u0430\u0448 \u0431\u0430\u043b\u0430\u043d\u0441")),r.a.createElement(v.h,{separator:"hide",header:r.a.createElement(v.i,{mode:"primary"},"\u0412\u0430\u0448\u0438 \u0441\u0442\u0438\u043a\u0435\u0440\u044b")},r.a.createElement("div",{className:"div-center",style:{marginTop:"18px"}},r.a.createElement(j,{mode:"big"},this.state.user_stickers,r.a.createElement(v.a,{size:96},r.a.createElement("div",{className:"div-center",style:{borderRadius:48,width:"100%",height:"100%",color:"#7f8285",fontSize:76},onClick:function(){e.go("create")}},"+"))))))),r.a.createElement(v.l,{id:"create"},r.a.createElement(v.m,{right:r.a.createElement(v.n,{disabled:!this.state.create_panel.title||(!this.state.create_panel.description||(!(this.state.create_panel.price>0)||(!(this.state.create_panel.title.length<=20)||(!(this.state.create_panel.description.length<=100)||(!(this.state.create_panel.price<=1e3)||(!!this.state.create_panel.price.toString().includes(".")||(!this.state.create_panel.upload_preview_img||(!this.state.create_panel.uploaded_stickers_img||!(this.state.create_panel.uploaded_stickers_img.filter((function(e){return void 0!==e})).length>0)))))))))},r.a.createElement(y.a,null))},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0438\u043a\u0435\u0440\u044b"),r.a.createElement(v.f,null,r.a.createElement(v.j,{type:"text",top:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0442\u0438\u043a\u0435\u0440-\u043f\u0430\u043a\u0430",name:"title",value:this.state.create_panel.title,onChange:this.onChange,status:this.state.create_panel.title&&this.state.create_panel.title.length<=20?"valid":"error",bottom:this.state.create_panel.title?this.state.create_panel.title.length<=20?"":"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 - 20":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),r.a.createElement(v.j,{type:"text",top:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",name:"description",value:this.state.create_panel.description,onChange:this.onChange,status:this.state.create_panel.description&&this.state.create_panel.description.length<=100?"valid":"error",bottom:this.state.create_panel.description?this.state.create_panel.description.length<=100?"":"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 - 100":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),r.a.createElement(v.j,{type:"number",top:"\u0426\u0435\u043d\u0430",name:"price",value:this.state.create_panel.price,onChange:this.onChange,status:this.state.create_panel.price>0&&this.state.create_panel.price<=1e3?this.state.create_panel.price.toString().includes(".")?"error":"valid":"error",bottom:this.state.create_panel.price>0?this.state.create_panel.price<=1e3?this.state.create_panel.price.toString().includes(".")?"\u0427\u0438\u0441\u043b\u043e \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0446\u0435\u043b\u044b\u043c":"":"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0446\u0435\u043d\u0430- 1 000 \u0440\u0443\u0431.":"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0446\u0435\u043d\u0430 - 1 \u0440\u0443\u0431."}),r.a.createElement("div",null,r.a.createElement("input",{type:"file",ref:function(t){return e.upload_preview=t},style:{display:"none"},onChange:function(t){e.uploadFile("upload_preview_img",t)}}),r.a.createElement(v.c,{onClick:function(){e.upload_preview.click()},before:r.a.createElement(v.a,{mode:"app",size:78,src:this.state.create_panel.upload_preview_img&&this.state.create_panel.upload_preview_img}),multiline:!0,description:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e \u0441\u0442\u0438\u043a\u0435\u0440-\u043f\u0430\u043a\u0430 (128\xd7128px)"},"\u041f\u0440\u0435\u0432\u044c\u044e")),r.a.createElement("div",null,r.a.createElement("input",{type:"file",ref:function(t){return e.upload_stickers=t},style:{display:"none"},onChange:function(t){e.uploadFile("upload_sticker_img",t)}}),r.a.createElement(v.c,{onClick:function(){e.upload_stickers.click()},multiline:!0,description:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0432\u0441\u0435 \u0441\u0442\u0438\u043a\u0435\u0440\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c\u0441\u044f \u0432 \u043f\u0430\u043a\u0435 (128\xd7128px)"},"\u0421\u0442\u0438\u043a\u0435\u0440\u044b")),r.a.createElement("div",{className:"div-center",style:{paddingBottom:"16px"}},r.a.createElement(j,{mode:"small"},this.state.create_panel.uploaded_stickers_img)),r.a.createElement(v.b,{size:"xl",disabled:!this.state.create_panel.title||(!this.state.create_panel.description||(!(this.state.create_panel.price>0)||(!(this.state.create_panel.title.length<=20)||(!(this.state.create_panel.description.length<=100)||(!(this.state.create_panel.price<=1e3)||(!!this.state.create_panel.price.toString().includes(".")||(!this.state.create_panel.upload_preview_img||(!this.state.create_panel.uploaded_stickers_img||!(this.state.create_panel.uploaded_stickers_img.filter((function(e){return void 0!==e})).length>0)))))))))},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c")))))}}]),t}(r.a.Component);l.a.send("VKWebAppInit"),n.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[149,1,2]]]);
//# sourceMappingURL=main.67edbc94.chunk.js.map