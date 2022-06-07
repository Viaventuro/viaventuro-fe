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
    theCamperPage {
      _updatedAt
      _allNoindexLocales {
        locale
        value
      }
    }
    faqPage {
      _updatedAt
      _allNoindexLocales {
        locale
        value
      }
    }
    aboutPage {
      _updatedAt
      _allNoindexLocales {
        locale
        value
      }
    }
  }
`;

export async function getAllPagesSlugsWithLocalesForSitemap() {
  const { homePage, theCamperPage, faqPage, aboutPage } = await fetchApi(SLUG_QUERY, {});

  const out = [];

  // Home
  let pageObject = {
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

  // The Camper
  pageObject = {
    _updatedAt: theCamperPage._updatedAt,
    path: 'the-camper',
    slugs: [],
  };

  theCamperPage._allNoindexLocales.forEach((object) => {
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

  // FAQ
  pageObject = {
    _updatedAt: faqPage._updatedAt,
    path: 'faq',
    slugs: [],
  };

  faqPage._allNoindexLocales.forEach((object) => {
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

  // About
  pageObject = {
    _updatedAt: aboutPage._updatedAt,
    path: 'about',
    slugs: [],
  };

  aboutPage._allNoindexLocales.forEach((object) => {
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
