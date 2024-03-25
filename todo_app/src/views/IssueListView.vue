<template>
  <main>
    <div class="header">
      <h1>Issueリスト</h1>
      <el-button @click="getIssues()" type="success">Issue取得</el-button>
      <p v-show="loading" style="margin-top: 25px">Loading...</p>
    </div>
    <el-row :gutter="12" style="margin-top: 25px">
      <!-- Issue Display Area -->
      <TodoItem
        v-for="(issue, index) in issues"
        :todo="issue.title"
        :id="index"
        :fn="closeIssue"
        :key="index"
      />
    </el-row>
  </main>
</template>

<script>
import axios from 'axios'
import TodoItem from '@/components/TodoItem.vue'

const client = axios.create({
  baseURL: `${import.meta.env.VITE_APP_GITHUB_ENDPOINT}`,
  headers: {
    Authorization: `token ${import.meta.env.VITE_APP_GITHUB_TOKEN}`,
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'application/json'
  }
})

export default {
  name: 'IssueList',
  components: {
    TodoItem
  },
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
    },
    closeIssue(index) {
      const target = this.issues[index]
      client
        .patch(`/issues/${target.number}`, {
          state: 'closed'
        })
        .then(() => {
          this.issues.splice(index, 1)
        })
    }
  }
}
</script>

<style scoped>
.header {
  text-align: center;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  text-align: center;
}
</style>
