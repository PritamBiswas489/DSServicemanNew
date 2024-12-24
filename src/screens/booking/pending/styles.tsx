import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerStyle: {
    height: windowHeight(12),
  },
  mainContainer: {
    backgroundColor: appColors.boxBg,
    flex: 1,
    marginTop: windowHeight(1),
    paddingBottom: windowHeight(1.6),
    borderBottomColor: appColors.border,
    borderBottomWidth: 1,
  },
  innerContainer: {
    paddingTop: windowHeight(2),
    borderColor: appColors.border,
    borderWidth: 1.4,
    borderTopLeftRadius: windowHeight(2.4),
    borderTopRightRadius: windowHeight(2.4),
    borderBottomWidth: 0,
    paddingBottom: windowHeight(1),
  },
  titleStyle: {
    marginHorizontal: windowHeight(2),
    marginTop: windowHeight(2),
    marginBottom: windowWidth(3),
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4HALF,
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(2),
  },
});
