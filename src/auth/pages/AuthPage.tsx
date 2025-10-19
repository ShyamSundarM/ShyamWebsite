import AuthTabs from "../components/AuthTabs";
import styles from "./AuthPage.module.css";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AuthPage() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.brandArea}>
          <h1 className={styles.brandTitle}>Shyam.dev</h1>
          <p className={styles.brandSubtitle}>
            A collection of apps and ideas built by me — showcasing my skills,
            creativity, and journey as a developer.
          </p>
        </div>
        <Card className={styles.featureCard}>
          <CardHeader>
            <CardTitle>Explore My Work</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className={styles.featureList}>
              <li>🚀 Scalable web apps</li>
              <li>⚙️ .NET + React integrations</li>
              <li>💡 Clean, maintainable code</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className={styles.right}>
        <div className={styles.authBox}>
          <AuthTabs />
        </div>
      </div>
    </div>
  );
}
