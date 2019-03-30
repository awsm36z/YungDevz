import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-elements';
import colors from 'config/colors';
import QCActionButton from 'components/QcActionButton';





class EvaluationPage extends Component {


  render() {
    return (

      <View
        style={{
          alignContent: "center",
          
          justifyContent: "center",
        }}>
        <Rating
          showRating
          onFinishRating={this.ratingCompleted}
          style={{
            paddingVertical: 10,
            backgroundColor: colors.lightGrey,
            
          }}
        />

      <QCActionButton
      text = "Confirm Rating"
      onPress={()=>{
          EvaluationInfo.push({
          
          })
      }}
      />
      </View>

    )
  }

}
export default EvaluationPage
