import { Flex, Box } from '@chakra-ui/layout'

import Footer from '@/components/footer'

export default function SiteLayout({ children, page }) {
  return (
    <Flex flexDir="column" minH="100vh">
      <Box flexGrow="1">{children}</Box>
      {page?.footer && <Footer {...page.footer} />}
    </Flex>
  )
}

export const getLayout = (page) => (
  <SiteLayout {...page.props}>{page}</SiteLayout>
)
