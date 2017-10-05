
import 		React 				from 'react';
import { 	View 			,
			ScrollView 		,
			Text 			} 	from 'react-native';
import 		Bold 				from '../utilities/bold';
import 		Button 				from '../utilities/button';
import 		Heading 			from '../utilities/heading';
import 		Link 				from '../utilities/link';
import 		Paragraph 			from '../utilities/paragraph';
import 		layouts 			from '../../styles/layout';
import 		scenes 				from '../../styles/scene';

export default class InActive extends React.Component {

	render () {

		const 	theme 		= this.props.theme 		,
				layout 		= layouts 	( theme ) 	,
				scene 		= scenes 	( theme ) 	,
				navigate 	= this.props.navigate 	;

		// If we're mining don't render
		if ( ! this.props.active ) {
			return null;
		}
			
		return (
			<ScrollView 	style = { scene.body 	}>
				<View 		style = { layout.page 	}>
					<Heading 
						text 	= 'Disclaimer'
						theme 	= { theme }
					/>
					<Text style = { layout.space }>
						<Bold 
							text 	= 'Please note '
							theme 	= { theme }
						/>
						<Paragraph 
							text 	= 'that mining on your device is probably not profitable at all and long term mining could possibly damage your device.' 
							theme 	= { theme }
						/>
					</Text>
					<Text style = { layout.space }>
						<Bold 
							text 	= 'Ensure '
							theme 	= { theme }
						/>
						<Paragraph 
							text 	= 'you have ' 
							theme 	= { theme }
						/>
						<Link 
							press 	= {() => navigate ( 'api' )}
							text 	= 'set your API keys'
							theme 	= { theme }
						/>
						<Paragraph 
							text 	= ' within the settings screen so that any successful minining is credited to your account.' 
							theme 	= { theme }
						/>
					</Text>
					<Text style = { layout.space }>
						<Paragraph 
							text 	= 'At the moment this application only supports mining the Monero digital currency. We will be looking to support more CPU friendly mining currencies as soon as possible.' 
							theme 	= { theme }
						/>
					</Text>
					<Button 
						press 	= { this.props.activate }
						theme 	= { theme 				}
						text 	= 'Start Mining'
					/>
				</View>
			</ScrollView>
		);
	}
};
