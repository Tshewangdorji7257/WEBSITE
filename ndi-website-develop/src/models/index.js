// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ServicesType = {
  "MISSION": "MISSION",
  "VISSION": "VISSION",
  "ORG_SERVICES": "ORG_SERVICES"
};

const CustomComponentName = {
  "LANDING_NEW_AT_BHUTAN": "LANDING_NEW_AT_BHUTAN",
  "CONACT_US_FORM": "CONACT_US_FORM"
};

const TypeOfFaq = {
  "USER": "USER",
  "ORGANIZATION": "ORGANIZATION"
};

const PostType = {
  "BLOG": "BLOG",
  "VACANCY_ANNOUNCEMENT": "VACANCY_ANNOUNCEMENT",
  "EVENT": "EVENT",
  "WEBINAR": "WEBINAR",
  "NEWS_UPDATE": "NEWS_UPDATE",
  "MEDIA_COVERAGE": "MEDIA_COVERAGE",
  "PUBLICATIONS": "PUBLICATIONS"
};

const EnquiryReasonEnum = {
  "APP_ISSUE": "APP_ISSUE",
  "BUG_REPORT": "BUG_REPORT",
  "BUSINESS_ENQUIRY": "BUSINESS_ENQUIRY",
  "INTERNATIONAL_ENQUIRY": "INTERNATIONAL_ENQUIRY",
  "PRESS_ENQUIRY": "PRESS_ENQUIRY",
  "USER_ENQUIRY_HELPDESK": "USER_ENQUIRY_HELPDESK",
  "OTHER": "OTHER"
};

const PageKeys = {
  "FEATURES": "FEATURES",
  "SOLUTIONS": "SOLUTIONS",
  "PRODUCTS": "PRODUCTS"
};

const TypeOfMedia = {
  "IMAGE": "IMAGE",
  "VIDEO": "VIDEO"
};

const ContentType = {
  "TEXT": "TEXT",
  "IMAGE": "IMAGE",
  "VIDEO": "VIDEO",
  "CAROUSEL": "CAROUSEL",
  "MARKDOWN": "MARKDOWN",
  "SIMPLE_LIST": "SIMPLE_LIST",
  "MULTI_IMAGE_CAROUSEL": "MULTI_IMAGE_CAROUSEL",
  "INFOGRAPHIC_IMAGE": "INFOGRAPHIC_IMAGE",
  "CUSTOM": "CUSTOM"
};

const Direction = {
  "HORIZONTAL": "HORIZONTAL",
  "VERTICAL": "VERTICAL"
};

const PageNames = {
  "HOME": "HOME",
  "FOR_USER": "FOR_USER",
  "FOR_ORGANIZATION": "FOR_ORGANIZATION",
  "ABOUT_US": "ABOUT_US",
  "MEDIA_COVERAGE": "MEDIA_COVERAGE",
  "RESOURCE": "RESOURCE",
  "BLOGS": "BLOGS",
  "CONTACT_US": "CONTACT_US",
  "GLOSSARY": "GLOSSARY",
  "CAREER": "CAREER",
  "FEATURE_VIEWMORE": "FEATURE_VIEWMORE",
  "VISION_MISSION": "VISION_MISSION",
  "BUSINESS_INQUIRY": "BUSINESS_INQUIRY",
  "FAQS": "FAQS",
  "MEET_TEAM": "MEET_TEAM",
  "GOVERNANCE": "GOVERNANCE",
  "PRIVACY_POLICY": "PRIVACY_POLICY",
  "TERMS_OF_SERVICE": "TERMS_OF_SERVICE",
  "BACKUP_AND_RESTORE": "BACKUP_AND_RESTORE"
};

const { EventSignUp, UseCases, PostAnnouncement, Solutions, Services, GovernanceDocs, GovernanceFramework, FooterMenu, Glossary, Team, SocialMedia, FooterSection, Footer, FAQ, Collaborator, Post, EnquiryReason, Enquiries, LandingPage, Feature, SubMenus, Menus, HeroSection, Media, ForUser, Benefits, Content, SubSection, Section, Pages } = initSchema(schema);

export {
  EventSignUp,
  UseCases,
  PostAnnouncement,
  Solutions,
  Services,
  GovernanceDocs,
  GovernanceFramework,
  FooterMenu,
  Glossary,
  Team,
  SocialMedia,
  FooterSection,
  Footer,
  FAQ,
  Collaborator,
  Post,
  EnquiryReason,
  Enquiries,
  LandingPage,
  Feature,
  SubMenus,
  Menus,
  HeroSection,
  Media,
  ForUser,
  Benefits,
  Content,
  SubSection,
  Section,
  Pages,
  ServicesType,
  CustomComponentName,
  TypeOfFaq,
  PostType,
  EnquiryReasonEnum,
  PageKeys,
  TypeOfMedia,
  ContentType,
  Direction,
  PageNames
};