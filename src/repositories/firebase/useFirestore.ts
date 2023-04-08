import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {Collections} from '../../common/models/Collections';
import React from 'react';

type Props = {
  collectionType: Collections;
};

export function useFireStore({collectionType}: Props) {
  const doc = React.useMemo(
    () => firestore().collection(collectionType),
    [collectionType],
  );

  async function addDoc<T extends Object>(data: T) {
    await doc.add(data);
  }

  async function getDoc(
    fieldPath: string | number,
    whereFilter: FirebaseFirestoreTypes.WhereFilterOp,
    value: any,
  ) {
    const result = await doc.where(fieldPath, whereFilter, value).get();

    return result;
  }

  return {addDoc, getDoc};
}
