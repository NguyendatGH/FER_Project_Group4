import React from 'react';
import { useAuth } from '../context/AuthContext';
import TemplatesGrid from '../components/Template/TemplateGrid';
import styles from '../css/components/AdminDashboard.module.css';

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1>Admin Dashboard</h1>
        <div className={styles.welcome}>
          Welcome back, <span>{user.firstName || user.email}</span>
          {user.role === 'admin' && <span className={styles.badge}>Admin</span>}
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <h3>Total Templates</h3>
          <p>24</p>
        </div>
        <div className={styles.statCard}>
          <h3>Published</h3>
          <p>18</p>
        </div>
        <div className={styles.statCard}>
          <h3>Drafts</h3>
          <p>6</p>
        </div>
        <div className={styles.statCard}>
          <h3>Featured</h3>
          <p>5</p>
        </div>
      </div>

      <TemplatesGrid />
    </div>
  );
};

export default AdminDashboard;