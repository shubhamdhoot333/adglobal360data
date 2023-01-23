const COLUMNS = [
  {
    title: "id",
    field: "id",
    hidden: true,
  },

  { title: "campaign", field: "campaign" },

  { title: "state", field: "state" },
  {
    title: "status",
    field: "status",
  },
  { title: "type", field: "_type", hidden: true },
  { title: "targeting", field: "targeting", hidden: true },
  {
    title: "campaign_bidding_strategy",
    field: "campaign_bidding_strategy",
    hidden: true,
  },
  { title: "start_date", field: "start_date" },
  { title: "end_date", field: "end_date", hidden: true },
  { title: "portfolio", field: "portfolio", hidden: true },
  { title: "budget", field: "budget" },
  { title: "top_of_search_is", field: "top_of_search_is", hidden: true },
  { title: "cost_type", field: "cost_type", hidden: true },
  { title: "impressions", field: "impressions", hidden: true },
  { title: "clicks", field: "clicks" },
  { title: "ctr", field: "_ctr", hidden: true },
  { title: "spend", field: "spend", hidden: true },
  { title: "cpc", field: "_cpc", hidden: true },
  { title: "orders", field: "orders", hidden: true },
  { title: "sales", field: "sales", hidden: true },
  { title: "acos", field: "_acos", hidden: true },
  { title: "roas", field: "_roas", hidden: true },
  { title: "ntb_order", field: "_ntb_order", hidden: true },
  {
    title: "percent_of_orders_ntb",
    field: "_percent_of_orders_ntb",
    hidden: true,
  },
  { title: "ntb_sales", field: "_ntb_sales", hidden: true },
  {
    title: "percent_of_sales_ntb",
    field: "_percent_of_sales_ntb",
    hidden: true,
  },
  {
    title: "viewable_impressions",
    field: "viewable_impressions",
    hidden: true,
  },
  { title: "vcpm", field: "_vcpm", hidden: true },
  { title: "created_dttm", field: "created_dttm", hidden: true },
  { title: "modified_dttm", field: "modified_dttm", hidden: true },
];

export default COLUMNS;
