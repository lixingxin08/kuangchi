<template>
    <div>
        <div class="sevices center_box">
            <div class="sevices_title"> <p> {{$t("m.register.key29")}}</p>   </div>
         <p> {{$t("m.register.key30")}}</p>   
        <p> {{$t("m.register.key31")}}</p>
        <p> {{$t("m.register.key32")}}</p>
        <p> {{$t("m.register.key33")}}</p>
        <p> {{$t("m.register.key34")}}</p>
        <p> {{$t("m.register.key35")}}</p>
        <p> {{$t("m.register.key36")}}</p>
        <p> {{$t("m.register.key37")}}</p>
        <p> {{$t("m.register.key38")}}</p>
        <p> {{$t("m.register.key39")}}</p>
        <p> {{$t("m.register.key40")}}</p>
        <p> {{$t("m.register.key41")}}</p>
        <p> {{$t("m.register.key42")}}</p>
        <p> {{$t("m.register.key43")}}</p>
        <p> {{$t("m.register.key44")}}</p>
        <p> {{$t("m.register.key45")}}</p>
        <p> {{$t("m.register.key46")}}</p>
        <p> {{$t("m.register.key47")}}</p>
        <p> {{$t("m.register.key48")}}</p>
        <p> {{$t("m.register.key49")}}</p>
        <p> {{$t("m.register.key50")}}</p>
        <p> {{$t("m.register.key51")}}</p>
        <p> {{$t("m.register.key52")}}</p>
        <p> {{$t("m.register.key53")}}</p>
        <p> {{$t("m.register.key54")}}</p>
        <p> {{$t("m.register.key55")}}</p>
        <p> {{$t("m.register.key56")}}</p>
        <p> {{$t("m.register.key57")}}</p>
        <p> {{$t("m.register.key58")}}</p>
        <p> {{$t("m.register.key60")}}</p>
        <p> {{$t("m.register.key61")}}</p>
        <p> {{$t("m.register.key62")}}</p>
        <p> {{$t("m.register.key63")}}</p>
        <p> {{$t("m.register.key64")}}</p>
        <p> {{$t("m.register.key65")}}</p>
        <p> {{$t("m.register.key66")}}</p>
        <p> {{$t("m.register.key67")}}</p>
        <p> {{$t("m.register.key68")}}</p>
        <p> {{$t("m.register.key69")}}</p>
        <p> {{$t("m.register.key70")}}</p>
        <p> {{$t("m.register.key71")}}</p>
        <p> {{$t("m.register.key72")}}</p>
        <p> {{$t("m.register.key73")}}</p>
        <p> {{$t("m.register.key74")}}</p>
        <p> {{$t("m.register.key75")}}</p>
        <p> {{$t("m.register.key76")}}</p>
        <p> {{$t("m.register.key77")}}</p>
        <p> {{$t("m.register.key78")}}</p>
        <p> {{$t("m.register.key79")}}</p>
        <p> {{$t("m.register.key80")}}</p>
        <p> {{$t("m.register.key81")}}</p>
        <p> {{$t("m.register.key82")}}</p>
        <p> {{$t("m.register.key83")}}</p>
        <div class="flex_a sevices_foo">  <div class="sevices_foo_item">  <router-link :to="{name:'register',query:{agree:'agree'}}">同意</router-link>  </div>   <div class="sevices_foo_item"> <router-link to="register">不同意</router-link> </div> </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        agree(){

        }
    }
}
</script>

<style scoped>
.center_box{
    width: 6rem;
    margin: 0 auto;
}
    .sevices{
        text-align: left;
    }
 .sevices_title{
     margin-top: 0.15rem;
     margin-bottom: 0.1rem;
     text-align: center;
     font-size: 20px;
     font-weight: 700
 }  
 .flex_a{
     display: flex;
     justify-content: space-around;
     align-items: center;
 }
 .sevices_foo{
     margin-top: 0.1rem;
     margin-bottom: 0.2rem;
 } 
 .sevices_foo_item{
     width: 0.3rem;
     height: 0.25rem;
 }
</style>