<template>
    <div class="go_search">
        <input type="text" class="search_inp" :placeholder="placehoder" v-model="search_data">
        <span class="el-icon-search search" @click="tosearch()"></span>
    </div>
</template>
