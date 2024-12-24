import { createSlice, PayloadAction } from "@reduxjs/toolkit";
 

interface FieldState {
    company_name:string;
    company_phone_country:string;
    company_phone_dial_code:string;
    company_phone:string;
    company_address:string;
    company_email:string;
    contact_person_name:string;
    contact_person_country:string;
    contact_person_dial_code:string;
    contact_person_phone:string;
    contact_person_email:string;
    provider_name:string;
    provider_email:string;
    provider_phone_country:string;
    provider_phone_dial_code:string;
    provider_phone:string;
    provider_password:string;
    zone_id : string;
    identity_type: string;
    identity_number:string;
    latitude:string;
    longitude:string;
    company_logo:string;
    identity_front_image: string;
}

interface SetDataPayload {
  field: keyof FieldState;
  data: string | number | boolean;
}

const initialState: FieldState = {
    company_name: '',
    company_phone_country : '',
    company_phone_dial_code:'',
    company_phone:'',
    company_address:'',
    company_email:'',
    contact_person_name:'',
    contact_person_country : '',
    contact_person_dial_code:'',
    contact_person_phone:'',
    contact_person_email:'',
    provider_name:'',
    provider_email:'',
    provider_phone_country:'',
    provider_phone_dial_code:'',
    provider_phone:'',
    provider_password:'',
    zone_id : '',
    identity_type :'',
    identity_number : '',
    latitude: '',
    longitude: '',
    company_logo : '',
    identity_front_image: '',
};

const registerFieldErrorSlice = createSlice({
  name: "userError",
  initialState: initialState,
  reducers: {
    setData(state:any, action: PayloadAction<SetDataPayload>) {
      state[action.payload.field] = action.payload.data;
    },
    resetState(state: FieldState) {
      return initialState;
    },
  },
});

export const registerFieldErrorActions = registerFieldErrorSlice.actions;
export default registerFieldErrorSlice;
