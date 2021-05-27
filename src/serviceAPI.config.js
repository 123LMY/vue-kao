const BASEURL = "https://www.easy-mock.com/mock/5ae2eeb23fbbf24d8cd7f0b6/SmileVue/"
const LOCALURL = "http://localhost:3000/"
const URL = {
  getShoppingMallInfo: BASEURL + 'index',
  getGoodsInfo: BASEURL + 'getGoodsInfo',
  registerUser: LOCALURL + 'user/register',   //用户注册接口
  login: LOCALURL + 'user/login',   //用户注册接口
  getDetailGoodsInfo: LOCALURL + 'goods/getDetailGoodsInfo',
  getCategoryList: LOCALURL + 'goods/getCategoryList',
  getCategorySubList: LOCALURL + 'goods/getCategorySubList',
  getGoodsListByCategorySubID: LOCALURL + 'goods/getGoodsListByCategorySubID',
}

module.exports = URL