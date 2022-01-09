import React, { PureComponent } from 'react';
import { util } from '../../utils';
import './styles.css';

export class Landing extends PureComponent {
    _handleClick = (selector) => () => {
        const el = document.querySelector(selector);
        const pos = util.getOffset(el);
        window.scrollTo({
            top: pos.top + 20,
            behavior: 'smooth',
        });
    };

    render() {
        return (
            <div className="landing-wrapper">
                <div className="landing">
                    <div className="title">
                        <p>
                            Matt
                            <br />
                            Jinkens
                        </p>
                    </div>
                    <div className="sub-title">
                        <p>Full Stack Development</p>
                    </div>
                    <i
                        className="fas fa-chevron-circle-down"
                        onClick={this._handleClick('.about')}
                        onTouchStart={this._handleClick('.about')}
                    />
                </div>
            </div>
        );
    }
}
