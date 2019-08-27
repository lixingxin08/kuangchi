<template>
    <div class="myMill">
        <!--收益头部-->
        <div class="mylcted_top flex_a">
            <div class="content_box">
                <div class="flex_a">
                    <div v-for="(item,index) in profit_top" :key="index" class="flex_C mylcted_top_main">
                        <span class="mylcted_top_item">{{item}}</span>
                        <span class="mylcted_top_item font_b" v-if="index==0">{{format(profit_data.todayEarningsAndAllEarnings.todatEarnings ,8)}}WTC</span>
                        <span class="mylcted_top_item font_b" v-if="index==1">{{format(profit_data.todayEarningsAndAllEarnings.allEarnings,8)}}WTC</span>
                        <span class="mylcted_top_item font_b" v-if="index==2">{{format(profit_data.needPayAndPayHistory.waitPay,8)}}WTC</span>
                        <span class="mylcted_top_item font_b" v-if="index==3">{{format(profit_data.needPayAndPayHistory.paidTotal,8)}}WTC</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="content_box">
            <div class="mymill_bottom">
                <div class="record flex_b">
                    <div class="record_l flex_f">
                        <div class="record_item" @click="change_record(true)" :class="recordtype?'record_item_active':''"> {{$t("m.myprofit.key5")}}</div>
                        <div class="record_item" @click="change_record(false)" :class="recordtype?'':'record_item_active'">{{$t("m.myprofit.key6")}}</div>
                    </div>
                    <div class="record_r flex_f">
                        <div class="record_r_item">
                            <el-dropdown trigger="click" placement="bottom">
                                <span class="el-dropdown-link">
                                    <span class="flex_b all">
                                        <span>{{derive_top}}</span>
                                        <i class="el-icon-arrow-down el-icon--right"></i>
                                    </span>
                                </span>
                                <el-dropdown-menu slot="dropdown" class="myprofit_head">
                                    <el-dropdown-item>
                                        <div class="myprofit_slide" @click="timeprofitdata(1)">{{$t("m.myprofit.key21")}}</div>
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <div class="myprofit_slide" @click="timeprofitdata(2)">{{$t("m.myprofit.key22")}}</div>
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <div class="myprofit_slide" @click="timeprofitdata(3)">{{$t("m.myprofit.key17")}}</div>
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                        <div class="record_r_item export" @click="exportExcel()">
                            {{export_name}}
                        </div>
                    </div>
                </div>
                <div class="have_record" v-if="haverecord">
                    <!--收益-->
                    <div class="record_main" v-if="recordtype">
                        <ul class="flex_b record_main_item record_head">
                            <li v-for="item in recorddata" :key="item" class="record_main_li">{{item}}</li>
                        </ul>

                        <ul class="flex_b record_main_item" v-for="(item,index) in profit_data.subUserEarningsListInfo.array" :key="index">
                            <li class="record_main_li">{{Formatdate(profit_data.subUserEarningsListInfo.array[index].date,'yyyy-MM-dd')}}</li>
                            <li class="record_main_li">{{format(profit_data.subUserEarningsListInfo.array[index].earningsMoney,8)}}</li>
                            <li class="record_main_li">{{format(profit_data.subUserEarningsListInfo.array[index].dayHr,2)}}</li>
                            <li class="record_main_li">{{profit_data.subUserEarningsListInfo.array[index].rewardType==2?'挖块':'pplns'}}</li>
                            <li class="record_main_li" :class="profit_data.subUserEarningsListInfo.array[index].status>0?'color_3':'color_4'">{{profit_data.subUserEarningsListInfo.array[index].status>0?'已支付':'未支付'}}</li>
                        </ul>
                    </div>
                    <!--支付-->
                    <div class="record_main" v-if="!recordtype">
                        <ul class="flex_b record_main_item record_head">
                            <li v-for="item in recorddata" :key="item" class="record_main_li">{{item}}</li>
                        </ul>

                        <ul class="flex_b record_main_item" v-for="(item,index) in profit_data.subUserPayListInfo.array" :key="index">
                            <li class="record_main_li">{{Formatdate(profit_data.subUserPayListInfo.array[index].paytime,'yyyy-MM-dd')}}</li>
                            <li class="record_main_li">{{Formatdate(Number(profit_data.subUserPayListInfo.array[index].paytime)-86400,'yyyy-MM-dd')}}</li>
                            <li class="record_main_li">{{format(profit_data.subUserPayListInfo.array[index].payMoney,8)}}</li>
                            <li class="record_main_li">{{filterFun(profit_data.subUserPayListInfo.array[index].toAddress)}}</li>
                            <li class="record_main_li">{{filterFun(profit_data.subUserPayListInfo.array[index].hash)}}</li>
                        </ul>
                    </div>
                    <div class="record_page">
                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="1" :page-sizes="[10,20,50]" :page-size="100" layout="sizes, prev, pager, next, jumper" :total="totalSize">
                        </el-pagination>
                    </div>
                </div>
                <div class="nprecord" v-else>
                    {{$t("m.wallet.key39")}}
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            recordtype: true,
            recorddata: [],
            totalSize: 0,
            export_name: '',
            haverecord: true,
            profit_params: {
                username: '',
                token: '',
                subusername: '',
                type: ''
            },
            profit_paylist: '',
            profit_type: true,
            profit_data: '',
            pay_data: '',
            profit_top: [this.$t("m.myprofit.key1"), this.$t("m.myprofit.key2"), this.$t("m.myprofit.key3"), this.$t("m.myprofit.key4")],
            derive_item:[this.$t("m.myprofit.key17"),this.$t("m.myprofit.key21"),this.$t("m.myprofit.key22"),this.$t("m.myprofit.key17")],
            derive_top:this.$t("m.myprofit.key1"),
            tableData: ''
            
        }
    },
    created() {
        this.change_record(true)
        this.getprofitdata()
        this.timeprofitdata(3)
    },
    methods: {
        change_record(val) {
            if (val) {
                this.recordtype = true;
                this.export_name = this.$t("m.myprofit.key18")
                this.recorddata = [this.$t("m.myprofit.key7"), this.$t("m.myprofit.key8"), this.$t("m.myprofit.key9"), this.$t("m.myprofit.key10"), this.$t("m.myprofit.key11")]
            } else if (!val) {
                this.recordtype = false;
                this.export_name = this.$t("m.myprofit.key19")
                this.recorddata = [this.$t("m.myprofit.key12"), this.$t("m.myprofit.key13"), this.$t("m.myprofit.key14"), this.$t("m.myprofit.key15"), this.$t("m.myprofit.key16")]
            }
        },
        handleSizeChange() { },
        handleCurrentChange() { },
        //导出excel
        exportExcel() {
            let _that = this
            require.ensure([], () => {
                const { export_json_to_excel } = require('../vendor/Export2Excel');
                const tHeader = this.recorddata;
                let filterVal = ''
                let list = ''
                //导出收益页
                if (_that.recordtype) {
                    filterVal = ['date', 'earningsMoney', 'dayHr', 'rewardType', 'status'];
                    list = _that.profit_data.subUserEarningsListInfo.array;
                }
                //导出支付页
                else if (!_that.recordtype) {
                    // 上面的index、nickName、name是tableData里对象的属性
                    filterVal = ['paytime', 'paytime', 'payMoney', 'toAddress', 'hash'];
                    list = _that.profit_data.subUserPayListInfo.array; //把data里的tableData存到list
                }


                const data = this.formatJson(filterVal, list);
                export_json_to_excel(tHeader, data, 'this_excel');
            })
        },
        //我的收益页
        getprofitdata() {
            let data = {
                "code": 200,
                "accountInfo": {
                    "needPayAndPayHistory": {
                        "waitPay": 0,
                        "paidTotal": 156.8
                    },
                    "todayEarningsAndAllEarnings": {
                        "todatEarnings": 0,
                        "allEarnings": 156.8
                    },
                    "subUserPayListInfo": {
                        "array": [
                            {
                                "paytime": 1561464247,
                                "payType": 2,
                                "payMoney": 46.56,
                                "toAddress": "0x90990117dbaac41df782cb712df4155c58e90a6c",
                                "hash": "0x8ea637cc21e90c1d1a854754300294ced15f18d03a46c2449b677a3fe071922f"
                            },
                            {
                                "paytime": 1560326643,
                                "payType": 2,
                                "payMoney": 57.04,
                                "toAddress": "0x90990117dbaac41df782cb712df4155c58e90a6c",
                                "hash": "0x064c99eac0297951384040069e4f6084c885922e5d053093998af5545941cf19"
                            },
                            {
                                "paytime": 1560240067,
                                "payType": 1,
                                "payMoney": 53.2,
                                "toAddress": "0x90990117dbaac41df782cb712df4155c58e90a6c",
                                "hash": "0x9adb7d0e7af7f03db9a2d4770e8cf07880b4e8155ed6a14213ace957400d13e0"
                            }
                        ],
                        "total": 3,
                        "totalPage": 1
                    },
                    "subUserEarningsListInfo": {
                        "array": [
                            {
                                "date": 20190827,
                                "waitpay": 0,
                                "paidTotal": 53.2,
                                "earningsMoney": "53.2",
                                "dayHr": "1000000",
                                "rewardType": 1,
                                "status": 1
                            },
                            {
                                "date": 20190824,
                                "waitpay": 0,
                                "paidTotal": 57.04,
                                "earningsMoney": "57.04",
                                "dayHr": "",
                                "rewardType": 1,
                                "status": 1
                            },
                            {
                                "date": 20190823,
                                "waitpay": 0,
                                "paidTotal": 17.46,
                                "earningsMoney": "17.46",
                                "dayHr": "",
                                "rewardType": 1,
                                "status": 1
                            },
                            {
                                "date": 20190822,
                                "waitpay": 0,
                                "paidTotal": 29.1,
                                "earningsMoney": "29.1",
                                "dayHr": "6000000",
                                "rewardType": 1,
                                "status": 1
                            }
                        ],
                        "total": 4,
                        "totalPage": 1
                    }
                },
                "msg": "success"
            }
            this.profit_data = data.accountInfo
            console.log(this.profit_data)

            // this.$ajax('post', '120.77.241.114:7011/v2/earningsAndPaymen', this.profit_params, function(data) {
            //     _that.wokerAlldata = JSON.parse(res).minerPow
            // }, function(error) {
            // })
        },
        //时间选择导出类型
        timeprofitdata(index = 1) {
            this.profit_params.type = index
            this.derive_top=this.derive_item[index]
            console.log(index)
            let _that = this
            if (_that.recordtype) {
                let data = {
                    "code": 200,
                    "allEarningsInfo": [
                        {
                            "waitpay": 0,
                            "paidTotal": 29.1,
                            "rewardType": 1,
                            "status": 1,
                            "date": 20190822,
                            "day": "6000000",
                            "username": "lilinskt1",
                            "p_name": "lilinskt1"
                        },
                        {
                            "waitpay": 0,
                            "paidTotal": 17.46,
                            "rewardType": 1,
                            "status": 1,
                            "date": 20190823,
                            "day": "",
                            "username": "lilinskt1",
                            "p_name": "lilinskt1"
                        },
                        {
                            "waitpay": 0,
                            "paidTotal": 57.04,
                            "rewardType": 1,
                            "status": 1,
                            "date": 20190824,
                            "day": "",
                            "username": "lilinskt1",
                            "p_name": "lilinskt1"
                        },
                        {
                            "waitpay": 0,
                            "paidTotal": 53.2,
                            "rewardType": 1,
                            "status": 1,
                            "date": 20190827,
                            "day": "1000000",
                            "username": "lilinskt1",
                            "p_name": "lilinskt1"
                        }
                    ]
                }
                _that.tableData = data.allEarningsInfo
                console.log(_that.tableData)
                // this.$ajax('post', '120.77.241.114:7011/v2/earningsAndPaymen', this.profit_params, function(data) {
                //     _that.wokerAlldata = JSON.parse(res).minerPow
                // }, function(error) {
                // })
            }
            if (!_that.recordtype) {
                let data = {
                    "code": 200,
                    "allEarningsInfo": [
                        {
                            "hash": "0x8ea637cc21e90c1d1a854754300294ced15f18d03a46c2449b677a3fe071922f",
                            "payType": 2,
                            "payMoney": 46.56,
                            "toAddress": "0x90990117dbaac41df782cb712df4155c58e90a6c",
                            "paytime": 1561464247,
                            "username": "lilinskt1"
                        },
                        {
                            "hash": "0x064c99eac0297951384040069e4f6084c885922e5d053093998af5545941cf19",
                            "payType": 2,
                            "payMoney": 57.04,
                            "toAddress": "0x90990117dbaac41df782cb712df4155c58e90a6c",
                            "paytime": 1560326643,
                            "username": "lilinskt1"
                        },
                        {
                            "hash": "0x9adb7d0e7af7f03db9a2d4770e8cf07880b4e8155ed6a14213ace957400d13e0",
                            "payType": 1,
                            "payMoney": 53.2,
                            "toAddress": "0x90990117dbaac41df782cb712df4155c58e90a6c",
                            "paytime": 1560240067,
                            "username": "lilinskt1"
                        }
                    ]
                }
                  _that.tableData = data.allEarningsInfo
                // this.$ajax('post', '120.77.241.114:7011/v2/exportPayInfo', this.profit_params, function(data) {
                //     _that.wokerAlldata = JSON.parse(res).minerPow
                // }, function(error) {
                // })         
            }
        },
        formatJson(filterVal, jsonData) {
            return jsonData.map(v => filterVal.map(j => v[j]))
        },
    }
}
</script>
<style scoped>
.content_box {
    width: 6rem;
    margin: 0 auto;
}

