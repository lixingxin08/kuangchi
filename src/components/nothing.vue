<template>
    <div class="nothing center_box">
        <div class="search_box">

            <div class="bottom-box-text">
                <div class="bottom-box-text_l">
                    <div class="block_box">
                    </div>
                    <span> {{$t("m.home.key2")}}</span>
                </div>
                <div>
                    <div class="go_search">
                        <input type="text" class="search_inp" :placeholder="placehoder" v-model="searchdata" @keydown="btKeyUp" @keyup.enter="no_tosearch()"  @focus="InputStyleFun()" @blur="InputStyleBlur()">
                        <span class="el-icon-search search" @click="no_tosearch()" :style="InputIconStyle"></span>
                    </div>
                </div>
            </div>

        </div>
        <div class="block_detail_top">
            {{$t("m.home.key9")}}0{{$t("m.home.key10")}}:{{nosearch_data}}
        </div>
        <div class="nothing_c">
            <div>  <img src="../assets/img/nothing.png" alt="">  </div>
            <div class="nothing_cb"> {{$t("m.home.key30")}}</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            nosearch_data:localStorage.getItem('search_data'),
            searchdata:'',
            placehoder: this.$t("m.home.key8"),
            InputStyle:{
                border: '1px solid #e5e5e5;'
            },
            InputIconStyle:{
                color: "#737682;"
            },
            timer:""
        }
    },
    methods: {
        InputStyleFun(){  
            this.InputStyle={ 
                border: '1px solid rgb(87, 20, 209)'
            };
            this.InputIconStyle={ 
                color: 'rgb(87, 20, 209)'
            };
            },
        InputStyleBlur(){

            this.InputStyle={ 
                border: '1px solid #e5e5e5'
            };
            this.InputIconStyle={ 
            color: "#737682"
            };
        },
        no_tosearch(){
            let _that=this
            if (this.searchdata=='') {
                localStorage.removeItem('search_data')
                           _that.$router.push({ name: 'home'})        
            }else{    
          localStorage.setItem('search_data',this.searchdata)
             this.$router.push({ name: 'homeitem'})
            }
        
        }
    },
beforeDestroy() { 
     if (this.searchdata=='') {
          localStorage.removeItem('search_data')
     }
        this.no_tosearch()
        clearTimeout(this.timer)
        this.timer=null
},
}
</script>
<style scoped>
.center_box {
    width: 6rem;
    margin: 0 auto;
}

.search_box {
    margin-top: 0.19rem;
    margin-bottom: 0.11rem;
}

.go_search {
    width: 1.9rem;
    height: 0.18rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #e5e5e5;
    border-radius: 0.09rem;
}

.search {
    width: 0.4rem;
    height: 0.18rem;
    line-height: 0.18rem;
    padding-right: 0.09rem;
    text-align: right;
    font-size: 0.08rem;
}
.go_search:hover{
  border: 1px solid #2e73e8!important;
}
.go_search:hover .search{
    width: 0.4rem;
    height: 0.18rem;
    line-height: 0.18rem;
    padding-right: 0.09rem;
    text-align: right;
    font-size: 0.08rem;  
    color: #2e73e8!important;
}
.search_inp {
    width: 1.5rem;
    font-size: 14px;
    border: none;
    margin-left: 0.1rem;
    font-weight: normal;
}

.block_detail_top {
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 19px;
    letter-spacing: 0px;
    color: #666666;
    margin-bottom: 0.13rem
}

.nothing_c {
    width: 100%;
    height: 2rem;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #666666;
    text-align: center;
}

.block_box {
    width: 0.05rem;
    height: 0.05rem;
    background-color: #2e73e8;
    display: inline-block;
    margin-right: 0.05rem;
}

.bottom-box-text {
    font-size: 0.08rem;
    font-weight: bold;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.bottom-box-text_l {
    font-size: 0.08rem;
    font-weight: normal;
    font-stretch: normal;
    color: #333333;
}
.block_detail_top{
    text-align: left;
}
.nothing_c{
    padding-top: 0.5rem;
}
.nothing_cb{
    margin-top: 0.1rem;
    font-size: 14px;
    color: #666;
}
</style>

