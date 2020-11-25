<template>
  <div id="home">
    <nav-bar class="home-bar"><div slot="center">购物街</div></nav-bar>
    <scroll class="content"
            ref="scroll"
            @scroll="contentScroll"
            @pullingUp="loadMore"
            :data="showGoodsList"
            :pull-up-load="true"
            :probe-type="3">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="tab-control" :titles="['流行','新款','精选']"
                   @tabClick="tabClick"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
  <ul>
    <li>1篱笆</li>
    <li>2篱笆</li>
    <li>3篱笆</li>
    <li>4篱笆</li>
    <li>5篱笆</li>
    <li>6篱笆</li>
    <li>7篱笆</li>
    <li>8篱笆</li>
    <li>9篱笆</li>
    <li>10篱笆</li>
    <li>11篱笆</li>
    <li>12篱笆</li>
    <li>13篱笆</li>
    <li>14篱笆</li>
    <li>15篱笆</li>
    <li>16篱笆</li>
    <li>17篱笆</li>
    <li>18篱笆</li>
    <li>19篱笆</li>
    <li>20篱笆</li>
    <li>21篱笆</li>
    <li>22篱笆</li>
    <li>23篱笆</li>
    <li>24篱笆</li>
    <li>25篱笆</li>
    <li>26篱笆</li>
    <li>27篱笆</li>
    <li>28篱笆</li>
    <li>29篱笆</li>
    <li>30篱笆</li>
    <li>31篱笆</li>
    <li>32篱笆</li>
    <li>33篱笆</li>
    <li>34篱笆</li>
    <li>35篱笆</li>
    <li>36篱笆</li>
    <li>37篱笆</li>
    <li>38篱笆</li>
    <li>39篱笆</li>
    <li>40篱笆</li>
    <li>41篱笆</li>
    <li>42篱笆</li>
    <li>43篱笆</li>
    <li>44篱笆</li>
    <li>45篱笆</li>
    <li>46篱笆</li>
    <li>47篱笆</li>
    <li>48篱笆</li>
    <li>49篱笆</li>
    <li>50篱笆</li>
    <li>51篱笆</li>
    <li>52篱笆</li>
    <li>53篱笆</li>
    <li>54篱笆</li>
    <li>55篱笆</li>
    <li>56篱笆</li>
    <li>57篱笆</li>
    <li>58篱笆</li>
    <li>59篱笆</li>
    <li>60篱笆</li>
    <li>61篱笆</li>
    <li>62篱笆</li>
    <li>63篱笆</li>
    <li>64篱笆</li>
    <li>65篱笆</li>
    <li>66篱笆</li>
    <li>67篱笆</li>
    <li>68篱笆</li>
    <li>69篱笆</li>
    <li>70篱笆</li>
    <li>71篱笆</li>
    <li>72篱笆</li>
    <li>73篱笆</li>
    <li>74篱笆</li>
    <li>75篱笆</li>
    <li>76篱笆</li>
    <li>77篱笆</li>
    <li>78篱笆</li>
    <li>79篱笆</li>
    <li>80篱笆</li>
    <li>81篱笆</li>
    <li>82篱笆</li>
    <li>83篱笆</li>
    <li>84篱笆</li>
    <li>85篱笆</li>
    <li>86篱笆</li>
    <li>87篱笆</li>
    <li>88篱笆</li>
    <li>89篱笆</li>
    <li>90篱笆</li>
    <li>91篱笆</li>
    <li>92篱笆</li>
    <li>93篱笆</li>
    <li>94篱笆</li>
    <li>95篱笆</li>
    <li>96篱笆</li>
    <li>97篱笆</li>
    <li>98篱笆</li>
    <li>99篱笆</li>
    <li>100篱笆</li>
  </ul>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  import {getHomeMultidata,getHomeGoods} from 'network/home';

    export default {
      name: "Home",
      components: {
        NavBar,
        HomeSwiper,
        RecommendView,
        FeatureView,
        TabControl,
        GoodsList,
        Scroll,
      },
      data() {
        return {
          banners: [],
          recommends: [],
          goods: {
            'pop': {page: 0, list: []},
            'new': {page: 0, list: []},
            'sell': {page: 0, list: []},
          },
          currentType:'pop',
        }
      },
      computed:{
        showGoods(){
          return this.goods[this.currentType].list
        }
      },
      created() {
        //  1.请求多个数据
        this.getHomeMultidata();
        //  2.请求商品数据
        this.getHomeGoods('pop');
        this.getHomeGoods('new');
        this.getHomeGoods('sell');
      },
      methods:{
        //事件监听相关的代码
        tabClick(index){
           switch (index) {
             case 0:
               this.currentType='pop';
               break;
             case 1:
               this.currentType='new';
               break;
             case 2:
               this.currentType='sell';
               break;
           }
        },
        //网络请求相关的方法
        getHomeMultidata(){
        getHomeMultidata().then(res => {
          console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })},
        getHomeGoods(type){
          const page=this.goods[type].page+1;
          getHomeGoods(type,page).then(res => {
            this.goods[type].list.push(...res.data.list);
            this.goods[type].page +=1;
          })
        }
      }
    }
</script>

<style scoped>
  #home{
    padding-top:44px;
  }
.home-bar{
  background-color:#1296db;
  color: #f7f7f7;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
  .tab-control{
     position: sticky;
     top: 44px;
     z-index: 9;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