.mylcted_top {
    height: 1.85rem;
    background: url('../assets/img/myltc_bg.jpg') no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
    color: #fff;
}

.color_3 {
    color: red;
}

.color_4 {
    color: green
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

.flex_b {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.flex_a {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.flex_C {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
}

.flex_b_c {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.flex_f {
    display: flex;
    justify-content: flex-start;
    align-items: center
}


.record {
    margin-bottom: 0.1rem;
}

.record_item {
    width: 0.5rem;
    height: 0.25rem;
    border-bottom: 1px solid rgba(228, 228, 228, 1);
    line-height: 0.25rem;
    color: rgba(51, 51, 51, 1);
    box-sizing: border-box;
}

.record_item:hover {
    color: rgba(46, 115, 232, 1);
}

.record_item_active {
    color: rgba(46, 115, 232, 1);
    border-bottom: 3px solid rgba(46, 115, 232, 1);
}

.record_main {
    width: 6rem;
    text-align: left;
}

.record_main_item {
    height: 0.25rem;
    line-height: 0.25rem;
    padding-right: 0.1rem;
    text-overflow: ellipsis;
    padding-left: 0.1rem;
    text-align: center;
}

.record_head {
    background-color: #eef1fc;
}

.record_main_li {
    flex: 1;
    text-overflow: ellipsis;
}

.record_page {
    margin-top: 0.4rem;
    display: flex;
    justify-content: flex-end;
}

.record_r_item {
    height: 0.15rem;
    line-height: 0.15rem;
    margin-left: 0.1rem;
    border-radius: 4px;
    padding: 0 0.05rem;
    border: solid 1px rgba(220, 220, 220, 1);
}

.mymill_bottom {
    margin-top: 0.22rem;
}

.record_r_item:hover {
    border: solid 1px rgba(46, 115, 232, 1);
    color: rgba(46, 115, 232, 1);
}

.all {
    width: 0.4rem;
}

.myprofit_head {
    margin-top: 0px;
}

.myprofit_slide {
    padding: 0 0.1rem;
}

.nprecord {
    width: 100%;
    height: 0.9rem;
    line-height: 0.9rem;
    color: #999;
    text-align: center;
    font-size: 0.2rem;
}
</style>




