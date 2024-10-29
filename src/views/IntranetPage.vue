<template>
  <div class="container">
    <h1 class="title">イントラネット</h1>
    <p class="intro">★本ページは<b>社員専用</b>となります。</p>
    <div v-if="isLoggedIn" class="user-info">
      <p>{{ userName }} さん、お疲れ様です！</p>
      <button @click="logout" class="logout-button">ログアウト</button>
    </div>
        <!-- 打刻機能 -->
        <div v-if="isLoggedIn" class="clock-in-out-section">
          <button @click="clockIn" class="clock-button clock-in-button">出勤</button>
          <button @click="clockOut" class="clock-button clock-out-button">退勤</button>
    </div>
    <div class="clock-log">
      <h2 class="section-title">打刻履歴</h2>
      <ul>
        <li v-for="(log, index) in clockLogs" :key="index">
          {{ log }}
        </li>
      </ul>
    </div>
    <div class="links-section">
      <h2 class="section-title">お知らせ</h2>
      <div v-if="announcements.length" class="announcements">
        <ul>
          <li v-for="(announcement, index) in announcements" :key="index" class="announcement-item">
            <div class="announcement-header">
              <h3>{{ announcement.title }}</h3>
              <span class="date-time">{{ announcement.dateTime }}</span>
            </div>
            <p class="announcement-summary">{{ truncateText(announcement.summary, 30) }}</p>
            <button @click="openDialog(announcement)" class="view-details-button">詳細を見る</button>
            <button v-if="isLoggedIn && userName === 'admin'" @click="deleteAnnouncement(announcement._id)" class="delete-button">削除</button>
          </li>
        </ul>
      </div>
      <div v-else>
        <p>お知らせはありません。</p>
      </div>
      <div v-if="isLoggedIn && userName === 'admin'" class="announcement-form">
        <input v-model="newAnnouncementTitle" type="text" placeholder="タイトル" />
        <textarea v-model="newAnnouncementSummary" placeholder="内容"></textarea>
        <button @click="addAnnouncement">追加</button>
      </div>
    </div>
    <div class="links-section">
      <h2 class="section-title">社内リソース</h2>
      <div class="links">
        <a href="https://drive.google.com/drive/folders/1TI5F-hQyM7cLS1hYvy368Pl8cdKS1dFu?usp=sharing" 
          target="_blank" rel="noopener noreferrer" class="link">イントラネット</a>
        <a href="https://webmail1022.onamae.ne.jp/" 
          target="_blank" rel="noopener noreferrer" class="link">メール</a>
      </div>
    </div>
    <div class="links-section">
      <h2 class="section-title">教育コンテンツ</h2>
      <div class="horizontal-buttons">
        <router-link to="/Educationweb" @click="handleLinkClick">
          <div class="button-container">
            <img src="/images/yokoso.jpg" alt="WEBアプリケーション" class="button-image" />
            <div class="button-text">WEBアプリ</div>
          </div>
        </router-link>
        <router-link to="/Educationwin" @click="handleLinkClick">
          <div class="button-container">
            <img src="/images/yokoso.jpg" alt="WINDOWSアプリケーション" class="button-image" />
            <div class="button-text">WINDOWSアプリ</div>
          </div>
        </router-link>
        <router-link to="/Educationmobile" @click="handleLinkClick">
          <div class="button-container">
            <img src="/images/yokoso.jpg" alt="モバイルアプリケーション" class="button-image" />
            <div class="button-text">モバイルアプリ</div>
          </div>
        </router-link>
        <router-link to="/Educationdb" @click="handleLinkClick">
          <div class="button-container">
            <img src="/images/yokoso.jpg" alt="データベース" class="button-image" />
            <div class="button-text">データベース</div>
          </div>
        </router-link>
        <router-link to="/Educationserver" @click="handleLinkClick">
          <div class="button-container">
            <img src="/images/yokoso.jpg" alt="サーバー構築" class="button-image" />
            <div class="button-text">サーバー構築</div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="links-section">
      <h2 class="section-title">ドキュメント管理</h2>
      <div class="links">
        <a href="https://git-scm.com/downloads" 
          target="_blank" rel="noopener noreferrer" class="link">GIT</a>
        <a href="https://tortoisesvn.net/downloads.html" 
          target="_blank" rel="noopener noreferrer" class="link">SVN</a>
        <a href="https://filezilla-project.org/download.php?type=client" 
          target="_blank" rel="noopener noreferrer" class="link">FTP</a>          
      </div>
    </div>
    <div class="links-section">
      <h2 class="section-title">プロジェクト管理</h2>
      <div class="links">
        <a href="https://www.atlassian.com/ja/try/cloud/signup?bundle=jira-software" 
          target="_blank" rel="noopener noreferrer" class="link">Jira ソフトウェア  </a>
        <a href="https://www.redmine.org/projects/redmine/wiki/Download" 
          target="_blank" rel="noopener noreferrer" class="link">redmine ソフトウェア</a>
      </div>
    </div>
    <div class="links-section">
      <h2 class="section-title">業務ツール</h2>
      <div class="links">
        <a href="https://sourceforge.net/projects/sakura-editor/files/latest/download" 
          target="_blank" rel="noopener noreferrer" class="link">サクラエディタ</a>
        <a href="https://sourceforge.net/projects/winmerge/files/stable/2.16.42.1/WinMerge-2.16.42.1-Setup.exe/download?use_mirror=nchc"
          target="_blank" rel="noopener noreferrer" class="link">WINMERGE（差分チェック）</a>
        <a href="https://accounts.secure.freee.co.jp/sessions/new?redirect_url=https%3A%2F%2Fsecure.freee.co.jp%2Fusers%2Fafter_login&service_name=accounting&sign_up_url=https%3A%2F%2Faccounts.secure.freee.co.jp%2Fsign_up%3Finitial_service%3Daccounting%26redirect_url%3Dhttps%253A%252F%252Fsecure.freee.co.jp%252Fsign_up%252Fcompany_setting%253Ffrom%253Dsign_up%2523%252F1%26service_name%3Daccounting%26verification_type%3Dcode&last_lp=___login&referral=" 
          target="_blank" rel="noopener noreferrer" class="link">社内会計システム freee</a>
        <a href="https://accounts.secure.freee.co.jp/sessions/new?redirect_url=https%3A%2F%2Fsecure.freee.co.jp%2Fusers%2Fafter_login&service_name=accounting&sign_up_url=https%3A%2F%2Faccounts.secure.freee.co.jp%2Fsign_up%3Finitial_service%3Daccounting%26redirect_url%3Dhttps%253A%252F%252Fsecure.freee.co.jp%252Fsign_up%252Fcompany_setting%253Ffrom%253Dsign_up%2523%252F1%26service_name%3Daccounting%26verification_type%3Dcode&last_lp=___login&referral=" 
          target="_blank" rel="noopener noreferrer" class="link">勤怠管理システム freee</a>
        <a href="https://accounts.secure.freee.co.jp/sessions/new?redirect_url=https%3A%2F%2Fsecure.freee.co.jp%2Fusers%2Fafter_login&service_name=accounting&sign_up_url=https%3A%2F%2Faccounts.secure.freee.co.jp%2Fsign_up%3Finitial_service%3Daccounting%26redirect_url%3Dhttps%253A%252F%252Fsecure.freee.co.jp%252Fsign_up%252Fcompany_setting%253Ffrom%253Dsign_up%2523%252F1%26service_name%3Daccounting%26verification_type%3Dcode&last_lp=___login&referral=" 
          target="_blank" rel="noopener noreferrer" class="link">人事評価システム</a>
      </div>
    </div>
    <div v-if="dialogVisible" class="dialog-overlay">
      <div class="dialog-content">
        <h3>{{ dialogAnnouncement.title }}</h3>
        <p>{{ dialogAnnouncement.summary }}</p>
        <p class="date-time">{{ dialogAnnouncement.dateTime }}</p>
        <button @click="dialogVisible = false" class="close-button">閉じる</button>
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'IntranetPage',
  data() {
    return {
      isLoggedIn: false,
      userName: '',
      announcements: [],
      users: [],
      clockLogs: [],
      newAnnouncementTitle: '',
      newAnnouncementSummary: '',
      dialogVisible: false,
      dialogAnnouncement: {}
    };
  },
  methods: {
    // 出勤打刻メソッド
    clockIn() {
      const now = new Date().toLocaleString();
      this.clockLogs.push(`出勤: ${now}`);
      alert('出勤打刻しました。');
    },

    // 退勤打刻メソッド
    clockOut() {
      const now = new Date().toLocaleString();
      this.clockLogs.push(`退勤: ${now}`);
      alert('退勤打刻しました。');
    },
    logout() {
      sessionStorage.removeItem('authToken');
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('name');
      this.isLoggedIn = false;
      this.$router.push('/login');
    },
    truncateText(text, maxLength) {
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + '・・・';
      }
      return text;
    },
    async fetchAnnouncements() {
      try {
        const response = await fetch('https://dxpro.onrender.com/announcements');
        const data = await response.json();
        this.announcements = data;
      } catch (error) {
        console.error('Error fetching announcements:', error);
      }
    },
    async addAnnouncement() {
      if (this.newAnnouncementTitle && this.newAnnouncementSummary) {
        const now = new Date().toISOString().replace('T', ' ').slice(0, 16);
        const newAnnouncement = {
          title: this.newAnnouncementTitle,
          summary: this.newAnnouncementSummary,
          dateTime: now
        };

        try {
          const response = await fetch('https://dxpro.onrender.com/announcements', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAnnouncement)
          });
          const data = await response.json();
          this.announcements.push(data);
          this.newAnnouncementTitle = '';
          this.newAnnouncementSummary = '';
        } catch (error) {
          console.error('Error adding announcement:', error);
        }
      }
    },
    openDialog(announcement) {
      this.dialogAnnouncement = announcement;
      this.dialogVisible = true;
    },
    async deleteAnnouncement(id) {
      try {
        const response = await fetch(`https://dxpro.onrender.com/announcements/${id}`, {
          method: 'DELETE'
        });
        
        const textResponse = await response.text(); // Get response as text
        console.log('Response Text:', textResponse);
        
        if (response.ok) {
          this.announcements = this.announcements.filter(announcement => announcement._id !== id);
          alert('Announcement deleted successfully.');
        } else {
          alert('Failed to delete announcement: ' + textResponse);
        }
      } catch (error) {
        console.error('Error deleting announcement:', error);
        alert('Error deleting announcement.');
      }
    }
  },
  mounted() {
    const authToken = sessionStorage.getItem('authToken');
    const name = sessionStorage.getItem('name');
    if (authToken) {
      this.isLoggedIn = true;
      this.userName = name || 'ゲスト';
      this.fetchAnnouncements();
    } else {
      this.$router.push('/login');
    }
    window.scrollTo(0, 0);
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f0f4f8;
  position: relative;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.user-info {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.user-info p {
  margin-right: 20px;
  font-size: 18px;
  color: #333;
}

.logout-button {
  padding: 8px 16px;
  background-color: #ff4d4d;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.logout-button:hover {
  background-color: #cc0000;
}

.title {
  font-size: 32px;
  font-weight: bold;
  color: #0056b3;
  margin-bottom: 20px;
  border-bottom: 4px solid #0056b3;
  padding-bottom: 10px;
}

.intro {
  font-size: 20px;
  color: #555;
  position: relative;
}

.links-section {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.section-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
  border-bottom: 2px solid #007bff;
  padding-bottom: 5px;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.link {
  text-decoration: none;
  color: #007bff;
  font-size: 18px;
  padding: 10px;
  border: 2px solid #007bff;
  border-radius: 5px;
  transition: all 0.3s ease;
  display: inline-block;
}

.link:hover {
  background-color: #007bff;
  color: #ffffff;
  text-decoration: none;
  transform: scale(1.05);
}

.announcements {
  list-style: none;
  padding: 0;
}

.announcement-item {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  list-style: none;
  margin-bottom: 15px;
}

.announcement-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.date-time {
  font-size: 14px;
  color: #777;
}

.announcement-summary {
  margin: 5px 0 40px 0; /* 요약과 버튼 사이의 간격 추가 */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  max-width: 100%;
  white-space: nowrap;
}

.announcement-summary::after {
  content: '・・・';
  display: inline;
  color: #777;
  visibility: hidden;
}

.announcement-summary[data-ellipsis]::after {
  visibility: visible;
}

.announcement-form {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

.announcement-form input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.announcement-form button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.announcement-form button:hover {
  background-color: #0056b3;
}

.view-details-button {
  background-color: #007bff;
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.view-details-button:hover {
  background-color: #0056b3;
}

.announcement-form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.announcement-form input,
.announcement-form textarea {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.announcement-form button {
  padding: 8px 16px;
  background-color: #007bff;
}

.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.dialog-content {
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
}

.close-button {
  background-color: #ff4d4d;
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.close-button:hover {
  background-color: #cc0000;
}

.delete-button {
  background-color: #ff4d4d;
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
}

.delete-button:hover {
  background-color: #cc0000;
}

.horizontal-buttons {
  display: flex;
  gap: 20px; /* 버튼 사이의 간격 조정 */
  flex-wrap: wrap; /* 화면 크기에 따라 자동 줄 바꿈 */
  justify-content: center; /* 버튼들을 수평 중앙 정렬 */
}

.horizontal-buttons .link {
  text-decoration: none;
  color: #007bff;
  font-size: 20px;
  padding: 15px 30px;
  border: 3px solid #007bff;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  text-align: center;
  line-height: 1.5;
  width: 500px;
  height: 40px;
  position: relative;
}

.horizontal-buttons {
  display: flex;
  gap: 20px; /* 버튼 사이의 간격 조정 */
  flex-wrap: wrap; /* 화면 크기에 따라 자동 줄 바꿈 */
  justify-content: center; /* 버튼들을 수평 중앙 정렬 */
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 150px; /* 필요에 따라 조정 */
  padding: 10px;
  border: 3px solid #007bff;
  border-radius: 8px;
  background-color: #fff;
  transition: all 0.3s ease;
}

.button-image {
  width: 150px; /* 필요에 따라 조정 */
  height: auto;
  margin-bottom: 10px; /* 이미지와 텍스트 사이의 간격 */
}

.button-text {
  font-size: 16px;
  color: #007bff;
  font-weight: bold;
}

.button-container:hover {
  background-color: #007bff;
  color: #ffffff;
  transform: scale(1.05);
}

.button-container:hover .button-text {
  color: #ffffff;
}

.horizontal-buttons .link:hover {
  background-color: #007bff;
  color: #ffffff;
  text-decoration: none;
  transform: scale(1.05);
}

.clock-in-out-section {
  margin: 20px 0;
}

.clock-in-button {
  background-color: #90ee90; /* 연두색 */
  color: white;
  padding: 30px 50px;
  border: none;
  border-radius: 4px;
  font-size: 30px;
  cursor: pointer;
  margin-right: 10px;
}

.clock-log {
  margin-top: 20px;
}

.clock-log h2 {
  font-size: 24px;
}

.clock-log ul {
  list-style-type: none;
  padding: 0;
}

.clock-in-button:hover {
  background-color: #76c76e; /* 연두색 호버 효과 */
}

.clock-out-button {
  background-color: #ff4d4d; /* 빨간색 */
  color: white;
  padding: 30px 50px;
  border: none;
  border-radius: 4px;
  font-size: 30px;
  cursor: pointer;
  margin-right: 10px;
}

.clock-out-button:hover {
  background-color: #cc0000; /* 빨간색 호버 효과 */
}

@media (max-width: 600px) {
  .container {
    padding: 15px;
  }

  .title {
    font-size: 26px;
  }

  .intro {
    font-size: 18px;
  }

  .section-title {
    font-size: 20px;
  }

  .horizontal-buttons {
    width: 100%;
  }
  
  .link {
    font-size: 16px;
    padding: 8px;
  }

  .user-info {
    margin-top: 20px;
    justify-content: flex-end;
  }

  .button-image {
    display: none;
  }
}
</style>