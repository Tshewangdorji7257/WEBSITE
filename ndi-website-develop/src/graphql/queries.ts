/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

const filtered = 'filter: { _deleted: { ne: true }}'
export const getSolutions = /* GraphQL */ `
  query GetSolutions($id: ID!) {
    getSolutions(id: $id) {
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
export const listSolutions = /* GraphQL */ `
  query ListSolutions(
    $filter: ModelSolutionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSolutions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const syncSolutions = /* GraphQL */ `
  query SyncSolutions(
    $filter: ModelSolutionsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSolutions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const solutionsByContentID = /* GraphQL */ `
  query SolutionsByContentID(
    $contentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSolutionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    solutionsByContentID(
      contentID: $contentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const getServices = /* GraphQL */ `
  query GetServices($id: ID!) {
    getServices(id: $id) {
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
export const listServices = /* GraphQL */ `
  query ListServices(
    $filter: ModelServicesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const syncServices = /* GraphQL */ `
  query SyncServices(
    $filter: ModelServicesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncServices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const servicesByContentID = /* GraphQL */ `
  query ServicesByContentID(
    $contentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelServicesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    servicesByContentID(
      contentID: $contentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const getGovernanceDocs = /* GraphQL */ `
  query GetGovernanceDocs($id: ID!) {
    getGovernanceDocs(id: $id) {
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
export const listGovernanceDocs = /* GraphQL */ `
  query ListGovernanceDocs(
    $filter: ModelGovernanceDocsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGovernanceDocs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const syncGovernanceDocs = /* GraphQL */ `
  query SyncGovernanceDocs(
    $filter: ModelGovernanceDocsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGovernanceDocs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const governanceDocsByGovernanceframeworkID = /* GraphQL */ `
  query GovernanceDocsByGovernanceframeworkID(
    $governanceframeworkID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGovernanceDocsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    governanceDocsByGovernanceframeworkID(
      governanceframeworkID: $governanceframeworkID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const getGovernanceFramework = /* GraphQL */ `
  query GetGovernanceFramework($id: ID!) {
    getGovernanceFramework(id: $id) {
      id
      title
      description
      date
      isNDI
      order
      isActive
      governanceDocs {
        items {
          id
          language
          source
          order
          isActive
          _deleted
        }
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
export const listGovernanceFrameworks = /* GraphQL */ `
  query ListGovernanceFrameworks(
    $filter: ModelGovernanceFrameworkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGovernanceFrameworks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        description
        date
        isNDI
        order
        isActive
        governanceDocs(${filtered}) {
          items {
            id
            language
            source
            order
            isActive
            _deleted
          }
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const syncGovernanceFrameworks = /* GraphQL */ `
  query SyncGovernanceFrameworks(
    $filter: ModelGovernanceFrameworkFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGovernanceFrameworks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        description
        date
        isNDI
        order
        isActive
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const getFooterMenu = /* GraphQL */ `
  query GetFooterMenu($id: ID!) {
    getFooterMenu(id: $id) {
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
export const listFooterMenus = /* GraphQL */ `
  query ListFooterMenus(
    $filter: ModelFooterMenuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFooterMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const syncFooterMenus = /* GraphQL */ `
  query SyncFooterMenus(
    $filter: ModelFooterMenuFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFooterMenus(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const footerMenusByFootersectionID = /* GraphQL */ `
  query FooterMenusByFootersectionID(
    $footersectionID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFooterMenuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    footerMenusByFootersectionID(
      footersectionID: $footersectionID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const getGlossary = /* GraphQL */ `
  query GetGlossary($id: ID!) {
    getGlossary(id: $id) {
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
export const listGlossaries = /* GraphQL */ `
  query ListGlossaries(
    $filter: ModelGlossaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGlossaries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const syncGlossaries = /* GraphQL */ `
  query SyncGlossaries(
    $filter: ModelGlossaryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGlossaries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
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
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const syncTeams = /* GraphQL */ `
  query SyncTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeams(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const getSocialMedia = /* GraphQL */ `
  query GetSocialMedia($id: ID!) {
    getSocialMedia(id: $id) {
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
export const listSocialMedias = /* GraphQL */ `
  query ListSocialMedias(
    $filter: ModelSocialMediaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSocialMedias(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const syncSocialMedias = /* GraphQL */ `
  query SyncSocialMedias(
    $filter: ModelSocialMediaFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSocialMedias(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const getFooterSection = /* GraphQL */ `
  query GetFooterSection($id: ID!) {
    getFooterSection(id: $id) {
      id
      title
      order
      footerID
      footerMenu {
        items {
          id
          name
          route
        }
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
export const listFooterSections = /* GraphQL */ `
  query ListFooterSections(
    $filter: ModelFooterSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFooterSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        order
        footerID
        isActive
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`
export const syncFooterSections = /* GraphQL */ `
  query SyncFooterSections(
    $filter: ModelFooterSectionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFooterSections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        order
        footerID
        isActive
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`
export const footerSectionsByFooterID = /* GraphQL */ `
  query FooterSectionsByFooterID(
    $footerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFooterSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    footerSectionsByFooterID(
      footerID: $footerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        order
        footerID
        isActive
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`
export const getFooter = /* GraphQL */ `
  query GetFooter($id: ID!) {
    getFooter(id: $id) {
      id
      footerNote
      footerSections {
        items {
          id
          title
          order
          menus {
            items {
              id
              name
              route
            }
          }
        }
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
export const listFooters = /* GraphQL */ `
  query ListFooters(
    $filter: ModelFooterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFooters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        footerNote
        contactNo
        email
        footerSections(
          filter: {
            and: [{ _deleted: { ne: true } }, { isActive: { ne: false } }]
          }
        ) {
          items {
            id
            title
            order
            isActive
            footerMenu(
              filter: {
                and: [{ _deleted: { ne: true } }, { isActive: { ne: false } }]
              }
            ) {
              items {
                id
                name
                route
                order
                isActive
              }
            }
            _deleted
          }
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`
export const syncFooters = /* GraphQL */ `
  query SyncFooters(
    $filter: ModelFooterFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFooters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        footerNote
        contactNo
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`
export const getFAQ = /* GraphQL */ `
  query GetFAQ($id: ID!) {
    getFAQ(id: $id) {
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
export const listFAQS = /* GraphQL */ `
  query ListFAQS(
    $filter: ModelFAQFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFAQS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const syncFAQS = /* GraphQL */ `
  query SyncFAQS(
    $filter: ModelFAQFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFAQS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const getCollaborator = /* GraphQL */ `
  query GetCollaborator($id: ID!) {
    getCollaborator(id: $id) {
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
export const listCollaborators = /* GraphQL */ `
  query ListCollaborators(
    $filter: ModelCollaboratorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollaborators(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const syncCollaborators = /* GraphQL */ `
  query SyncCollaborators(
    $filter: ModelCollaboratorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCollaborators(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const collaboratorsByContentID = /* GraphQL */ `
  query CollaboratorsByContentID(
    $contentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCollaboratorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    collaboratorsByContentID(
      contentID: $contentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const postsByContentID = /* GraphQL */ `
  query PostsByContentID(
    $contentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByContentID(
      contentID: $contentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const getEnquiryReason = /* GraphQL */ `
  query GetEnquiryReason($id: ID!) {
    getEnquiryReason(id: $id) {
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
export const listEnquiryReasons = /* GraphQL */ `
  query ListEnquiryReasons(
    $filter: ModelEnquiryReasonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEnquiryReasons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const syncEnquiryReasons = /* GraphQL */ `
  query SyncEnquiryReasons(
    $filter: ModelEnquiryReasonFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEnquiryReasons(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const getEnquiries = /* GraphQL */ `
  query GetEnquiries($id: ID!) {
    getEnquiries(id: $id) {
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
export const listEnquiries = /* GraphQL */ `
  query ListEnquiries(
    $filter: ModelEnquiriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEnquiries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const syncEnquiries = /* GraphQL */ `
  query SyncEnquiries(
    $filter: ModelEnquiriesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEnquiries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const getLandingPage = /* GraphQL */ `
  query GetLandingPage($id: ID!) {
    getLandingPage(id: $id) {
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
export const listLandingPages = /* GraphQL */ `
  query ListLandingPages(
    $filter: ModelLandingPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLandingPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        subTitle
        leftSection
        rightSection
        type
        order
        pageKey
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`
export const syncLandingPages = /* GraphQL */ `
  query SyncLandingPages(
    $filter: ModelLandingPageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLandingPages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        subTitle
        leftSection
        rightSection
        type
        order
        pageKey
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`
export const getFeature = /* GraphQL */ `
  query GetFeature($id: ID!) {
    getFeature(id: $id) {
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
export const listFeatures = /* GraphQL */ `
  query ListFeatures(
    $filter: ModelFeatureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeatures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const syncFeatures = /* GraphQL */ `
  query SyncFeatures(
    $filter: ModelFeatureFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFeatures(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const featuresByLandingpageID = /* GraphQL */ `
  query FeaturesByLandingpageID(
    $landingpageID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFeatureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    featuresByLandingpageID(
      landingpageID: $landingpageID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const featuresByContentID = /* GraphQL */ `
  query FeaturesByContentID(
    $contentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFeatureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    featuresByContentID(
      contentID: $contentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const getSubMenus = /* GraphQL */ `
  query GetSubMenus($id: ID!) {
    getSubMenus(id: $id) {
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
export const listSubMenus = /* GraphQL */ `
  query ListSubMenus(
    $filter: ModelSubMenusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const syncSubMenus = /* GraphQL */ `
  query SyncSubMenus(
    $filter: ModelSubMenusFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSubMenus(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const subMenusByMenusID = /* GraphQL */ `
  query SubMenusByMenusID(
    $menusID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSubMenusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    subMenusByMenusID(
      menusID: $menusID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const getMenus = /* GraphQL */ `
  query GetMenus($id: ID!) {
    getMenus(id: $id) {
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
export const listMenus = /* GraphQL */ `
  query ListMenus(
    $filter: ModelMenusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        route
        order
        isActive
        createdAt
        updatedAt
        subMenus(
          filter: {
            and: [{ _deleted: { ne: true } }, { isActive: { ne: false } }]
          }
        ) {
          items {
            id
            name
            route
            menusID
            order
            isActive
            _deleted
          }
        }
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`
export const syncMenus = /* GraphQL */ `
  query SyncMenus(
    $filter: ModelMenusFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMenus(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        route
        order
        isActive
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`
export const getHeroSection = /* GraphQL */ `
  query GetHeroSection($id: ID!) {
    getHeroSection(id: $id) {
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
export const listHeroSections = /* GraphQL */ `
  query ListHeroSections(
    $filter: ModelHeroSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHeroSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const syncHeroSections = /* GraphQL */ `
  query SyncHeroSections(
    $filter: ModelHeroSectionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHeroSections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const getMedia = /* GraphQL */ `
  query GetMedia($id: ID!) {
    getMedia(id: $id) {
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
export const listMedia = /* GraphQL */ `
  query ListMedia(
    $filter: ModelMediaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMedia(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const syncMedia = /* GraphQL */ `
  query SyncMedia(
    $filter: ModelMediaFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMedia(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const mediaByForUserID = /* GraphQL */ `
  query MediaByForUserID(
    $forUserID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMediaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    mediaByForUserID(
      forUserID: $forUserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const getForUser = /* GraphQL */ `
  query GetForUser($id: ID!) {
    getForUser(id: $id) {
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
export const listForUsers = /* GraphQL */ `
  query ListForUsers(
    $filter: ModelForUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listForUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        subTitle
        leftSection
        rightSection
        type
        order
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`
export const syncForUsers = /* GraphQL */ `
  query SyncForUsers(
    $filter: ModelForUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncForUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        subTitle
        leftSection
        rightSection
        type
        order
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`
export const getBenefits = /* GraphQL */ `
  query GetBenefits($id: ID!) {
    getBenefits(id: $id) {
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
export const listBenefits = /* GraphQL */ `
  query ListBenefits(
    $filter: ModelBenefitsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBenefits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const syncBenefits = /* GraphQL */ `
  query SyncBenefits(
    $filter: ModelBenefitsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBenefits(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const benefitsByContentID = /* GraphQL */ `
  query BenefitsByContentID(
    $contentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBenefitsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    benefitsByContentID(
      contentID: $contentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const getContent = /* GraphQL */ `
  query GetContent($id: ID!) {
    getContent(id: $id) {
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
export const listContents = /* GraphQL */ `
  query ListContents(
    $filter: ModelContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        navigate
        contentType
        contentData
        subsectionID
        isActive
        id
        order
        direction
        customComponent
        noOfItemPerRow
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`
export const syncContents = /* GraphQL */ `
  query SyncContents(
    $filter: ModelContentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncContents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        navigate
        contentType
        contentData
        subsectionID
        isActive
        id
        order
        direction
        customComponent
        noOfItemPerRow
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`
export const contentsBySubsectionID = /* GraphQL */ `
  query ContentsBySubsectionID(
    $subsectionID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contentsBySubsectionID(
      subsectionID: $subsectionID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        navigate
        contentType
        contentData
        subsectionID
        isActive
        id
        order
        direction
        customComponent
        noOfItemPerRow
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`
export const getSubSection = /* GraphQL */ `
  query GetSubSection($id: ID!) {
    getSubSection(id: $id) {
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
export const listSubSections = /* GraphQL */ `
  query ListSubSections(
    $filter: ModelSubSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        navigate
        title
        subTitle
        order
        sectionID
        contentDirection
        isActive
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`
export const syncSubSections = /* GraphQL */ `
  query SyncSubSections(
    $filter: ModelSubSectionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSubSections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        navigate
        title
        subTitle
        order
        sectionID
        contentDirection
        isActive
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`
export const subSectionsBySectionID = /* GraphQL */ `
  query SubSectionsBySectionID(
    $sectionID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSubSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    subSectionsBySectionID(
      sectionID: $sectionID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        navigate
        title
        subTitle
        order
        sectionID
        contentDirection
        isActive
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`
export const getSection = /* GraphQL */ `
  query GetSection($id: ID!) {
    getSection(id: $id) {
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
export const listSections = /* GraphQL */ `
  query ListSections(
    $filter: ModelSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        navigate
        title
        subTitle
        pagesID
        order
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const syncSections = /* GraphQL */ `
  query SyncSections(
    $filter: ModelSectionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        navigate
        title
        subTitle
        pagesID
        order
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const sectionsByPagesID = /* GraphQL */ `
  query SectionsByPagesID(
    $pagesID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sectionsByPagesID(
      pagesID: $pagesID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        navigate
        title
        subTitle
        pagesID
        order
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
      nextToken
      startedAt
      __typename
    }
  }
`
export const getPages = /* GraphQL */ `
  query GetPages($id: ID!) {
    getPages(id: $id) {
      id
      pageName
      sections(${filtered}) {
        items {
          id
          title
          subTitle
          pagesID
          order
          subSectionDirection
          isActive
          sectionType
          _deleted
          subSections(${filtered})  {
            items {
              id
              title
              order
              contentDirection
              _deleted
              contents(${filtered})  {
                items {
                  id
                  contentType
                  contentData
                  subsectionID
                  direction
                  isActive
                  order
                  customComponent
                  noOfItemPerRow
                  _deleted
                  posts(${filtered})  {
                    items {
                      id
                      postType
                      title
                      description
                      url
                      image
                      order
                      isActive
                      contentID
                      createdAt
                    }
                  }
                  collaborators(${filtered})  {
                    items {
                      id
                      title
                      image
                      order
                      isActive
                      contentID
                      createdAt
                    }
                  }
                  features(${filtered})  {
                    items {
                      id
                      title
                      subTitle
                      image
                      url
                      order
                      isActive
                      contentID
                      createdAt
                    }
                  }
                  Benefits(${filtered}){
                    items{
                      id
                      title
                      description
                      image
                      order
                      isActive
                      contentID
                      createdAt
                    }
                  }
                  Services(${filtered}){
                    items{
                      id
                      title
                      description
                      image
                      URL
                      logo
                      isActive
                      order
                      contentID
                    }
                  }
                  Solutions(${filtered}){
                    items{
                      id
                      title
                      description
                      image
                      URL
                      logo
                      isActive
                      order
                      contentID
                    }
                  }
                }
              }
            }
          }
        }
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
export const listPages = /* GraphQL */ `
  query ListPages(
    $filter: ModelPagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        pageName
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
        sections(${filtered}) {
          items {
            id
            title
            subTitle
            pagesID
            order
            subSectionDirection
            isActive
            sectionType
            _deleted
            subSections(${filtered})  {
              items {
                id
                title
                order
                contentDirection
                _deleted
                contents(${filtered})  {
                  items {
                    id
                    contentType
                    contentData
                    subsectionID
                    direction
                    isActive
                    order
                    customComponent
                    noOfItemPerRow
                    _deleted
                    posts(${filtered})  {
                      items {
                        id
                        postType
                        title
                        description
                        url
                        image
                        order
                        isActive
                        contentID
                        createdAt
                      }
                    }
                    collaborators(${filtered})  {
                      items {
                        id
                        title
                        image
                        order
                        isActive
                        contentID
                        createdAt
                      }
                    }
                    features(${filtered})  {
                      items {
                        id
                        title
                        subTitle
                        image
                        url
                        order
                        isActive
                        contentID
                        createdAt
                      }
                    }
                    Benefits(${filtered}){
                      items{
                        id
                        title
                        description
                        image
                        order
                        isActive
                        contentID
                        createdAt
                      }
                    }
                    Services(${filtered}){
                      items{
                        id
                        title
                        description
                        image
                        URL
                        logo
                        isActive
                        order
                        contentID
                      }
                    }
                    Solutions(${filtered}){
                      items{
                        id
                        title
                        description
                        image
                        URL
                        logo
                        isActive
                        order
                        contentID
                      }
                    }
                  }
                }
              }
            }
          }
        }
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`
export const syncPages = /* GraphQL */ `
  query SyncPages(
    $filter: ModelPagesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        pageName
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
      nextToken
      startedAt
      __typename
    }
  }
`
