export class Field {
  _id?: any;
  name?: any;
  type?: any;
  icon?: any;
  toggle?: any;
  label?: any;
  placeholder?: any;
  className?: any;
  handle?: any;
  min?: number;
  max?: number;
  inline?: any;
  value?: any;
  fieldOptionList?: any;
  isRequired?: any;
  isActive?: boolean;
  isFilterable?: boolean;
  isSortable?: boolean;
  isDeleted?:boolean;
}

export class Response {
  name?: any;
  isRequired?: boolean;
  isFilterable?: boolean;
  isSortable?: boolean;
  isDeleted?: boolean;
  fkFieldTypeId?: any;
  form_section?: any;
  isActive?: any;
  fieldOptionList?: any;
  placeholder?: any;
}

export class Section {
  name?: any = "";
  isActive?: boolean = true;
  isDeleted?: boolean = false;
  fieldList?: any;
}

export class value {
  name?: any = "";
  value?: any = "";
  isActive?: boolean = true;
  isDeleted?: boolean = false;
}

export interface IProperty {
  url?: string;
  loading?: boolean;
  itemsPerPage?: number;
  total?: number;
  p?: number;
  sizeLimit?: number;
  title?: string;
  text?: string;
  items?: any[];
  sub?: any;
  isBlocked?: boolean;
  isDeleted?: boolean;
  isEmailVerified?: string;
  successMsg?: string;
  msg?: string;
  userId?: string;
  status?: number;
  userPlaceholder?: string;
  searchKey?: string;
  fullName?: string;
  email?: string;
  countryCode?: string;
  dialCode?: string;
  phoneNumber?: string;
  value?: Date;
  data?: any;
  name_es?: string;
  name_en?: string;
  countries?: any;
  states?: any;
  cities?: any;
  countries1?: any;
  states1?: any;
  cities1?: any;
  countries2?: any;
  states2?: any;
  cities2?: any;
  localities?: any;
  buildings?: any;
  country_id?: string;
  state_id?: string;
  city_id?: string;
  locality_id?: string;
  building_id?: string;
  countryCount?: number;
  stateCount?: number;
  cityCount?: number;
  stateCityCount?: number;
  localityCount?: number;
  buildingCount?: number;
  countriesAdd?: any;
  statesAdd?: any;
  citiesAdd?: any;
  localitiesAdd?: any;
  country_idAdd?: string;
  state_idAdd?: string;
  city_idAdd?: string;
  locality_idAdd?: string;
  countryCountAdd?: number;
  stateCountAdd?: number;
  cityCountAdd?: number;
  localityCountAdd?: number;
  successText?: string;
  propertyTypes?: any;
  propertyTypesCount?: number;
  amenities?: any;
  amenitiesCount?: number;
  projectTypes?: any;
  projectTypesCount?: number;
  routeName?: string;
  icon?: any;
  userType?: string;
  overlay?: any;
  is_broker_seller_dev?: number;
  is_buyer_renter?: number;
  is_broker?: number;
  is_data_collector?: number;
  image?: any;
  index?: number;
  name?: string;
  phone?: string;
  type?: number;
  property_id?: string;
  banks?: any;
  bankCount?: string;
  flag?: number;
  page?: number;
  property_for?: any;
  status_id?: any;
  type_id?: any;
  post_type?: any;
  developer_id?: any;
}

