<template>
  <div>
    <h1>Todoリスト</h1>
    <!-- todo input form -->
    <form @submit.prevent="addTodo()">
      <el-input placeholder="todo" v-model="todo"></el-input>
    </form>
    <el-row :gutter="12">
      <!-- todo display area -->
      <TodoItem
        v-for="(todo, index) in todos"
        :todo="todo"
        :index="index"
        :removeTodo="removeTodo"
        :key="index"
      />
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
  </div>
</template>

<script>
import axios from 'axios'
import TodoItem from '@/components/TodoItem.vue'

const client = axios.create({
  baseURL: `${import.meta.env.VITE_APP_GITHUB_ENDPOINT}`,
  headers: {
    'Authorization': `token ${import.meta.env.VITE_APP_GITHUB_TOKEN}`,
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'application/json'
  }
})

export default {
  name: 'TodosIssues',
  components: {
    TodoItem
  },
  data() {
    return {
      todo: '',
      todos: [],
      issues: []
    }
  },
  methods: {
    addTodo() {
      this.todos.push(this.todo)
      this.todo = ''
    },
    removeTodo(index) {
      this.todos.splice(index, 1)
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
    },
    getIssues() {
      client.get('issues').then((res) => {
        this.issues = res.data
      })
    }
  },
  created() {
    this.getIssues()
  }
}
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  text-align: center;
}
</style>
