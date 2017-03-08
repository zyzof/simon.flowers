import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as THREE from 'three';


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

    public createBackground() {
        console.log('createBackground');

        let scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff);

        let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.z = 1000;

        let geometry = new THREE.BoxGeometry( 200, 200, 200 );
        let material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

        let mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );

        let renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize( window.innerWidth, window.innerHeight );

        this.renderBackground(scene, camera, renderer);

        document.body.appendChild( renderer.domElement );
    }

    renderBackground(scene:THREE.Scene, camera:THREE.Camera, renderer:THREE.Renderer) {
        requestAnimationFrame(() => this.renderBackground(scene, camera, renderer));

        renderer.render(scene, camera);
    }

    public render(): JSX.Element {
    	console.log('app.tsx render()');

        this.createBackground();

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
                    <a href='http://stackoverflow.com/users/story/1388195'>
                        <img src='img/stackoverflow.png' />
                    </a>
                </div>
                <div id='homebrew' className='button'>
                    <a href='https://play.google.com/store/apps/details?id=com.zyzsoft.homebrew'>
                        <img src='img/homebrew.png' />
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