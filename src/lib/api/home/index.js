import gql from 'graphql-tag';
import fetchApi from '@/api/datocms';

const PAGE_QUERY = gql`
  query getHomepage {
    homePage {
      id
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
