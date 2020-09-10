import { getLayout as getSiteLayout } from './layout'
import Navigation from './navigation'

const ContentLayout = ({ children, navigation }) => {
  return (
    <React.Fragment>
      {navigation && <Navigation {...navigation} />}
      <div>{children}</div>
    </React.Fragment>
  )
}

export const getLayout = (page) =>
  getSiteLayout(<ContentLayout {...page.props}>{page}</ContentLayout>)

export default ContentLayout
