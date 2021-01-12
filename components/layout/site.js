import Footer from '@/components/footer'

function SiteLayout({ children, page }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{children}</div>
      {page?.footer && <Footer {...page.footer} />}
    </div>
  )
}

export const getLayout = (page) => (
  <SiteLayout {...page.props}>{page}</SiteLayout>
)

export default SiteLayout
