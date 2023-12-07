import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text, StyleSheet, FlatList, View} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import {
  fetchListPending,
  fetchBatchPending,
  setPinnedArticles,
  deletePinnedArticle,
} from '../../store/actions/newsList';
import Card from '../../components/Card';

const Home = () => {
  const netInfo = useNetInfo();
  const dispatch = useDispatch();

  const {articles, totalCount, loading, limit} = useSelector(
    state => state.newsList,
  );

  useEffect(() => {
    if (
      netInfo.isConnected === false ||
      netInfo.isInternetReachable === false
    ) {
      dispatch(
        fetchListPending({limit: 10, skip: 0, isInternetReachable: false}),
      );
    } else {
      dispatch(
        fetchListPending({limit: 10, skip: 0, isInternetReachable: true}),
      );
    }
  }, [dispatch, netInfo.isConnected, netInfo.isInternetReachable]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (limit < totalCount) {
        dispatch(fetchBatchPending({limit: limit + 5, skip: limit}));
      } else {
        dispatch(
          fetchListPending({limit: 10, skip: 0, isInternetReachable: true}),
        );
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [dispatch, limit, totalCount]);

  const fetchItems = () => {
    dispatch(fetchBatchPending({limit: limit + 5, skip: limit}));
  };

  const onDeleteClick = index => {
    dispatch(deletePinnedArticle({index}));
  };

  const onPinClick = index => {
    dispatch(setPinnedArticles({index}));
  };

  const renderTitle = () => {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Top Stories</Text>
      </View>
    );
  };

  const renderCard = ({item, index}) => {
    return (
      <Card
        id={index}
        title={item.title}
        author={item.source.name}
        imageUrl={item.urlToImage}
        onDeleteClick={onDeleteClick}
        onPinClick={onPinClick}
      />
    );
  };

  return (
    <FlatList
      data={articles}
      renderItem={renderCard}
      keyExtractor={item => item.id}
      refreshing={loading}
      onRefresh={fetchItems}
      bounces={!loading}
      ListHeaderComponent={renderTitle}
    />
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    padding: 8,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
  },
});

export default Home;
