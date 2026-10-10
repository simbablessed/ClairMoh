import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { render, screen } from "@testing-library/react";
import { Route } from "@/routes/index";

describe("Resume and WhatsApp features", () => {
  it("has the verified resume PDF in public directory", () => {
    const resumePath = path.resolve(process.cwd(), "public", "Clair_Mutyambizi_Resume.pdf");
    expect(fs.existsSync(resumePath)).toBe(true);
    const stats = fs.statSync(resumePath);
    expect(stats.size).toBeGreaterThan(1000);
  });

  it("renders resume download and WhatsApp links on the index page", () => {
    const Component = Route.options.component;
    if (!Component) throw new Error("Component not found on Route");
    render(<Component />);

    const resumeLinks = screen.getAllByRole("link", { name: /resume/i });
    expect(resumeLinks.length).toBeGreaterThan(0);
    expect(resumeLinks.some((l) => l.getAttribute("href") === "/Clair_Mutyambizi_Resume.pdf")).toBe(
      true,
    );
    expect(
      resumeLinks.some((l) => l.getAttribute("download") === "Clair_Mutyambizi_Resume.pdf"),
    ).toBe(true);

    const whatsappLinks = screen.getAllByRole("link", { name: /whatsapp/i });
    expect(whatsappLinks.length).toBeGreaterThan(0);
    expect(whatsappLinks.some((l) => l.getAttribute("href")?.includes("wa.me/263779461370"))).toBe(
      true,
    );
  });

  it("has replaced Lovable favicon with custom CM brand favicons", () => {
    const icoPath = path.resolve(process.cwd(), "public", "favicon.ico");
    const svgPath = path.resolve(process.cwd(), "public", "favicon.svg");
    expect(fs.existsSync(icoPath)).toBe(true);
    expect(fs.existsSync(svgPath)).toBe(true);

    const svgContent = fs.readFileSync(svgPath, "utf-8");
    expect(svgContent).toContain("CM");
    expect(svgContent).not.toContain("lovable");
  });
});
