/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSolutionsInput = {
  id?: string | null
  title?: string | null
  description?: string | null
  image?: string | null
  URL?: string | null
  logo?: string | null
  isActive?: boolean | null
  order?: string | null
  contentID: string
  _version?: number | null
}

export type ModelSolutionsConditionInput = {
  title?: ModelStringInput | null
  description?: ModelStringInput | null
  image?: ModelStringInput | null
  URL?: ModelStringInput | null
  logo?: ModelStringInput | null
  isActive?: ModelBooleanInput | null
  order?: ModelStringInput | null
  contentID?: ModelIDInput | null
  and?: Array<ModelSolutionsConditionInput | null> | null
  or?: Array<ModelSolutionsConditionInput | null> | null
  not?: ModelSolutionsConditionInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelStringInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
  size?: ModelSizeInput | null
}

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null'
}

export type ModelSizeInput = {
  ne?: number | null
  eq?: number | null
  le?: number | null
  lt?: number | null
  ge?: number | null
  gt?: number | null
  between?: Array<number | null> | null
}

export type ModelBooleanInput = {
  ne?: boolean | null
  eq?: boolean | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
}

export type ModelIDInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
  size?: ModelSizeInput | null
}

export type Solutions = {
  __typename: 'Solutions'
  id: string
  title?: string | null
  description?: string | null
  image?: string | null
  URL?: string | null
  logo?: string | null
  isActive?: boolean | null
  order?: string | null
  contentID: string
  createdAt: string
  updatedAt: string
  _version: number
  _deleted?: boolean | null
  _lastChangedAt: number
}

export type UpdateSolutionsInput = {
  id: string
  title?: string | null
  description?: string | null
  image?: string | null
  URL?: string | null
  logo?: string | null
  isActive?: boolean | null
  order?: string | null
  contentID?: string | null
  _version?: number | null
}

export type DeleteSolutionsInput = {
  id: string
  _version?: number | null
}

export type CreateServicesInput = {
  id?: string | null
  title?: string | null
  description?: string | null
  image?: string | null
  URL?: string | null
  logo?: string | null
  isActive?: boolean | null
  order?: number | null
  contentID: string
  _version?: number | null
}

