import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

// Auto-copy partner logos from C:\Users\jteng\Pictures\Logo to public/images/logos
try {
  const sourceDir = "C:\\Users\\jteng\\Pictures\\Logo";
  const destDir = path.join(process.cwd(), "public", "images", "logos");

  if (fs.existsSync(sourceDir)) {
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    const files = fs.readdirSync(sourceDir);
    files.forEach(file => {
      const srcPath = path.join(sourceDir, file);
      const destPath = path.join(destDir, file);
      
      const stat = fs.statSync(srcPath);
      if (stat.isFile()) {
        fs.copyFileSync(srcPath, destPath);
      }
    });
    console.log("Successfully synchronized partner logos.");
  }
} catch (error) {
  console.error("Failed to copy logos:", error);
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
