import {takeLatest} from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes'
import * as sagas from '../saga/saga'

export function* watchCity() {
  yield takeLatest(actionTypes.FETCH_CITIES, sagas.fetchCitiesSaga)
  yield takeLatest(actionTypes.REFRESH_SELECTED_START, sagas.refreshCitiesSaga)
}