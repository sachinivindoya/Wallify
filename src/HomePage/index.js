import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Left, Body, Right, Text, Title, Button, Icon, Input, Item } from 'native-base';
// import ExploreTab from './ExploreTab'
// import FavoritesTab from './FavoritesTab'
class HomePage extends Component{


    state = {
            	favorites:[],
                isExploreLoading: false,
                searchBar: false,
                query:''
            }

            onQueryChange = (query) => {
                this.setState({ query })
            }
            
            onSearchClick = ()=>{

            }




    render () {

        return(
          <Container>
            <Header hasTabs searchBar={this.state.searchBar}>
                {this.state.searchBar ?
                <>
                <Item>
                    <Icon name='search'/>
                    <Input placeholder='Search' onChangeText={this.onQueryChange}></Input>
                    <Button transparent onPress={() => this.onSearchClick()}>
                      <Icon name="close" />
                    </Button>
                </Item>
                <Button transparent>
                    <Text>Search</Text>
                </Button>
                </>:
                <>
                    <Left>
                        <Button transparent onPress={()=>this.props.openDrawer()}>
                            <Icon name = 'menu'/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Wallify</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={()=>this.onSearchClick()}>
                            <Icon name = 'search'/>
                        </Button>
                    </Right>
                </>
                }

            </Header>

            {/* <Tabs> */}
                {/* <Tab heading = { */}
                    {/* // <TabHeading> */}
                        {/* <Text>Explore</Text> */}
                        {/* {this.state.isExploreLoading && <ActivityIndicator size='small' />} */}
                    {/* </TabHeading>}> */}
                    {/* <ExploreTab query={this.state.query}  */}
                    {/* // setExploreLoader={this.setExploreLoader} */}
                    {/* //  addToFavorites= {this.addToFavorites} /> */}
                    {/* </Tab> */}
                    {/* <Tab heading={<TabHeading><Text>Favorites</Text></TabHeading>}> */}
                        {/* <FavoritesTab favorites={this.state.favorites} /> */}
                    {/* </Tab> */}
            {/* </Tabs> */}
          </Container>

        );
    }
}

export default HomePage;