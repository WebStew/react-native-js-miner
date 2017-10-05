
import 		React 					from 'react';
import { 	ScrollView 			,
			Text 				,
			TextInput 			,
			View 				} 	from 'react-native';
import { 	connect 			} 	from 'react-redux';
import 		Back 					from '../components/utilities/back';
import 		Button 					from '../components/utilities/button';
import 		Heading					from '../components/utilities/heading';
import 		Link 					from '../components/utilities/link';
import 		Loader 					from '../components/utilities/loader';
import 		Paragraph 				from '../components/utilities/paragraph'
import 		actions 				from '../actions/api-key';
import 		forms 					from '../styles/forms';
import 		layouts 				from '../styles/layout';
import 		scenes 					from '../styles/scene';
import 		wysiwygs 				from '../styles/wysiwyg';

export default connect (

	state => ({
		api 	: state.api 	,
		theme 	: state.theme
	})

) ( class ApiKey extends React.Component {

	static navigationOptions = ({ navigation , screenProps }) => {

		return {
			title 		: 'API Keys' ,
			headerLeft 	: <Back 
				press 	= {() => navigation.goBack 	()} 
				theme 	= { screenProps.theme 		}
				text 	= { 'Back' 					}
			/>
		};
	};

	constructor ( props ) {
		super 	( props );

		this.apikey = this.apikey.bind 	( this );
		this.set 	= this.set.bind 	( this );
		this.state 	= { 
			key : this.props.api.coinhive
		};
	}

	componentWillMount () {

		this.props.dispatch ( actions.read ( 'coinhive' ));
	}

	apikey ( value ) {

		this.setState ({
			key : value
		});
	}

	set () {

		this.props.dispatch ( actions.save ( 'coinhive' , this.state.key ));
	}

	render () {

		const 	theme 	= this.props.theme 		,
				form 	= forms 	( theme ) 	,
				layout 	= layouts 	( theme ) 	,
				scene 	= scenes 	( theme ) 	,
				wysiwyg = wysiwygs 	( theme ) 	;

		if ( this.props.api.loading ) {

			return (
				<View 	style 	= { scene.body 				}>
					<Loader 
						loading = { this.props.api.loading 	}
						theme 	= { theme 					}
					/>
				</View>
			);
		}

		return (
			<ScrollView style = { scene.body 	}>
				<View 	style = { layout.page 	}>
					<Heading 
						theme 	= { theme }
						text 	= 'Coin Hive'
					/>
					<Text style = { layout.space }>
						<Paragraph 
							text 	= 'Please ensure you have created a free account on ' 
							theme 	= { theme }
						/>
						<Link 
							text 	= 'CoinHive'
							theme 	= { theme }
							url 	= 'https://coinhive.com/'
						/> 
						<Paragraph 
							text 	= ' and updated the below API key to yours which can be found on Coin Hives ' 
							theme 	= { theme }
						/>
						<Link 
							text 	= 'Sites & API Keys page'
							theme 	= { theme }
							url 	= 'https://coinhive.com/settings/sites'
						/>
						.
					</Text>
					<Text style = { layout.space }>
						<Paragraph 
							text 	= 'This will ensure any mining done on your device will credit your CoinHive account.'
							theme 	= { theme }
						/>
					</Text>
					<TextInput 
						autoCapitalize 	= 'none'
						autoCorrect 	= { false 			}
						keyboardType 	= 'default'
						onChangeText  	= { this.apikey 	}
						selectionColor 	= { theme.action 	}
						style 			= { form.input 		}
						value 			= { this.state.key 	}
					/>
					<Button 
						press 	= { this.set 	}
						theme 	= { theme 		}
						text 	= 'Save API Key'
					/>
				</View>
			</ScrollView>
		);
	}
});
