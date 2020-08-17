import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { selectCatalogHasData } from 'stores/catalog/selectors'
import WithSpinner from 'components/with-spinner'
import CatalogOverview from 'components/catalog-overview'

const mapStateToProps = createStructuredSelector({
  renderReady: selectCatalogHasData
})

const CatalogOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CatalogOverview)

export default CatalogOverviewContainer
