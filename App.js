
import 		React 			from 'react';
import { 	Provider 	} 	from 'react-redux';
import { 	AppLoading 	} 	from 'expo';
import 		Main 			from './screens/main';
import 		api 			from './actions/api-key';
import 		theme 			from './actions/theme';
import 		application 	from './configuration/application';
import 		database 		from './configuration/database';
import 		configuration 	from './configuration/store';
import 		cache 			from './utilities/cache';

const store = configuration ();

export default class Application extends React.Component {

	state = {
		cache : false
	};

	async setCache () {

		try {

			await cache.assets ({
				images 	: []
			});
		} 
		
		catch ( error ) {
			console.log 	( error.message );
		} 
		
		finally {

			this.setState ({
				cache : true
			});
		}
	}

	componentWillMount () {

		this.setCache 	();

		// Setup the local databases
		database.settings.setup ();
		database.apikeys.setup 	();

		// Setup the analytics
		//analytics.setup 		();

		// Get any data from the local databases
		store.dispatch 	( api.get 	());
		store.dispatch 	( theme.get ());

		// Send test ads to the device if in development mode
		// if ( __DEV__ ) {

		// 	FacebookAds.AdSettings.addTestDevice ( FacebookAds.AdSettings.currentDeviceHash );
		// }
	}

	render () {

		if ( this.state.cache ) {

			return (
				
				<Provider store = { store }>
					<Main />
				</Provider>
			);
		} 
		
		else {

			return <AppLoading />;
		}
	}
};
