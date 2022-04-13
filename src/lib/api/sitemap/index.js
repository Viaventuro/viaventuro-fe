import gql from 'graphql-tag';
import fetchApi from '@/api/datocms';

const SLUG_QUERY = gql`
  {
    homePage {
      _publishedAt
      _allNoIndexLocales {
        locale
        value
      }
    }
  }
`;

export async function getAllPagesSlugsWithLocalesForSitemap() {
  const { homePage } = await fetchApi(SLUG_QUERY, {});

  const out = [];

  pageObject = {
    _publishedAt: homePage._publishedAt,
    path: '/',
    slugs: [],
  };

  homePage._allNoIndexLocales.forEach((object) => {
    // when noIndex is null or false, add to slugs array
    if (object.value) {
      return;
    }

    pageObject.slugs.push({
      locale: object.locale.replace('_', '-'),
      slug: '',
    });
  });

  if (pageObject.slugs.length > 0) {
    out.push(pageObject);
  }

  return out;
}
