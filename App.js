import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AddPlayersScreen from './screens/AddPlayersScreen';
import GameScreen from './screens/GameScreen';

const navigator = createStackNavigator({
  AddPlayers: AddPlayersScreen,
  Game: GameScreen
},
{
  initialRouteName:"AddPlayers",
  defaultNavigationOptions: {
    title: "DALEVUIUUUU"
  }
}
);

export default createAppContainer(navigator);