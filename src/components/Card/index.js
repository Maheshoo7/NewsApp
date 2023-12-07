import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/AntDesign';
import {RectButton} from 'react-native-gesture-handler';

function Card(props) {
  const {title, imageUrl, author, id, onDeleteClick, onPinClick} = props;

  const renderRightActions = () => {
    return (
      <>
        <RectButton
          onPress={() => onDeleteClick(id)}
          style={styles.rightAction}>
          <Icon name="delete" size={26} color="#fff" />
        </RectButton>
        <RectButton
          onPress={() => onPinClick(id)}
          style={styles.rightPinAction}>
          <Icon name="pushpino" size={26} color="#fff" />
        </RectButton>
      </>
    );
  };

  return (
    <Swipeable key={id} renderRightActions={renderRightActions}>
      <View style={styles.card}>
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.author}>By {author}</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={{uri: imageUrl}} style={styles.image} />
          </View>
        </View>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    margin: 8,
    marginLeft: 14,
    marginRight: 14,
    padding: 14,
    backgroundColor: '#272829',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  textContainer: {
    flex: 1,
  },
  imageContainer: {
    alignSelf: 'center',
    paddingLeft: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: 'white',
  },
  author: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: 'rgba(256,256,256,0.4)',
  },
  image: {
    width: 100,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  rightAction: {
    paddingHorizontal: 24,
    backgroundColor: '#ef476f',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginRight: 14,
    borderRadius: 8,
  },
  rightPinAction: {
    paddingHorizontal: 24,
    backgroundColor: '#1982c4',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginRight: 6,
    borderRadius: 8,
  },
  actionText: {
    color: 'white',
    fontWeight: '600',
    padding: 20,
  },
});

export default Card;
