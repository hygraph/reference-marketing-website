import Link from 'next/link'
import { Flex, Box } from '@chakra-ui/layout'

import Footer from '@/components/footer'

function PreviewBanner({ enabled = false }) {
  if (!enabled) return null

  return (
    <Box textAlign="center" p="2" backgroundColor="black" textColor="white">
      Preview Mode Enabled (Content served from DRAFT) &mdash;&nbsp;
      <Link href="/api/exit-preview">
        <a>Exit Preview Mode</a>
      </Link>
    </Box>
  )
}

export default function SiteLayout({ children, page, preview = false }) {
  return (
    <Flex flexDir="column" minH="100vh">
      <PreviewBanner enabled={preview} />
      <Box flexGrow="1">{children}</Box>
      {page?.footer && <Footer {...page.footer} />}
    </Flex>
  )
}

export const getLayout = (page) => (
  <SiteLayout {...page.props}>{page}</SiteLayout>
)
