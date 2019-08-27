import { createStackNavigator, createAppContainer } from "react-navigation";

import PeoplePage from "./src/screens/PeoplePage";
import PersonDetail from "./src/screens/PersonDetail";

const StackNavigator = createStackNavigator({
    'Main': {
        screen: PeoplePage
    },
    'PersonDetail': {
        screen: PersonDetail
    }
}, {
    defaultNavigationOptions: {
        title: 'Contatos',
        headerTitleStyle: {
            color: 'white',
            fontSize: 30,
            flexGrow: 1,
            textAlign: 'center'
        },
        headerStyle: {
            backgroundColor: '#6ca2f7',
            borderBottomWidth: 1,
            borderBottomColor: '#C5C5C5'
        }

    }
});

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;
