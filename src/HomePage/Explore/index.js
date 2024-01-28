import { Component } from "react";
import { Text, FlatList, View } from 'react-native';

class ExploreTab extends Component{
    state = {}

    render () {
         return (
                <View style={StyleSheet.MainContainer}>
                    <FlatList
                    data={this.state.images}
                    renderItem={this.renderRow}
                    numColumns={2}
                    ></FlatList>
                </View>
          );
   }
    
}
export default ExploreTab
