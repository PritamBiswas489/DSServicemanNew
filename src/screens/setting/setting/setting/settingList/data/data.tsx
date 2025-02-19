import {
  Company,
  Calendar,
  Commission,
  Identity,
  Bank,
  Package,
  Review,
  Subscription,
  Delete,
  Logout,
  Person,
  AccountInformationIcon,
  BusinessInformationIcon,
  BusinessSettingsIcon,
  CommissionIcon,
  PromotionalCostIcon
} from '@utils/icons';
import { settingType } from './types';
import appColors from '@theme/appColors';

export const settingData: Array<settingType> = [
  {
    title: 'profileSetting.general',
    data: [
      {
        icon: <Person />,
        name: 'newDeveloper.editProfileMenu',
        gotoScreen: 'EditServiceMen',
        darkIcon: <Person color={appColors.white} />,
      },
      
    
       
      
     
     
       
      
    ],
  },
   
  // {
  //   showDivider: true,
  //   title: 'profileSetting.redZone',
  //   data: [
  //     {
  //       icon: <Delete color={appColors.error} />,
  //       name: 'profileSetting.deleteAccount',
  //       gotoScreen: 'showModal',
  //       darkIcon: <Delete color={appColors.error} />,
  //     },
  //   ],
  // },
];

export const serviceMenSettingData: Array<settingType> = [
  {
    title: 'profileSetting.general',
    data: [
      {
        icon: <Person />,
        name: 'profileSetting.setting',
        gotoScreen: 'UserProfileSetting',
        darkIcon: <Person color={appColors.white} />,
      },
      {
        icon: <Bank />,
        name: 'profileSetting.bankDetails',
        gotoScreen: 'BankDetails',
        darkIcon: <Bank color={appColors.white} />,
      },
      {
        icon: <Identity color={appColors.darkText} strokeWidth={'1.3'} />,
        name: 'profileSetting.idVerification',
        gotoScreen: 'IdVerification',
        darkIcon: <Identity color={appColors.white} />,
      },
    ],
  },
  {
    title: 'profileSetting.aboutApp',
    data: [
      {
        icon: <Calendar />,
        name: 'profileSetting.timeSlots',
        gotoScreen: 'TimeSlots',
        darkIcon: <Calendar color={appColors.white} />,
      },
      {
        icon: <Commission strokeWidth={'1'} color={appColors.darkText} />,
        name: 'profileSetting.commissionDetails',
        gotoScreen: 'CommissionHistory',
        darkIcon: <Commission color={appColors.white} />,
      },
      {
        icon: <Review />,
        name: 'profileSetting.myReviews',
        gotoScreen: 'Reviews',
        darkIcon: <Review color={appColors.white} />,
      },
    ],
  },
  {
    showDivider: true,
    title: 'profileSetting.redZone',

    data: [
      {
        icon: <Delete />,
        name: 'profileSetting.deleteAccount',
        gotoScreen: 'showModal',
        darkIcon: <Delete color={appColors.white} />,
      },
      {
        icon: <Logout />,
        name: 'profileSetting.logOut',
        gotoScreen: 'Login',
        darkIcon: <Logout color={appColors.white} />,
      },
    ],
  },
];