export type ModelServicesConditionInput = {
  title?: ModelStringInput | null
  description?: ModelStringInput | null
  image?: ModelStringInput | null
  URL?: ModelStringInput | null
  logo?: ModelStringInput | null
  isActive?: ModelBooleanInput | null
  order?: ModelIntInput | null
  contentID?: ModelIDInput | null
  and?: Array<ModelServicesConditionInput | null> | null
  or?: Array<ModelServicesConditionInput | null> | null
  not?: ModelServicesConditionInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelIntInput = {
  ne?: number | null
  eq?: number | null
  le?: number | null
  lt?: number | null
  ge?: number | null
  gt?: number | null
  between?: Array<number | null> | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
}

export type Services = {
  __typename: 'Services'
  id: string
  title?: string | null
  description?: string | null
  image?: string | null
  URL?: string | null
  logo?: string | null
  isActive?: boolean | null
  order?: number | null
  contentID: string
  createdAt: string
  updatedAt: string
  _version: number
  _deleted?: boolean | null
  _lastChangedAt: number
}

export type UpdateServicesInput = {
  id: string
  title?: string | null
  description?: string | null
  image?: string | null
  URL?: string | null
  logo?: string | null
  isActive?: boolean | null
  order?: number | null
  contentID?: string | null
  _version?: number | null
}

export type DeleteServicesInput = {
  id: string
  _version?: number | null
}

export type CreateGovernanceDocsInput = {
  id?: string | null
  language?: string | null
  source?: string | null
  order?: number | null
  isActive?: boolean | null
  governanceframeworkID?: string | null
  _version?: number | null
}

export type ModelGovernanceDocsConditionInput = {
  language?: ModelStringInput | null
  source?: ModelStringInput | null
  order?: ModelIntInput | null
  isActive?: ModelBooleanInput | null
  governanceframeworkID?: ModelIDInput | null
  and?: Array<ModelGovernanceDocsConditionInput | null> | null
  or?: Array<ModelGovernanceDocsConditionInput | null> | null
  not?: ModelGovernanceDocsConditionInput | null
  _deleted?: ModelBooleanInput | null
}

export type GovernanceDocs = {
  __typename: 'GovernanceDocs'
  id: string
  language?: string | null
  source?: string | null
  order?: number | null
  isActive?: boolean | null
  governanceframeworkID?: string | null
  createdAt: string
  updatedAt: string
  _version: number
  _deleted?: boolean | null
  _lastChangedAt: number
}

export type UpdateGovernanceDocsInput = {
  id: string
  language?: string | null
  source?: string | null
  order?: number | null
  isActive?: boolean | null
  governanceframeworkID?: string | null
  _version?: number | null
}

export type DeleteGovernanceDocsInput = {
  id: string
  _version?: number | null
}

export type CreateGovernanceFrameworkInput = {
  id?: string | null
  title?: string | null
  description?: string | null
  date?: string | null
  isNDI?: boolean | null
  order?: number | null
  isActive?: boolean | null
  keywords?: string | null
  viewPort?: string | null
  author?: string | null
  publisher?: string | null
  canonical?: string | null
  _version?: number | null
}

export type ModelGovernanceFrameworkConditionInput = {
  title?: ModelStringInput | null
  description?: ModelStringInput | null
  date?: ModelStringInput | null
  isNDI?: ModelBooleanInput | null
  order?: ModelIntInput | null
  isActive?: ModelBooleanInput | null
  keywords?: ModelStringInput | null
  viewPort?: ModelStringInput | null
  author?: ModelStringInput | null
  publisher?: ModelStringInput | null
  canonical?: ModelStringInput | null
  and?: Array<ModelGovernanceFrameworkConditionInput | null> | null
  or?: Array<ModelGovernanceFrameworkConditionInput | null> | null
  not?: ModelGovernanceFrameworkConditionInput | null
  _deleted?: ModelBooleanInput | null
}

export type GovernanceFramework = {
  __typename: 'GovernanceFramework'
  id: string
  title?: string | null
  description?: string | null
  date?: string | null
  isNDI?: boolean | null
  order?: number | null
  isActive?: boolean | null
  governanceDocs?: ModelGovernanceDocsConnection | null
  keywords?: string | null
  viewPort?: string | null
  author?: string | null
  publisher?: string | null
  canonical?: string | null
  createdAt: string
  updatedAt: string
  _version: number
  _deleted?: boolean | null
  _lastChangedAt: number
}

export type ModelGovernanceDocsConnection = {
  __typename: 'ModelGovernanceDocsConnection'
  items: Array<GovernanceDocs | null>
  nextToken?: string | null
  startedAt?: number | null
}

export type UpdateGovernanceFrameworkInput = {
  id: string
  title?: string | null
  description?: string | null
  date?: string | null
  isNDI?: boolean | null
  order?: number | null
  isActive?: boolean | null
  keywords?: string | null
  viewPort?: string | null
  author?: string | null
  publisher?: string | null
  canonical?: string | null
  _version?: number | null
}

export type DeleteGovernanceFrameworkInput = {
  id: string
  _version?: number | null
}

export type CreateFooterMenuInput = {
  id?: string | null
  name?: string | null
  route?: string | null
  order?: number | null
  isActive?: boolean | null
  footersectionID: string
  _version?: number | null
}

export type ModelFooterMenuConditionInput = {
  name?: ModelStringInput | null
  route?: ModelStringInput | null
  order?: ModelIntInput | null
  isActive?: ModelBooleanInput | null
  footersectionID?: ModelIDInput | null
  and?: Array<ModelFooterMenuConditionInput | null> | null
  or?: Array<ModelFooterMenuConditionInput | null> | null
  not?: ModelFooterMenuConditionInput | null
  _deleted?: ModelBooleanInput | null
}

export type FooterMenu = {
  __typename: 'FooterMenu'
  id: string
  name?: string | null
  route?: string | null
  order?: number | null
  isActive?: boolean | null
  footersectionID: string
  createdAt: string
  updatedAt: string
  _version: number
  _deleted?: boolean | null
  _lastChangedAt: number
}

export type UpdateFooterMenuInput = {
  id: string
  name?: string | null
  route?: string | null
  order?: number | null
  isActive?: boolean | null
  footersectionID?: string | null
  _version?: number | null
}

export type DeleteFooterMenuInput = {
  id: string
  _version?: number | null
}

export type CreateGlossaryInput = {
  id?: string | null
  letter?: string | null
  word?: string | null
  description?: string | null
  order?: number | null
  isActive?: boolean | null
  _version?: number | null
}

export type ModelGlossaryConditionInput = {
  letter?: ModelStringInput | null
  word?: ModelStringInput | null
  description?: ModelStringInput | null
  order?: ModelIntInput | null
  isActive?: ModelBooleanInput | null
  and?: Array<ModelGlossaryConditionInput | null> | null
  or?: Array<ModelGlossaryConditionInput | null> | null
  not?: ModelGlossaryConditionInput | null
  _deleted?: ModelBooleanInput | null
}

export type Glossary = {
  __typename: 'Glossary'
  id: string
  letter?: string | null
  word?: string | null
  description?: string | null
  order?: number | null
  isActive?: boolean | null
  createdAt: string
  updatedAt: string
  _version: number
  _deleted?: boolean | null
  _lastChangedAt: number
}

export type UpdateGlossaryInput = {
  id: string
  letter?: string | null
  word?: string | null
  description?: string | null
  order?: number | null
  isActive?: boolean | null
  _version?: number | null
}

export type DeleteGlossaryInput = {
  id: string
  _version?: number | null
}

export type CreateTeamInput = {
  id?: string | null
  name?: string | null
  role?: string | null
  linkedInURL?: string | null
  InstaURL?: string | null
  Image?: string | null
  facebookURL?: string | null
  order?: number | null
  isActive?: boolean | null
  _version?: number | null
}

export type ModelTeamConditionInput = {
  name?: ModelStringInput | null
  role?: ModelStringInput | null
  linkedInURL?: ModelStringInput | null
  InstaURL?: ModelStringInput | null
  Image?: ModelStringInput | null
  facebookURL?: ModelStringInput | null
  order?: ModelIntInput | null
  isActive?: ModelBooleanInput | null
  and?: Array<ModelTeamConditionInput | null> | null
  or?: Array<ModelTeamConditionInput | null> | null
  not?: ModelTeamConditionInput | null
  _deleted?: ModelBooleanInput | null
}

export type Team = {
  __typename: 'Team'
  id: string
  name?: string | null
  role?: string | null
  linkedInURL?: string | null
  InstaURL?: string | null
  Image?: string | null
  facebookURL?: string | null
  order?: number | null
  isActive?: boolean | null
  createdAt: string
  updatedAt: string
  _version: number
  _deleted?: boolean | null
  _lastChangedAt: number
}

export type UpdateTeamInput = {
  id: string
  name?: string | null
  role?: string | null
  linkedInURL?: string | null
  InstaURL?: string | null
  Image?: string | null
  facebookURL?: string | null
  order?: number | null
  isActive?: boolean | null
  _version?: number | null
}

export type DeleteTeamInput = {
  id: string
  _version?: number | null
}

export type CreateSocialMediaInput = {
  id?: string | null
  title?: string | null
  image?: string | null
  url?: string | null
  order?: number | null
  isActive?: boolean | null
  _version?: number | null
}

export type ModelSocialMediaConditionInput = {
  title?: ModelStringInput | null
  image?: ModelStringInput | null
  url?: ModelStringInput | null
  order?: ModelIntInput | null
  isActive?: ModelBooleanInput | null
  and?: Array<ModelSocialMediaConditionInput | null> | null
  or?: Array<ModelSocialMediaConditionInput | null> | null
  not?: ModelSocialMediaConditionInput | null
  _deleted?: ModelBooleanInput | null
}

export type SocialMedia = {
  __typename: 'SocialMedia'
  id: string
  title?: string | null
  image?: string | null
  url?: string | null
  order?: number | null
  isActive?: boolean | null
  createdAt: string
  updatedAt: string
  _version: number
  _deleted?: boolean | null
  _lastChangedAt: number
}

export type UpdateSocialMediaInput = {
  id: string
  title?: string | null
  image?: string | null
  url?: string | null
  order?: number | null
  isActive?: boolean | null
  _version?: number | null
}

export type DeleteSocialMediaInput = {
  id: string
  _version?: number | null
}

export type CreateFooterSectionInput = {
  id?: string | null
  title?: string | null
  order?: number | null
  footerID: string
  isActive?: boolean | null
  _version?: number | null
}

export type ModelFooterSectionConditionInput = {
  title?: ModelStringInput | null
  order?: ModelIntInput | null
  footerID?: ModelIDInput | null
  isActive?: ModelBooleanInput | null
  and?: Array<ModelFooterSectionConditionInput | null> | null
  or?: Array<ModelFooterSectionConditionInput | null> | null
  not?: ModelFooterSectionConditionInput | null
  _deleted?: ModelBooleanInput | null
}

export type FooterSection = {
  __typename: 'FooterSection'
  id: string
  title?: string | null
  order?: number | null
  footerID: string
  footerMenu?: ModelFooterMenuConnection | null
  isActive?: boolean | null
  createdAt: string
  updatedAt: string
  _version: number
  _deleted?: boolean | null
  _lastChangedAt: number
}

export type ModelFooterMenuConnection = {
  __typename: 'ModelFooterMenuConnection'
  items: Array<FooterMenu | null>
  nextToken?: string | null
  startedAt?: number | null
}

export type UpdateFooterSectionInput = {
  id: string
  title?: string | null
  order?: number | null
  footerID?: string | null
  isActive?: boolean | null
  _version?: number | null
}

export type DeleteFooterSectionInput = {
  id: string
  _version?: number | null
}

export type CreateFooterInput = {
  id?: string | null
  footerNote?: string | null
  contactNo?: number | null
  email?: string | null
  _version?: number | null
}

export type ModelFooterConditionInput = {
  footerNote?: ModelStringInput | null
  contactNo?: ModelIntInput | null
  email?: ModelStringInput | null
  and?: Array<ModelFooterConditionInput | null> | null
  or?: Array<ModelFooterConditionInput | null> | null
  not?: ModelFooterConditionInput | null
  _deleted?: ModelBooleanInput | null
}

export type Footer = {
  __typename: 'Footer'
  id: string
  footerNote?: string | null
  footerSections?: ModelFooterSectionConnection | null
  contactNo?: number | null
  email?: string | null
  createdAt: string
  updatedAt: string
  _version: number
  _deleted?: boolean | null
  _lastChangedAt: number
}

export type ModelFooterSectionConnection = {
  __typename: 'ModelFooterSectionConnection'
  items: Array<FooterSection | null>
  nextToken?: string | null
  startedAt?: number | null
}

export type UpdateFooterInput = {
  id: string
  footerNote?: string | null
  contactNo?: number | null
  email?: string | null
  _version?: number | null
}

export type DeleteFooterInput = {
  id: string
  _version?: number | null
}

export type CreateFAQInput = {
  id?: string | null
  title?: string | null
  data?: string | null
  type?: TypeOfFAQ | null
  order?: number | null
  isActive?: boolean | null
  _version?: number | null
}

export enum TypeOfFAQ {
  USER = 'USER',
  ORGANIZATION = 'ORGANIZATION'
}

export type ModelFAQConditionInput = {
  title?: ModelStringInput | null
  data?: ModelStringInput | null
  type?: ModelTypeOfFAQInput | null
  order?: ModelIntInput | null
  isActive?: ModelBooleanInput | null
  and?: Array<ModelFAQConditionInput | null> | null
  or?: Array<ModelFAQConditionInput | null> | null
  not?: ModelFAQConditionInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelTypeOfFAQInput = {
  eq?: TypeOfFAQ | null
  ne?: TypeOfFAQ | null
}

export type FAQ = {
  __typename: 'FAQ'
  id: string
  title?: string | null
  data?: string | null
  type?: TypeOfFAQ | null
  order?: number | null
  isActive?: boolean | null
  createdAt: string
  updatedAt: string
  _version: number
  _deleted?: boolean | null
  _lastChangedAt: number
}

export type UpdateFAQInput = {
  id: string
  title?: string | null
  data?: string | null
  type?: TypeOfFAQ | null
  order?: number | null
  isActive?: boolean | null
  _version?: number | null
}

export type DeleteFAQInput = {
  id: string
  _version?: number | null
}

export type CreateCollaboratorInput = {
  id?: string | null
  image?: string | null
  title?: string | null
  order?: number | null
  isActive?: string | null
  contentID?: string | null
  _version?: number | null
}

export type ModelCollaboratorConditionInput = {
  image?: ModelStringInput | null
  title?: ModelStringInput | null
  order?: ModelIntInput | null
  isActive?: ModelStringInput | null
  contentID?: ModelIDInput | null
  and?: Array<ModelCollaboratorConditionInput | null> | null
  or?: Array<ModelCollaboratorConditionInput | null> | null
  not?: ModelCollaboratorConditionInput | null
  _deleted?: ModelBooleanInput | null
}

export type Collaborator = {
  __typename: 'Collaborator'
  id: string
  image?: string | null
  title?: string | null
  order?: number | null
  isActive?: string | null
  contentID?: string | null
  createdAt: string
  updatedAt: string
  _version: number
  _deleted?: boolean | null
  _lastChangedAt: number
}

export type UpdateCollaboratorInput = {
  id: string
  image?: string | null
  title?: string | null
  order?: number | null
  isActive?: string | null
  contentID?: string | null
  _version?: number | null
}

export type DeleteCollaboratorInput = {
  id: string
  _version?: number | null
}

export type CreatePostInput = {
  id?: string | null
  postType?: PostType | null
  title?: string | null
  shortDescription?: string | null
  description?: string | null
  image?: string | null
  order?: number | null
  isActive?: boolean | null
  publishDate?: string | null
  contentID?: string | null
  url?: string | null
  dateOfEvent?: string | null
  author?: string | null
  keywords?: string | null
  viewPort?: string | null
  publisher?: string | null
  canonical?: string | null
  customizedURL?: string | null
  _version?: number | null
}

export enum PostType {
  BLOG = 'BLOG',
  VACANCY_ANNOUNCEMENT = 'VACANCY_ANNOUNCEMENT',
  EVENT = 'EVENT',
  WEBINAR = 'WEBINAR',
  NEWS_UPDATE = 'NEWS_UPDATE',
  MEDIA_COVERAGE = 'MEDIA_COVERAGE'
}

export type ModelPostConditionInput = {
  postType?: ModelPostTypeInput | null
  title?: ModelStringInput | null
  shortDescription?: ModelStringInput | null
  description?: ModelStringInput | null
  image?: ModelStringInput | null
  order?: ModelIntInput | null
  isActive?: ModelBooleanInput | null
  publishDate?: ModelStringInput | null
  contentID?: ModelIDInput | null
  url?: ModelStringInput | null
  dateOfEvent?: ModelStringInput | null
  author?: ModelStringInput | null
  keywords?: ModelStringInput | null
  viewPort?: ModelStringInput | null
  publisher?: ModelStringInput | null
  canonical?: ModelStringInput | null
  customizedURL?: ModelStringInput | null
  and?: Array<ModelPostConditionInput | null> | null
  or?: Array<ModelPostConditionInput | null> | null
  not?: ModelPostConditionInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelPostTypeInput = {
  eq?: PostType | null
  ne?: PostType | null
}

export type Post = {
  __typename: 'Post'
  id: string
  postType?: PostType | null
  title?: string | null
  shortDescription?: string | null
  description?: string | null
  image?: string | null
  order?: number | null
  isActive?: boolean | null
  publishDate?: string | null
  contentID?: string | null
  url?: string | null
  dateOfEvent?: string | null
  author?: string | null
  keywords?: string | null
  viewPort?: string | null
  publisher?: string | null
  canonical?: string | null
  customizedURL?: string | null
  createdAt: string
  updatedAt: string
  _version: number
  _deleted?: boolean | null
  _lastChangedAt: number
}

export type UpdatePostInput = {
  id: string
  postType?: PostType | null
  title?: string | null
  shortDescription?: string | null
  description?: string | null
  image?: string | null
  order?: number | null
  isActive?: boolean | null
  publishDate?: string | null
  contentID?: string | null
  url?: string | null
  dateOfEvent?: string | null
  author?: string | null
  keywords?: string | null
  viewPort?: string | null
  publisher?: string | null
  canonical?: string | null
  customizedURL?: string | null
  _version?: number | null
}

export type DeletePostInput = {
  id: string
  _version?: number | null
}

export type CreateEnquiryReasonInput = {
  id?: string | null
  reason?: string | null
  value?: EnquiryReasonEnum | null
  order?: number | null
  isActive?: boolean | null
  _version?: number | null
}

export enum EnquiryReasonEnum {
  APP_ISSUE = 'APP_ISSUE',
  BUG_REPORT = 'BUG_REPORT',
  BUSINESS_ENQUIRY = 'BUSINESS_ENQUIRY',
  INTERNATIONAL_ENQUIRY = 'INTERNATIONAL_ENQUIRY',
  PRESS_ENQUIRY = 'PRESS_ENQUIRY',
  USER_ENQUIRY_HELPDESK = 'USER_ENQUIRY_HELPDESK',
  OTHER = 'OTHER'
}

export type ModelEnquiryReasonConditionInput = {
  reason?: ModelStringInput | null
  value?: ModelEnquiryReasonEnumInput | null
  order?: ModelIntInput | null
  isActive?: ModelBooleanInput | null
  and?: Array<ModelEnquiryReasonConditionInput | null> | null
  or?: Array<ModelEnquiryReasonConditionInput | null> | null
  not?: ModelEnquiryReasonConditionInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelEnquiryReasonEnumInput = {
  eq?: EnquiryReasonEnum | null
  ne?: EnquiryReasonEnum | null
}

export type EnquiryReason = {
  __typename: 'EnquiryReason'
  id: string
  reason?: string | null
  value?: EnquiryReasonEnum | null
  order?: number | null
  isActive?: boolean | null
  createdAt: string
  updatedAt: string
  _version: number
  _deleted?: boolean | null
  _lastChangedAt: number
}

export type UpdateEnquiryReasonInput = {
  id: string
  reason?: string | null
  value?: EnquiryReasonEnum | null
  order?: number | null
  isActive?: boolean | null
  _version?: number | null
}

export type DeleteEnquiryReasonInput = {
  id: string
  _version?: number | null
}

export type CreateEnquiriesInput = {
  id?: string | null
  firstName?: string | null
  lastName?: string | null
  email: string
  subject?: string | null
  message?: string | null
  enquiryReason?: string | null
  organization?: string | null
  contactNumber?: string | null
  productInfo?: string | null
  _version?: number | null
}

export type ModelEnquiriesConditionInput = {
  firstName?: ModelStringInput | null
  lastName?: ModelStringInput | null
  email?: ModelStringInput | null
  subject?: ModelStringInput | null
  message?: ModelStringInput | null
  enquiryReason?: ModelStringInput | null
  organization?: ModelStringInput | null
  contactNumber?: ModelStringInput | null
  productInfo?: ModelStringInput | null
  and?: Array<ModelEnquiriesConditionInput | null> | null
  or?: Array<ModelEnquiriesConditionInput | null> | null
  not?: ModelEnquiriesConditionInput | null
  _deleted?: ModelBooleanInput | null
}

export type Enquiries = {
  __typename: 'Enquiries'
  id: string
  firstName?: string | null
  lastName?: string | null
  email: string
  subject?: string | null
  message?: string | null
  enquiryReason?: string | null
  organization?: string | null
  contactNumber?: string | null
  productInfo?: string | null
  createdAt: string
  updatedAt: string
  _version: number
  _deleted?: boolean | null
  _lastChangedAt: number
}

export type UpdateEnquiriesInput = {
  id: string
  firstName?: string | null
  lastName?: string | null
  email?: string | null
  subject?: string | null
  message?: string | null
  enquiryReason?: string | null
  organization?: string | null
  contactNumber?: string | null
  productInfo?: string | null
  _version?: number | null
}

export type DeleteEnquiriesInput = {
  id: string
  _version?: number | null
}

export type CreateLandingPageInput = {
  id?: string | null
  title?: string | null
  subTitle?: string | null
  leftSection?: string | null
  rightSection?: string | null
  type?: string | null
  order?: number | null
  pageKey?: PageKeys | null
  _version?: number | null
}

export enum PageKeys {
  FEATURES = 'FEATURES',
  SOLUTIONS = 'SOLUTIONS',
  PRODUCTS = 'PRODUCTS'
}

export type ModelLandingPageConditionInput = {
  title?: ModelStringInput | null
  subTitle?: ModelStringInput | null
  leftSection?: ModelStringInput | null
  rightSection?: ModelStringInput | null
  type?: ModelStringInput | null
  order?: ModelIntInput | null
  pageKey?: ModelPageKeysInput | null
  and?: Array<ModelLandingPageConditionInput | null> | null
  or?: Array<ModelLandingPageConditionInput | null> | null
  not?: ModelLandingPageConditionInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelPageKeysInput = {
  eq?: PageKeys | null
  ne?: PageKeys | null
}

export type LandingPage = {
  __typename: 'LandingPage'
  id: string
  title?: string | null
  subTitle?: string | null
  leftSection?: string | null
  rightSection?: string | null
  type?: string | null
  order?: number | null
  features?: ModelFeatureConnection | null
  pageKey?: PageKeys | null
  createdAt: string
  updatedAt: string
  _version: number
  _deleted?: boolean | null
  _lastChangedAt: number
}

export type ModelFeatureConnection = {
  __typename: 'ModelFeatureConnection'
  items: Array<Feature | null>
  nextToken?: string | null
  startedAt?: number | null
}

export type Feature = {
  __typename: 'Feature'
  id: string
  title?: string | null
  subTitle?: string | null
  image?: string | null
  order?: number | null
  landingpageID?: string | null
  url?: string | null
  isActive?: boolean | null
  contentID?: string | null
  description?: string | null
  createdAt: string
  updatedAt: string
  _version: number
  _deleted?: boolean | null
  _lastChangedAt: number
}

export type UpdateLandingPageInput = {
  id: string
  title?: string | null
  subTitle?: string | null
  leftSection?: string | null
  rightSection?: string | null
  type?: string | null
  order?: number | null
  pageKey?: PageKeys | null
  _version?: number | null
}

export type DeleteLandingPageInput = {
  id: string
  _version?: number | null
}

export type CreateFeatureInput = {
  id?: string | null
  title?: string | null
  subTitle?: string | null
  image?: string | null
  order?: number | null
  landingpageID?: string | null
  url?: string | null
  isActive?: boolean | null
  contentID?: string | null
  description?: string | null
  _version?: number | null
}

export type ModelFeatureConditionInput = {
  title?: ModelStringInput | null
  subTitle?: ModelStringInput | null
  image?: ModelStringInput | null
  order?: ModelIntInput | null
  landingpageID?: ModelIDInput | null
  url?: ModelStringInput | null
  isActive?: ModelBooleanInput | null
  contentID?: ModelIDInput | null
  description?: ModelStringInput | null
  and?: Array<ModelFeatureConditionInput | null> | null
  or?: Array<ModelFeatureConditionInput | null> | null
  not?: ModelFeatureConditionInput | null
  _deleted?: ModelBooleanInput | null
}

export type UpdateFeatureInput = {
  id: string
  title?: string | null
  subTitle?: string | null
  image?: string | null
  order?: number | null
  landingpageID?: string | null
  url?: string | null
  isActive?: boolean | null
  contentID?: string | null
  description?: string | null
  _version?: number | null
}

export type DeleteFeatureInput = {
  id: string
  _version?: number | null
}

export type CreateSubMenusInput = {
  id?: string | null
  name?: string | null
  route?: string | null
  menusID?: string | null
  order?: number | null
  isActive?: boolean | null
  _version?: number | null
}

export type ModelSubMenusConditionInput = {
  name?: ModelStringInput | null
  route?: ModelStringInput | null
  menusID?: ModelIDInput | null
  order?: ModelIntInput | null
  isActive?: ModelBooleanInput | null
  and?: Array<ModelSubMenusConditionInput | null> | null
  or?: Array<ModelSubMenusConditionInput | null> | null
  not?: ModelSubMenusConditionInput | null
  _deleted?: ModelBooleanInput | null
}

export type SubMenus = {
  __typename: 'SubMenus'
  id: string
  name?: string | null
  route?: string | null
  menusID?: string | null
  order?: number | null
  isActive?: boolean | null
  createdAt: string
  updatedAt: string
  _version: number
  _deleted?: boolean | null
  _lastChangedAt: number
}

export type UpdateSubMenusInput = {
  id: string
  name?: string | null
  route?: string | null
  menusID?: string | null
  order?: number | null
  isActive?: boolean | null
  _version?: number | null
}

export type DeleteSubMenusInput = {
  id: string
  _version?: number | null
}

export type CreateMenusInput = {
  id?: string | null
  name?: string | null
  route?: string | null
  order?: number | null
  isActive?: boolean | null
  _version?: number | null
}

export type ModelMenusConditionInput = {
  name?: ModelStringInput | null
  route?: ModelStringInput | null
  order?: ModelIntInput | null
  isActive?: ModelBooleanInput | null
  and?: Array<ModelMenusConditionInput | null> | null
  or?: Array<ModelMenusConditionInput | null> | null
  not?: ModelMenusConditionInput | null
  _deleted?: ModelBooleanInput | null
}

export type Menus = {
  __typename: 'Menus'
  id: string
  name?: string | null
  route?: string | null
  subMenus?: ModelSubMenusConnection | null
  order?: number | null
  isActive?: boolean | null
  createdAt: string
  updatedAt: string
  _version: number
  _deleted?: boolean | null
  _lastChangedAt: number
}

export type ModelSubMenusConnection = {
  __typename: 'ModelSubMenusConnection'
  items: Array<SubMenus | null>
  nextToken?: string | null
  startedAt?: number | null
}

export type UpdateMenusInput = {
  id: string
  name?: string | null
  route?: string | null
  order?: number | null
  isActive?: boolean | null
  _version?: number | null
}

export type DeleteMenusInput = {
  id: string
  _version?: number | null
}

export type CreateHeroSectionInput = {
  id?: string | null
  leftSection?: string | null
  rightSection?: string | null
  pageName?: string | null
  pageSectionNo?: number | null
  _version?: number | null
}

export type ModelHeroSectionConditionInput = {
  leftSection?: ModelStringInput | null
  rightSection?: ModelStringInput | null
  pageName?: ModelStringInput | null
  pageSectionNo?: ModelIntInput | null
  and?: Array<ModelHeroSectionConditionInput | null> | null
  or?: Array<ModelHeroSectionConditionInput | null> | null
  not?: ModelHeroSectionConditionInput | null
  _deleted?: ModelBooleanInput | null
}

export type HeroSection = {
  __typename: 'HeroSection'
  id: string
  leftSection?: string | null
  rightSection?: string | null
  pageName?: string | null
  pageSectionNo?: number | null
  createdAt: string
  updatedAt: string
  _version: number
  _deleted?: boolean | null
  _lastChangedAt: number
}

export type UpdateHeroSectionInput = {
  id: string
  leftSection?: string | null
  rightSection?: string | null
  pageName?: string | null
  pageSectionNo?: number | null
  _version?: number | null
}

export type DeleteHeroSectionInput = {
  id: string
  _version?: number | null
}

export type CreateMediaInput = {
  id?: string | null
  type?: TypeOfMedia | null
  url?: string | null
  alt?: string | null
  order?: number | null
  forUserID?: string | null
  _version?: number | null
}

export enum TypeOfMedia {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO'
}

export type ModelMediaConditionInput = {
  type?: ModelTypeOfMediaInput | null
  url?: ModelStringInput | null
  alt?: ModelStringInput | null
  order?: ModelIntInput | null
  forUserID?: ModelIDInput | null
  and?: Array<ModelMediaConditionInput | null> | null
  or?: Array<ModelMediaConditionInput | null> | null
  not?: ModelMediaConditionInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelTypeOfMediaInput = {
  eq?: TypeOfMedia | null
  ne?: TypeOfMedia | null
}

export type Media = {
  __typename: 'Media'
  id: string
  type?: TypeOfMedia | null
  url?: string | null
  alt?: string | null
  order?: number | null
  forUserID?: string | null
  createdAt: string
  updatedAt: string
  _version: number
  _deleted?: boolean | null
  _lastChangedAt: number
}

export type UpdateMediaInput = {
  id: string
  type?: TypeOfMedia | null
  url?: string | null
  alt?: string | null
  order?: number | null
  forUserID?: string | null
  _version?: number | null
}

export type DeleteMediaInput = {
  id: string
  _version?: number | null
}

export type CreateForUserInput = {
  id?: string | null
  title?: string | null
  subTitle?: string | null
  leftSection?: string | null
  rightSection?: string | null
  type?: string | null
  order?: number | null
  _version?: number | null
}

export type ModelForUserConditionInput = {
  title?: ModelStringInput | null
  subTitle?: ModelStringInput | null
  leftSection?: ModelStringInput | null
  rightSection?: ModelStringInput | null
  type?: ModelStringInput | null
  order?: ModelIntInput | null
  and?: Array<ModelForUserConditionInput | null> | null
  or?: Array<ModelForUserConditionInput | null> | null
  not?: ModelForUserConditionInput | null
  _deleted?: ModelBooleanInput | null
}

export type ForUser = {
  __typename: 'ForUser'
  id: string
  title?: string | null
  subTitle?: string | null
  leftSection?: string | null
  rightSection?: string | null
  type?: string | null
  order?: number | null
  Media?: ModelMediaConnection | null
  createdAt: string
  updatedAt: string
  _version: number
  _deleted?: boolean | null
  _lastChangedAt: number
}

export type ModelMediaConnection = {
  __typename: 'ModelMediaConnection'
  items: Array<Media | null>
  nextToken?: string | null
  startedAt?: number | null
}

export type UpdateForUserInput = {
  id: string
  title?: string | null
  subTitle?: string | null
  leftSection?: string | null
  rightSection?: string | null
  type?: string | null
  order?: number | null
  _version?: number | null
}

export type DeleteForUserInput = {
  id: string
  _version?: number | null
}

export type CreateBenefitsInput = {
  id?: string | null
  title?: string | null
  description?: string | null
  image?: string | null
  order?: number | null
  isActive?: boolean | null
  contentID: string
  _version?: number | null
}

export type ModelBenefitsConditionInput = {
  title?: ModelStringInput | null
  description?: ModelStringInput | null
  image?: ModelStringInput | null
  order?: ModelIntInput | null
  isActive?: ModelBooleanInput | null
  contentID?: ModelIDInput | null
  and?: Array<ModelBenefitsConditionInput | null> | null
  or?: Array<ModelBenefitsConditionInput | null> | null
  not?: ModelBenefitsConditionInput | null
  _deleted?: ModelBooleanInput | null
}

export type Benefits = {
  __typename: 'Benefits'
  id: string
  title?: string | null
  description?: string | null
  image?: string | null
  order?: number | null
  isActive?: boolean | null
  contentID: string
  createdAt: string
  updatedAt: string
  _version: number
  _deleted?: boolean | null
  _lastChangedAt: number
}

export type UpdateBenefitsInput = {
  id: string
  title?: string | null
  description?: string | null
  image?: string | null
  order?: number | null
  isActive?: boolean | null
  contentID?: string | null
  _version?: number | null
}

export type DeleteBenefitsInput = {
  id: string
  _version?: number | null
}

export type CreateContentInput = {
  navigate?: string | null
  contentType?: ContentType | null
  contentData?: string | null
  subsectionID: string
  isActive?: boolean | null
  id?: string | null
  order?: number | null
  direction?: Direction | null
  customComponent?: string | null
  noOfItemPerRow?: number | null
  _version?: number | null
}

export enum ContentType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  CAROUSEL = 'CAROUSEL',
  MARKDOWN = 'MARKDOWN',
  SIMPLE_LIST = 'SIMPLE_LIST',
  MULTI_IMAGE_CAROUSEL = 'MULTI_IMAGE_CAROUSEL',
  INFOGRAPHIC_IMAGE = 'INFOGRAPHIC_IMAGE',
  CUSTOM = 'CUSTOM'
}

export enum Direction {
  HORIZONTAL = 'HORIZONTAL',
  VERTICAL = 'VERTICAL'
}

export type ModelContentConditionInput = {
  navigate?: ModelStringInput | null
  contentType?: ModelContentTypeInput | null
  contentData?: ModelStringInput | null
  subsectionID?: ModelIDInput | null
  isActive?: ModelBooleanInput | null
  order?: ModelIntInput | null
  direction?: ModelDirectionInput | null
  customComponent?: ModelStringInput | null
  noOfItemPerRow?: ModelIntInput | null
  and?: Array<ModelContentConditionInput | null> | null
  or?: Array<ModelContentConditionInput | null> | null
  not?: ModelContentConditionInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelContentTypeInput = {
  eq?: ContentType | null
  ne?: ContentType | null
}

export type ModelDirectionInput = {
  eq?: Direction | null
  ne?: Direction | null
}

export type Content = {
  __typename: 'Content'
  navigate?: string | null
  contentType?: ContentType | null
  contentData?: string | null
  subsectionID: string
  isActive?: boolean | null
  posts?: ModelPostConnection | null
  collaborators?: ModelCollaboratorConnection | null
  features?: ModelFeatureConnection | null
  id: string
  order?: number | null
  direction?: Direction | null
  Benefits?: ModelBenefitsConnection | null
  customComponent?: string | null
  Services?: ModelServicesConnection | null
  Solutions?: ModelSolutionsConnection | null
  noOfItemPerRow?: number | null
  createdAt: string
  updatedAt: string
  _version: number
  _deleted?: boolean | null
  _lastChangedAt: number
}

export type ModelPostConnection = {
  __typename: 'ModelPostConnection'
  items: Array<Post | null>
  nextToken?: string | null
  startedAt?: number | null
}

export type ModelCollaboratorConnection = {
  __typename: 'ModelCollaboratorConnection'
  items: Array<Collaborator | null>
  nextToken?: string | null
  startedAt?: number | null
}

export type ModelBenefitsConnection = {
  __typename: 'ModelBenefitsConnection'
  items: Array<Benefits | null>
  nextToken?: string | null
  startedAt?: number | null
}

export type ModelServicesConnection = {
  __typename: 'ModelServicesConnection'
  items: Array<Services | null>
  nextToken?: string | null
  startedAt?: number | null
}

export type ModelSolutionsConnection = {
  __typename: 'ModelSolutionsConnection'
  items: Array<Solutions | null>
  nextToken?: string | null
  startedAt?: number | null
}

export type UpdateContentInput = {
  navigate?: string | null
  contentType?: ContentType | null
  contentData?: string | null
  subsectionID?: string | null
  isActive?: boolean | null
  id: string
  order?: number | null
  direction?: Direction | null
  customComponent?: string | null
  noOfItemPerRow?: number | null
  _version?: number | null
}

export type DeleteContentInput = {
  id: string
  _version?: number | null
}

export type CreateSubSectionInput = {
  navigate?: string | null
  title?: string | null
  subTitle?: string | null
  order?: number | null
  sectionID: string
  contentDirection?: Direction | null
  isActive?: boolean | null
  id?: string | null
  _version?: number | null
}

export type ModelSubSectionConditionInput = {
  navigate?: ModelStringInput | null
  title?: ModelStringInput | null
  subTitle?: ModelStringInput | null
  order?: ModelIntInput | null
  sectionID?: ModelIDInput | null
  contentDirection?: ModelDirectionInput | null
  isActive?: ModelBooleanInput | null
  and?: Array<ModelSubSectionConditionInput | null> | null
  or?: Array<ModelSubSectionConditionInput | null> | null
  not?: ModelSubSectionConditionInput | null
  _deleted?: ModelBooleanInput | null
}

export type SubSection = {
  __typename: 'SubSection'
  navigate?: string | null
  title?: string | null
  subTitle?: string | null
  order?: number | null
  sectionID: string
  contentDirection?: Direction | null
  contents?: ModelContentConnection | null
  isActive?: boolean | null
  id: string
  createdAt: string
  updatedAt: string
  _version: number
  _deleted?: boolean | null
  _lastChangedAt: number
}

export type ModelContentConnection = {
  __typename: 'ModelContentConnection'
  items: Array<Content | null>
  nextToken?: string | null
  startedAt?: number | null
}

export type UpdateSubSectionInput = {
  navigate?: string | null
  title?: string | null
  subTitle?: string | null
  order?: number | null
  sectionID?: string | null
  contentDirection?: Direction | null
  isActive?: boolean | null
  id: string
  _version?: number | null
}

export type DeleteSubSectionInput = {
  id: string
  _version?: number | null
}

export type CreateSectionInput = {
  navigate?: string | null
  title?: string | null
  subTitle?: string | null
  pagesID: string
  order?: number | null
  isActive?: boolean | null
  id?: string | null
  subSectionDirection?: Direction | null
  sectionType?: string | null
  _version?: number | null
}

export type ModelSectionConditionInput = {
  navigate?: ModelStringInput | null
  title?: ModelStringInput | null
  subTitle?: ModelStringInput | null
  pagesID?: ModelIDInput | null
  order?: ModelIntInput | null
  isActive?: ModelBooleanInput | null
  subSectionDirection?: ModelDirectionInput | null
  sectionType?: ModelStringInput | null
  and?: Array<ModelSectionConditionInput | null> | null
  or?: Array<ModelSectionConditionInput | null> | null
  not?: ModelSectionConditionInput | null
  _deleted?: ModelBooleanInput | null
}

export type Section = {
  __typename: 'Section'
  navigate?: string | null
  title?: string | null
  subTitle?: string | null
  pagesID: string
  order?: number | null
  subSections?: ModelSubSectionConnection | null
  isActive?: boolean | null
  id: string
  subSectionDirection?: Direction | null
  sectionType?: string | null
  createdAt: string
  updatedAt: string
  _version: number
  _deleted?: boolean | null
  _lastChangedAt: number
}

export type ModelSubSectionConnection = {
  __typename: 'ModelSubSectionConnection'
  items: Array<SubSection | null>
  nextToken?: string | null
  startedAt?: number | null
}

export type UpdateSectionInput = {
  navigate?: string | null
  title?: string | null
  subTitle?: string | null
  pagesID?: string | null
  order?: number | null
  isActive?: boolean | null
  id: string
  subSectionDirection?: Direction | null
  sectionType?: string | null
  _version?: number | null
}

export type DeleteSectionInput = {
  id: string
  _version?: number | null
}

export type CreatePagesInput = {
  id?: string | null
  pageName: PageNames
  isActive?: boolean | null
  title?: string | null
  description?: string | null
  keywords?: string | null
  viewPort?: string | null
  author?: string | null
  publisher?: string | null
  canonical?: string | null
  _version?: number | null
}

export enum PageNames {
  HOME = 'HOME',
  FOR_USER = 'FOR_USER',
  FOR_ORGANIZATION = 'FOR_ORGANIZATION',
  ABOUT_US = 'ABOUT_US',
  MEDIA_COVERAGE = 'MEDIA_COVERAGE',
  RESOURCE = 'RESOURCE',
  BLOGS = 'BLOGS',
  CONTACT_US = 'CONTACT_US',
  GLOSSARY = 'GLOSSARY',
  CAREER = 'CAREER',
  FEATURE_VIEWMORE = 'FEATURE_VIEWMORE',
  VISION_MISSION = 'VISION_MISSION',
  BUSINESS_INQUIRY = 'BUSINESS_INQUIRY',
  FAQS = 'FAQS',
  MEET_TEAM = 'MEET_TEAM',
  GOVERNANCE = 'GOVERNANCE',
  PRIVACY_POLICY = 'PRIVACY_POLICY',
  TERMS_OF_SERVICE = 'TERMS_OF_SERVICE',
  BACKUP_AND_RESTORE = 'BACKUP_AND_RESTORE'
}

export type ModelPagesConditionInput = {
  pageName?: ModelPageNamesInput | null
  isActive?: ModelBooleanInput | null
  title?: ModelStringInput | null
  description?: ModelStringInput | null
  keywords?: ModelStringInput | null
  viewPort?: ModelStringInput | null
  author?: ModelStringInput | null
  publisher?: ModelStringInput | null
  canonical?: ModelStringInput | null
  and?: Array<ModelPagesConditionInput | null> | null
  or?: Array<ModelPagesConditionInput | null> | null
  not?: ModelPagesConditionInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelPageNamesInput = {
  eq?: PageNames | null
  ne?: PageNames | null
}

export type Pages = {
  __typename: 'Pages'
  id: string
  pageName: PageNames
  sections?: ModelSectionConnection | null
  isActive?: boolean | null
  title?: string | null
  description?: string | null
  keywords?: string | null
  viewPort?: string | null
  author?: string | null
  publisher?: string | null
  canonical?: string | null
  createdAt: string
  updatedAt: string
  _version: number
  _deleted?: boolean | null
  _lastChangedAt: number
}

export type ModelSectionConnection = {
  __typename: 'ModelSectionConnection'
  items: Array<Section | null>
  nextToken?: string | null
  startedAt?: number | null
}

export type UpdatePagesInput = {
  id: string
  pageName?: PageNames | null
  isActive?: boolean | null
  title?: string | null
  description?: string | null
  keywords?: string | null
  viewPort?: string | null
  author?: string | null
  publisher?: string | null
  canonical?: string | null
  _version?: number | null
}

export type DeletePagesInput = {
  id: string
  _version?: number | null
}

export type ModelSolutionsFilterInput = {
  id?: ModelIDInput | null
  title?: ModelStringInput | null
  description?: ModelStringInput | null
  image?: ModelStringInput | null
  URL?: ModelStringInput | null
  logo?: ModelStringInput | null
  isActive?: ModelBooleanInput | null
  order?: ModelStringInput | null
  contentID?: ModelIDInput | null
  and?: Array<ModelSolutionsFilterInput | null> | null
  or?: Array<ModelSolutionsFilterInput | null> | null
  not?: ModelSolutionsFilterInput | null
  _deleted?: ModelBooleanInput | null
}

export enum ModelSortDirection {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type ModelServicesFilterInput = {
  id?: ModelIDInput | null
  title?: ModelStringInput | null
  description?: ModelStringInput | null
  image?: ModelStringInput | null
  URL?: ModelStringInput | null
  logo?: ModelStringInput | null
  isActive?: ModelBooleanInput | null
  order?: ModelIntInput | null
  contentID?: ModelIDInput | null
  and?: Array<ModelServicesFilterInput | null> | null
  or?: Array<ModelServicesFilterInput | null> | null
  not?: ModelServicesFilterInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelGovernanceDocsFilterInput = {
  id?: ModelIDInput | null
  language?: ModelStringInput | null
  source?: ModelStringInput | null
  order?: ModelIntInput | null
  isActive?: ModelBooleanInput | null
  governanceframeworkID?: ModelIDInput | null
  and?: Array<ModelGovernanceDocsFilterInput | null> | null
  or?: Array<ModelGovernanceDocsFilterInput | null> | null
  not?: ModelGovernanceDocsFilterInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelGovernanceFrameworkFilterInput = {
  id?: ModelIDInput | null
  title?: ModelStringInput | null
  description?: ModelStringInput | null
  date?: ModelStringInput | null
  isNDI?: ModelBooleanInput | null
  order?: ModelIntInput | null
  isActive?: ModelBooleanInput | null
  keywords?: ModelStringInput | null
  viewPort?: ModelStringInput | null
  author?: ModelStringInput | null
  publisher?: ModelStringInput | null
  canonical?: ModelStringInput | null
  and?: Array<ModelGovernanceFrameworkFilterInput | null> | null
  or?: Array<ModelGovernanceFrameworkFilterInput | null> | null
  not?: ModelGovernanceFrameworkFilterInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelGovernanceFrameworkConnection = {
  __typename: 'ModelGovernanceFrameworkConnection'
  items: Array<GovernanceFramework | null>
  nextToken?: string | null
  startedAt?: number | null
}

export type ModelFooterMenuFilterInput = {
  id?: ModelIDInput | null
  name?: ModelStringInput | null
  route?: ModelStringInput | null
  order?: ModelIntInput | null
  isActive?: ModelBooleanInput | null
  footersectionID?: ModelIDInput | null
  and?: Array<ModelFooterMenuFilterInput | null> | null
  or?: Array<ModelFooterMenuFilterInput | null> | null
  not?: ModelFooterMenuFilterInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelGlossaryFilterInput = {
  id?: ModelIDInput | null
  letter?: ModelStringInput | null
  word?: ModelStringInput | null
  description?: ModelStringInput | null
  order?: ModelIntInput | null
  isActive?: ModelBooleanInput | null
  and?: Array<ModelGlossaryFilterInput | null> | null
  or?: Array<ModelGlossaryFilterInput | null> | null
  not?: ModelGlossaryFilterInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelGlossaryConnection = {
  __typename: 'ModelGlossaryConnection'
  items: Array<Glossary | null>
  nextToken?: string | null
  startedAt?: number | null
}

export type ModelTeamFilterInput = {
  id?: ModelIDInput | null
  name?: ModelStringInput | null
  role?: ModelStringInput | null
  linkedInURL?: ModelStringInput | null
  InstaURL?: ModelStringInput | null
  Image?: ModelStringInput | null
  facebookURL?: ModelStringInput | null
  order?: ModelIntInput | null
  isActive?: ModelBooleanInput | null
  and?: Array<ModelTeamFilterInput | null> | null
  or?: Array<ModelTeamFilterInput | null> | null
  not?: ModelTeamFilterInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelTeamConnection = {
  __typename: 'ModelTeamConnection'
  items: Array<Team | null>
  nextToken?: string | null
  startedAt?: number | null
}

export type ModelSocialMediaFilterInput = {
  id?: ModelIDInput | null
  title?: ModelStringInput | null
  image?: ModelStringInput | null
  url?: ModelStringInput | null
  order?: ModelIntInput | null
  isActive?: ModelBooleanInput | null
  and?: Array<ModelSocialMediaFilterInput | null> | null
  or?: Array<ModelSocialMediaFilterInput | null> | null
  not?: ModelSocialMediaFilterInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelSocialMediaConnection = {
  __typename: 'ModelSocialMediaConnection'
  items: Array<SocialMedia | null>
  nextToken?: string | null
  startedAt?: number | null
}

export type ModelFooterSectionFilterInput = {
  id?: ModelIDInput | null
  title?: ModelStringInput | null
  order?: ModelIntInput | null
  footerID?: ModelIDInput | null
  isActive?: ModelBooleanInput | null
  and?: Array<ModelFooterSectionFilterInput | null> | null
  or?: Array<ModelFooterSectionFilterInput | null> | null
  not?: ModelFooterSectionFilterInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelFooterFilterInput = {
  id?: ModelIDInput | null
  footerNote?: ModelStringInput | null
  contactNo?: ModelIntInput | null
  email?: ModelStringInput | null
  and?: Array<ModelFooterFilterInput | null> | null
  or?: Array<ModelFooterFilterInput | null> | null
  not?: ModelFooterFilterInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelFooterConnection = {
  __typename: 'ModelFooterConnection'
  items: Array<Footer | null>
  nextToken?: string | null
  startedAt?: number | null
}

export type ModelFAQFilterInput = {
  id?: ModelIDInput | null
  title?: ModelStringInput | null
  data?: ModelStringInput | null
  type?: ModelTypeOfFAQInput | null
  order?: ModelIntInput | null
  isActive?: ModelBooleanInput | null
  and?: Array<ModelFAQFilterInput | null> | null
  or?: Array<ModelFAQFilterInput | null> | null
  not?: ModelFAQFilterInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelFAQConnection = {
  __typename: 'ModelFAQConnection'
  items: Array<FAQ | null>
  nextToken?: string | null
  startedAt?: number | null
}

export type ModelCollaboratorFilterInput = {
  id?: ModelIDInput | null
  image?: ModelStringInput | null
  title?: ModelStringInput | null
  order?: ModelIntInput | null
  isActive?: ModelStringInput | null
  contentID?: ModelIDInput | null
  and?: Array<ModelCollaboratorFilterInput | null> | null
  or?: Array<ModelCollaboratorFilterInput | null> | null
  not?: ModelCollaboratorFilterInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelPostFilterInput = {
  id?: ModelIDInput | null
  postType?: ModelPostTypeInput | null
  title?: ModelStringInput | null
  shortDescription?: ModelStringInput | null
  description?: ModelStringInput | null
  image?: ModelStringInput | null
  order?: ModelIntInput | null
  isActive?: ModelBooleanInput | null
  publishDate?: ModelStringInput | null
  contentID?: ModelIDInput | null
  url?: ModelStringInput | null
  dateOfEvent?: ModelStringInput | null
  author?: ModelStringInput | null
  keywords?: ModelStringInput | null
  viewPort?: ModelStringInput | null
  publisher?: ModelStringInput | null
  canonical?: ModelStringInput | null
  customizedURL?: ModelStringInput | null
  and?: Array<ModelPostFilterInput | null> | null
  or?: Array<ModelPostFilterInput | null> | null
  not?: ModelPostFilterInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelEnquiryReasonFilterInput = {
  id?: ModelIDInput | null
  reason?: ModelStringInput | null
  value?: ModelEnquiryReasonEnumInput | null
  order?: ModelIntInput | null
  isActive?: ModelBooleanInput | null
  and?: Array<ModelEnquiryReasonFilterInput | null> | null
  or?: Array<ModelEnquiryReasonFilterInput | null> | null
  not?: ModelEnquiryReasonFilterInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelEnquiryReasonConnection = {
  __typename: 'ModelEnquiryReasonConnection'
  items: Array<EnquiryReason | null>
  nextToken?: string | null
  startedAt?: number | null
}

export type ModelEnquiriesFilterInput = {
  id?: ModelIDInput | null
  firstName?: ModelStringInput | null
  lastName?: ModelStringInput | null
  email?: ModelStringInput | null
  subject?: ModelStringInput | null
  message?: ModelStringInput | null
  enquiryReason?: ModelStringInput | null
  organization?: ModelStringInput | null
  contactNumber?: ModelStringInput | null
  productInfo?: ModelStringInput | null
  and?: Array<ModelEnquiriesFilterInput | null> | null
  or?: Array<ModelEnquiriesFilterInput | null> | null
  not?: ModelEnquiriesFilterInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelEnquiriesConnection = {
  __typename: 'ModelEnquiriesConnection'
  items: Array<Enquiries | null>
  nextToken?: string | null
  startedAt?: number | null
}

export type ModelLandingPageFilterInput = {
  id?: ModelIDInput | null
  title?: ModelStringInput | null
  subTitle?: ModelStringInput | null
  leftSection?: ModelStringInput | null
  rightSection?: ModelStringInput | null
  type?: ModelStringInput | null
  order?: ModelIntInput | null
  pageKey?: ModelPageKeysInput | null
  and?: Array<ModelLandingPageFilterInput | null> | null
  or?: Array<ModelLandingPageFilterInput | null> | null
  not?: ModelLandingPageFilterInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelLandingPageConnection = {
  __typename: 'ModelLandingPageConnection'
  items: Array<LandingPage | null>
  nextToken?: string | null
  startedAt?: number | null
}

export type ModelFeatureFilterInput = {
  id?: ModelIDInput | null
  title?: ModelStringInput | null
  subTitle?: ModelStringInput | null
  image?: ModelStringInput | null
  order?: ModelIntInput | null
  landingpageID?: ModelIDInput | null
  url?: ModelStringInput | null
  isActive?: ModelBooleanInput | null
  contentID?: ModelIDInput | null
  description?: ModelStringInput | null
  and?: Array<ModelFeatureFilterInput | null> | null
  or?: Array<ModelFeatureFilterInput | null> | null
  not?: ModelFeatureFilterInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelSubMenusFilterInput = {
  id?: ModelIDInput | null
  name?: ModelStringInput | null
  route?: ModelStringInput | null
  menusID?: ModelIDInput | null
  order?: ModelIntInput | null
  isActive?: ModelBooleanInput | null
  and?: Array<ModelSubMenusFilterInput | null> | null
  or?: Array<ModelSubMenusFilterInput | null> | null
  not?: ModelSubMenusFilterInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelMenusFilterInput = {
  id?: ModelIDInput | null
  name?: ModelStringInput | null
  route?: ModelStringInput | null
  order?: ModelIntInput | null
  isActive?: ModelBooleanInput | null
  and?: Array<ModelMenusFilterInput | null> | null
  or?: Array<ModelMenusFilterInput | null> | null
  not?: ModelMenusFilterInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelMenusConnection = {
  __typename: 'ModelMenusConnection'
  items: Array<Menus | null>
  nextToken?: string | null
  startedAt?: number | null
}

export type ModelHeroSectionFilterInput = {
  id?: ModelIDInput | null
  leftSection?: ModelStringInput | null
  rightSection?: ModelStringInput | null
  pageName?: ModelStringInput | null
  pageSectionNo?: ModelIntInput | null
  and?: Array<ModelHeroSectionFilterInput | null> | null
  or?: Array<ModelHeroSectionFilterInput | null> | null
  not?: ModelHeroSectionFilterInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelHeroSectionConnection = {
  __typename: 'ModelHeroSectionConnection'
  items: Array<HeroSection | null>
  nextToken?: string | null
  startedAt?: number | null
}

export type ModelMediaFilterInput = {
  id?: ModelIDInput | null
  type?: ModelTypeOfMediaInput | null
  url?: ModelStringInput | null
  alt?: ModelStringInput | null
  order?: ModelIntInput | null
  forUserID?: ModelIDInput | null
  and?: Array<ModelMediaFilterInput | null> | null
  or?: Array<ModelMediaFilterInput | null> | null
  not?: ModelMediaFilterInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelForUserFilterInput = {
  id?: ModelIDInput | null
  title?: ModelStringInput | null
  subTitle?: ModelStringInput | null
  leftSection?: ModelStringInput | null
  rightSection?: ModelStringInput | null
  type?: ModelStringInput | null
  order?: ModelIntInput | null
  and?: Array<ModelForUserFilterInput | null> | null
  or?: Array<ModelForUserFilterInput | null> | null
  not?: ModelForUserFilterInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelForUserConnection = {
  __typename: 'ModelForUserConnection'
  items: Array<ForUser | null>
  nextToken?: string | null
  startedAt?: number | null
}

export type ModelBenefitsFilterInput = {
  id?: ModelIDInput | null
  title?: ModelStringInput | null
  description?: ModelStringInput | null
  image?: ModelStringInput | null
  order?: ModelIntInput | null
  isActive?: ModelBooleanInput | null
  contentID?: ModelIDInput | null
  and?: Array<ModelBenefitsFilterInput | null> | null
  or?: Array<ModelBenefitsFilterInput | null> | null
  not?: ModelBenefitsFilterInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelContentFilterInput = {
  navigate?: ModelStringInput | null
  contentType?: ModelContentTypeInput | null
  contentData?: ModelStringInput | null
  subsectionID?: ModelIDInput | null
  isActive?: ModelBooleanInput | null
  id?: ModelIDInput | null
  order?: ModelIntInput | null
  direction?: ModelDirectionInput | null
  customComponent?: ModelStringInput | null
  noOfItemPerRow?: ModelIntInput | null
  and?: Array<ModelContentFilterInput | null> | null
  or?: Array<ModelContentFilterInput | null> | null
  not?: ModelContentFilterInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelSubSectionFilterInput = {
  navigate?: ModelStringInput | null
  title?: ModelStringInput | null
  subTitle?: ModelStringInput | null
  order?: ModelIntInput | null
  sectionID?: ModelIDInput | null
  contentDirection?: ModelDirectionInput | null
  isActive?: ModelBooleanInput | null
  id?: ModelIDInput | null
  and?: Array<ModelSubSectionFilterInput | null> | null
  or?: Array<ModelSubSectionFilterInput | null> | null
  not?: ModelSubSectionFilterInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelSectionFilterInput = {
  navigate?: ModelStringInput | null
  title?: ModelStringInput | null
  subTitle?: ModelStringInput | null
  pagesID?: ModelIDInput | null
  order?: ModelIntInput | null
  isActive?: ModelBooleanInput | null
  id?: ModelIDInput | null
  subSectionDirection?: ModelDirectionInput | null
  sectionType?: ModelStringInput | null
  and?: Array<ModelSectionFilterInput | null> | null
  or?: Array<ModelSectionFilterInput | null> | null
  not?: ModelSectionFilterInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelPagesFilterInput = {
  id?: ModelIDInput | null
  pageName?: ModelPageNamesInput | null
  isActive?: ModelBooleanInput | null
  title?: ModelStringInput | null
  description?: ModelStringInput | null
  keywords?: ModelStringInput | null
  viewPort?: ModelStringInput | null
  author?: ModelStringInput | null
  publisher?: ModelStringInput | null
  canonical?: ModelStringInput | null
  and?: Array<ModelPagesFilterInput | null> | null
  or?: Array<ModelPagesFilterInput | null> | null
  not?: ModelPagesFilterInput | null
  _deleted?: ModelBooleanInput | null
}

export type ModelPagesConnection = {
  __typename: 'ModelPagesConnection'
  items: Array<Pages | null>
  nextToken?: string | null
  startedAt?: number | null
}

export type ModelSubscriptionSolutionsFilterInput = {
  id?: ModelSubscriptionIDInput | null
  title?: ModelSubscriptionStringInput | null
  description?: ModelSubscriptionStringInput | null
  image?: ModelSubscriptionStringInput | null
  URL?: ModelSubscriptionStringInput | null
  logo?: ModelSubscriptionStringInput | null
  isActive?: ModelSubscriptionBooleanInput | null
  order?: ModelSubscriptionStringInput | null
  contentID?: ModelSubscriptionIDInput | null
  and?: Array<ModelSubscriptionSolutionsFilterInput | null> | null
  or?: Array<ModelSubscriptionSolutionsFilterInput | null> | null
  _deleted?: ModelBooleanInput | null
}

export type ModelSubscriptionIDInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  in?: Array<string | null> | null
  notIn?: Array<string | null> | null
}

export type ModelSubscriptionStringInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  in?: Array<string | null> | null
  notIn?: Array<string | null> | null
}

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null
  eq?: boolean | null
}

export type ModelSubscriptionServicesFilterInput = {
  id?: ModelSubscriptionIDInput | null
  title?: ModelSubscriptionStringInput | null
  description?: ModelSubscriptionStringInput | null
  image?: ModelSubscriptionStringInput | null
  URL?: ModelSubscriptionStringInput | null
  logo?: ModelSubscriptionStringInput | null
  isActive?: ModelSubscriptionBooleanInput | null
  order?: ModelSubscriptionIntInput | null
  contentID?: ModelSubscriptionIDInput | null
  and?: Array<ModelSubscriptionServicesFilterInput | null> | null
  or?: Array<ModelSubscriptionServicesFilterInput | null> | null
  _deleted?: ModelBooleanInput | null
}

export type ModelSubscriptionIntInput = {
  ne?: number | null
  eq?: number | null
  le?: number | null
  lt?: number | null
  ge?: number | null
  gt?: number | null
  between?: Array<number | null> | null
  in?: Array<number | null> | null
  notIn?: Array<number | null> | null
}

export type ModelSubscriptionGovernanceDocsFilterInput = {
  id?: ModelSubscriptionIDInput | null
  language?: ModelSubscriptionStringInput | null
  source?: ModelSubscriptionStringInput | null
  order?: ModelSubscriptionIntInput | null
  isActive?: ModelSubscriptionBooleanInput | null
  governanceframeworkID?: ModelSubscriptionIDInput | null
  and?: Array<ModelSubscriptionGovernanceDocsFilterInput | null> | null
  or?: Array<ModelSubscriptionGovernanceDocsFilterInput | null> | null
  _deleted?: ModelBooleanInput | null
}

export type ModelSubscriptionGovernanceFrameworkFilterInput = {
  id?: ModelSubscriptionIDInput | null
  title?: ModelSubscriptionStringInput | null
  description?: ModelSubscriptionStringInput | null
  date?: ModelSubscriptionStringInput | null
  isNDI?: ModelSubscriptionBooleanInput | null
  order?: ModelSubscriptionIntInput | null
  isActive?: ModelSubscriptionBooleanInput | null
  keywords?: ModelSubscriptionStringInput | null
  viewPort?: ModelSubscriptionStringInput | null
  author?: ModelSubscriptionStringInput | null
  publisher?: ModelSubscriptionStringInput | null
  canonical?: ModelSubscriptionStringInput | null
  and?: Array<ModelSubscriptionGovernanceFrameworkFilterInput | null> | null
  or?: Array<ModelSubscriptionGovernanceFrameworkFilterInput | null> | null
  _deleted?: ModelBooleanInput | null
}

export type ModelSubscriptionFooterMenuFilterInput = {
  id?: ModelSubscriptionIDInput | null
  name?: ModelSubscriptionStringInput | null
  route?: ModelSubscriptionStringInput | null
  order?: ModelSubscriptionIntInput | null
  isActive?: ModelSubscriptionBooleanInput | null
  footersectionID?: ModelSubscriptionIDInput | null
  and?: Array<ModelSubscriptionFooterMenuFilterInput | null> | null
  or?: Array<ModelSubscriptionFooterMenuFilterInput | null> | null
  _deleted?: ModelBooleanInput | null
}

export type ModelSubscriptionGlossaryFilterInput = {
  id?: ModelSubscriptionIDInput | null
  letter?: ModelSubscriptionStringInput | null
  word?: ModelSubscriptionStringInput | null
  description?: ModelSubscriptionStringInput | null
  order?: ModelSubscriptionIntInput | null
  isActive?: ModelSubscriptionBooleanInput | null
  and?: Array<ModelSubscriptionGlossaryFilterInput | null> | null
  or?: Array<ModelSubscriptionGlossaryFilterInput | null> | null
  _deleted?: ModelBooleanInput | null
}

export type ModelSubscriptionTeamFilterInput = {
  id?: ModelSubscriptionIDInput | null
  name?: ModelSubscriptionStringInput | null
  role?: ModelSubscriptionStringInput | null
  linkedInURL?: ModelSubscriptionStringInput | null
  InstaURL?: ModelSubscriptionStringInput | null
  Image?: ModelSubscriptionStringInput | null
  facebookURL?: ModelSubscriptionStringInput | null
  order?: ModelSubscriptionIntInput | null
  isActive?: ModelSubscriptionBooleanInput | null
  and?: Array<ModelSubscriptionTeamFilterInput | null> | null
  or?: Array<ModelSubscriptionTeamFilterInput | null> | null
  _deleted?: ModelBooleanInput | null
}

export type ModelSubscriptionSocialMediaFilterInput = {
  id?: ModelSubscriptionIDInput | null
  title?: ModelSubscriptionStringInput | null
  image?: ModelSubscriptionStringInput | null
  url?: ModelSubscriptionStringInput | null
  order?: ModelSubscriptionIntInput | null
  isActive?: ModelSubscriptionBooleanInput | null
  and?: Array<ModelSubscriptionSocialMediaFilterInput | null> | null
  or?: Array<ModelSubscriptionSocialMediaFilterInput | null> | null
  _deleted?: ModelBooleanInput | null
}

export type ModelSubscriptionFooterSectionFilterInput = {
  id?: ModelSubscriptionIDInput | null
  title?: ModelSubscriptionStringInput | null
  order?: ModelSubscriptionIntInput | null
  footerID?: ModelSubscriptionIDInput | null
  isActive?: ModelSubscriptionBooleanInput | null
  and?: Array<ModelSubscriptionFooterSectionFilterInput | null> | null
  or?: Array<ModelSubscriptionFooterSectionFilterInput | null> | null
  _deleted?: ModelBooleanInput | null
}

export type ModelSubscriptionFooterFilterInput = {
  id?: ModelSubscriptionIDInput | null
  footerNote?: ModelSubscriptionStringInput | null
  contactNo?: ModelSubscriptionIntInput | null
  email?: ModelSubscriptionStringInput | null
  and?: Array<ModelSubscriptionFooterFilterInput | null> | null
  or?: Array<ModelSubscriptionFooterFilterInput | null> | null
  _deleted?: ModelBooleanInput | null
}

export type ModelSubscriptionFAQFilterInput = {
  id?: ModelSubscriptionIDInput | null
  title?: ModelSubscriptionStringInput | null
  data?: ModelSubscriptionStringInput | null
  type?: ModelSubscriptionStringInput | null
  order?: ModelSubscriptionIntInput | null
  isActive?: ModelSubscriptionBooleanInput | null
  and?: Array<ModelSubscriptionFAQFilterInput | null> | null
  or?: Array<ModelSubscriptionFAQFilterInput | null> | null
  _deleted?: ModelBooleanInput | null
}

export type ModelSubscriptionCollaboratorFilterInput = {
  id?: ModelSubscriptionIDInput | null
  image?: ModelSubscriptionStringInput | null
  title?: ModelSubscriptionStringInput | null
  order?: ModelSubscriptionIntInput | null
  isActive?: ModelSubscriptionStringInput | null
  contentID?: ModelSubscriptionIDInput | null
  and?: Array<ModelSubscriptionCollaboratorFilterInput | null> | null
  or?: Array<ModelSubscriptionCollaboratorFilterInput | null> | null
  _deleted?: ModelBooleanInput | null
}

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null
  postType?: ModelSubscriptionStringInput | null
  title?: ModelSubscriptionStringInput | null
  shortDescription?: ModelSubscriptionStringInput | null
  description?: ModelSubscriptionStringInput | null
  image?: ModelSubscriptionStringInput | null
  order?: ModelSubscriptionIntInput | null
  isActive?: ModelSubscriptionBooleanInput | null
  publishDate?: ModelSubscriptionStringInput | null
  contentID?: ModelSubscriptionIDInput | null
  url?: ModelSubscriptionStringInput | null
  dateOfEvent?: ModelSubscriptionStringInput | null
  author?: ModelSubscriptionStringInput | null
  keywords?: ModelSubscriptionStringInput | null
  viewPort?: ModelSubscriptionStringInput | null
  publisher?: ModelSubscriptionStringInput | null
  canonical?: ModelSubscriptionStringInput | null
  customizedURL?: ModelSubscriptionStringInput | null
  and?: Array<ModelSubscriptionPostFilterInput | null> | null
  or?: Array<ModelSubscriptionPostFilterInput | null> | null
  _deleted?: ModelBooleanInput | null
}

export type ModelSubscriptionEnquiryReasonFilterInput = {
  id?: ModelSubscriptionIDInput | null
  reason?: ModelSubscriptionStringInput | null
  value?: ModelSubscriptionStringInput | null
  order?: ModelSubscriptionIntInput | null
  isActive?: ModelSubscriptionBooleanInput | null
  and?: Array<ModelSubscriptionEnquiryReasonFilterInput | null> | null
  or?: Array<ModelSubscriptionEnquiryReasonFilterInput | null> | null
  _deleted?: ModelBooleanInput | null
}

export type ModelSubscriptionEnquiriesFilterInput = {
  id?: ModelSubscriptionIDInput | null
  firstName?: ModelSubscriptionStringInput | null
  lastName?: ModelSubscriptionStringInput | null
  email?: ModelSubscriptionStringInput | null
  subject?: ModelSubscriptionStringInput | null
  message?: ModelSubscriptionStringInput | null
  enquiryReason?: ModelSubscriptionStringInput | null
  organization?: ModelSubscriptionStringInput | null
  contactNumber?: ModelSubscriptionStringInput | null
  productInfo?: ModelSubscriptionStringInput | null
  and?: Array<ModelSubscriptionEnquiriesFilterInput | null> | null
  or?: Array<ModelSubscriptionEnquiriesFilterInput | null> | null
  _deleted?: ModelBooleanInput | null
}

export type ModelSubscriptionLandingPageFilterInput = {
  id?: ModelSubscriptionIDInput | null
  title?: ModelSubscriptionStringInput | null
  subTitle?: ModelSubscriptionStringInput | null
  leftSection?: ModelSubscriptionStringInput | null
  rightSection?: ModelSubscriptionStringInput | null
  type?: ModelSubscriptionStringInput | null
  order?: ModelSubscriptionIntInput | null
  pageKey?: ModelSubscriptionStringInput | null
  and?: Array<ModelSubscriptionLandingPageFilterInput | null> | null
  or?: Array<ModelSubscriptionLandingPageFilterInput | null> | null
  _deleted?: ModelBooleanInput | null
}

export type ModelSubscriptionFeatureFilterInput = {
  id?: ModelSubscriptionIDInput | null
  title?: ModelSubscriptionStringInput | null
  subTitle?: ModelSubscriptionStringInput | null
  image?: ModelSubscriptionStringInput | null
  order?: ModelSubscriptionIntInput | null
  landingpageID?: ModelSubscriptionIDInput | null
  url?: ModelSubscriptionStringInput | null
  isActive?: ModelSubscriptionBooleanInput | null
  contentID?: ModelSubscriptionIDInput | null
  description?: ModelSubscriptionStringInput | null
  and?: Array<ModelSubscriptionFeatureFilterInput | null> | null
  or?: Array<ModelSubscriptionFeatureFilterInput | null> | null
  _deleted?: ModelBooleanInput | null
}

export type ModelSubscriptionSubMenusFilterInput = {
  id?: ModelSubscriptionIDInput | null
  name?: ModelSubscriptionStringInput | null
  route?: ModelSubscriptionStringInput | null
  menusID?: ModelSubscriptionIDInput | null
  order?: ModelSubscriptionIntInput | null
  isActive?: ModelSubscriptionBooleanInput | null
  and?: Array<ModelSubscriptionSubMenusFilterInput | null> | null
  or?: Array<ModelSubscriptionSubMenusFilterInput | null> | null
  _deleted?: ModelBooleanInput | null
}

export type ModelSubscriptionMenusFilterInput = {
  id?: ModelSubscriptionIDInput | null
  name?: ModelSubscriptionStringInput | null
  route?: ModelSubscriptionStringInput | null
  order?: ModelSubscriptionIntInput | null
  isActive?: ModelSubscriptionBooleanInput | null
  and?: Array<ModelSubscriptionMenusFilterInput | null> | null
  or?: Array<ModelSubscriptionMenusFilterInput | null> | null
  _deleted?: ModelBooleanInput | null
}

export type ModelSubscriptionHeroSectionFilterInput = {
  id?: ModelSubscriptionIDInput | null
  leftSection?: ModelSubscriptionStringInput | null
  rightSection?: ModelSubscriptionStringInput | null
  pageName?: ModelSubscriptionStringInput | null
  pageSectionNo?: ModelSubscriptionIntInput | null
  and?: Array<ModelSubscriptionHeroSectionFilterInput | null> | null
  or?: Array<ModelSubscriptionHeroSectionFilterInput | null> | null
  _deleted?: ModelBooleanInput | null
}

export type ModelSubscriptionMediaFilterInput = {
  id?: ModelSubscriptionIDInput | null
  type?: ModelSubscriptionStringInput | null
  url?: ModelSubscriptionStringInput | null
  alt?: ModelSubscriptionStringInput | null
  order?: ModelSubscriptionIntInput | null
  forUserID?: ModelSubscriptionIDInput | null
  and?: Array<ModelSubscriptionMediaFilterInput | null> | null
  or?: Array<ModelSubscriptionMediaFilterInput | null> | null
  _deleted?: ModelBooleanInput | null
}

export type ModelSubscriptionForUserFilterInput = {
  id?: ModelSubscriptionIDInput | null
  title?: ModelSubscriptionStringInput | null
  subTitle?: ModelSubscriptionStringInput | null
  leftSection?: ModelSubscriptionStringInput | null
  rightSection?: ModelSubscriptionStringInput | null
  type?: ModelSubscriptionStringInput | null
  order?: ModelSubscriptionIntInput | null
  and?: Array<ModelSubscriptionForUserFilterInput | null> | null
  or?: Array<ModelSubscriptionForUserFilterInput | null> | null
  _deleted?: ModelBooleanInput | null
}

export type ModelSubscriptionBenefitsFilterInput = {
  id?: ModelSubscriptionIDInput | null
  title?: ModelSubscriptionStringInput | null
  description?: ModelSubscriptionStringInput | null
  image?: ModelSubscriptionStringInput | null
  order?: ModelSubscriptionIntInput | null
  isActive?: ModelSubscriptionBooleanInput | null
  contentID?: ModelSubscriptionIDInput | null
  and?: Array<ModelSubscriptionBenefitsFilterInput | null> | null
  or?: Array<ModelSubscriptionBenefitsFilterInput | null> | null
  _deleted?: ModelBooleanInput | null
}

export type ModelSubscriptionContentFilterInput = {
  navigate?: ModelSubscriptionStringInput | null
  contentType?: ModelSubscriptionStringInput | null
  contentData?: ModelSubscriptionStringInput | null
  subsectionID?: ModelSubscriptionIDInput | null
  isActive?: ModelSubscriptionBooleanInput | null
  id?: ModelSubscriptionIDInput | null
  order?: ModelSubscriptionIntInput | null
  direction?: ModelSubscriptionStringInput | null
  customComponent?: ModelSubscriptionStringInput | null
  noOfItemPerRow?: ModelSubscriptionIntInput | null
  and?: Array<ModelSubscriptionContentFilterInput | null> | null
  or?: Array<ModelSubscriptionContentFilterInput | null> | null
  _deleted?: ModelBooleanInput | null
}

export type ModelSubscriptionSubSectionFilterInput = {
  navigate?: ModelSubscriptionStringInput | null
  title?: ModelSubscriptionStringInput | null
  subTitle?: ModelSubscriptionStringInput | null
  order?: ModelSubscriptionIntInput | null
  sectionID?: ModelSubscriptionIDInput | null
  contentDirection?: ModelSubscriptionStringInput | null
  isActive?: ModelSubscriptionBooleanInput | null
  id?: ModelSubscriptionIDInput | null
  and?: Array<ModelSubscriptionSubSectionFilterInput | null> | null
  or?: Array<ModelSubscriptionSubSectionFilterInput | null> | null
  _deleted?: ModelBooleanInput | null
}

export type ModelSubscriptionSectionFilterInput = {
  navigate?: ModelSubscriptionStringInput | null
  title?: ModelSubscriptionStringInput | null
  subTitle?: ModelSubscriptionStringInput | null
  pagesID?: ModelSubscriptionIDInput | null
  order?: ModelSubscriptionIntInput | null
  isActive?: ModelSubscriptionBooleanInput | null
  id?: ModelSubscriptionIDInput | null
  subSectionDirection?: ModelSubscriptionStringInput | null
  sectionType?: ModelSubscriptionStringInput | null
  and?: Array<ModelSubscriptionSectionFilterInput | null> | null
  or?: Array<ModelSubscriptionSectionFilterInput | null> | null
  _deleted?: ModelBooleanInput | null
}

export type ModelSubscriptionPagesFilterInput = {
  id?: ModelSubscriptionIDInput | null
  pageName?: ModelSubscriptionStringInput | null
  isActive?: ModelSubscriptionBooleanInput | null
  title?: ModelSubscriptionStringInput | null
  description?: ModelSubscriptionStringInput | null
  keywords?: ModelSubscriptionStringInput | null
  viewPort?: ModelSubscriptionStringInput | null
  author?: ModelSubscriptionStringInput | null
  publisher?: ModelSubscriptionStringInput | null
  canonical?: ModelSubscriptionStringInput | null
  and?: Array<ModelSubscriptionPagesFilterInput | null> | null
  or?: Array<ModelSubscriptionPagesFilterInput | null> | null
  _deleted?: ModelBooleanInput | null
}

export type CreateSolutionsMutationVariables = {
  input: CreateSolutionsInput
  condition?: ModelSolutionsConditionInput | null
}

export type CreateSolutionsMutation = {
  createSolutions?: {
    __typename: 'Solutions'
    id: string
    title?: string | null
    description?: string | null
    image?: string | null
    URL?: string | null
    logo?: string | null
    isActive?: boolean | null
    order?: string | null
    contentID: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type UpdateSolutionsMutationVariables = {
  input: UpdateSolutionsInput
  condition?: ModelSolutionsConditionInput | null
}

export type UpdateSolutionsMutation = {
  updateSolutions?: {
    __typename: 'Solutions'
    id: string
    title?: string | null
    description?: string | null
    image?: string | null
    URL?: string | null
    logo?: string | null
    isActive?: boolean | null
    order?: string | null
    contentID: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type DeleteSolutionsMutationVariables = {
  input: DeleteSolutionsInput
  condition?: ModelSolutionsConditionInput | null
}

export type DeleteSolutionsMutation = {
  deleteSolutions?: {
    __typename: 'Solutions'
    id: string
    title?: string | null
    description?: string | null
    image?: string | null
    URL?: string | null
    logo?: string | null
    isActive?: boolean | null
    order?: string | null
    contentID: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type CreateServicesMutationVariables = {
  input: CreateServicesInput
  condition?: ModelServicesConditionInput | null
}

export type CreateServicesMutation = {
  createServices?: {
    __typename: 'Services'
    id: string
    title?: string | null
    description?: string | null
    image?: string | null
    URL?: string | null
    logo?: string | null
    isActive?: boolean | null
    order?: number | null
    contentID: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type UpdateServicesMutationVariables = {
  input: UpdateServicesInput
  condition?: ModelServicesConditionInput | null
}

export type UpdateServicesMutation = {
  updateServices?: {
    __typename: 'Services'
    id: string
    title?: string | null
    description?: string | null
    image?: string | null
    URL?: string | null
    logo?: string | null
    isActive?: boolean | null
    order?: number | null
    contentID: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type DeleteServicesMutationVariables = {
  input: DeleteServicesInput
  condition?: ModelServicesConditionInput | null
}

export type DeleteServicesMutation = {
  deleteServices?: {
    __typename: 'Services'
    id: string
    title?: string | null
    description?: string | null
    image?: string | null
    URL?: string | null
    logo?: string | null
    isActive?: boolean | null
    order?: number | null
    contentID: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type CreateGovernanceDocsMutationVariables = {
  input: CreateGovernanceDocsInput
  condition?: ModelGovernanceDocsConditionInput | null
}

export type CreateGovernanceDocsMutation = {
  createGovernanceDocs?: {
    __typename: 'GovernanceDocs'
    id: string
    language?: string | null
    source?: string | null
    order?: number | null
    isActive?: boolean | null
    governanceframeworkID?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type UpdateGovernanceDocsMutationVariables = {
  input: UpdateGovernanceDocsInput
  condition?: ModelGovernanceDocsConditionInput | null
}

export type UpdateGovernanceDocsMutation = {
  updateGovernanceDocs?: {
    __typename: 'GovernanceDocs'
    id: string
    language?: string | null
    source?: string | null
    order?: number | null
    isActive?: boolean | null
    governanceframeworkID?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type DeleteGovernanceDocsMutationVariables = {
  input: DeleteGovernanceDocsInput
  condition?: ModelGovernanceDocsConditionInput | null
}

export type DeleteGovernanceDocsMutation = {
  deleteGovernanceDocs?: {
    __typename: 'GovernanceDocs'
    id: string
    language?: string | null
    source?: string | null
    order?: number | null
    isActive?: boolean | null
    governanceframeworkID?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type CreateGovernanceFrameworkMutationVariables = {
  input: CreateGovernanceFrameworkInput
  condition?: ModelGovernanceFrameworkConditionInput | null
}

export type CreateGovernanceFrameworkMutation = {
  createGovernanceFramework?: {
    __typename: 'GovernanceFramework'
    id: string
    title?: string | null
    description?: string | null
    date?: string | null
    isNDI?: boolean | null
    order?: number | null
    isActive?: boolean | null
    governanceDocs?: {
      __typename: 'ModelGovernanceDocsConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    keywords?: string | null
    viewPort?: string | null
    author?: string | null
    publisher?: string | null
    canonical?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type UpdateGovernanceFrameworkMutationVariables = {
  input: UpdateGovernanceFrameworkInput
  condition?: ModelGovernanceFrameworkConditionInput | null
}

export type UpdateGovernanceFrameworkMutation = {
  updateGovernanceFramework?: {
    __typename: 'GovernanceFramework'
    id: string
    title?: string | null
    description?: string | null
    date?: string | null
    isNDI?: boolean | null
    order?: number | null
    isActive?: boolean | null
    governanceDocs?: {
      __typename: 'ModelGovernanceDocsConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    keywords?: string | null
    viewPort?: string | null
    author?: string | null
    publisher?: string | null
    canonical?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type DeleteGovernanceFrameworkMutationVariables = {
  input: DeleteGovernanceFrameworkInput
  condition?: ModelGovernanceFrameworkConditionInput | null
}

export type DeleteGovernanceFrameworkMutation = {
  deleteGovernanceFramework?: {
    __typename: 'GovernanceFramework'
    id: string
    title?: string | null
    description?: string | null
    date?: string | null
    isNDI?: boolean | null
    order?: number | null
    isActive?: boolean | null
    governanceDocs?: {
      __typename: 'ModelGovernanceDocsConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    keywords?: string | null
    viewPort?: string | null
    author?: string | null
    publisher?: string | null
    canonical?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type CreateFooterMenuMutationVariables = {
  input: CreateFooterMenuInput
  condition?: ModelFooterMenuConditionInput | null
}

export type CreateFooterMenuMutation = {
  createFooterMenu?: {
    __typename: 'FooterMenu'
    id: string
    name?: string | null
    route?: string | null
    order?: number | null
    isActive?: boolean | null
    footersectionID: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type UpdateFooterMenuMutationVariables = {
  input: UpdateFooterMenuInput
  condition?: ModelFooterMenuConditionInput | null
}

export type UpdateFooterMenuMutation = {
  updateFooterMenu?: {
    __typename: 'FooterMenu'
    id: string
    name?: string | null
    route?: string | null
    order?: number | null
    isActive?: boolean | null
    footersectionID: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type DeleteFooterMenuMutationVariables = {
  input: DeleteFooterMenuInput
  condition?: ModelFooterMenuConditionInput | null
}

export type DeleteFooterMenuMutation = {
  deleteFooterMenu?: {
    __typename: 'FooterMenu'
    id: string
    name?: string | null
    route?: string | null
    order?: number | null
    isActive?: boolean | null
    footersectionID: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type CreateGlossaryMutationVariables = {
  input: CreateGlossaryInput
  condition?: ModelGlossaryConditionInput | null
}

export type CreateGlossaryMutation = {
  createGlossary?: {
    __typename: 'Glossary'
    id: string
    letter?: string | null
    word?: string | null
    description?: string | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type UpdateGlossaryMutationVariables = {
  input: UpdateGlossaryInput
  condition?: ModelGlossaryConditionInput | null
}

export type UpdateGlossaryMutation = {
  updateGlossary?: {
    __typename: 'Glossary'
    id: string
    letter?: string | null
    word?: string | null
    description?: string | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type DeleteGlossaryMutationVariables = {
  input: DeleteGlossaryInput
  condition?: ModelGlossaryConditionInput | null
}

export type DeleteGlossaryMutation = {
  deleteGlossary?: {
    __typename: 'Glossary'
    id: string
    letter?: string | null
    word?: string | null
    description?: string | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type CreateTeamMutationVariables = {
  input: CreateTeamInput
  condition?: ModelTeamConditionInput | null
}

export type CreateTeamMutation = {
  createTeam?: {
    __typename: 'Team'
    id: string
    name?: string | null
    role?: string | null
    linkedInURL?: string | null
    InstaURL?: string | null
    Image?: string | null
    facebookURL?: string | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type UpdateTeamMutationVariables = {
  input: UpdateTeamInput
  condition?: ModelTeamConditionInput | null
}

export type UpdateTeamMutation = {
  updateTeam?: {
    __typename: 'Team'
    id: string
    name?: string | null
    role?: string | null
    linkedInURL?: string | null
    InstaURL?: string | null
    Image?: string | null
    facebookURL?: string | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type DeleteTeamMutationVariables = {
  input: DeleteTeamInput
  condition?: ModelTeamConditionInput | null
}

export type DeleteTeamMutation = {
  deleteTeam?: {
    __typename: 'Team'
    id: string
    name?: string | null
    role?: string | null
    linkedInURL?: string | null
    InstaURL?: string | null
    Image?: string | null
    facebookURL?: string | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type CreateSocialMediaMutationVariables = {
  input: CreateSocialMediaInput
  condition?: ModelSocialMediaConditionInput | null
}

export type CreateSocialMediaMutation = {
  createSocialMedia?: {
    __typename: 'SocialMedia'
    id: string
    title?: string | null
    image?: string | null
    url?: string | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type UpdateSocialMediaMutationVariables = {
  input: UpdateSocialMediaInput
  condition?: ModelSocialMediaConditionInput | null
}

export type UpdateSocialMediaMutation = {
  updateSocialMedia?: {
    __typename: 'SocialMedia'
    id: string
    title?: string | null
    image?: string | null
    url?: string | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type DeleteSocialMediaMutationVariables = {
  input: DeleteSocialMediaInput
  condition?: ModelSocialMediaConditionInput | null
}

export type DeleteSocialMediaMutation = {
  deleteSocialMedia?: {
    __typename: 'SocialMedia'
    id: string
    title?: string | null
    image?: string | null
    url?: string | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type CreateFooterSectionMutationVariables = {
  input: CreateFooterSectionInput
  condition?: ModelFooterSectionConditionInput | null
}

export type CreateFooterSectionMutation = {
  createFooterSection?: {
    __typename: 'FooterSection'
    id: string
    title?: string | null
    order?: number | null
    footerID: string
    footerMenu?: {
      __typename: 'ModelFooterMenuConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type UpdateFooterSectionMutationVariables = {
  input: UpdateFooterSectionInput
  condition?: ModelFooterSectionConditionInput | null
}

export type UpdateFooterSectionMutation = {
  updateFooterSection?: {
    __typename: 'FooterSection'
    id: string
    title?: string | null
    order?: number | null
    footerID: string
    footerMenu?: {
      __typename: 'ModelFooterMenuConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type DeleteFooterSectionMutationVariables = {
  input: DeleteFooterSectionInput
  condition?: ModelFooterSectionConditionInput | null
}

export type DeleteFooterSectionMutation = {
  deleteFooterSection?: {
    __typename: 'FooterSection'
    id: string
    title?: string | null
    order?: number | null
    footerID: string
    footerMenu?: {
      __typename: 'ModelFooterMenuConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type CreateFooterMutationVariables = {
  input: CreateFooterInput
  condition?: ModelFooterConditionInput | null
}

export type CreateFooterMutation = {
  createFooter?: {
    __typename: 'Footer'
    id: string
    footerNote?: string | null
    footerSections?: {
      __typename: 'ModelFooterSectionConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    contactNo?: number | null
    email?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type UpdateFooterMutationVariables = {
  input: UpdateFooterInput
  condition?: ModelFooterConditionInput | null
}

export type UpdateFooterMutation = {
  updateFooter?: {
    __typename: 'Footer'
    id: string
    footerNote?: string | null
    footerSections?: {
      __typename: 'ModelFooterSectionConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    contactNo?: number | null
    email?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type DeleteFooterMutationVariables = {
  input: DeleteFooterInput
  condition?: ModelFooterConditionInput | null
}

export type DeleteFooterMutation = {
  deleteFooter?: {
    __typename: 'Footer'
    id: string
    footerNote?: string | null
    footerSections?: {
      __typename: 'ModelFooterSectionConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    contactNo?: number | null
    email?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type CreateFAQMutationVariables = {
  input: CreateFAQInput
  condition?: ModelFAQConditionInput | null
}

export type CreateFAQMutation = {
  createFAQ?: {
    __typename: 'FAQ'
    id: string
    title?: string | null
    data?: string | null
    type?: TypeOfFAQ | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type UpdateFAQMutationVariables = {
  input: UpdateFAQInput
  condition?: ModelFAQConditionInput | null
}

export type UpdateFAQMutation = {
  updateFAQ?: {
    __typename: 'FAQ'
    id: string
    title?: string | null
    data?: string | null
    type?: TypeOfFAQ | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type DeleteFAQMutationVariables = {
  input: DeleteFAQInput
  condition?: ModelFAQConditionInput | null
}

export type DeleteFAQMutation = {
  deleteFAQ?: {
    __typename: 'FAQ'
    id: string
    title?: string | null
    data?: string | null
    type?: TypeOfFAQ | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type CreateCollaboratorMutationVariables = {
  input: CreateCollaboratorInput
  condition?: ModelCollaboratorConditionInput | null
}

export type CreateCollaboratorMutation = {
  createCollaborator?: {
    __typename: 'Collaborator'
    id: string
    image?: string | null
    title?: string | null
    order?: number | null
    isActive?: string | null
    contentID?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type UpdateCollaboratorMutationVariables = {
  input: UpdateCollaboratorInput
  condition?: ModelCollaboratorConditionInput | null
}

export type UpdateCollaboratorMutation = {
  updateCollaborator?: {
    __typename: 'Collaborator'
    id: string
    image?: string | null
    title?: string | null
    order?: number | null
    isActive?: string | null
    contentID?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type DeleteCollaboratorMutationVariables = {
  input: DeleteCollaboratorInput
  condition?: ModelCollaboratorConditionInput | null
}

export type DeleteCollaboratorMutation = {
  deleteCollaborator?: {
    __typename: 'Collaborator'
    id: string
    image?: string | null
    title?: string | null
    order?: number | null
    isActive?: string | null
    contentID?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type CreatePostMutationVariables = {
  input: CreatePostInput
  condition?: ModelPostConditionInput | null
}

export type CreatePostMutation = {
  createPost?: {
    __typename: 'Post'
    id: string
    postType?: PostType | null
    title?: string | null
    shortDescription?: string | null
    description?: string | null
    image?: string | null
    order?: number | null
    isActive?: boolean | null
    publishDate?: string | null
    contentID?: string | null
    url?: string | null
    dateOfEvent?: string | null
    author?: string | null
    keywords?: string | null
    viewPort?: string | null
    publisher?: string | null
    canonical?: string | null
    customizedURL?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type UpdatePostMutationVariables = {
  input: UpdatePostInput
  condition?: ModelPostConditionInput | null
}

export type UpdatePostMutation = {
  updatePost?: {
    __typename: 'Post'
    id: string
    postType?: PostType | null
    title?: string | null
    shortDescription?: string | null
    description?: string | null
    image?: string | null
    order?: number | null
    isActive?: boolean | null
    publishDate?: string | null
    contentID?: string | null
    url?: string | null
    dateOfEvent?: string | null
    author?: string | null
    keywords?: string | null
    viewPort?: string | null
    publisher?: string | null
    canonical?: string | null
    customizedURL?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type DeletePostMutationVariables = {
  input: DeletePostInput
  condition?: ModelPostConditionInput | null
}

export type DeletePostMutation = {
  deletePost?: {
    __typename: 'Post'
    id: string
    postType?: PostType | null
    title?: string | null
    shortDescription?: string | null
    description?: string | null
    image?: string | null
    order?: number | null
    isActive?: boolean | null
    publishDate?: string | null
    contentID?: string | null
    url?: string | null
    dateOfEvent?: string | null
    author?: string | null
    keywords?: string | null
    viewPort?: string | null
    publisher?: string | null
    canonical?: string | null
    customizedURL?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type CreateEnquiryReasonMutationVariables = {
  input: CreateEnquiryReasonInput
  condition?: ModelEnquiryReasonConditionInput | null
}

export type CreateEnquiryReasonMutation = {
  createEnquiryReason?: {
    __typename: 'EnquiryReason'
    id: string
    reason?: string | null
    value?: EnquiryReasonEnum | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type UpdateEnquiryReasonMutationVariables = {
  input: UpdateEnquiryReasonInput
  condition?: ModelEnquiryReasonConditionInput | null
}

export type UpdateEnquiryReasonMutation = {
  updateEnquiryReason?: {
    __typename: 'EnquiryReason'
    id: string
    reason?: string | null
    value?: EnquiryReasonEnum | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type DeleteEnquiryReasonMutationVariables = {
  input: DeleteEnquiryReasonInput
  condition?: ModelEnquiryReasonConditionInput | null
}

export type DeleteEnquiryReasonMutation = {
  deleteEnquiryReason?: {
    __typename: 'EnquiryReason'
    id: string
    reason?: string | null
    value?: EnquiryReasonEnum | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type CreateEnquiriesMutationVariables = {
  input: CreateEnquiriesInput
  condition?: ModelEnquiriesConditionInput | null
}

export type CreateEnquiriesMutation = {
  createEnquiries?: {
    __typename: 'Enquiries'
    id: string
    firstName?: string | null
    lastName?: string | null
    email: string
    subject?: string | null
    message?: string | null
    enquiryReason?: string | null
    organization?: string | null
    contactNumber?: string | null
    productInfo?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type UpdateEnquiriesMutationVariables = {
  input: UpdateEnquiriesInput
  condition?: ModelEnquiriesConditionInput | null
}

export type UpdateEnquiriesMutation = {
  updateEnquiries?: {
    __typename: 'Enquiries'
    id: string
    firstName?: string | null
    lastName?: string | null
    email: string
    subject?: string | null
    message?: string | null
    enquiryReason?: string | null
    organization?: string | null
    contactNumber?: string | null
    productInfo?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type DeleteEnquiriesMutationVariables = {
  input: DeleteEnquiriesInput
  condition?: ModelEnquiriesConditionInput | null
}

export type DeleteEnquiriesMutation = {
  deleteEnquiries?: {
    __typename: 'Enquiries'
    id: string
    firstName?: string | null
    lastName?: string | null
    email: string
    subject?: string | null
    message?: string | null
    enquiryReason?: string | null
    organization?: string | null
    contactNumber?: string | null
    productInfo?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type CreateLandingPageMutationVariables = {
  input: CreateLandingPageInput
  condition?: ModelLandingPageConditionInput | null
}

export type CreateLandingPageMutation = {
  createLandingPage?: {
    __typename: 'LandingPage'
    id: string
    title?: string | null
    subTitle?: string | null
    leftSection?: string | null
    rightSection?: string | null
    type?: string | null
    order?: number | null
    features?: {
      __typename: 'ModelFeatureConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    pageKey?: PageKeys | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type UpdateLandingPageMutationVariables = {
  input: UpdateLandingPageInput
  condition?: ModelLandingPageConditionInput | null
}

export type UpdateLandingPageMutation = {
  updateLandingPage?: {
    __typename: 'LandingPage'
    id: string
    title?: string | null
    subTitle?: string | null
    leftSection?: string | null
    rightSection?: string | null
    type?: string | null
    order?: number | null
    features?: {
      __typename: 'ModelFeatureConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    pageKey?: PageKeys | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type DeleteLandingPageMutationVariables = {
  input: DeleteLandingPageInput
  condition?: ModelLandingPageConditionInput | null
}

export type DeleteLandingPageMutation = {
  deleteLandingPage?: {
    __typename: 'LandingPage'
    id: string
    title?: string | null
    subTitle?: string | null
    leftSection?: string | null
    rightSection?: string | null
    type?: string | null
    order?: number | null
    features?: {
      __typename: 'ModelFeatureConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    pageKey?: PageKeys | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type CreateFeatureMutationVariables = {
  input: CreateFeatureInput
  condition?: ModelFeatureConditionInput | null
}

export type CreateFeatureMutation = {
  createFeature?: {
    __typename: 'Feature'
    id: string
    title?: string | null
    subTitle?: string | null
    image?: string | null
    order?: number | null
    landingpageID?: string | null
    url?: string | null
    isActive?: boolean | null
    contentID?: string | null
    description?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type UpdateFeatureMutationVariables = {
  input: UpdateFeatureInput
  condition?: ModelFeatureConditionInput | null
}

export type UpdateFeatureMutation = {
  updateFeature?: {
    __typename: 'Feature'
    id: string
    title?: string | null
    subTitle?: string | null
    image?: string | null
    order?: number | null
    landingpageID?: string | null
    url?: string | null
    isActive?: boolean | null
    contentID?: string | null
    description?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type DeleteFeatureMutationVariables = {
  input: DeleteFeatureInput
  condition?: ModelFeatureConditionInput | null
}

export type DeleteFeatureMutation = {
  deleteFeature?: {
    __typename: 'Feature'
    id: string
    title?: string | null
    subTitle?: string | null
    image?: string | null
    order?: number | null
    landingpageID?: string | null
    url?: string | null
    isActive?: boolean | null
    contentID?: string | null
    description?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type CreateSubMenusMutationVariables = {
  input: CreateSubMenusInput
  condition?: ModelSubMenusConditionInput | null
}

export type CreateSubMenusMutation = {
  createSubMenus?: {
    __typename: 'SubMenus'
    id: string
    name?: string | null
    route?: string | null
    menusID?: string | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type UpdateSubMenusMutationVariables = {
  input: UpdateSubMenusInput
  condition?: ModelSubMenusConditionInput | null
}

export type UpdateSubMenusMutation = {
  updateSubMenus?: {
    __typename: 'SubMenus'
    id: string
    name?: string | null
    route?: string | null
    menusID?: string | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type DeleteSubMenusMutationVariables = {
  input: DeleteSubMenusInput
  condition?: ModelSubMenusConditionInput | null
}

export type DeleteSubMenusMutation = {
  deleteSubMenus?: {
    __typename: 'SubMenus'
    id: string
    name?: string | null
    route?: string | null
    menusID?: string | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type CreateMenusMutationVariables = {
  input: CreateMenusInput
  condition?: ModelMenusConditionInput | null
}

export type CreateMenusMutation = {
  createMenus?: {
    __typename: 'Menus'
    id: string
    name?: string | null
    route?: string | null
    subMenus?: {
      __typename: 'ModelSubMenusConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type UpdateMenusMutationVariables = {
  input: UpdateMenusInput
  condition?: ModelMenusConditionInput | null
}

export type UpdateMenusMutation = {
  updateMenus?: {
    __typename: 'Menus'
    id: string
    name?: string | null
    route?: string | null
    subMenus?: {
      __typename: 'ModelSubMenusConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type DeleteMenusMutationVariables = {
  input: DeleteMenusInput
  condition?: ModelMenusConditionInput | null
}

export type DeleteMenusMutation = {
  deleteMenus?: {
    __typename: 'Menus'
    id: string
    name?: string | null
    route?: string | null
    subMenus?: {
      __typename: 'ModelSubMenusConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type CreateHeroSectionMutationVariables = {
  input: CreateHeroSectionInput
  condition?: ModelHeroSectionConditionInput | null
}

export type CreateHeroSectionMutation = {
  createHeroSection?: {
    __typename: 'HeroSection'
    id: string
    leftSection?: string | null
    rightSection?: string | null
    pageName?: string | null
    pageSectionNo?: number | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type UpdateHeroSectionMutationVariables = {
  input: UpdateHeroSectionInput
  condition?: ModelHeroSectionConditionInput | null
}

export type UpdateHeroSectionMutation = {
  updateHeroSection?: {
    __typename: 'HeroSection'
    id: string
    leftSection?: string | null
    rightSection?: string | null
    pageName?: string | null
    pageSectionNo?: number | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type DeleteHeroSectionMutationVariables = {
  input: DeleteHeroSectionInput
  condition?: ModelHeroSectionConditionInput | null
}

export type DeleteHeroSectionMutation = {
  deleteHeroSection?: {
    __typename: 'HeroSection'
    id: string
    leftSection?: string | null
    rightSection?: string | null
    pageName?: string | null
    pageSectionNo?: number | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type CreateMediaMutationVariables = {
  input: CreateMediaInput
  condition?: ModelMediaConditionInput | null
}

export type CreateMediaMutation = {
  createMedia?: {
    __typename: 'Media'
    id: string
    type?: TypeOfMedia | null
    url?: string | null
    alt?: string | null
    order?: number | null
    forUserID?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type UpdateMediaMutationVariables = {
  input: UpdateMediaInput
  condition?: ModelMediaConditionInput | null
}

export type UpdateMediaMutation = {
  updateMedia?: {
    __typename: 'Media'
    id: string
    type?: TypeOfMedia | null
    url?: string | null
    alt?: string | null
    order?: number | null
    forUserID?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type DeleteMediaMutationVariables = {
  input: DeleteMediaInput
  condition?: ModelMediaConditionInput | null
}

export type DeleteMediaMutation = {
  deleteMedia?: {
    __typename: 'Media'
    id: string
    type?: TypeOfMedia | null
    url?: string | null
    alt?: string | null
    order?: number | null
    forUserID?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type CreateForUserMutationVariables = {
  input: CreateForUserInput
  condition?: ModelForUserConditionInput | null
}

export type CreateForUserMutation = {
  createForUser?: {
    __typename: 'ForUser'
    id: string
    title?: string | null
    subTitle?: string | null
    leftSection?: string | null
    rightSection?: string | null
    type?: string | null
    order?: number | null
    Media?: {
      __typename: 'ModelMediaConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type UpdateForUserMutationVariables = {
  input: UpdateForUserInput
  condition?: ModelForUserConditionInput | null
}

export type UpdateForUserMutation = {
  updateForUser?: {
    __typename: 'ForUser'
    id: string
    title?: string | null
    subTitle?: string | null
    leftSection?: string | null
    rightSection?: string | null
    type?: string | null
    order?: number | null
    Media?: {
      __typename: 'ModelMediaConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type DeleteForUserMutationVariables = {
  input: DeleteForUserInput
  condition?: ModelForUserConditionInput | null
}

export type DeleteForUserMutation = {
  deleteForUser?: {
    __typename: 'ForUser'
    id: string
    title?: string | null
    subTitle?: string | null
    leftSection?: string | null
    rightSection?: string | null
    type?: string | null
    order?: number | null
    Media?: {
      __typename: 'ModelMediaConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type CreateBenefitsMutationVariables = {
  input: CreateBenefitsInput
  condition?: ModelBenefitsConditionInput | null
}

export type CreateBenefitsMutation = {
  createBenefits?: {
    __typename: 'Benefits'
    id: string
    title?: string | null
    description?: string | null
    image?: string | null
    order?: number | null
    isActive?: boolean | null
    contentID: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type UpdateBenefitsMutationVariables = {
  input: UpdateBenefitsInput
  condition?: ModelBenefitsConditionInput | null
}

export type UpdateBenefitsMutation = {
  updateBenefits?: {
    __typename: 'Benefits'
    id: string
    title?: string | null
    description?: string | null
    image?: string | null
    order?: number | null
    isActive?: boolean | null
    contentID: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type DeleteBenefitsMutationVariables = {
  input: DeleteBenefitsInput
  condition?: ModelBenefitsConditionInput | null
}

export type DeleteBenefitsMutation = {
  deleteBenefits?: {
    __typename: 'Benefits'
    id: string
    title?: string | null
    description?: string | null
    image?: string | null
    order?: number | null
    isActive?: boolean | null
    contentID: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type CreateContentMutationVariables = {
  input: CreateContentInput
  condition?: ModelContentConditionInput | null
}

export type CreateContentMutation = {
  createContent?: {
    __typename: 'Content'
    navigate?: string | null
    contentType?: ContentType | null
    contentData?: string | null
    subsectionID: string
    isActive?: boolean | null
    posts?: {
      __typename: 'ModelPostConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    collaborators?: {
      __typename: 'ModelCollaboratorConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    features?: {
      __typename: 'ModelFeatureConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    id: string
    order?: number | null
    direction?: Direction | null
    Benefits?: {
      __typename: 'ModelBenefitsConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    customComponent?: string | null
    Services?: {
      __typename: 'ModelServicesConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    Solutions?: {
      __typename: 'ModelSolutionsConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    noOfItemPerRow?: number | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type UpdateContentMutationVariables = {
  input: UpdateContentInput
  condition?: ModelContentConditionInput | null
}

export type UpdateContentMutation = {
  updateContent?: {
    __typename: 'Content'
    navigate?: string | null
    contentType?: ContentType | null
    contentData?: string | null
    subsectionID: string
    isActive?: boolean | null
    posts?: {
      __typename: 'ModelPostConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    collaborators?: {
      __typename: 'ModelCollaboratorConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    features?: {
      __typename: 'ModelFeatureConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    id: string
    order?: number | null
    direction?: Direction | null
    Benefits?: {
      __typename: 'ModelBenefitsConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    customComponent?: string | null
    Services?: {
      __typename: 'ModelServicesConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    Solutions?: {
      __typename: 'ModelSolutionsConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    noOfItemPerRow?: number | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type DeleteContentMutationVariables = {
  input: DeleteContentInput
  condition?: ModelContentConditionInput | null
}

export type DeleteContentMutation = {
  deleteContent?: {
    __typename: 'Content'
    navigate?: string | null
    contentType?: ContentType | null
    contentData?: string | null
    subsectionID: string
    isActive?: boolean | null
    posts?: {
      __typename: 'ModelPostConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    collaborators?: {
      __typename: 'ModelCollaboratorConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    features?: {
      __typename: 'ModelFeatureConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    id: string
    order?: number | null
    direction?: Direction | null
    Benefits?: {
      __typename: 'ModelBenefitsConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    customComponent?: string | null
    Services?: {
      __typename: 'ModelServicesConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    Solutions?: {
      __typename: 'ModelSolutionsConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    noOfItemPerRow?: number | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type CreateSubSectionMutationVariables = {
  input: CreateSubSectionInput
  condition?: ModelSubSectionConditionInput | null
}

export type CreateSubSectionMutation = {
  createSubSection?: {
    __typename: 'SubSection'
    navigate?: string | null
    title?: string | null
    subTitle?: string | null
    order?: number | null
    sectionID: string
    contentDirection?: Direction | null
    contents?: {
      __typename: 'ModelContentConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    isActive?: boolean | null
    id: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type UpdateSubSectionMutationVariables = {
  input: UpdateSubSectionInput
  condition?: ModelSubSectionConditionInput | null
}

export type UpdateSubSectionMutation = {
  updateSubSection?: {
    __typename: 'SubSection'
    navigate?: string | null
    title?: string | null
    subTitle?: string | null
    order?: number | null
    sectionID: string
    contentDirection?: Direction | null
    contents?: {
      __typename: 'ModelContentConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    isActive?: boolean | null
    id: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type DeleteSubSectionMutationVariables = {
  input: DeleteSubSectionInput
  condition?: ModelSubSectionConditionInput | null
}

export type DeleteSubSectionMutation = {
  deleteSubSection?: {
    __typename: 'SubSection'
    navigate?: string | null
    title?: string | null
    subTitle?: string | null
    order?: number | null
    sectionID: string
    contentDirection?: Direction | null
    contents?: {
      __typename: 'ModelContentConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    isActive?: boolean | null
    id: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type CreateSectionMutationVariables = {
  input: CreateSectionInput
  condition?: ModelSectionConditionInput | null
}

export type CreateSectionMutation = {
  createSection?: {
    __typename: 'Section'
    navigate?: string | null
    title?: string | null
    subTitle?: string | null
    pagesID: string
    order?: number | null
    subSections?: {
      __typename: 'ModelSubSectionConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    isActive?: boolean | null
    id: string
    subSectionDirection?: Direction | null
    sectionType?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type UpdateSectionMutationVariables = {
  input: UpdateSectionInput
  condition?: ModelSectionConditionInput | null
}

export type UpdateSectionMutation = {
  updateSection?: {
    __typename: 'Section'
    navigate?: string | null
    title?: string | null
    subTitle?: string | null
    pagesID: string
    order?: number | null
    subSections?: {
      __typename: 'ModelSubSectionConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    isActive?: boolean | null
    id: string
    subSectionDirection?: Direction | null
    sectionType?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type DeleteSectionMutationVariables = {
  input: DeleteSectionInput
  condition?: ModelSectionConditionInput | null
}

export type DeleteSectionMutation = {
  deleteSection?: {
    __typename: 'Section'
    navigate?: string | null
    title?: string | null
    subTitle?: string | null
    pagesID: string
    order?: number | null
    subSections?: {
      __typename: 'ModelSubSectionConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    isActive?: boolean | null
    id: string
    subSectionDirection?: Direction | null
    sectionType?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type CreatePagesMutationVariables = {
  input: CreatePagesInput
  condition?: ModelPagesConditionInput | null
}

export type CreatePagesMutation = {
  createPages?: {
    __typename: 'Pages'
    id: string
    pageName: PageNames
    sections?: {
      __typename: 'ModelSectionConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    isActive?: boolean | null
    title?: string | null
    description?: string | null
    keywords?: string | null
    viewPort?: string | null
    author?: string | null
    publisher?: string | null
    canonical?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type UpdatePagesMutationVariables = {
  input: UpdatePagesInput
  condition?: ModelPagesConditionInput | null
}

export type UpdatePagesMutation = {
  updatePages?: {
    __typename: 'Pages'
    id: string
    pageName: PageNames
    sections?: {
      __typename: 'ModelSectionConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    isActive?: boolean | null
    title?: string | null
    description?: string | null
    keywords?: string | null
    viewPort?: string | null
    author?: string | null
    publisher?: string | null
    canonical?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type DeletePagesMutationVariables = {
  input: DeletePagesInput
  condition?: ModelPagesConditionInput | null
}

export type DeletePagesMutation = {
  deletePages?: {
    __typename: 'Pages'
    id: string
    pageName: PageNames
    sections?: {
      __typename: 'ModelSectionConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    isActive?: boolean | null
    title?: string | null
    description?: string | null
    keywords?: string | null
    viewPort?: string | null
    author?: string | null
    publisher?: string | null
    canonical?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type GetSolutionsQueryVariables = {
  id: string
}

export type GetSolutionsQuery = {
  getSolutions?: {
    __typename: 'Solutions'
    id: string
    title?: string | null
    description?: string | null
    image?: string | null
    URL?: string | null
    logo?: string | null
    isActive?: boolean | null
    order?: string | null
    contentID: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type ListSolutionsQueryVariables = {
  filter?: ModelSolutionsFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListSolutionsQuery = {
  listSolutions?: {
    __typename: 'ModelSolutionsConnection'
    items: Array<{
      __typename: 'Solutions'
      id: string
      title?: string | null
      description?: string | null
      image?: string | null
      URL?: string | null
      logo?: string | null
      isActive?: boolean | null
      order?: string | null
      contentID: string
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SyncSolutionsQueryVariables = {
  filter?: ModelSolutionsFilterInput | null
  limit?: number | null
  nextToken?: string | null
  lastSync?: number | null
}

export type SyncSolutionsQuery = {
  syncSolutions?: {
    __typename: 'ModelSolutionsConnection'
    items: Array<{
      __typename: 'Solutions'
      id: string
      title?: string | null
      description?: string | null
      image?: string | null
      URL?: string | null
      logo?: string | null
      isActive?: boolean | null
      order?: string | null
      contentID: string
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SolutionsByContentIDQueryVariables = {
  contentID: string
  sortDirection?: ModelSortDirection | null
  filter?: ModelSolutionsFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type SolutionsByContentIDQuery = {
  solutionsByContentID?: {
    __typename: 'ModelSolutionsConnection'
    items: Array<{
      __typename: 'Solutions'
      id: string
      title?: string | null
      description?: string | null
      image?: string | null
      URL?: string | null
      logo?: string | null
      isActive?: boolean | null
      order?: string | null
      contentID: string
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type GetServicesQueryVariables = {
  id: string
}

export type GetServicesQuery = {
  getServices?: {
    __typename: 'Services'
    id: string
    title?: string | null
    description?: string | null
    image?: string | null
    URL?: string | null
    logo?: string | null
    isActive?: boolean | null
    order?: number | null
    contentID: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type ListServicesQueryVariables = {
  filter?: ModelServicesFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListServicesQuery = {
  listServices?: {
    __typename: 'ModelServicesConnection'
    items: Array<{
      __typename: 'Services'
      id: string
      title?: string | null
      description?: string | null
      image?: string | null
      URL?: string | null
      logo?: string | null
      isActive?: boolean | null
      order?: number | null
      contentID: string
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SyncServicesQueryVariables = {
  filter?: ModelServicesFilterInput | null
  limit?: number | null
  nextToken?: string | null
  lastSync?: number | null
}

export type SyncServicesQuery = {
  syncServices?: {
    __typename: 'ModelServicesConnection'
    items: Array<{
      __typename: 'Services'
      id: string
      title?: string | null
      description?: string | null
      image?: string | null
      URL?: string | null
      logo?: string | null
      isActive?: boolean | null
      order?: number | null
      contentID: string
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type ServicesByContentIDQueryVariables = {
  contentID: string
  sortDirection?: ModelSortDirection | null
  filter?: ModelServicesFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ServicesByContentIDQuery = {
  servicesByContentID?: {
    __typename: 'ModelServicesConnection'
    items: Array<{
      __typename: 'Services'
      id: string
      title?: string | null
      description?: string | null
      image?: string | null
      URL?: string | null
      logo?: string | null
      isActive?: boolean | null
      order?: number | null
      contentID: string
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type GetGovernanceDocsQueryVariables = {
  id: string
}

export type GetGovernanceDocsQuery = {
  getGovernanceDocs?: {
    __typename: 'GovernanceDocs'
    id: string
    language?: string | null
    source?: string | null
    order?: number | null
    isActive?: boolean | null
    governanceframeworkID?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type ListGovernanceDocsQueryVariables = {
  filter?: ModelGovernanceDocsFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListGovernanceDocsQuery = {
  listGovernanceDocs?: {
    __typename: 'ModelGovernanceDocsConnection'
    items: Array<{
      __typename: 'GovernanceDocs'
      id: string
      language?: string | null
      source?: string | null
      order?: number | null
      isActive?: boolean | null
      governanceframeworkID?: string | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SyncGovernanceDocsQueryVariables = {
  filter?: ModelGovernanceDocsFilterInput | null
  limit?: number | null
  nextToken?: string | null
  lastSync?: number | null
}

export type SyncGovernanceDocsQuery = {
  syncGovernanceDocs?: {
    __typename: 'ModelGovernanceDocsConnection'
    items: Array<{
      __typename: 'GovernanceDocs'
      id: string
      language?: string | null
      source?: string | null
      order?: number | null
      isActive?: boolean | null
      governanceframeworkID?: string | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type GovernanceDocsByGovernanceframeworkIDQueryVariables = {
  governanceframeworkID: string
  sortDirection?: ModelSortDirection | null
  filter?: ModelGovernanceDocsFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type GovernanceDocsByGovernanceframeworkIDQuery = {
  governanceDocsByGovernanceframeworkID?: {
    __typename: 'ModelGovernanceDocsConnection'
    items: Array<{
      __typename: 'GovernanceDocs'
      id: string
      language?: string | null
      source?: string | null
      order?: number | null
      isActive?: boolean | null
      governanceframeworkID?: string | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type GetGovernanceFrameworkQueryVariables = {
  id: string
}

export type GetGovernanceFrameworkQuery = {
  getGovernanceFramework?: {
    __typename: 'GovernanceFramework'
    id: string
    title?: string | null
    description?: string | null
    date?: string | null
    isNDI?: boolean | null
    order?: number | null
    isActive?: boolean | null
    governanceDocs?: {
      __typename: 'ModelGovernanceDocsConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    keywords?: string | null
    viewPort?: string | null
    author?: string | null
    publisher?: string | null
    canonical?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type ListGovernanceFrameworksQueryVariables = {
  filter?: ModelGovernanceFrameworkFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListGovernanceFrameworksQuery = {
  listGovernanceFrameworks?: {
    __typename: 'ModelGovernanceFrameworkConnection'
    items: Array<{
      __typename: 'GovernanceFramework'
      id: string
      title?: string | null
      description?: string | null
      date?: string | null
      isNDI?: boolean | null
      order?: number | null
      isActive?: boolean | null
      keywords?: string | null
      viewPort?: string | null
      author?: string | null
      publisher?: string | null
      canonical?: string | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SyncGovernanceFrameworksQueryVariables = {
  filter?: ModelGovernanceFrameworkFilterInput | null
  limit?: number | null
  nextToken?: string | null
  lastSync?: number | null
}

export type SyncGovernanceFrameworksQuery = {
  syncGovernanceFrameworks?: {
    __typename: 'ModelGovernanceFrameworkConnection'
    items: Array<{
      __typename: 'GovernanceFramework'
      id: string
      title?: string | null
      description?: string | null
      date?: string | null
      isNDI?: boolean | null
      order?: number | null
      isActive?: boolean | null
      keywords?: string | null
      viewPort?: string | null
      author?: string | null
      publisher?: string | null
      canonical?: string | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type GetFooterMenuQueryVariables = {
  id: string
}

export type GetFooterMenuQuery = {
  getFooterMenu?: {
    __typename: 'FooterMenu'
    id: string
    name?: string | null
    route?: string | null
    order?: number | null
    isActive?: boolean | null
    footersectionID: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type ListFooterMenusQueryVariables = {
  filter?: ModelFooterMenuFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListFooterMenusQuery = {
  listFooterMenus?: {
    __typename: 'ModelFooterMenuConnection'
    items: Array<{
      __typename: 'FooterMenu'
      id: string
      name?: string | null
      route?: string | null
      order?: number | null
      isActive?: boolean | null
      footersectionID: string
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SyncFooterMenusQueryVariables = {
  filter?: ModelFooterMenuFilterInput | null
  limit?: number | null
  nextToken?: string | null
  lastSync?: number | null
}

export type SyncFooterMenusQuery = {
  syncFooterMenus?: {
    __typename: 'ModelFooterMenuConnection'
    items: Array<{
      __typename: 'FooterMenu'
      id: string
      name?: string | null
      route?: string | null
      order?: number | null
      isActive?: boolean | null
      footersectionID: string
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type FooterMenusByFootersectionIDQueryVariables = {
  footersectionID: string
  sortDirection?: ModelSortDirection | null
  filter?: ModelFooterMenuFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type FooterMenusByFootersectionIDQuery = {
  footerMenusByFootersectionID?: {
    __typename: 'ModelFooterMenuConnection'
    items: Array<{
      __typename: 'FooterMenu'
      id: string
      name?: string | null
      route?: string | null
      order?: number | null
      isActive?: boolean | null
      footersectionID: string
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type GetGlossaryQueryVariables = {
  id: string
}

export type GetGlossaryQuery = {
  getGlossary?: {
    __typename: 'Glossary'
    id: string
    letter?: string | null
    word?: string | null
    description?: string | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type ListGlossariesQueryVariables = {
  filter?: ModelGlossaryFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListGlossariesQuery = {
  listGlossaries?: {
    __typename: 'ModelGlossaryConnection'
    items: Array<{
      __typename: 'Glossary'
      id: string
      letter?: string | null
      word?: string | null
      description?: string | null
      order?: number | null
      isActive?: boolean | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SyncGlossariesQueryVariables = {
  filter?: ModelGlossaryFilterInput | null
  limit?: number | null
  nextToken?: string | null
  lastSync?: number | null
}

export type SyncGlossariesQuery = {
  syncGlossaries?: {
    __typename: 'ModelGlossaryConnection'
    items: Array<{
      __typename: 'Glossary'
      id: string
      letter?: string | null
      word?: string | null
      description?: string | null
      order?: number | null
      isActive?: boolean | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type GetTeamQueryVariables = {
  id: string
}

export type GetTeamQuery = {
  getTeam?: {
    __typename: 'Team'
    id: string
    name?: string | null
    role?: string | null
    linkedInURL?: string | null
    InstaURL?: string | null
    Image?: string | null
    facebookURL?: string | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type ListTeamsQueryVariables = {
  filter?: ModelTeamFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListTeamsQuery = {
  listTeams?: {
    __typename: 'ModelTeamConnection'
    items: Array<{
      __typename: 'Team'
      id: string
      name?: string | null
      role?: string | null
      linkedInURL?: string | null
      InstaURL?: string | null
      Image?: string | null
      facebookURL?: string | null
      order?: number | null
      isActive?: boolean | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SyncTeamsQueryVariables = {
  filter?: ModelTeamFilterInput | null
  limit?: number | null
  nextToken?: string | null
  lastSync?: number | null
}

export type SyncTeamsQuery = {
  syncTeams?: {
    __typename: 'ModelTeamConnection'
    items: Array<{
      __typename: 'Team'
      id: string
      name?: string | null
      role?: string | null
      linkedInURL?: string | null
      InstaURL?: string | null
      Image?: string | null
      facebookURL?: string | null
      order?: number | null
      isActive?: boolean | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type GetSocialMediaQueryVariables = {
  id: string
}

export type GetSocialMediaQuery = {
  getSocialMedia?: {
    __typename: 'SocialMedia'
    id: string
    title?: string | null
    image?: string | null
    url?: string | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type ListSocialMediasQueryVariables = {
  filter?: ModelSocialMediaFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListSocialMediasQuery = {
  listSocialMedias?: {
    __typename: 'ModelSocialMediaConnection'
    items: Array<{
      __typename: 'SocialMedia'
      id: string
      title?: string | null
      image?: string | null
      url?: string | null
      order?: number | null
      isActive?: boolean | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SyncSocialMediasQueryVariables = {
  filter?: ModelSocialMediaFilterInput | null
  limit?: number | null
  nextToken?: string | null
  lastSync?: number | null
}

export type SyncSocialMediasQuery = {
  syncSocialMedias?: {
    __typename: 'ModelSocialMediaConnection'
    items: Array<{
      __typename: 'SocialMedia'
      id: string
      title?: string | null
      image?: string | null
      url?: string | null
      order?: number | null
      isActive?: boolean | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type GetFooterSectionQueryVariables = {
  id: string
}

export type GetFooterSectionQuery = {
  getFooterSection?: {
    __typename: 'FooterSection'
    id: string
    title?: string | null
    order?: number | null
    footerID: string
    footerMenu?: {
      __typename: 'ModelFooterMenuConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type ListFooterSectionsQueryVariables = {
  filter?: ModelFooterSectionFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListFooterSectionsQuery = {
  listFooterSections?: {
    __typename: 'ModelFooterSectionConnection'
    items: Array<{
      __typename: 'FooterSection'
      id: string
      title?: string | null
      order?: number | null
      footerID: string
      isActive?: boolean | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SyncFooterSectionsQueryVariables = {
  filter?: ModelFooterSectionFilterInput | null
  limit?: number | null
  nextToken?: string | null
  lastSync?: number | null
}

export type SyncFooterSectionsQuery = {
  syncFooterSections?: {
    __typename: 'ModelFooterSectionConnection'
    items: Array<{
      __typename: 'FooterSection'
      id: string
      title?: string | null
      order?: number | null
      footerID: string
      isActive?: boolean | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type FooterSectionsByFooterIDQueryVariables = {
  footerID: string
  sortDirection?: ModelSortDirection | null
  filter?: ModelFooterSectionFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type FooterSectionsByFooterIDQuery = {
  footerSectionsByFooterID?: {
    __typename: 'ModelFooterSectionConnection'
    items: Array<{
      __typename: 'FooterSection'
      id: string
      title?: string | null
      order?: number | null
      footerID: string
      isActive?: boolean | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type GetFooterQueryVariables = {
  id: string
}

export type GetFooterQuery = {
  getFooter?: {
    __typename: 'Footer'
    id: string
    footerNote?: string | null
    footerSections?: {
      __typename: 'ModelFooterSectionConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    contactNo?: number | null
    email?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type ListFootersQueryVariables = {
  filter?: ModelFooterFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListFootersQuery = {
  listFooters?: {
    __typename: 'ModelFooterConnection'
    items: Array<{
      __typename: 'Footer'
      id: string
      footerNote?: string | null
      contactNo?: number | null
      email?: string | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SyncFootersQueryVariables = {
  filter?: ModelFooterFilterInput | null
  limit?: number | null
  nextToken?: string | null
  lastSync?: number | null
}

export type SyncFootersQuery = {
  syncFooters?: {
    __typename: 'ModelFooterConnection'
    items: Array<{
      __typename: 'Footer'
      id: string
      footerNote?: string | null
      contactNo?: number | null
      email?: string | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type GetFAQQueryVariables = {
  id: string
}

export type GetFAQQuery = {
  getFAQ?: {
    __typename: 'FAQ'
    id: string
    title?: string | null
    data?: string | null
    type?: TypeOfFAQ | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type ListFAQSQueryVariables = {
  filter?: ModelFAQFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListFAQSQuery = {
  listFAQS?: {
    __typename: 'ModelFAQConnection'
    items: Array<{
      __typename: 'FAQ'
      id: string
      title?: string | null
      data?: string | null
      type?: TypeOfFAQ | null
      order?: number | null
      isActive?: boolean | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SyncFAQSQueryVariables = {
  filter?: ModelFAQFilterInput | null
  limit?: number | null
  nextToken?: string | null
  lastSync?: number | null
}

export type SyncFAQSQuery = {
  syncFAQS?: {
    __typename: 'ModelFAQConnection'
    items: Array<{
      __typename: 'FAQ'
      id: string
      title?: string | null
      data?: string | null
      type?: TypeOfFAQ | null
      order?: number | null
      isActive?: boolean | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type GetCollaboratorQueryVariables = {
  id: string
}

export type GetCollaboratorQuery = {
  getCollaborator?: {
    __typename: 'Collaborator'
    id: string
    image?: string | null
    title?: string | null
    order?: number | null
    isActive?: string | null
    contentID?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type ListCollaboratorsQueryVariables = {
  filter?: ModelCollaboratorFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListCollaboratorsQuery = {
  listCollaborators?: {
    __typename: 'ModelCollaboratorConnection'
    items: Array<{
      __typename: 'Collaborator'
      id: string
      image?: string | null
      title?: string | null
      order?: number | null
      isActive?: string | null
      contentID?: string | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SyncCollaboratorsQueryVariables = {
  filter?: ModelCollaboratorFilterInput | null
  limit?: number | null
  nextToken?: string | null
  lastSync?: number | null
}

export type SyncCollaboratorsQuery = {
  syncCollaborators?: {
    __typename: 'ModelCollaboratorConnection'
    items: Array<{
      __typename: 'Collaborator'
      id: string
      image?: string | null
      title?: string | null
      order?: number | null
      isActive?: string | null
      contentID?: string | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type CollaboratorsByContentIDQueryVariables = {
  contentID: string
  sortDirection?: ModelSortDirection | null
  filter?: ModelCollaboratorFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type CollaboratorsByContentIDQuery = {
  collaboratorsByContentID?: {
    __typename: 'ModelCollaboratorConnection'
    items: Array<{
      __typename: 'Collaborator'
      id: string
      image?: string | null
      title?: string | null
      order?: number | null
      isActive?: string | null
      contentID?: string | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type GetPostQueryVariables = {
  id: string
}

export type GetPostQuery = {
  getPost?: {
    __typename: 'Post'
    id: string
    postType?: PostType | null
    title?: string | null
    shortDescription?: string | null
    description?: string | null
    image?: string | null
    order?: number | null
    isActive?: boolean | null
    publishDate?: string | null
    contentID?: string | null
    url?: string | null
    dateOfEvent?: string | null
    author?: string | null
    keywords?: string | null
    viewPort?: string | null
    publisher?: string | null
    canonical?: string | null
    customizedURL?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListPostsQuery = {
  listPosts?: {
    __typename: 'ModelPostConnection'
    items: Array<{
      __typename: 'Post'
      id: string
      postType?: PostType | null
      title?: string | null
      shortDescription?: string | null
      description?: string | null
      image?: string | null
      order?: number | null
      isActive?: boolean | null
      publishDate?: string | null
      contentID?: string | null
      url?: string | null
      dateOfEvent?: string | null
      author?: string | null
      keywords?: string | null
      viewPort?: string | null
      publisher?: string | null
      canonical?: string | null
      customizedURL?: string | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SyncPostsQueryVariables = {
  filter?: ModelPostFilterInput | null
  limit?: number | null
  nextToken?: string | null
  lastSync?: number | null
}

export type SyncPostsQuery = {
  syncPosts?: {
    __typename: 'ModelPostConnection'
    items: Array<{
      __typename: 'Post'
      id: string
      postType?: PostType | null
      title?: string | null
      shortDescription?: string | null
      description?: string | null
      image?: string | null
      order?: number | null
      isActive?: boolean | null
      publishDate?: string | null
      contentID?: string | null
      url?: string | null
      dateOfEvent?: string | null
      author?: string | null
      keywords?: string | null
      viewPort?: string | null
      publisher?: string | null
      canonical?: string | null
      customizedURL?: string | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type PostsByContentIDQueryVariables = {
  contentID: string
  sortDirection?: ModelSortDirection | null
  filter?: ModelPostFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type PostsByContentIDQuery = {
  postsByContentID?: {
    __typename: 'ModelPostConnection'
    items: Array<{
      __typename: 'Post'
      id: string
      postType?: PostType | null
      title?: string | null
      shortDescription?: string | null
      description?: string | null
      image?: string | null
      order?: number | null
      isActive?: boolean | null
      publishDate?: string | null
      contentID?: string | null
      url?: string | null
      dateOfEvent?: string | null
      author?: string | null
      keywords?: string | null
      viewPort?: string | null
      publisher?: string | null
      canonical?: string | null
      customizedURL?: string | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type GetEnquiryReasonQueryVariables = {
  id: string
}

export type GetEnquiryReasonQuery = {
  getEnquiryReason?: {
    __typename: 'EnquiryReason'
    id: string
    reason?: string | null
    value?: EnquiryReasonEnum | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type ListEnquiryReasonsQueryVariables = {
  filter?: ModelEnquiryReasonFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListEnquiryReasonsQuery = {
  listEnquiryReasons?: {
    __typename: 'ModelEnquiryReasonConnection'
    items: Array<{
      __typename: 'EnquiryReason'
      id: string
      reason?: string | null
      value?: EnquiryReasonEnum | null
      order?: number | null
      isActive?: boolean | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SyncEnquiryReasonsQueryVariables = {
  filter?: ModelEnquiryReasonFilterInput | null
  limit?: number | null
  nextToken?: string | null
  lastSync?: number | null
}

export type SyncEnquiryReasonsQuery = {
  syncEnquiryReasons?: {
    __typename: 'ModelEnquiryReasonConnection'
    items: Array<{
      __typename: 'EnquiryReason'
      id: string
      reason?: string | null
      value?: EnquiryReasonEnum | null
      order?: number | null
      isActive?: boolean | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type GetEnquiriesQueryVariables = {
  id: string
}

export type GetEnquiriesQuery = {
  getEnquiries?: {
    __typename: 'Enquiries'
    id: string
    firstName?: string | null
    lastName?: string | null
    email: string
    subject?: string | null
    message?: string | null
    enquiryReason?: string | null
    organization?: string | null
    contactNumber?: string | null
    productInfo?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type ListEnquiriesQueryVariables = {
  filter?: ModelEnquiriesFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListEnquiriesQuery = {
  listEnquiries?: {
    __typename: 'ModelEnquiriesConnection'
    items: Array<{
      __typename: 'Enquiries'
      id: string
      firstName?: string | null
      lastName?: string | null
      email: string
      subject?: string | null
      message?: string | null
      enquiryReason?: string | null
      organization?: string | null
      contactNumber?: string | null
      productInfo?: string | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SyncEnquiriesQueryVariables = {
  filter?: ModelEnquiriesFilterInput | null
  limit?: number | null
  nextToken?: string | null
  lastSync?: number | null
}

export type SyncEnquiriesQuery = {
  syncEnquiries?: {
    __typename: 'ModelEnquiriesConnection'
    items: Array<{
      __typename: 'Enquiries'
      id: string
      firstName?: string | null
      lastName?: string | null
      email: string
      subject?: string | null
      message?: string | null
      enquiryReason?: string | null
      organization?: string | null
      contactNumber?: string | null
      productInfo?: string | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type GetLandingPageQueryVariables = {
  id: string
}

export type GetLandingPageQuery = {
  getLandingPage?: {
    __typename: 'LandingPage'
    id: string
    title?: string | null
    subTitle?: string | null
    leftSection?: string | null
    rightSection?: string | null
    type?: string | null
    order?: number | null
    features?: {
      __typename: 'ModelFeatureConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    pageKey?: PageKeys | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type ListLandingPagesQueryVariables = {
  filter?: ModelLandingPageFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListLandingPagesQuery = {
  listLandingPages?: {
    __typename: 'ModelLandingPageConnection'
    items: Array<{
      __typename: 'LandingPage'
      id: string
      title?: string | null
      subTitle?: string | null
      leftSection?: string | null
      rightSection?: string | null
      type?: string | null
      order?: number | null
      pageKey?: PageKeys | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SyncLandingPagesQueryVariables = {
  filter?: ModelLandingPageFilterInput | null
  limit?: number | null
  nextToken?: string | null
  lastSync?: number | null
}

export type SyncLandingPagesQuery = {
  syncLandingPages?: {
    __typename: 'ModelLandingPageConnection'
    items: Array<{
      __typename: 'LandingPage'
      id: string
      title?: string | null
      subTitle?: string | null
      leftSection?: string | null
      rightSection?: string | null
      type?: string | null
      order?: number | null
      pageKey?: PageKeys | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type GetFeatureQueryVariables = {
  id: string
}

export type GetFeatureQuery = {
  getFeature?: {
    __typename: 'Feature'
    id: string
    title?: string | null
    subTitle?: string | null
    image?: string | null
    order?: number | null
    landingpageID?: string | null
    url?: string | null
    isActive?: boolean | null
    contentID?: string | null
    description?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type ListFeaturesQueryVariables = {
  filter?: ModelFeatureFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListFeaturesQuery = {
  listFeatures?: {
    __typename: 'ModelFeatureConnection'
    items: Array<{
      __typename: 'Feature'
      id: string
      title?: string | null
      subTitle?: string | null
      image?: string | null
      order?: number | null
      landingpageID?: string | null
      url?: string | null
      isActive?: boolean | null
      contentID?: string | null
      description?: string | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SyncFeaturesQueryVariables = {
  filter?: ModelFeatureFilterInput | null
  limit?: number | null
  nextToken?: string | null
  lastSync?: number | null
}

export type SyncFeaturesQuery = {
  syncFeatures?: {
    __typename: 'ModelFeatureConnection'
    items: Array<{
      __typename: 'Feature'
      id: string
      title?: string | null
      subTitle?: string | null
      image?: string | null
      order?: number | null
      landingpageID?: string | null
      url?: string | null
      isActive?: boolean | null
      contentID?: string | null
      description?: string | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type FeaturesByLandingpageIDQueryVariables = {
  landingpageID: string
  sortDirection?: ModelSortDirection | null
  filter?: ModelFeatureFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type FeaturesByLandingpageIDQuery = {
  featuresByLandingpageID?: {
    __typename: 'ModelFeatureConnection'
    items: Array<{
      __typename: 'Feature'
      id: string
      title?: string | null
      subTitle?: string | null
      image?: string | null
      order?: number | null
      landingpageID?: string | null
      url?: string | null
      isActive?: boolean | null
      contentID?: string | null
      description?: string | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type FeaturesByContentIDQueryVariables = {
  contentID: string
  sortDirection?: ModelSortDirection | null
  filter?: ModelFeatureFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type FeaturesByContentIDQuery = {
  featuresByContentID?: {
    __typename: 'ModelFeatureConnection'
    items: Array<{
      __typename: 'Feature'
      id: string
      title?: string | null
      subTitle?: string | null
      image?: string | null
      order?: number | null
      landingpageID?: string | null
      url?: string | null
      isActive?: boolean | null
      contentID?: string | null
      description?: string | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type GetSubMenusQueryVariables = {
  id: string
}

export type GetSubMenusQuery = {
  getSubMenus?: {
    __typename: 'SubMenus'
    id: string
    name?: string | null
    route?: string | null
    menusID?: string | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type ListSubMenusQueryVariables = {
  filter?: ModelSubMenusFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListSubMenusQuery = {
  listSubMenus?: {
    __typename: 'ModelSubMenusConnection'
    items: Array<{
      __typename: 'SubMenus'
      id: string
      name?: string | null
      route?: string | null
      menusID?: string | null
      order?: number | null
      isActive?: boolean | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SyncSubMenusQueryVariables = {
  filter?: ModelSubMenusFilterInput | null
  limit?: number | null
  nextToken?: string | null
  lastSync?: number | null
}

export type SyncSubMenusQuery = {
  syncSubMenus?: {
    __typename: 'ModelSubMenusConnection'
    items: Array<{
      __typename: 'SubMenus'
      id: string
      name?: string | null
      route?: string | null
      menusID?: string | null
      order?: number | null
      isActive?: boolean | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SubMenusByMenusIDQueryVariables = {
  menusID: string
  sortDirection?: ModelSortDirection | null
  filter?: ModelSubMenusFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type SubMenusByMenusIDQuery = {
  subMenusByMenusID?: {
    __typename: 'ModelSubMenusConnection'
    items: Array<{
      __typename: 'SubMenus'
      id: string
      name?: string | null
      route?: string | null
      menusID?: string | null
      order?: number | null
      isActive?: boolean | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type GetMenusQueryVariables = {
  id: string
}

export type GetMenusQuery = {
  getMenus?: {
    __typename: 'Menus'
    id: string
    name?: string | null
    route?: string | null
    subMenus?: {
      __typename: 'ModelSubMenusConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type ListMenusQueryVariables = {
  filter?: ModelMenusFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListMenusQuery = {
  listMenus?: {
    __typename: 'ModelMenusConnection'
    items: Array<{
      __typename: 'Menus'
      id: string
      name?: string | null
      route?: string | null
      order?: number | null
      isActive?: boolean | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SyncMenusQueryVariables = {
  filter?: ModelMenusFilterInput | null
  limit?: number | null
  nextToken?: string | null
  lastSync?: number | null
}

export type SyncMenusQuery = {
  syncMenus?: {
    __typename: 'ModelMenusConnection'
    items: Array<{
      __typename: 'Menus'
      id: string
      name?: string | null
      route?: string | null
      order?: number | null
      isActive?: boolean | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type GetHeroSectionQueryVariables = {
  id: string
}

export type GetHeroSectionQuery = {
  getHeroSection?: {
    __typename: 'HeroSection'
    id: string
    leftSection?: string | null
    rightSection?: string | null
    pageName?: string | null
    pageSectionNo?: number | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type ListHeroSectionsQueryVariables = {
  filter?: ModelHeroSectionFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListHeroSectionsQuery = {
  listHeroSections?: {
    __typename: 'ModelHeroSectionConnection'
    items: Array<{
      __typename: 'HeroSection'
      id: string
      leftSection?: string | null
      rightSection?: string | null
      pageName?: string | null
      pageSectionNo?: number | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SyncHeroSectionsQueryVariables = {
  filter?: ModelHeroSectionFilterInput | null
  limit?: number | null
  nextToken?: string | null
  lastSync?: number | null
}

export type SyncHeroSectionsQuery = {
  syncHeroSections?: {
    __typename: 'ModelHeroSectionConnection'
    items: Array<{
      __typename: 'HeroSection'
      id: string
      leftSection?: string | null
      rightSection?: string | null
      pageName?: string | null
      pageSectionNo?: number | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type GetMediaQueryVariables = {
  id: string
}

export type GetMediaQuery = {
  getMedia?: {
    __typename: 'Media'
    id: string
    type?: TypeOfMedia | null
    url?: string | null
    alt?: string | null
    order?: number | null
    forUserID?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type ListMediaQueryVariables = {
  filter?: ModelMediaFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListMediaQuery = {
  listMedia?: {
    __typename: 'ModelMediaConnection'
    items: Array<{
      __typename: 'Media'
      id: string
      type?: TypeOfMedia | null
      url?: string | null
      alt?: string | null
      order?: number | null
      forUserID?: string | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SyncMediaQueryVariables = {
  filter?: ModelMediaFilterInput | null
  limit?: number | null
  nextToken?: string | null
  lastSync?: number | null
}

export type SyncMediaQuery = {
  syncMedia?: {
    __typename: 'ModelMediaConnection'
    items: Array<{
      __typename: 'Media'
      id: string
      type?: TypeOfMedia | null
      url?: string | null
      alt?: string | null
      order?: number | null
      forUserID?: string | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type MediaByForUserIDQueryVariables = {
  forUserID: string
  sortDirection?: ModelSortDirection | null
  filter?: ModelMediaFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type MediaByForUserIDQuery = {
  mediaByForUserID?: {
    __typename: 'ModelMediaConnection'
    items: Array<{
      __typename: 'Media'
      id: string
      type?: TypeOfMedia | null
      url?: string | null
      alt?: string | null
      order?: number | null
      forUserID?: string | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type GetForUserQueryVariables = {
  id: string
}

export type GetForUserQuery = {
  getForUser?: {
    __typename: 'ForUser'
    id: string
    title?: string | null
    subTitle?: string | null
    leftSection?: string | null
    rightSection?: string | null
    type?: string | null
    order?: number | null
    Media?: {
      __typename: 'ModelMediaConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type ListForUsersQueryVariables = {
  filter?: ModelForUserFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListForUsersQuery = {
  listForUsers?: {
    __typename: 'ModelForUserConnection'
    items: Array<{
      __typename: 'ForUser'
      id: string
      title?: string | null
      subTitle?: string | null
      leftSection?: string | null
      rightSection?: string | null
      type?: string | null
      order?: number | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SyncForUsersQueryVariables = {
  filter?: ModelForUserFilterInput | null
  limit?: number | null
  nextToken?: string | null
  lastSync?: number | null
}

export type SyncForUsersQuery = {
  syncForUsers?: {
    __typename: 'ModelForUserConnection'
    items: Array<{
      __typename: 'ForUser'
      id: string
      title?: string | null
      subTitle?: string | null
      leftSection?: string | null
      rightSection?: string | null
      type?: string | null
      order?: number | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type GetBenefitsQueryVariables = {
  id: string
}

export type GetBenefitsQuery = {
  getBenefits?: {
    __typename: 'Benefits'
    id: string
    title?: string | null
    description?: string | null
    image?: string | null
    order?: number | null
    isActive?: boolean | null
    contentID: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type ListBenefitsQueryVariables = {
  filter?: ModelBenefitsFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListBenefitsQuery = {
  listBenefits?: {
    __typename: 'ModelBenefitsConnection'
    items: Array<{
      __typename: 'Benefits'
      id: string
      title?: string | null
      description?: string | null
      image?: string | null
      order?: number | null
      isActive?: boolean | null
      contentID: string
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SyncBenefitsQueryVariables = {
  filter?: ModelBenefitsFilterInput | null
  limit?: number | null
  nextToken?: string | null
  lastSync?: number | null
}

export type SyncBenefitsQuery = {
  syncBenefits?: {
    __typename: 'ModelBenefitsConnection'
    items: Array<{
      __typename: 'Benefits'
      id: string
      title?: string | null
      description?: string | null
      image?: string | null
      order?: number | null
      isActive?: boolean | null
      contentID: string
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type BenefitsByContentIDQueryVariables = {
  contentID: string
  sortDirection?: ModelSortDirection | null
  filter?: ModelBenefitsFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type BenefitsByContentIDQuery = {
  benefitsByContentID?: {
    __typename: 'ModelBenefitsConnection'
    items: Array<{
      __typename: 'Benefits'
      id: string
      title?: string | null
      description?: string | null
      image?: string | null
      order?: number | null
      isActive?: boolean | null
      contentID: string
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type GetContentQueryVariables = {
  id: string
}

export type GetContentQuery = {
  getContent?: {
    __typename: 'Content'
    navigate?: string | null
    contentType?: ContentType | null
    contentData?: string | null
    subsectionID: string
    isActive?: boolean | null
    posts?: {
      __typename: 'ModelPostConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    collaborators?: {
      __typename: 'ModelCollaboratorConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    features?: {
      __typename: 'ModelFeatureConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    id: string
    order?: number | null
    direction?: Direction | null
    Benefits?: {
      __typename: 'ModelBenefitsConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    customComponent?: string | null
    Services?: {
      __typename: 'ModelServicesConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    Solutions?: {
      __typename: 'ModelSolutionsConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    noOfItemPerRow?: number | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type ListContentsQueryVariables = {
  filter?: ModelContentFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListContentsQuery = {
  listContents?: {
    __typename: 'ModelContentConnection'
    items: Array<{
      __typename: 'Content'
      navigate?: string | null
      contentType?: ContentType | null
      contentData?: string | null
      subsectionID: string
      isActive?: boolean | null
      id: string
      order?: number | null
      direction?: Direction | null
      customComponent?: string | null
      noOfItemPerRow?: number | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SyncContentsQueryVariables = {
  filter?: ModelContentFilterInput | null
  limit?: number | null
  nextToken?: string | null
  lastSync?: number | null
}

export type SyncContentsQuery = {
  syncContents?: {
    __typename: 'ModelContentConnection'
    items: Array<{
      __typename: 'Content'
      navigate?: string | null
      contentType?: ContentType | null
      contentData?: string | null
      subsectionID: string
      isActive?: boolean | null
      id: string
      order?: number | null
      direction?: Direction | null
      customComponent?: string | null
      noOfItemPerRow?: number | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type ContentsBySubsectionIDQueryVariables = {
  subsectionID: string
  sortDirection?: ModelSortDirection | null
  filter?: ModelContentFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ContentsBySubsectionIDQuery = {
  contentsBySubsectionID?: {
    __typename: 'ModelContentConnection'
    items: Array<{
      __typename: 'Content'
      navigate?: string | null
      contentType?: ContentType | null
      contentData?: string | null
      subsectionID: string
      isActive?: boolean | null
      id: string
      order?: number | null
      direction?: Direction | null
      customComponent?: string | null
      noOfItemPerRow?: number | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type GetSubSectionQueryVariables = {
  id: string
}

export type GetSubSectionQuery = {
  getSubSection?: {
    __typename: 'SubSection'
    navigate?: string | null
    title?: string | null
    subTitle?: string | null
    order?: number | null
    sectionID: string
    contentDirection?: Direction | null
    contents?: {
      __typename: 'ModelContentConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    isActive?: boolean | null
    id: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type ListSubSectionsQueryVariables = {
  filter?: ModelSubSectionFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListSubSectionsQuery = {
  listSubSections?: {
    __typename: 'ModelSubSectionConnection'
    items: Array<{
      __typename: 'SubSection'
      navigate?: string | null
      title?: string | null
      subTitle?: string | null
      order?: number | null
      sectionID: string
      contentDirection?: Direction | null
      isActive?: boolean | null
      id: string
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SyncSubSectionsQueryVariables = {
  filter?: ModelSubSectionFilterInput | null
  limit?: number | null
  nextToken?: string | null
  lastSync?: number | null
}

export type SyncSubSectionsQuery = {
  syncSubSections?: {
    __typename: 'ModelSubSectionConnection'
    items: Array<{
      __typename: 'SubSection'
      navigate?: string | null
      title?: string | null
      subTitle?: string | null
      order?: number | null
      sectionID: string
      contentDirection?: Direction | null
      isActive?: boolean | null
      id: string
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SubSectionsBySectionIDQueryVariables = {
  sectionID: string
  sortDirection?: ModelSortDirection | null
  filter?: ModelSubSectionFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type SubSectionsBySectionIDQuery = {
  subSectionsBySectionID?: {
    __typename: 'ModelSubSectionConnection'
    items: Array<{
      __typename: 'SubSection'
      navigate?: string | null
      title?: string | null
      subTitle?: string | null
      order?: number | null
      sectionID: string
      contentDirection?: Direction | null
      isActive?: boolean | null
      id: string
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type GetSectionQueryVariables = {
  id: string
}

export type GetSectionQuery = {
  getSection?: {
    __typename: 'Section'
    navigate?: string | null
    title?: string | null
    subTitle?: string | null
    pagesID: string
    order?: number | null
    subSections?: {
      __typename: 'ModelSubSectionConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    isActive?: boolean | null
    id: string
    subSectionDirection?: Direction | null
    sectionType?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type ListSectionsQueryVariables = {
  filter?: ModelSectionFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListSectionsQuery = {
  listSections?: {
    __typename: 'ModelSectionConnection'
    items: Array<{
      __typename: 'Section'
      navigate?: string | null
      title?: string | null
      subTitle?: string | null
      pagesID: string
      order?: number | null
      isActive?: boolean | null
      id: string
      subSectionDirection?: Direction | null
      sectionType?: string | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SyncSectionsQueryVariables = {
  filter?: ModelSectionFilterInput | null
  limit?: number | null
  nextToken?: string | null
  lastSync?: number | null
}

export type SyncSectionsQuery = {
  syncSections?: {
    __typename: 'ModelSectionConnection'
    items: Array<{
      __typename: 'Section'
      navigate?: string | null
      title?: string | null
      subTitle?: string | null
      pagesID: string
      order?: number | null
      isActive?: boolean | null
      id: string
      subSectionDirection?: Direction | null
      sectionType?: string | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SectionsByPagesIDQueryVariables = {
  pagesID: string
  sortDirection?: ModelSortDirection | null
  filter?: ModelSectionFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type SectionsByPagesIDQuery = {
  sectionsByPagesID?: {
    __typename: 'ModelSectionConnection'
    items: Array<{
      __typename: 'Section'
      navigate?: string | null
      title?: string | null
      subTitle?: string | null
      pagesID: string
      order?: number | null
      isActive?: boolean | null
      id: string
      subSectionDirection?: Direction | null
      sectionType?: string | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type GetPagesQueryVariables = {
  id: string
}

export type GetPagesQuery = {
  getPages?: {
    __typename: 'Pages'
    id: string
    pageName: PageNames
    sections?: {
      __typename: 'ModelSectionConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    isActive?: boolean | null
    title?: string | null
    description?: string | null
    keywords?: string | null
    viewPort?: string | null
    author?: string | null
    publisher?: string | null
    canonical?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type ListPagesQueryVariables = {
  filter?: ModelPagesFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListPagesQuery = {
  listPages?: {
    __typename: 'ModelPagesConnection'
    items: Array<{
      __typename: 'Pages'
      id: string
      pageName: PageNames
      isActive?: boolean | null
      title?: string | null
      description?: string | null
      keywords?: string | null
      viewPort?: string | null
      author?: string | null
      publisher?: string | null
      canonical?: string | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type SyncPagesQueryVariables = {
  filter?: ModelPagesFilterInput | null
  limit?: number | null
  nextToken?: string | null
  lastSync?: number | null
}

export type SyncPagesQuery = {
  syncPages?: {
    __typename: 'ModelPagesConnection'
    items: Array<{
      __typename: 'Pages'
      id: string
      pageName: PageNames
      isActive?: boolean | null
      title?: string | null
      description?: string | null
      keywords?: string | null
      viewPort?: string | null
      author?: string | null
      publisher?: string | null
      canonical?: string | null
      createdAt: string
      updatedAt: string
      _version: number
      _deleted?: boolean | null
      _lastChangedAt: number
    } | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type OnCreateSolutionsSubscriptionVariables = {
  filter?: ModelSubscriptionSolutionsFilterInput | null
}

export type OnCreateSolutionsSubscription = {
  onCreateSolutions?: {
    __typename: 'Solutions'
    id: string
    title?: string | null
    description?: string | null
    image?: string | null
    URL?: string | null
    logo?: string | null
    isActive?: boolean | null
    order?: string | null
    contentID: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnUpdateSolutionsSubscriptionVariables = {
  filter?: ModelSubscriptionSolutionsFilterInput | null
}

export type OnUpdateSolutionsSubscription = {
  onUpdateSolutions?: {
    __typename: 'Solutions'
    id: string
    title?: string | null
    description?: string | null
    image?: string | null
    URL?: string | null
    logo?: string | null
    isActive?: boolean | null
    order?: string | null
    contentID: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnDeleteSolutionsSubscriptionVariables = {
  filter?: ModelSubscriptionSolutionsFilterInput | null
}

export type OnDeleteSolutionsSubscription = {
  onDeleteSolutions?: {
    __typename: 'Solutions'
    id: string
    title?: string | null
    description?: string | null
    image?: string | null
    URL?: string | null
    logo?: string | null
    isActive?: boolean | null
    order?: string | null
    contentID: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnCreateServicesSubscriptionVariables = {
  filter?: ModelSubscriptionServicesFilterInput | null
}

export type OnCreateServicesSubscription = {
  onCreateServices?: {
    __typename: 'Services'
    id: string
    title?: string | null
    description?: string | null
    image?: string | null
    URL?: string | null
    logo?: string | null
    isActive?: boolean | null
    order?: number | null
    contentID: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnUpdateServicesSubscriptionVariables = {
  filter?: ModelSubscriptionServicesFilterInput | null
}

export type OnUpdateServicesSubscription = {
  onUpdateServices?: {
    __typename: 'Services'
    id: string
    title?: string | null
    description?: string | null
    image?: string | null
    URL?: string | null
    logo?: string | null
    isActive?: boolean | null
    order?: number | null
    contentID: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnDeleteServicesSubscriptionVariables = {
  filter?: ModelSubscriptionServicesFilterInput | null
}

export type OnDeleteServicesSubscription = {
  onDeleteServices?: {
    __typename: 'Services'
    id: string
    title?: string | null
    description?: string | null
    image?: string | null
    URL?: string | null
    logo?: string | null
    isActive?: boolean | null
    order?: number | null
    contentID: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnCreateGovernanceDocsSubscriptionVariables = {
  filter?: ModelSubscriptionGovernanceDocsFilterInput | null
}

export type OnCreateGovernanceDocsSubscription = {
  onCreateGovernanceDocs?: {
    __typename: 'GovernanceDocs'
    id: string
    language?: string | null
    source?: string | null
    order?: number | null
    isActive?: boolean | null
    governanceframeworkID?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnUpdateGovernanceDocsSubscriptionVariables = {
  filter?: ModelSubscriptionGovernanceDocsFilterInput | null
}

export type OnUpdateGovernanceDocsSubscription = {
  onUpdateGovernanceDocs?: {
    __typename: 'GovernanceDocs'
    id: string
    language?: string | null
    source?: string | null
    order?: number | null
    isActive?: boolean | null
    governanceframeworkID?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnDeleteGovernanceDocsSubscriptionVariables = {
  filter?: ModelSubscriptionGovernanceDocsFilterInput | null
}

export type OnDeleteGovernanceDocsSubscription = {
  onDeleteGovernanceDocs?: {
    __typename: 'GovernanceDocs'
    id: string
    language?: string | null
    source?: string | null
    order?: number | null
    isActive?: boolean | null
    governanceframeworkID?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnCreateGovernanceFrameworkSubscriptionVariables = {
  filter?: ModelSubscriptionGovernanceFrameworkFilterInput | null
}

export type OnCreateGovernanceFrameworkSubscription = {
  onCreateGovernanceFramework?: {
    __typename: 'GovernanceFramework'
    id: string
    title?: string | null
    description?: string | null
    date?: string | null
    isNDI?: boolean | null
    order?: number | null
    isActive?: boolean | null
    governanceDocs?: {
      __typename: 'ModelGovernanceDocsConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    keywords?: string | null
    viewPort?: string | null
    author?: string | null
    publisher?: string | null
    canonical?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnUpdateGovernanceFrameworkSubscriptionVariables = {
  filter?: ModelSubscriptionGovernanceFrameworkFilterInput | null
}

export type OnUpdateGovernanceFrameworkSubscription = {
  onUpdateGovernanceFramework?: {
    __typename: 'GovernanceFramework'
    id: string
    title?: string | null
    description?: string | null
    date?: string | null
    isNDI?: boolean | null
    order?: number | null
    isActive?: boolean | null
    governanceDocs?: {
      __typename: 'ModelGovernanceDocsConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    keywords?: string | null
    viewPort?: string | null
    author?: string | null
    publisher?: string | null
    canonical?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnDeleteGovernanceFrameworkSubscriptionVariables = {
  filter?: ModelSubscriptionGovernanceFrameworkFilterInput | null
}

export type OnDeleteGovernanceFrameworkSubscription = {
  onDeleteGovernanceFramework?: {
    __typename: 'GovernanceFramework'
    id: string
    title?: string | null
    description?: string | null
    date?: string | null
    isNDI?: boolean | null
    order?: number | null
    isActive?: boolean | null
    governanceDocs?: {
      __typename: 'ModelGovernanceDocsConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    keywords?: string | null
    viewPort?: string | null
    author?: string | null
    publisher?: string | null
    canonical?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnCreateFooterMenuSubscriptionVariables = {
  filter?: ModelSubscriptionFooterMenuFilterInput | null
}

export type OnCreateFooterMenuSubscription = {
  onCreateFooterMenu?: {
    __typename: 'FooterMenu'
    id: string
    name?: string | null
    route?: string | null
    order?: number | null
    isActive?: boolean | null
    footersectionID: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnUpdateFooterMenuSubscriptionVariables = {
  filter?: ModelSubscriptionFooterMenuFilterInput | null
}

export type OnUpdateFooterMenuSubscription = {
  onUpdateFooterMenu?: {
    __typename: 'FooterMenu'
    id: string
    name?: string | null
    route?: string | null
    order?: number | null
    isActive?: boolean | null
    footersectionID: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnDeleteFooterMenuSubscriptionVariables = {
  filter?: ModelSubscriptionFooterMenuFilterInput | null
}

export type OnDeleteFooterMenuSubscription = {
  onDeleteFooterMenu?: {
    __typename: 'FooterMenu'
    id: string
    name?: string | null
    route?: string | null
    order?: number | null
    isActive?: boolean | null
    footersectionID: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnCreateGlossarySubscriptionVariables = {
  filter?: ModelSubscriptionGlossaryFilterInput | null
}

export type OnCreateGlossarySubscription = {
  onCreateGlossary?: {
    __typename: 'Glossary'
    id: string
    letter?: string | null
    word?: string | null
    description?: string | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnUpdateGlossarySubscriptionVariables = {
  filter?: ModelSubscriptionGlossaryFilterInput | null
}

export type OnUpdateGlossarySubscription = {
  onUpdateGlossary?: {
    __typename: 'Glossary'
    id: string
    letter?: string | null
    word?: string | null
    description?: string | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnDeleteGlossarySubscriptionVariables = {
  filter?: ModelSubscriptionGlossaryFilterInput | null
}

export type OnDeleteGlossarySubscription = {
  onDeleteGlossary?: {
    __typename: 'Glossary'
    id: string
    letter?: string | null
    word?: string | null
    description?: string | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnCreateTeamSubscriptionVariables = {
  filter?: ModelSubscriptionTeamFilterInput | null
}

export type OnCreateTeamSubscription = {
  onCreateTeam?: {
    __typename: 'Team'
    id: string
    name?: string | null
    role?: string | null
    linkedInURL?: string | null
    InstaURL?: string | null
    Image?: string | null
    facebookURL?: string | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnUpdateTeamSubscriptionVariables = {
  filter?: ModelSubscriptionTeamFilterInput | null
}

export type OnUpdateTeamSubscription = {
  onUpdateTeam?: {
    __typename: 'Team'
    id: string
    name?: string | null
    role?: string | null
    linkedInURL?: string | null
    InstaURL?: string | null
    Image?: string | null
    facebookURL?: string | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnDeleteTeamSubscriptionVariables = {
  filter?: ModelSubscriptionTeamFilterInput | null
}

export type OnDeleteTeamSubscription = {
  onDeleteTeam?: {
    __typename: 'Team'
    id: string
    name?: string | null
    role?: string | null
    linkedInURL?: string | null
    InstaURL?: string | null
    Image?: string | null
    facebookURL?: string | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnCreateSocialMediaSubscriptionVariables = {
  filter?: ModelSubscriptionSocialMediaFilterInput | null
}

export type OnCreateSocialMediaSubscription = {
  onCreateSocialMedia?: {
    __typename: 'SocialMedia'
    id: string
    title?: string | null
    image?: string | null
    url?: string | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnUpdateSocialMediaSubscriptionVariables = {
  filter?: ModelSubscriptionSocialMediaFilterInput | null
}

export type OnUpdateSocialMediaSubscription = {
  onUpdateSocialMedia?: {
    __typename: 'SocialMedia'
    id: string
    title?: string | null
    image?: string | null
    url?: string | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnDeleteSocialMediaSubscriptionVariables = {
  filter?: ModelSubscriptionSocialMediaFilterInput | null
}

export type OnDeleteSocialMediaSubscription = {
  onDeleteSocialMedia?: {
    __typename: 'SocialMedia'
    id: string
    title?: string | null
    image?: string | null
    url?: string | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnCreateFooterSectionSubscriptionVariables = {
  filter?: ModelSubscriptionFooterSectionFilterInput | null
}

export type OnCreateFooterSectionSubscription = {
  onCreateFooterSection?: {
    __typename: 'FooterSection'
    id: string
    title?: string | null
    order?: number | null
    footerID: string
    footerMenu?: {
      __typename: 'ModelFooterMenuConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnUpdateFooterSectionSubscriptionVariables = {
  filter?: ModelSubscriptionFooterSectionFilterInput | null
}

export type OnUpdateFooterSectionSubscription = {
  onUpdateFooterSection?: {
    __typename: 'FooterSection'
    id: string
    title?: string | null
    order?: number | null
    footerID: string
    footerMenu?: {
      __typename: 'ModelFooterMenuConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnDeleteFooterSectionSubscriptionVariables = {
  filter?: ModelSubscriptionFooterSectionFilterInput | null
}

export type OnDeleteFooterSectionSubscription = {
  onDeleteFooterSection?: {
    __typename: 'FooterSection'
    id: string
    title?: string | null
    order?: number | null
    footerID: string
    footerMenu?: {
      __typename: 'ModelFooterMenuConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnCreateFooterSubscriptionVariables = {
  filter?: ModelSubscriptionFooterFilterInput | null
}

export type OnCreateFooterSubscription = {
  onCreateFooter?: {
    __typename: 'Footer'
    id: string
    footerNote?: string | null
    footerSections?: {
      __typename: 'ModelFooterSectionConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    contactNo?: number | null
    email?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnUpdateFooterSubscriptionVariables = {
  filter?: ModelSubscriptionFooterFilterInput | null
}

export type OnUpdateFooterSubscription = {
  onUpdateFooter?: {
    __typename: 'Footer'
    id: string
    footerNote?: string | null
    footerSections?: {
      __typename: 'ModelFooterSectionConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    contactNo?: number | null
    email?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnDeleteFooterSubscriptionVariables = {
  filter?: ModelSubscriptionFooterFilterInput | null
}

export type OnDeleteFooterSubscription = {
  onDeleteFooter?: {
    __typename: 'Footer'
    id: string
    footerNote?: string | null
    footerSections?: {
      __typename: 'ModelFooterSectionConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    contactNo?: number | null
    email?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnCreateFAQSubscriptionVariables = {
  filter?: ModelSubscriptionFAQFilterInput | null
}

export type OnCreateFAQSubscription = {
  onCreateFAQ?: {
    __typename: 'FAQ'
    id: string
    title?: string | null
    data?: string | null
    type?: TypeOfFAQ | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnUpdateFAQSubscriptionVariables = {
  filter?: ModelSubscriptionFAQFilterInput | null
}

export type OnUpdateFAQSubscription = {
  onUpdateFAQ?: {
    __typename: 'FAQ'
    id: string
    title?: string | null
    data?: string | null
    type?: TypeOfFAQ | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnDeleteFAQSubscriptionVariables = {
  filter?: ModelSubscriptionFAQFilterInput | null
}

export type OnDeleteFAQSubscription = {
  onDeleteFAQ?: {
    __typename: 'FAQ'
    id: string
    title?: string | null
    data?: string | null
    type?: TypeOfFAQ | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnCreateCollaboratorSubscriptionVariables = {
  filter?: ModelSubscriptionCollaboratorFilterInput | null
}

export type OnCreateCollaboratorSubscription = {
  onCreateCollaborator?: {
    __typename: 'Collaborator'
    id: string
    image?: string | null
    title?: string | null
    order?: number | null
    isActive?: string | null
    contentID?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnUpdateCollaboratorSubscriptionVariables = {
  filter?: ModelSubscriptionCollaboratorFilterInput | null
}

export type OnUpdateCollaboratorSubscription = {
  onUpdateCollaborator?: {
    __typename: 'Collaborator'
    id: string
    image?: string | null
    title?: string | null
    order?: number | null
    isActive?: string | null
    contentID?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnDeleteCollaboratorSubscriptionVariables = {
  filter?: ModelSubscriptionCollaboratorFilterInput | null
}

export type OnDeleteCollaboratorSubscription = {
  onDeleteCollaborator?: {
    __typename: 'Collaborator'
    id: string
    image?: string | null
    title?: string | null
    order?: number | null
    isActive?: string | null
    contentID?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null
}

export type OnCreatePostSubscription = {
  onCreatePost?: {
    __typename: 'Post'
    id: string
    postType?: PostType | null
    title?: string | null
    shortDescription?: string | null
    description?: string | null
    image?: string | null
    order?: number | null
    isActive?: boolean | null
    publishDate?: string | null
    contentID?: string | null
    url?: string | null
    dateOfEvent?: string | null
    author?: string | null
    keywords?: string | null
    viewPort?: string | null
    publisher?: string | null
    canonical?: string | null
    customizedURL?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null
}

export type OnUpdatePostSubscription = {
  onUpdatePost?: {
    __typename: 'Post'
    id: string
    postType?: PostType | null
    title?: string | null
    shortDescription?: string | null
    description?: string | null
    image?: string | null
    order?: number | null
    isActive?: boolean | null
    publishDate?: string | null
    contentID?: string | null
    url?: string | null
    dateOfEvent?: string | null
    author?: string | null
    keywords?: string | null
    viewPort?: string | null
    publisher?: string | null
    canonical?: string | null
    customizedURL?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null
}

export type OnDeletePostSubscription = {
  onDeletePost?: {
    __typename: 'Post'
    id: string
    postType?: PostType | null
    title?: string | null
    shortDescription?: string | null
    description?: string | null
    image?: string | null
    order?: number | null
    isActive?: boolean | null
    publishDate?: string | null
    contentID?: string | null
    url?: string | null
    dateOfEvent?: string | null
    author?: string | null
    keywords?: string | null
    viewPort?: string | null
    publisher?: string | null
    canonical?: string | null
    customizedURL?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnCreateEnquiryReasonSubscriptionVariables = {
  filter?: ModelSubscriptionEnquiryReasonFilterInput | null
}

export type OnCreateEnquiryReasonSubscription = {
  onCreateEnquiryReason?: {
    __typename: 'EnquiryReason'
    id: string
    reason?: string | null
    value?: EnquiryReasonEnum | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnUpdateEnquiryReasonSubscriptionVariables = {
  filter?: ModelSubscriptionEnquiryReasonFilterInput | null
}

export type OnUpdateEnquiryReasonSubscription = {
  onUpdateEnquiryReason?: {
    __typename: 'EnquiryReason'
    id: string
    reason?: string | null
    value?: EnquiryReasonEnum | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnDeleteEnquiryReasonSubscriptionVariables = {
  filter?: ModelSubscriptionEnquiryReasonFilterInput | null
}

export type OnDeleteEnquiryReasonSubscription = {
  onDeleteEnquiryReason?: {
    __typename: 'EnquiryReason'
    id: string
    reason?: string | null
    value?: EnquiryReasonEnum | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnCreateEnquiriesSubscriptionVariables = {
  filter?: ModelSubscriptionEnquiriesFilterInput | null
}

export type OnCreateEnquiriesSubscription = {
  onCreateEnquiries?: {
    __typename: 'Enquiries'
    id: string
    firstName?: string | null
    lastName?: string | null
    email: string
    subject?: string | null
    message?: string | null
    enquiryReason?: string | null
    organization?: string | null
    contactNumber?: string | null
    productInfo?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnUpdateEnquiriesSubscriptionVariables = {
  filter?: ModelSubscriptionEnquiriesFilterInput | null
}

export type OnUpdateEnquiriesSubscription = {
  onUpdateEnquiries?: {
    __typename: 'Enquiries'
    id: string
    firstName?: string | null
    lastName?: string | null
    email: string
    subject?: string | null
    message?: string | null
    enquiryReason?: string | null
    organization?: string | null
    contactNumber?: string | null
    productInfo?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnDeleteEnquiriesSubscriptionVariables = {
  filter?: ModelSubscriptionEnquiriesFilterInput | null
}

export type OnDeleteEnquiriesSubscription = {
  onDeleteEnquiries?: {
    __typename: 'Enquiries'
    id: string
    firstName?: string | null
    lastName?: string | null
    email: string
    subject?: string | null
    message?: string | null
    enquiryReason?: string | null
    organization?: string | null
    contactNumber?: string | null
    productInfo?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnCreateLandingPageSubscriptionVariables = {
  filter?: ModelSubscriptionLandingPageFilterInput | null
}

export type OnCreateLandingPageSubscription = {
  onCreateLandingPage?: {
    __typename: 'LandingPage'
    id: string
    title?: string | null
    subTitle?: string | null
    leftSection?: string | null
    rightSection?: string | null
    type?: string | null
    order?: number | null
    features?: {
      __typename: 'ModelFeatureConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    pageKey?: PageKeys | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnUpdateLandingPageSubscriptionVariables = {
  filter?: ModelSubscriptionLandingPageFilterInput | null
}

export type OnUpdateLandingPageSubscription = {
  onUpdateLandingPage?: {
    __typename: 'LandingPage'
    id: string
    title?: string | null
    subTitle?: string | null
    leftSection?: string | null
    rightSection?: string | null
    type?: string | null
    order?: number | null
    features?: {
      __typename: 'ModelFeatureConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    pageKey?: PageKeys | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnDeleteLandingPageSubscriptionVariables = {
  filter?: ModelSubscriptionLandingPageFilterInput | null
}

export type OnDeleteLandingPageSubscription = {
  onDeleteLandingPage?: {
    __typename: 'LandingPage'
    id: string
    title?: string | null
    subTitle?: string | null
    leftSection?: string | null
    rightSection?: string | null
    type?: string | null
    order?: number | null
    features?: {
      __typename: 'ModelFeatureConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    pageKey?: PageKeys | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnCreateFeatureSubscriptionVariables = {
  filter?: ModelSubscriptionFeatureFilterInput | null
}

export type OnCreateFeatureSubscription = {
  onCreateFeature?: {
    __typename: 'Feature'
    id: string
    title?: string | null
    subTitle?: string | null
    image?: string | null
    order?: number | null
    landingpageID?: string | null
    url?: string | null
    isActive?: boolean | null
    contentID?: string | null
    description?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnUpdateFeatureSubscriptionVariables = {
  filter?: ModelSubscriptionFeatureFilterInput | null
}

export type OnUpdateFeatureSubscription = {
  onUpdateFeature?: {
    __typename: 'Feature'
    id: string
    title?: string | null
    subTitle?: string | null
    image?: string | null
    order?: number | null
    landingpageID?: string | null
    url?: string | null
    isActive?: boolean | null
    contentID?: string | null
    description?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnDeleteFeatureSubscriptionVariables = {
  filter?: ModelSubscriptionFeatureFilterInput | null
}

export type OnDeleteFeatureSubscription = {
  onDeleteFeature?: {
    __typename: 'Feature'
    id: string
    title?: string | null
    subTitle?: string | null
    image?: string | null
    order?: number | null
    landingpageID?: string | null
    url?: string | null
    isActive?: boolean | null
    contentID?: string | null
    description?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnCreateSubMenusSubscriptionVariables = {
  filter?: ModelSubscriptionSubMenusFilterInput | null
}

export type OnCreateSubMenusSubscription = {
  onCreateSubMenus?: {
    __typename: 'SubMenus'
    id: string
    name?: string | null
    route?: string | null
    menusID?: string | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnUpdateSubMenusSubscriptionVariables = {
  filter?: ModelSubscriptionSubMenusFilterInput | null
}

export type OnUpdateSubMenusSubscription = {
  onUpdateSubMenus?: {
    __typename: 'SubMenus'
    id: string
    name?: string | null
    route?: string | null
    menusID?: string | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnDeleteSubMenusSubscriptionVariables = {
  filter?: ModelSubscriptionSubMenusFilterInput | null
}

export type OnDeleteSubMenusSubscription = {
  onDeleteSubMenus?: {
    __typename: 'SubMenus'
    id: string
    name?: string | null
    route?: string | null
    menusID?: string | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnCreateMenusSubscriptionVariables = {
  filter?: ModelSubscriptionMenusFilterInput | null
}

export type OnCreateMenusSubscription = {
  onCreateMenus?: {
    __typename: 'Menus'
    id: string
    name?: string | null
    route?: string | null
    subMenus?: {
      __typename: 'ModelSubMenusConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnUpdateMenusSubscriptionVariables = {
  filter?: ModelSubscriptionMenusFilterInput | null
}

export type OnUpdateMenusSubscription = {
  onUpdateMenus?: {
    __typename: 'Menus'
    id: string
    name?: string | null
    route?: string | null
    subMenus?: {
      __typename: 'ModelSubMenusConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnDeleteMenusSubscriptionVariables = {
  filter?: ModelSubscriptionMenusFilterInput | null
}

export type OnDeleteMenusSubscription = {
  onDeleteMenus?: {
    __typename: 'Menus'
    id: string
    name?: string | null
    route?: string | null
    subMenus?: {
      __typename: 'ModelSubMenusConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    order?: number | null
    isActive?: boolean | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnCreateHeroSectionSubscriptionVariables = {
  filter?: ModelSubscriptionHeroSectionFilterInput | null
}

export type OnCreateHeroSectionSubscription = {
  onCreateHeroSection?: {
    __typename: 'HeroSection'
    id: string
    leftSection?: string | null
    rightSection?: string | null
    pageName?: string | null
    pageSectionNo?: number | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnUpdateHeroSectionSubscriptionVariables = {
  filter?: ModelSubscriptionHeroSectionFilterInput | null
}

export type OnUpdateHeroSectionSubscription = {
  onUpdateHeroSection?: {
    __typename: 'HeroSection'
    id: string
    leftSection?: string | null
    rightSection?: string | null
    pageName?: string | null
    pageSectionNo?: number | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnDeleteHeroSectionSubscriptionVariables = {
  filter?: ModelSubscriptionHeroSectionFilterInput | null
}

export type OnDeleteHeroSectionSubscription = {
  onDeleteHeroSection?: {
    __typename: 'HeroSection'
    id: string
    leftSection?: string | null
    rightSection?: string | null
    pageName?: string | null
    pageSectionNo?: number | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnCreateMediaSubscriptionVariables = {
  filter?: ModelSubscriptionMediaFilterInput | null
}

export type OnCreateMediaSubscription = {
  onCreateMedia?: {
    __typename: 'Media'
    id: string
    type?: TypeOfMedia | null
    url?: string | null
    alt?: string | null
    order?: number | null
    forUserID?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnUpdateMediaSubscriptionVariables = {
  filter?: ModelSubscriptionMediaFilterInput | null
}

export type OnUpdateMediaSubscription = {
  onUpdateMedia?: {
    __typename: 'Media'
    id: string
    type?: TypeOfMedia | null
    url?: string | null
    alt?: string | null
    order?: number | null
    forUserID?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnDeleteMediaSubscriptionVariables = {
  filter?: ModelSubscriptionMediaFilterInput | null
}

export type OnDeleteMediaSubscription = {
  onDeleteMedia?: {
    __typename: 'Media'
    id: string
    type?: TypeOfMedia | null
    url?: string | null
    alt?: string | null
    order?: number | null
    forUserID?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnCreateForUserSubscriptionVariables = {
  filter?: ModelSubscriptionForUserFilterInput | null
}

export type OnCreateForUserSubscription = {
  onCreateForUser?: {
    __typename: 'ForUser'
    id: string
    title?: string | null
    subTitle?: string | null
    leftSection?: string | null
    rightSection?: string | null
    type?: string | null
    order?: number | null
    Media?: {
      __typename: 'ModelMediaConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnUpdateForUserSubscriptionVariables = {
  filter?: ModelSubscriptionForUserFilterInput | null
}

export type OnUpdateForUserSubscription = {
  onUpdateForUser?: {
    __typename: 'ForUser'
    id: string
    title?: string | null
    subTitle?: string | null
    leftSection?: string | null
    rightSection?: string | null
    type?: string | null
    order?: number | null
    Media?: {
      __typename: 'ModelMediaConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnDeleteForUserSubscriptionVariables = {
  filter?: ModelSubscriptionForUserFilterInput | null
}

export type OnDeleteForUserSubscription = {
  onDeleteForUser?: {
    __typename: 'ForUser'
    id: string
    title?: string | null
    subTitle?: string | null
    leftSection?: string | null
    rightSection?: string | null
    type?: string | null
    order?: number | null
    Media?: {
      __typename: 'ModelMediaConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnCreateBenefitsSubscriptionVariables = {
  filter?: ModelSubscriptionBenefitsFilterInput | null
}

export type OnCreateBenefitsSubscription = {
  onCreateBenefits?: {
    __typename: 'Benefits'
    id: string
    title?: string | null
    description?: string | null
    image?: string | null
    order?: number | null
    isActive?: boolean | null
    contentID: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnUpdateBenefitsSubscriptionVariables = {
  filter?: ModelSubscriptionBenefitsFilterInput | null
}

export type OnUpdateBenefitsSubscription = {
  onUpdateBenefits?: {
    __typename: 'Benefits'
    id: string
    title?: string | null
    description?: string | null
    image?: string | null
    order?: number | null
    isActive?: boolean | null
    contentID: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnDeleteBenefitsSubscriptionVariables = {
  filter?: ModelSubscriptionBenefitsFilterInput | null
}

export type OnDeleteBenefitsSubscription = {
  onDeleteBenefits?: {
    __typename: 'Benefits'
    id: string
    title?: string | null
    description?: string | null
    image?: string | null
    order?: number | null
    isActive?: boolean | null
    contentID: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnCreateContentSubscriptionVariables = {
  filter?: ModelSubscriptionContentFilterInput | null
}

export type OnCreateContentSubscription = {
  onCreateContent?: {
    __typename: 'Content'
    navigate?: string | null
    contentType?: ContentType | null
    contentData?: string | null
    subsectionID: string
    isActive?: boolean | null
    posts?: {
      __typename: 'ModelPostConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    collaborators?: {
      __typename: 'ModelCollaboratorConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    features?: {
      __typename: 'ModelFeatureConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    id: string
    order?: number | null
    direction?: Direction | null
    Benefits?: {
      __typename: 'ModelBenefitsConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    customComponent?: string | null
    Services?: {
      __typename: 'ModelServicesConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    Solutions?: {
      __typename: 'ModelSolutionsConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    noOfItemPerRow?: number | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnUpdateContentSubscriptionVariables = {
  filter?: ModelSubscriptionContentFilterInput | null
}

export type OnUpdateContentSubscription = {
  onUpdateContent?: {
    __typename: 'Content'
    navigate?: string | null
    contentType?: ContentType | null
    contentData?: string | null
    subsectionID: string
    isActive?: boolean | null
    posts?: {
      __typename: 'ModelPostConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    collaborators?: {
      __typename: 'ModelCollaboratorConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    features?: {
      __typename: 'ModelFeatureConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    id: string
    order?: number | null
    direction?: Direction | null
    Benefits?: {
      __typename: 'ModelBenefitsConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    customComponent?: string | null
    Services?: {
      __typename: 'ModelServicesConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    Solutions?: {
      __typename: 'ModelSolutionsConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    noOfItemPerRow?: number | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnDeleteContentSubscriptionVariables = {
  filter?: ModelSubscriptionContentFilterInput | null
}

export type OnDeleteContentSubscription = {
  onDeleteContent?: {
    __typename: 'Content'
    navigate?: string | null
    contentType?: ContentType | null
    contentData?: string | null
    subsectionID: string
    isActive?: boolean | null
    posts?: {
      __typename: 'ModelPostConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    collaborators?: {
      __typename: 'ModelCollaboratorConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    features?: {
      __typename: 'ModelFeatureConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    id: string
    order?: number | null
    direction?: Direction | null
    Benefits?: {
      __typename: 'ModelBenefitsConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    customComponent?: string | null
    Services?: {
      __typename: 'ModelServicesConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    Solutions?: {
      __typename: 'ModelSolutionsConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    noOfItemPerRow?: number | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnCreateSubSectionSubscriptionVariables = {
  filter?: ModelSubscriptionSubSectionFilterInput | null
}

export type OnCreateSubSectionSubscription = {
  onCreateSubSection?: {
    __typename: 'SubSection'
    navigate?: string | null
    title?: string | null
    subTitle?: string | null
    order?: number | null
    sectionID: string
    contentDirection?: Direction | null
    contents?: {
      __typename: 'ModelContentConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    isActive?: boolean | null
    id: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnUpdateSubSectionSubscriptionVariables = {
  filter?: ModelSubscriptionSubSectionFilterInput | null
}

export type OnUpdateSubSectionSubscription = {
  onUpdateSubSection?: {
    __typename: 'SubSection'
    navigate?: string | null
    title?: string | null
    subTitle?: string | null
    order?: number | null
    sectionID: string
    contentDirection?: Direction | null
    contents?: {
      __typename: 'ModelContentConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    isActive?: boolean | null
    id: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnDeleteSubSectionSubscriptionVariables = {
  filter?: ModelSubscriptionSubSectionFilterInput | null
}

export type OnDeleteSubSectionSubscription = {
  onDeleteSubSection?: {
    __typename: 'SubSection'
    navigate?: string | null
    title?: string | null
    subTitle?: string | null
    order?: number | null
    sectionID: string
    contentDirection?: Direction | null
    contents?: {
      __typename: 'ModelContentConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    isActive?: boolean | null
    id: string
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnCreateSectionSubscriptionVariables = {
  filter?: ModelSubscriptionSectionFilterInput | null
}

export type OnCreateSectionSubscription = {
  onCreateSection?: {
    __typename: 'Section'
    navigate?: string | null
    title?: string | null
    subTitle?: string | null
    pagesID: string
    order?: number | null
    subSections?: {
      __typename: 'ModelSubSectionConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    isActive?: boolean | null
    id: string
    subSectionDirection?: Direction | null
    sectionType?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnUpdateSectionSubscriptionVariables = {
  filter?: ModelSubscriptionSectionFilterInput | null
}

export type OnUpdateSectionSubscription = {
  onUpdateSection?: {
    __typename: 'Section'
    navigate?: string | null
    title?: string | null
    subTitle?: string | null
    pagesID: string
    order?: number | null
    subSections?: {
      __typename: 'ModelSubSectionConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    isActive?: boolean | null
    id: string
    subSectionDirection?: Direction | null
    sectionType?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnDeleteSectionSubscriptionVariables = {
  filter?: ModelSubscriptionSectionFilterInput | null
}

export type OnDeleteSectionSubscription = {
  onDeleteSection?: {
    __typename: 'Section'
    navigate?: string | null
    title?: string | null
    subTitle?: string | null
    pagesID: string
    order?: number | null
    subSections?: {
      __typename: 'ModelSubSectionConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    isActive?: boolean | null
    id: string
    subSectionDirection?: Direction | null
    sectionType?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnCreatePagesSubscriptionVariables = {
  filter?: ModelSubscriptionPagesFilterInput | null
}

export type OnCreatePagesSubscription = {
  onCreatePages?: {
    __typename: 'Pages'
    id: string
    pageName: PageNames
    sections?: {
      __typename: 'ModelSectionConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    isActive?: boolean | null
    title?: string | null
    description?: string | null
    keywords?: string | null
    viewPort?: string | null
    author?: string | null
    publisher?: string | null
    canonical?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnUpdatePagesSubscriptionVariables = {
  filter?: ModelSubscriptionPagesFilterInput | null
}

export type OnUpdatePagesSubscription = {
  onUpdatePages?: {
    __typename: 'Pages'
    id: string
    pageName: PageNames
    sections?: {
      __typename: 'ModelSectionConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    isActive?: boolean | null
    title?: string | null
    description?: string | null
    keywords?: string | null
    viewPort?: string | null
    author?: string | null
    publisher?: string | null
    canonical?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}

export type OnDeletePagesSubscriptionVariables = {
  filter?: ModelSubscriptionPagesFilterInput | null
}

export type OnDeletePagesSubscription = {
  onDeletePages?: {
    __typename: 'Pages'
    id: string
    pageName: PageNames
    sections?: {
      __typename: 'ModelSectionConnection'
      nextToken?: string | null
      startedAt?: number | null
    } | null
    isActive?: boolean | null
    title?: string | null
    description?: string | null
    keywords?: string | null
    viewPort?: string | null
    author?: string | null
    publisher?: string | null
    canonical?: string | null
    createdAt: string
    updatedAt: string
    _version: number
    _deleted?: boolean | null
    _lastChangedAt: number
  } | null
}
