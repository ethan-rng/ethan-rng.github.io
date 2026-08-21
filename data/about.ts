/**
 * The two versions of the bio, toggled on the About page.
 *
 * `short` is the elevator version, what someone skimming needs. `long` is
 * for anyone who clicked through deliberately. Keep the first paragraph of
 * each saying roughly the same thing, so the toggle reads as expanding
 * detail rather than swapping to a different person.
 *
 * The Meta / Western / Ivey facts are real; the paragraphs marked
 * placeholder are yours to write.
 */

export const shortBio: string[] = [
  "Software engineer, currently a production engineering intern at Meta working on AI infrastructure for the Ads ML Training team.",
  "Computer Science at the University of Western Ontario, alongside an HBA at Ivey Business School.",
];

export const longBio: string[] = [
  "Software engineer, currently a production engineering intern at Meta working on AI infrastructure for the Ads ML Training team. Before that I spent a summer on fault injection testing in production, and the summer before that as a Meta × MLH production engineering fellow.",
  "Placeholder paragraph: what you actually care about building, and why. This is the part worth writing in your own words; everything else on this page is facts, and this is the bit that isn't.",
  "Placeholder paragraph: the through-line across the work below, or the kind of problem you keep coming back to.",
  "Computer Science at the University of Western Ontario, alongside an HBA at Ivey Business School. I've also written a case for Ivey Publishing on the monetization of DeepSeek and other open-source AI foundation models.",
  "Outside of that, mostly cooking. There's photographic evidence further down the page.",
];

/**
 * Lead-ins for the photo walls, sitting between one set of pictures and the
 * next so the page isn't a wall of bio followed by a wall of images.
 *
 * These describe what's actually in the shots; check the `elsewhere` one,
 * since I wrote it from the photos rather than from knowing where you were.
 */
export const elsewhereIntro =
  "A trip's worth of camera roll. Torii gates in the late afternoon, go-karts threading through traffic after dark, and a candle that arrived with a handwritten note asking me to please return it.";

export const foodIntro =
  "Cooking is the hobby that actually stuck. Some of these are mine (the curry, the pork belly, the steak on a weeknight) and the rest are meals good enough that I wanted to keep a picture of them.";
