/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSolutions = /* GraphQL */ `
  mutation CreateSolutions(
    $input: CreateSolutionsInput!
    $condition: ModelSolutionsConditionInput
  ) {
    createSolutions(input: $input, condition: $condition) {
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
export const updateSolutions = /* GraphQL */ `
  mutation UpdateSolutions(
    $input: UpdateSolutionsInput!
    $condition: ModelSolutionsConditionInput
  ) {
    updateSolutions(input: $input, condition: $condition) {
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
export const deleteSolutions = /* GraphQL */ `
  mutation DeleteSolutions(
    $input: DeleteSolutionsInput!
    $condition: ModelSolutionsConditionInput
  ) {
    deleteSolutions(input: $input, condition: $condition) {
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
export const createServices = /* GraphQL */ `
  mutation CreateServices(
    $input: CreateServicesInput!
    $condition: ModelServicesConditionInput
  ) {
    createServices(input: $input, condition: $condition) {
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
export const updateServices = /* GraphQL */ `
  mutation UpdateServices(
    $input: UpdateServicesInput!
    $condition: ModelServicesConditionInput
  ) {
    updateServices(input: $input, condition: $condition) {
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
export const deleteServices = /* GraphQL */ `
  mutation DeleteServices(
    $input: DeleteServicesInput!
    $condition: ModelServicesConditionInput
  ) {
    deleteServices(input: $input, condition: $condition) {
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
export const createGovernanceDocs = /* GraphQL */ `
  mutation CreateGovernanceDocs(
    $input: CreateGovernanceDocsInput!
    $condition: ModelGovernanceDocsConditionInput
  ) {
    createGovernanceDocs(input: $input, condition: $condition) {
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
export const updateGovernanceDocs = /* GraphQL */ `
  mutation UpdateGovernanceDocs(
    $input: UpdateGovernanceDocsInput!
    $condition: ModelGovernanceDocsConditionInput
  ) {
    updateGovernanceDocs(input: $input, condition: $condition) {
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
export const deleteGovernanceDocs = /* GraphQL */ `
  mutation DeleteGovernanceDocs(
    $input: DeleteGovernanceDocsInput!
    $condition: ModelGovernanceDocsConditionInput
  ) {
    deleteGovernanceDocs(input: $input, condition: $condition) {
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
export const createGovernanceFramework = /* GraphQL */ `
  mutation CreateGovernanceFramework(
    $input: CreateGovernanceFrameworkInput!
    $condition: ModelGovernanceFrameworkConditionInput
  ) {
    createGovernanceFramework(input: $input, condition: $condition) {
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
export const updateGovernanceFramework = /* GraphQL */ `
  mutation UpdateGovernanceFramework(
    $input: UpdateGovernanceFrameworkInput!
    $condition: ModelGovernanceFrameworkConditionInput
  ) {
    updateGovernanceFramework(input: $input, condition: $condition) {
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
export const deleteGovernanceFramework = /* GraphQL */ `
  mutation DeleteGovernanceFramework(
    $input: DeleteGovernanceFrameworkInput!
    $condition: ModelGovernanceFrameworkConditionInput
  ) {
    deleteGovernanceFramework(input: $input, condition: $condition) {
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
export const createFooterMenu = /* GraphQL */ `
  mutation CreateFooterMenu(
    $input: CreateFooterMenuInput!
    $condition: ModelFooterMenuConditionInput
  ) {
    createFooterMenu(input: $input, condition: $condition) {
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
export const updateFooterMenu = /* GraphQL */ `
  mutation UpdateFooterMenu(
    $input: UpdateFooterMenuInput!
    $condition: ModelFooterMenuConditionInput
  ) {
    updateFooterMenu(input: $input, condition: $condition) {
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
export const deleteFooterMenu = /* GraphQL */ `
  mutation DeleteFooterMenu(
    $input: DeleteFooterMenuInput!
    $condition: ModelFooterMenuConditionInput
  ) {
    deleteFooterMenu(input: $input, condition: $condition) {
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
export const createGlossary = /* GraphQL */ `
  mutation CreateGlossary(
    $input: CreateGlossaryInput!
    $condition: ModelGlossaryConditionInput
  ) {
    createGlossary(input: $input, condition: $condition) {
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
export const updateGlossary = /* GraphQL */ `
  mutation UpdateGlossary(
    $input: UpdateGlossaryInput!
    $condition: ModelGlossaryConditionInput
  ) {
    updateGlossary(input: $input, condition: $condition) {
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
export const deleteGlossary = /* GraphQL */ `
  mutation DeleteGlossary(
    $input: DeleteGlossaryInput!
    $condition: ModelGlossaryConditionInput
  ) {
    deleteGlossary(input: $input, condition: $condition) {
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
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
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
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
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
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
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
export const createSocialMedia = /* GraphQL */ `
  mutation CreateSocialMedia(
    $input: CreateSocialMediaInput!
    $condition: ModelSocialMediaConditionInput
  ) {
    createSocialMedia(input: $input, condition: $condition) {
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
export const updateSocialMedia = /* GraphQL */ `
  mutation UpdateSocialMedia(
    $input: UpdateSocialMediaInput!
    $condition: ModelSocialMediaConditionInput
  ) {
    updateSocialMedia(input: $input, condition: $condition) {
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
export const deleteSocialMedia = /* GraphQL */ `
  mutation DeleteSocialMedia(
    $input: DeleteSocialMediaInput!
    $condition: ModelSocialMediaConditionInput
  ) {
    deleteSocialMedia(input: $input, condition: $condition) {
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
export const createFooterSection = /* GraphQL */ `
  mutation CreateFooterSection(
    $input: CreateFooterSectionInput!
    $condition: ModelFooterSectionConditionInput
  ) {
    createFooterSection(input: $input, condition: $condition) {
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
export const updateFooterSection = /* GraphQL */ `
  mutation UpdateFooterSection(
    $input: UpdateFooterSectionInput!
    $condition: ModelFooterSectionConditionInput
  ) {
    updateFooterSection(input: $input, condition: $condition) {
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
export const deleteFooterSection = /* GraphQL */ `
  mutation DeleteFooterSection(
    $input: DeleteFooterSectionInput!
    $condition: ModelFooterSectionConditionInput
  ) {
    deleteFooterSection(input: $input, condition: $condition) {
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
export const createFooter = /* GraphQL */ `
  mutation CreateFooter(
    $input: CreateFooterInput!
    $condition: ModelFooterConditionInput
  ) {
    createFooter(input: $input, condition: $condition) {
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
export const updateFooter = /* GraphQL */ `
  mutation UpdateFooter(
    $input: UpdateFooterInput!
    $condition: ModelFooterConditionInput
  ) {
    updateFooter(input: $input, condition: $condition) {
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
export const deleteFooter = /* GraphQL */ `
  mutation DeleteFooter(
    $input: DeleteFooterInput!
    $condition: ModelFooterConditionInput
  ) {
    deleteFooter(input: $input, condition: $condition) {
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
export const createFAQ = /* GraphQL */ `
  mutation CreateFAQ(
    $input: CreateFAQInput!
    $condition: ModelFAQConditionInput
  ) {
    createFAQ(input: $input, condition: $condition) {
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
export const updateFAQ = /* GraphQL */ `
  mutation UpdateFAQ(
    $input: UpdateFAQInput!
    $condition: ModelFAQConditionInput
  ) {
    updateFAQ(input: $input, condition: $condition) {
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
export const deleteFAQ = /* GraphQL */ `
  mutation DeleteFAQ(
    $input: DeleteFAQInput!
    $condition: ModelFAQConditionInput
  ) {
    deleteFAQ(input: $input, condition: $condition) {
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
export const createCollaborator = /* GraphQL */ `
  mutation CreateCollaborator(
    $input: CreateCollaboratorInput!
    $condition: ModelCollaboratorConditionInput
  ) {
    createCollaborator(input: $input, condition: $condition) {
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
export const updateCollaborator = /* GraphQL */ `
  mutation UpdateCollaborator(
    $input: UpdateCollaboratorInput!
    $condition: ModelCollaboratorConditionInput
  ) {
    updateCollaborator(input: $input, condition: $condition) {
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
export const deleteCollaborator = /* GraphQL */ `
  mutation DeleteCollaborator(
    $input: DeleteCollaboratorInput!
    $condition: ModelCollaboratorConditionInput
  ) {
    deleteCollaborator(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createEnquiryReason = /* GraphQL */ `
  mutation CreateEnquiryReason(
    $input: CreateEnquiryReasonInput!
    $condition: ModelEnquiryReasonConditionInput
  ) {
    createEnquiryReason(input: $input, condition: $condition) {
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
export const updateEnquiryReason = /* GraphQL */ `
  mutation UpdateEnquiryReason(
    $input: UpdateEnquiryReasonInput!
    $condition: ModelEnquiryReasonConditionInput
  ) {
    updateEnquiryReason(input: $input, condition: $condition) {
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
export const deleteEnquiryReason = /* GraphQL */ `
  mutation DeleteEnquiryReason(
    $input: DeleteEnquiryReasonInput!
    $condition: ModelEnquiryReasonConditionInput
  ) {
    deleteEnquiryReason(input: $input, condition: $condition) {
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
export const createEnquiries = /* GraphQL */ `
  mutation CreateEnquiries(
    $input: CreateEnquiriesInput!
    $condition: ModelEnquiriesConditionInput
  ) {
    createEnquiries(input: $input, condition: $condition) {
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
export const updateEnquiries = /* GraphQL */ `
  mutation UpdateEnquiries(
    $input: UpdateEnquiriesInput!
    $condition: ModelEnquiriesConditionInput
  ) {
    updateEnquiries(input: $input, condition: $condition) {
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
export const deleteEnquiries = /* GraphQL */ `
  mutation DeleteEnquiries(
    $input: DeleteEnquiriesInput!
    $condition: ModelEnquiriesConditionInput
  ) {
    deleteEnquiries(input: $input, condition: $condition) {
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
export const createLandingPage = /* GraphQL */ `
  mutation CreateLandingPage(
    $input: CreateLandingPageInput!
    $condition: ModelLandingPageConditionInput
  ) {
    createLandingPage(input: $input, condition: $condition) {
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
export const updateLandingPage = /* GraphQL */ `
  mutation UpdateLandingPage(
    $input: UpdateLandingPageInput!
    $condition: ModelLandingPageConditionInput
  ) {
    updateLandingPage(input: $input, condition: $condition) {
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
export const deleteLandingPage = /* GraphQL */ `
  mutation DeleteLandingPage(
    $input: DeleteLandingPageInput!
    $condition: ModelLandingPageConditionInput
  ) {
    deleteLandingPage(input: $input, condition: $condition) {
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
export const createFeature = /* GraphQL */ `
  mutation CreateFeature(
    $input: CreateFeatureInput!
    $condition: ModelFeatureConditionInput
  ) {
    createFeature(input: $input, condition: $condition) {
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
export const updateFeature = /* GraphQL */ `
  mutation UpdateFeature(
    $input: UpdateFeatureInput!
    $condition: ModelFeatureConditionInput
  ) {
    updateFeature(input: $input, condition: $condition) {
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
export const deleteFeature = /* GraphQL */ `
  mutation DeleteFeature(
    $input: DeleteFeatureInput!
    $condition: ModelFeatureConditionInput
  ) {
    deleteFeature(input: $input, condition: $condition) {
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
export const createSubMenus = /* GraphQL */ `
  mutation CreateSubMenus(
    $input: CreateSubMenusInput!
    $condition: ModelSubMenusConditionInput
  ) {
    createSubMenus(input: $input, condition: $condition) {
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
export const updateSubMenus = /* GraphQL */ `
  mutation UpdateSubMenus(
    $input: UpdateSubMenusInput!
    $condition: ModelSubMenusConditionInput
  ) {
    updateSubMenus(input: $input, condition: $condition) {
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
export const deleteSubMenus = /* GraphQL */ `
  mutation DeleteSubMenus(
    $input: DeleteSubMenusInput!
    $condition: ModelSubMenusConditionInput
  ) {
    deleteSubMenus(input: $input, condition: $condition) {
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
export const createMenus = /* GraphQL */ `
  mutation CreateMenus(
    $input: CreateMenusInput!
    $condition: ModelMenusConditionInput
  ) {
    createMenus(input: $input, condition: $condition) {
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
export const updateMenus = /* GraphQL */ `
  mutation UpdateMenus(
    $input: UpdateMenusInput!
    $condition: ModelMenusConditionInput
  ) {
    updateMenus(input: $input, condition: $condition) {
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
export const deleteMenus = /* GraphQL */ `
  mutation DeleteMenus(
    $input: DeleteMenusInput!
    $condition: ModelMenusConditionInput
  ) {
    deleteMenus(input: $input, condition: $condition) {
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
export const createHeroSection = /* GraphQL */ `
  mutation CreateHeroSection(
    $input: CreateHeroSectionInput!
    $condition: ModelHeroSectionConditionInput
  ) {
    createHeroSection(input: $input, condition: $condition) {
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
export const updateHeroSection = /* GraphQL */ `
  mutation UpdateHeroSection(
    $input: UpdateHeroSectionInput!
    $condition: ModelHeroSectionConditionInput
  ) {
    updateHeroSection(input: $input, condition: $condition) {
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
export const deleteHeroSection = /* GraphQL */ `
  mutation DeleteHeroSection(
    $input: DeleteHeroSectionInput!
    $condition: ModelHeroSectionConditionInput
  ) {
    deleteHeroSection(input: $input, condition: $condition) {
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
export const createMedia = /* GraphQL */ `
  mutation CreateMedia(
    $input: CreateMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    createMedia(input: $input, condition: $condition) {
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
export const updateMedia = /* GraphQL */ `
  mutation UpdateMedia(
    $input: UpdateMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    updateMedia(input: $input, condition: $condition) {
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
export const deleteMedia = /* GraphQL */ `
  mutation DeleteMedia(
    $input: DeleteMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    deleteMedia(input: $input, condition: $condition) {
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
export const createForUser = /* GraphQL */ `
  mutation CreateForUser(
    $input: CreateForUserInput!
    $condition: ModelForUserConditionInput
  ) {
    createForUser(input: $input, condition: $condition) {
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
export const updateForUser = /* GraphQL */ `
  mutation UpdateForUser(
    $input: UpdateForUserInput!
    $condition: ModelForUserConditionInput
  ) {
    updateForUser(input: $input, condition: $condition) {
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
export const deleteForUser = /* GraphQL */ `
  mutation DeleteForUser(
    $input: DeleteForUserInput!
    $condition: ModelForUserConditionInput
  ) {
    deleteForUser(input: $input, condition: $condition) {
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
export const createBenefits = /* GraphQL */ `
  mutation CreateBenefits(
    $input: CreateBenefitsInput!
    $condition: ModelBenefitsConditionInput
  ) {
    createBenefits(input: $input, condition: $condition) {
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
export const updateBenefits = /* GraphQL */ `
  mutation UpdateBenefits(
    $input: UpdateBenefitsInput!
    $condition: ModelBenefitsConditionInput
  ) {
    updateBenefits(input: $input, condition: $condition) {
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
export const deleteBenefits = /* GraphQL */ `
  mutation DeleteBenefits(
    $input: DeleteBenefitsInput!
    $condition: ModelBenefitsConditionInput
  ) {
    deleteBenefits(input: $input, condition: $condition) {
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
export const createContent = /* GraphQL */ `
  mutation CreateContent(
    $input: CreateContentInput!
    $condition: ModelContentConditionInput
  ) {
    createContent(input: $input, condition: $condition) {
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
export const updateContent = /* GraphQL */ `
  mutation UpdateContent(
    $input: UpdateContentInput!
    $condition: ModelContentConditionInput
  ) {
    updateContent(input: $input, condition: $condition) {
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
export const deleteContent = /* GraphQL */ `
  mutation DeleteContent(
    $input: DeleteContentInput!
    $condition: ModelContentConditionInput
  ) {
    deleteContent(input: $input, condition: $condition) {
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
export const createSubSection = /* GraphQL */ `
  mutation CreateSubSection(
    $input: CreateSubSectionInput!
    $condition: ModelSubSectionConditionInput
  ) {
    createSubSection(input: $input, condition: $condition) {
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
export const updateSubSection = /* GraphQL */ `
  mutation UpdateSubSection(
    $input: UpdateSubSectionInput!
    $condition: ModelSubSectionConditionInput
  ) {
    updateSubSection(input: $input, condition: $condition) {
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
export const deleteSubSection = /* GraphQL */ `
  mutation DeleteSubSection(
    $input: DeleteSubSectionInput!
    $condition: ModelSubSectionConditionInput
  ) {
    deleteSubSection(input: $input, condition: $condition) {
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
export const createSection = /* GraphQL */ `
  mutation CreateSection(
    $input: CreateSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    createSection(input: $input, condition: $condition) {
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
export const updateSection = /* GraphQL */ `
  mutation UpdateSection(
    $input: UpdateSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    updateSection(input: $input, condition: $condition) {
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
export const deleteSection = /* GraphQL */ `
  mutation DeleteSection(
    $input: DeleteSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    deleteSection(input: $input, condition: $condition) {
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
export const createPages = /* GraphQL */ `
  mutation CreatePages(
    $input: CreatePagesInput!
    $condition: ModelPagesConditionInput
  ) {
    createPages(input: $input, condition: $condition) {
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
export const updatePages = /* GraphQL */ `
  mutation UpdatePages(
    $input: UpdatePagesInput!
    $condition: ModelPagesConditionInput
  ) {
    updatePages(input: $input, condition: $condition) {
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
export const deletePages = /* GraphQL */ `
  mutation DeletePages(
    $input: DeletePagesInput!
    $condition: ModelPagesConditionInput
  ) {
    deletePages(input: $input, condition: $condition) {
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
