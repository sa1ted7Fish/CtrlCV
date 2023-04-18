<template>
  <div class="app-container line">
    <el-card>
      <template #header>
        <div class="card-header">
          {{ lineChart1.title }}
        </div>
      </template>
      <div :id="lineChart1.id" :style="style">

      </div>
    </el-card>
  </div>
</template>

<script setup name="Line">
import { lineChart1 } from "@/views/ctrlcv/echarts/line/settings";
import {onMounted, ref} from "vue";

const { proxy } = getCurrentInstance()
const style = ref({
  width: lineChart1.size.width,
  height: lineChart1.size.height
})

function draw() {
  const chartDom = document.getElementById(lineChart1.id);
  const width = chartDom.clientWidth;
  const height = chartDom.clientHeight;
  const myChart = proxy.$echarts.init(chartDom);
  const option = lineChart1.option;

  myChart.resize({
    width: width,
    height: height,
  })
  option && myChart.setOption(option);
}

onMounted(() => {
  draw()
})
</script>

<style scoped>
.line {
  display: flex;
}
</style>