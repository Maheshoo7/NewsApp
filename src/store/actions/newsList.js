export const constants = {
  FETCH_LIST_PENDING: 'news/FETCH_LIST_PENDING',
  FETCH_LIST_SUCCESS: 'news/FETCH_LIST_SUCCESS',
  FETCH_LIST_FAILURE: 'news/FETCH_LIST_FAILURE',

  FETCH_BATCH_PENDING: 'news/FETCH_BATCH_PENDING',
  FETCH_BATCH_SUCCESS: 'news/FETCH_BATCH_SUCCESS',
  FETCH_BATCH_FAILURE: 'news/FETCH_BATCH_FAILURE',

  SET_PINNED_ARTICLES: 'news/SET_PINNED_ARTICLES',

  DELETE_PINNED_ARTICLE: 'news/DELETE_PINNED_ARTICLE',
};

export const fetchListPending = payload => {
  return {
    type: constants.FETCH_LIST_PENDING,
    payload,
  };
};

export const fetchListSuccess = payload => {
  return {
    type: constants.FETCH_LIST_SUCCESS,
    payload,
  };
};

export const fetchListFailure = payload => {
  return {
    type: constants.FETCH_LIST_FAILURE,
    payload,
  };
};

export const fetchBatchPending = payload => {
  return {
    type: constants.FETCH_BATCH_PENDING,
    payload,
  };
};

export const fetchBatchSuccess = payload => {
  return {
    type: constants.FETCH_BATCH_SUCCESS,
    payload,
  };
};

export const fetchBatchFailure = payload => {
  return {
    type: constants.FETCH_BATCH_FAILURE,
    payload,
  };
};

export const setPinnedArticles = payload => {
  return {
    type: constants.SET_PINNED_ARTICLES,
    payload,
  };
};

export const deletePinnedArticle = payload => {
  return {
    type: constants.DELETE_PINNED_ARTICLE,
    payload,
  };
};
