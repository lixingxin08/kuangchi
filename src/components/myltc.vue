<template>
    <div id="myltc">
        <div class="myltc_mains" v-if="!noson_type">
            <div class="mylcted_top" v-if="myltctype[0]">
                <div class="content_box">
                    <div class="mylcted_top_title">{{$t("m.myMill.key29")}}</div>
                    <div class="flex_a">
                        <div v-for="(item,index) in ltc_top" :key="index" class="flex_C mylcted_top_main">
                            <span class="mylcted_top_item">{{item}}</span>
                            <span class="mylcted_top_item font_b" v-if="index==0">{{changpow(Number(wokerAlldata[0].latestHrInfo))}}H/s</span>
                            <span class="mylcted_top_item font_b" v-if="index==1">{{changpow(Number(wokerAlldata[0].minHrInfo))}}H/s</span>
                            <span class="mylcted_top_item font_b" v-if="index==2">{{changpow(Number(wokerAlldata[0].dayHrInfo))}}H/s</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content_box">
                <div class="myltcted" v-if="myltctype[0]">
                    <!--头部-->
                    <div class="ltc_center">
                        <div class="flex_a ltc_main">
                            <span v-for="(item,index) in ltc_main" :key="index" class="ltc_main_item ltc_main_bg">{{item}}</span>
                        </div>
                        <div class="flex_a ltc_main" v-for="(item,index) in wokerListdata" :key="index">
                            <span class="ltc_main_item">{{item.wokerName}}</span>
                            <span class="ltc_main_item">{{changpow(item.latestHr)}}H/s</span>
                            <span class="ltc_main_item">{{changpow(item.minHr)}}H/s</span>
                            <span class="ltc_main_item">{{changpow(item.dayHr)}}H/s</span>
                            <div class="flex_b ltc_main_item_last">
                                <span>{{timestampToTime2(item.time)}}</span>
                                <span @click="eject_open(index)"><img src="../assets/img/data_checked.png" alt=""></span>
                            </div>
                        </div>
                    </div>
                    <!--底部-->
                    <div class="ltc_c_title flex_b">
                        <div>
                        <div class="block_box"></div>
                        <span> {{$t("m.myMill.key33")}}</span>
                        </div>
                        <div class="ltc_c_title_r flex_b">
                            <span class="ltc_c_time" :class="select_type=='hour'?'bg_click':''" @click="selecttype(1)">{{$t("m.myMill.key34")}}</span>
                            <span class="ltc_c_time" :class="select_type=='hour'?'':'bg_click'" @click="selecttype(2)">{{$t("m.myMill.key35")}}</span>
                        </div>
                    </div>
                    <!--曲线图-->
                    <div class="charts">
                        <div id="myChart"></div>
                    </div>
                </div>
                <!--图表弹出框-->
                <div class="share" v-show="eject_switch">
                    <div class="eject">
                        <div class="flex_b eject_top">
                            <span>{{eject_data}}</span>
                            <div class="flex_b">
                                <span class="eject_t_time" :class="eject_time=='hour'?'eject_t_timeed':''" @click.stop="selecttype(3)">
                                    <span>{{$t("m.myMill.key34")}}</span>
                                </span>
                                <span class="eject_t_time" :class="eject_time=='hour'?'':'eject_t_timeed'" @click.stop="selecttype(4)">
                                    <span>{{$t("m.myMill.key35")}}</span>
                                </span>
                                <span class="el-icon-close close" @click="eject_off()"></span>
                            </div>
                        </div>
                        <div id="eject_main">
                        </div>
                    </div>
                </div>
                <!--矿机未配置-->
                <div class="myltct" v-if="!myltctype[0]">
                    <div class="myltct_t">
                        <div class="myltct_t_head">
                            {{$t("m.myltc.key1")}}
                        </div>
                        <div class="myltct_t_head_main">
                            <el-timeline>
                                <el-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp" size="normal" class="myltc_tips">
                                    {{activity.content}}
                                </el-timeline-item>
                            </el-timeline>
                        </div>
                    </div>
                    <div class="myltct_t_bt">
                        <div class="myltct_t_bt_item">
                            <div class="myltct_t_head">
                                {{$t("m.myltc.key7")}}
                            </div>
                            <div class="flex_c myltct_t_b_main"> {{$t("m.myltc.key8")}}</div>
                            <div class="flex_c myltct_t_b_main" v-for="item in 3" :key="item">www.kirinpool.com:5555</div>
                        </div>
                        <div class="myltct_t_bt_item">
                            <div class="myltct_t_head">
                                {{$t("m.myltc.key9")}}
                            </div>
                            <div class="flex_b myltct_t_bt_b">

                                <span>SMN：0%</span>
                                <span>GMN：0%</span>
                            </div>
                            <div class="flex_b myltct_t_bt_b">
                                <span>MN：0%</span>
                                <span>{{$t("m.myltc.key10")}}:1%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <noson v-if="noson_type"></noson>
    </div>
