import Card from '@/components/Card';
import { Header } from '@/components/Form';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import config from 'config';

export default function Projects() {
  return (
    <>
      <PageSEO
        title={`Accomplishments - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className='fade-in divide-y-2 divide-gray-100 dark:divide-gray-800'>
        <Header title='Accomplishments' />
        <div className='container py-12'>
          <div className='-m-4 flex flex-wrap'>
            {config.accomplishments.map(
              ({ slug, title, description, banner }) => (
                <Card
                  key={slug}
                  title={title}
                  description={description}
                  banner={banner}
                  href={`/accomplishments/${slug}`}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </>
  );
}
