import React , {useEffect , useState} from 'react';
import {View,Text , TouchableOpacity , FlatList , StyleSheet , Dimensions , Image , TextInput , AsyncStorage} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Navbar from '../components/Navbar';
import TextResize from '../components/textResize';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Overview = () => {

  const [data , setData] = useState([]);
  const [value , setValue] = useState([]);

  const fetchData = async () => {
    try {
      let response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyA0XtcevSqT3FMYi3KuIjfhcmuymp6awbE&type=video&part=snippet&maxResults=50&q=${value}`
      );
      let res = await response.json();
      console.log("Comin Here");
      setData(res.items)
      // console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {

  },[])

  return (
    <View>
        <Navbar>
          <View>
            <TouchableOpacity onPress={() => {
              AsyncStorage.clear();
            }}>
              <MaterialCommunityIcons name="logout" color={"white"} size={24} />
            </TouchableOpacity>
          </View>
        </ Navbar>
          <View>
            <View style={styles.search}>
              <View style={styles.bar}>
                <View style={styles.first}>
                  <MaterialCommunityIcons name="youtube" color={"red"} size={40} />
                </View>
                <View style={styles.second}>
                  <TextInput style={styles.searchBar} value={value} onChangeText={setValue} onSubmitEditing={fetchData}/> 
                </View>
                  <MaterialCommunityIcons style={{marginTop: 5 , position: "absolute" , left: windowWidth*0.81 , top: windowHeight*0.01}} name="tune" color={"grey"} size={24} />
                <View style={styles.third}>
                <TouchableOpacity>
                      <MaterialCommunityIcons style={{marginTop: 5}} name="dots-vertical" color={"grey"} size={24} />
                      </TouchableOpacity>
                </View>

              </View>
            </View>
            {data.length > 0 ? 
            <FlatList 
                data={data}        
                keyExtractor={item => item.etag}    
                renderItem={({item}) => {
                  return(
                    <TouchableOpacity>
                    <View style={styles.container}>
                      <View style={styles.image}>
                        <Image
                          style={styles.thumbnail}
                          source={{
                            uri: item.snippet.thumbnails.default.url
                          }}
                        />
                      </View>
                      <View style={styles.tab}>
                        <View>
                          <TextResize styles={{fontWeight: "bold" }} line={item.snippet.title} value={50} />
                        </View>
                        <View>
                          <TextResize styles={{ }} line={item.snippet.channelTitle} value={25} />
                        </View>
                        <View>
                          <TextResize styles={{ marginTop:10 }} line={item.snippet.description} value={50} />
                        </View>
                      </View>
                      <TouchableOpacity>
                      <MaterialCommunityIcons style={{marginTop: 5}} name="dots-vertical" color={"grey"} size={24} />
                      </TouchableOpacity>
                    </View>
                    </TouchableOpacity>
                  )
                }}
            /> :
            <View style={{
              alignItems: "center",
              justifyContent: "center"
            }}>
              <Text>
                Search Somthing !!!
              </Text>
            </ View> }
          </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:windowHeight*0.15,
    width: windowWidth,
    marginBottom:2,
    flexDirection: "row"
  },
  tab: {
    flex: 0.5,
    marginLeft: 10,
    marginRight: 10
  },
  image: {
    flex: 0.5
  },
  thumbnail: {
    flex: 1
  },
  search: {
    width: windowWidth,
    height: windowHeight*0.07,
  },
  bar: {
    flex: 1,
    flexDirection: "row"
  },
  first: {
    flex: 0.15,
    alignItems:"center",
    justifyContent: "center"
  },
  second: {
    flex: 0.75,
    
  },
  third: {
    flex: 0.1,
    position: "absolute",
    right: 0,
    top: 10
  },
  searchBar: {
    flex: 1,
    marginVertical: 10,
    backgroundColor: "#d3d3d3",
    borderRadius: 5
  }
});

export default Overview;
