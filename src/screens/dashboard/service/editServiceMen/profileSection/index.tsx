import { View, Image, TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { Camera } from '@utils/icons';
import { ImageLibraryOptions } from 'react-native-image-picker';
import { handleImagePicker } from '@utils/functions';
import { useValues } from '../../../../../../App';
import appColors from '@theme/appColors';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { addServiceManFieldActions } from '@src/store/redux/add-service-man-redux';
export default function ProfileSection({ profileImage, setProfileImage,setUpdatedProfileImage }: {
  profileImage: string,
  setProfileImage: (value: string) => void
  setUpdatedProfileImage: (value: string) => void
}) {

  const { isDark } = useValues()
  const openImage = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
    handleImagePicker(options, (imageUri: string) => {
      setProfileImage(imageUri);
      setUpdatedProfileImage(imageUri);
    });
  };

  const errorProfileImage = ''

  return (
    <>
      <View style={[styles.container, { backgroundColor: isDark ? appColors.darkText : appColors.white }]}></View>
      <View style={styles.mainView}>
        <View style={[styles.mainContainer, { backgroundColor: isDark ? appColors.darkText : appColors.white }]}>
          {profileImage ? (
            <TouchableOpacity onPress={openImage} activeOpacity={0.9}>
              <Image source={{ uri: profileImage }} style={styles.imageStyle} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity activeOpacity={0.9} onPress={openImage}>
              <Camera />
            </TouchableOpacity>
          )}
        </View>
        <View>{errorProfileImage && <Text style={styles.error}>{errorProfileImage}</Text>}</View>
      </View>
    </>
  );
}
