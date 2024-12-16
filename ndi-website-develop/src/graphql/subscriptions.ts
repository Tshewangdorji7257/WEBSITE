/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSolutions = /* GraphQL */ `
  subscription OnCreateSolutions(
    $filter: ModelSubscriptionSolutionsFilterInput
  ) {
    onCreateSolutions(filter: $filter) {
      id
      title
      description
      image
      URL
      logo
      isActive
      order
      contentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onUpdateSolutions = /* GraphQL */ `
  subscription OnUpdateSolutions(
    $filter: ModelSubscriptionSolutionsFilterInput
  ) {
    onUpdateSolutions(filter: $filter) {
      id
      title
      description
      image
      URL
      logo
      isActive
      order
      contentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onDeleteSolutions = /* GraphQL */ `
  subscription OnDeleteSolutions(
    $filter: ModelSubscriptionSolutionsFilterInput
  ) {
    onDeleteSolutions(filter: $filter) {
      id
      title
      description
      image
      URL
      logo
      isActive
      order
      contentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onCreateServices = /* GraphQL */ `
  subscription OnCreateServices($filter: ModelSubscriptionServicesFilterInput) {
    onCreateServices(filter: $filter) {
      id
      title
      description
      image
      URL
      logo
      isActive
      order
      contentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onUpdateServices = /* GraphQL */ `
  subscription OnUpdateServices($filter: ModelSubscriptionServicesFilterInput) {
    onUpdateServices(filter: $filter) {
      id
      title
      description
      image
      URL
      logo
      isActive
      order
      contentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onDeleteServices = /* GraphQL */ `
  subscription OnDeleteServices($filter: ModelSubscriptionServicesFilterInput) {
    onDeleteServices(filter: $filter) {
      id
      title
      description
      image
      URL
      logo
      isActive
      order
      contentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onCreateGovernanceDocs = /* GraphQL */ `
  subscription OnCreateGovernanceDocs(
    $filter: ModelSubscriptionGovernanceDocsFilterInput
  ) {
    onCreateGovernanceDocs(filter: $filter) {
      id
      language
      source
      order
      isActive
      governanceframeworkID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onUpdateGovernanceDocs = /* GraphQL */ `
  subscription OnUpdateGovernanceDocs(
    $filter: ModelSubscriptionGovernanceDocsFilterInput
  ) {
    onUpdateGovernanceDocs(filter: $filter) {
      id
      language
      source
      order
      isActive
      governanceframeworkID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onDeleteGovernanceDocs = /* GraphQL */ `
  subscription OnDeleteGovernanceDocs(
    $filter: ModelSubscriptionGovernanceDocsFilterInput
  ) {
    onDeleteGovernanceDocs(filter: $filter) {
      id
      language
      source
      order
      isActive
      governanceframeworkID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onCreateGovernanceFramework = /* GraphQL */ `
  subscription OnCreateGovernanceFramework(
    $filter: ModelSubscriptionGovernanceFrameworkFilterInput
  ) {
    onCreateGovernanceFramework(filter: $filter) {
      id
      title
      description
      date
      isNDI
      order
      isActive
      governanceDocs {
        nextToken
        startedAt
        __typename
      }
      keywords
      viewPort
      author
      publisher
      canonical
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onUpdateGovernanceFramework = /* GraphQL */ `
  subscription OnUpdateGovernanceFramework(
    $filter: ModelSubscriptionGovernanceFrameworkFilterInput
  ) {
    onUpdateGovernanceFramework(filter: $filter) {
      id
      title
      description
      date
      isNDI
      order
      isActive
      governanceDocs {
        nextToken
        startedAt
        __typename
      }
      keywords
      viewPort
      author
      publisher
      canonical
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onDeleteGovernanceFramework = /* GraphQL */ `
  subscription OnDeleteGovernanceFramework(
    $filter: ModelSubscriptionGovernanceFrameworkFilterInput
  ) {
    onDeleteGovernanceFramework(filter: $filter) {
      id
      title
      description
      date
      isNDI
      order
      isActive
      governanceDocs {
        nextToken
        startedAt
        __typename
      }
      keywords
      viewPort
      author
      publisher
      canonical
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onCreateFooterMenu = /* GraphQL */ `
  subscription OnCreateFooterMenu(
    $filter: ModelSubscriptionFooterMenuFilterInput
  ) {
    onCreateFooterMenu(filter: $filter) {
      id
      name
      route
      order
      isActive
      footersectionID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onUpdateFooterMenu = /* GraphQL */ `
  subscription OnUpdateFooterMenu(
    $filter: ModelSubscriptionFooterMenuFilterInput
  ) {
    onUpdateFooterMenu(filter: $filter) {
      id
      name
      route
      order
      isActive
      footersectionID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onDeleteFooterMenu = /* GraphQL */ `
  subscription OnDeleteFooterMenu(
    $filter: ModelSubscriptionFooterMenuFilterInput
  ) {
    onDeleteFooterMenu(filter: $filter) {
      id
      name
      route
      order
      isActive
      footersectionID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onCreateGlossary = /* GraphQL */ `
  subscription OnCreateGlossary($filter: ModelSubscriptionGlossaryFilterInput) {
    onCreateGlossary(filter: $filter) {
      id
      letter
      word
      description
      order
      isActive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onUpdateGlossary = /* GraphQL */ `
  subscription OnUpdateGlossary($filter: ModelSubscriptionGlossaryFilterInput) {
    onUpdateGlossary(filter: $filter) {
      id
      letter
      word
      description
      order
      isActive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onDeleteGlossary = /* GraphQL */ `
  subscription OnDeleteGlossary($filter: ModelSubscriptionGlossaryFilterInput) {
    onDeleteGlossary(filter: $filter) {
      id
      letter
      word
      description
      order
      isActive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onCreateTeam(filter: $filter) {
      id
      name
      role
      linkedInURL
      InstaURL
      Image
      facebookURL
      order
      isActive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onUpdateTeam(filter: $filter) {
      id
      name
      role
      linkedInURL
      InstaURL
      Image
      facebookURL
      order
      isActive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam($filter: ModelSubscriptionTeamFilterInput) {
    onDeleteTeam(filter: $filter) {
      id
      name
      role
      linkedInURL
      InstaURL
      Image
      facebookURL
      order
      isActive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onCreateSocialMedia = /* GraphQL */ `
  subscription OnCreateSocialMedia(
    $filter: ModelSubscriptionSocialMediaFilterInput
  ) {
    onCreateSocialMedia(filter: $filter) {
      id
      title
      image
      url
      order
      isActive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onUpdateSocialMedia = /* GraphQL */ `
  subscription OnUpdateSocialMedia(
    $filter: ModelSubscriptionSocialMediaFilterInput
  ) {
    onUpdateSocialMedia(filter: $filter) {
      id
      title
      image
      url
      order
      isActive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onDeleteSocialMedia = /* GraphQL */ `
  subscription OnDeleteSocialMedia(
    $filter: ModelSubscriptionSocialMediaFilterInput
  ) {
    onDeleteSocialMedia(filter: $filter) {
      id
      title
      image
      url
      order
      isActive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onCreateFooterSection = /* GraphQL */ `
  subscription OnCreateFooterSection(
    $filter: ModelSubscriptionFooterSectionFilterInput
  ) {
    onCreateFooterSection(filter: $filter) {
      id
      title
      order
      footerID
      footerMenu {
        nextToken
        startedAt
        __typename
      }
      isActive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onUpdateFooterSection = /* GraphQL */ `
  subscription OnUpdateFooterSection(
    $filter: ModelSubscriptionFooterSectionFilterInput
  ) {
    onUpdateFooterSection(filter: $filter) {
      id
      title
      order
      footerID
      footerMenu {
        nextToken
        startedAt
        __typename
      }
      isActive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onDeleteFooterSection = /* GraphQL */ `
  subscription OnDeleteFooterSection(
    $filter: ModelSubscriptionFooterSectionFilterInput
  ) {
    onDeleteFooterSection(filter: $filter) {
      id
      title
      order
      footerID
      footerMenu {
        nextToken
        startedAt
        __typename
      }
      isActive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onCreateFooter = /* GraphQL */ `
  subscription OnCreateFooter($filter: ModelSubscriptionFooterFilterInput) {
    onCreateFooter(filter: $filter) {
      id
      footerNote
      footerSections {
        nextToken
        startedAt
        __typename
      }
      contactNo
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onUpdateFooter = /* GraphQL */ `
  subscription OnUpdateFooter($filter: ModelSubscriptionFooterFilterInput) {
    onUpdateFooter(filter: $filter) {
      id
      footerNote
      footerSections {
        nextToken
        startedAt
        __typename
      }
      contactNo
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onDeleteFooter = /* GraphQL */ `
  subscription OnDeleteFooter($filter: ModelSubscriptionFooterFilterInput) {
    onDeleteFooter(filter: $filter) {
      id
      footerNote
      footerSections {
        nextToken
        startedAt
        __typename
      }
      contactNo
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onCreateFAQ = /* GraphQL */ `
  subscription OnCreateFAQ($filter: ModelSubscriptionFAQFilterInput) {
    onCreateFAQ(filter: $filter) {
      id
      title
      data
      type
      order
      isActive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onUpdateFAQ = /* GraphQL */ `
  subscription OnUpdateFAQ($filter: ModelSubscriptionFAQFilterInput) {
    onUpdateFAQ(filter: $filter) {
      id
      title
      data
      type
      order
      isActive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onDeleteFAQ = /* GraphQL */ `
  subscription OnDeleteFAQ($filter: ModelSubscriptionFAQFilterInput) {
    onDeleteFAQ(filter: $filter) {
      id
      title
      data
      type
      order
      isActive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onCreateCollaborator = /* GraphQL */ `
  subscription OnCreateCollaborator(
    $filter: ModelSubscriptionCollaboratorFilterInput
  ) {
    onCreateCollaborator(filter: $filter) {
      id
      image
      title
      order
      isActive
      contentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onUpdateCollaborator = /* GraphQL */ `
  subscription OnUpdateCollaborator(
    $filter: ModelSubscriptionCollaboratorFilterInput
  ) {
    onUpdateCollaborator(filter: $filter) {
      id
      image
      title
      order
      isActive
      contentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onDeleteCollaborator = /* GraphQL */ `
  subscription OnDeleteCollaborator(
    $filter: ModelSubscriptionCollaboratorFilterInput
  ) {
    onDeleteCollaborator(filter: $filter) {
      id
      image
      title
      order
      isActive
      contentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
      id
      postType
      title
      shortDescription
      description
      image
      order
      isActive
      publishDate
      contentID
      url
      dateOfEvent
      author
      keywords
      viewPort
      publisher
      canonical
      customizedURL
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
      id
      postType
      title
      shortDescription
      description
      image
      order
      isActive
      publishDate
      contentID
      url
      dateOfEvent
      author
      keywords
      viewPort
      publisher
      canonical
      customizedURL
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
      id
      postType
      title
      shortDescription
      description
      image
      order
      isActive
      publishDate
      contentID
      url
      dateOfEvent
      author
      keywords
      viewPort
      publisher
      canonical
      customizedURL
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onCreateEnquiryReason = /* GraphQL */ `
  subscription OnCreateEnquiryReason(
    $filter: ModelSubscriptionEnquiryReasonFilterInput
  ) {
    onCreateEnquiryReason(filter: $filter) {
      id
      reason
      value
      order
      isActive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onUpdateEnquiryReason = /* GraphQL */ `
  subscription OnUpdateEnquiryReason(
    $filter: ModelSubscriptionEnquiryReasonFilterInput
  ) {
    onUpdateEnquiryReason(filter: $filter) {
      id
      reason
      value
      order
      isActive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onDeleteEnquiryReason = /* GraphQL */ `
  subscription OnDeleteEnquiryReason(
    $filter: ModelSubscriptionEnquiryReasonFilterInput
  ) {
    onDeleteEnquiryReason(filter: $filter) {
      id
      reason
      value
      order
      isActive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onCreateEnquiries = /* GraphQL */ `
  subscription OnCreateEnquiries(
    $filter: ModelSubscriptionEnquiriesFilterInput
  ) {
    onCreateEnquiries(filter: $filter) {
      id
      firstName
      lastName
      email
      subject
      message
      enquiryReason
      organization
      contactNumber
      productInfo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onUpdateEnquiries = /* GraphQL */ `
  subscription OnUpdateEnquiries(
    $filter: ModelSubscriptionEnquiriesFilterInput
  ) {
    onUpdateEnquiries(filter: $filter) {
      id
      firstName
      lastName
      email
      subject
      message
      enquiryReason
      organization
      contactNumber
      productInfo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onDeleteEnquiries = /* GraphQL */ `
  subscription OnDeleteEnquiries(
    $filter: ModelSubscriptionEnquiriesFilterInput
  ) {
    onDeleteEnquiries(filter: $filter) {
      id
      firstName
      lastName
      email
      subject
      message
      enquiryReason
      organization
      contactNumber
      productInfo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onCreateLandingPage = /* GraphQL */ `
  subscription OnCreateLandingPage(
    $filter: ModelSubscriptionLandingPageFilterInput
  ) {
    onCreateLandingPage(filter: $filter) {
      id
      title
      subTitle
      leftSection
      rightSection
      type
      order
      features {
        nextToken
        startedAt
        __typename
      }
      pageKey
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onUpdateLandingPage = /* GraphQL */ `
  subscription OnUpdateLandingPage(
    $filter: ModelSubscriptionLandingPageFilterInput
  ) {
    onUpdateLandingPage(filter: $filter) {
      id
      title
      subTitle
      leftSection
      rightSection
      type
      order
      features {
        nextToken
        startedAt
        __typename
      }
      pageKey
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onDeleteLandingPage = /* GraphQL */ `
  subscription OnDeleteLandingPage(
    $filter: ModelSubscriptionLandingPageFilterInput
  ) {
    onDeleteLandingPage(filter: $filter) {
      id
      title
      subTitle
      leftSection
      rightSection
      type
      order
      features {
        nextToken
        startedAt
        __typename
      }
      pageKey
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onCreateFeature = /* GraphQL */ `
  subscription OnCreateFeature($filter: ModelSubscriptionFeatureFilterInput) {
    onCreateFeature(filter: $filter) {
      id
      title
      subTitle
      image
      order
      landingpageID
      url
      isActive
      contentID
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onUpdateFeature = /* GraphQL */ `
  subscription OnUpdateFeature($filter: ModelSubscriptionFeatureFilterInput) {
    onUpdateFeature(filter: $filter) {
      id
      title
      subTitle
      image
      order
      landingpageID
      url
      isActive
      contentID
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onDeleteFeature = /* GraphQL */ `
  subscription OnDeleteFeature($filter: ModelSubscriptionFeatureFilterInput) {
    onDeleteFeature(filter: $filter) {
      id
      title
      subTitle
      image
      order
      landingpageID
      url
      isActive
      contentID
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onCreateSubMenus = /* GraphQL */ `
  subscription OnCreateSubMenus($filter: ModelSubscriptionSubMenusFilterInput) {
    onCreateSubMenus(filter: $filter) {
      id
      name
      route
      menusID
      order
      isActive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onUpdateSubMenus = /* GraphQL */ `
  subscription OnUpdateSubMenus($filter: ModelSubscriptionSubMenusFilterInput) {
    onUpdateSubMenus(filter: $filter) {
      id
      name
      route
      menusID
      order
      isActive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onDeleteSubMenus = /* GraphQL */ `
  subscription OnDeleteSubMenus($filter: ModelSubscriptionSubMenusFilterInput) {
    onDeleteSubMenus(filter: $filter) {
      id
      name
      route
      menusID
      order
      isActive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onCreateMenus = /* GraphQL */ `
  subscription OnCreateMenus($filter: ModelSubscriptionMenusFilterInput) {
    onCreateMenus(filter: $filter) {
      id
      name
      route
      subMenus {
        nextToken
        startedAt
        __typename
      }
      order
      isActive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onUpdateMenus = /* GraphQL */ `
  subscription OnUpdateMenus($filter: ModelSubscriptionMenusFilterInput) {
    onUpdateMenus(filter: $filter) {
      id
      name
      route
      subMenus {
        nextToken
        startedAt
        __typename
      }
      order
      isActive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onDeleteMenus = /* GraphQL */ `
  subscription OnDeleteMenus($filter: ModelSubscriptionMenusFilterInput) {
    onDeleteMenus(filter: $filter) {
      id
      name
      route
      subMenus {
        nextToken
        startedAt
        __typename
      }
      order
      isActive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onCreateHeroSection = /* GraphQL */ `
  subscription OnCreateHeroSection(
    $filter: ModelSubscriptionHeroSectionFilterInput
  ) {
    onCreateHeroSection(filter: $filter) {
      id
      leftSection
      rightSection
      pageName
      pageSectionNo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onUpdateHeroSection = /* GraphQL */ `
  subscription OnUpdateHeroSection(
    $filter: ModelSubscriptionHeroSectionFilterInput
  ) {
    onUpdateHeroSection(filter: $filter) {
      id
      leftSection
      rightSection
      pageName
      pageSectionNo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onDeleteHeroSection = /* GraphQL */ `
  subscription OnDeleteHeroSection(
    $filter: ModelSubscriptionHeroSectionFilterInput
  ) {
    onDeleteHeroSection(filter: $filter) {
      id
      leftSection
      rightSection
      pageName
      pageSectionNo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onCreateMedia = /* GraphQL */ `
  subscription OnCreateMedia($filter: ModelSubscriptionMediaFilterInput) {
    onCreateMedia(filter: $filter) {
      id
      type
      url
      alt
      order
      forUserID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onUpdateMedia = /* GraphQL */ `
  subscription OnUpdateMedia($filter: ModelSubscriptionMediaFilterInput) {
    onUpdateMedia(filter: $filter) {
      id
      type
      url
      alt
      order
      forUserID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onDeleteMedia = /* GraphQL */ `
  subscription OnDeleteMedia($filter: ModelSubscriptionMediaFilterInput) {
    onDeleteMedia(filter: $filter) {
      id
      type
      url
      alt
      order
      forUserID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onCreateForUser = /* GraphQL */ `
  subscription OnCreateForUser($filter: ModelSubscriptionForUserFilterInput) {
    onCreateForUser(filter: $filter) {
      id
      title
      subTitle
      leftSection
      rightSection
      type
      order
      Media {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onUpdateForUser = /* GraphQL */ `
  subscription OnUpdateForUser($filter: ModelSubscriptionForUserFilterInput) {
    onUpdateForUser(filter: $filter) {
      id
      title
      subTitle
      leftSection
      rightSection
      type
      order
      Media {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onDeleteForUser = /* GraphQL */ `
  subscription OnDeleteForUser($filter: ModelSubscriptionForUserFilterInput) {
    onDeleteForUser(filter: $filter) {
      id
      title
      subTitle
      leftSection
      rightSection
      type
      order
      Media {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onCreateBenefits = /* GraphQL */ `
  subscription OnCreateBenefits($filter: ModelSubscriptionBenefitsFilterInput) {
    onCreateBenefits(filter: $filter) {
      id
      title
      description
      image
      order
      isActive
      contentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onUpdateBenefits = /* GraphQL */ `
  subscription OnUpdateBenefits($filter: ModelSubscriptionBenefitsFilterInput) {
    onUpdateBenefits(filter: $filter) {
      id
      title
      description
      image
      order
      isActive
      contentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onDeleteBenefits = /* GraphQL */ `
  subscription OnDeleteBenefits($filter: ModelSubscriptionBenefitsFilterInput) {
    onDeleteBenefits(filter: $filter) {
      id
      title
      description
      image
      order
      isActive
      contentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onCreateContent = /* GraphQL */ `
  subscription OnCreateContent($filter: ModelSubscriptionContentFilterInput) {
    onCreateContent(filter: $filter) {
      navigate
      contentType
      contentData
      subsectionID
      isActive
      posts {
        nextToken
        startedAt
        __typename
      }
      collaborators {
        nextToken
        startedAt
        __typename
      }
      features {
        nextToken
        startedAt
        __typename
      }
      id
      order
      direction
      Benefits {
        nextToken
        startedAt
        __typename
      }
      customComponent
      Services {
        nextToken
        startedAt
        __typename
      }
      Solutions {
        nextToken
        startedAt
        __typename
      }
      noOfItemPerRow
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onUpdateContent = /* GraphQL */ `
  subscription OnUpdateContent($filter: ModelSubscriptionContentFilterInput) {
    onUpdateContent(filter: $filter) {
      navigate
      contentType
      contentData
      subsectionID
      isActive
      posts {
        nextToken
        startedAt
        __typename
      }
      collaborators {
        nextToken
        startedAt
        __typename
      }
      features {
        nextToken
        startedAt
        __typename
      }
      id
      order
      direction
      Benefits {
        nextToken
        startedAt
        __typename
      }
      customComponent
      Services {
        nextToken
        startedAt
        __typename
      }
      Solutions {
        nextToken
        startedAt
        __typename
      }
      noOfItemPerRow
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onDeleteContent = /* GraphQL */ `
  subscription OnDeleteContent($filter: ModelSubscriptionContentFilterInput) {
    onDeleteContent(filter: $filter) {
      navigate
      contentType
      contentData
      subsectionID
      isActive
      posts {
        nextToken
        startedAt
        __typename
      }
      collaborators {
        nextToken
        startedAt
        __typename
      }
      features {
        nextToken
        startedAt
        __typename
      }
      id
      order
      direction
      Benefits {
        nextToken
        startedAt
        __typename
      }
      customComponent
      Services {
        nextToken
        startedAt
        __typename
      }
      Solutions {
        nextToken
        startedAt
        __typename
      }
      noOfItemPerRow
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onCreateSubSection = /* GraphQL */ `
  subscription OnCreateSubSection(
    $filter: ModelSubscriptionSubSectionFilterInput
  ) {
    onCreateSubSection(filter: $filter) {
      navigate
      title
      subTitle
      order
      sectionID
      contentDirection
      contents {
        nextToken
        startedAt
        __typename
      }
      isActive
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onUpdateSubSection = /* GraphQL */ `
  subscription OnUpdateSubSection(
    $filter: ModelSubscriptionSubSectionFilterInput
  ) {
    onUpdateSubSection(filter: $filter) {
      navigate
      title
      subTitle
      order
      sectionID
      contentDirection
      contents {
        nextToken
        startedAt
        __typename
      }
      isActive
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onDeleteSubSection = /* GraphQL */ `
  subscription OnDeleteSubSection(
    $filter: ModelSubscriptionSubSectionFilterInput
  ) {
    onDeleteSubSection(filter: $filter) {
      navigate
      title
      subTitle
      order
      sectionID
      contentDirection
      contents {
        nextToken
        startedAt
        __typename
      }
      isActive
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onCreateSection = /* GraphQL */ `
  subscription OnCreateSection($filter: ModelSubscriptionSectionFilterInput) {
    onCreateSection(filter: $filter) {
      navigate
      title
      subTitle
      pagesID
      order
      subSections {
        nextToken
        startedAt
        __typename
      }
      isActive
      id
      subSectionDirection
      sectionType
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onUpdateSection = /* GraphQL */ `
  subscription OnUpdateSection($filter: ModelSubscriptionSectionFilterInput) {
    onUpdateSection(filter: $filter) {
      navigate
      title
      subTitle
      pagesID
      order
      subSections {
        nextToken
        startedAt
        __typename
      }
      isActive
      id
      subSectionDirection
      sectionType
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onDeleteSection = /* GraphQL */ `
  subscription OnDeleteSection($filter: ModelSubscriptionSectionFilterInput) {
    onDeleteSection(filter: $filter) {
      navigate
      title
      subTitle
      pagesID
      order
      subSections {
        nextToken
        startedAt
        __typename
      }
      isActive
      id
      subSectionDirection
      sectionType
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onCreatePages = /* GraphQL */ `
  subscription OnCreatePages($filter: ModelSubscriptionPagesFilterInput) {
    onCreatePages(filter: $filter) {
      id
      pageName
      sections {
        nextToken
        startedAt
        __typename
      }
      isActive
      title
      description
      keywords
      viewPort
      author
      publisher
      canonical
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onUpdatePages = /* GraphQL */ `
  subscription OnUpdatePages($filter: ModelSubscriptionPagesFilterInput) {
    onUpdatePages(filter: $filter) {
      id
      pageName
      sections {
        nextToken
        startedAt
        __typename
      }
      isActive
      title
      description
      keywords
      viewPort
      author
      publisher
      canonical
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
export const onDeletePages = /* GraphQL */ `
  subscription OnDeletePages($filter: ModelSubscriptionPagesFilterInput) {
    onDeletePages(filter: $filter) {
      id
      pageName
      sections {
        nextToken
        startedAt
        __typename
      }
      isActive
      title
      description
      keywords
      viewPort
      author
      publisher
      canonical
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`
