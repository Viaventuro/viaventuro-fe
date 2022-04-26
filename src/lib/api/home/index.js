import gql from 'graphql-tag';
import fetchApi from '@/api/datocms';

import LANDING_BLOCK_FRAGMENT from '../fragments/landing-block.gql';

const PAGE_QUERY = gql`
  ${LANDING_BLOCK_FRAGMENT}

  query getHomepage($locale: SiteLocale!) {
    homePage(locale: $locale) {
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
        ...LandingBlock
      }
    }
  }
`;

export async function getHomePageData(locale, preview) {
  const response = await fetchApi(PAGE_QUERY, {
    variables: {
      locale: locale.replace('-', '_'),
    },
    preview,
  });

  if (!response.homePage) {
    return null;
  }

  return response;
}
