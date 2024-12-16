import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum ServicesType {
  MISSION = "MISSION",
  VISSION = "VISSION",
  ORG_SERVICES = "ORG_SERVICES"
}

export enum CustomComponentName {
  LANDING_NEW_AT_BHUTAN = "LANDING_NEW_AT_BHUTAN",
  CONACT_US_FORM = "CONACT_US_FORM"
}

export enum TypeOfFaq {
  USER = "USER",
  ORGANIZATION = "ORGANIZATION"
}

export enum PostType {
  BLOG = "BLOG",
  VACANCY_ANNOUNCEMENT = "VACANCY_ANNOUNCEMENT",
  EVENT = "EVENT",
  WEBINAR = "WEBINAR",
  NEWS_UPDATE = "NEWS_UPDATE",
  MEDIA_COVERAGE = "MEDIA_COVERAGE",
  PUBLICATIONS = "PUBLICATIONS"
}

export enum EnquiryReasonEnum {
  APP_ISSUE = "APP_ISSUE",
  BUG_REPORT = "BUG_REPORT",
  BUSINESS_ENQUIRY = "BUSINESS_ENQUIRY",
  INTERNATIONAL_ENQUIRY = "INTERNATIONAL_ENQUIRY",
  PRESS_ENQUIRY = "PRESS_ENQUIRY",
  USER_ENQUIRY_HELPDESK = "USER_ENQUIRY_HELPDESK",
  OTHER = "OTHER"
}

export enum PageKeys {
  FEATURES = "FEATURES",
  SOLUTIONS = "SOLUTIONS",
  PRODUCTS = "PRODUCTS"
}

export enum TypeOfMedia {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO"
}

export enum ContentType {
  TEXT = "TEXT",
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  CAROUSEL = "CAROUSEL",
  MARKDOWN = "MARKDOWN",
  SIMPLE_LIST = "SIMPLE_LIST",
  MULTI_IMAGE_CAROUSEL = "MULTI_IMAGE_CAROUSEL",
  INFOGRAPHIC_IMAGE = "INFOGRAPHIC_IMAGE",
  CUSTOM = "CUSTOM"
}

export enum Direction {
  HORIZONTAL = "HORIZONTAL",
  VERTICAL = "VERTICAL"
}

export enum PageNames {
  HOME = "HOME",
  FOR_USER = "FOR_USER",
  FOR_ORGANIZATION = "FOR_ORGANIZATION",
  ABOUT_US = "ABOUT_US",
  MEDIA_COVERAGE = "MEDIA_COVERAGE",
  RESOURCE = "RESOURCE",
  BLOGS = "BLOGS",
  CONTACT_US = "CONTACT_US",
  GLOSSARY = "GLOSSARY",
  CAREER = "CAREER",
  FEATURE_VIEWMORE = "FEATURE_VIEWMORE",
  VISION_MISSION = "VISION_MISSION",
  BUSINESS_INQUIRY = "BUSINESS_INQUIRY",
  FAQS = "FAQS",
  MEET_TEAM = "MEET_TEAM",
  GOVERNANCE = "GOVERNANCE",
  PRIVACY_POLICY = "PRIVACY_POLICY",
  TERMS_OF_SERVICE = "TERMS_OF_SERVICE",
  BACKUP_AND_RESTORE = "BACKUP_AND_RESTORE"
}



type EagerEventSignUp = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EventSignUp, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly organizationORCompany?: string | null;
  readonly designation?: string | null;
  readonly mobileNumber?: number | null;
  readonly email?: string | null;
  readonly linkedInURL?: string | null;
  readonly eventName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEventSignUp = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EventSignUp, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly organizationORCompany?: string | null;
  readonly designation?: string | null;
  readonly mobileNumber?: number | null;
  readonly email?: string | null;
  readonly linkedInURL?: string | null;
  readonly eventName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EventSignUp = LazyLoading extends LazyLoadingDisabled ? EagerEventSignUp : LazyEventSignUp

