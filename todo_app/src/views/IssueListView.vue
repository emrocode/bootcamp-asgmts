<template>
  <main>
    <h1>Issueリスト</h1>
    <el-button @click="getIssues()" type="success">Issue取得</el-button>
    <p v-show="loading" style="margin-top: 25px;">Loading...</p>
    <el-row :gutter="12" style="margin-top: 25px">
      <!-- Issue Display Area -->
      <el-col :span="12" v-for="(issue, index) in issues" :key="issue.id">
        <el-card class="box-card" shadow="hover" style="margin: 5px 0">
          <el-row :gutter="12">
            <el-col :span="21">{{ issue.title }}</el-col>
            <el-col :span="3">
              <el-button @click="closeIssue(index)" type="success" circle>
                <el-icon><Check /></el-icon>
              </el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </main>
</template>

<script>
import axios from 'axios'

const client = axios.create({
  baseURL: `${import.meta.env.VITE_APP_GITHUB_ENDPOINT}`,
  headers: {
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'application/json'
  }
})

export default {
  name: 'IssueList',
  data() {
    return {
      issues: [],
      loading: false
    }
  },
  // 以下を追加
  methods: {
    getIssues() {
      this.loading = true
      // client定数からget()を呼び出し
      client
        .get('/issues') //--4
        .then((res) => {
          setTimeout(() => {
            this.issues = res.data
            this.loading = false
          }, 2000)
        })
    }
  }
}
</script>

<style scoped>
main {
  text-align: center;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  text-align: center;
}
</style>