</template>
<script>
import noson from './no_son.vue'
import bus from "../assets/eventBus"
export default {
    components: {
        noson,
    },
    data() {
        return {
            ltc_top: [this.$t("m.myMill.key30"), this.$t("m.myMill.key31"), this.$t("m.myMill.key32")],
            ltc_main: [this.$t("m.myMill.key5"), this.$t("m.myMill.key30"), this.$t("m.myMill.key31"), this.$t("m.myMill.key37"), this.$t("m.myMill.key36")],
            ltc_item: [this.$t("m.myMill.key30"), this.$t("m.myMill.key31"), this.$t("m.myMill.key32"), this.$t("m.myMill.key30")],
            myltctype: [true],
            select_type: 'hour',
            activities: [{
                content: this.$t("m.myltc.key2"),
                timestamp: this.$t("m.myltc.key3"),
            }, {
                content: this.$t("m.myltc.key4"),
                timestamp: this.$t("m.myltc.key5"),
            },
            {
                content: this.$t("m.myltc.key6"),
                timestamp: '',
            },
            ],
            xAxisdata: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            yAxisdata: [0, 500, 1000, 1500],
            AllKlinedata: { //总曲线数据
                xAxisdata: [],
                val: []
            },
            ListKlinedata: {//单台矿机曲线
                xAxisdata: [],
                val: []
            },
            eject_switch: false,
            eject_data: [],
            eject_time: 'hour',
            myltc_param: {
                subusername: localStorage.getItem('subusername'),
                token: localStorage.getItem('token'),
                username: localStorage.getItem('username'),
            },
            List_k_params: {
                subusername: localStorage.getItem('subusername'),
                type: 'hour',
                wokername: '',
                token: localStorage.getItem('token'),
                username: localStorage.getItem('username'),
            },
            allkline_params: {
                subusername: localStorage.getItem('subusername'),
                type: 'hour',
                token: localStorage.getItem('token'),
                username: localStorage.getItem('username'),
            },
            wokerListdata: [],
            wokerAlldata: [
                { latestHrInfo: '', minHrInfo: '', dayHrInfo: '' }
            ],
            noson_type: false,
            timer: '',
            yAxisName:''
        }
    },
    created() {
    let _that=this
    this.timer = setInterval(function() {
      _that.wokerList()
    }, 300000)
    },
    beforeDestroy() {
        clearInterval(this.timer)
         this.timer=null
    },
    mounted() {
    if (localStorage.getItem("subnameList") == null||localStorage.getItem("subnameList") < 1) {
                this.$router.push({ name: "unsub" });
    }   else {
            this.wokerList()
            this.getmyltcdata()
        }
    },
    methods: {
        selecttype(index) {
            console.log(index);
            if (index == 1) {
                this.select_type = 'hour'
                this.allkline_params.type = 'hour'
                this.wokerAllKlinedata()
            } else if (index == 2) {
                this.select_type = 'day'
                this.allkline_params.type = 'day'
                this.wokerAllKlinedata()
            } else if (index == 3) {
                this.eject_time = 'hour'
                this.List_k_params.type = 'hour'
                this.wokerListKlinedata()
            } else if (index == 4) {
                this.List_k_params.type = 'day'
                this.eject_time = 'day'
                this.wokerListKlinedata()
            }
        },
        getValueByKey(data, val1, val2) {
            var i = 0
            for (var key in data) {
                val1[i] = key
                val2[i] = this.changpow2(data[key])
                i++
            }
        },
        //主图表
        drawLine() {
            let _that = this
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.showLoading()
            myChart.setOption({
                title: { text: '' },
                tooltip: {
                    trigger: 'axis',
                    formatter: function(params) {
                        // console.log(params[0].data)
                        params = params[0];
                        var date = params.data;
                        return date
                    },
                    axisPointer: {
                        animation: false
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: _that.AllKlinedata.xAxisdata,
                    boundaryGap: false,
                    min: _that.AllKlinedata.xAxisdata[0],
                    splitNumber: _that.AllKlinedata.xAxisdata.length,
                    axisTick: {
                        show: false
                    },
                    axisLine: {                 //坐标 轴线
                        show: true,             //是否显示坐标轴轴线
                        onZero: true,           //X 轴或者 Y 轴的轴线是否在另一个轴的 0 刻度上，只有在另一个轴为数值轴且包含 0 刻度时有效
                    },
                },
                yAxis: {
                    show: true,
                    name: _that.yAxisName,
                    type: 'value',
                    scale: true,
                    // max: 600,
                    min: 0,
                    boundaryGap: [0.2, 0.2],
                    splitNumber: 12,
                    splitLine: {
                        lineStyle: {
                            color: "#333",
                            opacity: 0.1
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    // axisLabel: {
                    //     formatter: function(value) {
                    //         var texts = [];
                    //         if (value == 0) {
                    //             texts.push('0');
                    //         }
                    //         else if (value <= 50) {
                    //             texts.push('50');
                    //         }
                    //         else if (value <= 100) {
                    //             texts.push('100');
                    //         }
                    //         else if (value <= 150) {
                    //             texts.push('150');
                    //         } else if (value <= 200) {
                    //             texts.push('200');
                    //         } else if (value <= 250) {
                    //             texts.push('250');
                    //         } else if (value <= 300) {
                    //             texts.push('300');
                    //         } else if (value <= 350) {
                    //             texts.push('350');
                    //         } else if (value <= 400) {
                    //             texts.push('400');
                    //         } else if (value <= 450) {
                    //             texts.push('450');
                    //         } else if (value <= 500) {
                    //             texts.push('500');
                    //         } else if (value <= 550) {
                    //             texts.push('550');
                    //         } else if (value <= 600) {
                    //             texts.push('600');
                    //         }

                    //         return texts;
                    //     }
                    // }
                },
                series: [{
                    data: _that.AllKlinedata.val,
                    type: 'line',
                    smooth: true,
                    color: 'rgba(46, 115, 232, 1)',
                    lineStyle: {
                        color: 'rgba(46, 115, 232, 1)'
                    },
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'rgba(46, 115, 232, 0.3)' // 0% 处的颜色
                            }, {
                                offset: 0.5, color: 'rgba(46, 115, 232, 0.1)' // 100% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(255, 255, 255, 0.1)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        },
                        shadowColor: "rgba(46, 115, 232, 0.3)",          //阴影颜色
                        shadowOffsetX: 0,            //阴影水平方向上的偏移距离。
                        shadowOffsetY: 0,            //阴影垂直方向上的偏移距离
                        shadowBlur: 10,              //图形阴影的模糊大小。
                        opacity: 1
                    }
                }]
            });
            myChart.hideLoading()
        },
        eject_open(index) {
            this.eject_switch = true;
          
            console.log(this.wokerListdat)
            this.List_k_params.wokername = this.wokerListdata[index].wokerName
              this.eject_data = this.List_k_params.wokername
            console.log(index)
            console.log(this.List_k_params.wokername)
            this.wokerListKlinedata()

        },
        eject_off() {
            this.eject_switch = false
        },
        //子账户下总矿机算力
        getmyltcdata() {
            let _that = this
            this.$ajax('post', this.GLOBAL.baseUrl + 'v2/wokerAllInfo', this.myltc_param, function(data) {
                console.log(data, "子账户下总矿机算力")
                console.log();
                let nowHashrate = _that.changpow(JSON.parse(data).minerPow[0].latestHrInfo);
                console.log(nowHashrate);
                if(nowHashrate.includes('G')){
                    _that.yAxisName='GH/s'
                }else{
                    _that.yAxisName='MH/s'
                }
                _that.wokerAlldata = JSON.parse(data).minerPow;
                _that.wokerAllKlinedata()
                // _that.nowHashrate=
            }, function(error) {
                // alert("网络出现一点点问题，请稍后再试")
                 _that.$message.error(_that.$t("m.key"));
            })
        },
        //子账户下单个矿机的列表
        wokerList() {
            let _that = this
            let res = {
                "code": 1,
                "msg": "success",
                "minerPow": [
                    {
                        "wokerName": "3",
                        "latestHr": 100000003,
                        "minHr": 10000000,
                        "dayHr": 10000000,
                        "time": 1552296607
                    }
                ],
                "minerNumber": 1
            };
            // _that.wokerListdata = res.minerPow
            this.$ajax('post', this.GLOBAL.baseUrl + 'v2/wokerListInfo', this.myltc_param, function(data) {
                console.log(data, "子账户下单个矿机的列表")
                _that.wokerListdata = JSON.parse(data).minerPow
                if (JSON.parse(data).code == 1002) {
                    console.log(11133)
                    _that.$set(_that.myltctype, 0, false)
                }
            }, function(error) {
                console.log(error);
                // alert("网络出现一点点问题，请稍后再试1")
                 _that.$message.error(_that.$t("m.key"));
            })
        },
        //总矿机曲线
        wokerAllKlinedata() {
            let _that = this;
            let data = {
                "hourInfo": [
                    {
                        "1:00": 0,
                        "4:00": 400,
                        "2:00": 600,
                        "14:00": 523,
                        "15:00": 200,
                        "16:00": 600,
                        "17:00": 100,

                    }
                ]
            }
            this.AllKlinedata = { //总曲线数据
                xAxisdata: [],
                val: []
            },
            // _that.getValueByKey(data.hourInfo[0], _that.AllKlinedata.xAxisdata, _that.AllKlinedata.val)
            this.$ajax('post', this.GLOBAL.baseUrl + 'v2/wokerAllKlineInfo', this.allkline_params, function(data) {
                console.log(data, "wokerAllKlineInfo33333", _that.allkline_params)
                if (_that.select_type == 'hour') {
                    _that.getValueByKey(JSON.parse(data).hourInfo[0], _that.AllKlinedata.xAxisdata, _that.AllKlinedata.val)
                    console.log(JSON.parse(data).hourInfo[0], "ssssss1")
                } else {
                    _that.getValueByKey(JSON.parse(data).dayAllKlineInfo[0], _that.AllKlinedata.xAxisdata, _that.AllKlinedata.val)
                    console.log(JSON.parse(data).dayAllKlineInfo[0], "ssssss2222")
                }
                console.log(_that.AllKlinedata, "ssssss555555总矿机曲线")
                _that.$nextTick(() => { _that.drawLine() })
            }, function(error) {
                // alert("网络出现一点点问题，请稍后再试2")
                 _that.$message.error(_that.$t("m.key"));
            })
        },
        //单台矿机内k线
        wokerListKlinedata() {
            let _that = this
            let res = {
                "code": 200,
                "dayInfo": [
                    {
                        "1:00": 0,
                        "4:00": 400,
                        "2:00": 600,
                        "14:00": 523,
                        "15:00": 200,
                        "16:00": 600,
                        "17:00": 100,

                    }
                ]
            }
            this.ListKlinedata = {//单台矿机曲线
                xAxisdata: [],
                val: []
            },
                // _that.getValueByKey(res.dayInfo[0], _that.ListKlinedata.xAxisdata, _that.ListKlinedata.val)
                console.log(this.List_k_params)
            this.$ajax('post', this.GLOBAL.baseUrl + 'v2/wokerListKlineInfo', this.List_k_params, function(data) {

                if (_that.List_k_params.type == 'hour') {
                    console.log(data, "ssss11111111111", )
                    _that.getValueByKey(JSON.parse(data).hourInfo[0], _that.ListKlinedata.xAxisdata, _that.ListKlinedata.val)
                } else {
                    console.log(data, "ssss1122222221")
                    _that.getValueByKey(JSON.parse(data).dayhrInfo[0], _that.ListKlinedata.xAxisdata, _that.ListKlinedata.val)
                }
                console.log(_that.ListKlinedata, "sssss22111s1")
                _that.$nextTick(() => { _that.eject_chart() })
            }, function(error) {
                //alert("网络出现一点点问题，请稍后再试3")
                _that.$message.error(_that.$t("m.key"));
            })
        },
        //弹出框图表
        eject_chart() {
            let _that = this
            let myChart = this.$echarts.init(document.getElementById('eject_main'))
            myChart.setOption({
                title: { text: '' },
                tooltip: {
                    trigger: 'axis',
                    formatter: function(params) {
                        params = params[0];
                        var date = params.data;
                        return date
                    },
                    axisPointer: {
                        animation: false
                    }
                },
                grid: {
                    left: '3%',
                    right: '5%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: _that.ListKlinedata.xAxisdata,
                    min: _that.ListKlinedata.xAxisdata[0],
                    splitNumber: _that.ListKlinedata.xAxisdata.length,
                    boundaryGap: false,
                    axisLine: {
                        lineStyle: {
                            color: '#ffffff',
                            width: 0,
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                },
                yAxis: {
                    show: true,
                    name: 'MH/s',
                    type: 'value',
                    scale: true,
                    splitLine: { show: false },
                    // axisTick: { inside: true, },
                    max: 600,
                    min: 0,
                    boundaryGap: [0.2, 0.2],
                    splitNumber: 13,
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#ffffff',
                            width: 0,
                        }
                    },
                    axisLabel: {
                        formatter: function(value) {
                            var texts = [];
                            if (value == 0) {
                                texts.push('0');
                            }
                            else if (value <= 50) {
                                texts.push('50');
                            }
                            else if (value <= 100) {
                                texts.push('100');
                            }
                            else if (value <= 150) {
                                texts.push('150');
                            } else if (value <= 200) {
                                texts.push('200');
                            } else if (value <= 250) {
                                texts.push('250');
                            } else if (value <= 300) {
                                texts.push('300');
                            } else if (value <= 350) {
                                texts.push('350');
                            } else if (value <= 400) {
                                texts.push('400');
                            } else if (value <= 450) {
                                texts.push('450');
                            } else if (value <= 500) {
                                texts.push('500');
                            } else if (value <= 550) {
                                texts.push('550');
                            } else if (value <= 600) {
                                texts.push('600');
                            }

                            return texts;
                        }
                    }
                },
                series: [{
                    data: _that.ListKlinedata.val,
                    type: 'line',
                    smooth: true,
                    color: 'rgba(46, 115, 232, 1)',
                    lineStyle: {
                        color: 'rgba(0, 255, 255, 1)',
                        width: 1,
                    },
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'rgba(46, 115, 232, 0.3)' // 0% 处的颜色
                            }, {
                                offset: 0.5, color: 'rgba(46, 115, 232, 0.1)' // 100% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(255, 255, 255, 0.1)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        },
                        shadowColor: "rgba(46, 115, 232, 0.3)",          //阴影颜色
                        shadowOffsetX: 0,            //阴影水平方向上的偏移距离。
                        shadowOffsetY: 0,            //阴影垂直方向上的偏移距离
                        shadowBlur: 10,              //图形阴影的模糊大小。
                        opacity: 1
                    }
                }]
            });
        },
    },
    beforeDestroy(){
        this.timer=null
        this.eject_data=[]
        this.wokerAlldata=[]
        this.wokerListdata=[]
    },
    watch:{

    }
}
</script>
<style scoped>
/**自适应**/

.content_box {
    width: 6rem;
    margin: 0 auto;
}

.mylcted_top {
    height: 1.85rem;
    background: url('../assets/img/myltc11.png') 100% 100% no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
    color: #fff;
    box-sizing: border-box;
}

.mylcted_top_title {
    font-family: MicrosoftYaHei-Bold;
    font-size: 18px;
    font-weight: normal;
    font-style: italic;
    font-stretch: normal;
    line-height: 0.08rem;
    letter-spacing: 0px;
    color: rgba(255, 255, 255, 1);
    margin-top: 0.25rem;
    margin-bottom: 0.2rem;
    text-align: left;
}

.mylcted_top_main {
    width: 1.4rem;
    padding: 0.1rem;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
}

.mylcted_top_item {
    height: 0.3rem;
    font-family: MicrosoftYaHei-Bold;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: rgba(255, 255, 255, 1);
}

.font_b {
    font-size: 20px
}

.myltcted {
    margin-bottom: 0.2rem;
}

.ltc_center {
    margin: 0.2rem 0;
}

.flex_a {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.ltc_c_m_main {
    height: 1.1rem;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    border: 0.06rem solid #f7f7f7;
    box-sizing: border-box;
}

.ltc_main {
    height: 0.3rem;
    margin: 0 auto;
}

.ltc_main_item {
    width: 20%;
    height: 100%;
    padding-left: 0.1rem;
    border: 1px solid #f2f2f2;
    box-sizing: border-box;
    line-height: 0.3rem;
    text-align: left;
    font-size: 14px;
}

.ltc_main_item_last {
    width: 20%;
    padding: 0 0.1rem;
    border: 1px solid #f2f2f2;
    box-sizing: border-box;
    line-height: 0.3rem;
}

.ltc_main_bg {
    background-color: #f2f2f2;
}

.flex_b {
    display: flex;
    justify-content: space-between;
    align-items: center
}

.flex_C {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
}

.ltc_top {
    height: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.ltc_c_title {
    width: 100%;
    text-align: left;
    font-size: 0.08rem;
    padding-left: 0.1rem;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #333333;
    margin-bottom: 0.1rem;
}
.block_box {
    width: 0.05rem;
    height: 0.05rem;
    background-color: #2e73e8;
    display: inline-block;
    margin-right: 0.05rem;
}
.ltc_c_title_r {
    width: 0.65rem;
}

.ltc_c_time {
    width: 0.3rem;
    height: 0.15rem;
    font-size: 14px;
    line-height: 0.15rem;
    color: '#c8c8c8';
    background-color: #f7f7ff;
    border-radius: 4px;
    border: solid 1px #e5e5e5;
    font-weight: 300;
    text-align: center;
    box-sizing: border-box;
}

.ltc_c_time:hover {
    color: rgba(51, 51, 255, 1);
    border: 1px solid rgba(51, 51, 255, 1);
}

.bg_click {
    background-color: rgba(51, 51, 255, 1);
    color: #fff;
}

.bg_click:hover {
    color: #fff;
}

.charts {
    width: 6rem;
    height: 3rem;
    border: 2px solid #f6f6f6;
    box-sizing: border-box;
    border-radius: 4px;
}

#myChart {
    width: 6rem;
    height: 3rem;
}












































































/**图表弹出框**/

.share {
    width: 0%;
    height: 0%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}

.eject {
    width: 4.5rem;
    height: 2.4rem;
    padding: 0.1rem;
    position: fixed;
    left: 50%;
    top: 50%;
    right: 0;
    bottom: 0;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 1);
    border-radius: 4px;
    color: #ffffff;
    opacity: 0.8;
}

#eject_main {
    width: 4rem;
    height: 2rem;
}

