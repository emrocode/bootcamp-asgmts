<template>
  <el-col :span="12">
    <el-card class="box-card" shadow="hover" style="margin: 5px 0">
      <el-row :gutter="12">
        <el-col :span="21">{{ todo }}</el-col>
        <el-col :span="3">
          <el-button @click="fn(id)" type="success" circle>
            <el-icon><Check /></el-icon>
          </el-button>
        </el-col>
      </el-row>
    </el-card>
  </el-col>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: String,
    id: Number,
    fn: Function
  }
}
</script>
