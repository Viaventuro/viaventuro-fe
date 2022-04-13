import gql from 'graphql-tag';
import fetchApi from '@/api/datocms';

const SLUG_QUERY = gql`
  {
    homePage {
      _updatedAt
      _allNoindexLocales {
        locale
        value
      }
    }
  }
`;

export async function getAllPagesSlugsWithLocalesForSitemap() {
  const { homePage } = await fetchApi(SLUG_QUERY, {});

  const out = [];

  const pageObject = {
    _updatedAt: homePage._updatedAt,
    path: '/',
    slugs: [],
  };

  homePage._allNoindexLocales.forEach((object) => {
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
