import {
  AcRepair,
 
   
  Painting,
  
  Salon,
  ProfileIcon,
  SubscriptionsIcon,
  ChatIcon,
  SettingIcon,
  WithdrawListIcon,
  PaymentIcon,
  ReportsIcon,
  AboutUsIcon,
  PrivacyPolicyIcon,
  TermsConditionsIcon,
  RefundPolicyIcon,
  LogoutIcon
} from '@utils/icons';
import {HomeCategoryType} from './types';


export const categoriesData: Array<HomeCategoryType> = [
  {
    icon: <ProfileIcon height={'36'} width={'36'} />,
    title: 'newDeveloper.moreMenuProfile',
    goToScreen:'ProfileSettings' 
  },
  { 
    icon: <ChatIcon height={'36'} width={'36'} />,
    title: 'newDeveloper.moreMenuChat',
    goToScreen:'ChatHistory'
   
  },
  {
    icon: <SettingIcon height={'36'} width={'36'} />,
    title: 'newDeveloper.moreMenuSettings',
    goToScreen:'AppSetting'
   
  },
  {
    icon: <AboutUsIcon height={'36'} width={'36'} />,
    title: 'newDeveloper.moreMenuAboutus',
    goToScreen:'about_us'
   
  },
  {
    icon: <PrivacyPolicyIcon height={'36'} width={'36'} />,
    title: 'newDeveloper.moreMenuPrivacyPolicy',
    goToScreen:'privacy_policy'
  },
  {
    icon: <TermsConditionsIcon height={'36'} width={'36'} />,
    title: 'newDeveloper.moreMenuTermsandconditions',
    goToScreen:'terms_and_conditions'
   
  },
  {
    icon: <RefundPolicyIcon height={'36'} width={'36'} />,
    title: 'newDeveloper.moreMenuRefundsPolicy',
    goToScreen:'refund_policy'
   
  },
  {
    icon: <LogoutIcon height={'36'} width={'36'} />,
    title: 'newDeveloper.moreMenuLogout',
    goToScreen:'logoutProcess'
  },
];
