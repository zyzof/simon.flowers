import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface AppProps {

};

export interface AppState {
};

export class App extends React.Component<AppProps, AppState> {

	constructor(props: AppProps) {
		super(props);

		this.state = {
		};
	}

    public render(): JSX.Element {
    	console.log('app.tsx render()');

        return <div className='main-panel'>

            <div className='header'>
                <h1>Simon Flowers</h1>
            </div>

        	<div className='outer-container'>
                <div id='github' className='button'>
                    <a href='https://github.com/zyzof'>
                        <img src='img/github.png' />
                    </a>
                </div>
        		<div id='stackoverflow' className='button'>
                    <a href='http://stackoverflow.com/users/1388195/zyzof'>
                        <img src='img/stackoverflow.png' />
                    </a>
                </div>
                <div id='homebrew' className='button'>
                    <a href='/homebrew'>
                        <img src='img/homebrew.png' />
                    </a>
                </div>
                <div id='homebrew-web' className='button'>
                    <a href='homebrew'>
                        <img src='img/homebrew-web.png' />
                    </a>
                </div>
                <div id='contact' className='button'>
                    <a href='mailto:contact@simon.flowers' target='_blank'>
                        <img src='img/contact.png' />
                    </a>
                </div>
        	</div>
        	<div className='footer'>
                 <p>&copy; 2017</p>
            </div>

        </div>;
    }
}

ReactDOM.render(
	<App />,
	document.getElementById("main")
);