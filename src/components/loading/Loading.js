import React, { PureComponent } from 'react';
import '../../styles/global-styles.css';
import './styles.css';

const MIN_LOADING_DISPLAY_TIME = 500;

export class Loading extends PureComponent {
    state = {
        minLoadTimeComplete: false,
        windowDidLoad: false,
    };

    _onWindowLoad = () => this.setState({ windowDidLoad: true });

    componentDidMount() {
        setTimeout(() => this.setState({ minLoadTimeComplete: true }), MIN_LOADING_DISPLAY_TIME);
        window.addEventListener('load', this._onWindowLoad);
    }

    componentWillUnmount() {
        window.removeEventListener('onload');
    }

    render() {
        const { minLoadTimeComplete, windowDidLoad } = this.state;

        return (
            <div className={minLoadTimeComplete && windowDidLoad ? 'loading opacity0' : 'loading'}>
                <div
                    className={
                        minLoadTimeComplete && windowDidLoad
                            ? 'loading-info opacity0'
                            : 'loading-info'
                    }
                >
                    <p>Loading, Please Wait...</p>
                </div>
            </div>
        );
    }
}