export declare const EventSignUp: (new (init: ModelInit<EventSignUp>) => EventSignUp) & {
  copyOf(source: EventSignUp, mutator: (draft: MutableModel<EventSignUp>) => MutableModel<EventSignUp> | void): EventSignUp;
}

type EagerUseCases = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UseCases, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly image?: string | null;
  readonly websiteLink?: string | null;
  readonly list1?: string | null;
  readonly list2?: string | null;
  readonly list3?: string | null;
  readonly list4?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUseCases = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UseCases, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly image?: string | null;
  readonly websiteLink?: string | null;
  readonly list1?: string | null;
  readonly list2?: string | null;
  readonly list3?: string | null;
  readonly list4?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UseCases = LazyLoading extends LazyLoadingDisabled ? EagerUseCases : LazyUseCases

export declare const UseCases: (new (init: ModelInit<UseCases>) => UseCases) & {
  copyOf(source: UseCases, mutator: (draft: MutableModel<UseCases>) => MutableModel<UseCases> | void): UseCases;
}

type EagerPostAnnouncement = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostAnnouncement, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly link?: string | null;
  readonly isSignUp?: boolean | null;
  readonly updatedAt?: string | null;
}

type LazyPostAnnouncement = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostAnnouncement, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly link?: string | null;
  readonly isSignUp?: boolean | null;
  readonly updatedAt?: string | null;
}

export declare type PostAnnouncement = LazyLoading extends LazyLoadingDisabled ? EagerPostAnnouncement : LazyPostAnnouncement

export declare const PostAnnouncement: (new (init: ModelInit<PostAnnouncement>) => PostAnnouncement) & {
  copyOf(source: PostAnnouncement, mutator: (draft: MutableModel<PostAnnouncement>) => MutableModel<PostAnnouncement> | void): PostAnnouncement;
}

type EagerSolutions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Solutions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly URL?: string | null;
  readonly logo?: string | null;
  readonly isActive?: boolean | null;
  readonly order?: string | null;
  readonly contentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySolutions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Solutions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly URL?: string | null;
  readonly logo?: string | null;
  readonly isActive?: boolean | null;
  readonly order?: string | null;
  readonly contentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Solutions = LazyLoading extends LazyLoadingDisabled ? EagerSolutions : LazySolutions

export declare const Solutions: (new (init: ModelInit<Solutions>) => Solutions) & {
  copyOf(source: Solutions, mutator: (draft: MutableModel<Solutions>) => MutableModel<Solutions> | void): Solutions;
}

type EagerServices = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Services, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly URL?: string | null;
  readonly logo?: string | null;
  readonly isActive?: boolean | null;
  readonly order?: number | null;
  readonly contentID: string;
  readonly serviceType?: ServicesType | keyof typeof ServicesType | null;
  readonly altText?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyServices = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Services, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly URL?: string | null;
  readonly logo?: string | null;
  readonly isActive?: boolean | null;
  readonly order?: number | null;
  readonly contentID: string;
  readonly serviceType?: ServicesType | keyof typeof ServicesType | null;
  readonly altText?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Services = LazyLoading extends LazyLoadingDisabled ? EagerServices : LazyServices

export declare const Services: (new (init: ModelInit<Services>) => Services) & {
  copyOf(source: Services, mutator: (draft: MutableModel<Services>) => MutableModel<Services> | void): Services;
}

type EagerGovernanceDocs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GovernanceDocs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly language?: string | null;
  readonly source?: string | null;
  readonly order?: number | null;
  readonly isActive?: boolean | null;
  readonly governanceframeworkID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGovernanceDocs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GovernanceDocs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly language?: string | null;
  readonly source?: string | null;
  readonly order?: number | null;
  readonly isActive?: boolean | null;
  readonly governanceframeworkID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GovernanceDocs = LazyLoading extends LazyLoadingDisabled ? EagerGovernanceDocs : LazyGovernanceDocs

export declare const GovernanceDocs: (new (init: ModelInit<GovernanceDocs>) => GovernanceDocs) & {
  copyOf(source: GovernanceDocs, mutator: (draft: MutableModel<GovernanceDocs>) => MutableModel<GovernanceDocs> | void): GovernanceDocs;
}

