import gql from 'graphql-tag';
import fetchApi from '@/api/datocms';

import GENERAL_FRAGMENT from '../fragments/general.gql';
import {
  GENERAL_HOME_NAVIGATION_FRAGMENT,
  GENERAL_CAMPER_NAVIGATION_FRAGMENT,
  GENERAL_FAQ_NAVIGATION_FRAGMENT,
  GENERAL_ABOUT_NAVIGATION_FRAGMENT,
  GENERAL_COOKIES_NAVIGATION_FRAGMENT,
  GENERAL_PRIVACY_NAVIGATION_FRAGMENT,
  GENERAL_TERMS_NAVIGATION_FRAGMENT,
} from '../fragments';

const PAGE_QUERY = gql`
  ${GENERAL_FRAGMENT}
  ${GENERAL_HOME_NAVIGATION_FRAGMENT}
  ${GENERAL_CAMPER_NAVIGATION_FRAGMENT}
  ${GENERAL_FAQ_NAVIGATION_FRAGMENT}
  ${GENERAL_ABOUT_NAVIGATION_FRAGMENT}
  ${GENERAL_COOKIES_NAVIGATION_FRAGMENT}
  ${GENERAL_PRIVACY_NAVIGATION_FRAGMENT}
  ${GENERAL_TERMS_NAVIGATION_FRAGMENT}

  query getFaqpage($locale: SiteLocale!) {
    faqPage(locale: $locale) {
      id
      slug
      seo: _seoMetaTags {
        tag
        attributes
        content
      }
      noindex
      nofollow
      hideNavigation
      content {
        __typename
      }
    }
    general(locale: $locale) {
      ...GeneralFields
    }
  }
`;

export async function getFaqPageData(locale, preview) {
  const response = await fetchApi(PAGE_QUERY, {
    variables: {
      locale: locale.replace('-', '_'),
    },
    preview,
  });

  if (!response.faqPage) {
    return null;
  }

  return response;
}
