import type { MatchRecord } from "@/data/matches";

export function sortUpcoming(matches: MatchRecord[]) {
  return [...matches].sort((a, b) => a.date.localeCompare(b.date));
}

export function sortFinished(matches: MatchRecord[]) {
  return [...matches].sort((a, b) => b.date.localeCompare(a.date));
}

export function getResultTone(match: MatchRecord) {
  if (!match.score || !match.homeTeam || !match.awayTeam) {
    return "neutral" as const;
  }

  const isBusijeHome = match.homeTeam === "ФК Бусије";
  const busijeGoals = isBusijeHome ? match.score.home : match.score.away;
  const opponentGoals = isBusijeHome ? match.score.away : match.score.home;

  if (busijeGoals > opponentGoals) {
    return "win" as const;
  }

  if (busijeGoals < opponentGoals) {
    return "loss" as const;
  }

  return "draw" as const;
}