type EagerGovernanceFramework = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GovernanceFramework, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly date?: string | null;
  readonly isNDI?: boolean | null;
  readonly order?: number | null;
  readonly isActive?: boolean | null;
  readonly governanceDocs?: (GovernanceDocs | null)[] | null;
  readonly keywords?: string | null;
  readonly viewPort?: string | null;
  readonly author?: string | null;
  readonly publisher?: string | null;
  readonly canonical?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGovernanceFramework = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GovernanceFramework, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly date?: string | null;
  readonly isNDI?: boolean | null;
  readonly order?: number | null;
  readonly isActive?: boolean | null;
  readonly governanceDocs: AsyncCollection<GovernanceDocs>;
  readonly keywords?: string | null;
  readonly viewPort?: string | null;
  readonly author?: string | null;
  readonly publisher?: string | null;
  readonly canonical?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GovernanceFramework = LazyLoading extends LazyLoadingDisabled ? EagerGovernanceFramework : LazyGovernanceFramework

export declare const GovernanceFramework: (new (init: ModelInit<GovernanceFramework>) => GovernanceFramework) & {
  copyOf(source: GovernanceFramework, mutator: (draft: MutableModel<GovernanceFramework>) => MutableModel<GovernanceFramework> | void): GovernanceFramework;
}

type EagerFooterMenu = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FooterMenu, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly route?: string | null;
  readonly order?: number | null;
  readonly isActive?: boolean | null;
  readonly footersectionID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFooterMenu = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FooterMenu, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly route?: string | null;
  readonly order?: number | null;
  readonly isActive?: boolean | null;
  readonly footersectionID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FooterMenu = LazyLoading extends LazyLoadingDisabled ? EagerFooterMenu : LazyFooterMenu

export declare const FooterMenu: (new (init: ModelInit<FooterMenu>) => FooterMenu) & {
  copyOf(source: FooterMenu, mutator: (draft: MutableModel<FooterMenu>) => MutableModel<FooterMenu> | void): FooterMenu;
}

type EagerGlossary = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Glossary, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly letter?: string | null;
  readonly word?: string | null;
  readonly description?: string | null;
  readonly order?: number | null;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGlossary = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Glossary, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly letter?: string | null;
  readonly word?: string | null;
  readonly description?: string | null;
  readonly order?: number | null;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Glossary = LazyLoading extends LazyLoadingDisabled ? EagerGlossary : LazyGlossary

export declare const Glossary: (new (init: ModelInit<Glossary>) => Glossary) & {
  copyOf(source: Glossary, mutator: (draft: MutableModel<Glossary>) => MutableModel<Glossary> | void): Glossary;
}

type EagerTeam = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Team, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly role?: string | null;
  readonly linkedInURL?: string | null;
  readonly InstaURL?: string | null;
  readonly Image?: string | null;
  readonly facebookURL?: string | null;
  readonly order?: number | null;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeam = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Team, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly role?: string | null;
  readonly linkedInURL?: string | null;
  readonly InstaURL?: string | null;
  readonly Image?: string | null;
  readonly facebookURL?: string | null;
  readonly order?: number | null;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Team = LazyLoading extends LazyLoadingDisabled ? EagerTeam : LazyTeam

export declare const Team: (new (init: ModelInit<Team>) => Team) & {
  copyOf(source: Team, mutator: (draft: MutableModel<Team>) => MutableModel<Team> | void): Team;
}

type EagerSocialMedia = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SocialMedia, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly image?: string | null;
  readonly url?: string | null;
  readonly order?: number | null;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySocialMedia = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SocialMedia, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly image?: string | null;
  readonly url?: string | null;
  readonly order?: number | null;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SocialMedia = LazyLoading extends LazyLoadingDisabled ? EagerSocialMedia : LazySocialMedia

export declare const SocialMedia: (new (init: ModelInit<SocialMedia>) => SocialMedia) & {
  copyOf(source: SocialMedia, mutator: (draft: MutableModel<SocialMedia>) => MutableModel<SocialMedia> | void): SocialMedia;
}

