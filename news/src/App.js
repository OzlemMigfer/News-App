import React from "react";
import {Text,SafeAreaView,FlatList,StyleSheet, ScrollView, Dimensions, Image} from 'react-native';
import news_data from './news_data.json';
import NewsCard from "./components/NewsCard/NewsCard";
import news_banner_data from './news_banner_data.json';

function App(){
  const renderNews = ({ item }) => <NewsCard news = {item}/>;
  const keyNews = item => item.u_id.toString();

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showHorizontalScrollIndicator={false}>
            {news_banner_data.map(bannerNews => (
              <Image 
                style={styles.banner_image}
                source={{ uri:bannerNews.imageUrl }}
              />
            ))}
          </ScrollView>
        )}
        keyExtractor={ keyNews }
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'gray'
  },
  headerText:{
    fontSize:45,
    fontWeight:'bold',
    color:'black'
  },
  banner_image:{
    height:Dimensions.get('window').height / 5,
    width:Dimensions.get('window').width / 2
  }
});

export default App;