.eject_t_time {
    width: 0.3rem;
    height: 0.15rem;
    line-height: 0.15rem;
    background-color: rgba(247, 247, 255, 1);
    border-radius: 4px;
    color: #000;
    margin-right: 0.1rem;
}

.eject_t_timeed {
    background-color: rgba(46, 115, 232, 1);
    color: #fff;
}

.eject_t_time:hover {
    background-color: rgba(46, 115, 232, 1);
    border-radius: 4px;
    color: #fff;
}

.close {
    margin-left: 0.1rem;
    color: #fff;
    opacity: 0.5;
    padding-bottom: 0.1rem;
}

.myltct_t_b_main {
    height: 0.12rem;
    line-height: 0.12rem;
    font-size: 13px;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    padding-left: 0.18rem
}



















































































/**未配置**/

.myltct_t {
    min-height: 1.8rem;
    border: 4px solid #f7f7f7;
    box-sizing: border-box;
    margin: 0.2rem 0;
}

.myltct_t_head {
    height: 0.25rem;
    font-size: 14px;
    line-height: 0.25rem;
    font-weight: normal;
    font-stretch: normal;
    text-align: left;
    background-color: rgba(248, 250, 252, 1);
    border-radius: 4px 4px 0px 0px;
    padding-left: 0.14rem;
    margin-bottom: 0.14rem
}



.myltct_t_head_main {
    text-align: left;
    line-height: 0.2rem;
    font-size: 14px;
    padding-left: 0.2rem
}

.myltct_t_head_main_item {
    position: relative;
    border-left: 1px solid #ccc;
    padding-left: 0.14rem;
}

.myltct_t_bt {
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
    display: flex;
    justify-content: space-between;
}

.myltct_t_bt_item {
    width: 2.9rem;
    height: 1.4rem;
    border: 4px solid #f7f7f7;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 4px;
}

.myltct_t_bt_b {
    width: 1rem;
    margin-left: 0.18rem;
    margin-bottom: 0.3rem;
}
</style>
