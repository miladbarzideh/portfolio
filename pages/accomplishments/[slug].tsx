import Conditional from '@/components/Conditional';
import { H1, H2 } from '@/components/Form';
import LinkList from '@/components/list/LinkList';
import StackList from '@/components/list/StackList';
import { PageSEO } from '@/components/SEO';
import config from 'config';
import type { Accomplishment } from 'config/accomplishments';
import { defaultDimensions } from 'config/accomplishments';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import React, { useCallback } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

const { accomplishments } = config;

export async function getStaticPaths() {
  return {
    paths: accomplishments.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<{
  accomplishment: Accomplishment;
}> = async ({ params }) => {
  const accomplishment = accomplishments.find(
    project => project.slug === params.slug,
  );

  return {
    props: {
      accomplishment: accomplishment,
    },
  };
};

export default function Project({
  accomplishment,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {
    title,
    description,
    shortDescription,
    banner,
    dimensions,
    stack,
    link,
    screenshots,
  } = accomplishment;

  const [height, width] = dimensions ?? defaultDimensions;

  const renderScreenShotList = useCallback(
    (screenshot: string) => {
      const style: React.CSSProperties = {
        height,
        width,
      };

      return (
        <div
          className='mr-2 flex-shrink-0 overflow-hidden rounded bg-placeholder-light dark:bg-placeholder-dark'
          style={style}
        >
          <Image
            loading='eager'
            src={screenshot}
            height={height}
            width={width}
            objectFit='cover'
            alt=''
          />
        </div>
      );
    },
    [height, width],
  );

  const hasLinks = !!link;
  const hasScreenshots = !!screenshots.length;

  return (
    <>
      <PageSEO
        title={title}
        description={shortDescription || description}
        imageUrl={banner}
      />
      <H1 className='lg:text-5x mb-4 text-3xl font-bold dark:text-white'>
        {title}
      </H1>
      <p className='mb-4 font-light'>{description}</p>

      <H2>Skill</H2>
      <StackList stack={stack} />

      <Conditional condition={hasLinks}>
        <H2>Links</H2>
        <LinkList accomplishmentLink={link} />
      </Conditional>

      <Conditional condition={hasScreenshots}>
        <H2 className='my-4'>Screenshots</H2>
        <ScrollContainer
          className='list mt-4 mb-1 flex overflow-auto'
          hideScrollbars={false}
        >
          {React.Children.toArray(screenshots.map(renderScreenShotList))}
        </ScrollContainer>
      </Conditional>
    </>
  );
}
