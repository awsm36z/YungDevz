import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-elements';
import colors from 'config/colors';

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
      </View>

    )
  }

}
export default EvaluationPage
