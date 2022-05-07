import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BucketListCard from './BucketListCard';
import BucketListCardNewModal from './BucketListCardNewModal';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { apiCallBegan } from '../../store/apiActions';
import bucketListApi from '../../../api/bucketListApi';
import { useState } from 'react';

const BucketList = () => {
  const dispatch = useDispatch();
  const { bucketList } = useSelector((state) => state.bucketList);
  const { couple } = useSelector((state) => state.couple);

  // modal for create new bucket list item
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    //get bucket list by couple id
    dispatch(apiCallBegan(bucketListApi.getBucketListByCoupleId(couple.id)));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.functionSection}>
        <Text>Filter</Text>

        <TouchableOpacity onPress={toggleModal}>
          <Text>Add New Card</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.list}
        data={bucketList}
        renderItem={({ item }) => <BucketListCard item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={3}
      />

      <BucketListCardNewModal
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
  },

  functionSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
  },
});

export default BucketList;