type EagerFooterSection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FooterSection, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly order?: number | null;
  readonly footerID: string;
  readonly footerMenu?: (FooterMenu | null)[] | null;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFooterSection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FooterSection, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly order?: number | null;
  readonly footerID: string;
  readonly footerMenu: AsyncCollection<FooterMenu>;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FooterSection = LazyLoading extends LazyLoadingDisabled ? EagerFooterSection : LazyFooterSection

export declare const FooterSection: (new (init: ModelInit<FooterSection>) => FooterSection) & {
  copyOf(source: FooterSection, mutator: (draft: MutableModel<FooterSection>) => MutableModel<FooterSection> | void): FooterSection;
}

type EagerFooter = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Footer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly footerNote?: string | null;
  readonly footerSections?: (FooterSection | null)[] | null;
  readonly contactNo?: number | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFooter = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Footer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly footerNote?: string | null;
  readonly footerSections: AsyncCollection<FooterSection>;
  readonly contactNo?: number | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Footer = LazyLoading extends LazyLoadingDisabled ? EagerFooter : LazyFooter

export declare const Footer: (new (init: ModelInit<Footer>) => Footer) & {
  copyOf(source: Footer, mutator: (draft: MutableModel<Footer>) => MutableModel<Footer> | void): Footer;
}

type EagerFAQ = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FAQ, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly data?: string | null;
  readonly type?: TypeOfFaq | keyof typeof TypeOfFaq | null;
  readonly order?: number | null;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFAQ = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FAQ, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly data?: string | null;
  readonly type?: TypeOfFaq | keyof typeof TypeOfFaq | null;
  readonly order?: number | null;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FAQ = LazyLoading extends LazyLoadingDisabled ? EagerFAQ : LazyFAQ

export declare const FAQ: (new (init: ModelInit<FAQ>) => FAQ) & {
  copyOf(source: FAQ, mutator: (draft: MutableModel<FAQ>) => MutableModel<FAQ> | void): FAQ;
}

type EagerCollaborator = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Collaborator, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image?: string | null;
  readonly title?: string | null;
  readonly order?: number | null;
  readonly isActive?: string | null;
  readonly contentID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCollaborator = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Collaborator, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image?: string | null;
  readonly title?: string | null;
  readonly order?: number | null;
  readonly isActive?: string | null;
  readonly contentID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Collaborator = LazyLoading extends LazyLoadingDisabled ? EagerCollaborator : LazyCollaborator

export declare const Collaborator: (new (init: ModelInit<Collaborator>) => Collaborator) & {
  copyOf(source: Collaborator, mutator: (draft: MutableModel<Collaborator>) => MutableModel<Collaborator> | void): Collaborator;
}

type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly postType?: PostType | keyof typeof PostType | null;
  readonly title?: string | null;
  readonly shortDescription?: string | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly order?: number | null;
  readonly isActive?: boolean | null;
  readonly publishDate?: string | null;
  readonly contentID?: string | null;
  readonly url?: string | null;
  readonly dateOfEvent?: string | null;
  readonly author?: string | null;
  readonly keywords?: string | null;
  readonly viewPort?: string | null;
  readonly publisher?: string | null;
  readonly canonical?: string | null;
  readonly customizedURL?: string | null;
  readonly pdfURL?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly postType?: PostType | keyof typeof PostType | null;
  readonly title?: string | null;
  readonly shortDescription?: string | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly order?: number | null;
  readonly isActive?: boolean | null;
  readonly publishDate?: string | null;
  readonly contentID?: string | null;
  readonly url?: string | null;
  readonly dateOfEvent?: string | null;
  readonly author?: string | null;
  readonly keywords?: string | null;
  readonly viewPort?: string | null;
  readonly publisher?: string | null;
  readonly canonical?: string | null;
  readonly customizedURL?: string | null;
  readonly pdfURL?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

