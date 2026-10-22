export interface JobApplication {
 id: string;
 company: string;
 title: string;
 status: "applied" | "interviewing" | "offered" | "rejected";
 appliedAt: string;
 createdAt: string;
}