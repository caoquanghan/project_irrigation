import { useLazyGetUserQuery } from "@/Services";
import ProfileScreen from "./ProfileScreen";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from "react-redux";
import { editprofile } from "@/Store/reducers/profile";

const ProfileScreenContainer = () => {
  const [fetchOne, result] =
  useLazyGetUserQuery();
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  useEffect(() => {
    AsyncStorage.getItem("user").then((value) => {setUser(JSON.parse(value)) });
    console.log('user',user);
    fetchOne(user.id);
    console.log(result);
    
    // dispatch(editprofile({ name: data.firstName + ' ' +data.lastName, email: data.email}));
  }, []);
  console.log('user',result);
  return <ProfileScreen data={result} ></ProfileScreen>;
};
export default ProfileScreenContainer;
