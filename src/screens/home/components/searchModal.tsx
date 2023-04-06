import {
  Keyboard,
  Modal,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from '../../../constants';
import {AppTextInput} from '../../../components';
import {useAppContext} from '../../../context';

interface ISearchModal {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<
    React.SetStateAction<ISearchModal['modalVisible']>
  >;
}

export default function SearchModal({
  modalVisible,
  setModalVisible,
}: ISearchModal) {
  const {theme} = useAppContext();
  const styles = styleSheet({theme});

  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <SafeAreaView style={styles.modal}>
        <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContainer}>
            <AppTextInput
              placeholder="Search..."
              handleBackArrowPress={() => setModalVisible(false)}
            />
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </Modal>
  );
}

const styleSheet = ({theme}: IStyleSheet) =>
  StyleSheet.create({
    modal: {
      flex: 1,
    },
    modalContainer: {
      flex: 1,
      padding: 16,
      backgroundColor: theme === 'dark' ? Colors.dark : Colors.white,
    },
  });
