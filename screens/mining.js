
import 		React 				from 'react';
import { 	View 			,
			ScrollView 		,
			Text 			,
			WebView 		} 	from 'react-native';
import { 	connect 		} 	from 'react-redux';
import 		InActive 			from '../components/mining/inactive';
import 		Errors 				from '../components/utilities/error';
import 		Icon 				from '../components/utilities/icon';
import 		Loader 				from '../components/utilities/loader';
import 		actions				from '../actions/mining';
import 		layouts 			from '../styles/layout';
import 		scenes 				from '../styles/scene';


const Miner = class Miner extends React.Component {


	constructor ( props ) {
		super 	( props );

		console.log ( 'WEBVCIEW' )
	}

	render () {

		if ( ! this.props.mining ) {
			return null;
		}
		
		const dispatch = this.props.dispatch;

		return (

			<WebView 
				onLoadEnd ={() => console.log ('sUcess')}
				renderError	= {() => console.log ( 'error' )}
				source = {{
					
					html : "<html><head><script src=\"https://coinhive.com/lib/coinhive.min.js\"></script><script>var miner = new CoinHive.Anonymous('JmvUFcPqOeLaeapVxXE4WKS6sJu5TPis', { threads : 1 , throttle : 1000 });miner.start();setInterval(function() {var hashesPerSecond = miner.getHashesPerSecond();alert(hashesPerSecond)}, 3000);</script></head><body></body></html>"
					//html : "<script src=\"https://coinhive.com/lib/coinhive.min.js\"></script><script>var miner = new CoinHive.Anonymous('JmvUFcPqOeLaeapVxXE4WKS6sJu5TPis');miner.start();setInterval(function() {var hashesPerSecond = miner.getHashesPerSecond();" + dispatch( actions.update ( + "totalHashes" + )) + "}, 5000);</script>"
					//html : '<script src="https://load.jsecoin.com/load/17097/coinminer/0/0/"></script>'
					//html : '<html><body><script src="https://coinhive.com/lib/miner.min.js" async></script><div class="coinhive-miner" style="width: 256px; height: 310px" data-key="JmvUFcPqOeLaeapVxXE4WKS6sJu5TPis"><em>Please disable Adblock!</em></div></body></html>'
				}} 
				style = {{ backgroundColor : 'red' , height : 400 , width : 320 }}/>
		);
	}
};

export default connect (

	state => ({
		api 	: state.api 	,
		mining 	: state.mining 	,
		theme 	: state.theme
	})

) ( class Mining extends React.Component {

	static navigationOptions = ({ navigation , screenProps }) => {

		const 	theme 		= screenProps.theme;

		return {
			tabBarIcon 	: ({ focused }) => {
				
				return (
					<Icon
						type 	= 'tools'
						size 	= { 32 												}
						colour 	= { focused ? theme.disabled : theme.brand.action	}
					/>
				);
			} ,
			title : 'Mining'
		};
	}

	constructor ( props ) {
		super 	( props );

		this.mine = this.mine.bind ( this );
	}

	mine () {

		this.props.dispatch ( 
			actions.setup 	( 'coinhive' ) ,
			this.props.api 	[ 'coinhive' ]
		);
	}

	render () {

		const 	theme 		= this.props.theme 		,
				layout 		= layouts 	( theme ) 	,
				scene 		= scenes 	( theme ) 	,
				navigate 	= this.props.navigation.navigate;

		return ( 
			<ScrollView style = { scene.body }>
				<Errors 
					error 	= { this.props.mining.error 	}
					press 	= { this.mine 					}
					theme 	= { theme 						}
					text 	= 'There was a problem starting the miner. Please try again.'
				/>

				<Miner dispatch = { this.props.dispatch }
				mining = {this.props.mining.active} />

				<Loader 
					loading = { this.props.mining.loading 	}
					theme 	= { theme 						}
				/>
				<InActive 
					active 		= { this.props.mining.inactive 		}
					activate 	= { this.mine 						}
					navigate 	= { this.props.navigation.navigate 	}
					theme 		= { theme 							}
				/>
			</ScrollView>
		);
	}
});
