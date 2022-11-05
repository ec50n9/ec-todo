import { defineStore } from "pinia";

type ThemeColors = {
  // 主色调
  primaryColor: string;
  // 深色搭配色
  darkPrimaryColor: string;
  // 浅色搭配色
  lightPrimaryColor: string;
  // 强调色
  accentColor: string;
  // 分割线颜色
  dividerColor: string;

  // 普通文本颜色
  lightText: string;
  // 着重文本颜色
  lightPrimaryText: string;
  // 次要文本颜色
  lightSecondaryText: string;

  darkText: string;
  darkPrimaryText: string;
  darkSecondaryText: string;
};

export const useThemeStore = defineStore("theme", {
  state: () => ({
    colors: {
      primaryColor: "#6366F1",
      darkPrimaryColor: "#4338CA",
      lightPrimaryColor: "#A5B4FC",
      accentColor: "#F9A8D4",
      dividerColor: "#D1D5DB",
      lightText: "#F3F4F6",
      lightPrimaryText: "#FFFFFF",
      lightSecondaryText: "#D1D5DB",
      darkText: "#374151",
      darkPrimaryText: "#111827",
      darkSecondaryText: "#6B7280",
    } as ThemeColors,
  }),
});
