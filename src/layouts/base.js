import PageHead from '@/components/atoms/PageHead';
import Footer from '@/components/organisms/Footer';

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
      <main className="main" id="main">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default BaseLayout;
