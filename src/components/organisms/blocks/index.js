import dynamic from 'next/dynamic';

const contentBlocksList = {
  LandingBlockRecord: dynamic(() => import('./LandingBlock')),
  IntroBlockRecord: dynamic(() => import('./IntroBlock')),
  HowDoesItWorkBlockRecord: dynamic(() => import('./HowDoesItWorkBlock')),
  TarifsBlockRecord: dynamic(() => import('./TarifsBlock')),
  SocialPostsBlockRecord: dynamic(() => import('./SocialPostsBlock')),
  StatisticsBlockRecord: dynamic(() => import('./StatisticsBlock')),
};

export default function Blocks({ content, page }) {
  if (!content || !content.length) {
    return <></>;
  }

  const contentBlocksComponents = content.map((contentBlock, i) => {
    const key = contentBlock.__typename;

    if (!(key in contentBlocksList)) {
      console.warn(
        `Missing Component for: '${key}', you should create one first in your section folder.`,
      );
      return false;
    }

    return contentBlocksList[key];
  });

  return (
    <>
      {contentBlocksComponents?.map((Component, i) => {
        return Component ? <Component key={i} page={page} {...content[i]} /> : false;
      })}
    </>
  );
}