type EagerEnquiryReason = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EnquiryReason, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly reason?: string | null;
  readonly value?: EnquiryReasonEnum | keyof typeof EnquiryReasonEnum | null;
  readonly order?: number | null;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEnquiryReason = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EnquiryReason, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly reason?: string | null;
  readonly value?: EnquiryReasonEnum | keyof typeof EnquiryReasonEnum | null;
  readonly order?: number | null;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EnquiryReason = LazyLoading extends LazyLoadingDisabled ? EagerEnquiryReason : LazyEnquiryReason

export declare const EnquiryReason: (new (init: ModelInit<EnquiryReason>) => EnquiryReason) & {
  copyOf(source: EnquiryReason, mutator: (draft: MutableModel<EnquiryReason>) => MutableModel<EnquiryReason> | void): EnquiryReason;
}

type EagerEnquiries = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Enquiries, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email: string;
  readonly subject?: string | null;
  readonly message?: string | null;
  readonly enquiryReason?: string | null;
  readonly organization?: string | null;
  readonly contactNumber?: string | null;
  readonly productInfo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEnquiries = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Enquiries, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email: string;
  readonly subject?: string | null;
  readonly message?: string | null;
  readonly enquiryReason?: string | null;
  readonly organization?: string | null;
  readonly contactNumber?: string | null;
  readonly productInfo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Enquiries = LazyLoading extends LazyLoadingDisabled ? EagerEnquiries : LazyEnquiries

export declare const Enquiries: (new (init: ModelInit<Enquiries>) => Enquiries) & {
  copyOf(source: Enquiries, mutator: (draft: MutableModel<Enquiries>) => MutableModel<Enquiries> | void): Enquiries;
}

type EagerLandingPage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LandingPage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly subTitle?: string | null;
  readonly leftSection?: string | null;
  readonly rightSection?: string | null;
  readonly type?: string | null;
  readonly order?: number | null;
  readonly features?: (Feature | null)[] | null;
  readonly pageKey?: PageKeys | keyof typeof PageKeys | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLandingPage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LandingPage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly subTitle?: string | null;
  readonly leftSection?: string | null;
  readonly rightSection?: string | null;
  readonly type?: string | null;
  readonly order?: number | null;
  readonly features: AsyncCollection<Feature>;
  readonly pageKey?: PageKeys | keyof typeof PageKeys | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type LandingPage = LazyLoading extends LazyLoadingDisabled ? EagerLandingPage : LazyLandingPage

export declare const LandingPage: (new (init: ModelInit<LandingPage>) => LandingPage) & {
  copyOf(source: LandingPage, mutator: (draft: MutableModel<LandingPage>) => MutableModel<LandingPage> | void): LandingPage;
}

type EagerFeature = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Feature, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly subTitle?: string | null;
  readonly image?: string | null;
  readonly order?: number | null;
  readonly landingpageID?: string | null;
  readonly url?: string | null;
  readonly isActive?: boolean | null;
  readonly contentID?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFeature = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Feature, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly subTitle?: string | null;
  readonly image?: string | null;
  readonly order?: number | null;
  readonly landingpageID?: string | null;
  readonly url?: string | null;
  readonly isActive?: boolean | null;
  readonly contentID?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Feature = LazyLoading extends LazyLoadingDisabled ? EagerFeature : LazyFeature

export declare const Feature: (new (init: ModelInit<Feature>) => Feature) & {
  copyOf(source: Feature, mutator: (draft: MutableModel<Feature>) => MutableModel<Feature> | void): Feature;
}

type EagerSubMenus = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SubMenus, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly route?: string | null;
  readonly menusID?: string | null;
  readonly order?: number | null;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySubMenus = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SubMenus, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly route?: string | null;
  readonly menusID?: string | null;
  readonly order?: number | null;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SubMenus = LazyLoading extends LazyLoadingDisabled ? EagerSubMenus : LazySubMenus

export declare const SubMenus: (new (init: ModelInit<SubMenus>) => SubMenus) & {
  copyOf(source: SubMenus, mutator: (draft: MutableModel<SubMenus>) => MutableModel<SubMenus> | void): SubMenus;
}

