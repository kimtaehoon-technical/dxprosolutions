<template>
  <div class="work-report-page">
    <h2 class="txtNormal">作業報告</h2>

    <!-- 월별 보고서 테이블 -->
    <div class="reportDetail">
      <table id="dataTable">
        <thead>
          <tr>
            <th class="reportDetail__head_01" rowspan="2">報告月</th>
            <th colspan="2">出勤日数</th>
            <th rowspan="2">休憩時間</th>
            <th rowspan="2">実務時間</th>
            <th rowspan="2" class="reportDetail__head_02">ステータス</th>
          </tr>
          <tr>
            <th>平日</th>
            <th>休日</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(report, index) in workReports"
            :key="index"
            @click="showDetails(report)"
            :class="{'holiday-row': isHoliday(report)}"
            class="report-row"
          >
            <td>
              <a href="#" @click.prevent="editReport(report)">{{ report.month }}</a>
            </td>
            <td>{{ report.weekdays }}</td>
            <td>{{ report.holidays }}</td>
            <td>{{ report.breakTime }}</td>
            <td>{{ report.workTime }}</td>
            <td>
              <span
                :class="{
                  'status-complete': report.status === '完了',
                  'status-not-reported': report.status === '未報告',
                }"
              >
                {{ report.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 선택한 월의 일별 상세 정보 -->
    <div v-if="selectedReport" class="report-details">
      <h3>{{ selectedReport.month }} 月の日別作業詳細</h3>
      <table>
        <thead>
          <tr>
            <th>日付</th>
            <th>出勤状況</th>
            <th>業務開始時間</th>
            <th>業務終了時間</th>
            <th>休憩時間</th>
            <th>実務時間</th>
            <th>備考</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(day, index) in selectedReport.dailyData" :key="index" :class="{'holiday-row': isHoliday(day)}"> <!-- 휴일 스타일 적용 -->
            <td>
              {{ day.date }} ({{ day.weekday }})
            </td>
            <td>
              <select v-model="day.status">
                <option value="出勤">出勤</option>
                <option value="休み">休み</option>
                <option value="代休">代休</option>
                <option value="欠勤">欠勤</option>
                <option value="夏季休暇">夏季休暇</option>
                <option value="年末年始休暇">年末年始休暇</option>
              </select>
            </td>
            <td>
              <input type="time" v-model="day.startTime" />
            </td>
            <td>
              <input type="time" v-model="day.endTime" />
            </td>
            <td>
              <input type="text" v-model="day.breakTime" />
            </td>
            <td>
              <input type="text" v-model="day.workTime" />
            </td>
            <td>
              <input type="text" v-model="day.biko" />
            </td>
            <td>
              <button @click="saveDay(index)">保存</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button class="cancelButton" @click="closeDetails">閉じる</button>
      &nbsp;
      <!-- 확정 버튼 추가 -->
      <button class="confirmButton" @click="confirmAction">確定</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 월별 데이터
      workReports: [
        this.generateMonthlyReport("2024/12"),
        this.generateMonthlyReport("2024/11"),
        this.generateMonthlyReport("2024/10"),
      ],
      // 선택한 보고서 데이터
      selectedReport: null,
    };
  },
  methods: {
    // 선택한 월의 일 수에 따라 데이터를 생성
    generateMonthlyReport(month) {
    const [year, monthIndex] = month.split("/").map(Number);
    const daysInMonth = new Date(year, monthIndex, 0).getDate();
    const dailyData = Array.from({ length: daysInMonth }, (_, i) => {
      const date = new Date(year, monthIndex - 1, i + 1);
      const weekday = this.getWeekdayName(date.getDay()); // 요일 이름 구하기
      const isWeekend = date.getDay() === 0 || date.getDay() === 6; // 토요일 또는 일요일 확인

      return {
        date: `${month}/${String(i + 1).padStart(2, "0")}`,
        weekday, // 요일 추가
        status: isWeekend ? "" : "出勤", // 주말에는 기본값 없이 빈 값
        startTime: isWeekend ? "" : "09:00", // 주말에는 기본값 없이 빈 값
        endTime: isWeekend ? "" : "18:00", // 주말에는 기본값 없이 빈 값
        breakTime: isWeekend ? "" : "01:00", // 주말에는 기본값 없이 빈 값
        workTime: isWeekend ? "" : "08:00", // 주말에는 기본값 없이 빈 값
      };
    });

    return {
      month,
      weekdays: 0,
      holidays: 0,
      breakTime: "00:00",
      workTime: "00:00",
      status: "未報告",
      dailyData,
    };
  },

    // 요일 이름을 반환하는 메서드
    getWeekdayName(day) {
      const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
      return weekdays[day];
    },

    // 주말 및 공휴일 확인
    isHoliday(day) {
      const dayOfWeek = new Date(day.date).getDay();
      // 주말 (일요일 또는 토요일)이나 공휴일 상태인 경우 휴일로 처리
      const holidayStatuses = ["夏季休暇", "年末年始休暇"]; // 공휴일 목록 (예시)
      return dayOfWeek === 0 || dayOfWeek === 6 || holidayStatuses.includes(day.status);
    },

    // 보고서 상세 정보 표시
    showDetails(report) {
      this.selectedReport = { ...report };
    },
    // 보고서 편집
    editReport(report) {
      this.selectedReport = report;
    },
    // 일별 데이터 저장
    saveDay(index) {
      const day = this.selectedReport.dailyData[index];
      alert(
        `${day.date} の作業が保存されました。\n業務開始時間: ${day.startTime}\n業務終了時間: ${day.endTime}`
      );
    },
    // 상세 정보 닫기
    closeDetails() {
      this.selectedReport = null;
    },
    // 시간(분)을 HH:mm 형식으로 변환
    minutesToTime(minutes) {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
    },
    // 시간(HH:mm)을 분으로 변환
    timeToMinutes(time) {
      const [hours, minutes] = time.split(":").map(Number);
      return hours * 60 + minutes;
    },
    confirmAction() {
      const confirmed = confirm("確定ボタンを押すと取り消しできません。確定しますか？");
      if (confirmed) {
        const dailyData = this.selectedReport.dailyData;

        let weekdays = 0;
        let holidays = 0;
        let totalBreakTime = 0;
        let totalWorkTime = 0;

        dailyData.forEach((day) => {
          const dayOfWeek = new Date(day.date).getDay();
          if (day.status === "出勤") {
            if (dayOfWeek === 0 || dayOfWeek === 6) {
              holidays++;
            } else {
              weekdays++;
            }
          }

          totalBreakTime += this.timeToMinutes(day.breakTime);
          totalWorkTime += this.timeToMinutes(day.workTime);
        });

        this.selectedReport.weekdays = weekdays;
        this.selectedReport.holidays = holidays;
        this.selectedReport.breakTime = this.minutesToTime(totalBreakTime);
        this.selectedReport.workTime = this.minutesToTime(totalWorkTime);

        this.selectedReport.status = "確定完了";
        alert(
          `確定が完了しました。\n平日: ${weekdays} 日\n休日: ${holidays} 日\n休憩時間: ${this.selectedReport.breakTime}\n実務時間: ${this.selectedReport.workTime}`
        );

        const reportIndex = this.workReports.findIndex(
          (report) => report.month === this.selectedReport.month
        );
        if (reportIndex !== -1) {
          this.workReports[reportIndex] = {
            ...this.selectedReport,
            status: "承認待ち",
          };
        }

        this.closeDetails();
      }
    },
  },
};
</script>

