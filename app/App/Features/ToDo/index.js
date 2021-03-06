// @flow
import ToDoScreen from './Containers/ToDoScreen';
import type { Feature } from '../../Entities/Feature';

import toDosEntityReducer from './Redux/Entity';
import toDosUiReducer from './Redux/Ui';

import successFixture from './Fixtures/getToDosSuccess';
import failureFixture from './Fixtures/getToDosFailure';

import toDosSagas from './Sagas';

const feature: Feature = {
  screens: {
    ToDoScreen
  },
  sagas: toDosSagas,
  reducers: {
    ui: toDosUiReducer,
    entities: toDosEntityReducer
  },
  fixtures: {
    success: successFixture,
    failure: failureFixture
  }
};

export default feature;
