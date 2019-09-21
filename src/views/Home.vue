<template>
  <div id="home" style="height:100%">
    <el-container style="height: 100%;">
      <el-aside width="200" style="background-color: rgb(238, 241, 246)">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <div style="width:200px" class="logodiv">
            <img src="../assets/favicon.jpg" />
            <b v-show="zxwy">智学无忧教育</b>
          </div>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span v-show="zxwy">在线测试</span>
            </template>
            <el-menu-item-group v-for="(t,index) in text" :key="index">
              <el-menu-item :index="t.paths">{{t.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span v-show="zxwy">基础数据</span>
            </template>
            <el-menu-item-group v-for="(b,index) in base" :key="index">
              <el-menu-item :index="b.paths">{{b.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px; padding-left:0">
          <!-- 收缩键 -->
          <span class="rollback" @click.prevent="collapse">
            <i class="el-icon-caret-left" v-show="zxwy"></i>
            <i class="el-icon-caret-right" v-show="!zxwy"></i>
          </span>
          <!-- 上导航 -->
          <!-- <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
            <el-tab-pane
              v-for="(item) in editableTabs"
              :key="item.name"
              :label="item.title"
              :name="item.name"
            >{{item.content}}</el-tab-pane>
          </el-tabs> -->
          <!-- 个人 -->
          <div class="personage">
            <el-dropdown style="margin-right:20px">
              <i class="el-icon-s-custom" style="margin-right:10px"></i>退出
            </el-dropdown>
            <span>
              <el-avatar icon="el-icon-user-solid" style="vertical-align: middle;"></el-avatar>
            </span>
          </div>
        </el-header>

        <!-- <el-main>
          <router-view />
        </el-main>-->
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      test: "200px",
      isCollapse: false,
      zxwy: true,
      base: [
        { name: "班级管理", paths: "ClassManage" },
        { name: "修改密码", paths: "ModifyPassword" },
        { name: "学生管理", paths: "StudentManage" },
        { name: "老师管理", paths: "TeacherManage" }
      ],
      text: [
        { name: "安排测试", paths: "MakeTestPaper" },
        { name: "试卷管理", paths: "TestPaperManage" },
        { name: "测试成绩", paths: "TestResult" },
        { name: "老师出卷", paths: "testSetter" },
        { name: "批阅试卷", paths: "ViewTestPaper" }
      ]
    };
  },
  methods: {
    collapse() {
      if (!this.isCollapse) {
        this.zxwy = false;
      } else {
        this.zxwy = true;
      }
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>

<style>
.el-header {
  /* background-color: #b3c0d1; */
  width: 100%;
  border-bottom: 1px solid #ccc;
  color: #333;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
}

.el-aside {
  color: #333;
}
.logodiv {
  font-size: 17px;
  height: 60px;
  /* width: 200px; */
  vertical-align: middle;
  color: #008080;
  background-color: yellow;
}
.logodiv img {
  width: 40px;
  vertical-align: middle;
  margin: 5px;
  padding: 3px;
  border: 1px solid #07acac;
  border-radius: 50%;
  box-shadow: 0 0 10px #008080;
}
.rollback {
  color: white;
  font-size: 30px;
  width: 30px;
  float: left;
  background-color: green;
  display: inline-block;
}
.el-menu {
  border: 0 !important;
}
.personage {
  flex: none;
}
</style>
