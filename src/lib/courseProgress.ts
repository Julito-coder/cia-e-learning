const ACTIVE_USER_STORAGE_KEY = 'cia-active-user-id';
const COURSE_PROGRESS_KEY = 'course-progress';
const COURSE_PLAYER_PROGRESS_PREFIX = 'course-player-progress';

function getScopedKey(baseKey: string) {
  if (typeof window === 'undefined') return baseKey;
  const activeUserId = window.localStorage.getItem(ACTIVE_USER_STORAGE_KEY);
  return activeUserId ? `${baseKey}:${activeUserId}` : baseKey;
}

export function setActiveProgressUser(userId: string | null | undefined) {
  if (typeof window === 'undefined') return;

  if (userId) {
    window.localStorage.setItem(ACTIVE_USER_STORAGE_KEY, userId);
    return;
  }

  window.localStorage.removeItem(ACTIVE_USER_STORAGE_KEY);
}

export function readCourseProgressMap(): Record<string, any> {
  if (typeof window === 'undefined') return {};

  try {
    return JSON.parse(window.localStorage.getItem(getScopedKey(COURSE_PROGRESS_KEY)) || '{}');
  } catch {
    return {};
  }
}

export function writeCourseProgressMap(progress: Record<string, any>) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(getScopedKey(COURSE_PROGRESS_KEY), JSON.stringify(progress));
}

function getCoursePlayerProgressKey(courseId: string) {
  return `${getScopedKey(COURSE_PLAYER_PROGRESS_PREFIX)}:${courseId}`;
}

export function readCoursePlayerProgress(courseId: string) {
  if (typeof window === 'undefined') return null;

  try {
    const raw = window.localStorage.getItem(getCoursePlayerProgressKey(courseId));
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function writeCoursePlayerProgress(courseId: string, progress: Record<string, any>) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(getCoursePlayerProgressKey(courseId), JSON.stringify(progress));
}

export function clearCoursePlayerProgress(courseId: string) {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(getCoursePlayerProgressKey(courseId));
}