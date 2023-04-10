import React, {useState} from 'react';
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useAppContext} from '../../context';
import {AppButton} from '../../components';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Colors} from '../../constants';
import StarRating from 'react-native-star-rating-widget';

export default function WriteReview() {
  const {theme} = useAppContext();
  const styles = styleSheet({theme});
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const [showReviewBox, setShowReviewBox] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigation.goBack();
    }, 2000);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.wrapper}>
          <View style={styles.container}>
            {showReviewBox ? (
              <View>
                <Text style={styles.label}>Write your review</Text>
                <TextInput
                  style={styles.textInput}
                  multiline={true}
                  placeholder="What do you think about the service?"
                  placeholderTextColor={theme === 'dark' ? Colors.grey : 'auto'}
                />
              </View>
            ) : (
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingTitle}>How was the service?</Text>
                <StarRating
                  color="#ffb700"
                  rating={rating}
                  animationConfig={{scale: 1}}
                  starSize={55}
                  enableHalfStar={false}
                  emptyColor={theme === 'dark' ? Colors.darkGrey : '#c9c9c9'}
                  starStyle={styles.starStyle}
                  enableSwiping
                  onChange={newRating => {
                    setRating(newRating);
                    setTimeout(() => {
                      setShowReviewBox(true);
                    }, 500);
                  }}
                />
              </View>
            )}
          </View>
          {showReviewBox && (
            <AppButton
              title="Submit Review"
              full
              onPress={handleSubmit}
              isLoading={isLoading}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styleSheet = ({theme}: IStyleSheet) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      padding: 16,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    keyboardAvoidingView: {
      flex: 1,
    },
    label: {
      fontWeight: '700',
      color: theme === 'dark' ? Colors.white : Colors.dark,
      marginBottom: 10,
      fontSize: 18,
    },
    textInput: {
      color: theme === 'dark' ? Colors.white : Colors.dark,
      borderWidth: 1.5,
      borderColor: '#b2beb590',
      borderRadius: 8,
      padding: 12,
      paddingTop: 12,
      height: 150,
      textAlignVertical: 'top',
    },
    ratingContainer: {
      marginBottom: 32,
      marginTop: 16,
      alignItems: 'center',
    },
    ratingTitle: {
      fontSize: 20,
      fontWeight: '700',
      marginBottom: 8,
      color: theme === 'dark' ? Colors.white : Colors.dark,
    },
    starStyle: {
      marginHorizontal: -2,
    },
  });
