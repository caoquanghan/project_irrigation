import { useLazyGetUserQuery } from "@/Services";
import ProfileScreen from "./ProfileScreen";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from "react-redux";
import { editprofile } from "@/Store/reducers/profile";

const ProfileScreenContainer = () => {
  // // const [fetchOne, result] = useLazyGetUserQuery();
  // // const dispatch = useDispatch();
  // const [user, setUser] = useState('');
  const handleFetchOne = async () =>{
    const value = await AsyncStorage.getItem('user');
    console.log(value);
  }
  // handleFetchOne();
 console.log(handleFetchOne());

  return <ProfileScreen data={handleFetchOne()} ></ProfileScreen>;
};
export default ProfileScreenContainer;
