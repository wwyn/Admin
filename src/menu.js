/**
 * 配置各个系统的侧边栏
 */

export default {
    home: [
        { name: "数据概括", link: "eCommerce" },
        { name: "首页管理", link: "eCommerce" },
        { name: "智能控制", link: "eCommerce" },
        { name: "电商后台", link: "eCommerce" },
        { name: "新闻版块", link: "eCommerce" },
        { name: "便捷搭车", link: "eCommerce" },
        { name: "儿童模块", link: "eCommerce" },
        { name: "周边服务", link: "eCommerce" },
        { name: "家庭版块", link: "eCommerce" },
        { name: "老人版块", link: "eCommerce" },
        { name: "社区版块", link: "eCommerce" },
        { name: "系统管理", link: "eCommerce" }
    ],
    eCommerce: [
        { name: "系统首页", link: "home" ,src: 'icon-xitongshouye-'},
        { name: "电商首页", link: "eCommerceHome",src: 'icon-dianshangshouye-' },
        { name: "商品管理",
            children: [
                { name: "商品发布", link: "eCommercePublish",opened: '商品管理' },
                { name: "出售中的商品", link: "eCommerceSellList",opened: '商品管理' },
                { name: "仓库中的商品", link: "eCommerceWarehouseList",opened: '商品管理' },
                { name: "分类管理", link: "eCommerceClassification",opened: '商品管理' },
                { name: "类目管理", link: "eCommerceCategory",opened: '商品管理' },
                { name: "品牌管理", link: "eCommerceBrand",opened: '商品管理',
            },
            ],
        src: 'icon-shangpinguanli-'},
        { name: "订单管理",
        children: [
            { name: "自营订单", link: "eCommerceAutarkyOrder",opened: '订单管理' },
            { name: "品牌订单", link: "eCommerceBrandOrder",opened: '订单管理' },
        ],
        src: 'icon-dingdanguanli-'},
        { name: "物流管理",
        children: [
            { name: "物流查询", link: "#",opened: '物流管理' },
            { name: "运费模板", link: "eCommerceFreight",opened: '物流管理' },
        ],
        src: 'icon-wuliuguanli-'},
        { name: "运营中心", 
        children: [
            { name: "首页装修", link: "#",opened: '运营中心' },
            { name: "多媒体库", link: "eCommerceMedia",opened: '运营中心' },
        ],
        src: 'icon-yunyingzhongxin-' },
        { name: "数据中心", link: "#" ,src: 'icon-shujuzhongxin-'},
        { name: "系统设置", link: "#",src: 'icon-xitongshezhi-' },
        { name: "我的账号", link: "#",src: 'icon-wodezhanghao-' },
    ]
};
