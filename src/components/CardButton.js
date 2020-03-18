import React, { PureComponent } from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import '../css/card-button.css';


export class CardButton extends PureComponent {

    render() {
        return (
            <div className={ "card-button" } onClick={ () => this.props.goRef() } style={{ backgroundImage: this.props.bg }}>
                <div className="inner">
                    <div className="left">
                        <div className="title">{ this.props.title }</div>
                        <div className="desc">{ this.props.desc }</div>
                    </div>
                    <img
                        className="img"
                        src={ this.props.img }>
                    </img>
                </div>
            </div>
        )
    }

}