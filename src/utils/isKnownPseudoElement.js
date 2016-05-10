/**
 * Check is known pseudo-element
 *
 * @param {string} Pseudo-element
 * @return {boolean} If `true`, the unit is known
 */

// https://drafts.csswg.org/selectors-4/#overview
const knownPseudoElements = new Set([
  "before", "after", "first-line", "first-letter",
  "selection", "spelling-error", "grammar-error",
  "backdrop", "marker", "placeholder",
  "shadow", "content",
])

export default function (pseudoElement) {
  return knownPseudoElements.has(pseudoElement.toLowerCase())
}
