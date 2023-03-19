import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../constants';
import {useAppContext} from '../../../context';

export default function SectionHeader({title}: {title: string}) {
  const {theme} = useAppContext();
  const styles = styleSheet({theme});

  return (
    <View style={[styles.sectionTitleContainer, styles.marginInline]}>
      <Text style={styles.sectionTitle}>{title}</Text>

      <TouchableOpacity>
        <Text style={styles.sectionRightActionText}>See all</Text>
      </TouchableOpacity>
    </View>
  );
}

const styleSheet = ({theme}: IStyleSheet) =>
  StyleSheet.create({
    sectionTitleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 10,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: theme === 'dark' ? Colors.white : Colors.dark,
    },
    sectionRightActionText: {
      color: Colors.blue,
      fontWeight: '300',
    },
    marginInline: {
      marginHorizontal: 16,
    },
  });
