import * as React from 'react'
import { Box, Container, Heading } from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'

import { getSiteLayout } from '@/layout'
import Hero from '@/components/hero'
import * as Marketing from '@/marketing'
import Navigation from '@/components/navigation'
import SEO from '@/components/seo'

const PageLayout = ({ children, page }) => {
  const pageBanner = page?.marketing?.find(
    (block) => block.__typename === 'Banner'
  )

  const pageNewsletter = page?.marketing?.find(
    (block) => block.__typename === 'Newsletter'
  )

  return (
    <React.Fragment>
      {page?.seo ? <SEO {...page.seo} /> : null}
      {pageBanner ? <Marketing.Banner {...pageBanner} /> : null}
      {page?.hero ? (
        <Hero {...page.hero} navigation={page.navigation} page={page} />
      ) : (
        <React.Fragment>
          <Navigation {...page?.navigation} />
          <Box mx="auto" pt={24} px={[4, 6, null, 8]}>
            <Box
              display={[null, 'flex']}
              flexDir={[null, 'column']}
              alignItems={[null, 'center']}
              textAlign={[null, 'center']}
            >
              <Heading
                as="h1"
                fontSize="5xl"
                lineHeight="none"
                fontWeight="extrabold"
                color="gray.900"
              >
                {page?.title}
              </Heading>
              {page?.subtitle && (
                <Container
                  mt={5}
                  p={0}
                  centerContent
                  color="gray.500"
                  lineHeight="tall"
                  fontSize="xl"
                >
                  <MDXRemote {...page.subtitle.mdx} />
                </Container>
              )}
            </Box>
          </Box>
        </React.Fragment>
      )}
      <div>
        {children}
        {pageNewsletter ? (
          <Marketing.NewsletterSignup {...pageNewsletter} />
        ) : null}
      </div>
    </React.Fragment>
  )
}

export const getLayout = (page) =>
  getSiteLayout(<PageLayout {...page.props}>{page}</PageLayout>)

export default PageLayout
