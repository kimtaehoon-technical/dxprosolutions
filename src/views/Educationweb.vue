<template>
  <div class="container">
    <h1 class="title">教育コンテンツ</h1>
    <p class="intro">★本ページは<b>社員専用</b>となります。</p>
    <div v-if="isLoggedIn" class="user-info">
      <p>{{ userName }} さん、お疲れ様です！</p>
      <button @click="logout" class="logout-button">ログアウト</button>
    </div>
    <div class="links-section">
      <h2 class="section-title">JAVASCRIPT</h2>
      <div class="links">
        <a href="https://drive.google.com/drive/folders/1TI5F-hQyM7cLS1hYvy368Pl8cdKS1dFu?usp=sharing" 
          target="_blank" rel="noopener noreferrer" class="link">Vue.js</a>
        <a href="https://webmail1022.onamae.ne.jp/" 
          target="_blank" rel="noopener noreferrer" class="link">Angular.js</a>
        <a href="https://webmail1022.onamae.ne.jp/" 
          target="_blank" rel="noopener noreferrer" class="link">React.js</a>          
      </div>
    </div>
    <div class="links-section">
      <h2 class="section-title">JAVA</h2>
      <div class="links">
        <a href="https://drive.google.com/drive/folders/1TI5F-hQyM7cLS1hYvy368Pl8cdKS1dFu?usp=sharing" 
          target="_blank" rel="noopener noreferrer" class="link">Springフレームワーク</a>
        <a href="https://webmail1022.onamae.ne.jp/" 
          target="_blank" rel="noopener noreferrer" class="link">Strutsフレームワーク</a>
        <a href="https://webmail1022.onamae.ne.jp/" 
          target="_blank" rel="noopener noreferrer" class="link">Hibernate</a>          
      </div>
    </div>
    <div class="links-section">
      <h2 class="section-title">データベース</h2>
      <div class="links">
        <a href="https://drive.google.com/drive/folders/1TI5F-hQyM7cLS1hYvy368Pl8cdKS1dFu?usp=sharing" 
          target="_blank" rel="noopener noreferrer" class="link">Oracle Database</a>
        <a href="https://webmail1022.onamae.ne.jp/" 
          target="_blank" rel="noopener noreferrer" class="link">MySQL</a>
        <a href="https://webmail1022.onamae.ne.jp/" 
          target="_blank" rel="noopener noreferrer" class="link">Microsoft SQL Server</a>          
        <a href="https://webmail1022.onamae.ne.jp/" 
          target="_blank" rel="noopener noreferrer" class="link">PostgreSQL</a>
        <a href="https://webmail1022.onamae.ne.jp/" 
          target="_blank" rel="noopener noreferrer" class="link">MongoDB</a>
        <a href="https://webmail1022.onamae.ne.jp/" 
          target="_blank" rel="noopener noreferrer" class="link">Microsoft Access</a>
        <a href="https://webmail1022.onamae.ne.jp/" 
          target="_blank" rel="noopener noreferrer" class="link">DB2</a>
      </div>
    </div>
    <div class="links-section">
      <h2 class="section-title">サーバー構築</h2>
      <div class="links">
        <a href="https://drive.google.com/drive/folders/1TI5F-hQyM7cLS1hYvy368Pl8cdKS1dFu?usp=sharing" 
          target="_blank" rel="noopener noreferrer" class="link">Azure</a>
        <a href="https://webmail1022.onamae.ne.jp/" 
          target="_blank" rel="noopener noreferrer" class="link">AWS</a>
        <a href="https://webmail1022.onamae.ne.jp/" 
          target="_blank" rel="noopener noreferrer" class="link">Vercel</a>          
        <a href="https://webmail1022.onamae.ne.jp/" 
          target="_blank" rel="noopener noreferrer" class="link">Firebase</a>
        <a href="https://webmail1022.onamae.ne.jp/" 
          target="_blank" rel="noopener noreferrer" class="link">Netlify</a>
      </div>
    </div>
    <div class="links-section">
      <h2 class="section-title">他の開発言語</h2>
      <div class="links">
        <a href="https://drive.google.com/drive/folders/1TI5F-hQyM7cLS1hYvy368Pl8cdKS1dFu?usp=sharing" 
          target="_blank" rel="noopener noreferrer" class="link">PHP</a>
        <a href="https://webmail1022.onamae.ne.jp/" 
          target="_blank" rel="noopener noreferrer" class="link">Python</a>
        <a href="https://webmail1022.onamae.ne.jp/" 
          target="_blank" rel="noopener noreferrer" class="link">HTML</a>          
        <a href="https://webmail1022.onamae.ne.jp/" 
          target="_blank" rel="noopener noreferrer" class="link">CSS</a>
        <a href="https://webmail1022.onamae.ne.jp/" 
          target="_blank" rel="noopener noreferrer" class="link">C#</a>
        <a href="https://webmail1022.onamae.ne.jp/" 
          target="_blank" rel="noopener noreferrer" class="link">C言語</a>
        <a href="https://webmail1022.onamae.ne.jp/" 
          target="_blank" rel="noopener noreferrer" class="link">TypeScript</a>
        <a href="https://webmail1022.onamae.ne.jp/" 
          target="_blank" rel="noopener noreferrer" class="link">Swift/Object-c</a>
        <a href="https://webmail1022.onamae.ne.jp/" 
          target="_blank" rel="noopener noreferrer" class="link">Kotlin/Java</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EducationWeb',
  data() {
    return {
      isLoggedIn: false,
      userName: '',
      announcements: [],
      newAnnouncementTitle: '',
      newAnnouncementSummary: '',
      dialogVisible: false,
      dialogAnnouncement: {}
    };
  },
  methods: {
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
    window.scrollTo(0, 0);

    const authToken = sessionStorage.getItem('authToken');
    const name = sessionStorage.getItem('name');
    if (authToken) {
      this.isLoggedIn = true;
      this.userName = name || 'ゲスト';
      this.fetchAnnouncements();
    } else {
      this.$router.push('/login');
    }
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

  .link {
    font-size: 16px;
    padding: 8px;
  }

  .user-info {
    margin-top: 20px;
    justify-content: flex-end;
  }
}
</style>