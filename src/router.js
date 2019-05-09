import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/home")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/login")
    },
    {
      path: "e-commerce",
      name: "eCommerce",
      component: () => import("./views/e-commerce"),
      redirect: { name: "eCommerceHome" },
      children: [
        {
          path: "/e-commerce-home",
          name: "eCommerceHome",
          component: () => import("./views/e-commerce/home")
        },
        {
          path: "/e-commerce-classification",
          name: "eCommerceClassification",
          component: () => import("./views/e-commerce/classification")
        },
        // 发布选类目
        {
          path: "/e-commerce-publish",
          name: "eCommercePublish",
          component: () => import("./views/e-commerce/publish"),
        },
         // 发布
         {
          path: "/e-commerce-commodity",
          name: "eCommerceCommodity",
          component: () => import("./views/e-commerce/commodity")
        },
        {
          path: "/e-commerce-category",
          name: "eCommerceCategory",
          component: () => import("./views/e-commerce/category")
        },
        {
          path: "/e-commerce-brand",
          name: "eCommerceBrand",
          component: () => import("./views/e-commerce/brand"),
        },
        {
          path: "/e-commerce-autarkyorder",
          name: "eCommerceAutarkyOrder",
          component: () => import("./views/e-commerce/autarkyorder"),
        },
        {
          path: "/e-commerce-brandorder",
          name: "eCommerceBrandOrder",
          component: () => import("./views/e-commerce/brandorder"),
        },
        {
          path: "/e-commerce-freight",
          name: "eCommerceFreight",
          component: () => import("./views/e-commerce/freight"),
        },
        {
          path: "/e-commerce-newfreight",
          name: "eCommerceNewFreight",
          component: () => import("./views/e-commerce/newfreight"),
        },
        // 出售商品列表
        {
          path: "/e-commerce-selllist",
          name: "eCommerceSellList",
          component: () => import("./views/e-commerce/selllist")
        },
        // 仓库
        {
          path: "/e-commerce-warehouselist",
          name: "eCommerceWarehouseList",
          component: () => import("./views/e-commerce/warehouselist")
        },
        // 多媒体库
        {
          path: "/e-commerce-media",
          name: "eCommerceMedia",
          component: () => import("./views/e-commerce/media")
        }

      ]
    },
  ]
});
