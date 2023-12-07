import {constants} from '../actions/newsList';

const initialState = {
  articles: [],
  pinnedArticles: [],
  totalCount: 0,
  skip: 0,
  limit: 10,
  loading: false,
  error: false,
};

const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_LIST_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }

    case constants.FETCH_LIST_SUCCESS: {
      const {totalCount, articles, limit} = action.payload;

      return {
        ...state,
        totalCount,
        articles: [...state.pinnedArticles, ...articles, ...state.articles],
        limit,
        loading: false,
      };
    }

    case constants.FETCH_LIST_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case constants.FETCH_BATCH_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }

    case constants.FETCH_BATCH_SUCCESS: {
      const {limit, articles} = action.payload;

      return {
        ...state,
        articles: [...state.pinnedArticles, ...articles, ...state.articles],
        limit,
        loading: false,
      };
    }

    case constants.FETCH_BATCH_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case constants.SET_PINNED_ARTICLES: {
      const {index} = action.payload;

      const pinnedItem = state.articles[index];
      state.articles.splice(index, 1);

      return {
        ...state,
        pinnedArticles: [pinnedItem, ...state.pinnedArticles],
        articles: [pinnedItem, ...state.pinnedArticles, ...state.articles],
      };
    }

    case constants.DELETE_PINNED_ARTICLE: {
      const {index} = action.payload;

      state.articles.splice(index, 1);

      return {
        ...state,
      };
    }

    default:
      return state;
  }
};
export default placeReducer;
