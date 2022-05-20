import { useContext } from 'react';
import { GeneralContext } from '@/context/GeneralContext';
import PageHead from '@/components/atoms/PageHead';
import Footer from '@/components/organisms/Footer';
import NavigationBar from '@/components/organisms/NavigationBar';

const BaseLayout = ({ children, structuredData, page, slug }) => {
  const { general } = useContext(GeneralContext);
  const { seo = [], noindex = false, nofollow = false } = page;

  const navigation = general?.navigation
    ? general.navigation.map((nav) => {
        return {
          label: nav.pageName,
          slug: nav.slug,
        };
      })
    : [];

  return (
    <>
      <PageHead
        structuredData={structuredData}
        seo={seo}
        noIndex={noindex}
        noFollow={nofollow}
        slug={slug}
      />
      {!page.hideNavigation && <NavigationBar navigation={navigation} />}
      <main className="main" id="main">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default BaseLayout;
