import { LOAD_SEARCH_PAGES_SUCCESS } from './constant'
import { startAjaxCall, ajaxCallError } from '../../actions/ajaxStatusActions'
import FBRankerAPI from '../../integrations/FBRankerAPI'

export const searchResultsUpdated = (pages) => ({ type: LOAD_SEARCH_PAGES_SUCCESS, pages })

export function fetchSearchResults(query) {
  return function (dispatch, getState) {
    dispatch(startAjaxCall())
    return FBRankerAPI.search(query).then((res) => {
      dispatch(searchResultsUpdated(res.data.data))
    }).catch(error => {
      dispatch(ajaxCallError(error))
      throw (error)
    })
  }
}