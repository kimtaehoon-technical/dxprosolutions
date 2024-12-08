  <template>
    <div class="container">
      <div class="profile-menu">
      <h1 class="title">イントラネット</h1>

      <!-- 아이콘 버튼을 클릭 시 토글 -->
      <button @click="toggleProfileMenu" class="profile-toggle-button">
        <img src="/images/profile-pic.png" style="width: 50px; height: 50px; background-color: transparent;" />
      </button>

      <!-- 메뉴 토글 -->
      <div v-if="isProfileMenuVisible" class="profile-buttons">
        <button class="profile-button"><router-link to="/Profile">プロフィール</router-link></button>
        <button class="WorkReport-button"><router-link to="/WorkReport">作業報告</router-link></button>
        <button @click="logout" class="logout-button">ログアウト</button>
      </div>
    </div>

      <p class="intro">★本ページは<b>社員専用</b>となります。</p>
      <div class="current-time">
        <h2> {{ currentTime }}</h2>
      </div>
      <div v-if="isLoggedIn" class="user-info">
        <p>{{ displayedUserName }} さん、お疲れ様です！</p>
      </div>
      <!-- 打刻機能 -->
      <div v-if="isLoggedIn" class="clock-in-out-section">
        <button @click="clockIn" class="clock-button clock-in-button">出勤</button>
        <button @click="clockOut" class="clock-button clock-out-button">退勤</button>
      </div>
      <b>システムエラーが発生した場合は下記の管理者アドレスへお問い合わせしてください。</b>
      <h2><b>管理者アドレス：info@dxpro-sol.com</b></h2><br>

      <div class="links-section">
        <h2 class="section-title">お知らせ</h2>
        <div v-if="announcements.length" class="announcements">
          <div v-for="(announcement, index) in announcements" :key="index" class="announcement-card">
            <div class="announcement-header">
              <span class="announcement-icon">
                <i class="fas fa-bell"></i> <!-- 알림 아이콘 -->
              </span>
              <div>
                <h3>{{ announcement.title }}</h3>
                <span class="date-time">{{ announcement.dateTime }}</span>
              </div>
            </div>
            <p class="announcement-summary">{{ truncateText(announcement.summary, 30) }}</p>
            <div class="announcement-actions">
              <button @click="openDialog(announcement)" class="view-details-button">詳細を見る</button>
              <button v-if="isLoggedIn && userName === 'info@dxpro-sol.com'" @click="deleteAnnouncement(announcement._id)" class="delete-button">削除</button>
            </div>
          </div>
        </div>
        <div v-else>
          <p>お知らせはありません。</p>
        </div>
        <div v-if="isLoggedIn && userName === 'info@dxpro-sol.com'" class="announcement-form">
          <input v-model="newAnnouncementTitle" type="text" placeholder="タイトル" />
          <textarea v-model="newAnnouncementSummary" placeholder="内容"></textarea>
          <button @click="addAnnouncement" class="add-button">追加</button>
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
        <div class="links">
              <a href="https://dxpro-edu.web.app/" 
              target="_blank" rel="noopener noreferrer" class="link">社内教育コンテンツ</a>
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
        dialogAnnouncement: {},
        currentTime: new Date().toLocaleTimeString(), // 현재 시각 초기화
        isProfileMenuVisible: false,  // 프로필 메뉴 보임 상태
      };
    },
    computed: {
      displayedUserName() {
        const nameMap = {
          'info@dxpro-sol.com': '管理者',
          'kim_taehoon@dxpro-sol.com': '金　兌訓',
          'otomo_kento@dxpro-sol.com': '大友　健人',
          'choi_kyungjun@dxpro-sol.com': 'チェ　ギョンジュン'
        };
        return nameMap[this.userName] || this.userName; // Default to email if not found
      }
    },
    methods: {
      toggleProfileMenu() {
        this.isProfileMenuVisible = !this.isProfileMenuVisible; // 클릭 시 토글
      },
      updateTime() {
        this.currentTime = new Date().toLocaleTimeString(); // 현재 시각 업데이트
      },
      // 出勤打刻メソッド
      async clockIn() {
        console.log('111'); // 요청 수신 로그

        try {
          console.log('222'); // 요청 수신 로그

          const response = await fetch('https://dxpro.onrender.com/clocklogs/clockin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: this.userName }), // Ensure this.userName is defined
          });
          console.log(response); // 요청 수신 로그


          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          console.log('444'); // 요청 수신 로그

          const data = await response.json();
          this.clockLogs.push(`出勤: ${new Date(data.clockin).toLocaleString()}`);
          console.log('555'); // 요청 수신 로그

        } catch (error) {
          console.error('Clock-in error:', error);
        }
      },
      // 退勤打刻メソッド
      async clockOut() {
        try {
          const response = await fetch('https://dxpro.onrender.com/clocklogs/clockout', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: this.userName }) // Use userName instead of username
          });
          const data = await response.json();
          this.clockLogs.push(`退勤: ${new Date(data.clockout).toLocaleString()}`);
        } catch (error) {
          console.error('Clock-out error:', error);
        }
      },
      // 休憩開始打刻メソッド
        async breakIn() {
        console.log('111'); // 요청 수신 로그

        try {
          console.log('222'); // 요청 수신 로그

          const response = await fetch('https://dxpro.onrender.com/clocklogs/breakin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: this.userName }), // Ensure this.userName is defined
          });
          console.log(response); // 요청 수신 로그


          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          console.log('444'); // 요청 수신 로그

          const data = await response.json();
          this.clockLogs.push(`休憩開始: ${new Date(data.clockin).toLocaleString()}`);
          console.log('555'); // 요청 수신 로그

        } catch (error) {
          console.error('Clock-in error:', error);
        }
      },
      // 退勤打刻メソッド
      async breakOut() {
        try {
          const response = await fetch('https://dxpro.onrender.com/clocklogs/breakout', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: this.userName }) // Use userName instead of username
          });
          const data = await response.json();
          this.clockLogs.push(`休憩終了: ${new Date(data.clockout).toLocaleString()}`);
        } catch (error) {
          console.error('Clock-out error:', error);
        }
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
      this.interval = setInterval(this.updateTime, 1000); // 1초마다 현재 시각 업데이트
      const authToken = sessionStorage.getItem('authToken');
      const name = sessionStorage.getItem('username');
      if (authToken) {
        this.isLoggedIn = true;
        this.userName = name || 'ゲスト';
        this.fetchAnnouncements();
        sessionStorage.setItem('name', this.displayedUserName);
      } else {
        this.$router.push('/login');
      }
      window.scrollTo(0, 0);
    },
    beforeUnmount() {
      clearInterval(this.interval); // 컴포넌트가 파괴될 때 타이머 정리
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
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
  }

  .logout-button:hover {
    background-color: #cc0000;
  }
  .profile-menu {
    position: relative;
    display: inline-block;
  }
  .WorkReport-menu {
    position: relative;
    display: inline-block;
  }
  .profile-toggle-button {
    position: absolute;
    right: 0;
    top: 10%;
    cursor: pointer;
    border: none;
    display: flex;
    flex-direction: column;
  }
  
  .profile-buttons {
    position: absolute;
    top: 50%; /* Aligns below the icon */
    right: 0;
    margin-top: 15px;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 5px;
    z-index: 10;
  }

  .profile-button,
  .WorkReport-button,
  .logout-button {
    display: block;
    width: 100%;
    background: none;
    border: none;
    padding: 8px 12px;
    text-align: left;
    cursor: pointer;
  }

  .profile-button:hover,
  .WorkReport-button:hover,
  .logout-button:hover {
    background-color: #f0f0f0;
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
    background-color: #fafafa;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    margin-bottom: 40px;
  }

  .section-title {
    font-size: 28px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
    border-bottom: 3px solid #007bff;
    padding-bottom: 8px;
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
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .announcement-card {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .announcement-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }

  .announcement-header {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }

  .announcement-icon {
    font-size: 1.5rem;
    color: #007bff;
    margin-right: 12px;
  }

  .announcement-header div {
    display: flex;
    flex-direction: column;
  }

  .announcement-header h3 {
    font-size: 1.2rem;
    color: #333;
    margin: 0;
    font-weight: 600;
  }

  .date-time {
    font-size: 0.9rem;
    color: #888;
  }

  .announcement-summary {
    color: #555;
    font-size: 1rem;
    margin: 15px 0;
  }

  .announcement-actions {
    display: flex;
    justify-content: center; /* 버튼을 가로로 중앙 정렬 */
    gap: 10px;
    margin-top: 15px; /* 버튼과 카드 내용 사이에 간격 추가 */
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

  .view-details-button,
  .delete-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .view-details-button:hover,
  .delete-button:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
  .announcement-form {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .announcement-form input,
  .announcement-form textarea {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 1rem;
    width: 100%;
  }

  .announcement-form button {
    padding: 12px 25px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6); /* 어두운 배경으로 다이얼로그 강조 */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999; /* 다이얼로그를 다른 콘텐츠 위에 표시 */
  }

  .dialog-content {
    background-color: #ffffff;
    padding: 25px;
    border-radius: 8px;
    width: 90%;
    max-width: 600px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
    animation: fadeIn 0.3s ease-out;
  }

  .dialog-title {
    font-size: 1.6rem;
    color: #333;
    margin-bottom: 15px;
    font-weight: bold;
    text-align: center;
  }

  .dialog-summary {
    font-size: 1.1rem;
    color: #555;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .dialog-date-time {
    font-size: 0.9rem;
    color: #888;
    text-align: center;
    margin-bottom: 20px;
  }

  .dialog-actions {
    display: flex;
    justify-content: center; /* 버튼을 가로로 중앙 정렬 */
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
  .break-in-button:hover {
    background-color: #d3c416; /* 연두색 호버 효과 */
  }

  .break-out-button {
    background-color: #ff7ff2; /* 빨간색 */
    color: white;
    padding: 30px 50px;
    border: none;
    border-radius: 4px;
    font-size: 30px;
    cursor: pointer;
    margin-right: 10px;
  }

  .break-out-button:hover {
    background-color: #fa20e0; /* 빨간색 호버 효과 */
  }
  .break-in-button {
    background-color: #ebc907; /* 연두색 */
    color: white;
    padding: 30px 50px;
    border: none;
    border-radius: 4px;
    font-size: 30px;
    cursor: pointer;
    margin-right: 10px;
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
  .current-time {
    font-size: 3em;
    margin-right: 20px
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
    .current-time {
      font-size: 2em;
    }
    .logout-button{
      width: 110px;
      height: 40px;
      font-size: 15px;
    }

    .clock-in-button{
      width: 250px;
      height: 80px;
      font-size: 20px;
      margin-bottom: 10px;
    }

    .clock-out-button{
      width: 250px;
      height: 80px;
      font-size: 20px;
      margin-bottom: 10px;
    }

    .break-in-button{
      width: 250px;
      height: 80px;
      font-size: 20px;
      margin-bottom: 10px;
    }

    .break-out-button{
      width: 250px;
      height: 80px;
      font-size: 20px;
      margin-bottom: 10px;
    }
    .user-info {
      display: flex;
      flex-direction: column; /* 세로로 배치 */
      margin-right: auto;
    }

    .user-info p {
      font-size: 16px;
      margin-right: 10px; /* 텍스트와 버튼 간의 간격 줄이기 */
    }

    .profile-button, .logout-button {
      font-size: 14px; /* 모바일에서 버튼 텍스트 크기 축소 */
      width: 100%; /* 각 버튼의 너비를 45%로 설정하여 화면 크기에 맞게 배치 */
      margin-right: 5%;
      margin-top: 5%;
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  </style>