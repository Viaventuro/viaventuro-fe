import gql from 'graphql-tag';

export const GENERAL_HOME_NAVIGATION_FRAGMENT = gql`
  fragment NavigationHomeItem on HomePageRecord {
    type: _modelApiKey
    id
  }
`;

export const GENERAL_CAMPER_NAVIGATION_FRAGMENT = gql`
  fragment NavigationCamperItem on TheCamperPageRecord {
    type: _modelApiKey
    id
  }
`;

export const GENERAL_FAQ_NAVIGATION_FRAGMENT = gql`
  fragment NavigationFaqItem on FaqPageRecord {
    type: _modelApiKey
    id
  }
`;

export const GENERAL_ABOUT_NAVIGATION_FRAGMENT = gql`
  fragment NavigationAboutItem on AboutPageRecord {
    type: _modelApiKey
    id
  }
`;

export const GENERAL_COOKIES_NAVIGATION_FRAGMENT = gql`
  fragment NavigationCookiesItem on CookiesPageRecord {
    type: _modelApiKey
    id
  }
`;

export const GENERAL_PRIVACY_NAVIGATION_FRAGMENT = gql`
  fragment NavigationPrivacyItem on PrivacyPolicyPageRecord {
    type: _modelApiKey
    id
  }
`;

export const GENERAL_TERMS_NAVIGATION_FRAGMENT = gql`
  fragment NavigationTermsItem on TermsPageRecord {
    type: _modelApiKey
    id
  }
`;
