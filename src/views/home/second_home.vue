<template>
    <div>
        <div class="top">
            <div class="yiny"></div>
            <div class="shipin">
                 <video autoplay loop muted>
                 <source src="../../assets/img/lol36.mp4" type="video/mp4"  />
                 </video>
                 <div class="zi">
                     <b>欢迎来到英雄联盟</b>
                    <a href="#">/ 敬 英 雄</a>
                      <p>英雄不死<i></i>只是加入了英雄联盟</p>
                 </div>
            </div>
            <div class="yiny"></div>
        </div>
        <div class="btm">
            <div class="btm-l">
                <div class="btm-l-s">
                    <h3>FANART创作馆</h3>
                    <i class="el-icon-caret-right"></i>
                    <a href="#">更多</a>
                </div>
                <div class="btm-l-x">
                    <ul>
                        <li v-for="(abc, index) in imgList" :key="index">
                            <img :src="abc" alt="">
                        </li>
                    </ul>
                </div>
            </div>
            <div class="btm-r">
                <div class="btm-r-z">
                    <img src="http://img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_3daa2088a3e3ca0d77fbcc1bbe3b45c8/0" alt="">
                </div>
                 <div class="btm-r-y">
                     <ul>
                        <li><img src="../../assets/img/3101.png" alt=""></li>
                         <li><img src="../../assets/img/3102.png" alt=""></li>
                          <li><img src="../../assets/img/3103.png" alt=""></li>
                           <li><img src="../../assets/img/3104.png" alt=""></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      imgList: ['https://shp.qpic.cn/cms_pic/2570704457/ce4b3a96b39d06624a57d04318c55338/258',
        'https://shp.qpic.cn/cms_pic/2460418545/ad9cdef6010bf25e14636dc9ce000359/258',
        'https://shp.qpic.cn/cms_pic/1237002005/f97a29688829d0aaa99d19a435cdaf5f/',
        'https://shp.qpic.cn/cms_pic/1298006945/242bea2ae3aa8e3e656a89bdc9fea290/',
        'https://shp.qpic.cn/cms_pic/1310045805/05c87416c905b290da26751ba5c93e5c/',
        'https://shp.qpic.cn/cms_pic/1273040185/1f66c9c1ede2add0a73ede4878365b0b/258',
        'https://shp.qpic.cn/cms_pic/2610138680/e7f26fda31a35c9bb432cff2f2857882/258',
        'https://shp.qpic.cn/cms_pic/1200822098/91f6423a76f0a46ad1595b6312924e2f/258'
      ]
    }
  }
}
</script>

<style lang="less" scoped>
    .top{
        display: flex;
        height: 500px;
        .yiny {
            flex: 1;
            background-color: #000;
            opacity: 0.9;
        }
        .shipin{
            flex: 8;
            position: relative;
            &:before {
                position: absolute;
                content: '123';
                width: 100%;
                height: 100%;
                background-color: #000;
                opacity: 0.2;
            }
            .zi {
                position: absolute;
                width: 50%;
                height: 50%;
                left: 25%;
                top: 50%;
                 opacity: 0.9;
                // background-color: #fff;
                text-align: center;
                b {
                     color: #E6E5E2;
                    font-size: 40px;
                    display: block;
                    margin: 30px 0;
                }
                p {
                    color: #fff;
                    font-size: 18px;
                    font-weight: 700;
                    margin: 60px 0 0 0;
                    opacity: 0.6;
                    i {
                        display: inline-block;
                        width: 20px;
                    }
                }
                a {
                    display: block;
                    width: 180px;
                    height: 44px;
                    line-height: 44px;
                    margin: 0 auto;
                    border-radius: 22px;
                    background-color: #D0363A;
                    color: #fff;
                    &:hover {
                        background-color: #2B2A29;
                        text-decoration: underline;
                        transition: all 0.5s;
                    }
                }
            }
            video{
                // position: fixed;
                // left:20%;
                // top: 10%;
                // min-width: 100%;
                // min-height: 100%;
                height: 500px;
                width: 100%;
                // z-index:-11;
                object-fit: fill;
                // margin: 0 auto;
            }
            source{
                // min-width: 100%;
                // min-height: 100%;
                height: auto;
                width: auto;
            }
        }
    }
    .btm {
        width: 100%;
        height:  calc(100vh - 60px - 500px);
        // background-color: pink;
        display: flex;
        .btm-l {
            flex: 6;
            padding: 0 50px;
            .btm-l-s {
                height: 60px;
                line-height: 60px;
                padding: 0 120px 0 5px;

                h3 {
                     border-left: 8px solid #1DA6BA;
                     padding-left: 15px;
                    float: left;
                    margin: 0;
                }
                a {
                    font-size: 14px;
                        color: #7ea1a6;
                    float: right;
                }
                i {
                        color: #7ea1a6;
                    float: right;
                    line-height: 60px;
                }
            }
            .btm-l-x {
                ul {
                    width: 100%;
                    height:  calc(100vh - 120px - 500px);
                    padding: 0 80px;

                   li {
                       float: left;
                       margin: 5px;
                       width: 150px;
                       height: 150px;
                       overflow: hidden;
                    // background-color: #000;
                    img {
                        width: 100%;
                        height: 100%;
                        transition: all 0.3s;
                        &:hover {
                             transform: scale(1.2);
                        }
                    }
                   }
                }
            }
        }
        .btm-r {
            flex: 4;
            display: flex;
            .btm-r-z {
                flex: 4;
                position: relative;
                height: 375px;
                img {
                    position: absolute;
                    height: 344px;
                    bottom: 0;
                    transition: all 0.3s;
                     &:hover {
                         bottom: 20px;
                     }
                }
            }
            .btm-r-y {
                flex: 6;
                margin-top: 60px;
                li {
                    margin: 5px 0;
                    img {
                        width: 200px;
                        height: 74px;
                    }
                    &:last-child img {
                        height: 54px;
                    }
                }
            }
        }
    }
</style>