<style scoped>
.work-report-page {
  padding: 20px;
}

.holiday-row {
  background-color: #f8d7da; /* 붉은 배경색 */
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  table-layout: fixed; /* 각 열의 너비를 고정 */
}

th,
td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  word-wrap: break-word; /* 긴 텍스트가 넘치지 않게 처리 */
}

.report-row {
  cursor: pointer;
}

.status-complete {
  color: green;
}

.status-not-reported {
  color: red;
}

.report-details {
  background: #f9f9f9;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

button {
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.confirmButton,
.cancelButton
{
 width: 80px;  
}

input[type="text"] {
  width: 80%; /* 너비를 80%로 설정 */
  padding: 5px; /* 패딩을 줄임 */
  font-size: 14px; /* 글씨 크기를 줄임 */
  box-sizing: border-box; /* 패딩과 테두리가 포함된 크기를 유지 */
}

td:nth-child(7) input[type="text"] {
  width: 100%; /* 備考欄の入力フィールドをテーブルセルいっぱいに広げる */
}

th:nth-child(7),
td:nth-child(7) {
  width: 20%; /* 備考欄の列幅を20%に設定 */
}

/* 모바일 화면에서 테이블을 스크롤 없이 한 화면에 맞추기 */
@media screen and (max-width: 768px) {
  table {
    width: 100%;
    display: block;
    overflow-x: auto; /* 모바일에서 테이블이 가로 스크롤되지 않도록 */
    -webkit-overflow-scrolling: touch; /* iOS에서 자연스러운 스크롤 지원 */
  }

  th,
  td {
    white-space: nowrap; /* 텍스트가 줄 바꿈되지 않도록 설정 */
    overflow: hidden;
    text-overflow: ellipsis; /* 텍스트가 넘치면 '...'로 처리 */
  }

  .report-details {
    padding: 15px; /* 모바일에서 패딩을 조금 줄임 */
  }
}
</style>
