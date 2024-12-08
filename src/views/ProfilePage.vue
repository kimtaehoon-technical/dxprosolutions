<template>
  <div class="profile-page">
    <h1 class="page-title">プロフィール</h1>

    <!-- 個人情報 섹션 -->
    <section class="profile-section personal-info">
      <h2 class="section-title">個人情報</h2>
      <div class="info-item" v-for="(value, key) in personalInfo" :key="key">
        <label>{{ getLabel(key) }}:</label>
        <div>{{ value }}</div>
      </div>
    </section>

    <!-- 연락처 정보 섹션 -->
    <section class="profile-section contact-info">
      <h2 class="section-title">連絡先情報</h2>
      <div class="info-item" v-for="(value, key) in contactInfo" :key="key">
        <label>{{ getLabel(key) }}:</label>
        <div>{{ value }}</div>
      </div>
    </section>

    <!-- 급여 정보 섹션 -->
    <section class="profile-section salary-info">
      <h2 class="section-title">給与情報</h2>
      <div class="info-item" v-for="(value, key) in salaryInfo" :key="key">
        <label>{{ getLabel(key) }}:</label>
        <div>{{ value }}</div>
      </div>
    </section>

    <!-- 사회보험 및 연금 정보 섹션 -->
    <section class="profile-section insurance-info">
      <h2 class="section-title">社会保険・年金情報</h2>
      <div class="info-item" v-for="(value, key) in insuranceInfo" :key="key">
        <label>{{ getLabel(key) }}:</label>
        <div>{{ value }}</div>
      </div>
    </section>

    <!-- 기타 정보 섹션 -->
    <section class="profile-section other-info">
      <h2 class="section-title">その他情報</h2>
      <div class="info-item" v-for="(value, key) in otherInfo" :key="key">
        <label>{{ getLabel(key) }}:</label>
        <div v-if="!editOther">{{ value }}</div>
        <input v-else v-model="otherInfo[key]" />
      </div>
      <button @click="toggleEdit('other')" class="action-btn">
        {{ editOther ? '保存' : '編集' }}
      </button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editOther: false, // Only editable section
      personalInfo: {
        name: '山田 太郎',
        dob: '1990-01-01',
        gender: '男',
        joinDate: '2015-04-01',
        leaveDate: '',
        employmentType: '正社員',
        department: '営業部',
        position: 'マネージャー',
      },
      contactInfo: {
        address: '東京都新宿区1-2-3',
        phone: '090-1234-5678',
        email: 'example@example.com',
      },
      salaryInfo: {
        baseSalary: '300,000円',
        allowances: '通勤手当: 10,000円',
        accountInfo: '三菱UFJ銀行、新宿支店、普通口座、1234567890',
      },
      insuranceInfo: {
        pensionNumber: '123-45-67890',
        healthInsurance: '123456789',
        employmentInsurance: '987654321',
        dependents: '妻(田中 花子)',
      },
      otherInfo: {
        skills: 'JavaScript, Vue.js',
        emergencyContact: '田中 太郎, 090-2345-6789',
        introduction: '技術者として10年以上の経験があります。',
      }
    };
  },
  methods: {
    toggleEdit(section) {
      // Only allow editing of the otherInfo section
      if (section === 'other') {
        this.editOther = !this.editOther;
      }
    },
    getLabel(key) {
      const labels = {
        name: '名前',
        dob: '生年月日',
        gender: '性別',
        joinDate: '入社日',
        leaveDate: '退職日',
        employmentType: '雇用形態',
        department: '部署',
        position: '役職',
        address: '住所',
        phone: '電話番号',
        email: 'メールアドレス',
        baseSalary: '基本給',
        allowances: '支給・控除情報',
        accountInfo: '給与振込口座',
        pensionNumber: '年金番号',
        healthInsurance: '健康保険番号',
        employmentInsurance: '雇用保険番号',
        dependents: '扶養情報',
        skills: '資格・スキル',
        emergencyContact: '緊急連絡先',
        introduction: '自己紹介',
      };
      return labels[key];
    }
  }
};
</script>

<style scoped>
.profile-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8f9fa;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: #343a40;
  margin-bottom: 20px;
}

.profile-section {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-size: 1.75rem;
  color: #007bff;
  margin-bottom: 15px;
  font-weight: 500;
}

.info-item {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

.info-item label {
  font-weight: bold;
  color: #555;
  margin-bottom: 5px;
}

.info-item div, .info-item input {
  font-size: 16px;
  padding: 10px;
  background-color: #f1f3f5;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: background-color 0.3s, border-color 0.3s;
}

.info-item input {
  width: 100%;
}

.info-item input:focus {
  background-color: #ffffff;
  border-color: #007bff;
}

button.action-btn {
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s, transform 0.2s ease-in-out;
}

button.action-btn:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

button.action-btn:active {
  transform: translateY(1px);
}

@media (max-width: 768px) {
  .profile-page {
    padding: 15px;
  }
  .profile-section {
    padding: 15px;
  }
}
</style>
