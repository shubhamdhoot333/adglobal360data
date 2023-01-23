import axios from "axios";
import { URL } from "../Url";
//summary api for pbi

export const summary = async (token) => {
  // console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const result = await axios.post(`${URL}/summary/page/view`, null, config);

    return result;
  } catch (error) {
    console.log(error.message);
  }
};
// summary-filter api in summary page
export const summarydata = async (token, data = null) => {
  // console.log(token, data);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const result = await axios.post(
      `${URL}/summary-filter/page/view`,
      data,
      config
    );

    return result;
  } catch (error) {
    console.log(error.message);
  }
};
//share_of_search
export const share_of_search = async (token) => {
  // console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const result = await axios.post(
      `${URL}/share-of-search/page/view`,
      null,
      config
    );

    return result;
  } catch (error) {
    console.log(error.message);
  }
};

//share_of_search filter api
export const share_of_search_filter = async (token, data) => {
  // console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const result = await axios.post(
      `${URL}/ShareOfSearch-filter/page/view`,
      data,
      config
    );

    return result;
  } catch (error) {
    console.log(error.message);
  }
};

//organic_rank api
export const organic_rank = async (token) => {
  // console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const result = await axios.post(`${URL}/rank/page/view`, null, config);

    return result;
  } catch (error) {
    console.log(error.message);
  }
};
// organic rank filter api
export const organic_rank_filter = async (token, data) => {
  // console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const result = await axios.post(
      `${URL}/rank-filter/page/view`,
      data,
      config
    );

    return result;
  } catch (error) {
    console.log(error.message);
  }
};

//on shelf availability api
export const shelf_availability = async (token) => {
  // console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const result = await axios.post(
      `${URL}/shelf-availability/page/view`,
      null,
      config
    );

    return result;
  } catch (error) {
    console.log(error.message);
  }
};

// organic rank filter api
export const shelf_availability_filter = async (token, data) => {
  // console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const result = await axios.post(
      `${URL}/shelf-availability-filter/page/view`,
      data,
      config
    );

    return result;
  } catch (error) {
    console.log(error.message);
  }
};

//keyword-trand api
export const keyword_trand = async (token) => {
  // console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const result = await axios.post(
      `${URL}/keyword-trand/page/view`,
      null,
      config
    );

    return result;
  } catch (error) {
    console.log(error.message);
  }
};
//keyword_trand_filter

export const keyword_trand_filter = async (token, data) => {
  // console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const result = await axios.post(
      `${URL}/keyword-trend-filter/page/view`,
      data,
      config
    );

    return result;
  } catch (error) {
    console.log(error.message);
  }
};

//discount_trand api
export const discount_trend = async (token) => {
  // console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const result = await axios.post(
      `${URL}/discount-trend/page/view`,
      null,
      config
    );

    return result;
  } catch (error) {
    console.log(error.message);
  }
};

export const discount_trend_filter = async (token, data) => {
  // console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const result = await axios.post(
      `${URL}/discount-trend-filter/page/view`,
      data,
      config
    );

    return result;
  } catch (error) {
    console.log(error.message);
  }
};
//discount_trand api
export const price_discount = async (token) => {
  // console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const result = await axios.post(
      `${URL}/price-discount/page/view`,
      null,
      config
    );

    return result;
  } catch (error) {
    console.log(error.message);
  }
};
// discount_trand filter api
export const price_discount_filter = async (token, data) => {
  // console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const result = await axios.post(
      `${URL}/price-discount-filter/page/view`,
      data,
      config
    );

    return result;
  } catch (error) {
    console.log(error.message);
  }
};

//content_score api
export const content_score = async (token) => {
  // console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const result = await axios.post(
      `${URL}/content-score/page/view`,
      null,
      config
    );

    return result;
  } catch (error) {
    console.log(error.message);
  }
};
// content_score_filter
export const content_score_filter = async (token, data) => {
  // console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const result = await axios.post(
      `${URL}/content-score-filter/page/view`,
      data,
      config
    );

    return result;
  } catch (error) {
    console.log(error.message);
  }
};
