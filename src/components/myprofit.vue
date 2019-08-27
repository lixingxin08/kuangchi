<template>
    <div class="myMill">
        <!--收益头部-->
        <div class="mylcted_top flex_a">
            <div class="content_box">
                <div class="flex_a">
                    <div v-for="(item,index) in profit_top" :key="index" class="flex_C mylcted_top_main">
                        <span class="mylcted_top_item">{{item}}</span>
                        <span class="mylcted_top_item font_b">475.55TH/s</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="content_box">
            <div class="mymill_bottom">
                <div class="record flex_b">
                    <div class="record_l flex_f">
                        <div class="record_item" @click="change_record(1)" :class="recordtype?'':'record_item_active'"> {{$t("m.myprofit.key5")}}</div>
                        <div class="record_item" @click="change_record(2)" :class="recordtype?'record_item_active':''">{{$t("m.myprofit.key6")}}</div>
                    </div>
                    <div class="record_r flex_f">
                        <div class="record_r_item">
                            <el-dropdown trigger="click" placement="bottom">
                                <span class="el-dropdown-link">
                                    <span class="flex_b all">
                                        <span>{{$t("m.myprofit.key17")}}</span>
                                        <i class="el-icon-arrow-down el-icon--right"></i>
                                    </span>
                                </span>
                                <el-dropdown-menu slot="dropdown" class="myprofit_head">
                                    <el-dropdown-item>
                                        <div class="myprofit_slide">{{$t("m.myprofit.key21")}}</div>
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <div class="myprofit_slide">{{$t("m.myprofit.key22")}}</div>
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <div class="myprofit_slide">{{$t("m.myprofit.key17")}}</div>
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
                    <div class="record_main">
                        <ul class="flex_b record_main_item record_head">
                            <li v-for="item in recorddata" :key="item" class="record_main_li">{{item}}</li>
                        </ul>
                        <ul class="flex_b record_main_item">
                            <li v-for="item in recorddata" :key="item" class="record_main_li">{{item}}</li>
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
            recordtype: false,
            recorddata: [],
            totalSize: 0,
            export_name: '',
            haverecord: true,
            profit_top: [this.$t("m.myprofit.key1"), this.$t("m.myprofit.key2"), this.$t("m.myprofit.key3"), this.$t("m.myprofit.key4")],
            tableData: [
                { 'index': '0', "nickName": "沙滩搁浅我们的旧时光", "name": "小明" , "name": "小明" , "name": "小明" },
                { 'index': '1', "nickName": "女人天生高贵", "name": "小红","name": "小红","name": "小红" },
                { 'index': '2', "nickName": "海是彩色的灰尘", "name": "小兰","name": "小红","name": "小红" }
            ]
        }
    },
    created() {
        this.change_record(1)
    },
    methods: {
        change_record(index) {
            if (index == 1) {
                this.recordtype = false;
                this.export_name = this.$t("m.myprofit.key18")
                this.recorddata = [this.$t("m.myprofit.key7"), this.$t("m.myprofit.key8"), this.$t("m.myprofit.key9"), this.$t("m.myprofit.key10"),this.$t("m.myprofit.key11")]
            } else if (index == 2) {
                this.recordtype = true;
                this.export_name = this.$t("m.myprofit.key19")
                this.recorddata = [this.$t("m.myprofit.key12"), this.$t("m.myprofit.key13"), this.$t("m.myprofit.key14"), this.$t("m.myprofit.key15"),this.$t("m.myprofit.key16")]
            }
        },
        handleSizeChange() { },
        handleCurrentChange() { },
        //导出excel
        exportExcel() {
            require.ensure([], () => {
                const { export_json_to_excel } = require('../vendor/Export2Excel');
                const tHeader = this.recorddata;
                // 上面设置Excel的表格第一行的标题
                const filterVal = ['index', 'nickName', 'name', 'name', 'name'];
                // 上面的index、nickName、name是tableData里对象的属性
                const list = this.tableData; //把data里的tableData存到list
                const data = this.formatJson(filterVal, list);
                export_json_to_excel(tHeader, data, 'this_excel');
            })
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
    padding-right:0.1rem;
    text-overflow: ellipsis;
    padding-left: 0.1rem;
    text-align: center;
}

.record_head {
    background-color: #eef1fc;
}

.record_main_li {
    text-align: left;
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
.mymill_bottom{
    margin-top: 0.22rem;
}
.record_r_item:hover {
    border: solid 1px rgba(46, 115, 232, 1);
    color: rgba(46, 115, 232, 1);
}
.all{
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




