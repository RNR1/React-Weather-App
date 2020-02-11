import {put} from 'redux-saga/effects'
import * as actions from '../actions/actions'
import * as utils from '../utility/utility'

export function* fetchCitiesSaga(action) {
  try {
    yield put(actions.fetchCityStart())
    const cities = yield utils.fetchCities(action.cities)
    yield put(actions.fetchCitiesSuccess(cities))
  } catch(err) {
    yield put(actions.fetchCityFailed(err))
  }
}

export function* refreshCitiesSaga(action) {
  try {
    yield put(actions.fetchCityStart())
    let cities = [...action.cities]
    cities = yield utils.refreshCitiesProcessor(cities)
    yield put(actions.refreshSelectedSuccess(cities))
  } catch(err) {
    yield put(actions.fetchCityFailed(err))
  }
}