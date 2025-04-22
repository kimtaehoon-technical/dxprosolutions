<template>
  <div class="work-report-page">
    <h1>{{ displayedUserName }} さんの作業報告</h1>
    <div class="work-report-container">
      <h2>月別作業時間</h2>
      <table>
        <thead>
          <tr>
            <th>月</th>
            <th>作業時間</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(hours, month) in monthlyWorkHours" :key="month">
            <td>{{ month }}</td>
            <td>{{ hours }} 時間</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkReportPage',
  data() {
    return {
      username: '',
      monthlyWorkHours: {}, // 월별 작업시간 저장
    };
  },
  computed: {
    displayedUserName() {
      const nameMap = {
        'info@dxpro-sol.com': '管理者',
        'kim_taehoon@dxpro-sol.com': '金 兌訓',
        'otomo_kento@dxpro-sol.com': '大友 健人',
        'choi_kyungjun@dxpro-sol.com': 'チェ ギョンジュン',
      };
      return nameMap[this.username] || this.username; // 이름 매핑
    },
  },
  async mounted() {
    console.log("Component Mounted");
    this.username = sessionStorage.getItem('username'); // sessionStorage에서 username 가져오기
    if (this.username) {
      console.log("Username:", this.username);
      await this.fetchWorkHours(); // workReports 데이터를 가져옴
    } else {
      console.log("Username not found in sessionStorage");
    }
  },
  methods: {
    async fetchWorkHours() {
      try {
        const response = await fetch('https://dxpro.onrender.com/workReports');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(response);
        // 월별로 작업시간을 집계
        const groupedWorkHours = this.aggregateByMonth(data);
        
        // 집계된 작업시간을 출력
        console.log("Grouped Work Hours:", groupedWorkHours);
        this.monthlyWorkHours = groupedWorkHours;
      } catch (error) {
        console.error('Error fetching work hours:', error);
      }
    },
    aggregateByMonth(data) {
      const grouped = {};
      data.forEach((record) => {
        const month = record.date.slice(0, 6); // YYYYMM 형식으로 변환
        if (!grouped[month]) grouped[month] = 0;
        grouped[month] += record.workHours; // 하루 작업시간을 누적
      });
      return grouped;
    },
  },
};
</script>

<style scoped>
.work-report-page {
  padding: 20px;
}
.work-report-container table {
  width: 100%;
  border-collapse: collapse;
}
.work-report-container th,
.work-report-container td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
}
</style>
