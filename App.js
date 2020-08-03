import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AddPlayersScreen from './screens/AddPlayersScreen';

const navigator = createStackNavigator({
  AddPlayers: AddPlayersScreen,
},
{
  initialRouteName:"AddPlayers",
  defaultNavigationOptions: {
    title: "Add Players"
  }
}
);

export default createAppContainer(navigator);