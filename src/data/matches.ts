export type MatchStatus = "scheduled" | "finished" | "postponed" | "cancelled";

export type MatchRecord = {
  id: string;
  status: MatchStatus;
  date: string;
  time?: string;
  competition?: string;
  season?: string;
  round?: string;
  homeTeam?: string;
  awayTeam?: string;
  homeCrest?: string;
  awayCrest?: string;
  venue?: string;
  venueAddress?: string;
  score?: {
    home: number;
    away: number;
  };
  sourceUrl?: string;
  verifiedAt?: string;
};

export const upcomingMatches: MatchRecord[] = [];

export const finishedMatches: MatchRecord[] = [];
