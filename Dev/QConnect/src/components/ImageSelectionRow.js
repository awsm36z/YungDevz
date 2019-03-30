import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import {Icon} from 'react-native-elements'
import TouchableAvatar from 'components/TouchableAvatar'
import colors from 'config/colors'
import teacherImages from 'config/teacherImages'
import PropTypes from 'prop-types'

//---------------------------------------------------------
// Renders set of passed in images in a single row, and adds 
//  an "expand more" ellipsis in the end that calls back to passed in function
//  to show more images
//--------------------------------------------------------------
export default ImageSelectionRow = (props) => {
    const {highlightedImagesIndices, onImageSelected, onShowMore, selectedImageIndex} = props;

    return (
        <View style={styles.rowContainer}>
            {highlightedImagesIndices.map((index) => {
                return (
                    <View
                    key={index}>
                    <TouchableAvatar
                        index={index}
                        image={teacherImages.images[index]}
                        selected={selectedImageIndex === index}
                        onPress={() => onImageSelected(index)} />
                    </View>
                )
            })}
            <Icon
                raised
                name='ellipsis-h'
                type='font-awesome'
                color={colors.primaryDark}
                onPress={() => {
                    onShowMore();
                }} />
        </View>
    );
}

ImageSelectionRow.propTypes = {
    highlightedImagesIndices: PropTypes.array.isRequired,
    onImageSelected: PropTypes.func.isRequired,
    onShowMore: PropTypes.func.isRequired,
    selectedImageIndex: PropTypes.number.isRequired
}

//Styles for the Teacher profile class
const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        paddingRight: 5
    },
});