import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants';
import {useAppContext} from '../context';

interface ISectionHeader {
  title: string;
  withPaddingHorizontal?: boolean;
}

export default function SectionHeader({
  title,
  withPaddingHorizontal = true,
}: ISectionHeader) {
  const {theme} = useAppContext();
  const styles = styleSheet({theme, withPaddingHorizontal});

  return (
    <View style={[styles.sectionTitleContainer, styles.marginInline]}>
      <Text style={styles.sectionTitle}>{title}</Text>

      <TouchableOpacity>
        <Text style={styles.sectionRightActionText}>See all</Text>
      </TouchableOpacity>
    </View>
  );
}

const styleSheet = ({theme, withPaddingHorizontal}: any) =>
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
      color: theme === 'dark' ? Colors.white : Colors.black,
    },
    sectionRightActionText: {
      color: Colors.blue,
    },
    marginInline: {
      marginHorizontal: withPaddingHorizontal ? 16 : 0,
    },
  });