type EagerMenus = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Menus, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly route?: string | null;
  readonly subMenus?: (SubMenus | null)[] | null;
  readonly order?: number | null;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMenus = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Menus, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly route?: string | null;
  readonly subMenus: AsyncCollection<SubMenus>;
  readonly order?: number | null;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Menus = LazyLoading extends LazyLoadingDisabled ? EagerMenus : LazyMenus

export declare const Menus: (new (init: ModelInit<Menus>) => Menus) & {
  copyOf(source: Menus, mutator: (draft: MutableModel<Menus>) => MutableModel<Menus> | void): Menus;
}

type EagerHeroSection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HeroSection, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly leftSection?: string | null;
  readonly rightSection?: string | null;
  readonly pageName?: string | null;
  readonly pageSectionNo?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHeroSection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HeroSection, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly leftSection?: string | null;
  readonly rightSection?: string | null;
  readonly pageName?: string | null;
  readonly pageSectionNo?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type HeroSection = LazyLoading extends LazyLoadingDisabled ? EagerHeroSection : LazyHeroSection

export declare const HeroSection: (new (init: ModelInit<HeroSection>) => HeroSection) & {
  copyOf(source: HeroSection, mutator: (draft: MutableModel<HeroSection>) => MutableModel<HeroSection> | void): HeroSection;
}

type EagerMedia = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Media, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: TypeOfMedia | keyof typeof TypeOfMedia | null;
  readonly url?: string | null;
  readonly alt?: string | null;
  readonly order?: number | null;
  readonly forUserID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMedia = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Media, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: TypeOfMedia | keyof typeof TypeOfMedia | null;
  readonly url?: string | null;
  readonly alt?: string | null;
  readonly order?: number | null;
  readonly forUserID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Media = LazyLoading extends LazyLoadingDisabled ? EagerMedia : LazyMedia

export declare const Media: (new (init: ModelInit<Media>) => Media) & {
  copyOf(source: Media, mutator: (draft: MutableModel<Media>) => MutableModel<Media> | void): Media;
}

type EagerForUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ForUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly subTitle?: string | null;
  readonly leftSection?: string | null;
  readonly rightSection?: string | null;
  readonly type?: string | null;
  readonly order?: number | null;
  readonly Media?: (Media | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyForUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ForUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly subTitle?: string | null;
  readonly leftSection?: string | null;
  readonly rightSection?: string | null;
  readonly type?: string | null;
  readonly order?: number | null;
  readonly Media: AsyncCollection<Media>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ForUser = LazyLoading extends LazyLoadingDisabled ? EagerForUser : LazyForUser

export declare const ForUser: (new (init: ModelInit<ForUser>) => ForUser) & {
  copyOf(source: ForUser, mutator: (draft: MutableModel<ForUser>) => MutableModel<ForUser> | void): ForUser;
}

type EagerBenefits = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Benefits, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly order?: number | null;
  readonly isActive?: boolean | null;
  readonly contentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBenefits = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Benefits, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly order?: number | null;
  readonly isActive?: boolean | null;
  readonly contentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Benefits = LazyLoading extends LazyLoadingDisabled ? EagerBenefits : LazyBenefits

export declare const Benefits: (new (init: ModelInit<Benefits>) => Benefits) & {
  copyOf(source: Benefits, mutator: (draft: MutableModel<Benefits>) => MutableModel<Benefits> | void): Benefits;
}

type EagerContent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Content, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly navigate?: string | null;
  readonly contentType?: ContentType | keyof typeof ContentType | null;
  readonly contentData?: string | null;
  readonly subsectionID: string;
  readonly isActive?: boolean | null;
  readonly posts?: (Post | null)[] | null;
  readonly collaborators?: (Collaborator | null)[] | null;
  readonly features?: (Feature | null)[] | null;
  readonly order?: number | null;
  readonly direction?: Direction | keyof typeof Direction | null;
  readonly Benefits?: (Benefits | null)[] | null;
  readonly customComponent?: string | null;
  readonly Services?: (Services | null)[] | null;
  readonly Solutions?: (Solutions | null)[] | null;
  readonly noOfItemPerRow?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyContent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Content, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly navigate?: string | null;
  readonly contentType?: ContentType | keyof typeof ContentType | null;
  readonly contentData?: string | null;
  readonly subsectionID: string;
  readonly isActive?: boolean | null;
  readonly posts: AsyncCollection<Post>;
  readonly collaborators: AsyncCollection<Collaborator>;
  readonly features: AsyncCollection<Feature>;
  readonly order?: number | null;
  readonly direction?: Direction | keyof typeof Direction | null;
  readonly Benefits: AsyncCollection<Benefits>;
  readonly customComponent?: string | null;
  readonly Services: AsyncCollection<Services>;
  readonly Solutions: AsyncCollection<Solutions>;
  readonly noOfItemPerRow?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Content = LazyLoading extends LazyLoadingDisabled ? EagerContent : LazyContent

export declare const Content: (new (init: ModelInit<Content>) => Content) & {
  copyOf(source: Content, mutator: (draft: MutableModel<Content>) => MutableModel<Content> | void): Content;
}

type EagerSubSection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SubSection, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly navigate?: string | null;
  readonly title?: string | null;
  readonly subTitle?: string | null;
  readonly order?: number | null;
  readonly sectionID: string;
  readonly contentDirection?: Direction | keyof typeof Direction | null;
  readonly contents?: (Content | null)[] | null;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySubSection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SubSection, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly navigate?: string | null;
  readonly title?: string | null;
  readonly subTitle?: string | null;
  readonly order?: number | null;
  readonly sectionID: string;
  readonly contentDirection?: Direction | keyof typeof Direction | null;
  readonly contents: AsyncCollection<Content>;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SubSection = LazyLoading extends LazyLoadingDisabled ? EagerSubSection : LazySubSection

export declare const SubSection: (new (init: ModelInit<SubSection>) => SubSection) & {
  copyOf(source: SubSection, mutator: (draft: MutableModel<SubSection>) => MutableModel<SubSection> | void): SubSection;
}

type EagerSection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Section, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly navigate?: string | null;
  readonly title?: string | null;
  readonly subTitle?: string | null;
  readonly pagesID: string;
  readonly order?: number | null;
  readonly subSections?: (SubSection | null)[] | null;
  readonly isActive?: boolean | null;
  readonly subSectionDirection?: Direction | keyof typeof Direction | null;
  readonly sectionType?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Section, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly navigate?: string | null;
  readonly title?: string | null;
  readonly subTitle?: string | null;
  readonly pagesID: string;
  readonly order?: number | null;
  readonly subSections: AsyncCollection<SubSection>;
  readonly isActive?: boolean | null;
  readonly subSectionDirection?: Direction | keyof typeof Direction | null;
  readonly sectionType?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Section = LazyLoading extends LazyLoadingDisabled ? EagerSection : LazySection

export declare const Section: (new (init: ModelInit<Section>) => Section) & {
  copyOf(source: Section, mutator: (draft: MutableModel<Section>) => MutableModel<Section> | void): Section;
}

type EagerPages = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pages, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pageName: PageNames | keyof typeof PageNames;
  readonly sections?: (Section | null)[] | null;
  readonly isActive?: boolean | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly keywords?: string | null;
  readonly viewPort?: string | null;
  readonly author?: string | null;
  readonly publisher?: string | null;
  readonly canonical?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPages = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pages, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pageName: PageNames | keyof typeof PageNames;
  readonly sections: AsyncCollection<Section>;
  readonly isActive?: boolean | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly keywords?: string | null;
  readonly viewPort?: string | null;
  readonly author?: string | null;
  readonly publisher?: string | null;
  readonly canonical?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Pages = LazyLoading extends LazyLoadingDisabled ? EagerPages : LazyPages

export declare const Pages: (new (init: ModelInit<Pages>) => Pages) & {
  copyOf(source: Pages, mutator: (draft: MutableModel<Pages>) => MutableModel<Pages> | void): Pages;
}