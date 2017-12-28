import { LOAD_SEARCH_PAGES_SUCCESS } from './constant'

export default function pageSearch(state = [], action) {
  switch (action.type) {
    case LOAD_SEARCH_PAGES_SUCCESS:
      return action.pages
    default:
      return state
  }
}