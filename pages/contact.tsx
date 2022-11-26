import { Header } from '@/components/Form';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import { contact } from 'config/contact';

function Contact(): React.ReactElement {
  return (
    <>
      <PageSEO
        title={`Contact - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className='fade-in divide-y-2 divide-gray-100 dark:divide-gray-800'>
        <Header title='Contact' />
        <div className='container py-12'>
          <p>
            Do you want to hire me? or simply wanna chat? Feel free to message
            me on
            <a
              className='pl-1 text-cyan-500 underline hover:text-sky-600'
              href={contact.calendly}
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
