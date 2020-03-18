import React from 'react';
import bridge from '@vkontakte/vk-bridge';
import '@vkontakte/vkui/dist/vkui.css';
import './App.css'

import { Panel, PanelHeader, Div , View , ScreenSpinner, List , Cell , Gallery , FormLayout , Input , Avatar , Group , Epic, Tabbar, TabbarItem, Separator, Button  } from '@vkontakte/vkui';
import Icon24Write from '@vkontakte/icons/dist/24/write';
import Icon16Dropdown from '@vkontakte/icons/dist/16/dropdown';

import { CardButton } from "./components/CardButton";

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			popout: <ScreenSpinner/>,
			activeStory: 'tab_main',
			slideTabIndex: 0,
			activePanelShop: "main",
			historyShop: ["main"],
			activePanelOther: "profile",
			historyOther: ["profile"],
			stickers: [ { title: "Бисквит", author: "Ирина Брэдкэт", preview: "https://vk.com/sticker/2-533-cover-140b-0", price: 1, description: "Хвост торчком, большие ушки —\nБерегитесь, печенюшки!", stickers: [ 'https://vk.com/sticker/1-18945-64', 'https://vk.com/sticker/1-18946-64', 'https://vk.com/sticker/1-18947-64', 'https://vk.com/sticker/1-18948-64', 'https://vk.com/sticker/1-18949-64', 'https://vk.com/sticker/1-18950-64', 'https://vk.com/sticker/1-18951-64', 'https://vk.com/sticker/1-18952-64' ] }, { title: "Илай", author: "Ирина Брэдкэт", preview: "https://vk.com/sticker/1-18781-128", price: 1, description: "Вышел мишка из берлоги — поселился в диалоге.", stickers: [ 'https://vk.com/sticker/1-18781-128', 'https://vk.com/sticker/1-18782-128', 'https://vk.com/sticker/1-18783-128', 'https://vk.com/sticker/1-18784-128', 'https://vk.com/sticker/1-18785-128', 'https://vk.com/sticker/1-18786-128', 'https://vk.com/sticker/1-18787-128', 'https://vk.com/sticker/1-18788-128' ] } ],
			stickers_panel: null,
			sticker_info: { title: "", author: "", preview: "", price: 0, description: "", stickers: [] },
			user: {
				first_name: '',
				last_name: '',
				photo_100: '',
				stickers:[ 0 ],
				balance: 0
			},
			create_panel: { title: "", preview: "", price: 0, description: "", stickers: [] }
		};

		this.onStoryChange = this.onStoryChange.bind(this);
		this.onChange = this.onChange.bind(this);
		this.uploadFile = this.uploadFile.bind(this);

		this.componentDidMount = this.componentDidMount.bind(this);
		this.initializeApp = this.initializeApp.bind(this);
		this.back = this.back.bind(this);
		this.go = this.go.bind(this);
	}

	componentDidMount () {
		window.addEventListener('popstate', e => {
			e.preventDefault();
			this.back(e);
		});
		bridge.subscribe(({ detail: { type, data }}) => {
			console.log(type, data);
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			} else if (type === 'VKWebAppGetUserInfoResult'){
				this.setState({ popout: null, user: data });
				this.initializeApp();
			}
		});
		bridge.send('VKWebAppGetUserInfo');
	}

	initializeApp() {
		var stickers_panel = [];
		var stickers = this.state.stickers;
		for(var i = 0; i < stickers.length; i++){
			var stickers_ = [];
			for(var j = 0; j < stickers[i].stickers.length; j++){
				stickers_.push(
					<img width={64} height={64} src={stickers[i].stickers[j]}/>
				);
			}

			stickers[i].stickers = stickers_;
			stickers[i].id = i;
			stickers_panel.push(
				<Cell id={"sticker_"+i} onClick={(e)=> { var id = parseInt(e.currentTarget.id.split('_')[1]); this.go("sticker_info"); this.setState({ sticker_info: stickers[id] }); }} before={<Avatar mode="app" size={78}><img width={64} height={64} src={stickers[i].preview}/></Avatar>} description={stickers[i].author} size={"l"} bottomContent={<Button mode="commerce">{stickers[i].price+' руб.'}</Button> } >{stickers[i].title}</Cell>
			);
		}
		this.setState({ stickers_panel });

		var user_stickers = [];
		for(var i = 0; i < this.state.user.stickers.length; i++){
			var sticker = this.state.stickers[i];
			user_stickers.push(
				<Avatar size={96}><img width={96} height={96} src={sticker.preview} id={"user_sticker_"+i} onClick={(e)=> { var id = parseInt(e.currentTarget.id.split('_')[2]); this.setState({ activeStory: "tab_main", sticker_info: this.state.stickers[id] }); this.go("sticker_info"); }}/></Avatar>
			);
		}
		this.setState({ user_stickers });
	}
	back = () => {
		let activeStory = this.state.activeStory;
		let activePanel = activeStory === 'tab_main' ? this.state.activePanelShop : activeStory === 'tab_other' ? this.state.activePanelOther : '';
		if((activeStory === 'tab_main' && activePanel==='main') || (activeStory === 'tab_other' && activePanel==='profile')){
			bridge.send("VKWebAppClose", {"status": "success"});
		}else {
			let history = activeStory === 'tab_main' ? this.state.historyShop : activeStory === 'tab_other' ? this.state.historyOther : '';
			if(history.length === 1) {
				bridge.send("VKWebAppClose", {"status": "success"});
			} else if (history.length > 1) {
				history.pop();
				let p = history[history.length - 1];
				this.setState({activePanel: p});
			}
		}
	};
	go(panel) {
		let activeStory = this.state.activeStory;
		let panel_to_change = activeStory === 'tab_main' ? 'activePanelShop' : activeStory === 'tab_other' ? 'activePanelOther' : '';
		let history = activeStory === 'tab_main' ? this.state.historyShop : activeStory === 'tab_other' ? this.state.historyOther : '';
		history.push(panel);
		let history_to_change = activeStory === 'tab_main' ? 'historyShop' : activeStory === 'tab_other' ? 'historyOther' : '';
		window.history.pushState({panel: panel}, 'Title');
		this.setState({ [panel_to_change]: panel, [history_to_change]: history });
	}

	onStoryChange (e) {
		var story = e.currentTarget.dataset.story;
		if(this.state.activeStory===story){
			if(story==='tab_main'){
				this.go("main");
			}else if(story==='tab_other'){
				this.go("profile");
			}
		}
		this.setState({ activeStory: story });
	}

	onChange(e) {
		const { name, value } = e.currentTarget;
		var create_panel = this.state.create_panel;
		create_panel[name] = value;
		this.setState({ create_panel: create_panel });
	}

	uploadFile(element, evt) {
		var tgt = evt.target || window.event.srcElement,
			files = tgt.files;
		console.log(files);
		const t = this
		if (FileReader && files && files.length) {
			var fr = new FileReader();
			fr.onload = function () {
				var res = fr.result; //base64 result, to get src -> array[0].props.src
				var res1 = t.state.create_panel;
				if(files[files.length-1].type.includes('image')){
					if(element==='upload_sticker_img'){
						var res10 = res1.hasOwnProperty('uploaded_stickers_img') ? res1.uploaded_stickers_img : [];
						res10.push(
							<img id={'uploaded_sticker_'+res10.length} onClick={(e)=>{ var id = parseInt(e.currentTarget.id.split('_')[2]); var res01 = t.state.create_panel; delete res01.uploaded_stickers_img[id];  t.setState({ create_panel: res01 }); }} width={64} height={64} src={res}/>
						);
						var stickers_count = res10.filter(function(val){ return val !== undefined; }).length;
						if(stickers_count<100){
							res1.uploaded_stickers_img = res10;
							t.setState({ create_panel: res1 });
						}
					}else{
						res1[element] = res;
						t.setState({ create_panel: res1});
					}
				}else{
					res1[element] = null;
					t.setState({ create_panel: res1});
				}
			}
			fr.readAsDataURL(files[0]);
		}

		// Not supported
		else {
			// fallback -- perhaps submit the input to an iframe and temporarily store
			// them on the server until the user's session ends.
		}
	}

	render() {
		return (
			<Epic activeStory={this.state.activeStory} tabbar={
				<Tabbar>
					<TabbarItem
						onClick={this.onStoryChange}
						selected={this.state.activeStory === 'tab_main'}
						data-story="tab_main"
					><Icon28More/></TabbarItem>
					<TabbarItem
						onClick={this.onStoryChange}
						selected={this.state.activeStory === 'tab_other'}
						data-story="tab_other"
					><Icon28More /></TabbarItem>
				</Tabbar>
			}>
				<View id="tab_main" activePanel={this.state.activePanelShop} popout={this.state.popout} history={this.state.historyShop} onSwipeBack={this.back}>
					<Panel id="main" separator={false}>
						<PanelHeader>Магазин</PanelHeader>
						<Separator />
						<Gallery
							slideWidth="100%"
							style={{ height: "100%", margin: "8px" }}
							slideIndex={this.state.slideTabIndex}
							onChange={(slideIndex) => { this.setState({slideTabIndex: slideIndex}); }}>
							<div>
								<div style={{display: "flex", alignItems: "center", justifyContent: "center", fontSize: "medium"}}>
									<b>Новинки</b>
								</div>
								<List style={{ marginTop: "15px" }}>
									{this.state.stickers_panel}
								</List>
							</div>

							<div>
								<div style={{display: "flex", alignItems: "center", justifyContent: "center", fontSize: "medium"}}>
									<b>Популярные</b>
								</div>
								<List style={{ marginTop: "15px" }}>
									{this.state.stickers_panel}
								</List>
							</div>
						</Gallery>
					</Panel>
					<Panel id="sticker_info">
						<PanelHeader>Магазин</PanelHeader>
						<Div>
							<Cell before={<Avatar mode="app" size={78}><img width={64} height={64} src={this.state.sticker_info.preview}/></Avatar>} description={this.state.sticker_info.author}>{this.state.sticker_info.title}</Cell>
							<br/>
							<div style={{ color: "#7f8285" }} dangerouslySetInnerHTML={{ __html: this.state.sticker_info.description.replace('\n','<br/>') }} />
							<div style={{display: 'flex', marginTop: '10px'}}>
								{this.state.user.stickers.indexOf(this.state.sticker_info.id)>=0 ? <Button size={"xl"} stretched>{'Установить'}</Button> : <Button size={"xl"} stretched mode="commerce">{'Получить за '+this.state.sticker_info.price+' руб.'}</Button>}
							</div>
							<div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "18px" }}>
								<div style={{ minWidth: "64px", maxWidth: "296px", display: "grid", gridTemplateColumns: "repeat(auto-fill, 64px)", gridGap: "10px" }}>
									{this.state.sticker_info.stickers}
								</div>
							</div>
						</Div>
					</Panel>
				</View>
				<View id="tab_other" activePanel={this.state.activePanelOther} popout={this.state.popout} history={this.state.historyShop} onSwipeBack={this.back}>
					<Panel id="profile">
						<PanelHeader>Профиль</PanelHeader>
						<Div>
							<div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
								<Avatar src={this.state.user.photo_100} size={100}/>
							</div>
							<br/>
							<div style={{display: "flex", alignItems: "center", justifyContent: "center", fontSize: "large"}}>
								{this.state.user.first_name+' '+this.state.user.last_name}
							</div>
							<br/>
							<Group separator="hide">
								<Cell expandable onClick={()=> {  }} indicator={this.state.user.balance+' ₽'}>Ваш баланс</Cell>
							</Group>
							<Group separator="hide" header={<Header mode="primary">Ваши стикеры</Header>}>
								<div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "18px" }}>
									<div style={{ minWidth: "96px", maxWidth: "320px", display: "grid", gridTemplateColumns: "repeat(auto-fill, 96px)", gridGap: "10px" }}>
										{this.state.user_stickers}
										<Avatar size={96}><div style={{ borderRadius: 48, display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", color: "#7f8285", fontSize: 76 }} onClick={()=> { this.go("create"); }}>+</div></Avatar>
									</div>
								</div>
							</Group>
						</Div>
					</Panel>
					<Panel id="create">
						<PanelHeader
							right={<PanelHeaderButton disabled={this.state.create_panel.title ? this.state.create_panel.description ? this.state.create_panel.price > 0 ? this.state.create_panel.title.length <= 20 ? this.state.create_panel.description.length <= 100 ? this.state.create_panel.price <= 1000 ? this.state.create_panel.price.toString().includes('.') ?  true : this.state.create_panel.upload_preview_img ? this.state.create_panel.uploaded_stickers_img ? this.state.create_panel.uploaded_stickers_img.filter(function(val){ return val !== undefined; }).length > 0 ? false : true : true : true : true : true : true : true : true : true }><Icon24Done/></PanelHeaderButton>}
						>Добавить стикеры</PanelHeader>
						<FormLayout>
							<Input
								type="text"
								top="Название стикер-пака"
								name="title"
								value={this.state.create_panel.title}
								onChange={this.onChange}
								status={this.state.create_panel.title ? this.state.create_panel.title.length <= 20 ? 'valid' : 'error' : 'error'}
								bottom={this.state.create_panel.title ? this.state.create_panel.title.length <= 20 ? '' : 'Максимальная длина - 20' : 'Пожалуйста, введите название'}
							/>
							<Input
								type="text"
								top="Описание"
								name="description"
								value={this.state.create_panel.description}
								onChange={this.onChange}
								status={this.state.create_panel.description ? this.state.create_panel.description.length <= 100 ? 'valid' : 'error' : 'error'}
								bottom={this.state.create_panel.description ? this.state.create_panel.description.length <= 100 ? '' : 'Максимальная длина - 100' : 'Пожалуйста, введите описание'}
							/>
							<Input
								type="number"
								top="Цена"
								name="price"
								value={this.state.create_panel.price}
								onChange={this.onChange}
								status={this.state.create_panel.price > 0 ? this.state.create_panel.price <= 1000 ? this.state.create_panel.price.toString().includes('.') ? 'error' : 'valid' : 'error' : 'error'}
								bottom={this.state.create_panel.price > 0 ? this.state.create_panel.price <= 1000 ? this.state.create_panel.price.toString().includes('.') ? 'Число должно быть целым' : '' : 'Максимальная цена- 1 000 руб.' : 'Минимальная цена - 1 руб.'}
							/>
							<div>
								<input type="file" ref={(ref) => this.upload_preview = ref} style={{display: "none"}}  onChange={(event)=> {this.uploadFile('upload_preview_img', event)}}/>
								<Cell onClick={()=> { this.upload_preview.click(); }} before={<Avatar mode="app" size={78} src={this.state.create_panel.upload_preview_img && this.state.create_panel.upload_preview_img} />} multiline description={'Загрузите главную фотографию стикер-пака (128×128px)'} >Превью</Cell>
							</div>

							<div>
								<input type="file" ref={(ref) => this.upload_stickers = ref} style={{display: "none"}}  onChange={(event)=> {this.uploadFile('upload_sticker_img', event)}}/>
								<Cell onClick={()=> { this.upload_stickers.click(); }} multiline description={'Загрузите все стикеры, которые будут содержаться в паке (128×128px)'} >Стикеры</Cell>
							</div>

							<div style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: "16px" }}>
								<div style={{ minWidth: "64px", maxWidth: "296px", display: "grid", gridTemplateColumns: "repeat(auto-fill, 64px)", gridGap: "10px" }}>
									{this.state.create_panel.uploaded_stickers_img}
								</div>
							</div>
						</FormLayout>
					</Panel>
				</View>
			</Epic>
		);
	}
}

export default App;

