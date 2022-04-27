import PageHead from '@/components/atoms/PageHead';
import Footer from '@/components/organisms/Footer';
import NavigationBar from '@/components/organisms/NavigationBar';

const BaseLayout = ({ children, structuredData, page, slug }) => {
  const { seo, noindex = false, nofollow = false } = page;

  return (
    <>
      <PageHead
        structuredData={structuredData}
        seo={seo}
        noIndex={noindex}
        noFollow={nofollow}
        slug={slug}
      />
      {!page.hideNavigation && <NavigationBar />}
      <main className="main" id="main">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default BaseLayout;
