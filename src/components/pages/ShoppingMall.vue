<template>
  <div>
    <!--search bar layout-->
    <div class="search-bar">
      <van-row gutter="5">
        <van-col span="3"><img :src="locationIcon"
               width="80%"
               class="location-icon" /></van-col>
        <van-col span="16">
          <input type="text"
                 class="search-input" />
        </van-col>
        <van-col span="5">
          <van-button size="mini"
                      round>查找</van-button>
        </van-col>

      </van-row>
    </div>
    <!--swipwer area-->
    <div class="swiper-area">
      <van-swipe :autoplay="1000">
        <van-swipe-item v-for="(banner,index) in infoData.slides"
                        :key="index">
          <img v-lazy="banner.image"
               width="100%" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="type-bar">
      <div v-for="(cate,index) in infoData.category"
           :key="index">
        <img v-lazy="cate.image"
             width="100%" />
        <span>{{cate.mallCategoryName}}</span>

      </div>
    </div>
    <!--AD banner area-->
    <div class="ad-banner">
      <img v-lazy="infoData.advertesPicture.PICTURE_ADDRESS"
           width="100%">
    </div>
    <!--Recommend goods area-->
    <div class="recommend-area">
      <div class="recommend-title">
        商品推荐
      </div>
      <div class="recommend-body">
        <!--swiper-->
        <swiper :options="swiperOption">
          <swiper-slide v-for=" (item ,index) in infoData.recommend"
                        :key="index">
            <div class="recommend-item">

              <img :src="item.image"
                   width="80%" />
              <div>{{item.goodsName}}</div>
              <div>￥{{item.price}} (￥{{item.mallPrice}})</div>

            </div>
          </swiper-slide>
        </swiper>

      </div>
    </div>
    <floorComponent :floorData="infoData.floor1"
                    :floorTitle="infoData.floorName.floor1"></floorComponent>
    <floorComponent :floorData="infoData.floor2"
                    :floorTitle="infoData.floorName.floor2"></floorComponent>
    <floorComponent :floorData="infoData.floor3"
                    :floorTitle="infoData.floorName.floor3"></floorComponent>
    <!--Hot Area-->
    <div class="hot-area">
      <div class="hot-title">热卖商品</div>
      <div class="hot-goods">
        <!--这里需要一个list组件-->
        <van-list>
          <van-row gutter="20">
            <van-col span="12"
                     v-for="( item, index) in infoData.hotGoods"
                     :key="index">
              <goods-info :goodsImage="item.image"
                          :goodsName="item.name"
                          :goodsPrice="item.price"></goods-info>
            </van-col>
          </van-row>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import floorComponent from '../component/floorComponent'
import goodsInfo from '../component/goodsInfoComponent'
export default {
  components: {
    swiper,
    swiperSlide,
    floorComponent,
    goodsInfo
  },
  data () {
    return {
      locationIcon: require('../../assets/images/logo.png'),
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }

    }
  },
  mounted () {
    this.$store.dispatch('getData')
    console.log(this.$store.state.data)
  },
  computed: {
    infoData () {
      return this.$store.state.data.data
    }
  }
}
</script>
<style scoped >
.search-bar {
  height: 2.2rem;
  background-color: #7232dd;
}
.search-input {
  width: 100%;
  height: 1.3rem;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px solid 1px !important ;
  background-color: #7232dd;
  color: #fff;
}
.location-icon {
  padding-top: 0.2rem;
  padding-left: 0.3rem;
}
.swiper-area {
  overflow: hidden;
  clear: both;
}
.type-bar {
  background-color: #fff;
  margin: 0 0.3rem 0.3rem 0.3rem;
  border-radius: 0.3rem;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.type-bar div {
  padding: 0.3rem;
  font-size: 12px;
  text-align: center;
  flex: 1;
}
.recommend-area {
  background-color: #fff;
  margin-top: 0.3rem;
}
.recommend-title {
  border-bottom: 1px solid #eee;
  font-size: 14px;
  padding: 0.2rem;
  color: #e5017d;
}
.recommend-body {
  border-bottom: 1px solid #eee;
}

.recommend-item {
  width: 99%;
  border-right: 1px solid #eee;
  font-size: 12px;
  text-align: center;
}
.hot-area {
  text-align: center;
  font-size: 14px;
  height: 1.8rem;
  line-height: 1.8rem;
}
.hot-goods {
  height: 130rem;
  overflow: hidden;
  background-color: #fff;
}
</style>