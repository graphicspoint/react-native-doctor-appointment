import { View, Text, FlatList, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Services/GlobalApi'

const Slider = () => {
  const [silderList, setSliderList] = useState();
  // const silderList = [ 
  //   {
  //     id:1,
  //     name: 'slider 1',
  //     imageUrl: 'https://photomedia.in/wp-content/uploads/2023/04/yellow-red-abstract-background-2048x1368.jpg'
  //   },
  //   {
  //     id:1,
  //     name: 'slider 1',
  //     imageUrl: 'https://photomedia.in/wp-content/uploads/2023/04/red-blue-abstruct-background-2048x1365.jpg'
  //   },
  //   {
  //     id:1,
  //     name: 'slider 1',
  //     imageUrl: 'https://photomedia.in/wp-content/uploads/2023/04/yellow-abstruct-background-2048x1365.jpg'
  //   },
  // ]
  useEffect(() => {
    getSlider();
    
  });

  const getSlider = () => {
    GlobalApi.getSlider().then(resp => {
      console.log(resp.data.data);
      setSliderList(resp.data.data);
    })
  }
  return (
    <View style={{marginTop:10}}>
      <FlatList 
      data={silderList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={({item, index}) => (
        <Image source={{ uri:item.imageUrl }} style={{width:Dimensions.get('screen').width*0.9, height: 170, borderRadius:7, margin:2}}/>
      )}
      />
    </View>
  )
}

export default Slider