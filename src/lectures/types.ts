import type { ComponentType } from "react";

export type SlideKind = "cover" | "cards" | "practice";
export type SlideSpec = { id: string; eyebrow: string; title: string; summary: string; kind: SlideKind; points: string[]; tools: string[] };
export type SlideComponent = ComponentType;
export type Attachment = { name: string; url: string };
export type SectionMeta = { id: string; title: string };
export type SessionConfig = { id: string; session: number; title: string; releaseDate: string; accessCode: string; attachments: Attachment[]; sections: SectionMeta[] };
export type CourseConfig = { id: string; categoryId: string; categoryName: string; title: string; startDate: string; endDate: string; studentAccount: { id: string; password: string }; sessions: SessionConfig[] };
