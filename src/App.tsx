import profileData from './data/profile.json';
import projectData from './data/projects.json';
import skillData from './data/skills.json';
import experienceData from './data/experience.json';
import educationData from './data/education.json';
import achievementData from './data/achievements.json';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { useTheme } from './hooks/useTheme';
import type { AchievementItem, EducationItem, ExperienceItem, Profile, Project, SkillGroup } from './types';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const profile = profileData as Profile;
  const projects = projectData.projects as Project[];
  const skills = skillData.groups as SkillGroup[];
  const experience = experienceData.experience as ExperienceItem[];
  const education = educationData.education as EducationItem[];
  const achievements = achievementData.achievements as AchievementItem[];

  return (
    <div className="app-shell">
      <Navbar name={profile.name} theme={theme} onToggleTheme={toggleTheme} />
      <Home profile={profile} projects={projects} skills={skills} experience={experience} education={education} achievements={achievements} />
    </div>
  );
}
