function SiteLayout({ children }) {
  return <div>{children}</div>
}

export const getLayout = (page) => <SiteLayout>{page}</SiteLayout>

export default SiteLayout
