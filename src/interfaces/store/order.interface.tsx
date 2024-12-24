interface DeliveryAddress {
    contact_person_name: string;
    contact_person_number: string;
    contact_person_email: string;
    address_type: string;
    address: string;
    floor: string;
    road: string;
    house: string;
    longitude: string;
    latitude: string;
  }
  
  interface Customer {
    id: number;
    f_name: string;
    l_name: string;
    phone: string;
    email: string;
    image: string | null;
    is_phone_verified: number;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    cm_firebase_token: string;
    status: number;
    order_count: number;
    login_medium: string | null;
    social_id: string | null;
    zone_id: number;
    wallet_balance: number;
    loyalty_point: number;
    ref_code: string;
    current_language_key: string;
    ref_by: string | null;
    temp_token: string | null;
    module_ids: string;
    image_full_url: string | null;
    storage: unknown[];
  }
  
  interface StoreTranslation {
    id: number;
    translationable_type: string;
    translationable_id: number;
    locale: string;
    key: string;
    value: string;
    created_at: string | null;
    updated_at: string | null;
  }
  
  interface Store {
    id: number;
    name: string;
    phone: string;
    email: string;
    logo: string;
    latitude: string;
    longitude: string;
    address: string;
    footer_text: string | null;
    minimum_order: number;
    comission: number | null;
    schedule_order: boolean;
    status: number;
    vendor_id: number;
    created_at: string;
    updated_at: string;
    free_delivery: boolean;
    rating: number[];
    cover_photo: string;
    delivery: boolean;
    take_away: boolean;
    item_section: boolean;
    tax: number;
    zone_id: number;
    reviews_section: boolean;
    active: boolean;
    off_day: string;
    self_delivery_system: number;
    pos_system: boolean;
    minimum_shipping_charge: number;
    delivery_time: string;
    veg: number;
    non_veg: number;
    order_count: number;
    total_order: number;
    module_id: number;
    order_place_to_schedule_interval: string | null;
    featured: number;
    per_km_shipping_charge: number;
    prescription_order: boolean;
    slug: string;
    maximum_shipping_charge: number | null;
    cutlery: boolean;
    meta_title: string | null;
    meta_description: string | null;
    meta_image: string | null;
    announcement: number;
    announcement_message: string;
    store_business_model: string;
    package_id: number | null;
    gst_status: boolean;
    gst_code: string;
    logo_full_url: string;
    cover_photo_full_url: string;
    meta_image_full_url: string | null;
    translations: StoreTranslation[];
    storage: unknown[];
  }
  
  interface ModuleTranslation {
    id: number;
    translationable_type: string;
    translationable_id: number;
    locale: string;
    key: string;
    value: string;
    created_at: string | null;
    updated_at: string | null;
  }
  
  interface Module {
    id: number;
    module_name: string;
    module_type: string;
    thumbnail: string;
    status: string;
    stores_count: number;
    created_at: string;
    updated_at: string;
    icon: string;
    theme_id: number;
    description: string;
    all_zone_service: number;
    icon_full_url: string;
    thumbnail_full_url: string;
    storage: {
      id: number;
      data_type: string;
      data_id: string;
      key: string;
      value: string;
      created_at: string;
      updated_at: string;
    }[];
    translations: ModuleTranslation[];
  }
  
  export interface StoreOrderInterface {
    id: number;
    user_id: number;
    order_amount: number;
    coupon_discount_amount: number;
    coupon_discount_title: string;
    payment_status: string;
    order_status: string;
    total_tax_amount: number;
    payment_method: string;
    transaction_reference: string | null;
    delivery_address_id: string | null;
    delivery_man_id: number;
    coupon_code: string | null;
    order_note: string | null;
    order_type: string;
    checked: number;
    store_id: number;
    created_at: string;
    updated_at: string;
    delivery_charge: number;
    schedule_at: string;
    callback: string | null;
    otp: string;
    pending: string;
    accepted: string;
    confirmed: string;
    processing: string;
    handover: string;
    picked_up: string;
    delivered: string;
    canceled: string | null;
    refund_requested: string | null;
    refunded: string | null;
    delivery_address: DeliveryAddress;
    scheduled: number;
    store_discount_amount: number;
    original_delivery_charge: number;
    failed: string | null;
    adjusment: string;
    edited: number;
    delivery_time: string | null;
    zone_id: number;
    module_id: number;
    order_attachment: string | null;
    parcel_category_id: string | null;
    receiver_details: string | null;
    charge_payer: string | null;
    distance: number;
    dm_tips: number;
    free_delivery_by: string | null;
    refund_request_canceled: string | null;
    prescription_order: boolean;
    tax_status: string;
    dm_vehicle_id: number;
    cancellation_reason: string | null;
    canceled_by: string | null;
    coupon_created_by: string | null;
    discount_on_product_by: string;
    processing_time: number;
    unavailable_item_note: string | null;
    cutlery: boolean;
    delivery_instruction: string | null;
    tax_percentage: number;
    additional_charge: number;
    order_proof: string | null;
    partially_paid_amount: number;
    is_guest: boolean;
    flash_admin_discount_amount: number;
    flash_store_discount_amount: number;
    cash_back_id: string | null;
    extra_packaging_amount: number;
    ref_bonus_amount: number;
    store_name: string;
    store_address: string;
    store_phone: string;
    store_lat: string;
    store_lng: string;
    store_logo: string;
    store_logo_full_url: string;
    min_delivery_time: number;
    max_delivery_time: number;
    vendor_id: number;
    chat_permission: number;
    review_permission: boolean;
    store_business_model: string;
    item_campaign: number;
    details_count: number;
    module_type: string;
    order_attachment_full_url: unknown[];
    order_proof_full_url: unknown[];
    customer: Customer;
    storage: unknown[];
    store: Store;
    module: Module;
  }
  